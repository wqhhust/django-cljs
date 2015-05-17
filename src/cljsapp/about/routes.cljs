(ns cljsapp.about.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.session :as session]
            [secretary.core :as secretary]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [cljsapp.about.views :refer [about-component]]))

(secretary/defroute "/about" [] (session/put! :current-page #'about-component))
