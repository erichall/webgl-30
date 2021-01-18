(ns webgl-30.lessons.fundamentals-1
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
  "attribute vec2 a_position;

  uniform vec2 u_resolution;

  void main() {
       // convert the position from pixels to 0.0 to 1.0
       vec2 zeroToOne = a_position / u_resolution;

       // convert from 0->1 to 0->2
       vec2 zeroToTwo = zeroToOne * 2.0;

       // convert from 0->2 to -1->+1 (clip space)
       vec2 clipSpace = zeroToTwo - 1.0;

       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1); // * vec(1, -1) flips y so it's top-left corner.
  }")

(defn draw!
  [timestamp]
  (webgl/draw-scene! @state-atom))

(defn setup!
  []
  (swap! state-atom (fn [{:keys [gl] :as state}]
                      (assoc state :objects-to-draw {:thing {:program    (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
                                                             :attributes {:a_position {:name        "a_position"
                                                                                       :size        2
                                                                                       :type        (.-FLOAT gl)
                                                                                       :normalize   false
                                                                                       :stride      0
                                                                                       :offset      0
                                                                                       :buffer-info (webgl/create-buffer gl
                                                                                                                         {:data   (js/Float32Array. [10 20
                                                                                                                                                     80 20
                                                                                                                                                     10 30
                                                                                                                                                     10 30
                                                                                                                                                     80 20
                                                                                                                                                     80 30])
                                                                                                                          :usage  (.-STATIC_DRAW gl)
                                                                                                                          :target (.-ARRAY-BUFFER gl)})}}
                                                             :uniforms   {:u_resolution {:name   "u_resolution"
                                                                                         :type   "uniform2f"
                                                                                         :values [(aget gl "canvas" "width") (aget gl "canvas" "height")]}}
                                                             :element    {:draw-type (.-TRIANGLES gl)
                                                                          :offset    0
                                                                          :count     6}}}))))


(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL Fundamentals"]
                       [:h4 {:style {:font-family "monospace"}}
                        "A box with translated coordinates"]])
   :source          (c/get-filename #'state-atom)
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
