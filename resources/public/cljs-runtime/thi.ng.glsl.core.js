goog.provide('thi.ng.glsl.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.stuartsierra.dependency');
thi.ng.glsl.core.minify_floats = (function thi$ng$glsl$core$minify_floats(src){
return clojure.string.replace(src,/(\d+)\.(\d+)/,(function (p__30462){
var vec__30465 = p__30462;
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30465,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30465,(1),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30465,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",d)){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["0",null], null), null),f)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d),"."].join('');
} else {
return o;

}
}
}));
});
thi.ng.glsl.core.minify_line = (function thi$ng$glsl$core$minify_line(src){
var src__$1 = clojure.string.replace(clojure.string.replace(thi.ng.glsl.core.minify_floats(src),/\s{2,}|\t/,""),/\s*(\{|\}|\=|\*|\,|\+|\/|\>|\<|\&|\||\[|\]|\(|\)|\-|\!|\;)\s*/,"$1");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(src__$1))){
return ["\n",src__$1,"\n"].join('');
} else {
return src__$1;
}
});
thi.ng.glsl.core.clean_line_breaks = (function thi$ng$glsl$core$clean_line_breaks(src){
return clojure.string.replace(src,/\n{2,}/,"\n");
});
thi.ng.glsl.core.minify = (function thi$ng$glsl$core$minify(src){
var src__$1 = clojure.string.replace(clojure.string.replace(clojure.string.replace(src,/\/\/.*/,""),/\/\*[\s\S]*?\*\//,""),/^\n+/,"");
return thi.ng.glsl.core.clean_line_breaks(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(thi.ng.glsl.core.minify_line,clojure.string.split.cljs$core$IFn$_invoke$arity$2(src__$1,/\n/))));
});
thi.ng.glsl.core.re_meta = /((((highp|mediump|lowp)\s+)?(void|bool|float|int|(b|i)?vec\d|mat\d))\s+([\w_]+)\s*\(([A-Za-z0-9_, ]*)\)\s*\{)/;
/**
 * Attempts to extract function name, return type and args from given
 *   GLSL source string. If successful, returns map w/ these
 *   keys: :glsl-name :glsl-return :glsl-args
 */
thi.ng.glsl.core.extract_glsl_meta = (function thi$ng$glsl$core$extract_glsl_meta(src){
var temp__5733__auto__ = cljs.core.first(cljs.core.re_seq(thi.ng.glsl.core.re_meta,src));
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
var return$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(2));
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(7));
var args = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(8)),/,\s*/)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"glsl-return","glsl-return",136225452),return$,new cljs.core.Keyword(null,"glsl-name","glsl-name",1538293953),name,new cljs.core.Keyword(null,"glsl-args","glsl-args",350641984),args], null);
} else {
return null;
}
});
thi.ng.glsl.core.build_graph = (function thi$ng$glsl$core$build_graph(var_args){
var G__30490 = arguments.length;
switch (G__30490) {
case 1:
return thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$2(com.stuartsierra.dependency.graph(),spec);
}));

(thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$2 = (function (g,curr){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,d){
return thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$2(com.stuartsierra.dependency.depend(g__$1,curr,d),d);
}),g,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(curr));
}));

(thi.ng.glsl.core.build_graph.cljs$lang$maxFixedArity = 2);

thi.ng.glsl.core.assemble = (function thi$ng$glsl$core$assemble(spec){
if(cljs.core.seq(new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(spec))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"src","src",-1651076051),com.stuartsierra.dependency.topo_sort(thi.ng.glsl.core.build_graph.cljs$core$IFn$_invoke$arity$1(spec))));
} else {
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(spec);
}
});
thi.ng.glsl.core.glsl_spec_plain = (function thi$ng$glsl$core$glsl_spec_plain(deps,src){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),deps,new cljs.core.Keyword(null,"src","src",-1651076051),src], null);
});

//# sourceMappingURL=thi.ng.glsl.core.js.map
