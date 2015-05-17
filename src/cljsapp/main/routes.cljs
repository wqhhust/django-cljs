(ns cljsapp.main.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.session :as session]
            [secretary.core :as secretary]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [cljsapp.main.views :refer [main-component]]))

(secretary/defroute "/" [] (session/put! :current-page #'main-component))
