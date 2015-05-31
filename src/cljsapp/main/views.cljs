(ns cljsapp.main.views
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [dommy.core :refer-macros [sel sel1]]
            [cljsapp.conf :as conf]
            [cljsapp.util :as util]
            [cljsapp.main.conf :as local-conf]
            [cljsapp.main.styles :as styles]
            [cljsapp.main.handlers]
            [cljsapp.main.subs]))

(defn main-component []
  [:div.main-panel
    [:div "--main component--"]
    [:div [:a {:href "#/"} "Home"]]])

