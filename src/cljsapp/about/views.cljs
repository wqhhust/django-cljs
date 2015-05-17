(ns cljsapp.about.views
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [dommy.core :refer-macros [sel sel1]]))

(defn about-component []
  [:div
    [:div "--ABOUT COMPONENT--"]
    [:div [:a {:href "#/"} "Home"]]])
