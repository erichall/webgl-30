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
   :translation-rect {:x        0
                      :y        0
                      :scale-x  1
                      :scale-y  1
                      :rotation 0
                      :width    200
                      :height   50}
   :active-shape     :f-shape
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
   :vs "
   attribute vec2 a_position;

   uniform mat3 u_matrix;

    void main() {
      gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
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
  (.clear gl (.-COLOR_BUFFER_BIT gl)))

(defn bind-buffer
  "Create and initialize a WebGL buffer that can store data.
    bindBuffer binds the gl object to the specified buffer.
    bufferData copies the `src-data` to the GPU.
    "
  [gl buffer-type]
  (let [buffer (.createBuffer gl)]
    (.bindBuffer gl buffer-type buffer)
    buffer))

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

(defn xy-radians
  [angle]
  (let [radians (/ (* angle Math/PI) 180)]
    [(Math/sin radians) (Math/cos radians)]))

(defn compute-matrices
  [{:keys [translation-rect gl]} {:keys [translation rotation scaling multiply projection]}]
  (let [{:keys [x y scale-x scale-y]} translation-rect
        translation-matrix (translation x y)
        rotation-matrix (rotation (:rotation translation-rect))
        scale-matrix (scaling scale-x scale-y)
        projection-matrix (projection (aget gl "canvas" "width") (aget gl "canvas" "height"))]
    (-> (multiply projection-matrix translation-matrix)
        (multiply rotation-matrix)
        (multiply scale-matrix))))

(defn initialize-gl!
  "Create a WebGL Program with a Vertex shader and a Fragment shader."
  [gl {:keys [vs fs]}]
  (let [vs (create-shader gl (.-VERTEX_SHADER gl) vs)
        fs (create-shader gl (.-FRAGMENT_SHADER gl) fs)
        program (create-program gl vs fs)]

    ;; we only have to bind the buffer once
    (bind-buffer gl (.-ARRAY_BUFFER gl))
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
      (apply js-invoke gl type location values)
      (.apply (aget gl type) gl (into-array (cons location values))))))

(defn draw-scene!
  [{:keys [gl attributes uniforms program] :as state}]
  (resize-canvas-to-display-size gl)
  (set-gl-viewport! gl)
  (clear-canvas! gl)

  ;; the program contains our two shaders, vertex and fragment shader. tell WebGL that we want to run them!
  (.useProgram gl program)

  (doseq [uniform uniforms]
    (set-uniform gl program uniform))

  (doseq [attribute attributes]
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
    :x-change (swap! state-atom (fn [state]
                                  (-> (assoc-in state [:translation-rect :x] data)
                                      (assoc :uniforms (set-uniform-values state "u_matrix" (compute-matrices state matrix-operation-2d))))))
    :y-change (swap! state-atom (fn [state]
                                  (-> (assoc-in state [:translation-rect :y] data)
                                      (assoc :uniforms (set-uniform-values state "u_matrix" (compute-matrices state matrix-operation-2d))))))
    :rotation-change (swap! state-atom (fn [state]
                                         (-> (assoc-in state [:translation-rect :rotation] data)
                                             (assoc :uniforms (set-uniform-values state "u_matrix" (compute-matrices state matrix-operation-2d))))))
    :scale-x-change (swap! state-atom (fn [state]
                                        (-> (assoc-in state [:translation-rect :scale-x] data)
                                            (assoc :uniforms (set-uniform-values state "u_matrix" (compute-matrices state matrix-operation-2d))))))
    :scale-y-change (swap! state-atom (fn [state]
                                        (-> (assoc-in state [:translation-rect :scale-y] data)
                                            (assoc :uniforms (set-uniform-values state "u_matrix" (compute-matrices state matrix-operation-2d))))))
    :canvas-did-mount (swap! state-atom (fn [{:keys [attributes uniforms canvas-id] :as state}]
                                          (let [canvas (js/document.querySelector (str "#" canvas-id))
                                                gl (.getContext canvas "webgl")
                                                program (initialize-gl! gl shaders)
                                                state (assoc state :gl gl)]
                                            (-> (assoc state :program program)
                                                (assoc :attributes (conj attributes
                                                                         {:location  (.getAttribLocation gl program "a_position")
                                                                          :size      2
                                                                          :type      (.-FLOAT gl)
                                                                          :normalize false
                                                                          :stride    0
                                                                          :offset    0}))
                                                (assoc :uniforms (conj uniforms
                                                                       {:type   "uniform4f"
                                                                        :name   "u_color"
                                                                        :values [0.3 0.8 0 1]}
                                                                       {:type      "uniformMatrix3fv"
                                                                        :name      "u_matrix"
                                                                        :transpose false
                                                                        :values    (compute-matrices state matrix-operation-2d)}))
                                                (set-geometry! (get-in state [(:active-shape state) :shape]))))))



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

