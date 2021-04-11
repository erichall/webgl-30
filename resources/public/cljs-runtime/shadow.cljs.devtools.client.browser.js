goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36282 = arguments.length;
var i__4790__auto___36284 = (0);
while(true){
if((i__4790__auto___36284 < len__4789__auto___36282)){
args__4795__auto__.push((arguments[i__4790__auto___36284]));

var G__36285 = (i__4790__auto___36284 + (1));
i__4790__auto___36284 = G__36285;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36068){
var G__36069 = cljs.core.first(seq36068);
var seq36068__$1 = cljs.core.next(seq36068);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36069,seq36068__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__36073){
var map__36074 = p__36073;
var map__36074__$1 = (((((!((map__36074 == null))))?(((((map__36074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36074):map__36074);
var src = map__36074__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36074__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36074__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36079 = cljs.core.seq(sources);
var chunk__36080 = null;
var count__36081 = (0);
var i__36082 = (0);
while(true){
if((i__36082 < count__36081)){
var map__36096 = chunk__36080.cljs$core$IIndexed$_nth$arity$2(null,i__36082);
var map__36096__$1 = (((((!((map__36096 == null))))?(((((map__36096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36096):map__36096);
var src = map__36096__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36099){var e_36291 = e36099;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36291);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36291.message)].join('')));
}

var G__36292 = seq__36079;
var G__36293 = chunk__36080;
var G__36294 = count__36081;
var G__36295 = (i__36082 + (1));
seq__36079 = G__36292;
chunk__36080 = G__36293;
count__36081 = G__36294;
i__36082 = G__36295;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36079);
if(temp__5735__auto__){
var seq__36079__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36079__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36079__$1);
var G__36297 = cljs.core.chunk_rest(seq__36079__$1);
var G__36298 = c__4609__auto__;
var G__36299 = cljs.core.count(c__4609__auto__);
var G__36300 = (0);
seq__36079 = G__36297;
chunk__36080 = G__36298;
count__36081 = G__36299;
i__36082 = G__36300;
continue;
} else {
var map__36100 = cljs.core.first(seq__36079__$1);
var map__36100__$1 = (((((!((map__36100 == null))))?(((((map__36100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36100):map__36100);
var src = map__36100__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36104){var e_36302 = e36104;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36302);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36302.message)].join('')));
}

var G__36304 = cljs.core.next(seq__36079__$1);
var G__36305 = null;
var G__36306 = (0);
var G__36307 = (0);
seq__36079 = G__36304;
chunk__36080 = G__36305;
count__36081 = G__36306;
i__36082 = G__36307;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36106 = cljs.core.seq(js_requires);
var chunk__36107 = null;
var count__36108 = (0);
var i__36109 = (0);
while(true){
if((i__36109 < count__36108)){
var js_ns = chunk__36107.cljs$core$IIndexed$_nth$arity$2(null,i__36109);
var require_str_36312 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36312);


var G__36313 = seq__36106;
var G__36314 = chunk__36107;
var G__36315 = count__36108;
var G__36316 = (i__36109 + (1));
seq__36106 = G__36313;
chunk__36107 = G__36314;
count__36108 = G__36315;
i__36109 = G__36316;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36106);
if(temp__5735__auto__){
var seq__36106__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36106__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36106__$1);
var G__36317 = cljs.core.chunk_rest(seq__36106__$1);
var G__36318 = c__4609__auto__;
var G__36319 = cljs.core.count(c__4609__auto__);
var G__36320 = (0);
seq__36106 = G__36317;
chunk__36107 = G__36318;
count__36108 = G__36319;
i__36109 = G__36320;
continue;
} else {
var js_ns = cljs.core.first(seq__36106__$1);
var require_str_36321 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36321);


var G__36322 = cljs.core.next(seq__36106__$1);
var G__36323 = null;
var G__36324 = (0);
var G__36325 = (0);
seq__36106 = G__36322;
chunk__36107 = G__36323;
count__36108 = G__36324;
i__36109 = G__36325;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36116 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36116) : callback.call(null,G__36116));
} else {
var G__36118 = shadow.cljs.devtools.client.env.files_url();
var G__36119 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__36120 = "POST";
var G__36121 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__36122 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36118,G__36119,G__36120,G__36121,G__36122);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36126){
var map__36127 = p__36126;
var map__36127__$1 = (((((!((map__36127 == null))))?(((((map__36127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36127):map__36127);
var msg = map__36127__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36127__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36127__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__36129 = info;
var map__36129__$1 = (((((!((map__36129 == null))))?(((((map__36129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36129):map__36129);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36129__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36129__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131(s__36132){
return (new cljs.core.LazySeq(null,(function (){
var s__36132__$1 = s__36132;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36132__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36137 = cljs.core.first(xs__6292__auto__);
var map__36137__$1 = (((((!((map__36137 == null))))?(((((map__36137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36137):map__36137);
var src = map__36137__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36137__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__36132__$1,map__36137,map__36137__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36129,map__36129__$1,sources,compiled,map__36127,map__36127__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131_$_iter__36133(s__36134){
return (new cljs.core.LazySeq(null,((function (s__36132__$1,map__36137,map__36137__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36129,map__36129__$1,sources,compiled,map__36127,map__36127__$1,msg,info,reload_info){
return (function (){
var s__36134__$1 = s__36134;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36134__$1);
if(temp__5735__auto____$1){
var s__36134__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36134__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36134__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36136 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36135 = (0);
while(true){
if((i__36135 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__36135);
cljs.core.chunk_append(b__36136,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36330 = (i__36135 + (1));
i__36135 = G__36330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36136),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131_$_iter__36133(cljs.core.chunk_rest(s__36134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36136),null);
}
} else {
var warning = cljs.core.first(s__36134__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131_$_iter__36133(cljs.core.rest(s__36134__$2)));
}
} else {
return null;
}
break;
}
});})(s__36132__$1,map__36137,map__36137__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36129,map__36129__$1,sources,compiled,map__36127,map__36127__$1,msg,info,reload_info))
,null,null));
});})(s__36132__$1,map__36137,map__36137__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36129,map__36129__$1,sources,compiled,map__36127,map__36127__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131(cljs.core.rest(s__36132__$1)));
} else {
var G__36333 = cljs.core.rest(s__36132__$1);
s__36132__$1 = G__36333;
continue;
}
} else {
var G__36334 = cljs.core.rest(s__36132__$1);
s__36132__$1 = G__36334;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__36141_36335 = cljs.core.seq(warnings);
var chunk__36142_36336 = null;
var count__36143_36337 = (0);
var i__36144_36338 = (0);
while(true){
if((i__36144_36338 < count__36143_36337)){
var map__36149_36339 = chunk__36142_36336.cljs$core$IIndexed$_nth$arity$2(null,i__36144_36338);
var map__36149_36340__$1 = (((((!((map__36149_36339 == null))))?(((((map__36149_36339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36149_36339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36149_36339):map__36149_36339);
var w_36341 = map__36149_36340__$1;
var msg_36342__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149_36340__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149_36340__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149_36340__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149_36340__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36345)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36343),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36344),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36342__$1)].join(''));


var G__36349 = seq__36141_36335;
var G__36350 = chunk__36142_36336;
var G__36351 = count__36143_36337;
var G__36352 = (i__36144_36338 + (1));
seq__36141_36335 = G__36349;
chunk__36142_36336 = G__36350;
count__36143_36337 = G__36351;
i__36144_36338 = G__36352;
continue;
} else {
var temp__5735__auto___36353 = cljs.core.seq(seq__36141_36335);
if(temp__5735__auto___36353){
var seq__36141_36354__$1 = temp__5735__auto___36353;
if(cljs.core.chunked_seq_QMARK_(seq__36141_36354__$1)){
var c__4609__auto___36355 = cljs.core.chunk_first(seq__36141_36354__$1);
var G__36356 = cljs.core.chunk_rest(seq__36141_36354__$1);
var G__36357 = c__4609__auto___36355;
var G__36358 = cljs.core.count(c__4609__auto___36355);
var G__36359 = (0);
seq__36141_36335 = G__36356;
chunk__36142_36336 = G__36357;
count__36143_36337 = G__36358;
i__36144_36338 = G__36359;
continue;
} else {
var map__36151_36360 = cljs.core.first(seq__36141_36354__$1);
var map__36151_36361__$1 = (((((!((map__36151_36360 == null))))?(((((map__36151_36360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36151_36360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36151_36360):map__36151_36360);
var w_36362 = map__36151_36361__$1;
var msg_36363__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36361__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36361__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36361__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36361__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36366)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36364),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36365),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36363__$1)].join(''));


var G__36370 = cljs.core.next(seq__36141_36354__$1);
var G__36371 = null;
var G__36372 = (0);
var G__36373 = (0);
seq__36141_36335 = G__36370;
chunk__36142_36336 = G__36371;
count__36143_36337 = G__36372;
i__36144_36338 = G__36373;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36153){
var map__36154 = p__36153;
var map__36154__$1 = (((((!((map__36154 == null))))?(((((map__36154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36154):map__36154);
var src = map__36154__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36156){
var map__36157 = p__36156;
var map__36157__$1 = (((((!((map__36157 == null))))?(((((map__36157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36157):map__36157);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36157__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__36159){
var map__36160 = p__36159;
var map__36160__$1 = (((((!((map__36160 == null))))?(((((map__36160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36160):map__36160);
var rc = map__36160__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36160__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__36125_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36125_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36162){
var map__36163 = p__36162;
var map__36163__$1 = (((((!((map__36163 == null))))?(((((map__36163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36163):map__36163);
var msg = map__36163__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36167 = cljs.core.seq(updates);
var chunk__36169 = null;
var count__36170 = (0);
var i__36171 = (0);
while(true){
if((i__36171 < count__36170)){
var path = chunk__36169.cljs$core$IIndexed$_nth$arity$2(null,i__36171);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36209_36377 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36212_36378 = null;
var count__36213_36379 = (0);
var i__36214_36380 = (0);
while(true){
if((i__36214_36380 < count__36213_36379)){
var node_36381 = chunk__36212_36378.cljs$core$IIndexed$_nth$arity$2(null,i__36214_36380);
var path_match_36382 = shadow.cljs.devtools.client.browser.match_paths(node_36381.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36382)){
var new_link_36383 = (function (){var G__36219 = node_36381.cloneNode(true);
G__36219.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36382),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36219;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36382], 0));

goog.dom.insertSiblingAfter(new_link_36383,node_36381);

goog.dom.removeNode(node_36381);


var G__36384 = seq__36209_36377;
var G__36385 = chunk__36212_36378;
var G__36386 = count__36213_36379;
var G__36387 = (i__36214_36380 + (1));
seq__36209_36377 = G__36384;
chunk__36212_36378 = G__36385;
count__36213_36379 = G__36386;
i__36214_36380 = G__36387;
continue;
} else {
var G__36388 = seq__36209_36377;
var G__36389 = chunk__36212_36378;
var G__36390 = count__36213_36379;
var G__36391 = (i__36214_36380 + (1));
seq__36209_36377 = G__36388;
chunk__36212_36378 = G__36389;
count__36213_36379 = G__36390;
i__36214_36380 = G__36391;
continue;
}
} else {
var temp__5735__auto___36392 = cljs.core.seq(seq__36209_36377);
if(temp__5735__auto___36392){
var seq__36209_36393__$1 = temp__5735__auto___36392;
if(cljs.core.chunked_seq_QMARK_(seq__36209_36393__$1)){
var c__4609__auto___36394 = cljs.core.chunk_first(seq__36209_36393__$1);
var G__36395 = cljs.core.chunk_rest(seq__36209_36393__$1);
var G__36396 = c__4609__auto___36394;
var G__36397 = cljs.core.count(c__4609__auto___36394);
var G__36398 = (0);
seq__36209_36377 = G__36395;
chunk__36212_36378 = G__36396;
count__36213_36379 = G__36397;
i__36214_36380 = G__36398;
continue;
} else {
var node_36399 = cljs.core.first(seq__36209_36393__$1);
var path_match_36400 = shadow.cljs.devtools.client.browser.match_paths(node_36399.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36400)){
var new_link_36401 = (function (){var G__36224 = node_36399.cloneNode(true);
G__36224.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36400),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36224;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36400], 0));

goog.dom.insertSiblingAfter(new_link_36401,node_36399);

goog.dom.removeNode(node_36399);


var G__36402 = cljs.core.next(seq__36209_36393__$1);
var G__36403 = null;
var G__36404 = (0);
var G__36405 = (0);
seq__36209_36377 = G__36402;
chunk__36212_36378 = G__36403;
count__36213_36379 = G__36404;
i__36214_36380 = G__36405;
continue;
} else {
var G__36406 = cljs.core.next(seq__36209_36393__$1);
var G__36407 = null;
var G__36408 = (0);
var G__36409 = (0);
seq__36209_36377 = G__36406;
chunk__36212_36378 = G__36407;
count__36213_36379 = G__36408;
i__36214_36380 = G__36409;
continue;
}
}
} else {
}
}
break;
}


var G__36410 = seq__36167;
var G__36411 = chunk__36169;
var G__36412 = count__36170;
var G__36413 = (i__36171 + (1));
seq__36167 = G__36410;
chunk__36169 = G__36411;
count__36170 = G__36412;
i__36171 = G__36413;
continue;
} else {
var G__36414 = seq__36167;
var G__36415 = chunk__36169;
var G__36416 = count__36170;
var G__36417 = (i__36171 + (1));
seq__36167 = G__36414;
chunk__36169 = G__36415;
count__36170 = G__36416;
i__36171 = G__36417;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36167);
if(temp__5735__auto__){
var seq__36167__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36167__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36167__$1);
var G__36419 = cljs.core.chunk_rest(seq__36167__$1);
var G__36420 = c__4609__auto__;
var G__36421 = cljs.core.count(c__4609__auto__);
var G__36422 = (0);
seq__36167 = G__36419;
chunk__36169 = G__36420;
count__36170 = G__36421;
i__36171 = G__36422;
continue;
} else {
var path = cljs.core.first(seq__36167__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36225_36423 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36228_36424 = null;
var count__36229_36425 = (0);
var i__36230_36426 = (0);
while(true){
if((i__36230_36426 < count__36229_36425)){
var node_36427 = chunk__36228_36424.cljs$core$IIndexed$_nth$arity$2(null,i__36230_36426);
var path_match_36428 = shadow.cljs.devtools.client.browser.match_paths(node_36427.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36428)){
var new_link_36429 = (function (){var G__36236 = node_36427.cloneNode(true);
G__36236.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36428),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36236;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36428], 0));

goog.dom.insertSiblingAfter(new_link_36429,node_36427);

goog.dom.removeNode(node_36427);


var G__36430 = seq__36225_36423;
var G__36431 = chunk__36228_36424;
var G__36432 = count__36229_36425;
var G__36433 = (i__36230_36426 + (1));
seq__36225_36423 = G__36430;
chunk__36228_36424 = G__36431;
count__36229_36425 = G__36432;
i__36230_36426 = G__36433;
continue;
} else {
var G__36434 = seq__36225_36423;
var G__36435 = chunk__36228_36424;
var G__36436 = count__36229_36425;
var G__36437 = (i__36230_36426 + (1));
seq__36225_36423 = G__36434;
chunk__36228_36424 = G__36435;
count__36229_36425 = G__36436;
i__36230_36426 = G__36437;
continue;
}
} else {
var temp__5735__auto___36438__$1 = cljs.core.seq(seq__36225_36423);
if(temp__5735__auto___36438__$1){
var seq__36225_36439__$1 = temp__5735__auto___36438__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36225_36439__$1)){
var c__4609__auto___36440 = cljs.core.chunk_first(seq__36225_36439__$1);
var G__36441 = cljs.core.chunk_rest(seq__36225_36439__$1);
var G__36442 = c__4609__auto___36440;
var G__36443 = cljs.core.count(c__4609__auto___36440);
var G__36444 = (0);
seq__36225_36423 = G__36441;
chunk__36228_36424 = G__36442;
count__36229_36425 = G__36443;
i__36230_36426 = G__36444;
continue;
} else {
var node_36445 = cljs.core.first(seq__36225_36439__$1);
var path_match_36446 = shadow.cljs.devtools.client.browser.match_paths(node_36445.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36446)){
var new_link_36447 = (function (){var G__36237 = node_36445.cloneNode(true);
G__36237.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36446),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36237;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36446], 0));

goog.dom.insertSiblingAfter(new_link_36447,node_36445);

goog.dom.removeNode(node_36445);


var G__36448 = cljs.core.next(seq__36225_36439__$1);
var G__36449 = null;
var G__36450 = (0);
var G__36451 = (0);
seq__36225_36423 = G__36448;
chunk__36228_36424 = G__36449;
count__36229_36425 = G__36450;
i__36230_36426 = G__36451;
continue;
} else {
var G__36452 = cljs.core.next(seq__36225_36439__$1);
var G__36453 = null;
var G__36454 = (0);
var G__36455 = (0);
seq__36225_36423 = G__36452;
chunk__36228_36424 = G__36453;
count__36229_36425 = G__36454;
i__36230_36426 = G__36455;
continue;
}
}
} else {
}
}
break;
}


var G__36456 = cljs.core.next(seq__36167__$1);
var G__36457 = null;
var G__36458 = (0);
var G__36459 = (0);
seq__36167 = G__36456;
chunk__36169 = G__36457;
count__36170 = G__36458;
i__36171 = G__36459;
continue;
} else {
var G__36460 = cljs.core.next(seq__36167__$1);
var G__36461 = null;
var G__36462 = (0);
var G__36463 = (0);
seq__36167 = G__36460;
chunk__36169 = G__36461;
count__36170 = G__36462;
i__36171 = G__36463;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36244){
var map__36245 = p__36244;
var map__36245__$1 = (((((!((map__36245 == null))))?(((((map__36245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36245):map__36245);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36249,done){
var map__36250 = p__36249;
var map__36250__$1 = (((((!((map__36250 == null))))?(((((map__36250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36250):map__36250);
var msg = map__36250__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36250__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36255){
var map__36256 = p__36255;
var map__36256__$1 = (((((!((map__36256 == null))))?(((((map__36256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36256):map__36256);
var src = map__36256__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36256__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36258){var e = e36258;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36259,done){
var map__36260 = p__36259;
var map__36260__$1 = (((((!((map__36260 == null))))?(((((map__36260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36260):map__36260);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36260__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36260__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36264){
var map__36265 = p__36264;
var map__36265__$1 = (((((!((map__36265 == null))))?(((((map__36265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36265):map__36265);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36265__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36267,done){
var map__36268 = p__36267;
var map__36268__$1 = (((((!((map__36268 == null))))?(((((map__36268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36268):map__36268);
var msg = map__36268__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36268__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36270_36501 = type;
var G__36270_36502__$1 = (((G__36270_36501 instanceof cljs.core.Keyword))?G__36270_36501.fqn:null);
switch (G__36270_36502__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__36271 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__36272 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__36273 = "POST";
var G__36274 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__36275 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36271,G__36272,G__36273,G__36274,G__36275);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__36277 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__36276 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36276.cljs$core$IFn$_invoke$arity$1 ? fexpr__36276.cljs$core$IFn$_invoke$arity$1(G__36277) : fexpr__36276.call(null,G__36277));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36278){var e = e36278;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36533 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36533)){
var s_36534 = temp__5735__auto___36533;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36534.onclose = (function (e){
return null;
}));

s_36534.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
