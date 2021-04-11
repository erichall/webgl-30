goog.provide('webgl_30.core');
goog.require('cljs.core');
webgl_30.core.current_namespace = (function webgl_30$core$current_namespace(s){
return cljs.core.name(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))));
});
webgl_30.core.format = (function webgl_30$core$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___360216 = arguments.length;
var i__4790__auto___360217 = (0);
while(true){
if((i__4790__auto___360217 < len__4789__auto___360216)){
args__4795__auto__.push((arguments[i__4790__auto___360217]));

var G__360218 = (i__4790__auto___360217 + (1));
i__4790__auto___360217 = G__360218;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.pprint.cl_format,null,f,xs);
}));

(webgl_30.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.core.format.cljs$lang$applyTo = (function (seq360213){
var G__360214 = cljs.core.first(seq360213);
var seq360213__$1 = cljs.core.next(seq360213);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__360214,seq360213__$1);
}));

/**
 * Get current ns without only chars in.
 */
webgl_30.core.ns_str = (function webgl_30$core$ns_str(ns_const){
return clojure.string.replace_all(webgl_30.core.current_namespace(ns_const),/[\W_]+/,"");
});
/**
 * ns-symbol is in the form #'::x
 */
webgl_30.core.get_filename = (function webgl_30$core$get_filename(ns_symbol){
return new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ns_symbol));
});
/**
 * Replace last item in a vector, throws if it's empty........!
 */
webgl_30.core.set_last = (function webgl_30$core$set_last(v,a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,(cljs.core.count(v) - (1)),a);
});

//# sourceMappingURL=webgl_30.core.js.map
