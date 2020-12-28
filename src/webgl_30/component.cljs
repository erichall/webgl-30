(ns webgl-30.component)

(defn slider
  [{:keys [on-change min max]}]
  [:input {:type      "range"
           :min       min
           :max       max
           :style     {:width "100%"}
           :on-change (fn [evt]
                        (let [val (js/parseInt (.. evt -target -value))]
                          (on-change val)
                          ))}])

(defn slider-component
  [{:keys [state trigger-event]}]
  [:div
   [:div
    "x"
    [slider {:value     (:x state)
             :min       0
             :max       100
             :on-change (fn [val] (trigger-event :x-change val))}]]
   [:div
    "y"
    [slider {:value     (:y state)
             :min       0
             :max       100
             :on-change (fn [val] (trigger-event :y-change val))}]]])
