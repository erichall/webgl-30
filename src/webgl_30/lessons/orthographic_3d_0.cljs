(ns webgl-30.lessons.orthographic-3d-0
  (:require [reagent.core :as r]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl   nil
                    :rect {:translation [45 150 0]
                           :rotation    [(m/deg->rad 40) (m/deg->rad 25) (m/deg->rad 325)]
                           :scale       [1 1 1]
                           :color       [0.3 0.3 0.3 1]}})
(defonce state-atom (r/atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(def fragment-shader
  "precision mediump float;
   uniform vec4 u_color;
   void main() {
       gl_FragColor = u_color;
   }")

(def vertex-shader
  "// attribute vec2 a_position;
   attribute vec4 a_position;

  //uniform mat3 u_matrix;
  uniform mat4 u_matrix;

  void main() {
    //gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
    gl_Position = u_matrix * a_position;
  }")

(defn multiply-matrices
  [{:keys [rect gl]}]
  (let [{:keys [translation scale rotation]} rect
        projection-matrix (m/projection-3d-matrix (webgl/get-canvas-width gl) (webgl/get-canvas-height gl) 400)
        translation-matrix (m/translation-3d-matrix translation)
        rotation-matrix-x (m/rotation-3d-x-matrix (nth rotation 0))
        rotation-matrix-y (m/rotation-3d-y-matrix (nth rotation 1))
        rotation-matrix-z (m/rotation-3d-z-matrix (nth rotation 2))
        scale-matrix (m/scaling-3d-matrix scale)]
    (-> (m/matrix-multiply-3d projection-matrix translation-matrix)
        (m/matrix-multiply-3d rotation-matrix-x)
        (m/matrix-multiply-3d rotation-matrix-y)
        (m/matrix-multiply-3d rotation-matrix-z)
        (m/matrix-multiply-3d scale-matrix))))

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn draw!
  [timestamp]
  (let [state @state-atom]
    (-> (assoc-in state [:objects-to-draw :my-f :uniforms :u_matrix :values] (multiply-matrices state))
        webgl/draw-scene!)))

(defn slider-component
  [{:keys [on-change label value id min max step display-value] :or {step 1}}]
  [:div {:style {:display        "flex"
                 :flex-direction "row"}}
   [:span {:style {:color        "white"
                   :white-space  "nowrap"
                   :margin-right "10px"}} label]
   [slider {:on-change on-change
            :value     value
            :min       min
            :step      step
            :max       max
            :id        id}]
   [:span {:style {:color        "white"
                   :margin-right "10px"}} (or display-value value)]])

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl rect] :as state}]
                          (let [program (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})]
                            (assoc state :objects-to-draw
                                         {:my-f {:program    program
                                                 :attributes {:a_position (webgl/attribute gl program {:name "a_position"
                                                                                                       :size 3
                                                                                                       :data (js/Float32Array. shapes/f-shape-3d)})}
                                                 :uniforms   {:u_resolution {:name   "u_resolution"
                                                                             :type   "uniform2f"
                                                                             :values [(aget gl "canvas" "width") (aget gl "canvas" "height")]}
                                                              :u_color      {:name   "u_color"
                                                                             :type   "uniform4fv"
                                                                             :values (:color rect)}
                                                              :u_matrix     {:name      "u_matrix"
                                                                             :type      "uniformMatrix4fv"
                                                                             :transpose false
                                                                             :values    (multiply-matrices state)}}
                                                 :element    {:draw-type (.-TRIANGLES gl)
                                                              :offset    0
                                                              :count     18}}}))))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - Orthographic 3D"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Ortho what?!"]])
   :source          (c/get-filename #'state-atom)
   :tutorial-source "webgl-3d-orthographic.html"
   :start           (fn []
                      (let [canvas-id "translation"
                            state @state-atom
                            {:keys [translation scale rotation]} (:rect state)]
                        [:div {:style {:display        "flex"
                                       :flex-direction "row"}}
                         [webgl-canvas {:height   400
                                        :width    400
                                        :id       canvas-id
                                        :on-mount (fn []
                                                    (do
                                                      (swap! state-atom assoc :gl (webgl/get-context canvas-id))
                                                      (setup!)
                                                      (js/requestAnimationFrame draw!)))}]
                         [:div {:style {:margin-left "30px"}}
                          ;; trans
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :translation] (assoc translation 0 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (first translation) :id :translate-x :min 0 :max 400 :label "x"}]
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :translation] (assoc translation 1 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth translation 1) :id :translate-y :min 0 :max 400 :label "y"}]
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :translation] (assoc translation 2 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth translation 1) :id :translate-z :min 0 :max 400 :label "z"}]

                          ;; scale
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :scale] (assoc scale 0 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth scale 0) :id :scale-x :min -5 :max 5 :label "x-scale" :step 0.1}]
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :scale] (assoc scale 1 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth scale 1) :id :scale-y :min -5 :max 5 :label "y-scale" :step 0.1}]
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :scale] (assoc scale 2 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth scale 2) :id :scale-z :min -5 :max 5 :label "z-scale" :step 0.1}]
                          ;; rotation
                          [slider-component {:on-change     (fn [val]
                                                              (swap! state-atom assoc-in [:rect :rotation 0] (m/deg->rad val))
                                                              (js/requestAnimationFrame draw!))
                                             :value         (m/rad->deg (nth rotation 0)) :id :rotate-x :min 0 :max 365 :label "x-rotation"
                                             :display-value (->> (get-in @state-atom [:rect :rotation 0])
                                                                 m/rad->deg
                                                                 (format "~1f"))}]
                          [slider-component {:on-change     (fn [val]
                                                              (swap! state-atom assoc-in [:rect :rotation 1] (m/deg->rad val))
                                                              (js/requestAnimationFrame draw!))
                                             :value         (m/rad->deg (nth rotation 1)) :id :rotate-y :min 0 :max 365 :label "y-rotation"
                                             :display-value (->> (get-in @state-atom [:rect :rotation 1])
                                                                 m/rad->deg
                                                                 (format "~1f"))}]
                          [slider-component {:on-change     (fn [val]
                                                              (swap! state-atom assoc-in [:rect :rotation 2] (m/deg->rad val))
                                                              (js/requestAnimationFrame draw!))
                                             :value         (m/rad->deg (nth rotation 2)) :id :rotate-z :min 0 :max 365 :label "z-rotation"
                                             :display-value (->> (get-in @state-atom [:rect :rotation 2])
                                                                 m/rad->deg
                                                                 (format "~1f"))}]]]))})
