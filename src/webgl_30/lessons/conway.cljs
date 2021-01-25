(ns webgl-30.lessons.conway
  (:require
    [reagent.core :as r]
    [webgl-30.webgl-id2 :as w]
    [webgl-30.core :as c]
    [webgl-30.input :as i]
    [webgl-30.lessons.conway-core :as cc]
    [webgl-30.component :refer [webgl-canvas]]))

(def initial-state {:gl             nil
                    :raf-id         nil
                    :running?       false
                    :cell-size      4
                    :toroidal?      true
                    :grid-size      400
                    :fps            nil
                    :last-timestamp 0
                    ;:cells     #{[1 0] [1 1] [1 2]}
                    ;:cells          #{[0 0] [2 0] [1 1] [1 2] [2 1]}
                    :cells          (set (for [x (range 0 40)
                                               y (range 0 40)]
                                           [x y]))
                    })
(defonce state-atom (r/atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(declare draw!)

(def vertex-shader
  "attribute vec2 a_position;

   uniform vec2 u_resolution;

   void main() {
       // convert the position from pixels to [0.0,1.0]
       vec2 zeroToOne = a_position / u_resolution;

       // convert from 0->1 to 0->2
       vec2 zeroToTwo = zeroToOne * 2.0;

       // convert from 0->2 to -1->+1 (clip space)
       vec2 clipSpace = zeroToTwo - 1.0;

       // * vec(1, -1) flips y so it's top-left corner.
       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
   }")

(def fragment-shader
  "
  precision mediump float;
  uniform vec4 u_fragcolor;
  void main() {
       gl_FragColor = u_fragcolor;
   }")

(defn cells->rects
  [cells cell-size]
  (reduce (fn [acc [x y]]
            (concat acc (w/rect {:x      (* cell-size x)
                                 :y      (* cell-size y)
                                 :width  cell-size
                                 :height cell-size}))) [] cells))
(defn raf-draw!
  [state]
  (swap! state-atom assoc :raf-id (js/requestAnimationFrame (fn [t] (draw! t state)))))

(defn draw!
  [timestamp {:keys [gl cell-size objects-to-draw cells] :as state}]
  (let [a-position-buffer (-> (get-in objects-to-draw [:the-object :buffers :a-position-buffer])
                              (assoc :data (js/Float32Array. (cells->rects cells cell-size))))
        n (* (count cells) 12)]
    (apply w/uniform4f gl (get-in objects-to-draw [:the-object :uniforms :u-fragcolor :location]) [0.0 1.0 0.0 1.0])

    (doto gl
      (w/set-viewport! (aget gl "canvas" "width") (aget gl "canvas" "height"))
      ;(w/uniform2f (get-in objects-to-draw [:the-object :uniforms :u-resolution :location]) (aget gl "canvas" "width") (aget gl "canvas" "height"))
      (w/refresh-vertex-buffer! a-position-buffer)
      (w/clear-color! 0.0 0.0 0.0 1.0)
      (w/clear! (.-COLOR_BUFFER_BIT gl))
      (w/draw-arrays! (.-TRIANGLES gl) 0 (/ n 2)))

    (let [state @state-atom
          seconds-passed (/ (- timestamp (:last-timestamp state)) 1000)]
      (when (:running? state)
        (-> (swap! state-atom (fn [state]
                                (-> (assoc state :cells (cc/tick state))
                                    (assoc :last-timestamp timestamp)
                                    (assoc :fps (Math/round (/ 1 seconds-passed))))))
            raf-draw!)))))

(defn setup!
  []
  (swap! state-atom (fn [{:keys [gl] :as state}]
                      (let [program (w/init-shaders gl vertex-shader fragment-shader)
                            a-position-attribute (w/attribute gl program {:name "a_position" :size 2})]

                        ;; performance??
                        (.bindAttribLocation gl program (:location a-position-attribute) "a_position")

                        (-> (assoc state :objects-to-draw
                                         {:the-object
                                          {:program    program
                                           :uniforms   {:u-fragcolor  (w/uniform gl program {:name "u_fragcolor"})
                                                        :u-resolution (w/uniform gl program {:name "u_resolution"})}
                                           :attributes {:a-position a-position-attribute}
                                           :buffers    {:a-position-buffer (w/initialize-vertex-buffer! gl {:data      (js/Float32Array. [])
                                                                                                            :usage     (.-DYNAMIC_DRAW gl)
                                                                                                            :attribute a-position-attribute})}}})))))

  (let [{:keys [gl objects-to-draw]} @state-atom]
    (w/uniform2f gl (get-in objects-to-draw [:the-object :uniforms :u-resolution :location]) (aget gl "canvas" "width") (aget gl "canvas" "height")))
  )



(defn float32-conj
  [a data]
  (let [length (.-length a)
        new-arr (js/Float32Array. (+ length (count data)))]
    (.set new-arr a)
    (.set new-arr data length)
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
        cell-size (:cell-size @state-atom)
        cx (Math/floor (/ x cell-size))
        cy (Math/floor (/ y cell-size))]
    (swap! state-atom update :cells conj [cx cy])
    ))

(defn grid-2d
  [{:keys [height width cell-size style stroke-width grid-color]}]
  [:svg {:viewBox  (c/format "0 0 ~a ~a" width height)
         :id       "2d-grid"
         :width    width
         :height   height
         :style    style
         :on-click on-grid-click!}
   (for [s (range cell-size width cell-size)]
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
                            w (:grid-size @state-atom)
                            h (:grid-size @state-atom)]
                        [:div
                         [:p (:fps @state-atom)]
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
                                                         (raf-draw! @state-atom)
                                                         (swap! state-atom assoc :running? true)
                                                         )))}]

                          [grid-2d {:height       h
                                    :width        w
                                    :cell-size    (:cell-size @state-atom)
                                    :stroke-width 0.5
                                    :grid-color   "blue"
                                    :style        {:grid-row-start    1
                                                   :grid-column-start 1
                                                   :z-index           1}}]
                          ]]))})
