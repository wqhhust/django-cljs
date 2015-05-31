(ns cljsapp.about.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.session :as session]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [secretary.core :as secretary]
            [cljsapp.util :as util]
            [cljsapp.conf :as conf]
            [cljsapp.about.conf :as local-conf]
            [cljsapp.about.views :refer [about-component]]))

(secretary/defroute "/about" [] (session/put! :current-page about-component))
