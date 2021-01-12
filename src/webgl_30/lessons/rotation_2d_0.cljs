(ns webgl-30.lessons.rotation-2d-0
  (:require [reagent.core :as r]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
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

(defn map-range
  [output-end output-start input-start input-end v]
  (+ (* (/ (+ v input-start) (- input-end input-start))
        (- output-end output-start))
     output-start))

(defn unit-circle
  []
  (let [local-state-atom (r/atom {:x-pos      10
                                  :y-pos      50
                                  :mouse-down false})]
    (fn []
      (let [{:keys [x-pos y-pos]} @local-state-atom]
        [:svg {:viewBox       "0 0 100 100"
               :id            "unit-circle"
               :style         {:border "1px dashed orange"}
               :on-mouse-move (fn [evt]
                                (when (:mouse-down @local-state-atom)
                                  (let [svg (js/document.querySelector "#unit-circle")
                                        bb (.getBoundingClientRect svg)
                                        left (aget bb "left")
                                        top (aget bb "top")
                                        client-x (aget evt "clientX")
                                        client-y (aget evt "clientY")
                                        x (- client-x left)
                                        y (- client-y top)]
                                    ;; x [10 90]
                                    ;; y [10 90]
                                    (swap! local-state-atom (fn [state]
                                                              (-> (assoc state :x-pos
                                                                               (+ 50 (map-range 90 10 (/ Math/PI -2) (/ Math/PI 2) (Math/cos x)))
                                                                               )
                                                                  (assoc :y-pos
                                                                         (+ 50 (map-range 90 10 (/ Math/PI -2) (/ Math/PI 2) (Math/sin y)))
                                                                         ))))
                                    )
                                  )
                                )
               :xmlns         "http://www.w3.org/2000/svg"}
         ;; vertical
         [:path {:d "M10 0 L10 100" :stroke "gray"}]
         [:path {:d "M50 0 L50 100" :stroke "gray"}]
         [:path {:d "M90 0 L90 100" :stroke "gray"}]
         ;; horizontal
         [:path {:d "M0 10 L100 10" :stroke "gray"}]
         [:path {:d "M0 50 L100 50" :stroke "gray"}]
         [:path {:d "M0 90 L100 90" :stroke "gray"}]

         [:text {:x 52 :y 55 :fill "white" :style {:font-size "5px"}} "0"]
         [:text {:x 12 :y 55 :fill "white" :style {:font-size "5px"}} "-1"]
         [:text {:x 92 :y 55 :fill "white" :style {:font-size "5px"}} "1"]

         [:text {:x 52 :y 15 :fill "white" :style {:font-size "5px"}} "1"]
         [:text {:x 52 :y 88 :fill "white" :style {:font-size "5px"}} "-1"]

         [:circle {:cx            x-pos :cy y-pos :r "7px" :stroke "white" :fill "rgba(170,188,255, 0.7)" :stroke-width 1
                   :on-mouse-down (fn [evt] (swap! local-state-atom assoc :mouse-down true))
                   :on-mouse-up   (fn [evt] (swap! local-state-atom assoc :mouse-down false))

                   }]

         [:defs
          [:marker {:id "arrow-head" :markerWidth 10 :markerHeight 7 :refX 10 :refY 03.5 :orient "auto"}
           [:polygon {:points "0 0, 10 3.5, 0 7" :stroke "white" :fill "white"}]]]
         [:path {:d (str "M50 50 L " x-pos " " y-pos) :stroke "orange" :marker-end "url(#arrow-head"}]

         [:circle {:cx 50 :cy 50 :r 40 :stroke "white" :fill "none" :stroke-width 1}]
         ])))
  )



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
                        "Lesson - WebGL Fundamentals"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Translating a rect"]])
   :source          "https://github.com/erichall/webgl-30/blob/master/src/webgl_30/lessons/translation_2d.cljs"
   :tutorial-source "https://webglfundamentals.org/webgl/lessons/webgl-2d-translation.html"
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
                          [unit-circle]
                          ]

                         ]))})
