(ns cljsapp.main.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [cljsapp.util :as util]
            [cljsapp.conf :as conf]
            [cljsapp.main.conf :as local-conf]))
