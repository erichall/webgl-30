(ns webgl-30.webgl)

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
      (set! (.-width canvas) d-width))))

(defn set-gl-viewport!
  [gl]
  (let [width (aget gl "canvas" "width")
        height (aget gl "canvas" "height")]
    (.viewport gl 0 0 width height)))

(defn clear-canvas!
  [gl]
  (.clearColor gl 0 0 0 0)
  ;(.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
  (.clear gl (.-COLOR_BUFFER_BIT gl)))

(defn create-buffer
  [gl]
  (.createBuffer gl))

(defn bind-buffer
  [{:keys [gl] :as state} buffer buffer-type]
  (.bindBuffer gl buffer-type buffer)
  state)

(defn buffer-data
  "bufferData copies the `src-data` to the GPU."
  [gl {:keys [target src-data usage]}]
  (.bufferData gl target src-data usage))

(defn set-attribute
  [gl {:keys [location size type normalize stride offset]}]
  ;; Turn the variable on inside our GLSL VS program above.
  (.enableVertexAttribArray gl location)
  ;; Describe how to take the data from our buffer and give it to our shader.
  (.vertexAttribPointer gl location size type normalize stride offset))

(defn get-uniform-location
  [gl program name]
  (.getUniformLocation gl program name))

(defn set-uniform
  [^js gl program {:keys [type name values transpose]}]
  (let [location (get-uniform-location gl program name)
        values (if (some? transpose) (cons transpose [values]) values)]
    (if (clojure.string/ends-with? type "v")
      (if (vector? values)
        (js-invoke gl type location values)
        (apply js-invoke gl type location values))
      (.apply (aget gl type) gl (into-array (cons location values))))))

(defn set-geometry!
  "geo is a list of vertices"
  [{:keys [gl] :as state} geo]
  (buffer-data gl {:target   (.-ARRAY_BUFFER gl)
                   :src-data (js/Float32Array. geo)
                   :usage    (.-STATIC_DRAW gl)})
  state)

(defn set-triangle!
  [gl]
  (.bufferData gl (.-ARRAY_BUFFER gl) (js/Float32Array. [0 -100
                                                         150 125
                                                         -175 100
                                                         ]) (.-STATIC_DRAW gl)))

(defn set-rectangle!
  "Create a rectangle by using two triangles"
  [gl {:keys [x y width height]}]
  (let [x1 x
        x2 (+ x width)
        y1 y
        y2 (+ y height)]
    (buffer-data gl {:target   (.-ARRAY-BUFFER gl)
                     :src-data (js/Float32Array. [x1, y1,
                                                  x2, y1,
                                                  x1, y2,
                                                  x1, y2,
                                                  x2, y1,
                                                  x2, y2])
                     :usage    (.-STATIC_DRAW gl)})))





