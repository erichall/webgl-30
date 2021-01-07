(ns webgl-30.core
  (:require [webgl-30.component :refer [app]]
            [webgl-30.webgl :as webgl]
            [webgl-30.math :as math]
            [webgl-30.shapes :as shapes]
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
   :animate          {:running? false}
   :camera           {:angle-rad (math/deg->rad 0)}
   :translation-rect {:x             (- 150)
                      :y             0
                      :z             (- 360)
                      :z-near        1
                      :z-far         2000
                      :field-of-view (math/deg->rad 60)
                      :scale-x       1
                      :scale-y       1
                      :scale-z       1
                      :rotation-x    0
                      :rotation-y    0
                      :rotation-z    0
                      :fudge-factor  1
                      :width         200
                      :height        50}
   :active-shape     :f-shape-3d
   :f-shape-3d       {:offset 0
                      :count  (* 16 6)
                      :shape  shapes/f-shape-3d}
   :f-shape-3d-color {:offset 0
                      :count  18
                      :shape  shapes/f-shape-3d-color}
   :f-shape          {:offset 0
                      :count  18
                      :shape  shapes/f-shape-2d}})
(declare draw-scene! render-component)

(when (nil? @state-atom)
  (reset! state-atom initial-state)
  (add-watch state-atom
             :game-loop
             (fn [_ _ _]
               (render-component @state-atom)
               (when-not (get-in @state-atom [:animate :running?])
                 (draw-scene! @state-atom)
                 )
               )))

(def shaders
  {
   :vs-2d "
   attribute vec2 a_position;

   uniform mat3 u_matrix;

    void main() {
      gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
    }
   "
   ;; 3d
   :vs    "attribute vec4 a_position;
           attribute vec4 a_color;

           uniform mat4 u_matrix;

           varying vec4 v_color; // we can pass this to our fragment shader

            void main() {
                gl_Position = u_matrix * a_position;

                // pass the color to our fragment shader
                v_color = a_color;
            }"
   :fs    "precision mediump float;
           varying vec4 v_color; // passe from our vertex shader

           void main() {
             gl_FragColor = v_color;
           }"
   })

(defn compute-matrices
  [{:keys [translation-rect gl]} {:keys [translation rotation-x rotation-y rotation-z scaling projection z->w perspective]}]
  (let [{:keys [x y z scale-x scale-y scale-z fudge-factor z-near z-far field-of-view]} translation-rect
        translation-matrix (translation x y z)
        rotation-x-matrix (rotation-x (:rotation-x translation-rect))
        rotation-y-matrix (rotation-y (:rotation-y translation-rect))
        rotation-z-matrix (rotation-z (:rotation-z translation-rect))
        scale-matrix (scaling scale-x scale-y scale-z)
        z->w-matrix (z->w fudge-factor)
        projection-matrix (projection (aget gl "canvas" "clientWidth") (aget gl "canvas" "clientHeight") 400)
        aspect (webgl/get-aspect gl)
        perspective-matrix (perspective field-of-view aspect z-near z-far)]
    (-> (math/matrix-multiply-3d perspective-matrix translation-matrix)
        (math/matrix-multiply-3d rotation-x-matrix)
        (math/matrix-multiply-3d rotation-y-matrix)
        (math/matrix-multiply-3d rotation-z-matrix)
        (math/matrix-multiply-3d scale-matrix))))

(defn initialize-gl!
  "Create a WebGL Program with a Vertex shader and a Fragment shader."
  [gl {:keys [vs fs]}]
  (let [vs (webgl/create-shader gl (.-VERTEX_SHADER gl) vs)
        fs (webgl/create-shader gl (.-FRAGMENT_SHADER gl) fs)
        program (webgl/create-program gl vs fs)]
    program))

(defn draw-scene!
  [{:keys [gl attributes uniforms program] :as state}]
  (webgl/resize-canvas-to-display-size gl)
  (webgl/set-gl-viewport! gl)
  (webgl/clear-canvas! gl)

  ;; the program contains our two shaders, vertex and fragment shader. tell WebGL that we want to run them!
  (.useProgram gl program)

  (doseq [uniform uniforms]
    (webgl/set-uniform gl program uniform))

  (doseq [{:keys [buffer buffer-type] :as attribute} attributes]
    (webgl/bind-buffer state buffer buffer-type)
    (webgl/set-attribute gl attribute))

  (let [z-near 1
        z-far 2000
        aspect (webgl/get-aspect gl)
        matrix-location (webgl/get-uniform-location gl program "u_matrix")
        projection-matrix (math/perspective-matrix (get-in state [:translation-rect :field-of-view])
                                                   aspect
                                                   z-near
                                                   z-far)
        f-position [200 0 0]                                ;; position of first F
        camera-matrix (-> (math/rotation-3d-y (get-in state [:camera :angle-rad]))
                          (math/matrix-multiply-3d (math/translate-3d 0 0 (* 200 1.5))))
        camera-position [(nth camera-matrix 12) (nth camera-matrix 13) (nth camera-matrix 14)]

        up [0 1 0]
        view-matrix (-> (math/look-at-matrix camera-position f-position up)
                        math/invert-4x4)
        vp-matrix (math/matrix-multiply-3d projection-matrix view-matrix)]
    (doseq [ii (range 5)]
      (let [{:keys [offset count]} (get state (:active-shape state))
            angle (/ (* ii Math/PI 2) 5)
            x (* (Math/cos angle) 200)
            y (* (Math/sin angle) 200)

            m (math/matrix-multiply-3d vp-matrix (math/translate-3d x 0 y))]

        (.uniformMatrix4fv gl matrix-location false m)

        ;; actually draw it
        (.drawArrays gl (.-TRIANGLES gl) offset count)))

    ;; uuuuuuuuuuu what a mess
    (when (get-in state [:animate :running?])
      (let [state (swap! state-atom (fn [_]
                                      (assoc-in state [:camera :angle-rad] (math/deg->rad (+ (get-in state [:camera :angle-rad])
                                                                                             1)))))]
        (js/requestAnimationFrame (fn [now] (draw-scene! state))))
      )
    )
  )

(defn set-uniform-values
  [{:keys [uniforms]} uniform-name values]
  (reduce (fn [acc {:keys [name] :as uniform}]
            (if (= uniform-name name)
              (conj acc (assoc uniform :values values))
              (conj acc uniform))) [] uniforms))

(defn handle-event!
  [name data]
  (condp = name
    :toggle-animation (swap! state-atom (fn [state]
                                          (let [running? (not (get-in @state-atom [:animate :running?]))
                                                state (assoc-in state [:animate :running?] running?)]
                                            (when running?
                                              (draw-scene! state))
                                            state
                                            )))
    :data-change (swap! state-atom (fn [state]
                                     (let [{:keys [path value]} data
                                           state (assoc-in state path value)]
                                       (->> (compute-matrices state math/matrix-operation-3d)
                                            (set-uniform-values state "u_matrix")
                                            (assoc state :uniforms)))))
    :canvas-did-mount (swap! state-atom (fn [{:keys [attributes uniforms canvas-id] :as state}]
                                          (let [canvas (js/document.querySelector (str "#" canvas-id))
                                                gl (.getContext canvas "webgl")
                                                program (initialize-gl! gl shaders)
                                                state (assoc state :gl gl)
                                                position-buffer (webgl/create-buffer gl)
                                                color-buffer (webgl/create-buffer gl)]
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
                                                                          }))
                                                (assoc :uniforms (conj uniforms
                                                                       {:type   "uniform4fv"
                                                                        :name   "u_color"
                                                                        :values [0.3 0.8 0 1]}
                                                                       {:type   "uniform1f"
                                                                        :name   "u_fudgeFactor"
                                                                        :values [1]}
                                                                       {:type      "uniformMatrix4fv"
                                                                        :name      "u_matrix"
                                                                        :transpose false
                                                                        :values    (compute-matrices state math/matrix-operation-3d)}))
                                                (webgl/bind-buffer position-buffer (.-ARRAY_BUFFER gl))
                                                (webgl/set-geometry! (get-in state [(:active-shape state) :shape]))
                                                (webgl/bind-buffer color-buffer (.-ARRAY_BUFFER gl))
                                                (webgl/set-geometry! (get-in state [:f-shape-3d-color :shape])))
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

