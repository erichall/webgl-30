(ns webgl-30.lessons.conway
  (:require [webgl-30.webgl-id2 :as w]
            [webgl-30.core :as c]
            [webgl-30.input :as i]
            [webgl-30.component :refer [webgl-canvas]]))

(def initial-state {:gl         nil
                    :point-size 10
                    :cells      []})
(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(def vertex-shader
  "attribute vec2 a_position;
   attribute float a_pointsize;

   uniform vec2 u_resolution;

   void main() {
       // convert the position from pixels to 0.0 to 1.0
       vec2 zeroToOne = a_position / u_resolution;

       // convert from 0->1 to 0->2
       vec2 zeroToTwo = zeroToOne * 2.0;

       // convert from 0->2 to -1->+1 (clip space)
       vec2 clipSpace = zeroToTwo - 1.0;

       // * vec(1, -1) flips y so it's top-left corner.
       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

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
  [_ {:keys [gl point-size objects-to-draw] :as state}]
  (let [program (get-in objects-to-draw [:the-object :program])
        n (.-length (get-in state [:objects-to-draw :the-object :buffers :a-position-buffer :data]))]


    (apply w/uniform4f gl (get-in objects-to-draw [:the-object :uniforms :u-fragcolor :location]) [0.0 1.0 0.0 1.0])
    (doto gl
      (w/set-viewport! (aget gl "canvas" "width") (aget gl "canvas" "height"))
      (w/vertex-attrib-1f (get-in objects-to-draw [:the-object :attributes :a-pointsize :location]) point-size)
      (w/uniform2f (get-in objects-to-draw [:the-object :uniforms :u-resolution :location]) (aget gl "canvas" "width") (aget gl "canvas" "height"))
      (w/refresh-vertex-buffer! (get-in objects-to-draw [:the-object :buffers :a-position-buffer]))
      (w/clear-color! 0.0 0.0 0.0 1.0)
      (w/clear! (.-COLOR_BUFFER_BIT gl))
      (w/draw-arrays! (.-POINTS gl) 0 (/ n 2)))))

(defn setup!
  []
  (swap! state-atom (fn [{:keys [gl] :as state}]
                      (let [program (w/init-shaders gl vertex-shader fragment-shader)
                            a-position-attribute (w/attribute gl program {:name "a_position"
                                                                          :size 2})]
                        (-> (assoc state :objects-to-draw
                                         {:the-object
                                          {:program    program
                                           :uniforms   {:u-fragcolor  (w/uniform gl program {:name "u_fragcolor"})
                                                        :u-resolution (w/uniform gl program {:name "u_resolution"})}
                                           :attributes {:a-position  a-position-attribute
                                                        :a-pointsize (w/attribute gl program {:name "a_pointsize"})}
                                           :buffers    {:a-position-buffer (w/initialize-vertex-buffer! gl {:data      (js/Float32Array. [200.0 200.0
                                                                                                                                          5.0 5.0])
                                                                                                            :attribute a-position-attribute})}}}))))))

(defn raf-draw!
  [state]
  (swap! state-atom assoc :raf-id (js/requestAnimationFrame (fn [t] (draw! t state)))))


(defn float32-conj
  [a & data]
  (let [length (.-length a)
        new-arr (js/Float32Array. (+ length (count data)))]
    (.set new-arr a)
    (.set new-arr (apply array data) length)
    new-arr))

(defn on-grid-click!
  [evt]
  (let [svg (js/document.getElementById "2d-grid")
        pt (-> svg .createSVGPoint)
        _ (aset pt "x" (aget evt "clientX"))
        _ (aset pt "y" (aget evt "clientY"))
        svg-p (.matrixTransform pt (.inverse (.getScreenCTM svg)))

        x (aget svg-p "x")
        y (aget svg-p "y")
        cell-size 10
        cx (Math/floor (/ x cell-size))
        cy (Math/floor (/ y cell-size))
        da (get-in @state-atom [:objects-to-draw :the-object :buffers :a-position-buffer :data])]
    (println cx)
    (swap! state-atom assoc-in [:objects-to-draw :the-object :buffers :a-position-buffer :data] (float32-conj da
                                                                                                              (+ (* cx cell-size) (/ cell-size 2))
                                                                                                              (+ (* cell-size cy) (/ cell-size 2))))
    (raf-draw! @state-atom)
    ))

(defn grid-2d
  [{:keys [height width grid-size style stroke-width grid-color]}]
  [:svg {:viewBox  (c/format "0 0 ~a ~a" width height)
         :id       "2d-grid"
         :width    width
         :height   height
         :style    style
         :on-click on-grid-click!
         }
   (for [s (range (/ stroke-width 2) width (- grid-size (/ stroke-width 2)))]
     [:g {:key s}
      [:line {:x1    0 :y1 s :x2 width :y2 s
              :style {:stroke (or grid-color "gray") :stroke-width stroke-width}}]
      [:line {:x1    s :y1 0 :x2 s :y2 height
              :style {:stroke (or grid-color "gray") :stroke-width stroke-width}}]])])

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        ""]
                       [:h4 {:style {:font-family "monospace"}}
                        "Conway!"]])
   :source          (c/get-filename #'state-atom)
   :tutorial-source ""
   :start           (fn []
                      (let [canvas-id "fundamentals"
                            w 400
                            h 400
                            grid-size 10]
                        [:div {:style {:display               "grid"
                                       :grid-template-columns "1fr"}}
                         [webgl-canvas {:height   h
                                        :width    w
                                        :id       canvas-id
                                        :style    {:grid-row-start    1
                                                   :grid-column-start 1
                                                   :border            "none"}
                                        :on-mount (fn []
                                                    (let [gl (w/get-context canvas-id)]
                                                      (do
                                                        (swap! state-atom assoc :gl gl)
                                                        (setup!)
                                                        (raf-draw! @state-atom))))}]

                         [grid-2d {:height       400
                                   :width        400
                                   :grid-size    grid-size
                                   :stroke-width 0.5
                                   :grid-color   "blue"
                                   :style        {:grid-row-start    1
                                                  :grid-column-start 1
                                                  :z-index           1}}]
                         ]))})
