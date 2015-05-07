(defproject cljsapp "0.0.1"
  :dependencies [[org.clojure/clojure "LATEST"]
                 [org.clojure/clojurescript "LATEST"]
                 [reagent "LATEST"]
                 [reagent-forms "LATEST"]
                 [reagent-utils "LATEST"]
                 [re-frame "LATEST"]
                 [re-com "LATEST"]
                 [cljs-ajax "LATEST"]
                 [prismatic/dommy "LATEST"]
                 [com.andrewmcveigh/cljs-time "LATEST"]
                 [secretary "LATEST"]]

  :plugins [[lein-cljsbuild "LATEST"]
            [lein-pdo  "LATEST"]
            [lein-cljfmt  "LATEST"]
            [lein-kibit  "LATEST"]
            [jonase/eastwood  "LATEST"]
            [lein-shell  "LATEST"]
            [lein-bower "LATEST"]
            [lein-npm "LATEST"]
            [lein-less  "LATEST"]]

  :bower-dependencies [[bootstrap "3.3.4"
                        font-awesome "~4.3.0"]]
  :bower {:directory "base/static/base/bower_components"}
  :less  {:source-paths  ["base/static/base/less"]
          :target-path  "base/static/base/css"}

  :hooks [leiningen.cljsbuild leiningen.less]
  :min-lein-version "2.5.0"
  :jvm-opts  ["-Xmx128m"  "-server" "-XX:+TieredCompilation"  "-XX:TieredStopAtLevel=1"]
  :profiles {:dev {:cljsbuild
                   {:builds {:client {
                                      :compiler
                                      {:main cljsapp.core
                                       :optimizations :none
                                       :source-map true
                                       :source-map-timestamp true}}}}}

             :prod {:cljsbuild
                    {:builds {:client {:compiler
                                       {:optimizations :simple
                                        :elide-asserts true
                                        :pretty-print false}}}}}}

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler
                                {:output-dir "base/static/base/cljs/js/out"
                                 :asset-path   "/static/base/cljs/js/out"
                                 :output-to "base/static/base/cljs/main.js"}}}}

  :aliases {"clear-cljs" ["shell" "rm" "-Rf" "base/static/cljs"]
            "dev" ["pdo" "cljsbuild" "auto," "less" "auto"]
            "prod" ["do" "clear-cljs" "with-profile" "prod" "cljsbuild" "once"]
            "format" ["cljfmt" "check"]
            "format-fix" ["cljfmt" "fix"]
            "analyze" ["pdo" "kibit" "eastwood"]})
