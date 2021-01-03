(ns webgl-30.core
  (:require [webgl-30.component :refer [app]]
            [reagent.dom :as rd]))

(defonce state-atom (atom nil))
(def initial-state
  {:canvas-id        "main-canvas"
   :canvas-dim       {:width  400
                      :height 400}
   :gl               nil
   :program          nil
   :attributes       []
   :uniforms         []
   :translation-rect {:x          0
                      :y          0
                      :z          0
                      :scale-x    1
                      :scale-y    1
                      :scale-z    1
                      :rotation-x 0
                      :rotation-y 0
                      :rotation-z 0
                      :width      200
                      :height     50}
   :active-shape     :f-shape-3d
   :f-shape-3d       {:offset 0
                      :count  (* 16 6)
                      :shape  [
                               ;; left column front
                               0, 0, 0,
                               30, 0, 0,
                               0, 150, 0,
                               0, 150, 0,
                               30, 0, 0,
                               30, 150, 0,

                               ;; top rung front
                               30, 0, 0,
                               100, 0, 0,
                               30, 30, 0,
                               30, 30, 0,
                               100, 0, 0,
                               100, 30, 0,

                               ;; middle rung front
                               30, 60, 0,
                               67, 60, 0,
                               30, 90, 0,
                               30, 90, 0,
                               67, 60, 0,
                               67, 90, 0,

                               ;; left column back
                               0, 0, 30,
                               30, 0, 30,
                               0, 150, 30,
                               0, 150, 30,
                               30, 0, 30,
                               30, 150, 30,

                               ;; top rung back
                               30, 0, 30,
                               100, 0, 30,
                               30, 30, 30,
                               30, 30, 30,
                               100, 0, 30,
                               100, 30, 30,

                               ;; middle rung back
                               30, 60, 30,
                               67, 60, 30,
                               30, 90, 30,
                               30, 90, 30,
                               67, 60, 30,
                               67, 90, 30,

                               ;; top
                               0, 0, 0,
                               100, 0, 0,
                               100, 0, 30,
                               0, 0, 0,
                               100, 0, 30,
                               0, 0, 30,

                               ;; top rung right
                               100, 0, 0,
                               100, 30, 0,
                               100, 30, 30,
                               100, 0, 0,
                               100, 30, 30,
                               100, 0, 30,

                               ;; under top rung
                               30, 30, 0,
                               30, 30, 30,
                               100, 30, 30,
                               30, 30, 0,
                               100, 30, 30,
                               100, 30, 0,

                               ;; between top rung and middle
                               30, 30, 0,
                               30, 30, 30,
                               30, 60, 30,
                               30, 30, 0,
                               30, 60, 30,
                               30, 60, 0,

                               ;; top of middle rung
                               30, 60, 0,
                               30, 60, 30,
                               67, 60, 30,
                               30, 60, 0,
                               67, 60, 30,
                               67, 60, 0,

                               ;; right of middle rung
                               67, 60, 0,
                               67, 60, 30,
                               67, 90, 30,
                               67, 60, 0,
                               67, 90, 30,
                               67, 90, 0,

                               ;; bottom of middle rung.
                               30, 90, 0,
                               30, 90, 30,
                               67, 90, 30,
                               30, 90, 0,
                               67, 90, 30,
                               67, 90, 0,

                               ;; right of bottom
                               30, 90, 0,
                               30, 90, 30,
                               30, 150, 30,
                               30, 90, 0,
                               30, 150, 30,
                               30, 150, 0,

                               ;; bottom
                               0, 150, 0,
                               0, 150, 30,
                               30, 150, 30,
                               0, 150, 0,
                               30, 150, 30,
                               30, 150, 0,

                               ;; left side
                               0, 0, 0,
                               0, 0, 30,
                               0, 150, 30,
                               0, 0, 0,
                               0, 150, 30,
                               0, 150, 0
                               ]}
   :f-shape-3d-color {:offset 0
                      :count  18
                      :shape  [
                               ;; left column front
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,

                               ;; top rung front
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,

                               ;; middle rung front
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,
                               200, 70, 120,

                               ;; left column back
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,

                               ;; top rung back
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,

                               ;; middle rung back
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,
                               80, 70, 200,

                               ;; top
                               70, 200, 210,
                               70, 200, 210,
                               70, 200, 210,
                               70, 200, 210,
                               70, 200, 210,
                               70, 200, 210,

                               ;; top rung right
                               200, 200, 70,
                               200, 200, 70,
                               200, 200, 70,
                               200, 200, 70,
                               200, 200, 70,
                               200, 200, 70,

                               ;; under top rung
                               210, 100, 70,
                               210, 100, 70,
                               210, 100, 70,
                               210, 100, 70,
                               210, 100, 70,
                               210, 100, 70,

                               ;; between top rung and middle
                               210, 160, 70,
                               210, 160, 70,
                               210, 160, 70,
                               210, 160, 70,
                               210, 160, 70,
                               210, 160, 70,

                               ;; top of middle rung
                               70, 180, 210,
                               70, 180, 210,
                               70, 180, 210,
                               70, 180, 210,
                               70, 180, 210,
                               70, 180, 210,

                               ;; right of middle rung
                               100, 70, 210,
                               100, 70, 210,
                               100, 70, 210,
                               100, 70, 210,
                               100, 70, 210,
                               100, 70, 210,

                               ;; bottom of middle rung.
                               76, 210, 100,
                               76, 210, 100,
                               76, 210, 100,
                               76, 210, 100,
                               76, 210, 100,
                               76, 210, 100,

                               ;; right of bottom
                               140, 210, 80,
                               140, 210, 80,
                               140, 210, 80,
                               140, 210, 80,
                               140, 210, 80,
                               140, 210, 80,

                               ;; bottom
                               90, 130, 110,
                               90, 130, 110,
                               90, 130, 110,
                               90, 130, 110,
                               90, 130, 110,
                               90, 130, 110,

                               ;; left side
                               160, 160, 220,
                               160, 160, 220,
                               160, 160, 220,
                               160, 160, 220,
                               160, 160, 220,
                               160, 160, 220]}
   :f-shape          {:offset 0
                      :count  18
                      :shape  [
                               ; left column
                               0 0
                               30 0
                               0 150
                               0 150
                               30 0
                               30 150
                               ; top rung
                               30 0
                               100 0
                               30 30
                               30 30
                               100 0
                               100 30
                               ; middle rung
                               30 60
                               67 60
                               30 90
                               30 90
                               67 60
                               67 90]}})
(declare draw-scene! render-component)

(when (nil? @state-atom)
  (reset! state-atom initial-state)
  (add-watch state-atom
             :game-loop
             (fn [_ _ _]
               (render-component @state-atom)
               (draw-scene! @state-atom))))

(def shaders
  {
   :vs-2d "
   attribute vec2 a_position;

   uniform mat3 u_matrix;

    void main() {
      gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
    }
   "
   :vs                                                      ;; 3d
          "
            attribute vec4 a_position;
            attribute vec4 a_color;

            uniform mat4 u_matrix;

            varying vec4 v_color; // we can pass this to our fragment shader

            void main() {
                gl_Position = u_matrix * a_position;

                // pass the color to our fragment shader
                v_color = a_color;
            }
   "

   :fs    "precision mediump float;
     varying vec4 v_color; // passe from our vertex shader

     void main() {
       gl_FragColor = v_color;
     }
   "
   })

(defn deg->rad
  [a]
  (* a (/ Math/PI 180)))

(defn rad->deg
  [a]
  (* a (/ 180 Math/PI)))

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
  (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl)
                     (.-DEPTH_BUFFER_BIT gl)
                     )))

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

(defn random-int
  [range]
  (Math/floor (* range (Math/random))))

(def matrix-operation-2d
  {:translation (fn [tx ty]
                  [1 0 0
                   0 1 0
                   tx ty 1])
   :rotation    (fn [angle-radians]
                  (let [c (Math/cos angle-radians)
                        s (Math/sin angle-radians)]
                    [c (- s) 0
                     s c 0
                     0 0 1]))
   :scaling     (fn [sx sy]
                  [sx 0 0
                   0 sy 0
                   0 0 1])
   :projection  (fn [width height]
                  ; flip y-axis so 0 is at top
                  [(/ 2 width) 0 0
                   0 (/ (- 2) height) 0
                   -1 1 1])
   :multiply    (fn [a b]
                  (let [a00 (nth a (+ (* 0 3) 0))
                        a01 (nth a (+ (* 0 3) 1))
                        a02 (nth a (+ (* 0 3) 2))

                        a10 (nth a (+ (* 1 3) 0))
                        a11 (nth a (+ (* 1 3) 1))
                        a12 (nth a (+ (* 1 3) 2))

                        a20 (nth a (+ (* 2 3) 0))
                        a21 (nth a (+ (* 2 3) 1))
                        a22 (nth a (+ (* 2 3) 2))

                        b00 (nth b (+ (* 0 3) 0))
                        b01 (nth b (+ (* 0 3) 1))
                        b02 (nth b (+ (* 0 3) 2))

                        b10 (nth b (+ (* 1 3) 0))
                        b11 (nth b (+ (* 1 3) 1))
                        b12 (nth b (+ (* 1 3) 2))

                        b20 (nth b (+ (* 2 3) 0))
                        b21 (nth b (+ (* 2 3) 1))
                        b22 (nth b (+ (* 2 3) 2))]
                    [(+ (* b00 a00) (* b01 a10) (* b02 a20))
                     (+ (* b00 a01) (* b01 a11) (* b02 a21))
                     (+ (* b00 a02) (* b01 a12) (* b02 a22))
                     (+ (* b10 a00) (* b11 a10) (* b12 a20))
                     (+ (* b10 a01) (* b11 a11) (* b12 a21))
                     (+ (* b10 a02) (* b11 a12) (* b12 a22))
                     (+ (* b20 a00) (* b21 a10) (* b22 a20))
                     (+ (* b20 a01) (* b21 a11) (* b22 a21))
                     (+ (* b20 a02) (* b21 a12) (* b22 a22))]))})
(defn cos-sin
  [angle]
  [(Math/cos angle) (Math/sin angle)])

(defn matrix-multiply-1d
  ([a b dim]
   ;(->> (for [i (range dim)
   ;           j (range dim)]
   ;       (reduce (fn [s k]
   ;                 (+ s
   ;                    (* (nth a (+ (* i dim) k))
   ;                       (nth b (+ (* k dim) j)))))
   ;               0 (range dim)))
   ;     (into []))
   (let [a00 (nth a (+ (* 0 4) 0))
         a01 (nth a (+ (* 0 4) 1))
         a02 (nth a (+ (* 0 4) 2))
         a03 (nth a (+ (* 0 4) 3))

         a10 (nth a (+ (* 1 4) 0))
         a11 (nth a (+ (* 1 4) 1))
         a12 (nth a (+ (* 1 4) 2))
         a13 (nth a (+ (* 1 4) 3))

         a20 (nth a (+ (* 2 4) 0))
         a21 (nth a (+ (* 2 4) 1))
         a22 (nth a (+ (* 2 4) 2))
         a23 (nth a (+ (* 2 4) 3))

         a30 (nth a (+ (* 3 4) 0))
         a31 (nth a (+ (* 3 4) 1))
         a32 (nth a (+ (* 3 4) 2))
         a33 (nth a (+ (* 3 4) 3))

         b00 (nth b (+ (* 0 4) 0))
         b01 (nth b (+ (* 0 4) 1))
         b02 (nth b (+ (* 0 4) 2))
         b03 (nth b (+ (* 0 4) 3))

         b10 (nth b (+ (* 1 4) 0))
         b11 (nth b (+ (* 1 4) 1))
         b12 (nth b (+ (* 1 4) 2))
         b13 (nth b (+ (* 1 4) 3))

         b20 (nth b (+ (* 2 4) 0))
         b21 (nth b (+ (* 2 4) 1))
         b22 (nth b (+ (* 2 4) 2))
         b23 (nth b (+ (* 2 4) 3))

         b30 (nth b (+ (* 3 4) 0))
         b31 (nth b (+ (* 3 4) 1))
         b32 (nth b (+ (* 3 4) 2))
         b33 (nth b (+ (* 3 4) 3))
         ]


     ;b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
     ;b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
     ;b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
     ;b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
     [(+ (* b00 a00) (* b01 a10) (* b02 a20) (* b03 a30))
      (+ (* b00 a01) (* b01 a11) (* b02 a21) (* b03 a31))
      (+ (* b00 a02) (* b01 a12) (* b02 a22) (* b03 a32))
      (+ (* b00 a03) (* b01 a13) (* b02 a23) (* b03 a33))

      (+ (* b10 a00) (* b11 a10) (* b12 a20) (* b13 a30))
      (+ (* b10 a01) (* b11 a11) (* b12 a21) (* b13 a31))
      (+ (* b10 a02) (* b11 a12) (* b12 a22) (* b13 a32))
      (+ (* b10 a03) (* b11 a13) (* b12 a23) (* b13 a33))

      (+ (* b20 a00) (* b21 a10) (* b22 a20) (* b23 a30))
      (+ (* b20 a01) (* b21 a11) (* b22 a21) (* b23 a31))
      (+ (* b20 a02) (* b21 a12) (* b22 a22) (* b23 a32))
      (+ (* b20 a03) (* b21 a13) (* b22 a23) (* b23 a33))

      (+ (* b30 a00) (* b31 a10) (* b32 a20) (* b33 a30))
      (+ (* b30 a01) (* b31 a11) (* b32 a21) (* b33 a31))
      (+ (* b30 a02) (* b31 a12) (* b32 a22) (* b33 a32))
      (+ (* b30 a03) (* b31 a13) (* b32 a23) (* b33 a33))
      ])
   )
  ([a b] (matrix-multiply-1d a b 4)))

(def matrix-operation-3d
  {:translation (fn [tx ty tz]
                  [1 0 0 0
                   0 1 0 0
                   0 0 1 0
                   tx ty tz 1])
   :rotation-x  (fn [angle-radians]
                  (let [[c s] (cos-sin angle-radians)]
                    [1 0 0 0
                     0 c s 0
                     0 (- s) c 0
                     0 0 0 1]))
   :rotation-y  (fn [angle-radians]
                  (let [[c s] (cos-sin angle-radians)]
                    [c 0 (- s) 0
                     0 1 0 0
                     s 0 c 0
                     0 0 0 1
                     ]))
   :rotation-z  (fn [angle-radians]
                  (let [[c s] (cos-sin angle-radians)]
                    [c s 0 0
                     (- s) c 0 0
                     0 0 1 0
                     0 0 0 1]))
   :scaling     (fn [sx sy sz]
                  [sx 0 0 0
                   0 sy 0 0
                   0 0 sz 0
                   0 0 0 1])
   :projection  (fn [width height depth]
                  ; flip y-axis so 0 is at top
                  [(/ 2 width) 0 0 0
                   0 (/ (- 2) height) 0 0
                   0 0 (/ 2 depth) 0
                   -1 1 0 1])
   })
(defn xy-radians
  [angle]
  (let [radians (/ (* angle Math/PI) 180)]
    [(Math/sin radians) (Math/cos radians)]))

(defn compute-matrices
  [{:keys [translation-rect gl]} {:keys [translation rotation-x rotation-y rotation-z scaling projection]}]
  (let [{:keys [x y z scale-x scale-y scale-z]} translation-rect
        translation-matrix (translation x y z)
        rotation-x-matrix (rotation-x (:rotation-x translation-rect))
        rotation-y-matrix (rotation-y (:rotation-y translation-rect))
        rotation-z-matrix (rotation-z (:rotation-z translation-rect))
        scale-matrix (scaling scale-x scale-y scale-z)
        projection-matrix (projection (aget gl "canvas" "width") (aget gl "canvas" "height") 400)]
    (-> (matrix-multiply-1d projection-matrix translation-matrix)
        (matrix-multiply-1d rotation-x-matrix)
        (matrix-multiply-1d rotation-y-matrix)
        (matrix-multiply-1d rotation-z-matrix)
        (matrix-multiply-1d scale-matrix)
        )
    ))

(defn initialize-gl!
  "Create a WebGL Program with a Vertex shader and a Fragment shader."
  [gl {:keys [vs fs]}]
  (let [vs (create-shader gl (.-VERTEX_SHADER gl) vs)
        fs (create-shader gl (.-FRAGMENT_SHADER gl) fs)
        program (create-program gl vs fs)]

    ;; we only have to bind the buffer once
    ;(bind-buffer gl (.-ARRAY_BUFFER gl))
    program))

(defn set-attribute
  [gl {:keys [location size type normalize stride offset]}]
  ;; Turn the variable on inside our GLSL VS program above.
  (.enableVertexAttribArray gl location)
  ;; Describe how to take the data from our buffer and give it to our shader.
  (.vertexAttribPointer gl location size type normalize stride offset))

(defn set-uniform
  [^js gl program {:keys [type name values transpose]}]
  (let [location (.getUniformLocation gl program name)
        values (if (some? transpose) (cons transpose [values]) values)]
    (if (clojure.string/ends-with? type "v")
      (if (vector? values)
        (js-invoke gl type location values)
        (apply js-invoke gl type location values))
      (.apply (aget gl type) gl (into-array (cons location values))))))

(defn draw-scene!
  [{:keys [gl attributes uniforms program] :as state}]

  (resize-canvas-to-display-size gl)
  (set-gl-viewport! gl)
  (clear-canvas! gl)
  (.enable gl (.-CULL_FACE gl))
  (.enable gl (.-DEPTH_TEST gl))


  ;; the program contains our two shaders, vertex and fragment shader. tell WebGL that we want to run them!
  (.useProgram gl program)

  (doseq [uniform uniforms]
    (set-uniform gl program uniform))

  (doseq [{:keys [buffer buffer-type] :as attribute} attributes]
    (bind-buffer state buffer buffer-type)
    (set-attribute gl attribute))

  (let [{:keys [offset count]} (get state (:active-shape state))]

    ;; actually draw it
    (.drawArrays gl (.-TRIANGLES gl) offset count))
  state)

(defn set-uniform-values
  [{:keys [uniforms]} uniform-name values]
  (reduce (fn [acc {:keys [name] :as uniform}]
            (if (= uniform-name name)
              (conj acc (assoc uniform :values values))
              (conj acc uniform))) [] uniforms))

(defn handle-event!
  [name data]
  (condp = name
    :data-change (swap! state-atom (fn [state]
                                     (let [{:keys [path value]} data
                                           state (assoc-in state path value)]
                                       (->> (compute-matrices state matrix-operation-3d)
                                            (set-uniform-values state "u_matrix")
                                            (assoc state :uniforms)))))
    :canvas-did-mount (swap! state-atom (fn [{:keys [attributes uniforms canvas-id] :as state}]
                                          (let [canvas (js/document.querySelector (str "#" canvas-id))
                                                gl (.getContext canvas "webgl")
                                                program (initialize-gl! gl shaders)
                                                state (assoc state :gl gl)
                                                position-buffer (create-buffer gl)
                                                color-buffer (create-buffer gl)
                                                ]
                                            (-> (assoc state :program program)
                                                (assoc :attributes (conj attributes
                                                                         {:location    (.getAttribLocation gl program "a_position")
                                                                          :size        3
                                                                          :type        (.-FLOAT gl)
                                                                          :normalize   false
                                                                          :stride      0
                                                                          :offset      0
                                                                          :buffer      position-buffer
                                                                          :buffer-type (.-ARRAY-BUFFER gl)
                                                                          }
                                                                         {:location    (.getAttribLocation gl program "a_color")
                                                                          :size        3
                                                                          :type        (.-UNSIGNED_BYTE gl)
                                                                          :normalize   true
                                                                          :stride      0
                                                                          :offset      0
                                                                          :buffer      color-buffer
                                                                          :buffer-type (.-ARRAY-BUFFER gl)
                                                                          }
                                                                         ))
                                                (assoc :uniforms (conj uniforms
                                                                       {:type   "uniform4fv"
                                                                        :name   "u_color"
                                                                        :values [0.3 0.8 0 1]}
                                                                       {:type      "uniformMatrix4fv"
                                                                        :name      "u_matrix"
                                                                        :transpose false
                                                                        :values    (compute-matrices state matrix-operation-3d)}))
                                                (bind-buffer position-buffer (.-ARRAY_BUFFER gl))
                                                (set-geometry! (get-in state [(:active-shape state) :shape]))
                                                (bind-buffer color-buffer (.-ARRAY_BUFFER gl))
                                                (set-geometry! (get-in state [:f-shape-3d-color :shape]))
                                                )
                                            )))



    nil))

(defn render-component
  [state]
  (rd/render [app {:state         state
                   :trigger-event handle-event!}]
             (. js/document (getElementById "app"))))

(defn init! []
  (render-component @state-atom))

(defn reload! []
  (render-component @state-atom))

