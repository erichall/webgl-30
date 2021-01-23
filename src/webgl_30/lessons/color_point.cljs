(ns webgl-30.lessons.color-point
  (:require [webgl-30.webgl-id2 :as w]
            [webgl-30.core :as c]
            [webgl-30.input :as i]
            [webgl-30.component :refer [webgl-canvas]]))

(def initial-state {:gl         nil
                    :point-size 20
                    :clicks     []
                    :colors     []})
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
  [_ {:keys [gl clicks colors point-size objects-to-draw]}]
  (let [program (get-in objects-to-draw [:the-object :program])
        frag-color-location (w/get-uniform-location gl program "u_fragcolor")]
    (w/vertex-attrib-1f gl (w/get-attribute-location gl program "a_pointsize") point-size)

    (doto gl
      (w/clear-color! 0.0 0.0 0.0 1.0)
      (w/clear! (.-COLOR_BUFFER_BIT gl)))

    (doseq [[color [x y]] (mapv vector colors clicks)]
      (w/vertex-attrib-3f gl (w/get-attribute-location gl program "a_position") x y 0.0)
      (apply w/uniform4f gl frag-color-location color)
      (w/draw-arrays! gl (.-POINTS gl) 0 1))))

(defn setup!
  []
  (swap! state-atom (fn [{:keys [gl] :as state}]
                      (let [program (w/init-shaders gl vertex-shader fragment-shader)]
                        (assoc state :objects-to-draw
                                     {:the-object {:program program}})))))

(defn raf-draw!
  [state]
  (swap! state-atom assoc :raf-id (js/requestAnimationFrame (fn [t] (draw! t state)))))

(defn get-color
  [[x y]]
  (cond
    (and (>= x 0) (>= y 0))
    [1.0 0.0 0.0 1.0]

    (and (< x 0) (< y 0))
    [0.0 1.0 0.0 1.0]

    :else
    [1.0 1.0 1.0 1.0]))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "This is chapter 3 from WebGL Programming Guide Interactive 3D Graphics Programming with WebGL"]
                       [:h4 {:style {:font-family "monospace"}}
                        "color point by WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea."]])
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
                                                       (i/mousedown (w/get-canvas gl) (fn [e]
                                                                                        (let [x (aget e "clientX")
                                                                                              y (aget e "clientY")
                                                                                              rect (.getBoundingClientRect (aget e "target"))
                                                                                              l (aget rect "left")
                                                                                              t (aget rect "top")
                                                                                              c-x (/ (- (- x l) (/ h 2)) (/ h 2))
                                                                                              c-y (/ (- (/ w 2) (- y t)) (/ w 2))]
                                                                                          (-> (swap! state-atom (fn [state]
                                                                                                                  (-> (update state :clicks conj [c-x c-y])
                                                                                                                      (update :colors conj (get-color [c-x c-y])))))
                                                                                              raf-draw!))))

                                                       (setup!)
                                                       (raf-draw! @state-atom))))}]))})
