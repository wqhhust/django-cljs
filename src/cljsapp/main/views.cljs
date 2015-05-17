(ns cljsapp.main.views
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [dommy.core :refer-macros [sel sel1]]))

(defn main-component []
  [:div
    [:div "--MAIN COMPONENT--"]
    [:div [:a {:href "#/about"} "About"]]])
