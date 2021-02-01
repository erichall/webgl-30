(ns webgl-30.webgl-id2)

(defn- gl-invoke
  [gl fn args]
  (let [res (apply js-invoke gl fn args)]
    (if res
      res
      gl)))

(defn get-context
  [canvas-id]
  (-> (js/document.getElementById canvas-id)
      (.getContext "webgl")))

(defn get-canvas
  [gl]
  (aget gl "canvas"))

(defn canvas-height
  [gl]
  (aget gl "canvas" "height"))

(defn canvas-width
  [gl]
  (aget gl "canvas" "width"))


(defn shader-source [gl shader source] (.shaderSource gl shader source) gl)
(defn compile-shader [gl shader] (.compileShader gl shader))
(defn get-shader-parameter [gl shader param] (.getShaderParameter gl shader param))
(defn get-shader-info-log [gl shader] (.getShaderInfoLog gl shader))
(defn load-shader
  "Create a WebGL shader object"
  [gl type source]
  (let [shader (.createShader gl type)]
    (doto gl
      (shader-source shader source)
      (compile-shader shader))

    (if-not (get-shader-parameter gl shader (.-COMPILE_STATUS gl))
      (println "Failed to compile shader: " (get-shader-info-log gl shader))
      shader)))

(defn- cp [gl] (.createProgram gl))
(defn link-program [gl program] (.linkProgram gl program))
(defn attach-shader [gl program s] (.attachShader gl program s))
(defn get-program-parameter [gl program param] (.getProgramParameter gl program param))
(defn get-program-info-log [gl program] (.getProgramInfoLog gl program))
(defn create-program
  [gl vertex-shader fragment-shader]
  (let [vs (load-shader gl (.-VERTEX_SHADER gl) vertex-shader)
        fs (load-shader gl (.-FRAGMENT_SHADER gl) fragment-shader)]

    (when-not (or fs vs)
      (println "Unable to load shaders..."))

    (let [program (cp gl)]
      (when-not program
        (println "Unable to create program..."))


      (doto gl
        (attach-shader program vs)
        (attach-shader program fs)
        (link-program program))

      (if-not (get-program-parameter gl program (.-LINK_STATUS gl))
        (println "Unable to link program..." (get-program-info-log gl program))
        program))))

(defn use-program [gl program] (.useProgram gl program))
(defn init-shaders
  "Create a program with the given shaders and make it current.
  Returns the program"
  [gl vs fs]
  (let [program (create-program gl vs fs)]
    (use-program gl program)
    program))


(defn clear-color!
  [gl & colors]
  (gl-invoke gl "clearColor" colors))

(defn clear!
  [gl & bits]
  (gl-invoke gl "clear" [(apply bit-or bits)]))

(defn draw-arrays!
  [gl & args]
  (gl-invoke gl "drawArrays" args))

(defn- get-location
  [gl program type name]
  (let [loc (gl-invoke gl type [program name])]
    (if (< loc 0)
      (println "Failed to get location of " name " of type " type)
      loc)))

(defn get-attribute-location
  [gl program name]
  (get-location gl program "getAttribLocation" name))

(defn get-uniform-location
  [gl program name]
  (get-location gl program "getUniformLocation" name))

(defn vertex-attrib-invoke
  [gl attrib location args]
  {:pre [(some? location)]}
  (gl-invoke gl (str "vertexAttrib" attrib) (cons location args)))

(defn vertex-attrib-3f [gl location & args] (vertex-attrib-invoke gl "3f" location args))
(defn vertex-attrib-1f [gl location & args] (vertex-attrib-invoke gl "1f" location args))

(defn uniform4f [gl location & args] (gl-invoke gl "uniform4f" (cons location args)))
(defn uniform2f [gl location & args] (gl-invoke gl "uniform2f" (cons location args)))

(defn create-buffer
  [gl]
  (.createBuffer gl))

(defn bind-buffer!
  [gl target buffer]
  (.bindBuffer gl target buffer))

(defn buffer-data!
  "Allocate storage and write the data specified by data to the buffer object bound to target."
  [gl target data usage]
  (.bufferData gl target data usage))

(defn vertex-attrib-pointer
  [gl & args]
  (gl-invoke gl "vertexAttribPointer" args))

(defn enable-vertex-attrib-array!
  [gl & location]
  (gl-invoke gl "enableVertexAttribArray" location))

(defn initialize-vertex-buffer!
  "Five steps to pass data to a vertex shader
    1) Create a buffer.
    2) Bind that buffer.
    3) Write data to that buffer.
    4) Assign the buffer to an attribute.
    5) Enable the assignment."
  [gl {:keys [target data usage attribute]}]
  (let [buffer (create-buffer gl)
        target (or target (.-ARRAY_BUFFER gl))
        usage (or usage (.-STATIC_DRAW gl))]
    (when-not buffer
      (println "Failed to create a buffer object"))

    ;; bind the buffer object to the target.
    (bind-buffer! gl target buffer)


    (when (> (.-length data) 0)
      ;; write data into the buffer
      (buffer-data! gl target data usage))

    ;; assign the buffer object bound to `target` to an attribute variable
    (let [{:keys [location size type normalized stride offset]
           :or   {type       (.-FLOAT gl)
                  normalized false
                  stride     0
                  offset     0}} attribute]
      (doto gl
        (vertex-attrib-pointer location size type normalized stride offset)
        ;; enable the assignment
        (enable-vertex-attrib-array! location)))

    {:buffer buffer
     :target target
     :data   data
     :usage  usage}))

(defn refresh-vertex-buffer!
  [gl {:keys [buffer target data usage]}]
  (doto gl
    (bind-buffer! target buffer)
    (buffer-data! target data usage)))

(defn attribute
  [gl program {:keys [name size type normalized stride offset]}]
  {:location   (get-attribute-location gl program name)
   :size       size
   :type       (or type (.-FLOAT gl))
   :normalized (or normalized false)
   :stride     (or stride 0)
   :offset     (or offset 0)})

(defn uniform
  [gl program {:keys [name]}]
  {:location (get-uniform-location gl program name)})

(defn set-viewport!
  ([gl]
   (let [width (canvas-width gl)
         height (canvas-height gl)]
     (.viewport gl 0 0 width height)
     gl))
  ([gl width height]
   (if (and (some? width) (some? height))
     (do (.viewport gl 0 0 width height) gl)
     (set-viewport! gl))))

(defn rect
  [{:keys [x y width height]}]
  (let [x1 x
        x2 (+ x width)
        y1 y
        y2 (+ y height)]
    [x1 y1
     x2 y1
     x1 y2
     x1 y2
     x2 y1
     x2 y2]))

