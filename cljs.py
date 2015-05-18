##
# This is a cheap convenience I had to bake in 2/3 minutes, will turn into a Django custom command with more meat
# This is not to be taken seriously :-)
##

import sys
import os

{% vertabim %}
DB_TEMPLATE = """\
(ns cljsapp.{0}.db)
"""

HANDLERS_TEMPLATE = """\
(ns cljsapp.{0}.handlers
  (:require [re-frame.core :refer [dispatch dispatch-sync register-handler path trim-v after]]
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

VIEWS_TEMPLATE = """\
(ns cljsapp.{0}.views
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [dispatch dispatch-sync]]
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

    cljs_files = ["db.cljs", "handlers.cljs", "routes.cljs", "subs.cljs", "views.cljs"]

    for file_name in cljs_files:
        #os.system("touch {}/{}/{}".format(SRC_PATH, panel_name, file_name))
        with file("{}/{}/{}".format(SRC_PATH, panel_name, file_name), "w") as outf:
            if file_name == "db.cljs":
                tpl = DB_TEMPLATE
            elif file_name == "handlers.cljs":
                tpl = HANDLERS_TEMPLATE
            elif file_name == "routes.cljs":
                tpl = ROUTES_TEMPLATE
            elif file_name == "subs.cljs":
                tpl = SUBS_TEMPLATE
            elif file_name == "views.cljs":
                tpl = VIEWS_TEMPLATE

            outf.write(tpl.format(panel_name))


if __name__ == "__main__":
    main()
{% endverbatim %}
