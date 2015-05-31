##
# This is a cheap convenience I had to bake in 2/3 minutes, will turn into a Django custom command with more meat
# This is not to be taken seriously :-)
##

import sys
import os

{% verbatim %}
CONF_TEMPLATE = """\
(ns cljsapp.{0}.conf
  (:require [cljsapp.conf :as conf]
            [cljsapp.util as util]))
"""

HANDLERS_TEMPLATE = """\
(ns cljsapp.{0}.handlers
  (:require [re-frame.core :refer [dispatch dispatch-sync register-handler path trim-v after]]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [secretary.core :as secretary]
            [ajax.core :refer [GET POST]]
            [cljsapp.util :as util]
            [cljsapp.conf :as conf]
            [cljsapp.{0}.conf :as local-conf]))
"""

ROUTES_TEMPLATE = """\
(ns cljsapp.{0}.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:require [reagent.session :as session]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [secretary.core :as secretary]
            [cljsapp.util :as util]
            [cljsapp.conf :as conf]
            [cljsapp.{0}.conf :as local-conf]
            [cljsapp.{0}.views :refer [{0}-component]]))

(secretary/defroute "/{0}" [] (session/put! :current-page {0}-component))
"""

SUBS_TEMPLATE = """\
(ns cljsapp.{0}.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [cljsapp.util :as util]
            [cljsapp.conf :as conf]
            [cljsapp.{0}.conf :as local-conf]))
"""

STYLES_TEMPLATE = """\
(ns cljsapp.{0}.styles
  (:require-macros [garden.def :refer [defrule defkeyframes]])
  (:require [garden.core :as garden :refer [css]]
            [garden.units :as units :refer [px pt]]
            [garden.color :as color :refer [hsl rgb]]
            [garden.stylesheet :refer [at-media]]
            [cljsapp.conf :as conf]
            [cljsapp.util :as util]
            [cljsapp.{0}.conf :as local-conf]))
"""

VIEWS_TEMPLATE = """\
(ns cljsapp.{0}.views
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [dommy.core :refer-macros [sel sel1]]
            [cljsapp.conf :as conf]
            [cljsapp.util :as util]
            [cljsapp.{0}.conf :as local-conf]
            [cljsapp.{0}.styles :as styles]
            [cljsapp.{0}.handlers]
            [cljsapp.{0}.subs]))

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

    cljs_files = ["conf.cljs", "handlers.cljs", "routes.cljs",
            "styles.cljs", "subs.cljs", "views.cljs"]

    for file_name in cljs_files:
        with file("{}/{}/{}".format(SRC_PATH, panel_name, file_name), "w") as outf:
            if file_name == "conf.cljs":
                tpl = CONF_TEMPLATE
            elif file_name == "handlers.cljs":
                tpl = HANDLERS_TEMPLATE
            elif file_name == "routes.cljs":
                tpl = ROUTES_TEMPLATE
            elif file_name == "styles.cljs":
                tpl = STYLES_TEMPLATE
            elif file_name == "subs.cljs":
                tpl = SUBS_TEMPLATE
            elif file_name == "views.cljs":
                tpl = VIEWS_TEMPLATE

            outf.write(tpl.format(panel_name))


if __name__ == "__main__":
    main()
{% endverbatim %}
