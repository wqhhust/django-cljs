// Compiled by ClojureScript 0.0-3211 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4271__auto__ = elem.textContent;
if(cljs.core.truth_(or__4271__auto__)){
return or__4271__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(){
var G__7297 = arguments.length;
switch (G__7297) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4420__auto__ = elem.classList;
if(cljs.core.truth_(temp__4420__auto__)){
var class_list = temp__4420__auto__;
return class_list.contains(c__$1);
} else {
var temp__4422__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4422__auto__)){
var class_name = temp__4422__auto__;
var temp__4422__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4422__auto____$1)){
var i = temp__4422__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(){
var G__7300 = arguments.length;
switch (G__7300) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(){
var G__7304 = arguments.length;
switch (G__7304) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__7302_SHARP_){
return !((p1__7302_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 * (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(){
var argseq__5311__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5311__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__7308_7314 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__7309_7315 = null;
var count__7310_7316 = (0);
var i__7311_7317 = (0);
while(true){
if((i__7311_7317 < count__7310_7316)){
var vec__7312_7318 = cljs.core._nth.call(null,chunk__7309_7315,i__7311_7317);
var k_7319 = cljs.core.nth.call(null,vec__7312_7318,(0),null);
var v_7320 = cljs.core.nth.call(null,vec__7312_7318,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_7319),v_7320);

var G__7321 = seq__7308_7314;
var G__7322 = chunk__7309_7315;
var G__7323 = count__7310_7316;
var G__7324 = (i__7311_7317 + (1));
seq__7308_7314 = G__7321;
chunk__7309_7315 = G__7322;
count__7310_7316 = G__7323;
i__7311_7317 = G__7324;
continue;
} else {
var temp__4422__auto___7325 = cljs.core.seq.call(null,seq__7308_7314);
if(temp__4422__auto___7325){
var seq__7308_7326__$1 = temp__4422__auto___7325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7308_7326__$1)){
var c__5056__auto___7327 = cljs.core.chunk_first.call(null,seq__7308_7326__$1);
var G__7328 = cljs.core.chunk_rest.call(null,seq__7308_7326__$1);
var G__7329 = c__5056__auto___7327;
var G__7330 = cljs.core.count.call(null,c__5056__auto___7327);
var G__7331 = (0);
seq__7308_7314 = G__7328;
chunk__7309_7315 = G__7329;
count__7310_7316 = G__7330;
i__7311_7317 = G__7331;
continue;
} else {
var vec__7313_7332 = cljs.core.first.call(null,seq__7308_7326__$1);
var k_7333 = cljs.core.nth.call(null,vec__7313_7332,(0),null);
var v_7334 = cljs.core.nth.call(null,vec__7313_7332,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_7333),v_7334);

var G__7335 = cljs.core.next.call(null,seq__7308_7326__$1);
var G__7336 = null;
var G__7337 = (0);
var G__7338 = (0);
seq__7308_7314 = G__7335;
chunk__7309_7315 = G__7336;
count__7310_7316 = G__7337;
i__7311_7317 = G__7338;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq7306){
var G__7307 = cljs.core.first.call(null,seq7306);
var seq7306__$1 = cljs.core.next.call(null,seq7306);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7307,seq7306__$1);
});
/**
 * Remove the style of `elem` using keywords:
 * 
 * (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(){
var argseq__5311__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5311__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__7341_7345 = cljs.core.seq.call(null,keywords);
var chunk__7342_7346 = null;
var count__7343_7347 = (0);
var i__7344_7348 = (0);
while(true){
if((i__7344_7348 < count__7343_7347)){
var kw_7349 = cljs.core._nth.call(null,chunk__7342_7346,i__7344_7348);
style.removeProperty(dommy.utils.as_str.call(null,kw_7349));

var G__7350 = seq__7341_7345;
var G__7351 = chunk__7342_7346;
var G__7352 = count__7343_7347;
var G__7353 = (i__7344_7348 + (1));
seq__7341_7345 = G__7350;
chunk__7342_7346 = G__7351;
count__7343_7347 = G__7352;
i__7344_7348 = G__7353;
continue;
} else {
var temp__4422__auto___7354 = cljs.core.seq.call(null,seq__7341_7345);
if(temp__4422__auto___7354){
var seq__7341_7355__$1 = temp__4422__auto___7354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7341_7355__$1)){
var c__5056__auto___7356 = cljs.core.chunk_first.call(null,seq__7341_7355__$1);
var G__7357 = cljs.core.chunk_rest.call(null,seq__7341_7355__$1);
var G__7358 = c__5056__auto___7356;
var G__7359 = cljs.core.count.call(null,c__5056__auto___7356);
var G__7360 = (0);
seq__7341_7345 = G__7357;
chunk__7342_7346 = G__7358;
count__7343_7347 = G__7359;
i__7344_7348 = G__7360;
continue;
} else {
var kw_7361 = cljs.core.first.call(null,seq__7341_7355__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_7361));

var G__7362 = cljs.core.next.call(null,seq__7341_7355__$1);
var G__7363 = null;
var G__7364 = (0);
var G__7365 = (0);
seq__7341_7345 = G__7362;
chunk__7342_7346 = G__7363;
count__7343_7347 = G__7364;
i__7344_7348 = G__7365;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq7339){
var G__7340 = cljs.core.first.call(null,seq7339);
var seq7339__$1 = cljs.core.next.call(null,seq7339);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7340,seq7339__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(){
var argseq__5311__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5311__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__7368_7374 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__7369_7375 = null;
var count__7370_7376 = (0);
var i__7371_7377 = (0);
while(true){
if((i__7371_7377 < count__7370_7376)){
var vec__7372_7378 = cljs.core._nth.call(null,chunk__7369_7375,i__7371_7377);
var k_7379 = cljs.core.nth.call(null,vec__7372_7378,(0),null);
var v_7380 = cljs.core.nth.call(null,vec__7372_7378,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_7379,[cljs.core.str(v_7380),cljs.core.str("px")].join(''));

var G__7381 = seq__7368_7374;
var G__7382 = chunk__7369_7375;
var G__7383 = count__7370_7376;
var G__7384 = (i__7371_7377 + (1));
seq__7368_7374 = G__7381;
chunk__7369_7375 = G__7382;
count__7370_7376 = G__7383;
i__7371_7377 = G__7384;
continue;
} else {
var temp__4422__auto___7385 = cljs.core.seq.call(null,seq__7368_7374);
if(temp__4422__auto___7385){
var seq__7368_7386__$1 = temp__4422__auto___7385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7368_7386__$1)){
var c__5056__auto___7387 = cljs.core.chunk_first.call(null,seq__7368_7386__$1);
var G__7388 = cljs.core.chunk_rest.call(null,seq__7368_7386__$1);
var G__7389 = c__5056__auto___7387;
var G__7390 = cljs.core.count.call(null,c__5056__auto___7387);
var G__7391 = (0);
seq__7368_7374 = G__7388;
chunk__7369_7375 = G__7389;
count__7370_7376 = G__7390;
i__7371_7377 = G__7391;
continue;
} else {
var vec__7373_7392 = cljs.core.first.call(null,seq__7368_7386__$1);
var k_7393 = cljs.core.nth.call(null,vec__7373_7392,(0),null);
var v_7394 = cljs.core.nth.call(null,vec__7373_7392,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_7393,[cljs.core.str(v_7394),cljs.core.str("px")].join(''));

var G__7395 = cljs.core.next.call(null,seq__7368_7386__$1);
var G__7396 = null;
var G__7397 = (0);
var G__7398 = (0);
seq__7368_7374 = G__7395;
chunk__7369_7375 = G__7396;
count__7370_7376 = G__7397;
i__7371_7377 = G__7398;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq7366){
var G__7367 = cljs.core.first.call(null,seq7366);
var seq7366__$1 = cljs.core.next.call(null,seq7366);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7367,seq7366__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 * (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 * (set-attr! elem :id "some-id"
 * :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(){
var G__7404 = arguments.length;
switch (G__7404) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5322__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5322__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__7405 = elem;
(G__7405[k__$1] = v);

return G__7405;
} else {
var G__7406 = elem;
G__7406.setAttribute(k__$1,v);

return G__7406;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__7407_7414 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__7408_7415 = null;
var count__7409_7416 = (0);
var i__7410_7417 = (0);
while(true){
if((i__7410_7417 < count__7409_7416)){
var vec__7411_7418 = cljs.core._nth.call(null,chunk__7408_7415,i__7410_7417);
var k_7419__$1 = cljs.core.nth.call(null,vec__7411_7418,(0),null);
var v_7420__$1 = cljs.core.nth.call(null,vec__7411_7418,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_7419__$1,v_7420__$1);

var G__7421 = seq__7407_7414;
var G__7422 = chunk__7408_7415;
var G__7423 = count__7409_7416;
var G__7424 = (i__7410_7417 + (1));
seq__7407_7414 = G__7421;
chunk__7408_7415 = G__7422;
count__7409_7416 = G__7423;
i__7410_7417 = G__7424;
continue;
} else {
var temp__4422__auto___7425 = cljs.core.seq.call(null,seq__7407_7414);
if(temp__4422__auto___7425){
var seq__7407_7426__$1 = temp__4422__auto___7425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7407_7426__$1)){
var c__5056__auto___7427 = cljs.core.chunk_first.call(null,seq__7407_7426__$1);
var G__7428 = cljs.core.chunk_rest.call(null,seq__7407_7426__$1);
var G__7429 = c__5056__auto___7427;
var G__7430 = cljs.core.count.call(null,c__5056__auto___7427);
var G__7431 = (0);
seq__7407_7414 = G__7428;
chunk__7408_7415 = G__7429;
count__7409_7416 = G__7430;
i__7410_7417 = G__7431;
continue;
} else {
var vec__7412_7432 = cljs.core.first.call(null,seq__7407_7426__$1);
var k_7433__$1 = cljs.core.nth.call(null,vec__7412_7432,(0),null);
var v_7434__$1 = cljs.core.nth.call(null,vec__7412_7432,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_7433__$1,v_7434__$1);

var G__7435 = cljs.core.next.call(null,seq__7407_7426__$1);
var G__7436 = null;
var G__7437 = (0);
var G__7438 = (0);
seq__7407_7414 = G__7435;
chunk__7408_7415 = G__7436;
count__7409_7416 = G__7437;
i__7410_7417 = G__7438;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq7399){
var G__7400 = cljs.core.first.call(null,seq7399);
var seq7399__$1 = cljs.core.next.call(null,seq7399);
var G__7401 = cljs.core.first.call(null,seq7399__$1);
var seq7399__$2 = cljs.core.next.call(null,seq7399__$1);
var G__7402 = cljs.core.first.call(null,seq7399__$2);
var seq7399__$3 = cljs.core.next.call(null,seq7399__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7400,G__7401,G__7402,seq7399__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(){
var G__7443 = arguments.length;
switch (G__7443) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5322__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5322__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_7449__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_7449__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_7449__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__7444_7450 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__7445_7451 = null;
var count__7446_7452 = (0);
var i__7447_7453 = (0);
while(true){
if((i__7447_7453 < count__7446_7452)){
var k_7454__$1 = cljs.core._nth.call(null,chunk__7445_7451,i__7447_7453);
dommy.core.remove_attr_BANG_.call(null,elem,k_7454__$1);

var G__7455 = seq__7444_7450;
var G__7456 = chunk__7445_7451;
var G__7457 = count__7446_7452;
var G__7458 = (i__7447_7453 + (1));
seq__7444_7450 = G__7455;
chunk__7445_7451 = G__7456;
count__7446_7452 = G__7457;
i__7447_7453 = G__7458;
continue;
} else {
var temp__4422__auto___7459 = cljs.core.seq.call(null,seq__7444_7450);
if(temp__4422__auto___7459){
var seq__7444_7460__$1 = temp__4422__auto___7459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7444_7460__$1)){
var c__5056__auto___7461 = cljs.core.chunk_first.call(null,seq__7444_7460__$1);
var G__7462 = cljs.core.chunk_rest.call(null,seq__7444_7460__$1);
var G__7463 = c__5056__auto___7461;
var G__7464 = cljs.core.count.call(null,c__5056__auto___7461);
var G__7465 = (0);
seq__7444_7450 = G__7462;
chunk__7445_7451 = G__7463;
count__7446_7452 = G__7464;
i__7447_7453 = G__7465;
continue;
} else {
var k_7466__$1 = cljs.core.first.call(null,seq__7444_7460__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_7466__$1);

var G__7467 = cljs.core.next.call(null,seq__7444_7460__$1);
var G__7468 = null;
var G__7469 = (0);
var G__7470 = (0);
seq__7444_7450 = G__7467;
chunk__7445_7451 = G__7468;
count__7446_7452 = G__7469;
i__7447_7453 = G__7470;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq7439){
var G__7440 = cljs.core.first.call(null,seq7439);
var seq7439__$1 = cljs.core.next.call(null,seq7439);
var G__7441 = cljs.core.first.call(null,seq7439__$1);
var seq7439__$2 = cljs.core.next.call(null,seq7439__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7440,G__7441,seq7439__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(){
var G__7472 = arguments.length;
switch (G__7472) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(){
var G__7478 = arguments.length;
switch (G__7478) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5322__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5322__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4420__auto___7492 = elem.classList;
if(cljs.core.truth_(temp__4420__auto___7492)){
var class_list_7493 = temp__4420__auto___7492;
var seq__7479_7494 = cljs.core.seq.call(null,classes__$1);
var chunk__7480_7495 = null;
var count__7481_7496 = (0);
var i__7482_7497 = (0);
while(true){
if((i__7482_7497 < count__7481_7496)){
var c_7498 = cljs.core._nth.call(null,chunk__7480_7495,i__7482_7497);
class_list_7493.add(c_7498);

var G__7499 = seq__7479_7494;
var G__7500 = chunk__7480_7495;
var G__7501 = count__7481_7496;
var G__7502 = (i__7482_7497 + (1));
seq__7479_7494 = G__7499;
chunk__7480_7495 = G__7500;
count__7481_7496 = G__7501;
i__7482_7497 = G__7502;
continue;
} else {
var temp__4422__auto___7503 = cljs.core.seq.call(null,seq__7479_7494);
if(temp__4422__auto___7503){
var seq__7479_7504__$1 = temp__4422__auto___7503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7479_7504__$1)){
var c__5056__auto___7505 = cljs.core.chunk_first.call(null,seq__7479_7504__$1);
var G__7506 = cljs.core.chunk_rest.call(null,seq__7479_7504__$1);
var G__7507 = c__5056__auto___7505;
var G__7508 = cljs.core.count.call(null,c__5056__auto___7505);
var G__7509 = (0);
seq__7479_7494 = G__7506;
chunk__7480_7495 = G__7507;
count__7481_7496 = G__7508;
i__7482_7497 = G__7509;
continue;
} else {
var c_7510 = cljs.core.first.call(null,seq__7479_7504__$1);
class_list_7493.add(c_7510);

var G__7511 = cljs.core.next.call(null,seq__7479_7504__$1);
var G__7512 = null;
var G__7513 = (0);
var G__7514 = (0);
seq__7479_7494 = G__7511;
chunk__7480_7495 = G__7512;
count__7481_7496 = G__7513;
i__7482_7497 = G__7514;
continue;
}
} else {
}
}
break;
}
} else {
var seq__7483_7515 = cljs.core.seq.call(null,classes__$1);
var chunk__7484_7516 = null;
var count__7485_7517 = (0);
var i__7486_7518 = (0);
while(true){
if((i__7486_7518 < count__7485_7517)){
var c_7519 = cljs.core._nth.call(null,chunk__7484_7516,i__7486_7518);
var class_name_7520 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_7520,c_7519))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_7520 === ""))?c_7519:[cljs.core.str(class_name_7520),cljs.core.str(" "),cljs.core.str(c_7519)].join('')));
}

var G__7521 = seq__7483_7515;
var G__7522 = chunk__7484_7516;
var G__7523 = count__7485_7517;
var G__7524 = (i__7486_7518 + (1));
seq__7483_7515 = G__7521;
chunk__7484_7516 = G__7522;
count__7485_7517 = G__7523;
i__7486_7518 = G__7524;
continue;
} else {
var temp__4422__auto___7525 = cljs.core.seq.call(null,seq__7483_7515);
if(temp__4422__auto___7525){
var seq__7483_7526__$1 = temp__4422__auto___7525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7483_7526__$1)){
var c__5056__auto___7527 = cljs.core.chunk_first.call(null,seq__7483_7526__$1);
var G__7528 = cljs.core.chunk_rest.call(null,seq__7483_7526__$1);
var G__7529 = c__5056__auto___7527;
var G__7530 = cljs.core.count.call(null,c__5056__auto___7527);
var G__7531 = (0);
seq__7483_7515 = G__7528;
chunk__7484_7516 = G__7529;
count__7485_7517 = G__7530;
i__7486_7518 = G__7531;
continue;
} else {
var c_7532 = cljs.core.first.call(null,seq__7483_7526__$1);
var class_name_7533 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_7533,c_7532))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_7533 === ""))?c_7532:[cljs.core.str(class_name_7533),cljs.core.str(" "),cljs.core.str(c_7532)].join('')));
}

var G__7534 = cljs.core.next.call(null,seq__7483_7526__$1);
var G__7535 = null;
var G__7536 = (0);
var G__7537 = (0);
seq__7483_7515 = G__7534;
chunk__7484_7516 = G__7535;
count__7485_7517 = G__7536;
i__7486_7518 = G__7537;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__7487_7538 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__7488_7539 = null;
var count__7489_7540 = (0);
var i__7490_7541 = (0);
while(true){
if((i__7490_7541 < count__7489_7540)){
var c_7542 = cljs.core._nth.call(null,chunk__7488_7539,i__7490_7541);
dommy.core.add_class_BANG_.call(null,elem,c_7542);

var G__7543 = seq__7487_7538;
var G__7544 = chunk__7488_7539;
var G__7545 = count__7489_7540;
var G__7546 = (i__7490_7541 + (1));
seq__7487_7538 = G__7543;
chunk__7488_7539 = G__7544;
count__7489_7540 = G__7545;
i__7490_7541 = G__7546;
continue;
} else {
var temp__4422__auto___7547 = cljs.core.seq.call(null,seq__7487_7538);
if(temp__4422__auto___7547){
var seq__7487_7548__$1 = temp__4422__auto___7547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7487_7548__$1)){
var c__5056__auto___7549 = cljs.core.chunk_first.call(null,seq__7487_7548__$1);
var G__7550 = cljs.core.chunk_rest.call(null,seq__7487_7548__$1);
var G__7551 = c__5056__auto___7549;
var G__7552 = cljs.core.count.call(null,c__5056__auto___7549);
var G__7553 = (0);
seq__7487_7538 = G__7550;
chunk__7488_7539 = G__7551;
count__7489_7540 = G__7552;
i__7490_7541 = G__7553;
continue;
} else {
var c_7554 = cljs.core.first.call(null,seq__7487_7548__$1);
dommy.core.add_class_BANG_.call(null,elem,c_7554);

var G__7555 = cljs.core.next.call(null,seq__7487_7548__$1);
var G__7556 = null;
var G__7557 = (0);
var G__7558 = (0);
seq__7487_7538 = G__7555;
chunk__7488_7539 = G__7556;
count__7489_7540 = G__7557;
i__7490_7541 = G__7558;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq7474){
var G__7475 = cljs.core.first.call(null,seq7474);
var seq7474__$1 = cljs.core.next.call(null,seq7474);
var G__7476 = cljs.core.first.call(null,seq7474__$1);
var seq7474__$2 = cljs.core.next.call(null,seq7474__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7475,G__7476,seq7474__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(){
var G__7563 = arguments.length;
switch (G__7563) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5322__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5322__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4420__auto___7569 = elem.classList;
if(cljs.core.truth_(temp__4420__auto___7569)){
var class_list_7570 = temp__4420__auto___7569;
class_list_7570.remove(c__$1);
} else {
var class_name_7571 = dommy.core.class$.call(null,elem);
var new_class_name_7572 = dommy.utils.remove_class_str.call(null,class_name_7571,c__$1);
if((class_name_7571 === new_class_name_7572)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_7572);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__7564 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__7565 = null;
var count__7566 = (0);
var i__7567 = (0);
while(true){
if((i__7567 < count__7566)){
var c = cljs.core._nth.call(null,chunk__7565,i__7567);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__7573 = seq__7564;
var G__7574 = chunk__7565;
var G__7575 = count__7566;
var G__7576 = (i__7567 + (1));
seq__7564 = G__7573;
chunk__7565 = G__7574;
count__7566 = G__7575;
i__7567 = G__7576;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__7564);
if(temp__4422__auto__){
var seq__7564__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7564__$1)){
var c__5056__auto__ = cljs.core.chunk_first.call(null,seq__7564__$1);
var G__7577 = cljs.core.chunk_rest.call(null,seq__7564__$1);
var G__7578 = c__5056__auto__;
var G__7579 = cljs.core.count.call(null,c__5056__auto__);
var G__7580 = (0);
seq__7564 = G__7577;
chunk__7565 = G__7578;
count__7566 = G__7579;
i__7567 = G__7580;
continue;
} else {
var c = cljs.core.first.call(null,seq__7564__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__7581 = cljs.core.next.call(null,seq__7564__$1);
var G__7582 = null;
var G__7583 = (0);
var G__7584 = (0);
seq__7564 = G__7581;
chunk__7565 = G__7582;
count__7566 = G__7583;
i__7567 = G__7584;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq7559){
var G__7560 = cljs.core.first.call(null,seq7559);
var seq7559__$1 = cljs.core.next.call(null,seq7559);
var G__7561 = cljs.core.first.call(null,seq7559__$1);
var seq7559__$2 = cljs.core.next.call(null,seq7559__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7560,G__7561,seq7559__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(){
var G__7586 = arguments.length;
switch (G__7586) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4420__auto___7588 = elem.classList;
if(cljs.core.truth_(temp__4420__auto___7588)){
var class_list_7589 = temp__4420__auto___7588;
class_list_7589.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(){
var G__7591 = arguments.length;
switch (G__7591) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(){
var G__7594 = arguments.length;
switch (G__7594) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(){
var G__7600 = arguments.length;
switch (G__7600) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5322__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5322__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__7601 = parent;
G__7601.appendChild(child);

return G__7601;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__7602_7607 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__7603_7608 = null;
var count__7604_7609 = (0);
var i__7605_7610 = (0);
while(true){
if((i__7605_7610 < count__7604_7609)){
var c_7611 = cljs.core._nth.call(null,chunk__7603_7608,i__7605_7610);
dommy.core.append_BANG_.call(null,parent,c_7611);

var G__7612 = seq__7602_7607;
var G__7613 = chunk__7603_7608;
var G__7614 = count__7604_7609;
var G__7615 = (i__7605_7610 + (1));
seq__7602_7607 = G__7612;
chunk__7603_7608 = G__7613;
count__7604_7609 = G__7614;
i__7605_7610 = G__7615;
continue;
} else {
var temp__4422__auto___7616 = cljs.core.seq.call(null,seq__7602_7607);
if(temp__4422__auto___7616){
var seq__7602_7617__$1 = temp__4422__auto___7616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7602_7617__$1)){
var c__5056__auto___7618 = cljs.core.chunk_first.call(null,seq__7602_7617__$1);
var G__7619 = cljs.core.chunk_rest.call(null,seq__7602_7617__$1);
var G__7620 = c__5056__auto___7618;
var G__7621 = cljs.core.count.call(null,c__5056__auto___7618);
var G__7622 = (0);
seq__7602_7607 = G__7619;
chunk__7603_7608 = G__7620;
count__7604_7609 = G__7621;
i__7605_7610 = G__7622;
continue;
} else {
var c_7623 = cljs.core.first.call(null,seq__7602_7617__$1);
dommy.core.append_BANG_.call(null,parent,c_7623);

var G__7624 = cljs.core.next.call(null,seq__7602_7617__$1);
var G__7625 = null;
var G__7626 = (0);
var G__7627 = (0);
seq__7602_7607 = G__7624;
chunk__7603_7608 = G__7625;
count__7604_7609 = G__7626;
i__7605_7610 = G__7627;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq7596){
var G__7597 = cljs.core.first.call(null,seq7596);
var seq7596__$1 = cljs.core.next.call(null,seq7596);
var G__7598 = cljs.core.first.call(null,seq7596__$1);
var seq7596__$2 = cljs.core.next.call(null,seq7596__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7597,G__7598,seq7596__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(){
var G__7632 = arguments.length;
switch (G__7632) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5322__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5322__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__7633 = parent;
G__7633.insertBefore(child,parent.firstChild);

return G__7633;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__7634_7639 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__7635_7640 = null;
var count__7636_7641 = (0);
var i__7637_7642 = (0);
while(true){
if((i__7637_7642 < count__7636_7641)){
var c_7643 = cljs.core._nth.call(null,chunk__7635_7640,i__7637_7642);
dommy.core.prepend_BANG_.call(null,parent,c_7643);

var G__7644 = seq__7634_7639;
var G__7645 = chunk__7635_7640;
var G__7646 = count__7636_7641;
var G__7647 = (i__7637_7642 + (1));
seq__7634_7639 = G__7644;
chunk__7635_7640 = G__7645;
count__7636_7641 = G__7646;
i__7637_7642 = G__7647;
continue;
} else {
var temp__4422__auto___7648 = cljs.core.seq.call(null,seq__7634_7639);
if(temp__4422__auto___7648){
var seq__7634_7649__$1 = temp__4422__auto___7648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7634_7649__$1)){
var c__5056__auto___7650 = cljs.core.chunk_first.call(null,seq__7634_7649__$1);
var G__7651 = cljs.core.chunk_rest.call(null,seq__7634_7649__$1);
var G__7652 = c__5056__auto___7650;
var G__7653 = cljs.core.count.call(null,c__5056__auto___7650);
var G__7654 = (0);
seq__7634_7639 = G__7651;
chunk__7635_7640 = G__7652;
count__7636_7641 = G__7653;
i__7637_7642 = G__7654;
continue;
} else {
var c_7655 = cljs.core.first.call(null,seq__7634_7649__$1);
dommy.core.prepend_BANG_.call(null,parent,c_7655);

var G__7656 = cljs.core.next.call(null,seq__7634_7649__$1);
var G__7657 = null;
var G__7658 = (0);
var G__7659 = (0);
seq__7634_7639 = G__7656;
chunk__7635_7640 = G__7657;
count__7636_7641 = G__7658;
i__7637_7642 = G__7659;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq7628){
var G__7629 = cljs.core.first.call(null,seq7628);
var seq7628__$1 = cljs.core.next.call(null,seq7628);
var G__7630 = cljs.core.first.call(null,seq7628__$1);
var seq7628__$2 = cljs.core.next.call(null,seq7628__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7629,G__7630,seq7628__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4420__auto___7660 = other.nextSibling;
if(cljs.core.truth_(temp__4420__auto___7660)){
var next_7661 = temp__4420__auto___7660;
dommy.core.insert_before_BANG_.call(null,elem,next_7661);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(){
var G__7663 = arguments.length;
switch (G__7663) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__7664 = p;
G__7664.removeChild(elem);

return G__7664;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7666){
var vec__7667 = p__7666;
var special_mouse_event = cljs.core.nth.call(null,vec__7667,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__7667,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__7667,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__7667,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4271__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4271__auto__)){
return or__4271__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4259__auto__ = related_target;
if(cljs.core.truth_(and__4259__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4259__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__7667,special_mouse_event,real_mouse_event))
});})(vec__7667,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4259__auto__ = selected_target;
if(cljs.core.truth_(and__4259__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4259__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4271__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4271__auto__)){
return or__4271__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(){
var argseq__5311__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5311__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq7668){
var G__7669 = cljs.core.first.call(null,seq7668);
var seq7668__$1 = cljs.core.next.call(null,seq7668);
var G__7670 = cljs.core.first.call(null,seq7668__$1);
var seq7668__$2 = cljs.core.next.call(null,seq7668__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7669,G__7670,seq7668__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 * (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 * (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 * (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(){
var argseq__5311__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5311__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7673_7696 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7697 = cljs.core.nth.call(null,vec__7673_7696,(0),null);
var selector_7698 = cljs.core.nth.call(null,vec__7673_7696,(1),null);
var seq__7674_7699 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7681_7700 = null;
var count__7682_7701 = (0);
var i__7683_7702 = (0);
while(true){
if((i__7683_7702 < count__7682_7701)){
var vec__7690_7703 = cljs.core._nth.call(null,chunk__7681_7700,i__7683_7702);
var orig_type_7704 = cljs.core.nth.call(null,vec__7690_7703,(0),null);
var f_7705 = cljs.core.nth.call(null,vec__7690_7703,(1),null);
var seq__7684_7706 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7704,new cljs.core.PersistentArrayMap.fromArray([orig_type_7704,cljs.core.identity], true, false)));
var chunk__7686_7707 = null;
var count__7687_7708 = (0);
var i__7688_7709 = (0);
while(true){
if((i__7688_7709 < count__7687_7708)){
var vec__7691_7710 = cljs.core._nth.call(null,chunk__7686_7707,i__7688_7709);
var actual_type_7711 = cljs.core.nth.call(null,vec__7691_7710,(0),null);
var factory_7712 = cljs.core.nth.call(null,vec__7691_7710,(1),null);
var canonical_f_7713 = (cljs.core.truth_(selector_7698)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7697,selector_7698):cljs.core.identity).call(null,factory_7712.call(null,f_7705));
dommy.core.update_event_listeners_BANG_.call(null,elem_7697,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7698,actual_type_7711,f_7705], null),canonical_f_7713);

if(cljs.core.truth_(elem_7697.addEventListener)){
elem_7697.addEventListener(cljs.core.name.call(null,actual_type_7711),canonical_f_7713);
} else {
elem_7697.attachEvent(cljs.core.name.call(null,actual_type_7711),canonical_f_7713);
}

var G__7714 = seq__7684_7706;
var G__7715 = chunk__7686_7707;
var G__7716 = count__7687_7708;
var G__7717 = (i__7688_7709 + (1));
seq__7684_7706 = G__7714;
chunk__7686_7707 = G__7715;
count__7687_7708 = G__7716;
i__7688_7709 = G__7717;
continue;
} else {
var temp__4422__auto___7718 = cljs.core.seq.call(null,seq__7684_7706);
if(temp__4422__auto___7718){
var seq__7684_7719__$1 = temp__4422__auto___7718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7684_7719__$1)){
var c__5056__auto___7720 = cljs.core.chunk_first.call(null,seq__7684_7719__$1);
var G__7721 = cljs.core.chunk_rest.call(null,seq__7684_7719__$1);
var G__7722 = c__5056__auto___7720;
var G__7723 = cljs.core.count.call(null,c__5056__auto___7720);
var G__7724 = (0);
seq__7684_7706 = G__7721;
chunk__7686_7707 = G__7722;
count__7687_7708 = G__7723;
i__7688_7709 = G__7724;
continue;
} else {
var vec__7692_7725 = cljs.core.first.call(null,seq__7684_7719__$1);
var actual_type_7726 = cljs.core.nth.call(null,vec__7692_7725,(0),null);
var factory_7727 = cljs.core.nth.call(null,vec__7692_7725,(1),null);
var canonical_f_7728 = (cljs.core.truth_(selector_7698)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7697,selector_7698):cljs.core.identity).call(null,factory_7727.call(null,f_7705));
dommy.core.update_event_listeners_BANG_.call(null,elem_7697,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7698,actual_type_7726,f_7705], null),canonical_f_7728);

if(cljs.core.truth_(elem_7697.addEventListener)){
elem_7697.addEventListener(cljs.core.name.call(null,actual_type_7726),canonical_f_7728);
} else {
elem_7697.attachEvent(cljs.core.name.call(null,actual_type_7726),canonical_f_7728);
}

var G__7729 = cljs.core.next.call(null,seq__7684_7719__$1);
var G__7730 = null;
var G__7731 = (0);
var G__7732 = (0);
seq__7684_7706 = G__7729;
chunk__7686_7707 = G__7730;
count__7687_7708 = G__7731;
i__7688_7709 = G__7732;
continue;
}
} else {
}
}
break;
}

var G__7733 = seq__7674_7699;
var G__7734 = chunk__7681_7700;
var G__7735 = count__7682_7701;
var G__7736 = (i__7683_7702 + (1));
seq__7674_7699 = G__7733;
chunk__7681_7700 = G__7734;
count__7682_7701 = G__7735;
i__7683_7702 = G__7736;
continue;
} else {
var temp__4422__auto___7737 = cljs.core.seq.call(null,seq__7674_7699);
if(temp__4422__auto___7737){
var seq__7674_7738__$1 = temp__4422__auto___7737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7674_7738__$1)){
var c__5056__auto___7739 = cljs.core.chunk_first.call(null,seq__7674_7738__$1);
var G__7740 = cljs.core.chunk_rest.call(null,seq__7674_7738__$1);
var G__7741 = c__5056__auto___7739;
var G__7742 = cljs.core.count.call(null,c__5056__auto___7739);
var G__7743 = (0);
seq__7674_7699 = G__7740;
chunk__7681_7700 = G__7741;
count__7682_7701 = G__7742;
i__7683_7702 = G__7743;
continue;
} else {
var vec__7693_7744 = cljs.core.first.call(null,seq__7674_7738__$1);
var orig_type_7745 = cljs.core.nth.call(null,vec__7693_7744,(0),null);
var f_7746 = cljs.core.nth.call(null,vec__7693_7744,(1),null);
var seq__7675_7747 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7745,new cljs.core.PersistentArrayMap.fromArray([orig_type_7745,cljs.core.identity], true, false)));
var chunk__7677_7748 = null;
var count__7678_7749 = (0);
var i__7679_7750 = (0);
while(true){
if((i__7679_7750 < count__7678_7749)){
var vec__7694_7751 = cljs.core._nth.call(null,chunk__7677_7748,i__7679_7750);
var actual_type_7752 = cljs.core.nth.call(null,vec__7694_7751,(0),null);
var factory_7753 = cljs.core.nth.call(null,vec__7694_7751,(1),null);
var canonical_f_7754 = (cljs.core.truth_(selector_7698)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7697,selector_7698):cljs.core.identity).call(null,factory_7753.call(null,f_7746));
dommy.core.update_event_listeners_BANG_.call(null,elem_7697,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7698,actual_type_7752,f_7746], null),canonical_f_7754);

if(cljs.core.truth_(elem_7697.addEventListener)){
elem_7697.addEventListener(cljs.core.name.call(null,actual_type_7752),canonical_f_7754);
} else {
elem_7697.attachEvent(cljs.core.name.call(null,actual_type_7752),canonical_f_7754);
}

var G__7755 = seq__7675_7747;
var G__7756 = chunk__7677_7748;
var G__7757 = count__7678_7749;
var G__7758 = (i__7679_7750 + (1));
seq__7675_7747 = G__7755;
chunk__7677_7748 = G__7756;
count__7678_7749 = G__7757;
i__7679_7750 = G__7758;
continue;
} else {
var temp__4422__auto___7759__$1 = cljs.core.seq.call(null,seq__7675_7747);
if(temp__4422__auto___7759__$1){
var seq__7675_7760__$1 = temp__4422__auto___7759__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7675_7760__$1)){
var c__5056__auto___7761 = cljs.core.chunk_first.call(null,seq__7675_7760__$1);
var G__7762 = cljs.core.chunk_rest.call(null,seq__7675_7760__$1);
var G__7763 = c__5056__auto___7761;
var G__7764 = cljs.core.count.call(null,c__5056__auto___7761);
var G__7765 = (0);
seq__7675_7747 = G__7762;
chunk__7677_7748 = G__7763;
count__7678_7749 = G__7764;
i__7679_7750 = G__7765;
continue;
} else {
var vec__7695_7766 = cljs.core.first.call(null,seq__7675_7760__$1);
var actual_type_7767 = cljs.core.nth.call(null,vec__7695_7766,(0),null);
var factory_7768 = cljs.core.nth.call(null,vec__7695_7766,(1),null);
var canonical_f_7769 = (cljs.core.truth_(selector_7698)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7697,selector_7698):cljs.core.identity).call(null,factory_7768.call(null,f_7746));
dommy.core.update_event_listeners_BANG_.call(null,elem_7697,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7698,actual_type_7767,f_7746], null),canonical_f_7769);

if(cljs.core.truth_(elem_7697.addEventListener)){
elem_7697.addEventListener(cljs.core.name.call(null,actual_type_7767),canonical_f_7769);
} else {
elem_7697.attachEvent(cljs.core.name.call(null,actual_type_7767),canonical_f_7769);
}

var G__7770 = cljs.core.next.call(null,seq__7675_7760__$1);
var G__7771 = null;
var G__7772 = (0);
var G__7773 = (0);
seq__7675_7747 = G__7770;
chunk__7677_7748 = G__7771;
count__7678_7749 = G__7772;
i__7679_7750 = G__7773;
continue;
}
} else {
}
}
break;
}

var G__7774 = cljs.core.next.call(null,seq__7674_7738__$1);
var G__7775 = null;
var G__7776 = (0);
var G__7777 = (0);
seq__7674_7699 = G__7774;
chunk__7681_7700 = G__7775;
count__7682_7701 = G__7776;
i__7683_7702 = G__7777;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq7671){
var G__7672 = cljs.core.first.call(null,seq7671);
var seq7671__$1 = cljs.core.next.call(null,seq7671);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7672,seq7671__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 * The following forms are allowed, and will remove all handlers
 * that match the parameters passed in:
 * 
 * (unlisten! [elem :.selector] :click event-listener)
 * 
 * (unlisten! [elem :.selector]
 * :click event-listener
 * :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(){
var argseq__5311__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5311__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7780_7803 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7804 = cljs.core.nth.call(null,vec__7780_7803,(0),null);
var selector_7805 = cljs.core.nth.call(null,vec__7780_7803,(1),null);
var seq__7781_7806 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7788_7807 = null;
var count__7789_7808 = (0);
var i__7790_7809 = (0);
while(true){
if((i__7790_7809 < count__7789_7808)){
var vec__7797_7810 = cljs.core._nth.call(null,chunk__7788_7807,i__7790_7809);
var orig_type_7811 = cljs.core.nth.call(null,vec__7797_7810,(0),null);
var f_7812 = cljs.core.nth.call(null,vec__7797_7810,(1),null);
var seq__7791_7813 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7811,new cljs.core.PersistentArrayMap.fromArray([orig_type_7811,cljs.core.identity], true, false)));
var chunk__7793_7814 = null;
var count__7794_7815 = (0);
var i__7795_7816 = (0);
while(true){
if((i__7795_7816 < count__7794_7815)){
var vec__7798_7817 = cljs.core._nth.call(null,chunk__7793_7814,i__7795_7816);
var actual_type_7818 = cljs.core.nth.call(null,vec__7798_7817,(0),null);
var __7819 = cljs.core.nth.call(null,vec__7798_7817,(1),null);
var keys_7820 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7805,actual_type_7818,f_7812], null);
var canonical_f_7821 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7804),keys_7820);
dommy.core.update_event_listeners_BANG_.call(null,elem_7804,dommy.utils.dissoc_in,keys_7820);

if(cljs.core.truth_(elem_7804.removeEventListener)){
elem_7804.removeEventListener(cljs.core.name.call(null,actual_type_7818),canonical_f_7821);
} else {
elem_7804.detachEvent(cljs.core.name.call(null,actual_type_7818),canonical_f_7821);
}

var G__7822 = seq__7791_7813;
var G__7823 = chunk__7793_7814;
var G__7824 = count__7794_7815;
var G__7825 = (i__7795_7816 + (1));
seq__7791_7813 = G__7822;
chunk__7793_7814 = G__7823;
count__7794_7815 = G__7824;
i__7795_7816 = G__7825;
continue;
} else {
var temp__4422__auto___7826 = cljs.core.seq.call(null,seq__7791_7813);
if(temp__4422__auto___7826){
var seq__7791_7827__$1 = temp__4422__auto___7826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7791_7827__$1)){
var c__5056__auto___7828 = cljs.core.chunk_first.call(null,seq__7791_7827__$1);
var G__7829 = cljs.core.chunk_rest.call(null,seq__7791_7827__$1);
var G__7830 = c__5056__auto___7828;
var G__7831 = cljs.core.count.call(null,c__5056__auto___7828);
var G__7832 = (0);
seq__7791_7813 = G__7829;
chunk__7793_7814 = G__7830;
count__7794_7815 = G__7831;
i__7795_7816 = G__7832;
continue;
} else {
var vec__7799_7833 = cljs.core.first.call(null,seq__7791_7827__$1);
var actual_type_7834 = cljs.core.nth.call(null,vec__7799_7833,(0),null);
var __7835 = cljs.core.nth.call(null,vec__7799_7833,(1),null);
var keys_7836 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7805,actual_type_7834,f_7812], null);
var canonical_f_7837 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7804),keys_7836);
dommy.core.update_event_listeners_BANG_.call(null,elem_7804,dommy.utils.dissoc_in,keys_7836);

if(cljs.core.truth_(elem_7804.removeEventListener)){
elem_7804.removeEventListener(cljs.core.name.call(null,actual_type_7834),canonical_f_7837);
} else {
elem_7804.detachEvent(cljs.core.name.call(null,actual_type_7834),canonical_f_7837);
}

var G__7838 = cljs.core.next.call(null,seq__7791_7827__$1);
var G__7839 = null;
var G__7840 = (0);
var G__7841 = (0);
seq__7791_7813 = G__7838;
chunk__7793_7814 = G__7839;
count__7794_7815 = G__7840;
i__7795_7816 = G__7841;
continue;
}
} else {
}
}
break;
}

var G__7842 = seq__7781_7806;
var G__7843 = chunk__7788_7807;
var G__7844 = count__7789_7808;
var G__7845 = (i__7790_7809 + (1));
seq__7781_7806 = G__7842;
chunk__7788_7807 = G__7843;
count__7789_7808 = G__7844;
i__7790_7809 = G__7845;
continue;
} else {
var temp__4422__auto___7846 = cljs.core.seq.call(null,seq__7781_7806);
if(temp__4422__auto___7846){
var seq__7781_7847__$1 = temp__4422__auto___7846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7781_7847__$1)){
var c__5056__auto___7848 = cljs.core.chunk_first.call(null,seq__7781_7847__$1);
var G__7849 = cljs.core.chunk_rest.call(null,seq__7781_7847__$1);
var G__7850 = c__5056__auto___7848;
var G__7851 = cljs.core.count.call(null,c__5056__auto___7848);
var G__7852 = (0);
seq__7781_7806 = G__7849;
chunk__7788_7807 = G__7850;
count__7789_7808 = G__7851;
i__7790_7809 = G__7852;
continue;
} else {
var vec__7800_7853 = cljs.core.first.call(null,seq__7781_7847__$1);
var orig_type_7854 = cljs.core.nth.call(null,vec__7800_7853,(0),null);
var f_7855 = cljs.core.nth.call(null,vec__7800_7853,(1),null);
var seq__7782_7856 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7854,new cljs.core.PersistentArrayMap.fromArray([orig_type_7854,cljs.core.identity], true, false)));
var chunk__7784_7857 = null;
var count__7785_7858 = (0);
var i__7786_7859 = (0);
while(true){
if((i__7786_7859 < count__7785_7858)){
var vec__7801_7860 = cljs.core._nth.call(null,chunk__7784_7857,i__7786_7859);
var actual_type_7861 = cljs.core.nth.call(null,vec__7801_7860,(0),null);
var __7862 = cljs.core.nth.call(null,vec__7801_7860,(1),null);
var keys_7863 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7805,actual_type_7861,f_7855], null);
var canonical_f_7864 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7804),keys_7863);
dommy.core.update_event_listeners_BANG_.call(null,elem_7804,dommy.utils.dissoc_in,keys_7863);

if(cljs.core.truth_(elem_7804.removeEventListener)){
elem_7804.removeEventListener(cljs.core.name.call(null,actual_type_7861),canonical_f_7864);
} else {
elem_7804.detachEvent(cljs.core.name.call(null,actual_type_7861),canonical_f_7864);
}

var G__7865 = seq__7782_7856;
var G__7866 = chunk__7784_7857;
var G__7867 = count__7785_7858;
var G__7868 = (i__7786_7859 + (1));
seq__7782_7856 = G__7865;
chunk__7784_7857 = G__7866;
count__7785_7858 = G__7867;
i__7786_7859 = G__7868;
continue;
} else {
var temp__4422__auto___7869__$1 = cljs.core.seq.call(null,seq__7782_7856);
if(temp__4422__auto___7869__$1){
var seq__7782_7870__$1 = temp__4422__auto___7869__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7782_7870__$1)){
var c__5056__auto___7871 = cljs.core.chunk_first.call(null,seq__7782_7870__$1);
var G__7872 = cljs.core.chunk_rest.call(null,seq__7782_7870__$1);
var G__7873 = c__5056__auto___7871;
var G__7874 = cljs.core.count.call(null,c__5056__auto___7871);
var G__7875 = (0);
seq__7782_7856 = G__7872;
chunk__7784_7857 = G__7873;
count__7785_7858 = G__7874;
i__7786_7859 = G__7875;
continue;
} else {
var vec__7802_7876 = cljs.core.first.call(null,seq__7782_7870__$1);
var actual_type_7877 = cljs.core.nth.call(null,vec__7802_7876,(0),null);
var __7878 = cljs.core.nth.call(null,vec__7802_7876,(1),null);
var keys_7879 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7805,actual_type_7877,f_7855], null);
var canonical_f_7880 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7804),keys_7879);
dommy.core.update_event_listeners_BANG_.call(null,elem_7804,dommy.utils.dissoc_in,keys_7879);

if(cljs.core.truth_(elem_7804.removeEventListener)){
elem_7804.removeEventListener(cljs.core.name.call(null,actual_type_7877),canonical_f_7880);
} else {
elem_7804.detachEvent(cljs.core.name.call(null,actual_type_7877),canonical_f_7880);
}

var G__7881 = cljs.core.next.call(null,seq__7782_7870__$1);
var G__7882 = null;
var G__7883 = (0);
var G__7884 = (0);
seq__7782_7856 = G__7881;
chunk__7784_7857 = G__7882;
count__7785_7858 = G__7883;
i__7786_7859 = G__7884;
continue;
}
} else {
}
}
break;
}

var G__7885 = cljs.core.next.call(null,seq__7781_7847__$1);
var G__7886 = null;
var G__7887 = (0);
var G__7888 = (0);
seq__7781_7806 = G__7885;
chunk__7788_7807 = G__7886;
count__7789_7808 = G__7887;
i__7790_7809 = G__7888;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq7778){
var G__7779 = cljs.core.first.call(null,seq7778);
var seq7778__$1 = cljs.core.next.call(null,seq7778);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7779,seq7778__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(){
var argseq__5311__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5311__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7891_7898 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7899 = cljs.core.nth.call(null,vec__7891_7898,(0),null);
var selector_7900 = cljs.core.nth.call(null,vec__7891_7898,(1),null);
var seq__7892_7901 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7893_7902 = null;
var count__7894_7903 = (0);
var i__7895_7904 = (0);
while(true){
if((i__7895_7904 < count__7894_7903)){
var vec__7896_7905 = cljs.core._nth.call(null,chunk__7893_7902,i__7895_7904);
var type_7906 = cljs.core.nth.call(null,vec__7896_7905,(0),null);
var f_7907 = cljs.core.nth.call(null,vec__7896_7905,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7906,((function (seq__7892_7901,chunk__7893_7902,count__7894_7903,i__7895_7904,vec__7896_7905,type_7906,f_7907,vec__7891_7898,elem_7899,selector_7900){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7906,dommy$core$this_fn);

return f_7907.call(null,e);
});})(seq__7892_7901,chunk__7893_7902,count__7894_7903,i__7895_7904,vec__7896_7905,type_7906,f_7907,vec__7891_7898,elem_7899,selector_7900))
);

var G__7908 = seq__7892_7901;
var G__7909 = chunk__7893_7902;
var G__7910 = count__7894_7903;
var G__7911 = (i__7895_7904 + (1));
seq__7892_7901 = G__7908;
chunk__7893_7902 = G__7909;
count__7894_7903 = G__7910;
i__7895_7904 = G__7911;
continue;
} else {
var temp__4422__auto___7912 = cljs.core.seq.call(null,seq__7892_7901);
if(temp__4422__auto___7912){
var seq__7892_7913__$1 = temp__4422__auto___7912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7892_7913__$1)){
var c__5056__auto___7914 = cljs.core.chunk_first.call(null,seq__7892_7913__$1);
var G__7915 = cljs.core.chunk_rest.call(null,seq__7892_7913__$1);
var G__7916 = c__5056__auto___7914;
var G__7917 = cljs.core.count.call(null,c__5056__auto___7914);
var G__7918 = (0);
seq__7892_7901 = G__7915;
chunk__7893_7902 = G__7916;
count__7894_7903 = G__7917;
i__7895_7904 = G__7918;
continue;
} else {
var vec__7897_7919 = cljs.core.first.call(null,seq__7892_7913__$1);
var type_7920 = cljs.core.nth.call(null,vec__7897_7919,(0),null);
var f_7921 = cljs.core.nth.call(null,vec__7897_7919,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7920,((function (seq__7892_7901,chunk__7893_7902,count__7894_7903,i__7895_7904,vec__7897_7919,type_7920,f_7921,seq__7892_7913__$1,temp__4422__auto___7912,vec__7891_7898,elem_7899,selector_7900){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7920,dommy$core$this_fn);

return f_7921.call(null,e);
});})(seq__7892_7901,chunk__7893_7902,count__7894_7903,i__7895_7904,vec__7897_7919,type_7920,f_7921,seq__7892_7913__$1,temp__4422__auto___7912,vec__7891_7898,elem_7899,selector_7900))
);

var G__7922 = cljs.core.next.call(null,seq__7892_7913__$1);
var G__7923 = null;
var G__7924 = (0);
var G__7925 = (0);
seq__7892_7901 = G__7922;
chunk__7893_7902 = G__7923;
count__7894_7903 = G__7924;
i__7895_7904 = G__7925;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq7889){
var G__7890 = cljs.core.first.call(null,seq7889);
var seq7889__$1 = cljs.core.next.call(null,seq7889);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7890,seq7889__$1);
});

//# sourceMappingURL=core.js.map?rel=1430998358287