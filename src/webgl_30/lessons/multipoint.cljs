(ns webgl-30.lessons.multipoint
  (:require [webgl-30.webgl-id2 :as w]
            [webgl-30.core :as c]
            [webgl-30.input :as i]
            [webgl-30.component :refer [webgl-canvas]]))

(def initial-state {:gl         nil
                    :point-size 20})
(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(def vertex-shader
  "
  attribute float a_pointsize;
  attribute vec4 a_position;

  void main() {
       gl_Position = a_position;
       gl_PointSize = a_pointsize;
  }")

(def fragment-shader
  "
  precision mediump float;
  uniform vec4 u_fragcolor;
  void main() {
       gl_FragColor = u_fragcolor;
   }")

(defn draw!
  [_ {:keys [gl point-size objects-to-draw]}]
  (let [program (get-in objects-to-draw [:the-object :program])]
    (w/vertex-attrib-1f gl (get-in objects-to-draw [:the-object :attributes :a-pointsize :location]) point-size)
    (apply w/uniform4f gl (get-in objects-to-draw [:the-object :uniforms :u-fragcolor :location]) [0.0 1.0 0.0 1.0])

    (doto gl
      (w/clear-color! 0.0 0.0 0.0 1.0)
      (w/clear! (.-COLOR_BUFFER_BIT gl))
      (w/draw-arrays! (.-POINTS gl) 0 3))))

(defn setup!
  []
  (swap! state-atom (fn [{:keys [gl] :as state}]
                      (let [program (w/init-shaders gl vertex-shader fragment-shader)
                            a-position-attribute (w/attribute gl program {:name "a_position"
                                                                          :size 2})]
                        (-> (assoc state :objects-to-draw
                                         {:the-object {:program    program
                                                       :uniforms   {:u-fragcolor (w/uniform gl program {:name "u_fragcolor"})}
                                                       :attributes {:a-position  a-position-attribute
                                                                    :a-pointsize (w/attribute gl program {:name "a_pointsize"})}
                                                       :buffers    {:a-position-buffer (w/initialize-vertex-buffer! gl {:data      (js/Float32Array. [0.0 0.5
                                                                                                                                                      -0.5 -0.5
                                                                                                                                                      0.5 -0.5])
                                                                                                                        :attribute a-position-attribute})}}}))))))

(defn raf-draw!
  [state]
  (swap! state-atom assoc :raf-id (js/requestAnimationFrame (fn [t] (draw! t state)))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "This is chapter 3 from WebGL Programming Guide Interactive 3D Graphics Programming with WebGL"]
                       [:h4 {:style {:font-family "monospace"}}
                        "multipoint by WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea."]])
   :source          (c/get-filename #'state-atom)
   :tutorial-source "WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea."
   :start           (fn []
                      (let [canvas-id "fundamentals"
                            w 400
                            h 400]
                        [webgl-canvas {:height   h
                                       :width    w
                                       :id       canvas-id
                                       :on-mount (fn []
                                                   (let [gl (w/get-context canvas-id)]
                                                     (do
                                                       (swap! state-atom assoc :gl gl)
                                                       (setup!)
                                                       (raf-draw! @state-atom))))}]))})
