goog.provide('thi.ng.geom.basicmesh');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.meshface');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.xerror.core');
goog.require('clojure.core.reducers');
thi.ng.geom.basicmesh.add_face_STAR_ = (function thi$ng$geom$basicmesh$add_face_STAR_(mesh,p__29324){
var vec__29325 = p__29324;
var fverts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29325,(0),null);
return (new thi.ng.geom.types.BasicMesh(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mesh,new cljs.core.Keyword(null,"vertices","vertices",2008905731)),fverts),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mesh,new cljs.core.Keyword(null,"faces","faces",-73909544)),(new thi.ng.geom.meshface.MeshFace(fverts,null))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(mesh,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),null,null,null));
});
/**
 * Builds a new 3d mesh data structure and (optionally) populates it with
 *   the given items (a seq of existing meshes and/or faces). Faces are defined
 *   as vectors of their vertices.
 */
thi.ng.geom.basicmesh.basic_mesh = (function thi$ng$geom$basicmesh$basic_mesh(){
return (new thi.ng.geom.types.BasicMesh(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
});
(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face_STAR_,m);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.meshface.xf_face_verts(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,faces){
var ___$1 = this;
return thi.ng.geom.utils.into_mesh(___$1,thi.ng.geom.basicmesh.add_face_STAR_,faces);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face_STAR_,(function (p1__29356_SHARP_){
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__29356_SHARP_,s);
}));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var c = thi.ng.geom.core.centroid(___$1);
return thi.ng.geom.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face_STAR_,(function (p1__29358_SHARP_){
return thi.ng.math.core.madd(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p1__29358_SHARP_,c),s,c);
}));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.map_mesh((function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.rseq(f))], null);
}),___$1);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.into(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"mesh","mesh",456320595)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var ___$1 = this;
if(cljs.core.truth_(opts)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29349_SHARP_){
return thi.ng.geom.core.raw(p1__29349_SHARP_,___$1);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
}
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,face){
var ___$1 = this;
return thi.ng.geom.basicmesh.add_face_STAR_(___$1,face);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2 = (function (_,v){
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29350_SHARP_){
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(p1__29350_SHARP_,___$1);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__29352_SHARP_){
return (thi.ng.dstruct.core.index_of(p1__29352_SHARP_,v) > (0));
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544))));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IFaceAccess$remove_face$arity$2 = (function (_,f){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face_STAR_,(function (p1__29359_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__29359_SHARP_,t);
}));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$face_normals$arity$2 = (function (_,force_QMARK_){
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

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$face_normal$arity$2 = (function (_,f){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),f);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.truth_(force_QMARK_)){
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1 = (function (_){
var ___$1 = this;
var fnorms = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var faces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
while(true){
if(cljs.core.truth_(faces)){
var f = cljs.core.first(faces);
var G__29442 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(fnorms,f,thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(f,___$1)));
var G__29443 = cljs.core.next(faces);
fnorms = G__29442;
faces = G__29443;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),cljs.core.persistent_BANG_(fnorms));
}
break;
}
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2(___$1,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.core.translate(___$1,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(o,thi.ng.geom.core.centroid(___$1)));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.basicmesh.basic_mesh();
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29346_SHARP_){
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(p1__29346_SHARP_,___$1);
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__29347_SHARP_){
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29347_SHARP_,cljs.core.first(p1__29347_SHARP_)));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.set)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.meshface.xf_face_verts(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"faces","faces",-73909544)));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.utils.map_mesh((function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.utils.tessellate_face(thi.ng.geom.utils.tessellate_with_first);
}
})(),___$1);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731))));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731)));
}));

//# sourceMappingURL=thi.ng.geom.basicmesh.js.map
