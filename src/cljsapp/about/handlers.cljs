(ns cljsapp.about.handlers
  (:require [re-frame.core :refer [dispatch dispatch-sync register-handler path trim-v after]]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [secretary.core :as secretary]
            [ajax.core :refer [GET POST]]
            [cljsapp.util :as util]
            [cljsapp.conf :as conf]
            [cljsapp.about.conf :as local-conf]))
