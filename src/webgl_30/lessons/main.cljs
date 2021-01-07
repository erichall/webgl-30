(ns webgl-30.lessons.main
  (:require [reagent.dom :as rd]
            [reagent.core :as r]
            [webgl-30.lessons.fundamentals :as fundamentals]
            ))

(def initial-state {:active-page-index 0
                    :lessons           [fundamentals/lesson]
                    })

(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(defn arrow
  []
  (let [click-atom (r/atom false)]
    (fn [{:keys [height width angle on-click style]}]
      [:svg {:height        height
             :width         width
             :on-mouse-down (fn []
                              (reset! click-atom true)
                              (on-click))
             :on-mouse-up   (fn [] (reset! click-atom false))
             :viewport      (str "0 0 " height " " width)
             :style         (merge {:cursor "pointer"} style)}
       [:polygon {:transform (str "rotate(" angle "," (/ width 2) "," (/ height 2) ")")
                  :fill      "white"
                  :style     {:opacity (if @click-atom 0.8 1)
                              :filter  "drop-shadow( 4px 4px 3px rgba(0, 0, 0, .7))"}
                  :points    (str (/ width 2) ",0 0," height " " width "," height)}]])))

(defn navigation
  [{:keys [style on-left on-right]}]
  (let [arrow-width 36
        arrow-height 36]
    [:div {:style (merge {:display        "flex"
                          :flex-direction "row"
                          :align-items    "center"}
                         style)}
     [arrow {:height arrow-height :width arrow-width :angle 270 :on-click on-left :style {:margin-right "10px"}}]
     [arrow {:height arrow-height :width arrow-width :angle 90 :on-click on-right}]]))

(defn app
  [{:keys [state]}]
  (let [{:keys [title start]} (get-in state [:lessons (:active-page-index state)])]
    [:div
     [:div {:style {:display         "flex"
                    :flex-direction  "row"
                    :justify-content "space-between"}}
      [title]
      [navigation {:on-left  (fn [])
                   :on-right (fn [])}]]
     [start]]))

(defn render-component
  [state]
  (rd/render [app {:state state}]
             (. js/document (getElementById "app"))))

(defn init!
  []
  (render-component @state-atom))
