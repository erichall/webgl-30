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

(defn get-attribute-location
  [gl name]
  (let [loc (gl-invoke gl "getAttribLocation" name)]
    (if (< 0 loc)
      (println "Failed to get location of " name)
      loc)))

(defn vertex-attrib-3f
  [gl location & args]
  (gl-invoke gl "vertexAttrib3f" (cons location args)))
