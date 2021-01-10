(ns webgl-30.lessons.fundamentals-0
  (:require [webgl-30.webgl :as webgl]
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
  (-> (swap! state-atom (fn [{:keys [gl] :as state}]
                          (let [
                                program (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
                                position-buffer {:buffer (webgl/create-buffer gl)
                                                 :target (.-ARRAY-BUFFER gl)}]
                            (-> (assoc state :program program)
                                (assoc :attributes [{:name      "a_position"
                                                     :size      2
                                                     :type      (.-FLOAT gl)
                                                     :normalize false
                                                     :stride    0
                                                     :offset    0
                                                     :buffer    position-buffer}])
                                (assoc :elements [{:src-data  (js/Float32Array. [0 0
                                                                                 0 0.5
                                                                                 0.7 0])
                                                   :target    (.-ARRAY_BUFFER gl)
                                                   :usage     (.-STATIC_DRAW gl)
                                                   :draw-type (.-TRIANGLES gl)
                                                   :buffer    position-buffer
                                                   :offset    0
                                                   :count     3}])))))
      webgl/set-elements!))


(def ^:export lesson
  {:title  (fn []
             [:div
              [:h1 {:style {:font-family "monospace"}}
               "Lesson - WebGL Fundamentals"]
              [:h4 {:style {:font-family "monospace"}}
               "A simple triangle"]])
   :source "https://github.com/erichall/webgl-30/blob/master/src/webgl_30/lessons/fundamentals_0.cljs"
   :tutorial-source "https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html"
   :start  (fn []
             (let [canvas-id "fundamentals"]
               [webgl-canvas {:height   400
                              :width    400
                              :id       canvas-id
                              :on-mount (fn []
                                          (do
                                            (swap! state-atom assoc :gl (webgl/get-context canvas-id))
                                            (setup!)
                                            (js/requestAnimationFrame draw!)))}]))})
