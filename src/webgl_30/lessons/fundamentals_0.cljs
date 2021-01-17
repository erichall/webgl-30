(ns webgl-30.lessons.fundamentals-0
  (:require [webgl-30.webgl :as webgl]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas]]))

(def initial-state {:gl nil})
(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(def fragment-shader
  "precision mediump float;
   void main() {
       gl_FragColor = vec4(1, 0, 0.5, 1);
   }")

(def vertex-shader
  "// an attribute will receive data from a buffer
  attribute vec4 a_position;
  void main() {
       gl_Position = a_position;
  }")

(defn draw!
  [timestamp]
  (webgl/draw-scene! @state-atom))

(defn setup!
  []
  (swap! state-atom (fn [{:keys [gl] :as state}]
                      (assoc state :objects-to-draw {:too {:program    (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
                                                           :attributes {:a_position {:name        "a_position"
                                                                                     :size        2
                                                                                     :type        (.-FLOAT gl)
                                                                                     :normalize   false
                                                                                     :stride      0
                                                                                     :offset      0
                                                                                     :buffer-info (webgl/create-buffer gl
                                                                                                                       {:data   (js/Float32Array. [0 0
                                                                                                                                                   0 0.5
                                                                                                                                                   0.7 0])
                                                                                                                        :usage  (.-STATIC_DRAW gl)
                                                                                                                        :target (.-ARRAY-BUFFER gl)})}}
                                                           :element    {:draw-type (.-TRIANGLES gl)
                                                                        :offset    0
                                                                        :count     3}}}))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL Fundamentals"]
                       [:h4 {:style {:font-family "monospace"}}
                        "A simple triangle"]])
   :source          (c/current-namespace #'state-atom)
   :tutorial-source "webgl-fundamentals.html"
   :start           (fn []
                      (let [canvas-id "fundamentals"]
                        [webgl-canvas {:height   400
                                       :width    400
                                       :id       canvas-id
                                       :on-mount (fn []
                                                   (do
                                                     (swap! state-atom assoc :gl (webgl/get-context canvas-id))
                                                     (setup!)
                                                     (js/requestAnimationFrame draw!)))}]))})
