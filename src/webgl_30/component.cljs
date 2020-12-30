(ns webgl-30.component
  (:require [reagent.core :as r]))

(defn slider
  [{:keys [on-change value min max step]}]
  [:input {:type          "range"
           :min           min
           :default-value value
           :step          (or step 1)
           :max           max
           :style         {:width "100%"}
           :on-change     (fn [evt]
                            (let [val (js/parseInt (.. evt -target -value))]
                              (on-change val)))}])

(defn slider-component
  [{:keys [state trigger-event]}]
  [:div {:style {:width "200px"}}
   [:div {:style {:display        "flex"
                  :flex-direction "row"}}
    [:span "x"]
    [slider {:value     (get-in state [:translation-rect :x])
             :min       0
             :max       (get-in state [:canvas-dim :width])
             :on-change (fn [val] (trigger-event :x-change val))}]
    [:span (get-in state [:translation-rect :x])]]
   [:div {:style {:display        "flex"
                  :flex-direction "row"}}
    [:span "y"]
    [slider {:value     (get-in state [:translation-rect :y])
             :min       0
             :max       (get-in state [:canvas-dim :height])
             :on-change (fn [val] (trigger-event :y-change val))}]
    [:span (get-in state [:translation-rect :y])]]
   [:div {:style {:display        "flex"
                  :flex-direction "row"}}
    [:span "deg"]
    [slider {:value     (get-in state [:translation-rect :rotation])
             :min       0
             :max       360
             :on-change (fn [val] (trigger-event :rotation-change val))}]
    [:span (get-in state [:translation-rect :rotation])]]
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
