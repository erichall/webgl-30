(ns webgl-30.lessons.hello-point-1
  (:require [webgl-30.webgl-id2 :as w]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas]]))

(def initial-state {:gl nil})
(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(def vertex-shader
  "void main() {
       gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
       gl_PointSize = 10.0;
  }")

(def fragment-shader
  "void main() {
       gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
   }")

(defn draw!
  [_ {:keys [gl]}]

  (doto gl
    (w/clear-color! 0.0 0.0 0.0 1.0)
    (w/clear! (.-COLOR_BUFFER_BIT gl))
    (w/draw-arrays! (.-POINTS gl) 0 1)))

(defn setup!
  []
  (swap! state-atom (fn [{:keys [gl] :as state}]
                      (let [program (w/init-shaders gl vertex-shader fragment-shader)]
                        (assoc state :objects-to-draw
                                     {:the-object {:program program}})))))

(defn raf-draw!
  [state]
  (swap! state-atom assoc :raf-id (js/requestAnimationFrame (fn [t] (draw! t state)))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "This is chapter 3 from WebGL Programming Guide Interactive 3D Graphics Programming with WebGL"]
                       [:h4 {:style {:font-family "monospace"}}
                        "HelloPoint by WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea."]])
   :source          (c/get-filename #'state-atom)
   :tutorial-source "WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea."
   :start           (fn []
                      (let [canvas-id "fundamentals"]
                        [webgl-canvas {:height   400
                                       :width    400
                                       :id       canvas-id
                                       :on-mount (fn []
                                                   (do
                                                     (swap! state-atom assoc :gl (w/get-context canvas-id))
                                                     (setup!)
                                                     (raf-draw! @state-atom)))}]))})
