(ns webgl-30.lessons.matrices-2d-2
  (:require [reagent.core :as r]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl   nil
                    :rect {:translation [140 150]
                           :rotation    [0 1]
                           :scale       [1 1]
                           :angle-rad   0
                           :width       100
                           :height      30
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
  "attribute vec2 a_position;

  uniform mat3 u_matrix;

  void main() {
    gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
  }")

(defn multiply-matrices
  [{:keys [rect gl]}]
  (let [{:keys [translation angle-rad scale]} rect
        translation-matrix (m/translation-2d-matrix translation)
        rotation-matrix (m/rotation-2d-matrix angle-rad)
        scale-matrix (m/scaling-2d-matrix scale)
        projection-matrix (m/projection-2d-matrix (webgl/get-canvas-width gl) (webgl/get-canvas-height gl))
        move-origin-matrix (m/translation-2d-matrix [-50 -75])] ;; move origin to center of the F
    (-> (m/matrix-multiply-2d projection-matrix translation-matrix)
        (m/matrix-multiply-2d rotation-matrix)
        (m/matrix-multiply-2d scale-matrix)
        (m/matrix-multiply-2d move-origin-matrix))))

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn draw!
  [timestamp]
  (let [{:keys [rect] :as state} @state-atom]
    (-> (assoc-in state [:objects-to-draw :my-f :uniforms :u_matrix :values] (multiply-matrices state))
        webgl/draw-scene!)))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl rect] :as state}]
                          (let [program (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})]
                            (assoc state :objects-to-draw
                                         {:my-f {:program    program
                                                 :attributes {:a_position (webgl/attribute gl program
                                                                                           {:name   "a_position"
                                                                                            :size   2
                                                                                            :data   (js/Float32Array. shapes/f-shape-2d)
                                                                                            :usage  (.-STATIC_DRAW gl)
                                                                                            :target (.-ARRAY-BUFFER gl)})}
                                                 :uniforms   {:u_resolution {:name   "u_resolution"
                                                                             :type   "uniform2f"
                                                                             :values [(aget gl "canvas" "width") (aget gl "canvas" "height")]}
                                                              :u_color      {:name   "u_color"
                                                                             :type   "uniform4fv"
                                                                             :values (:color rect)}
                                                              :u_matrix     {:name      "u_matrix"
                                                                             :type      "uniformMatrix3fv"
                                                                             :transpose false
                                                                             :values    (multiply-matrices state)}}
                                                 :element    {:draw-type (.-TRIANGLES gl)
                                                              :offset    0
                                                              :count     18}}}))))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL 2D Matrices"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Matrix in 2d"]])
   :source          (c/get-filename #'state-atom)
   :tutorial-source "webgl-2d-matrices.html"
   :start           (fn []
                      (let [canvas-id "translation"]
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
                          [:div {:style {:display        "flex"
                                         :flex-direction "row"}}
                           [:span {:style {:color        "white"
                                           :margin-right "10px"}} "x"]
                           [slider {:on-change (fn [val]
                                                 (swap! state-atom assoc-in [:rect :translation] [val (get-in @state-atom [:rect :translation 1])])
                                                 (js/requestAnimationFrame draw!))
                                    :value     (get-in @state-atom [:rect :translation 0])
                                    :min       0
                                    :max       400
                                    :id        "x-slider"}]
                           [:span {:style {:color        "white"
                                           :margin-right "10px"}} (get-in @state-atom [:rect :x])]]
                          [:div {:style {:display        "flex"
                                         :flex-direction "row"}}
                           [:span {:style {:color        "white"
                                           :margin-right "10px"}} "y"]
                           [slider {:on-change (fn [val]
                                                 (swap! state-atom assoc-in [:rect :translation] [(get-in @state-atom [:rect :translation 0]) val])
                                                 (js/requestAnimationFrame draw!))
                                    :value     (get-in @state-atom [:rect :translation 1])
                                    :min       0
                                    :max       400
                                    :id        "y-slider"}]
                           [:span {:style {:color        "white"
                                           :margin-right "10px"}} (get-in @state-atom [:rect :y])]]
                          [:div {:style {:display        "flex"
                                         :flex-direction "row"}}
                           [:span {:style {:color        "white"
                                           :white-space  "nowrap"
                                           :margin-right "10px"}} "scale-x"]
                           [slider {:on-change (fn [val]
                                                 (swap! state-atom assoc-in [:rect :scale] [val (get-in @state-atom [:rect :scale 1])])
                                                 (js/requestAnimationFrame draw!))
                                    :value     (get-in @state-atom [:rect :scale 0])
                                    :min       -5
                                    :max       5
                                    :step      0.01
                                    :id        "x-scale"}]
                           [:span {:style {:color        "white"
                                           :margin-right "10px"}} (get-in @state-atom [:rect :scale 0])]]
                          [:div {:style {:display        "flex"
                                         :flex-direction "row"}}
                           [:span {:style {:color        "white"
                                           :white-space  "nowrap"
                                           :margin-right "10px"}} "scale-y"]
                           [slider {:on-change (fn [val]
                                                 (swap! state-atom assoc-in [:rect :scale] [(get-in @state-atom [:rect :scale 0]) val])
                                                 (js/requestAnimationFrame draw!))
                                    :value     (get-in @state-atom [:rect :scale 1])
                                    :min       -5
                                    :max       5
                                    :step      0.01
                                    :id        "y-scale"}]
                           [:span {:style {:color        "white"
                                           :margin-right "10px"}} (->> (get-in @state-atom [:rect :scale 1])
                                                                       (format "~4f"))]]
                          [:div {:style {:display        "flex"
                                         :flex-direction "row"}}
                           [:span {:style {:color        "white"
                                           :white-space  "nowrap"
                                           :margin-right "10px"}} "angle"]
                           [slider {:on-change (fn [val]
                                                 (swap! state-atom assoc-in [:rect :angle-rad] (m/deg->rad val))
                                                 (js/requestAnimationFrame draw!))
                                    :value     (m/rad->deg (get-in @state-atom [:rect :angle-rad]))
                                    :min       0
                                    :max       365
                                    :step      1
                                    :id        "rot"}]
                           [:span {:style {:color        "white"
                                           :margin-right "10px"}} (->> (get-in @state-atom [:rect :angle-rad])
                                                                       m/rad->deg
                                                                       (format "~1f"))]]]]))})
