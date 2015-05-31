(ns cljsapp.about.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [cljsapp.util :as util]
            [cljsapp.conf :as conf]
            [cljsapp.about.conf :as local-conf]))
