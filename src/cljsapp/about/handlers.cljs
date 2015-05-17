(ns cljsapp.about.handlers
  (:require [re-frame.core :refer [dispatch dispatch-sync register-handler path trim-v after]]
            [ajax.core :refer [GET POST]]))
