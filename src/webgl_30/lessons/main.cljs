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
            [webgl-30.lessons.orthographic_3d_0 :as orthographic-3d-0]
            [webgl-30.lessons.orthographic_3d_1 :as orthographic-3d-1]
            [webgl-30.lessons.perspective_3d_0 :as perspective-3d-0]
            [webgl-30.lessons.perspective_3d_1 :as perspective-3d-1]
            [webgl-30.lessons.cameras-0 :as cameras-0]
            [webgl-30.lessons.cameras-1 :as cameras-1]
            [webgl-30.lessons.animations :as animations]
            [webgl-30.lessons.textures-0 :as textures-0]
            [webgl-30.lessons.textures-1 :as textures-1]
            [webgl-30.lessons.textures-2 :as textures-2]
            [webgl-30.lessons.textures-3 :as textures-3]
            [webgl-30.lessons.textures-3-revised :as textures-3-revised]

            [webgl-30.lessons.hello_point_1 :as hello-point-1]
            [webgl-30.lessons.hello_point_2 :as hello-point-2]
            [webgl-30.lessons.click-point :as click-point]
            [webgl-30.lessons.color-point :as color-point]
            [webgl-30.lessons.multipoint :as multipoint]

            [webgl-30.lessons.conway :as conway]))

(def initial-state {:active-page-index 0
                    :lessons           [fundamentals-0/lesson
                                        fundamentals-1/lesson
                                        fundamentals-2/lesson
                                        translation-2d-0/lesson
                                        translation-2d-1/lesson
                                        rotation-2d-0/lesson
                                        scale-2d/lesson
                                        matrices-2d_0/lesson
                                        matrices-2d_1/lesson
                                        matrices-2d_2/lesson
                                        orthographic-3d-0/lesson
                                        orthographic-3d-1/lesson
                                        perspective-3d-0/lesson
                                        perspective-3d-1/lesson
                                        cameras-0/lesson
                                        cameras-1/lesson
                                        animations/lesson
                                        textures-0/lesson
                                        textures-1/lesson
                                        textures-2/lesson
                                        textures-3/lesson
                                        textures-3-revised/lesson
                                        hello-point-1/lesson
                                        hello-point-2/lesson
                                        click-point/lesson
                                        color-point/lesson
                                        multipoint/lesson

                                        ;conway/lesson

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
     [:div
      {:style {:display "block"}}
      [start]]
     [:div
      [:span {:style {:color         "white"
                      :display       "block"
                      :margin-bottom "10px"
                      :margin-top    "10px"}}
       "Clojure implementation of "
       [:a {:href   (str "https://webglfundamentals.org/webgl/lessons/" tutorial-source)
            :target "_blank"
            :style  {:color       "rgba(0, 181, 255, 1)"
                     :font-family "monospace"}} tutorial-source]]
      [:span "Github: " [:a {:href   (str "https://github.com/erichall/webgl-30/blob/master/src/" source)
                             :target "_blank"
                             :style  {:color       "rgba(0, 181, 255, 1)"
                                      :font-family "monospace"}} "[source]"]]]]))

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
