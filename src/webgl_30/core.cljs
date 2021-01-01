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
               (draw-scene! @state-atom)

               ))
  )


(def shaders
  {
   :vs "
   attribute vec2 a_position;

   uniform vec2 u_resolution;
   uniform vec2 u_translation;
   uniform vec2 u_rotation;

    void main() {
      vec2 rotatedPosition = vec2(
        a_position.x * u_rotation.y + a_position.y * u_rotation.x,
        a_position.y * u_rotation.y - a_position.x * u_rotation.x
      );
      vec2 position = rotatedPosition + u_translation;
      vec2 zeroToOne = position / u_resolution;
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
                                                                       {:type   :uniform2fv
                                                                        :name   "u_resolution"
                                                                        :values [(aget gl "canvas" "width")
                                                                                 (aget gl "canvas" "height")]}
                                                                       {:type   :uniform2fv
                                                                        :name   "u_translation"
                                                                        :values [(get-in state [:translation-rect :x])
                                                                                 (get-in state [:translation-rect :y])]}
                                                                       {:type   :uniform4fv
                                                                        :name   "u_color"
                                                                        :values [0.3 0.8 0 1]}
                                                                       {:type   :uniform2fv
                                                                        :name   "u_rotation"
                                                                        :values [0 1]}
                                                                       ))
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

