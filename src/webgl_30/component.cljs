(ns webgl-30.component
  (:require [reagent.core :as r]))

(defn slider
  [{:keys [on-change value min max]}]
  [:input {:type          "range"
           :min           min
           :default-value value
           :max           max
           :style         {:width "100%"}
           :on-change     (fn [evt]
                            (let [val (js/parseInt (.. evt -target -value))]
                              (on-change val)))}])

(defn slider-component
  [{:keys [state trigger-event]}]
  (println (:x state))
  [:div {:style {:width "200px"}}
   [:div
    "x"
    [slider {:value     (get-in state [:translation-rect :x])
             :min       0
             :max       (get-in state [:canvas-dim :width])
             :on-change (fn [val] (trigger-event :x-change val))}]]
   [:div
    "y"
    [slider {:value     (get-in state [:translation-rect :y])
             :min       0
             :max       (get-in state [:canvas-dim :height])
             :on-change (fn [val] (trigger-event :y-change val))}]]])

(defn webgl-canvas
  [{:keys [state trigger-event]}]
  (r/create-class
    {:display-name        "webgl-canvas"
     :reagent-render      (fn [] [:canvas {:ref    (fn [el]
                                                     ;; hot reloading seems to give is nil here?!?!
                                                     (when el
                                                       (trigger-event :canvas-ref el)))
                                           :width  (str (get-in state [:canvas-dim :width]) "px")
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
