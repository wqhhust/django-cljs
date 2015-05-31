(ns cljsapp.main.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.session :as session]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [secretary.core :as secretary]
            [cljsapp.util :as util]
            [cljsapp.conf :as conf]
            [cljsapp.main.conf :as local-conf]
            [cljsapp.main.views :refer [main-component]]))

(secretary/defroute "/" [] (session/put! :current-page main-component))
