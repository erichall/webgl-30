(ns webgl-30.lessons.rotation-2d-0
  (:require [reagent.core :as r]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider unit-circle]]))

(def initial-state {:gl   nil
                    :rect {:x        0
                           :y        0
                           :rotation [0 1]
                           :width    100
                           :height   30
                           :color    [0.3 0.3 0.3 1]}})
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
  uniform vec2 u_translation;
  uniform vec2 u_rotation;

  void main() {
        vec2 rotatedPosition = vec2(
          a_position.x * u_rotation.y + a_position.y * u_rotation.x,
          a_position.y * u_rotation.y - a_position.x * u_rotation.x);

       vec2 position = rotatedPosition + u_translation;

       // convert the position from pixels to 0.0 to 1.0
       vec2 zeroToOne = position / u_resolution;

       // convert from 0->1 to 0->2
       vec2 zeroToTwo = zeroToOne * 2.0;

       // convert from 0->2 to -1->+1 (clip space)
       vec2 clipSpace = zeroToTwo - 1.0;

       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1); // * vec(1, -1) flips y so it's top-left corner.
  }")

(defn draw!
  [timestamp]
  (let [{:keys [rect] :as state} @state-atom]
    (-> (assoc-in state [:objects-to-draw :my-rect :uniforms :u_translation :values] [(:x rect) (:y rect)])
        (assoc-in [:objects-to-draw :my-rect :uniforms :u_rotation :values] (:rotation rect))
        webgl/draw-scene!)))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl rect] :as state}]
                          (let [program (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})]
                            (assoc state :objects-to-draw
                                         {:my-rect {:program    program
                                                    :attributes {:a_position (webgl/attribute gl program
                                                                                              {:name "a_position"
                                                                                               :size 2
                                                                                               :data (js/Float32Array. shapes/f-shape-2d)})}
                                                    :uniforms   {:u_resolution  {:name   "u_resolution"
                                                                                 :type   "uniform2f"
                                                                                 :values [(aget gl "canvas" "width") (aget gl "canvas" "height")]}
                                                                 :u_color       {:name   "u_color"
                                                                                 :type   "uniform4fv"
                                                                                 :values (:color rect)}
                                                                 :u_translation {:name   "u_translation"
                                                                                 :type   "uniform2fv"
                                                                                 :values [(:x rect) (:y rect)]}
                                                                 :u_rotation    {:name   "u_rotation"
                                                                                 :type   "uniform2fv"
                                                                                 :values (:rotation rect)}
                                                                 }
                                                    :element    {:draw-type (.-TRIANGLES gl)
                                                                 :offset    0
                                                                 :count     18}}}))))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL 2D Rotation"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Rotation!"]])
   :source          (c/get-filename #'state-atom)
   :tutorial-source "webgl-2d-rotation.html"
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
                                                 (swap! state-atom assoc-in [:rect :x] val)
                                                 (js/requestAnimationFrame draw!))
                                    :value     (get-in @state-atom [:rect :x])
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
                                                 (swap! state-atom assoc-in [:rect :y] val)
                                                 (js/requestAnimationFrame draw!))
                                    :value     (get-in @state-atom [:rect :y])
                                    :min       0
                                    :max       400
                                    :id        "y-slider"}]
                           [:span {:style {:color        "white"
                                           :margin-right "10px"}} (get-in @state-atom [:rect :y])]]
                          [unit-circle {:height    300
                                        :width     300
                                        :radius    120
                                        :on-change (fn [{:keys [x y]}]
                                                     (swap! state-atom assoc-in [:rect :rotation] [x y])
                                                     (js/requestAnimationFrame draw!))}]
                          ]

                         ]))})
