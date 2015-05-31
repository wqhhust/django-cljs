(defproject cljsapp "0.0.1"
  :dependencies [[org.clojure/clojure "LATEST"]
                 [org.clojure/clojurescript "0.0-3211" :scope "provided"]
                 [reagent "0.5.0" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.13.3-0"]
                 [reagent-forms "0.5.1"]
                 [reagent-utils "0.1.4"]
                 [re-frame "0.4.0"]
                 [cljs-ajax "0.3.11"]
                 [prismatic/dommy "1.1.0"]
                 [garden "1.2.5"]
                 [com.andrewmcveigh/cljs-time "0.3.4"]
                 [secretary "1.2.3"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-ancient "0.6.7"]
            [lein-pdo  "0.1.1"]
            [lein-cljfmt "0.1.0"]
            [lein-kibit "0.1.2"]
            [jonase/eastwood "0.2.1"]
            [lein-shell "0.4.0"]
            [lein-bower "0.5.1"]
            [lein-npm "0.5.0"]
            [lein-less "1.7.2"]]

  :bower-dependencies [[bootstrap "3.3.4"
                        font-awesome "~4.3.0"]]
  :bower {:directory "base/static/base/bower_components"}
  :less  {:source-paths ["base/static/base/less"]
          :target-path "base/static/base/css"}

  :hooks [leiningen.cljsbuild leiningen.less]
  :min-lein-version "2.5.0"
  :jvm-opts  ["-Xmx128m" "-server" "-XX:+TieredCompilation" "-XX:TieredStopAtLevel=1"]
  :profiles {:dev {:plugins [[lein-figwheel "0.3.1"]]
                   :figwheel
                   {:http-server-root "base/templates/base"
                    :server-port 3449
                    :css-dirs ["base/static/base/css"]}
                   :cljsbuild
                   {:builds {:client {:figwheel
                                      {:websocket-host "localhost"
                                       :on-jsload "cljsapp.core/reload-hook"}
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
                                 :asset-path "/static/base/cljs/js/out"
                                 :output-to "base/static/base/cljs/main.js"}}}}

  :aliases {"clear-cljs" ["shell" "rm" "-Rf" "base/static/cljs"]
            "dev" ["pdo" "cljsbuild" "auto," "less" "auto"]
            "dev-figwheel" ["pdo" "less" "auto," "figwheel"]
            "prod" ["do" "clear-cljs" "with-profile" "prod" "cljsbuild" "once"]
            "format" ["cljfmt" "check"]
            "format-fix" ["cljfmt" "fix"]
            "analyze" ["pdo" "kibit" "eastwood"]})
