(ns webgl-30.lessons.matrices-2d_1
  (:require [reagent.core :as r]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl   nil
                    :rect {:translation [190 190]
                           :rotation    [0 1]
                           :scale       [0.5 0.5]
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

  uniform vec2 u_resolution;
  uniform mat3 u_matrix;

  void main() {
       vec2 position = (u_matrix * vec3(a_position, 1)).xy;

       // convert the position from pixels to 0.0 to 1.0
       vec2 zeroToOne = position / u_resolution;

       // convert from 0->1 to 0->2
       vec2 zeroToTwo = zeroToOne * 2.0;

       // convert from 0->2 to -1->+1 (clip space)
       vec2 clipSpace = zeroToTwo - 1.0;

       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1); // * vec(1, -1) flips y so it's top-left corner.
  }")

(defn multiply-matrices
  [{:keys [rect]}]
  (let [{:keys [translation angle-rad scale]} rect
        translation-matrix (m/translation-2d-matrix translation)
        rotation-matrix (m/rotation-2d-matrix angle-rad)
        scale-matrix (m/scaling-2d-matrix scale)]
    (-> (m/matrix-multiply-2d translation-matrix rotation-matrix)
        (m/matrix-multiply-2d scale-matrix))))

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn draw!
  [timestamp]
  (let [{:keys [rect gl] :as state} @state-atom]
    (webgl/prepare-canvas! gl)

    (let [{:keys [attributes uniforms element program]} (get-in state [:objects-to-draw :my-f])
          {:keys [translation angle-rad scale]} rect
          translation-matrix (m/translation-2d-matrix translation)
          rotation-matrix (m/rotation-2d-matrix angle-rad)
          scale-matrix (m/scaling-2d-matrix scale)]
      (webgl/use-program! gl program)
      (webgl/set-attributes! gl program (vals attributes))

      (loop [matrix (m/identity-2d-matrix)
             i 0]
        (if (= i 5)
          nil
          (let [matrix (-> (m/matrix-multiply-2d matrix translation-matrix)
                           (m/matrix-multiply-2d rotation-matrix)
                           (m/matrix-multiply-2d scale-matrix))]
            (->> (assoc-in uniforms [:u_matrix :values] matrix)
                 vals
                 (webgl/set-uniforms! gl program))
            (webgl/draw-arrays! gl element)
            (recur matrix (inc i))))))))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl rect] :as state}]
                          (assoc state :objects-to-draw
                                       {:my-f {:program    (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
                                               :attributes {:a_position {:name        "a_position"
                                                                         :size        2
                                                                         :type        (.-FLOAT gl)
                                                                         :normalize   false
                                                                         :stride      0
                                                                         :offset      0
                                                                         :buffer-info (webgl/create-buffer gl
                                                                                                           {:data   (js/Float32Array. shapes/f-shape-2d)
                                                                                                            :usage  (.-STATIC_DRAW gl)
                                                                                                            :target (.-ARRAY-BUFFER gl)})}}
                                               :uniforms   {:u_resolution {:name   "u_resolution"
                                                                           :type   "uniform2f"
                                                                           :values [(aget gl "canvas" "width") (aget gl "canvas" "height")]}
                                                            :u_color      {:name   "u_color"
                                                                           :type   "uniform4fv"
                                                                           :values (:color rect)}
                                                            :u_matrix     {:name      "u_matrix"
                                                                           :type      "uniformMatrix3fv"
                                                                           :transpose false
                                                                           :values    (multiply-matrices @state-atom)
                                                                           }

                                                            }
                                               :element    {:draw-type (.-TRIANGLES gl)
                                                            :offset    0
                                                            :count     18}}})))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL 2D Matrices"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Matrix"]])
   :source          (c/current-namespace #'state-atom)
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
                                                                       (format "~1f"))]]
                          ]

                         ]))})
