goog.provide('thi.ng.geom.tetrahedron');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.triangle');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
/**
 * Takes a seq of 4 3D points, returns them as vector in the order so
 *   that the last point is on the opposite side of the plane defined by
 *   the first three points.
 */
thi.ng.geom.tetrahedron.orient_tetra = (function thi$ng$geom$tetrahedron$orient_tetra(p__29845){
var vec__29846 = p__29845;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29846,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29846,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29846,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29846,(3),null);
var t = vec__29846;
var dp = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(d,a)),thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3(a,b,c));
if((dp < (0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,b,d], null);
}
});
thi.ng.geom.tetrahedron.tetrahedron = (function thi$ng$geom$tetrahedron$tetrahedron(var_args){
var G__29851 = arguments.length;
switch (G__29851) {
case 1:
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.tetrahedron.orient_tetra(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,points)),null,null,null));
}));

(thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null));
}));

(thi.ng.geom.tetrahedron.tetrahedron.cljs$lang$maxFixedArity = 4);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29867_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__29867_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__29853_SHARP_){
var G__29869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.tri_area3,p1__29853_SHARP_);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__29869) : thi.ng.math.core.abs_STAR_.call(null,G__29869));
})),cljs.core._PLUS_,thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
var cp = thi.ng.geom.utils.centroid(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29858_SHARP_){
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29858_SHARP_,cp));
}),thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2(___$1,thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.from_barycentric(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((4)));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(___$1,theta);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29865_SHARP_){
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__29865_SHARP_,s);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (p__29877){
var map__29878 = p__29877;
var map__29878__$1 = (((((!((map__29878 == null))))?(((((map__29878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29878):map__29878);
var vec__29879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29878__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29879,(3),null);
var map__29884 = this;
var map__29884__$1 = (((((!((map__29884 == null))))?(((((map__29884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29884):map__29884);
var vec__29888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29884__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29888,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29888,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29888,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29888,(3),null);
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1,c__$1,d__$1], null),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
var vec__29894 = thi.ng.geom.tetrahedron.orient_tetra(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29894,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29894,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29894,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29894,(3),null);
return thi.ng.geom.core.into((function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Tetrahedron)){
return thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_(thi.ng.geom.tetrahedron.orient_tetra(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.tetrahedron.orient_tetra(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(s)));
} else {
if(((cljs.core.sequential_QMARK_(s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(s))))){
return thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.tetrahedron.orient_tetra(s));
} else {
return thi.ng.xerror.core.type_error_BANG_("Tetrahedron",s);

}
}
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,p__29897){
var map__29898 = p__29897;
var map__29898__$1 = (((((!((map__29898 == null))))?(((((map__29898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29898):map__29898);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29898__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29898__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__29901,v){
var map__29902 = p__29901;
var map__29902__$1 = (((((!((map__29902 == null))))?(((((map__29902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29902):map__29902);
var vec__29903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29902__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29903,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29903,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29903,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29903,(3),null);
var map__29908 = this;
var map__29908__$1 = (((((!((map__29908 == null))))?(((((map__29908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29908):map__29908);
var vec__29909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29908__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29909,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29909,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29909,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29909,(3),null);
var pred__29913 = cljs.core._EQ_;
var expr__29914 = v;
if(cljs.core.truth_((pred__29913.cljs$core$IFn$_invoke$arity$2 ? pred__29913.cljs$core$IFn$_invoke$arity$2(a__$1,expr__29914) : pred__29913.call(null,a__$1,expr__29914)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1,d__$1], null);
} else {
if(cljs.core.truth_((pred__29913.cljs$core$IFn$_invoke$arity$2 ? pred__29913.cljs$core$IFn$_invoke$arity$2(b__$1,expr__29914) : pred__29913.call(null,b__$1,expr__29914)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1,d__$1], null);
} else {
if(cljs.core.truth_((pred__29913.cljs$core$IFn$_invoke$arity$2 ? pred__29913.cljs$core$IFn$_invoke$arity$2(c__$1,expr__29914) : pred__29913.call(null,c__$1,expr__29914)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1,d__$1], null);
} else {
if(cljs.core.truth_((pred__29913.cljs$core$IFn$_invoke$arity$2 ? pred__29913.cljs$core$IFn$_invoke$arity$2(d__$1,expr__29914) : pred__29913.call(null,d__$1,expr__29914)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null);
} else {
return null;
}
}
}
}
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_((function (){var fexpr__29916 = cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
return (fexpr__29916.cljs$core$IFn$_invoke$arity$1 ? fexpr__29916.cljs$core$IFn$_invoke$arity$1(v) : fexpr__29916.call(null,v));
})())){
return (3);
} else {
return (0);
}
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (t,_){
var t__$1 = this;
return thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(t__$1);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (p__29917){
var map__29918 = p__29917;
var map__29918__$1 = (((((!((map__29918 == null))))?(((((map__29918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29918):map__29918);
var vec__29919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29918__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29919,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29919,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29919,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29919,(3),null);
var map__29926 = this;
var map__29926__$1 = (((((!((map__29926 == null))))?(((((map__29926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29926):map__29926);
var vec__29927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29926__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,d__$1,b__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,d__$1,c__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,d__$1,a__$1], null)], null)], null);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29866_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__29866_SHARP_,t);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISlice$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.V3,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(o,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29860_SHARP_){
return thi.ng.geom.core.rotate_x(p1__29860_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29861_SHARP_){
return thi.ng.geom.core.rotate_y(p1__29861_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29862_SHARP_){
return thi.ng.geom.core.rotate_z(p1__29862_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29863_SHARP_){
return thi.ng.geom.core.rotate_around_axis(p1__29863_SHARP_,axis,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__29934){
var map__29935 = p__29934;
var map__29935__$1 = (((((!((map__29935 == null))))?(((((map__29935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29935):map__29935);
var vec__29936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29935__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29936,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29936,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29936,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29936,(3),null);
var map__29940 = this;
var map__29940__$1 = (((((!((map__29940 == null))))?(((((map__29940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29940):map__29940);
var vec__29941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29940__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29941,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29941,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29941,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29941,(3),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,d__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,d__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,d__$1], null)], null);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (p__29950){
var map__29952 = p__29950;
var map__29952__$1 = (((((!((map__29952 == null))))?(((((map__29952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29952):map__29952);
var vec__29953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29952__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29953,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29953,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29953,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29953,(3),null);
var map__29962 = this;
var map__29962__$1 = (((((!((map__29962 == null))))?(((((map__29962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29962):map__29962);
var vec__29963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29962__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29963,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29963,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29963,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29963,(3),null);
var n = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3(a__$1,b__$1,c__$1);
var G__29969 = ((thi.ng.math.core.THIRD * thi.ng.geom.utils.tri_area3(a__$1,b__$1,c__$1)) * (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,d__$1) - thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,a__$1)));
return Math.abs(G__29969);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(___$1);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1));
}));

//# sourceMappingURL=thi.ng.geom.tetrahedron.js.map
