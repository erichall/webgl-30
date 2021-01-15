(ns webgl-30.component
  (:require [reagent.core :as r]))

(defn deg->rad
  [a]
  (* a (/ Math/PI 180)))

(defn rad->deg
  [a]
  (* a (/ 180 Math/PI)))

(defn slider
  [{:keys [on-change value min max step id] :or {step 1}}]
  [:input {:type      "range"
           :id        id
           :value     value
           :step      step
           :min       min
           :max       max
           :style     {:width  "100%"
                       :cursor "pointer"}
           :on-change (fn [evt]
                        (let [val (js/parseFloat (.. evt -target -value))]
                          (on-change val)))}])

(defn slider-row
  [label value min max on-change]
  [:tr
   [:td label]
   [:td
    [slider {:value     value
             :id        :rect-x
             :min       min
             :max       max
             :on-change on-change}]]
   [:td [:span value]]])

(defn slider-component
  [{:keys [state trigger-event]}]
  [:table {:style {:width        "200px"
                   :table-layout "fixed"}}
   [:tbody
    [slider-row "x" (get-in state [:translation-rect :x]) (- 200) 200 (fn [val] (trigger-event :data-change {:path  [:translation-rect :x]
                                                                                                             :value val}))]
    [:tr
     [:td [:span "y"]]
     [:td [slider {:value     (get-in state [:translation-rect :y])
                   :id        :rect-y
                   :min       (- 200)
                   :max       200
                   :on-change (fn [val] (trigger-event :data-change {:path  [:translation-rect :y]
                                                                     :value val}))}]]
     [:td [:span (get-in state [:translation-rect :y])]]]
    [:tr
     [:td [:span "z"]]
     [:td [slider {:value     (get-in state [:translation-rect :z])
                   :min       -1000
                   :max       1
                   :id        :rect-z
                   :on-change (fn [val] (trigger-event :data-change {:path  [:translation-rect :z]
                                                                     :value val})
                                )}]]

     [:td [:span (get-in state [:translation-rect :z])]]]
    [:tr
     [:td [:span "rot-x"]]
     [:td [slider {:value     (rad->deg (get-in state [:translation-rect :rotation-x]))
                   :id        :rect-deg
                   :min       0
                   :max       360
                   :on-change (fn [val]
                                (trigger-event :data-change {:path  [:translation-rect :rotation-x]
                                                             :value (deg->rad val)})
                                )}]]
     [:td [:span (-> (get-in state [:translation-rect :rotation-x])
                     rad->deg
                     Math/round)]]]
    [:tr
     [:td [:span "rot-y"]]
     [:td [slider {:value     (rad->deg (get-in state [:translation-rect :rotation-y]))
                   :id        :rect-deg
                   :min       0
                   :max       360
                   :on-change (fn [val]
                                (trigger-event :data-change {:path  [:translation-rect :rotation-y]
                                                             :value (deg->rad val)})
                                )}]]
     [:td [:span (-> (get-in state [:translation-rect :rotation-y])
                     rad->deg
                     Math/round)]]]
    [:tr
     [:td [:span "rot-z"]]
     [:td [slider {:value     (rad->deg (get-in state [:translation-rect :rotation-z]))
                   :id        :rect-deg
                   :min       0
                   :max       360
                   :on-change (fn [val]
                                (trigger-event :data-change {:path  [:translation-rect :rotation-z]
                                                             :value (deg->rad val)})
                                )}]]
     [:td [:span (-> (get-in state [:translation-rect :rotation-z])
                     rad->deg
                     Math/round)]]]
    [:tr
     [:td [:span {:style {:white-space "nowrap"}} "scale-x"]]
     [:td [slider {:value     (get-in state [:translation-rect :scale-x])
                   :id        :rect-scale-x
                   :step      0.01
                   :min       -5
                   :max       5
                   :on-change (fn [val]
                                (trigger-event :data-change {:path  [:translation-rect :scale-x]
                                                             :value val})
                                )}]]
     [:td [:span (get-in state [:translation-rect :scale-x])]]]
    [:tr
     [:td [:span {:style {:white-space "nowrap"}} "scale-y"]]
     [:td [slider {:value     (get-in state [:translation-rect :scale-y])
                   :id        :rect-scale-y
                   :step      0.01
                   :min       -5
                   :max       5
                   :on-change (fn [val]
                                (trigger-event :data-change {:path  [:translation-rect :scale-y]
                                                             :value val}))}]]
     [:td [:span (get-in state [:translation-rect :scale-y])]]]
    [:tr
     [:td [:span {:style {:white-space "nowrap"}} "scale-z"]]
     [:td [slider {:value     (get-in state [:translation-rect :scale-z])
                   :id        :rect-scale-z
                   :step      0.01
                   :min       -5
                   :max       5
                   :on-change (fn [val]
                                (trigger-event :data-change {:path  [:translation-rect :scale-z]
                                                             :value val}))}]]
     [:td [:span (get-in state [:translation-rect :scale-z])]]]
    [:tr
     [:td [:span {:style {:white-space "nowrap"}} "field-of-view"]]
     [:td [slider {:value     (rad->deg (get-in state [:translation-rect :field-of-view]))
                   :id        :field-of-view
                   :step      0.01
                   :min       0
                   :max       360
                   :on-change (fn [val]
                                (trigger-event :data-change {:path  [:translation-rect :field-of-view]
                                                             :value (deg->rad val)}))}]]
     [:td [:span (rad->deg (get-in state [:translation-rect :field-of-view]))]]]

    [slider-row "camera" (int (rad->deg (get-in state [:camera :angle-rad]))) 0 360
     (fn [val]
       (trigger-event :data-change {:path  [:camera :angle-rad]
                                    :value (deg->rad val)}))
     ]
    ]
   ])

(defn webgl-canvas
  [{:keys [height width id on-mount]}]
  (r/create-class
    {:display-name        "webgl-canvas"
     :reagent-render      (fn [] [:canvas {:width  (str width "px")
                                           :height (str height "px")
                                           :style  {:border "1px dashed green"}
                                           :id     id}])
     :component-did-mount on-mount}))

(defn app
  [{:keys [state trigger-event]}]
  [:div
   [slider-component {:trigger-event trigger-event
                      :state         state}]
   [:div {:style    {:border "1px dashed orange"}
          :on-click (fn [] (trigger-event :toggle-animation))} (if (get-in state [:animate :running?]) "Stop" "Play")]
   [webgl-canvas {:trigger-event trigger-event :state state}]])

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn map-coordinate
  [s src-min src-max res-min res-max]
  (+
    (*
      (/ (- s src-min)
         (- src-max src-min))
      (- res-max res-min))
    res-min))

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


