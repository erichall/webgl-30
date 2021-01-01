(ns webgl-30.component
  (:require [reagent.core :as r]))

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

(defn slider-component
  [{:keys [state trigger-event]}]
  [:table {:style {:width "200px"}}
   [:tbody
    [:tr
     [:td "x"]
     [:td
      [slider {:value     (get-in state [:translation-rect :x])
               :id        :rect-x
               :min       0
               :max       (get-in state [:canvas-dim :width])
               :on-change (fn [val] (trigger-event :x-change val))}]]
     [:td [:span (get-in state [:translation-rect :x])]]]
    [:tr
     [:td [:span "y"]]
     [:td [slider {:value     (get-in state [:translation-rect :y])
                   :min       0
                   :id        :rect-y
                   :max       (get-in state [:canvas-dim :height])
                   :on-change (fn [val] (trigger-event :y-change val))}]]
     [:td [:span (get-in state [:translation-rect :y])]]]
    [:tr
     [:td [:span "deg"]]
     [:td [slider {:value     (get-in state [:translation-rect :rotation])
                   :id        :rect-deg
                   :min       0
                   :max       360
                   :on-change (fn [val] (trigger-event :rotation-change val))}]]
     [:td [:span (get-in state [:translation-rect :rotation])]]]
    [:tr
     [:td [:span {:style {:white-space "nowrap"}} "scale-x"]]
     [:td [slider {:value     (get-in state [:translation-rect :scale-x])
                   :id        :rect-scale-x
                   :step      0.01
                   :min       -5
                   :max       5
                   :on-change (fn [val] (trigger-event :scale-x-change val))}]]
     [:td [:span (get-in state [:translation-rect :scale-x])]]]
    [:tr
     [:td [:span {:style {:white-space "nowrap"}} "scale-y"]]
     [:td [slider {:value     (get-in state [:translation-rect :scale-y])
                   :id        :rect-scale-y
                   :step      0.01
                   :min       -5
                   :max       5
                   :on-change (fn [val] (trigger-event :scale-y-change val))}]]
     [:td [:span (get-in state [:translation-rect :scale-y])]]]
    ]
   ])

(defn webgl-canvas
  [{:keys [state trigger-event]}]
  (r/create-class
    {:display-name        "webgl-canvas"
     :reagent-render      (fn [] [:canvas {:width  (str (get-in state [:canvas-dim :width]) "px")
                                           :height (str (get-in state [:canvas-dim :height]) "px")
                                           :style  {:border "1px dashed green"}
                                           :id     (:canvas-id state)}])
     :component-did-mount (fn [] (trigger-event :canvas-did-mount))}))

(defn app
  [{:keys [state trigger-event]}]
  [:div
   [slider-component {:trigger-event trigger-event
                      :state         state}]
   [webgl-canvas {:trigger-event trigger-event :state state}]])
