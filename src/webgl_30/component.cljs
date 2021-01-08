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
