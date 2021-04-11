goog.provide('thi.ng.geom.gmesh');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.meshface');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.math.core');
goog.require('clojure.core.reducers');
goog.require('clojure.set');
thi.ng.geom.gmesh.add_face_STAR_ = (function thi$ng$geom$gmesh$add_face_STAR_(p__29328,p__29329){
var map__29330 = p__29328;
var map__29330__$1 = (((((!((map__29330 == null))))?(((((map__29330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29330):map__29330);
var mesh = map__29330__$1;
var vertices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var faces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29330__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var vec__29331 = p__29329;
var verts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29331,(0),null);
var f = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29323_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.find(vertices,p1__29323_SHARP_),(0),p1__29323_SHARP_);
}),verts);
if((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(faces,f) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(f),cljs.core.count(cljs.core.set(f)))))){
var mf = (new thi.ng.geom.meshface.MeshFace(f,null));
var vertices__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__29337){
var vec__29338 = p__29337;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(2),null);
return thi.ng.dstruct.core.index_kv(acc,c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next","next",-117701485),n,new cljs.core.Keyword(null,"prev","prev",-1597069226),p,new cljs.core.Keyword(null,"f","f",-1597136552),mf], null));
}),vertices,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((3),(1),thi.ng.dstruct.core.wrap_seq(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(f)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(f)], null))));
var edges__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
return thi.ng.dstruct.core.index_kv(acc,cljs.core.set(pair),mf);
}),edges,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(f,cljs.core.first(f))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731),vertices__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edges","edges",-694791395),edges__$1,new cljs.core.Keyword(null,"faces","faces",-73909544),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(faces,mf)], 0));
} else {
return mesh;
}
});
thi.ng.geom.gmesh.vertices_planar_QMARK_ = (function thi$ng$geom$gmesh$vertices_planar_QMARK_(p__29342){
var vec__29343 = p__29342;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29343,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29343,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29343,(2),null);
var verts = vec__29343;
var or__4185__auto__ = (cljs.core.count(verts) < (4));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var n = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3(a,b,c);
return cljs.core.every_QMARK_((function (p1__29341_SHARP_){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(n,thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(p1__29341_SHARP_));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((3),(1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(verts),a)));
}
});
thi.ng.geom.gmesh.face_neighbors_shared_edges = (function thi$ng$geom$gmesh$face_neighbors_shared_edges(p__29353,f){
var map__29354 = p__29353;
var map__29354__$1 = (((((!((map__29354 == null))))?(((((map__29354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29354):map__29354);
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29354__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__29361 = cljs.core.set(pair);
return (edges.cljs$core$IFn$_invoke$arity$1 ? edges.cljs$core$IFn$_invoke$arity$1(G__29361) : edges.call(null,G__29361));
})(),f));
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(f,cljs.core.first(f))));
});
thi.ng.geom.gmesh.vertex_neighbors_STAR_ = (function thi$ng$geom$gmesh$vertex_neighbors_STAR_(p__29364,v){
var map__29365 = p__29364;
var map__29365__$1 = (((((!((map__29365 == null))))?(((((map__29365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29365):map__29365);
var vertices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29365__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"next","next",-117701485),vertices,v),thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"prev","prev",-1597069226),vertices,v));
});
thi.ng.geom.gmesh.vertex_valence_STAR_ = (function thi$ng$geom$gmesh$vertex_valence_STAR_(mesh,v){
return (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731)),v)) + (1));
});
thi.ng.geom.gmesh.vertex_faces_STAR_ = (function thi$ng$geom$gmesh$vertex_faces_STAR_(mesh,v){
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.get.cljs$core$IFn$_invoke$arity$2(mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731)),v);
});
thi.ng.geom.gmesh.remove_vertex_STAR_ = (function thi$ng$geom$gmesh$remove_vertex_STAR_(mesh,v){
if(cljs.core.truth_(cljs.core.find(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731)),v))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.remove_face,mesh,thi.ng.geom.gmesh.vertex_faces_STAR_(mesh,v));
} else {
return mesh;
}
});
thi.ng.geom.gmesh.replace_vertex_STAR_ = (function thi$ng$geom$gmesh$replace_vertex_STAR_(var_args){
var G__29374 = arguments.length;
switch (G__29374) {
case 3:
return thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (mesh,v,v2){
var vfaces = thi.ng.geom.gmesh.vertex_faces_STAR_(mesh,v);
return thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.remove_face,mesh,vfaces),v,v2,vfaces);
}));

(thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (mesh,v,v2,faces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29370_SHARP_,p2__29371_SHARP_){
return thi.ng.geom.gmesh.add_face_STAR_(p1__29370_SHARP_,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([v,v2]),p2__29371_SHARP_));
}),mesh,faces);
}));

(thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.gmesh.merge_vertices_STAR_ = (function thi$ng$geom$gmesh$merge_vertices_STAR_(mesh,a,b){
if(cljs.core.truth_((function (){var fexpr__29380 = thi.ng.geom.gmesh.vertex_neighbors_STAR_(mesh,a);
return (fexpr__29380.cljs$core$IFn$_invoke$arity$1 ? fexpr__29380.cljs$core$IFn$_invoke$arity$1(b) : fexpr__29380.call(null,b));
})())){
var fa = thi.ng.geom.gmesh.vertex_faces_STAR_(mesh,a);
var fb = thi.ng.geom.gmesh.vertex_faces_STAR_(mesh,b);
var ab_isec = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(fa,fb);
var a_xor = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(fa,ab_isec);
var b_xor = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(fb,ab_isec);
var mp = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(a,b);
return thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$4(thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.remove_face,mesh,clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(ab_isec,a_xor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b_xor], 0))),a,mp,a_xor),b,mp,b_xor);
} else {
return mesh;
}
});
/**
 * Builds a new 3d mesh data structure and (optionally) populates it with
 *   the given items (a seq of existing meshes and/or faces). Faces are defined
 *   as vectors of their vertices.
 */
thi.ng.geom.gmesh.gmesh = (function thi$ng$geom$gmesh$gmesh(){
return (new thi.ng.geom.types.GMesh(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null,null));
});
thi.ng.geom.gmesh.lathe_mesh = (function thi$ng$geom$gmesh$lathe_mesh(var_args){
var G__29390 = arguments.length;
switch (G__29390) {
case 4:
return thi.ng.geom.gmesh.lathe_mesh.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.gmesh.lathe_mesh.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gmesh.lathe_mesh.cljs$core$IFn$_invoke$arity$4 = (function (points,res,phi,rot_fn){
return thi.ng.geom.gmesh.lathe_mesh.cljs$core$IFn$_invoke$arity$5(points,res,phi,rot_fn,null);
}));

(thi.ng.geom.gmesh.lathe_mesh.cljs$core$IFn$_invoke$arity$5 = (function (points,res,phi,rot_fn,face_fn){
var strips = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
var theta = (i * phi);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29386_SHARP_){
var p = (rot_fn.cljs$core$IFn$_invoke$arity$2 ? rot_fn.cljs$core$IFn$_invoke$arity$2(p1__29386_SHARP_,theta) : rot_fn.call(null,p1__29386_SHARP_,theta));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(p,p1__29386_SHARP_,thi.ng.math.core._STAR_eps_STAR_))){
return p1__29386_SHARP_;
} else {
return p;
}
}),points);
}),cljs.core.butlast(thi.ng.math.core.norm_range(res)));
var strips__$1 = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(phi,thi.ng.math.core.TWO_PI))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(strips,cljs.core.first(strips)):strips);
var make_face = (function (p__29396,p__29397){
var vec__29398 = p__29396;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29398,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29398,(1),null);
var vec__29401 = p__29397;
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29401,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29401,(1),null);
var f = (((cljs.core.count(cljs.core.PersistentHashSet.createAsIfByAssoc([a1,a2,b1,b2])) < (3)))?null:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a1,b1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2,a2], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a2,b2))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,a2,a1], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2,a2,a1], null)
)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4174__auto__ = f;
if(cljs.core.truth_(and__4174__auto__)){
return face_fn;
} else {
return and__4174__auto__;
}
})())?(face_fn.cljs$core$IFn$_invoke$arity$1 ? face_fn.cljs$core$IFn$_invoke$arity$1(f) : face_fn.call(null,f)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))], null);
});
return thi.ng.geom.utils.into_mesh(thi.ng.geom.gmesh.gmesh(),thi.ng.geom.gmesh.add_face_STAR_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__29405){
var vec__29406 = p__29405;
var sa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29406,(0),null);
var sb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29406,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(make_face,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),sa),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),sb)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),strips__$1)], 0)));
}));

(thi.ng.geom.gmesh.lathe_mesh.cljs$lang$maxFixedArity = 5);

thi.ng.geom.gmesh.saddle = (function thi$ng$geom$gmesh$saddle(s){
var sv = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__29410){
var vec__29411 = p__29410;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29411,(1),null);
return thi.ng.geom.utils.into_mesh(m,thi.ng.geom.gmesh.add_face_STAR_,thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2((new thi.ng.geom.types.AABB(p,s,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flags","flags",1775418075),flags], null)));
}),thi.ng.geom.gmesh.gmesh(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"ewsfb","ewsfb",140980189)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),s,(0)),new cljs.core.Keyword(null,"wfb","wfb",821918881)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(s,s,(0)),new cljs.core.Keyword(null,"ensfb","ensfb",-964424291)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(s * (2)),(0)),new cljs.core.Keyword(null,"ewnfb","ewnfb",92377605)], null)], null));
});
(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,tx){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh(___$1,thi.ng.geom.gmesh.add_face_STAR_,tx);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.meshface.xf_face_verts(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,faces){
var ___$1 = this;
return thi.ng.geom.utils.into_mesh(___$1,thi.ng.geom.gmesh.add_face_STAR_,faces);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh(___$1,thi.ng.geom.gmesh.add_face_STAR_,(function (p1__29427_SHARP_){
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__29427_SHARP_,s);
}));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var c = thi.ng.geom.core.centroid(___$1);
return thi.ng.geom.utils.transform_mesh(___$1,thi.ng.geom.gmesh.add_face_STAR_,(function (p1__29428_SHARP_){
return thi.ng.math.core.madd(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p1__29428_SHARP_,c),s,c);
}));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.map_mesh((function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.rseq(f))], null);
}),___$1);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.into(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"mesh","mesh",456320595)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$connected_components$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.geom.gmesh.vertex_neighbors_STAR_(___$1,v);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.geom.gmesh.vertex_valence_STAR_(___$1,v);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$remove_vertex$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.geom.gmesh.remove_vertex_STAR_(___$1,v);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$replace_vertex$arity$3 = (function (_,v,v2){
var ___$1 = this;
return thi.ng.geom.gmesh.replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$3(___$1,v,v2);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IGraph$merge_vertices$arity$3 = (function (_,a,b){
var ___$1 = this;
return thi.ng.geom.gmesh.merge_vertices_STAR_(___$1,a,b);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var ___$1 = this;
if(cljs.core.truth_(opts)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29419_SHARP_){
return thi.ng.geom.core.raw(p1__29419_SHARP_,___$1);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
}
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,face){
var ___$1 = this;
return thi.ng.geom.gmesh.add_face_STAR_(___$1,face);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.geom.gmesh.vertex_faces_STAR_(___$1,v);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IFaceAccess$remove_face$arity$2 = (function (p__29448,f){
var map__29449 = p__29448;
var map__29449__$1 = (((((!((map__29449 == null))))?(((((map__29449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29449):map__29449);
var _ = map__29449__$1;
var vertices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29449__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29449__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var faces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29449__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var fnormals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29449__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var vnormals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29449__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var map__29451 = this;
var map__29451__$1 = (((((!((map__29451 == null))))?(((((map__29451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29451):map__29451);
var ___$1 = map__29451__$1;
var vertices__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29451__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var edges__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29451__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var faces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29451__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var fnormals__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29451__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var vnormals__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29451__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(faces__$1,f))){
var fv = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(f,___$1);
var verts = vertices__$1;
var vnorms = vnormals__$1;
var edges__$2 = edges__$1;
var fedges = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fv,cljs.core.first(fv)));
while(true){
if(cljs.core.truth_(fedges)){
var vec__29471 = cljs.core.first(fedges);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29471,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29471,(1),null);
var e = cljs.core.PersistentHashSet.createAsIfByAssoc([a,b]);
var efaces = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(edges__$2,e),f);
var edges__$3 = ((cljs.core.seq(efaces))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edges__$2,e,efaces):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(edges__$2,e));
var ve = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (verts,vnorms,edges__$2,fedges,vec__29471,a,b,e,efaces,edges__$3,fv,map__29451,map__29451__$1,___$1,vertices__$1,edges__$1,faces__$1,fnormals__$1,vnormals__$1,map__29449,map__29449__$1,_,vertices,edges,faces,fnormals,vnormals){
return (function (p1__29421_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29421_SHARP_,new cljs.core.Keyword(null,"f","f",-1597136552)),f);
});})(verts,vnorms,edges__$2,fedges,vec__29471,a,b,e,efaces,edges__$3,fv,map__29451,map__29451__$1,___$1,vertices__$1,edges__$1,faces__$1,fnormals__$1,vnormals__$1,map__29449,map__29449__$1,_,vertices,edges,faces,fnormals,vnormals))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(verts,a));
if(cljs.core.seq(ve)){
var G__29618 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(verts,a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ve));
var G__29619 = vnorms;
var G__29620 = edges__$3;
var G__29621 = cljs.core.next(fedges);
verts = G__29618;
vnorms = G__29619;
edges__$2 = G__29620;
fedges = G__29621;
continue;
} else {
var G__29622 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(verts,a);
var G__29623 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(vnorms,a);
var G__29624 = edges__$3;
var G__29625 = cljs.core.next(fedges);
verts = G__29622;
vnorms = G__29623;
edges__$2 = G__29624;
fedges = G__29625;
continue;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731),verts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),vnorms,new cljs.core.Keyword(null,"edges","edges",-694791395),edges__$2,new cljs.core.Keyword(null,"faces","faces",-73909544),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(faces__$1,f),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fnormals__$1,f)], 0));
}
break;
}
} else {
return ___$1;
}
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh(___$1,thi.ng.geom.gmesh.add_face_STAR_,(function (p1__29429_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__29429_SHARP_,t);
}));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$face_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
} else {
if(cljs.core.truth_(force_QMARK_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.compute_face_normals(___$1),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
} else {
return null;
}
}
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$face_normal$arity$2 = (function (_,f){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),f);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
} else {
if(cljs.core.truth_(force_QMARK_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.compute_vertex_normals(___$1),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
} else {
return null;
}
}
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2 = (function (_,v){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284)),v);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1 = (function (_){
var ___$1 = this;
var norms = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var fnorms = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var faces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
while(true){
if(cljs.core.truth_(faces)){
var f = cljs.core.first(faces);
var vec__29489 = thi.ng.dstruct.core.index_BANG_(norms,thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(f.vertices));
var norms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29489,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29489,(1),null);
var G__29648 = norms__$1;
var G__29649 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(fnorms,f,n);
var G__29650 = cljs.core.next(faces);
norms = G__29648;
fnorms = G__29649;
faces = G__29650;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(___$1,new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.persistent_BANG_(norms),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),cljs.core.persistent_BANG_(fnorms)], 0));
}
break;
}
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1 = (function (_){
var ___$1 = this;
var this$ = ((cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563))))?___$1:thi.ng.geom.core.compute_face_normals(___$1));
var map__29495 = this$;
var map__29495__$1 = (((((!((map__29495 == null))))?(((((map__29495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29495):map__29495);
var vertices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29495__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29495__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var fnormals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29495__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var ntx = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29426_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnormals,p1__29426_SHARP_);
}));
var norms = cljs.core.transient$(normals);
var vnorms = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var verts = cljs.core.keys(vertices);
while(true){
if(cljs.core.truth_(verts)){
var v = cljs.core.first(verts);
var vec__29505 = thi.ng.dstruct.core.index_BANG_(norms,thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(ntx,thi.ng.math.core._PLUS_,thi.ng.geom.vector.V3,thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"f","f",-1597136552),vertices,v))));
var norms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29505,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29505,(1),null);
var G__29655 = norms__$1;
var G__29656 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(vnorms,v,n);
var G__29657 = cljs.core.next(verts);
norms = G__29655;
vnorms = G__29656;
verts = G__29657;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.persistent_BANG_(norms),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),cljs.core.persistent_BANG_(vnorms)], 0));
}
break;
}
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2(___$1,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.core.translate(___$1,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(o,thi.ng.geom.core.centroid(___$1)));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.gmesh.gmesh();
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"edges","edges",-694791395)));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.meshface.xf_face_verts(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.utils.map_mesh((function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.utils.tessellate_face(thi.ng.geom.utils.tessellate_with_first);
}
})(),___$1);
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
}));

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
}));

//# sourceMappingURL=thi.ng.geom.gmesh.js.map
