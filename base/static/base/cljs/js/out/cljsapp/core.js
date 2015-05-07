// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljsapp.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('dommy.core');
cljsapp.core.home_component = (function cljsapp$core$home_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is from the home component ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"Go to About"], null)], null)], null);
});
cljsapp.core.about_component = (function cljsapp$core$about_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Le About..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Nothing here... ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Take me back"], null)], null)], null);
});
cljsapp.core.current_page = (function cljsapp$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__6745__auto___8351 = (function (params__6746__auto__){
if(cljs.core.map_QMARK_.call(null,params__6746__auto__)){
var map__8349 = params__6746__auto__;
var map__8349__$1 = ((cljs.core.seq_QMARK_.call(null,map__8349))?cljs.core.apply.call(null,cljs.core.hash_map,map__8349):map__8349);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return cljsapp.core.home_component;},new cljs.core.Symbol("cljsapp.core","home-component","cljsapp.core/home-component",1354660160,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljsapp.core","cljsapp.core",1973848761,null),new cljs.core.Symbol(null,"home-component","home-component",511117826,null),"/Users/madgenius/repos/my/django_cljs/src/cljsapp/core.cljs",21,7,13,13,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(cljsapp.core.home_component)?cljsapp.core.home_component.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__6746__auto__)){
var vec__8350 = params__6746__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return cljsapp.core.home_component;},new cljs.core.Symbol("cljsapp.core","home-component","cljsapp.core/home-component",1354660160,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljsapp.core","cljsapp.core",1973848761,null),new cljs.core.Symbol(null,"home-component","home-component",511117826,null),"/Users/madgenius/repos/my/django_cljs/src/cljsapp/core.cljs",21,7,13,13,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(cljsapp.core.home_component)?cljsapp.core.home_component.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__6745__auto___8351);

var action__6745__auto___8354 = (function (params__6746__auto__){
if(cljs.core.map_QMARK_.call(null,params__6746__auto__)){
var map__8352 = params__6746__auto__;
var map__8352__$1 = ((cljs.core.seq_QMARK_.call(null,map__8352))?cljs.core.apply.call(null,cljs.core.hash_map,map__8352):map__8352);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return cljsapp.core.about_component;},new cljs.core.Symbol("cljsapp.core","about-component","cljsapp.core/about-component",1590894306,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljsapp.core","cljsapp.core",1973848761,null),new cljs.core.Symbol(null,"about-component","about-component",-2003115100,null),"/Users/madgenius/repos/my/django_cljs/src/cljsapp/core.cljs",22,7,19,19,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(cljsapp.core.about_component)?cljsapp.core.about_component.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__6746__auto__)){
var vec__8353 = params__6746__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return cljsapp.core.about_component;},new cljs.core.Symbol("cljsapp.core","about-component","cljsapp.core/about-component",1590894306,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljsapp.core","cljsapp.core",1973848761,null),new cljs.core.Symbol(null,"about-component","about-component",-2003115100,null),"/Users/madgenius/repos/my/django_cljs/src/cljsapp/core.cljs",22,7,19,19,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(cljsapp.core.about_component)?cljsapp.core.about_component.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__6745__auto___8354);

cljsapp.core.history = (function (){var G__8355 = (new goog.History());
goog.events.listen(G__8355,goog.history.EventType.NAVIGATE,((function (G__8355){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__8355))
);

G__8355.setEnabled(true);

return G__8355;
})();
cljsapp.core.main = (function cljsapp$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsapp.core.current_page], null),document.getElementById("app"));
});
goog.exportSymbol('cljsapp.core.main', cljsapp.core.main);

//# sourceMappingURL=core.js.map?rel=1430998836178