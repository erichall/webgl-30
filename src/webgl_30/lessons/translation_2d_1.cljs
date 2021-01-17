(ns webgl-30.lessons.translation-2d-1
  (:require [reagent.core :as r]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl   nil
                    :rect {:x      0
                           :y      0
                           :width  100
                           :height 30
                           :color  [0.3 0.3 0.3 1]}})
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

  void main() {
       vec2 position = a_position + u_translation;

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
    (->> [(:x rect) (:y rect)]
         (assoc-in state [:objects-to-draw :my-rect :uniforms :u_translation :values])
         webgl/draw-scene!)))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl rect] :as state}]
                          (assoc state :objects-to-draw
                                       {:my-rect {:program    (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
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
                                                  :uniforms   {:u_resolution  {:name   "u_resolution"
                                                                               :type   "uniform2f"
                                                                               :values [(aget gl "canvas" "width") (aget gl "canvas" "height")]}
                                                               :u_color       {:name   "u_color"
                                                                               :type   "uniform4fv"
                                                                               :values (:color rect)}
                                                               :u_translation {:name   "u_translation"
                                                                               :type   "uniform2fv"
                                                                               :values [(:x rect) (:y rect)]}}
                                                  :element    {:draw-type (.-TRIANGLES gl)
                                                               :offset    0
                                                               :count     18}}})))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL 2D Translation"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Translating F"]])
   :source          (c/current-namespace #'state-atom)
   :tutorial-source "webgl-2d-translation.html"
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
                                           :margin-right "10px"}} (get-in @state-atom [:rect :y])]]]]))})
