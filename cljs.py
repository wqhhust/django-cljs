##
# This is a cheap convenience I had to bake in 2/3 minutes, will turn into a Django custom command with more meat
# This is not to be taken seriously :-)
##

import sys
import os

{% verbatim %}
CONF_TEMPLATE = """\
(ns cljsapp.{0}.conf)
"""

HANDLERS_TEMPLATE = """\
(ns cljsapp.{0}.handlers
  (:require [re-frame.core :refer [dispatch dispatch-sync register-handler path trim-v after]]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [secretary.core :as secretary]
            [ajax.core :refer [GET POST]]))
"""

ROUTES_TEMPLATE = """\
(ns cljsapp.{0}.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.session :as session]
            [secretary.core :as secretary]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [cljsapp.{0}.views :refer [{0}-component]]))

(secretary/defroute "/{0}" [] (session/put! :current-page {0}-component))
"""

SUBS_TEMPLATE = """\
(ns cljsapp.{0}.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))
"""

STYLES_TEMPLATE = """\
(ns cljsapp.{0}.styles
  (:require [garden.core :as garden :refer [css]]
            [garden.units :as u :refer [px pt]]
            [garden.color :as color :refer [hsl rgb]]
            [garden.stylesheet :refer [at-media]]
            [garden.def :refer [defrule defkeyframes]]))
"""

VIEWS_TEMPLATE = """\
(ns cljsapp.{0}.views
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [cljsapp.{0}.conf :as conf]
            [cljsapp.{0}.styles :as styles]
            [cljsapp.{0}.handlers]
            [cljsapp.{0}.subs]
            [dommy.core :refer-macros [sel sel1]]))

(defn {0}-component []
  [:div.{0}-panel
    [:div "--{0} component--"]
    [:div [:a {{:href "#/"}} "Home"]]])

"""

SRC_PATH = "src/cljsapp"


def main():
    panel_name = sys.argv[1]
    try:
        os.system("mkdir {}/{}".format(SRC_PATH, panel_name))
    except:
        print "Error: Folder already exists"
        return

    cljs_files = ["conf.cljs", "handlers.cljs", "routes.cljs", "subs.cljs", "views.cljs", "styles.cljs"]

    for file_name in cljs_files:
        with file("{}/{}/{}".format(SRC_PATH, panel_name, file_name), "w") as outf:
            if file_name == "conf.cljs":
                tpl = CONF_TEMPLATE
            elif file_name == "handlers.cljs":
                tpl = HANDLERS_TEMPLATE
            elif file_name == "routes.cljs":
                tpl = ROUTES_TEMPLATE
            elif file_name == "subs.cljs":
                tpl = SUBS_TEMPLATE
            elif file_name == "views.cljs":
                tpl = VIEWS_TEMPLATE
            elif file_name == "styles.cljs":
                tpl = STYLES_TEMPLATE

            outf.write(tpl.format(panel_name))


if __name__ == "__main__":
    main()
{% endverbatim %}
