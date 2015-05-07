// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__7158_7162 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__7159_7163 = null;
var count__7160_7164 = (0);
var i__7161_7165 = (0);
while(true){
if((i__7161_7165 < count__7160_7164)){
var k_7166 = cljs.core._nth.call(null,chunk__7159_7163,i__7161_7165);
var v_7167 = (b[k_7166]);
(a[k_7166] = v_7167);

var G__7168 = seq__7158_7162;
var G__7169 = chunk__7159_7163;
var G__7170 = count__7160_7164;
var G__7171 = (i__7161_7165 + (1));
seq__7158_7162 = G__7168;
chunk__7159_7163 = G__7169;
count__7160_7164 = G__7170;
i__7161_7165 = G__7171;
continue;
} else {
var temp__4422__auto___7172 = cljs.core.seq.call(null,seq__7158_7162);
if(temp__4422__auto___7172){
var seq__7158_7173__$1 = temp__4422__auto___7172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7158_7173__$1)){
var c__5056__auto___7174 = cljs.core.chunk_first.call(null,seq__7158_7173__$1);
var G__7175 = cljs.core.chunk_rest.call(null,seq__7158_7173__$1);
var G__7176 = c__5056__auto___7174;
var G__7177 = cljs.core.count.call(null,c__5056__auto___7174);
var G__7178 = (0);
seq__7158_7162 = G__7175;
chunk__7159_7163 = G__7176;
count__7160_7164 = G__7177;
i__7161_7165 = G__7178;
continue;
} else {
var k_7179 = cljs.core.first.call(null,seq__7158_7173__$1);
var v_7180 = (b[k_7179]);
(a[k_7179] = v_7180);

var G__7181 = cljs.core.next.call(null,seq__7158_7173__$1);
var G__7182 = null;
var G__7183 = (0);
var G__7184 = (0);
seq__7158_7162 = G__7181;
chunk__7159_7163 = G__7182;
count__7160_7164 = G__7183;
i__7161_7165 = G__7184;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__7186 = arguments.length;
switch (G__7186) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__7188 = (i + (2));
var G__7189 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__7188;
ret = G__7189;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7190_7194 = cljs.core.seq.call(null,v);
var chunk__7191_7195 = null;
var count__7192_7196 = (0);
var i__7193_7197 = (0);
while(true){
if((i__7193_7197 < count__7192_7196)){
var x_7198 = cljs.core._nth.call(null,chunk__7191_7195,i__7193_7197);
ret.push(x_7198);

var G__7199 = seq__7190_7194;
var G__7200 = chunk__7191_7195;
var G__7201 = count__7192_7196;
var G__7202 = (i__7193_7197 + (1));
seq__7190_7194 = G__7199;
chunk__7191_7195 = G__7200;
count__7192_7196 = G__7201;
i__7193_7197 = G__7202;
continue;
} else {
var temp__4422__auto___7203 = cljs.core.seq.call(null,seq__7190_7194);
if(temp__4422__auto___7203){
var seq__7190_7204__$1 = temp__4422__auto___7203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7190_7204__$1)){
var c__5056__auto___7205 = cljs.core.chunk_first.call(null,seq__7190_7204__$1);
var G__7206 = cljs.core.chunk_rest.call(null,seq__7190_7204__$1);
var G__7207 = c__5056__auto___7205;
var G__7208 = cljs.core.count.call(null,c__5056__auto___7205);
var G__7209 = (0);
seq__7190_7194 = G__7206;
chunk__7191_7195 = G__7207;
count__7192_7196 = G__7208;
i__7193_7197 = G__7209;
continue;
} else {
var x_7210 = cljs.core.first.call(null,seq__7190_7204__$1);
ret.push(x_7210);

var G__7211 = cljs.core.next.call(null,seq__7190_7204__$1);
var G__7212 = null;
var G__7213 = (0);
var G__7214 = (0);
seq__7190_7194 = G__7211;
chunk__7191_7195 = G__7212;
count__7192_7196 = G__7213;
i__7193_7197 = G__7214;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7215_7219 = cljs.core.seq.call(null,v);
var chunk__7216_7220 = null;
var count__7217_7221 = (0);
var i__7218_7222 = (0);
while(true){
if((i__7218_7222 < count__7217_7221)){
var x_7223 = cljs.core._nth.call(null,chunk__7216_7220,i__7218_7222);
ret.push(x_7223);

var G__7224 = seq__7215_7219;
var G__7225 = chunk__7216_7220;
var G__7226 = count__7217_7221;
var G__7227 = (i__7218_7222 + (1));
seq__7215_7219 = G__7224;
chunk__7216_7220 = G__7225;
count__7217_7221 = G__7226;
i__7218_7222 = G__7227;
continue;
} else {
var temp__4422__auto___7228 = cljs.core.seq.call(null,seq__7215_7219);
if(temp__4422__auto___7228){
var seq__7215_7229__$1 = temp__4422__auto___7228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7215_7229__$1)){
var c__5056__auto___7230 = cljs.core.chunk_first.call(null,seq__7215_7229__$1);
var G__7231 = cljs.core.chunk_rest.call(null,seq__7215_7229__$1);
var G__7232 = c__5056__auto___7230;
var G__7233 = cljs.core.count.call(null,c__5056__auto___7230);
var G__7234 = (0);
seq__7215_7219 = G__7231;
chunk__7216_7220 = G__7232;
count__7217_7221 = G__7233;
i__7218_7222 = G__7234;
continue;
} else {
var x_7235 = cljs.core.first.call(null,seq__7215_7229__$1);
ret.push(x_7235);

var G__7236 = cljs.core.next.call(null,seq__7215_7229__$1);
var G__7237 = null;
var G__7238 = (0);
var G__7239 = (0);
seq__7215_7219 = G__7236;
chunk__7216_7220 = G__7237;
count__7217_7221 = G__7238;
i__7218_7222 = G__7239;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7240_7244 = cljs.core.seq.call(null,v);
var chunk__7241_7245 = null;
var count__7242_7246 = (0);
var i__7243_7247 = (0);
while(true){
if((i__7243_7247 < count__7242_7246)){
var x_7248 = cljs.core._nth.call(null,chunk__7241_7245,i__7243_7247);
ret.push(x_7248);

var G__7249 = seq__7240_7244;
var G__7250 = chunk__7241_7245;
var G__7251 = count__7242_7246;
var G__7252 = (i__7243_7247 + (1));
seq__7240_7244 = G__7249;
chunk__7241_7245 = G__7250;
count__7242_7246 = G__7251;
i__7243_7247 = G__7252;
continue;
} else {
var temp__4422__auto___7253 = cljs.core.seq.call(null,seq__7240_7244);
if(temp__4422__auto___7253){
var seq__7240_7254__$1 = temp__4422__auto___7253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7240_7254__$1)){
var c__5056__auto___7255 = cljs.core.chunk_first.call(null,seq__7240_7254__$1);
var G__7256 = cljs.core.chunk_rest.call(null,seq__7240_7254__$1);
var G__7257 = c__5056__auto___7255;
var G__7258 = cljs.core.count.call(null,c__5056__auto___7255);
var G__7259 = (0);
seq__7240_7244 = G__7256;
chunk__7241_7245 = G__7257;
count__7242_7246 = G__7258;
i__7243_7247 = G__7259;
continue;
} else {
var x_7260 = cljs.core.first.call(null,seq__7240_7254__$1);
ret.push(x_7260);

var G__7261 = cljs.core.next.call(null,seq__7240_7254__$1);
var G__7262 = null;
var G__7263 = (0);
var G__7264 = (0);
seq__7240_7244 = G__7261;
chunk__7241_7245 = G__7262;
count__7242_7246 = G__7263;
i__7243_7247 = G__7264;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__7266 = arguments.length;
switch (G__7266) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__7267 = obj;
G__7267.push(kfn.call(null,k),vfn.call(null,v));

return G__7267;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x7268 = cljs.core.clone.call(null,handlers);
x7268.forEach = ((function (x7268,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__7269 = cljs.core.seq.call(null,coll);
var chunk__7270 = null;
var count__7271 = (0);
var i__7272 = (0);
while(true){
if((i__7272 < count__7271)){
var vec__7273 = cljs.core._nth.call(null,chunk__7270,i__7272);
var k = cljs.core.nth.call(null,vec__7273,(0),null);
var v = cljs.core.nth.call(null,vec__7273,(1),null);
f.call(null,v,k);

var G__7276 = seq__7269;
var G__7277 = chunk__7270;
var G__7278 = count__7271;
var G__7279 = (i__7272 + (1));
seq__7269 = G__7276;
chunk__7270 = G__7277;
count__7271 = G__7278;
i__7272 = G__7279;
continue;
} else {
var temp__4422__auto__ = cljs.core.seq.call(null,seq__7269);
if(temp__4422__auto__){
var seq__7269__$1 = temp__4422__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7269__$1)){
var c__5056__auto__ = cljs.core.chunk_first.call(null,seq__7269__$1);
var G__7280 = cljs.core.chunk_rest.call(null,seq__7269__$1);
var G__7281 = c__5056__auto__;
var G__7282 = cljs.core.count.call(null,c__5056__auto__);
var G__7283 = (0);
seq__7269 = G__7280;
chunk__7270 = G__7281;
count__7271 = G__7282;
i__7272 = G__7283;
continue;
} else {
var vec__7274 = cljs.core.first.call(null,seq__7269__$1);
var k = cljs.core.nth.call(null,vec__7274,(0),null);
var v = cljs.core.nth.call(null,vec__7274,(1),null);
f.call(null,v,k);

var G__7284 = cljs.core.next.call(null,seq__7269__$1);
var G__7285 = null;
var G__7286 = (0);
var G__7287 = (0);
seq__7269 = G__7284;
chunk__7270 = G__7285;
count__7271 = G__7286;
i__7272 = G__7287;
continue;
}
} else {
return null;
}
}
break;
}
});})(x7268,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x7268;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__7289 = arguments.length;
switch (G__7289) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t7290 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t7290 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta7291){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta7291 = meta7291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t7290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7292,meta7291__$1){
var self__ = this;
var _7292__$1 = this;
return (new cognitect.transit.t7290(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta7291__$1));
});

cognitect.transit.t7290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7292){
var self__ = this;
var _7292__$1 = this;
return self__.meta7291;
});

cognitect.transit.t7290.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t7290.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t7290.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t7290.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t7290.cljs$lang$type = true;

cognitect.transit.t7290.cljs$lang$ctorStr = "cognitect.transit/t7290";

cognitect.transit.t7290.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"cognitect.transit/t7290");
});

cognitect.transit.__GT_t7290 = (function cognitect$transit$__GT_t7290(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta7291){
return (new cognitect.transit.t7290(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta7291));
});

}

return (new cognitect.transit.t7290(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1430998357710