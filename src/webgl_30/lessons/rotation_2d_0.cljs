(ns webgl-30.lessons.rotation-2d-0
  (:require [reagent.core :as r]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl   nil
                    :rect {:x        0
                           :y        0
                           :rotation [0 1]
                           :width    100
                           :height   30
                           :color    [0.3 0.3 0.3 1]}})
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
  uniform vec2 u_rotation;

  void main() {
        vec2 rotatedPosition = vec2(
          a_position.x * u_rotation.y + a_position.y * u_rotation.x,
          a_position.y * u_rotation.y - a_position.x * u_rotation.x);

       vec2 position = rotatedPosition + u_translation;

       // convert the position from pixels to 0.0 to 1.0
       vec2 zeroToOne = position / u_resolution;

       // convert from 0->1 to 0->2
       vec2 zeroToTwo = zeroToOne * 2.0;

       // convert from 0->2 to -1->+1 (clip space)
       vec2 clipSpace = zeroToTwo - 1.0;

       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1); // * vec(1, -1) flips y so it's top-left corner.
  }")

(defn map-coordinate
  [s src-min src-max res-min res-max]
  (+
    (*
      (/ (- s src-min)
         (- src-max src-min))
      (- res-max res-min))
    res-min))

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn unit-circle
  [{:keys [height width radius] :or {height 100 width 100 radius 40}}]
  (let [local-state-atom (r/atom {:x-pos       (- (/ width 2) radius)
                                  :y-pos       (/ height 2)
                                  :width       width
                                  :half-width  (/ width 2)
                                  :height      height
                                  :half-height (/ height 2)
                                  :min-x       (- (/ width 2) radius)
                                  :max-x       (+ (/ width 2) radius)
                                  :min-y       (- (/ height 2) radius)
                                  :max-y       (+ (/ height 2) radius)
                                  :radius      radius
                                  :mouse-down  false})]
    (fn [{:keys [height width radius on-change] :or {height 100 width 100 radius 40}}]
      (let [{:keys [x-pos y-pos mouse-down min-x max-x min-y max-y half-width half-height]} @local-state-atom
            txt-style {:font-size "5px" :opacity 0.7 :user-select "none"}]
        [:svg {:viewBox       (str "0 0 " width " " height)
               :height        height
               :width         width
               :id            "unit-circle"
               :style         {:border "1px dashed orange"}
               :on-mouse-up   (fn [evt] (swap! local-state-atom assoc :mouse-down false))
               :on-mouse-move (fn [evt]
                                (when mouse-down
                                  (let [svg (js/document.querySelector "#unit-circle")
                                        pt (-> svg .createSVGPoint)
                                        _ (aset pt "x" (aget evt "clientX"))
                                        _ (aset pt "y" (aget evt "clientY"))
                                        svg-p (.matrixTransform pt (.inverse (.getScreenCTM svg)))

                                        x (aget svg-p "x")
                                        y (aget svg-p "y")
                                        unit-x (map-coordinate x min-x max-x -1 1)
                                        unit-y (map-coordinate y min-y max-y -1 1)
                                        angle-rad (Math/atan2 unit-y unit-x)
                                        cos-x (Math/cos angle-rad)
                                        sin-y (Math/sin angle-rad)
                                        svg-x (map-coordinate cos-x -1 1 min-x max-x)
                                        svg-y (map-coordinate sin-y -1 1 min-y max-y)]
                                    (swap! local-state-atom (fn [state]
                                                              (-> (assoc state :x-pos svg-x)
                                                                  (assoc :y-pos svg-y))))
                                    (on-change {:x cos-x :y sin-y :angle-rad angle-rad}))))
               :xmlns         "http://www.w3.org/2000/svg"}
         ;; vertical
         [:path {:d (str "M" min-x " 0 L" min-x " " width) :stroke "gray"}]
         [:path {:d (format "M~d 0 L~d ~d" half-width half-width width) :stroke "gray"}]
         [:path {:d (format "M~d 0 L~d ~d" half-width half-width width) :stroke "gray"}]
         [:path {:d (format "M~d 0 L~d ~d" max-x max-x height) :stroke "gray"}]
         ;; horizontal
         [:path {:d (format "M0 ~d L~d ~d" min-y width min-y) :stroke "gray"}]
         [:path {:d (format "M0 ~d L~d ~d" half-height width half-height) :stroke "gray"}]
         [:path {:d (format "M0 ~d L~d ~d" max-y width max-y) :stroke "gray"}]

         [:text {:x (+ half-width 2) :y (+ half-height 5) :fill "white" :style txt-style} "0"]
         [:text {:x (+ min-x 2) :y (+ half-height 5) :fill "white" :style txt-style} "-1"]
         [:text {:x (- max-y 5) :y (+ half-height 5) :fill "white" :style txt-style} "1"]

         [:text {:x (+ half-width 2) :y (+ min-y 5) :fill "white" :style txt-style} "1"]
         [:text {:x (+ half-width 2) :y (- max-y 2) :fill "white" :style txt-style} "-1"]

         [:polygon {:points (str half-width "," half-height " " (int x-pos) "," (int y-pos) " " (int x-pos) "," half-height)
                    :fill   "rgba(34, 167, 240, 0.6)"}]

         [:text {:x x-pos :y (+ half-height 5) :fill "white" :style {:font-size "4px" :user-select "none"}} (str "x=" (cljs.pprint/cl-format nil "~,2f" (map-coordinate x-pos 10 90 -1 1)))]
         [:text {:x x-pos :y y-pos :fill "white" :style {:font-size "4px" :user-select "none"}} (str "y=" (cljs.pprint/cl-format nil "~,2f" (map-coordinate y-pos 10 90 -1 1)))]

         [:circle {:cx            x-pos :cy y-pos :r "7px" :stroke "white" :fill "rgba(170,188,255, 0.7)" :stroke-width 1
                   :on-mouse-down (fn [] (swap! local-state-atom assoc :mouse-down true))
                   :style         {:cursor "pointer"}}]

         [:defs
          [:marker {:id "arrow-head" :markerWidth 10 :markerHeight 7 :refX 10 :refY 3.5 :orient "auto"}
           [:polygon {:points "0 0, 10 3.5, 0 7" :stroke "white" :fill "white"}]]]
         [:path {:d (format "M~d ~d L ~d ~d" half-width half-height x-pos y-pos) :stroke "orange" :marker-end "url(#arrow-head"}]

         [:circle {:cx half-width :cy half-height :r radius :stroke "white" :fill "none" :stroke-width 1}]]))))



(defn draw!
  [timestamp]
  (let [{:keys [rect] :as state} @state-atom]
    (-> (assoc-in state [:objects-to-draw :my-rect :uniforms :u_translation :values] [(:x rect) (:y rect)])
        (assoc-in [:objects-to-draw :my-rect :uniforms :u_rotation :values] (:rotation rect))
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
                                                                               :values [(:x rect) (:y rect)]}
                                                               :u_rotation    {:name   "u_rotation"
                                                                               :type   "uniform2fv"
                                                                               :values (:rotation rect)}
                                                               }
                                                  :element    {:draw-type (.-TRIANGLES gl)
                                                               :offset    0
                                                               :count     18}}})))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL 2D Rotation"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Rotation!"]])
   :source          "https://github.com/erichall/webgl-30/blob/master/src/webgl_30/lessons/rotation_2d_0.cljs"
   :tutorial-source "https://webglfundamentals.org/webgl/lessons/webgl-2d-rotation.html"
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
                          [unit-circle {:height    300
                                        :width     300
                                        :radius    120
                                        :on-change (fn [{:keys [x y]}]
                                                     (swap! state-atom assoc-in [:rect :rotation] [x y])
                                                     (js/requestAnimationFrame draw!))}]
                          ]

                         ]))})
