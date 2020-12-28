(ns webgl-tutorial.bare-bone)

(defn init! [])
(defn reload! [])

(def canvas (js/document.querySelector "#main"))
(def gl (.getContext canvas "webgl"))

(def shaders
  {
   :vs "
   attribute vec2 a_position;
   uniform vec2 u_resolution;

    void main() {
      vec2 zeroToOne = a_position / u_resolution;
      vec2 zeroToTwo = zeroToOne * 2.0;
      vec2 clipSpace = zeroToTwo - 1.0;

      gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    }
   "
   :fs "precision mediump float;
     uniform vec4 u_color;
     void main() {
       gl_FragColor = u_color;
     }
   "
   })

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
        css-to-real-pixels (or (.-devicePixelRatio js/window) 1)
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
  (.clear gl (.-COLOR_BUFFER_BIT gl)))

(defn set-rectangle!
  [gl x y width height]
  (let [x1 x
        x2 (+ x width)
        y1 y
        y2 (+ y height)]
    ;; bufferData can be called since we have t bounded....
    (.bufferData gl (.-ARRAY_BUFFER gl)
                 (js/Float32Array. [x1 y1
                                    x2 y1
                                    x1 y2
                                    x1 y2
                                    x2 y1
                                    x2 y2])
                 (.-STATIC_DRAW gl))))

(defn random-int
  [range]
  (Math/floor (* range (Math/random))))

(defn initialize-gl!
  [gl]
  (let [vs (create-shader gl (.-VERTEX_SHADER gl) (:vs shaders))
        fs (create-shader gl (.-FRAGMENT_SHADER gl) (:fs shaders))
        program (create-program gl vs fs)
        ]
    program
    ))

(defn draw-scene!
  [gl program]
  (let [position-attribute-location (.getAttribLocation gl program "a_position")
        uniform-location (.getUniformLocation gl program "u_resolution")
        position-buffer (.createBuffer gl)]
    (resize-canvas-to-display-size gl)
    (set-gl-viewport! gl)
    (clear-canvas! gl)
    (.useProgram gl program)

    ;; tell webgl how to take data from our buffer
    (.enableVertexAttribArray gl position-attribute-location)

    ;; bind position-buffer to some webgl global scope..
    (.bindBuffer gl (.-ARRAY_BUFFER gl) position-buffer)

    (.uniform2f gl uniform-location (aget gl "canvas" "width") (aget gl "canvas" "height"))
    (.bindBuffer gl (.-ARRAY_BUFFER gl) position-buffer)
    (let [size 2
          type (.-FLOAT gl)
          normalize false
          stride 0
          offset 0]
      (.vertexAttribPointer gl position-attribute-location size type normalize stride offset))

    (let [uniform-color-location (.getUniformLocation gl program "u_color")]
      (doseq [ii (range 0 10)]
        (set-rectangle! gl (random-int 300) (random-int 300) (random-int 300) (random-int 300))
        (.uniform4f gl uniform-color-location (Math/random) (Math/random) (Math/random) 1)
        (.drawArrays gl (.-TRIANGLES gl) 0 6)
        ))
    )
  )

(let [program (initialize-gl! gl)]
  (draw-scene! gl program)

  ;(let [primitive-type (.-TRIANGLES gl)
  ;      offset 0
  ;      count 6
  ;      ]
  ;  (.drawArrays gl primitive-type offset count))

  )




