goog.provide('thi.ng.geom.gl.camera');
goog.require('cljs.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.matrix');
/**
 * Takes a GL model spec map & camera, injects :view & :proj
 *   uniforms into spec.
 */
thi.ng.geom.gl.camera.apply = (function thi$ng$geom$gl$camera$apply(spec,cam){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(spec,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cam,new cljs.core.Keyword(null,"view","view",1247994814)),new cljs.core.Keyword(null,"proj","proj",1560823673),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cam,new cljs.core.Keyword(null,"proj","proj",1560823673))], null));
});
/**
 * Takes a map m, key seq and map of new vals, replaces keys in m with
 *   new vals. If a value in opts map is a function, applies fn to value
 *   of key in original map.
 */
thi.ng.geom.gl.camera.update_keys = (function thi$ng$geom$gl$camera$update_keys(m,ks,opts){
return cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,((cljs.core.fn_QMARK_(v))?(function (){var G__29864 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__29864) : v.call(null,G__29864));
})():v));
}),m,cljs.core.select_keys(opts,ks));
});
thi.ng.geom.gl.camera.set_view = (function thi$ng$geom$gl$camera$set_view(cam,opts){
var cam__$1 = thi.ng.geom.gl.camera.update_keys(cam,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eye","eye",-1788770007),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"up","up",-269712113)], null),opts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cam__$1,new cljs.core.Keyword(null,"view","view",1247994814),thi.ng.geom.matrix.look_at(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cam__$1,new cljs.core.Keyword(null,"eye","eye",-1788770007)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cam__$1,new cljs.core.Keyword(null,"target","target",253001721)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cam__$1,new cljs.core.Keyword(null,"up","up",-269712113))));
});
thi.ng.geom.gl.camera.set_projection = (function thi$ng$geom$gl$camera$set_projection(cam,opts){
var cam__$1 = thi.ng.geom.gl.camera.update_keys(cam,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fov","fov",-12463282),new cljs.core.Keyword(null,"aspect","aspect",-839905246),new cljs.core.Keyword(null,"near","near",-1077668328),new cljs.core.Keyword(null,"far","far",85807546)], null),opts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cam__$1,new cljs.core.Keyword(null,"proj","proj",1560823673),thi.ng.geom.matrix.perspective(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cam__$1,new cljs.core.Keyword(null,"fov","fov",-12463282)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cam__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cam__$1,new cljs.core.Keyword(null,"near","near",-1077668328)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cam__$1,new cljs.core.Keyword(null,"far","far",85807546))));
});
thi.ng.geom.gl.camera.perspective_camera = (function thi$ng$geom$gl$camera$perspective_camera(opts){
return thi.ng.geom.gl.camera.set_projection(thi.ng.geom.gl.camera.set_view(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eye","eye",-1788770007),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(0.0,0.0,2.0),new cljs.core.Keyword(null,"target","target",253001721),thi.ng.geom.vector.V3,new cljs.core.Keyword(null,"up","up",-269712113),thi.ng.geom.vector.V3Y,new cljs.core.Keyword(null,"fov","fov",-12463282),(45),new cljs.core.Keyword(null,"near","near",-1077668328),0.1,new cljs.core.Keyword(null,"far","far",85807546),(100),new cljs.core.Keyword(null,"aspect","aspect",-839905246),(16.0 / 9.0)], null),opts], 0)),opts),opts);
});

//# sourceMappingURL=thi.ng.geom.gl.camera.js.map
