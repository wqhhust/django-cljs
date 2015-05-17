(ns cljsapp.core
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.core :as r :refer [atom]]
            [dommy.core :refer-macros [sel sel1]]
            [reagent.session :as session]
            [secretary.core :as secretary]
            [ajax.core :refer [GET POST]]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [goog.events :as events]
            [cljsapp.main.routes]
            [cljsapp.about.routes]
            [goog.history.EventType :as EventType])
  (:import [goog History]
           [goog.history EventType]))

;; -------------------------
;; Routes
(defn current-page [] [:div [(session/get :current-page)]])

(secretary/set-config! :prefix "#")
;; ------------------------
;; Google Event Hook
(def history
  (doto (History.)
    (events/listen EventType.NAVIGATE (fn [event] (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn ^:export main
  []
  (r/render [current-page] (sel1 "#app")))
