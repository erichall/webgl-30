goog.provide('thi.ng.geom.plane');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.quaternion');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
thi.ng.geom.plane.plane = (function thi$ng$geom$plane$plane(n,w){
return (new thi.ng.geom.types.Plane(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(n)),w,null,null,null));
});
thi.ng.geom.plane.plane_with_point = (function thi$ng$geom$plane$plane_with_point(p,n){
var n__$1 = thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(n));
return (new thi.ng.geom.types.Plane(n__$1,(- thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n__$1,p)),null,null,null));
});
thi.ng.geom.plane.plane_from_points = (function thi$ng$geom$plane$plane_from_points(var_args){
var G__29607 = arguments.length;
switch (G__29607) {
case 1:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1 = (function (p__29608){
var vec__29609 = p__29608;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29609,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29609,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29609,(2),null);
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3(a,b,c);
}));

(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var n = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3(a,b,c);
return (new thi.ng.geom.types.Plane(n,(- thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,a)),null,null,null));
}));

(thi.ng.geom.plane.plane_from_points.cljs$lang$maxFixedArity = 3);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core.transform_vector(m,thi.ng.geom.core.centroid(___$1)),thi.ng.geom.core.transform_vector(m,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025))));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.INF_PLUS_;
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (p__29644,p){
var map__29645 = p__29644;
var map__29645__$1 = (((((!((map__29645 == null))))?(((((map__29645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29645):map__29645);
var _ = map__29645__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29645__$1,new cljs.core.Keyword(null,"n","n",562130025));
var map__29651 = this;
var map__29651__$1 = (((((!((map__29651 == null))))?(((((map__29651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29651):map__29651);
var ___$1 = map__29651__$1;
var n__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29651__$1,new cljs.core.Keyword(null,"n","n",562130025));
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p,thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2(n__$1,(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001)) + thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n__$1,p))));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),p) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001)));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,p){
var ___$1 = this;
var d = thi.ng.geom.core.dist(___$1,p);
return (d * d);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (_,p__29653){
var map__29654 = p__29653;
var map__29654__$1 = (((((!((map__29654 == null))))?(((((map__29654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29654):map__29654);
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),s),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025))),(- cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001))),null,null,null));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.centroid(___$1),thi.ng.math.core.INF_PLUS_,null,null,null));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__29671){
var map__29672 = p__29671;
var map__29672__$1 = (((((!((map__29672 == null))))?(((((map__29672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29672):map__29672);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29672__$1,new cljs.core.Keyword(null,"p","p",151049309));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29672__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29672__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29672__$1,new cljs.core.Keyword(null,"size","size",1098693007),1.0);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29672__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29672__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var w = ((function (){var or__4185__auto__ = width;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return size;
}
})() * 0.5);
var h = ((function (){var or__4185__auto__ = height;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return size;
}
})() * 0.5);
var flip_QMARK_ = thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(-1.0,thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),thi.ng.geom.vector.V3Z));
var p__$1 = thi.ng.geom.core.closest_point(___$1,(function (){var or__4185__auto__ = p;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0();
}
})());
var q = (cljs.core.truth_(flip_QMARK_)?thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1)):thi.ng.geom.quaternion.alignment_quat(thi.ng.geom.vector.V3Z,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025))));
var face = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29629_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,q.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2(null,p1__29629_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((- w),(- h),(0)),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((- w),h,(0)),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(w,h,(0)),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(w,(- h),(0))], null));
var face__$1 = thi.ng.geom.attribs.generate_face_attribs((cljs.core.truth_(flip_QMARK_)?face:cljs.core.rseq(face)),(0),attribs,null);
return thi.ng.geom.core.add_face((function (){var or__4185__auto__ = mesh;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),face__$1);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
var vec__29680 = ((cljs.core.map_QMARK_(l))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.Keyword(null,"points","points",-1486596883)):l);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29680,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29680,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_(p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q,p),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001)));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$3 = (function (_,p,q){
var ___$1 = this;
return thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_(p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q,p),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001)));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__29688 = ((cljs.core.map_QMARK_(ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29688,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_(p,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001)));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_(p,dir,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001)));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Plane)){
return thi.ng.geom.utils.intersect.intersect_plane_plane_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"w","w",354169001)));
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.utils.intersect.intersect_plane_sphere_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"r","r",-471384190)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(s);

}
}
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),t),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2((thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),p) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001))),thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),(0),null,null,null));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(o,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025)),(- cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"w","w",354169001))));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
var s = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.width(___$1),thi.ng.geom.core.height(___$1),thi.ng.geom.core.depth(___$1));
return (new thi.ng.geom.types.AABB(s.thi$ng$math$core$IMathOps$madd$arity$3(null,-0.5,thi.ng.geom.core.centroid(___$1)),s,null,null,null));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.abs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025))),thi.ng.geom.vector.V3X,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.abs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025))),thi.ng.geom.vector.V3Y,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.abs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"n","n",562130025))),thi.ng.geom.vector.V3Z,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
}));

//# sourceMappingURL=thi.ng.geom.plane.js.map
