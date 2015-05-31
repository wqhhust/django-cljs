(ns cljsapp.about.views
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [dommy.core :refer-macros [sel sel1]]
            [cljsapp.conf :as conf]
            [cljsapp.util :as util]
            [cljsapp.about.conf :as local-conf]
            [cljsapp.about.styles :as styles]
            [cljsapp.about.handlers]
            [cljsapp.about.subs]))

(defn about-component []
  [:div.about-panel
    [:div "--about component--"]
    [:div [:a {:href "#/"} "Home"]]])

