goog.provide('thi.ng.geom.gl.utils');
goog.require('cljs.core');
goog.require('thi.ng.typedarrays.core');
goog.require('thi.ng.xerror.core');
thi.ng.geom.gl.utils.get_script_text = (function thi$ng$geom$gl$utils$get_script_text(id){
var temp__5733__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5733__auto__)){
var e = temp__5733__auto__;
return e.text;
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(["Unknown DOM element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}
});
/**
 * A combination of map & doseq specialized for maps. Takes a function `f` and
 *  a map, calls `f` with each key & value, discards results.
 */
thi.ng.geom.gl.utils.loop_kv = (function thi$ng$geom$gl$utils$loop_kv(f,xs){
var xs__$1 = xs;
while(true){
if(cljs.core.truth_(xs__$1)){
var x = cljs.core.first(xs__$1);
var G__29700_29706 = cljs.core.first(x);
var G__29701_29707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(1));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29700_29706,G__29701_29707) : f.call(null,G__29700_29706,G__29701_29707));

var G__29709 = cljs.core.next(xs__$1);
xs__$1 = G__29709;
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=thi.ng.geom.gl.utils.js.map
