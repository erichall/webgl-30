(ns webgl-30.lessons.main
  (:require [reagent.dom :as rd]
            [reagent.core :as r]
            [webgl-30.lessons.fundamentals-0 :as fundamentals-0]
            [webgl-30.lessons.fundamentals-1 :as fundamentals-1]
            [webgl-30.lessons.fundamentals-2 :as fundamentals-2]
            [webgl-30.lessons.translation-2d-0 :as translation-2d-0]
            [webgl-30.lessons.translation-2d-1 :as translation-2d-1]
            [webgl-30.lessons.rotation-2d-0 :as rotation-2d-0]
            [webgl-30.lessons.scale-2d :as scale-2d]
            [webgl-30.lessons.matrices-2d_0 :as matrices-2d_0]
            [webgl-30.lessons.matrices-2d_1 :as matrices-2d_1]
            [webgl-30.lessons.matrices-2d_2 :as matrices-2d_2]
            ))

(def initial-state {:active-page-index 9
                    :lessons           [
                                        fundamentals-0/lesson
                                        fundamentals-1/lesson
                                        fundamentals-2/lesson
                                        translation-2d-0/lesson
                                        translation-2d-1/lesson
                                        rotation-2d-0/lesson
                                        scale-2d/lesson
                                        matrices-2d_0/lesson
                                        matrices-2d_1/lesson
                                        matrices-2d_2/lesson
                                        ]})

(declare render-component)
(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state)
  (add-watch state-atom :loop (fn [_ _ _ _]
                                (render-component @state-atom))))

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
  [{:keys [style on-left on-right show-left show-right]}]
  (let [arrow-width 36
        arrow-height 36]
    [:div {:style (merge {:display        "flex"
                          :flex-direction "row"
                          :align-items    "center"}
                         style)}
     (when show-left
       [arrow {:height arrow-height :width arrow-width :angle 270 :on-click on-left :style {:margin-right "10px"}}])
     (when show-right
       [arrow {:height arrow-height :width arrow-width :angle 90 :on-click on-right}])]))

(defn app
  [{:keys [state]}]
  (let [{:keys [title start source tutorial-source]} (get-in state [:lessons (:active-page-index state)])]
    [:div
     [:div {:style {:display         "flex"
                    :flex-direction  "row"
                    :justify-content "space-between"}}
      [title]
      [navigation {:show-left  (> (:active-page-index state) 0)
                   :show-right (< (:active-page-index state) (dec (count (:lessons state))))
                   :on-left    (fn []
                                 (swap! state-atom (fn [{:keys [active-page-index] :as state}]
                                                     (if (zero? active-page-index)
                                                       state
                                                       (assoc state :active-page-index (dec active-page-index))))))
                   :on-right   (fn []
                                 (swap! state-atom (fn [{:keys [lessons active-page-index] :as state}]
                                                     (if (= (dec (count lessons)) active-page-index)
                                                       state
                                                       (assoc state :active-page-index (inc active-page-index))))))}]]
     [:div {:style {:display "block"}}
      [start]]
     [:div
      [:span {:style {:color         "white"
                      :display       "block"
                      :margin-bottom "10px"
                      :margin-top    "10px"}}
       "Clojure implementation of "
       [:a {:href   tutorial-source
            :target "_blank"
            :style  {:color       "rgba(0, 181, 255, 1)"
                     :font-family "monospace"}} tutorial-source]]
      [:span "Github: " [:a {:href   source
                             :target "_blank"
                             :style  {:color       "rgba(0, 181, 255, 1)"
                                      :font-family "monospace"}} "[source]"]]

      ]]))

(defn render-component
  [state]
  (rd/render [app {:state state}]
             (. js/document (getElementById "app"))))

(defn init!
  []
  (render-component @state-atom))

(defn reload!
  []
  (render-component @state-atom))
