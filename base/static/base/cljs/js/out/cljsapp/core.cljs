(ns cljsapp.core
  (:require [reagent.core :as r :refer [atom]]
            [dommy.core :refer-macros [sel sel1]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [ajax.core :refer [GET POST]]
            [goog.events :as events]
            [goog.history.EventType :as EventType])
  (:import [goog History]
           [goog.history EventType]))


(defn home-component []
  [:div
   [:h1 "Welcome Home"]
   [:div "This is from the home component " [:a {:href "#/about"} "Go to About"]]])


(defn about-component []
  [:div
   [:h1 "Le About..."]
   [:div "Nothing here... " [:a {:href "#/"} "Take me back"]]])

;; -------------------------
;; Routes
(defn current-page [] [:div [(session/get :current-page)]])

(secretary/set-config! :prefix "#")
(secretary/defroute "/" [] (session/put! :current-page #'home-component))
(secretary/defroute "/about" [] (session/put! :current-page #'about-component))

;; ------------------------
;; Google Event Hook
(def history
  (doto (History.)
    (events/listen EventType.NAVIGATE (fn [event] (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn ^:export main
  []
  (r/render [current-page] (sel1 "#app")))
