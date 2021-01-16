(ns webgl-30.webgl)

(defn not-nil?
  [x]
  (not (nil? x)))

(defn get-aspect
  [gl]
  (/ (aget gl "canvas" "clientWidth") (aget gl "canvas" "clientHeight")))

(defn create-shader
  [gl type source]
  (let [shader (.createShader gl type)]
    (.shaderSource gl shader source)
    (.compileShader gl shader)
    (let [success (.getShaderParameter gl shader (.-COMPILE_STATUS gl))]
      (if success
        shader
        (do
          (js/console.log (.getShaderInfoLog gl shader))
          (.deleteShader gl shader))))))

(defn create-program
  [gl vertex-shader fragment-shader]
  (let [program (.createProgram gl)]
    (.attachShader gl program vertex-shader)
    (.attachShader gl program fragment-shader)
    (.linkProgram gl program)
    (let [success (.getProgramParameter gl program (.-LINK_STATUS gl))]
      (if success
        program
        (do
          (js/console.log (.getProgramInfoLog gl program))
          (.deleteProgram gl program))))))

(defn resize-canvas-to-display-size
  [gl]
  (let [canvas (.-canvas gl)
        css-to-real-pixels 1                                ;(or (.-devicePixelRatio js/window) 1)
        d-width (Math/floor (* (.-clientWidth canvas) css-to-real-pixels))
        d-height (Math/floor (* (.-clientHeight canvas) css-to-real-pixels))]
    (when-not (or (= (.-width canvas) d-width)
                  (= (.-height canvas) d-height))
      (set! (.-height canvas) d-height)
      (set! (.-width canvas) d-width))
    gl))

(defn get-canvas-height
  [gl]
  (aget gl "canvas" "height"))

(defn get-canvas-width
  [gl]
  (aget gl "canvas" "width"))

(defn set-gl-viewport!
  [gl]
  (let [width (get-canvas-width gl)
        height (get-canvas-height gl)]
    (.viewport gl 0 0 width height)
    gl))

(defn clear-canvas!
  ([gl]
   (clear-canvas! gl false))
  ([gl clear-depth?]
   (.clearColor gl 0 0 0 0)
   (if clear-depth?
     (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
     (.clear gl (.-COLOR_BUFFER_BIT gl)))
   gl))

(defn bind-buffer
  [^js gl buffer target]
  (.bindBuffer gl target buffer)
  gl)

(defn buffer-data
  "bufferData copies the `src-data` to the GPU."
  [^js gl {:keys [target src-data usage]}]
  {:pre  [(some? gl)]
   :post [(= gl %)]}
  (.bufferData gl target src-data usage)
  gl)

(defn create-buffer
  [gl {:keys [target data usage]}]
  (let [buffer (.createBuffer gl)]
    (-> (bind-buffer gl buffer target)
        (buffer-data {:target   target
                      :src-data data
                      :usage    usage}))
    {:buffer buffer
     :target target
     :data   data
     :usage  usage}))


(defn set-attribute!
  [gl program {:keys [name size type normalize stride offset buffer-info]}]
  (let [location (.getAttribLocation gl program name)]
    ;; Turn the variable on inside our GLSL VS program above.
    (.enableVertexAttribArray gl location)

    (bind-buffer gl (:buffer buffer-info) (:target buffer-info))
    ;; Describe how to take the data from our buffer and give it to our shader.
    (.vertexAttribPointer gl location size type normalize stride offset)
    gl))

(defn set-attributes!
  [gl program attributes]
  (doseq [attribute attributes]
    (set-attribute! gl program attribute))
  gl)

(defn get-uniform-location
  [gl program name]
  (.getUniformLocation gl program name))

(defn set-uniform!
  [^js gl program {:keys [type values transpose name]}]
  (let [location (get-uniform-location gl program name)
        values (if (some? transpose) (cons transpose [values]) values)]
    (if (clojure.string/ends-with? type "v")
      (if (vector? values)
        (js-invoke gl type location values)
        (apply js-invoke gl type location values))
      (.apply (aget gl type) gl (into-array (cons location values))))
    gl))

(defn set-uniforms!
  [gl program uniforms]
  {:pre  [(some? gl) (some? program)]
   :post [(= gl %)]}
  (doseq [uniform uniforms]
    (set-uniform! gl program uniform))
  gl)

(defn get-context
  [canvas-id]
  (->
    (str "#" canvas-id)
    js/document.querySelector
    (.getContext "webgl")))

;; funny error
;; :GL_INVALID_OPERATION : glDrawArrays: attempt to access out of range vertices in attribute 0
;; wrong size on the attribute.... 3 instead of 2....
;; another one
;;  INVALID_VALUE: enableVertexAttribArray: index out of range
;;  INVALID_VALUE: vertexAttribPointer: index out of range
;;    SOL => wrong name on attribute :)

(defn draw-arrays!
  [gl {:keys [draw-type offset count]}]
  (.drawArrays gl draw-type offset count)
  gl)

(defn prepare-canvas!
  ([gl] (prepare-canvas! gl false))
  ([gl clear-depth?]
   (->
     (resize-canvas-to-display-size gl)
     set-gl-viewport!
     (clear-canvas! clear-depth?))
   gl))

(defn use-program!
  [gl program]
  (.useProgram gl program)
  gl)

(defn enable-features!
  [gl features]
  (doseq [f (or features [])]
    (.enable gl f))
  gl)

(defn draw-scene!
  [{:keys [gl objects-to-draw clear-depth?]}]

  (prepare-canvas! gl clear-depth?)

  (doseq [{:keys [program attributes uniforms element features]} (vals objects-to-draw)]
    (-> (use-program! gl program)
        (enable-features! features)
        (set-uniforms! program (vals uniforms))
        (set-attributes! program (vals attributes))
        (draw-arrays! element)))
  gl)

(defn link-shaders!
  "Create a WebGL Program with a Vertex shader and a Fragment shader."
  [gl {:keys [vs fs]}]
  (let [vs (create-shader gl (.-VERTEX_SHADER gl) vs)
        fs (create-shader gl (.-FRAGMENT_SHADER gl) fs)
        program (create-program gl vs fs)]
    program))

(defn get-attribute
  [{:keys [attributes]} attribute-name]
  (-> (filter (fn [{:keys [name]}] (= name attribute-name)) attributes)
      first))

(defn get-rectangle
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

(defn create-texture!
  [gl texture-data]
  (let [texture (.createTexture gl)]
    (.bindTexture gl (first texture-data) texture)
    (println texture-data)
    (apply js-invoke gl "texImage2D" texture-data)
    ;(.texImage2D gl target level internal-format width height border format type pixels)
    gl))

(defn create-texture-with-mipmap
  [gl texture-data]
  (-> (create-texture! gl texture-data)
      (.generateMipmap (first texture-data)))
  gl)





