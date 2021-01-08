(ns webgl-30.lessons.fundamentals
  (:require [webgl-30.webgl :as webgl]
            [webgl-30.component :refer [webgl-canvas]]))

(def initial-state {:gl nil})
(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(defn draw!
  [timestamp continue-fn]
  (let []
    (->
      (println "...")
      ;; cleeaer

      )

    )
  )

(def ^:export lesson
  {:title (fn []
            [:h1
             {:style {:font-family "monospace"}}
             "Lesson - WebGL Fundamentals"])
   :start (fn []
            [webgl-canvas {:height 400 :width 400 :id :fundamentals :on-mount (fn []
                                                                               (do
                                                                                (swap! state-atom assoc :gl )
                                                                                 )
                                                                                )}]
            )})
