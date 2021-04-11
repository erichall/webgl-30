goog.provide('thi.ng.geom.utils.intersect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.math.core');
thi.ng.geom.utils.intersect.sq = (function thi$ng$geom$utils$intersect$sq(x){
return (x * x);
});
thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_circle_circle_QMARK_(var_args){
var G__28872 = arguments.length;
switch (G__28872) {
case 2:
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__28874,p__28875){
var map__28877 = p__28874;
var map__28877__$1 = (((((!((map__28877 == null))))?(((((map__28877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28877):map__28877);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28877__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28877__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__28881 = p__28875;
var map__28881__$1 = (((((!((map__28881 == null))))?(((((map__28881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28881):map__28881);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28881__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28881__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4(p,r1,q,r2);
}));

(thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,r1,q,r2){
var delta = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q,p);
var d = thi.ng.math.core.mag(delta);
if((((d <= (r1 + r2))) && ((d >= (function (){var G__28893 = (r1 - r2);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__28893) : thi.ng.math.core.abs_STAR_.call(null,G__28893));
})())))){
var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));
var invd = (1.0 / d);
var p__$1 = thi.ng.math.core.madd(delta,(a * invd),p);
var h = (function (){var G__28896 = ((r1 * r1) - (a * a));
return Math.sqrt(G__28896);
})();
var perp = thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1(delta),(h * invd));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,perp),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p__$1,perp)], null);
} else {
return null;
}
}));

(thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_rect_rect_QMARK_(var_args){
var G__28908 = arguments.length;
switch (G__28908) {
case 2:
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__28910,p__28911){
var map__28913 = p__28910;
var map__28913__$1 = (((((!((map__28913 == null))))?(((((map__28913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28913):map__28913);
var vec__28914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28913__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(1),null);
var vec__28917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28913__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(1),null);
var map__28920 = p__28911;
var map__28920__$1 = (((((!((map__28920 == null))))?(((((map__28920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28920):map__28920);
var vec__28921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28920__$1,new cljs.core.Keyword(null,"p","p",151049309));
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(1),null);
var vec__28924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28920__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28924,(0),null);
var qh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28924,(1),null);
return (!((((px > (qx + qw))) || ((qx > (px + w))) || ((py > (qy + qh))) || ((qy > (py + h))))));
}));

(thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__28929,p__28930,p__28931,p__28932){
var vec__28933 = p__28929;
var px1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(0),null);
var py1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(1),null);
var vec__28936 = p__28930;
var qx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(0),null);
var qy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(1),null);
var vec__28939 = p__28931;
var px2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28939,(0),null);
var py2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28939,(1),null);
var vec__28942 = p__28932;
var qx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28942,(0),null);
var qy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28942,(1),null);
return (!((((px1 > qx2)) || ((px2 > qx1)) || ((py1 > qy2)) || ((py2 > qy1)))));
}));

(thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_rect_circle_QMARK_(var_args){
var G__28947 = arguments.length;
switch (G__28947) {
case 2:
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__28950,p__28951){
var map__28952 = p__28950;
var map__28952__$1 = (((((!((map__28952 == null))))?(((((map__28952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28952):map__28952);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28952__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28952__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__28953 = p__28951;
var map__28953__$1 = (((((!((map__28953 == null))))?(((((map__28953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28953):map__28953);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28953__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28953__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4(p,thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p,sz),s,r);
}));

(thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__28957,p__28958,p__28959,r){
var vec__28960 = p__28957;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(1),null);
var vec__28963 = p__28958;
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28963,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28963,(1),null);
var vec__28966 = p__28959;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(1),null);
var ds = (((cx < px))?thi.ng.geom.utils.intersect.sq((cx - px)):(((cx > qx))?thi.ng.geom.utils.intersect.sq((cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.utils.intersect.sq((cy - py)):(((cy > qy))?thi.ng.geom.utils.intersect.sq((cy - qy)):0.0)));
return (ds__$1 <= (r * r));
}));

(thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_aabb_QMARK_(var_args){
var G__28970 = arguments.length;
switch (G__28970) {
case 2:
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__28972,p__28973){
var map__28974 = p__28972;
var map__28974__$1 = (((((!((map__28974 == null))))?(((((map__28974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28974):map__28974);
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28974__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28974__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__28975 = p__28973;
var map__28975__$1 = (((((!((map__28975 == null))))?(((((map__28975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28975):map__28975);
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28975__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28975__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4(pa,pb,thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa,sa),thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,sb));
}));

(thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pa,pb,qa,qb){
if(((((pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1((0)) : pa.call(null,(0))) <= (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1((0)) : qb.call(null,(0))))) && (((pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1((0)) : pb.call(null,(0))) <= (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1((0)) : qa.call(null,(0))))))){
if(((((pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1((1)) : pa.call(null,(1))) <= (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1((1)) : qb.call(null,(1))))) && (((pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1((1)) : pb.call(null,(1))) <= (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1((1)) : qa.call(null,(1))))))){
return ((((pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1((2)) : pa.call(null,(2))) <= (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1((2)) : qb.call(null,(2))))) && (((pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1((2)) : pb.call(null,(2))) <= (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1((2)) : qa.call(null,(2))))));
} else {
return null;
}
} else {
return null;
}
}));

(thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_sphere_QMARK_(var_args){
var G__28980 = arguments.length;
switch (G__28980) {
case 2:
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__28985,p__28986){
var map__28987 = p__28985;
var map__28987__$1 = (((((!((map__28987 == null))))?(((((map__28987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28987):map__28987);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28987__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28987__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__28988 = p__28986;
var map__28988__$1 = (((((!((map__28988 == null))))?(((((map__28988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28988):map__28988);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28988__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28988__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(p,thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p,sz),s,r);
}));

(thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__28992,p__28993,p__28994,r){
var vec__28995 = p__28992;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28995,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28995,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28995,(2),null);
var vec__28998 = p__28993;
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28998,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28998,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28998,(2),null);
var vec__29001 = p__28994;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29001,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29001,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29001,(2),null);
var ds = (((cx < px))?thi.ng.geom.utils.intersect.sq((cx - px)):(((cx > qx))?thi.ng.geom.utils.intersect.sq((cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.utils.intersect.sq((cy - py)):(((cy > qy))?thi.ng.geom.utils.intersect.sq((cy - qy)):0.0)));
var ds__$2 = (ds__$1 + (((cz < pz))?thi.ng.geom.utils.intersect.sq((cz - pz)):(((cz > qz))?thi.ng.geom.utils.intersect.sq((cz - qz)):0.0)));
return (ds__$2 <= (r * r));
}));

(thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * Takes 2 vectors defining an AABB (min-p & size) and a seq of plane
 *   parameters (each element [normal w]). The plane normals must be
 *   pointing *inwards*. Returns :inside, :intersect or :outside
 */
thi.ng.geom.utils.intersect.intersect_aabb_frustum_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_frustum_QMARK_(p__29004,size,planes){
var vec__29005 = p__29004;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29005,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29005,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29005,(2),null);
var p = vec__29005;
var vec__29008 = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p,size);
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29008,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29008,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29008,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,p__29012){
var vec__29013 = p__29012;
var vec__29016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29013,(0),null);
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29016,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29016,(1),null);
var nz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29016,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29013,(1),null);
var vx = (((nx > (0)))?px:qx);
var vy = (((ny > (0)))?py:qy);
var vz = (((nz > (0)))?pz:qz);
if((((((nx * vx) + (ny * vy)) + (nz * vz)) + w) > (0))){
return cljs.core.reduced(new cljs.core.Keyword(null,"outside","outside",-13164995));
} else {
var vx__$1 = (((nx > (0)))?qx:px);
var vy__$1 = (((ny > (0)))?qy:py);
var vz__$1 = (((nz > (0)))?qz:pz);
if((((((nx * vx__$1) + (ny * vy__$1)) + (nz * vz__$1)) + w) > (0))){
return new cljs.core.Keyword(null,"intersect","intersect",-2039792392);
} else {
return res;
}
}
}),new cljs.core.Keyword(null,"inside","inside",1972503011),planes);
});
thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_sphere_sphere_QMARK_(var_args){
var G__29021 = arguments.length;
switch (G__29021) {
case 2:
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__29024,p__29025){
var map__29027 = p__29024;
var map__29027__$1 = (((((!((map__29027 == null))))?(((((map__29027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29027):map__29027);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29027__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29027__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__29028 = p__29025;
var map__29028__$1 = (((((!((map__29028 == null))))?(((((map__29028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29028):map__29028);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29028__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29028__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(p1,r1,p2,r2);
}));

(thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p1,r1,p2,r2){
return (thi.ng.geom.core.dist_squared(p1,p2) <= ((r1 + r2) * (r1 + r2)));
}));

(thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_sphere_QMARK_(var_args){
var G__29034 = arguments.length;
switch (G__29034) {
case 2:
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__29035,p__29036){
var map__29038 = p__29035;
var map__29038__$1 = (((((!((map__29038 == null))))?(((((map__29038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29038):map__29038);
var rp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29038__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29038__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var map__29039 = p__29036;
var map__29039__$1 = (((((!((map__29039 == null))))?(((((map__29039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29039):map__29039);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29039__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29039__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(rp,dir,p,r);
}));

(thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (rp,dir,p,r){
var q = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p,rp);
var ds = thi.ng.math.core.mag_squared(q);
var v = (- thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(q,dir));
var d = ((r * r) - (ds - (v * v)));
if((d >= 0.0)){
var d__$1 = Math.sqrt(d);
var a = (v + d__$1);
var b = (v - d__$1);
if((!((((a < (0))) && ((b < (0))))))){
if((((a > (0))) && ((b > (0))))){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
if((b > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
return null;
}
}));

(thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_triangle3_QMARK_(p,d,a,b,c){
var u = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a);
var v = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a);
var n = thi.ng.math.core.cross(u,v);
if(cljs.core.truth_(thi.ng.geom.vector.V3.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2(null,n))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"degenerate","degenerate",186148125)], null);
} else {
var w0 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p,a);
var a_SINGLEQUOTE_ = (- thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,w0));
var b_SINGLEQUOTE_ = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,d);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,b_SINGLEQUOTE_))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,a_SINGLEQUOTE_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"same-plane","same-plane",-2008485673)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
}
} else {
var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);
if((r < 0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
} else {
var i = thi.ng.math.core.madd(d,r,p);
var vec__29042 = thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,i,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29042,(2),null);
if(cljs.core.truth_((((u__$1 >= 0.0))?(((w >= 0.0))?thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,v__$1):false):false))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
}
}
});
thi.ng.geom.utils.intersect.triaabb_axis_test = (function thi$ng$geom$utils$intersect$triaabb_axis_test(pa1,pb1,pa2,pb2,a,b,fa,fb,sa,sb){
var q = ((a * pa1) + (b * pb1));
var r = ((a * pa2) + (b * pb2));
var vec__29045 = (((q < r))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29045,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29045,(1),null);
var rad = ((fa * sa) + (fb * sb));
if((min <= rad)){
return (max >= (- rad));
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e0 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e0(p__29051,p__29052,p__29053,p__29054,p__29055){
var vec__29056 = p__29051;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056,(2),null);
var a = vec__29056;
var vec__29059 = p__29052;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(2),null);
var b = vec__29059;
var vec__29062 = p__29053;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(2),null);
var vec__29065 = p__29054;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29065,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29065,(1),null);
var ez = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29065,(2),null);
var e = vec__29065;
var vec__29068 = p__29055;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(2),null);
var vec__29071 = thi.ng.math.core.abs(e);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29071,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29071,(1),null);
var fz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29071,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ay,az,cy,cz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test(bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e1 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e1(p__29074,p__29075,p__29076,p__29077,p__29078){
var vec__29079 = p__29074;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29079,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29079,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29079,(2),null);
var vec__29082 = p__29075;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(2),null);
var b = vec__29082;
var vec__29085 = p__29076;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29085,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29085,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29085,(2),null);
var c = vec__29085;
var vec__29088 = p__29077;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(1),null);
var ez = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(2),null);
var e = vec__29088;
var vec__29091 = p__29078;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(2),null);
var vec__29094 = thi.ng.math.core.abs(e);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(1),null);
var fz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ay,az,cy,cz,ez,ey,fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test(ax,ay,bx,by,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e2 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e2(p__29101,p__29102,p__29103,p__29104,p__29105){
var vec__29106 = p__29101;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29106,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29106,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29106,(2),null);
var a = vec__29106;
var vec__29109 = p__29102;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29109,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29109,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29109,(2),null);
var vec__29112 = p__29103;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29112,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29112,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29112,(2),null);
var c = vec__29112;
var vec__29115 = p__29104;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29115,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29115,(1),null);
var ez = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29115,(2),null);
var e = vec__29115;
var vec__29118 = p__29105;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29118,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29118,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29118,(2),null);
var vec__29121 = thi.ng.math.core.abs(e);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29121,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29121,(1),null);
var fz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29121,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ay,az,by,bz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ax,az,bx,bz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test(bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_minmax = (function thi$ng$geom$utils$intersect$triaabb_edge_minmax(a,b,c,s){
if(((function (){var x__4276__auto__ = (function (){var x__4276__auto__ = a;
var y__4277__auto__ = b;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = c;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})() < s)){
return ((function (){var x__4273__auto__ = (function (){var x__4273__auto__ = a;
var y__4274__auto__ = b;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var y__4274__auto__ = c;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})() >= (- s));
} else {
return null;
}
});
thi.ng.geom.utils.intersect.intersect_triangle3_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_triangle3_aabb_QMARK_(a,b,c,p,s){
var vec__29131 = thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(s,0.5);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29131,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29131,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29131,(2),null);
var s__$1 = vec__29131;
var p__$1 = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p,s__$1);
var vec__29134 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(a,p__$1);
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29134,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29134,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29134,(2),null);
var a__$1 = vec__29134;
var vec__29137 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,p__$1);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29137,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29137,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29137,(2),null);
var b__$1 = vec__29137;
var vec__29140 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,p__$1);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29140,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29140,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29140,(2),null);
var c__$1 = vec__29140;
var e0 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b__$1,a__$1);
var e1 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c__$1,b__$1);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e0(a__$1,b__$1,c__$1,e0,s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e1(a__$1,b__$1,c__$1,e1,s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e2(a__$1,b__$1,c__$1,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(a__$1,c__$1),s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax(ax,bx,cx,sx))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax(ay,by,cy,sy))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax(az,bz,cz,sz))){
var G__29143 = a__$1;
var G__29144 = thi.ng.math.core.cross(e0,e1);
var G__29145 = s__$1;
return (thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3(G__29143,G__29144,G__29145) : thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.call(null,G__29143,G__29144,G__29145));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_line2_line2_QMARK_(p__29147,p__29148,p__29149,p__29150){
var vec__29151 = p__29147;
var px1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29151,(0),null);
var py1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29151,(1),null);
var p = vec__29151;
var vec__29154 = p__29148;
var qx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29154,(0),null);
var qy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29154,(1),null);
var q = vec__29154;
var vec__29157 = p__29149;
var px2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(0),null);
var py2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(1),null);
var lp = vec__29157;
var vec__29160 = p__29150;
var qx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29160,(0),null);
var qy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29160,(1),null);
var lq = vec__29160;
var dx1 = (qx1 - px1);
var dy1 = (qy1 - py1);
var dx2 = (qx2 - px2);
var dy2 = (qy2 - py2);
var dx12 = (px1 - px2);
var dy12 = (py1 - py2);
var denom = ((dy2 * dx1) - (dx2 * dy1));
var na = ((dx2 * dy12) - (dy2 * dx12));
var nb = ((dx1 * dy12) - (dy1 * dx12));
if((denom === (0))){
if((((na === (0))) && ((nb === (0))))){
var ip = thi.ng.geom.utils.closest_point_on_segment(lp,p,q);
var iq = thi.ng.geom.utils.closest_point_on_segment(lq,p,q);
if(cljs.core.truth_((function (){var or__4185__auto__ = thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(ip,lp);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(iq,lq);
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident-no-intersect","coincident-no-intersect",1935247952),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
}
} else {
var ua = (na / denom);
var ub = (nb / denom);
var i = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(p,q,ua);
if((((ua >= 0.0)) && ((ua <= 1.0)) && ((ub >= 0.0)) && ((ub <= 1.0)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
}
});
thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_line2_edges_QMARK_(rp,rq,edges){
return cljs.core.first(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__29168){
var vec__29169 = p__29168;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(1),null);
return thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_(rp,rq,p,q);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__29167_SHARP_){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29167_SHARP_,new cljs.core.Keyword(null,"p","p",151049309)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intersect","intersect",-2039792392),null,new cljs.core.Keyword(null,"coincident","coincident",-473799301),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29167_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348)));
} else {
return null;
}
}))),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (closest,isec){
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(isec,new cljs.core.Keyword(null,"p","p",151049309));
var d = thi.ng.geom.core.dist_squared(rp,p);
if((d < (closest.cljs$core$IFn$_invoke$arity$1 ? closest.cljs$core$IFn$_invoke$arity$1((1)) : closest.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
} else {
return closest;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),edges));
});
thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray2_edges_QMARK_(rp,rd,edges){
return thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_(rp,thi.ng.math.core.madd(rd,1.0E29,rp),edges);
});
thi.ng.geom.utils.intersect.intersect_plane_plane_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_plane_QMARK_(an,aw,bn,bw){
if(cljs.core.truth_((function (){var or__4185__auto__ = thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(aw,bw,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(an,bn,thi.ng.math.core._STAR_eps_STAR_);
}
})())){
return null;
} else {
var od = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(an,bn);
var det = ((1) / ((od * od) + (-1)));
var u = (((bw * od) + aw) * det);
var v = (((aw * od) + bw) * det);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),thi.ng.math.core.madd(an,u,thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(bn,v)),new cljs.core.Keyword(null,"dir","dir",1734754661),thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(an,bn)], null);
}
});
thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_plane_QMARK_(rp,dir,n,w){
var dp = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,dir);
var dn = (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,rp) + w);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,dp,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((dn === (0)))?new cljs.core.Keyword(null,"on-plane","on-plane",-1177899984):new cljs.core.Keyword(null,"parallel","parallel",-1863607128))], null);
} else {
var du = (- (dn / dp));
var i = thi.ng.math.core.madd(dir,du,rp);
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,du))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
});
/**
 * Takes a point & normal defining a plane and 2 vectors defining an
 *   AABB (min-p & size). Returns true if plane intersects box.
 */
thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_aabb_QMARK_(var_args){
var G__29174 = arguments.length;
switch (G__29174) {
case 4:
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,n,q,s){
var s2 = thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(s,0.5);
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p,thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(q,s2)),n,s2);
}));

(thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (p__29175,p__29176,p__29177){
var vec__29178 = p__29175;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178,(2),null);
var vec__29181 = p__29176;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29181,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29181,(1),null);
var nz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29181,(2),null);
var n = vec__29181;
var vec__29184 = p__29177;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29184,(2),null);
var vec__29187 = (((nx > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sx) - px),(sx - px)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - px),((- sx) - px)], null));
var vx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29187,(0),null);
var vx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29187,(1),null);
var vec__29190 = (((ny > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sy) - py),(sy - py)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sy - py),((- sy) - py)], null));
var vy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(0),null);
var vy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29190,(1),null);
var vec__29193 = (((nz > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sz) - pz),(sz - pz)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sz - pz),((- sz) - pz)], null));
var vz1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29193,(0),null);
var vz2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29193,(1),null);
if(((((nx * vx1) + (ny * vy1)) + (nz * vz1)) <= 0.0)){
return ((((nx * vx2) + (ny * vy2)) + (nz * vz2)) >= 0.0);
} else {
return null;
}
}));

(thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_plane_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_sphere_QMARK_(n,w,p,r){
return ((function (){var G__29197 = (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,p) + w);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__29197) : thi.ng.math.core.abs_STAR_.call(null,G__29197));
})() <= r);
});
/**
 * Computes sum((a-b)*c), where a, b, c are 3D vectors.
 */
thi.ng.geom.utils.intersect.subdot = (function thi$ng$geom$utils$intersect$subdot(a,b,c){
var d = thi.ng.math.core.subm(a,b,c);
return (((d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1((0)) : d.call(null,(0))) + (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1((1)) : d.call(null,(1)))) + (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1((2)) : d.call(null,(2))));
});
/**
 * Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
 *  Returns 2-elem vec of [bitmask affine-coords].
 */
thi.ng.geom.utils.intersect.face_a = (function thi$ng$geom$utils$intersect$face_a(f,deltas){
var aff = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,deltas);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((0)) : aff.call(null,(0))) > (0)))?(1):(0)) | ((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((1)) : aff.call(null,(1))) > (0)))?(2):(0))) | ((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((2)) : aff.call(null,(2))) > (0)))?(4):(0))) | ((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((3)) : aff.call(null,(3))) > (0)))?(8):(0))),aff], null);
});
/**
 * Takes the 4 delta vectors between tetra2/tetra1 and a normal.
 *  Returns true if all dot products are positive.
 */
thi.ng.geom.utils.intersect.face_b1_QMARK_ = (function thi$ng$geom$utils$intersect$face_b1_QMARK_(deltas,n){
return cljs.core.every_QMARK_((function (p1__29204_SHARP_){
return (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p1__29204_SHARP_,n) > (0));
}),deltas);
});
/**
 * Like face-b1?, but optimized for last face of tetrahedron.
 */
thi.ng.geom.utils.intersect.face_b2_QMARK_ = (function thi$ng$geom$utils$intersect$face_b2_QMARK_(verts,refv,n){
return cljs.core.every_QMARK_((function (p1__29205_SHARP_){
return (thi.ng.geom.utils.intersect.subdot(p1__29205_SHARP_,refv,n) > (0));
}),verts);
});
/**
 * Takes 2 bitmasks and edge flags, returns true if there's a
 *  separating plane between the faces shared by that edge.
 */
thi.ng.geom.utils.intersect.edge_a = (function thi$ng$geom$utils$intersect$edge_a(ma,mb,ea,eb){
var xa = (ma & (ma ^ mb));
var xb = (mb & (xa ^ mb));
var edge = (function (a,b,i,j){
var cp = (((ea.cljs$core$IFn$_invoke$arity$1 ? ea.cljs$core$IFn$_invoke$arity$1(i) : ea.call(null,i)) * (eb.cljs$core$IFn$_invoke$arity$1 ? eb.cljs$core$IFn$_invoke$arity$1(j) : eb.call(null,j))) - ((ea.cljs$core$IFn$_invoke$arity$1 ? ea.cljs$core$IFn$_invoke$arity$1(j) : ea.call(null,j)) * (eb.cljs$core$IFn$_invoke$arity$1 ? eb.cljs$core$IFn$_invoke$arity$1(i) : eb.call(null,i))));
return (((((cp > (0))) && (((xa | a) > (0))) && (((xb | b) > (0))))) || ((((cp < (0))) && (((xa | b) > (0))) && (((xb | a) > (0))))));
});
return (!(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((15),(ma | mb))) || (edge((1),(2),(1),(0))) || (edge((1),(4),(2),(0))) || (edge((1),(8),(3),(0))) || (edge((2),(4),(2),(1))) || (edge((2),(8),(3),(1))) || (edge((4),(8),(3),(2))))));
});
/**
 * Lazy edge evaluation. Takes a vector of edges, vector of edge
 *  points and an edge id. Looks up edge for given id and if not yet
 *  present constructs it. Returns 2-elem vector of [edges edge].
 */
thi.ng.geom.utils.intersect.get_edge = (function thi$ng$geom$utils$intersect$get_edge(edges,epoints,id){
var e = (edges.cljs$core$IFn$_invoke$arity$1 ? edges.cljs$core$IFn$_invoke$arity$1(id) : edges.call(null,id));
if(cljs.core.truth_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else {
var ep = (epoints.cljs$core$IFn$_invoke$arity$1 ? epoints.cljs$core$IFn$_invoke$arity$1(id) : epoints.call(null,id));
var e__$1 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2((ep.cljs$core$IFn$_invoke$arity$1 ? ep.cljs$core$IFn$_invoke$arity$1((0)) : ep.call(null,(0))),(ep.cljs$core$IFn$_invoke$arity$1 ? ep.cljs$core$IFn$_invoke$arity$1((1)) : ep.call(null,(1))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edges,id,e__$1),e__$1], null);
}
});
/**
 * Takes the 4 delta vectors between the two tetras, edge definitions
 *  of the 1st tetra, vertices of the 2nd, a reference point of the 1st
 *  and a seq of specs, each encoding a specific check (either calls to
 *  face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
 */
thi.ng.geom.utils.intersect.check_faces_a = (function thi$ng$geom$utils$intersect$check_faces_a(deltas,epoints,verts,p,specs){
var masks = cljs.core.PersistentVector.EMPTY;
var affine = cljs.core.PersistentVector.EMPTY;
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__29235 = cljs.core.first(s);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),f)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f*","f*",-689873734),f)))){
var vec__29238 = thi.ng.geom.utils.intersect.get_edge(edges,epoints,a);
var edges__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29238,(0),null);
var ea = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29238,(1),null);
var vec__29241 = thi.ng.geom.utils.intersect.get_edge(edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29241,(0),null);
var eb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29241,(1),null);
var n = thi.ng.math.core.cross(ea,eb);
var vec__29244 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.utils.intersect.face_a(((function (masks,affine,edges,s,vec__29238,edges__$1,ea,vec__29241,edges__$2,eb,n,vec__29235,f,a,b){
return (function (p1__29217_SHARP_){
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p1__29217_SHARP_,n);
});})(masks,affine,edges,s,vec__29238,edges__$1,ea,vec__29241,edges__$2,eb,n,vec__29235,f,a,b))
,deltas):thi.ng.geom.utils.intersect.face_a(((function (masks,affine,edges,s,vec__29238,edges__$1,ea,vec__29241,edges__$2,eb,n,vec__29235,f,a,b){
return (function (p1__29218_SHARP_){
return thi.ng.geom.utils.intersect.subdot(p1__29218_SHARP_,p,n);
});})(masks,affine,edges,s,vec__29238,edges__$1,ea,vec__29241,edges__$2,eb,n,vec__29235,f,a,b))
,verts));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29244,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29244,(1),null);
if((m < (15))){
var G__29453 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(masks,m);
var G__29454 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(affine,a__$1);
var G__29455 = edges__$2;
var G__29456 = cljs.core.next(s);
masks = G__29453;
affine = G__29454;
edges = G__29455;
s = G__29456;
continue;
} else {
return null;
}
} else {
if((!(thi.ng.geom.utils.intersect.edge_a((masks.cljs$core$IFn$_invoke$arity$1 ? masks.cljs$core$IFn$_invoke$arity$1(a) : masks.call(null,a)),(masks.cljs$core$IFn$_invoke$arity$1 ? masks.cljs$core$IFn$_invoke$arity$1(b) : masks.call(null,b)),(affine.cljs$core$IFn$_invoke$arity$1 ? affine.cljs$core$IFn$_invoke$arity$1(a) : affine.call(null,a)),(affine.cljs$core$IFn$_invoke$arity$1 ? affine.cljs$core$IFn$_invoke$arity$1(b) : affine.call(null,b)))))){
var G__29457 = masks;
var G__29458 = affine;
var G__29459 = edges;
var G__29460 = cljs.core.next(s);
masks = G__29457;
affine = G__29458;
edges = G__29459;
s = G__29460;
continue;
} else {
return null;
}
}
} else {
return masks;
}
break;
}
});
/**
 * Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
 *  Returns true if tetras do intersect.
 */
thi.ng.geom.utils.intersect.check_faces_b = (function thi$ng$geom$utils$intersect$check_faces_b(deltas,epoints,verts,p,specs){
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__29258 = cljs.core.first(s);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29258,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29258,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29258,(2),null);
var vec__29261 = thi.ng.geom.utils.intersect.get_edge(edges,epoints,a);
var edges__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29261,(0),null);
var ea = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29261,(1),null);
var vec__29264 = thi.ng.geom.utils.intersect.get_edge(edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264,(0),null);
var eb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29264,(1),null);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.utils.intersect.face_b1_QMARK_(deltas,thi.ng.math.core.cross(ea,eb)):thi.ng.geom.utils.intersect.face_b2_QMARK_(verts,p,thi.ng.math.core.cross(ea,eb)))))){
var G__29465 = edges__$2;
var G__29466 = cljs.core.next(s);
edges = G__29465;
s = G__29466;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
});
/**
 * Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
 *  true if they intersect. Orientation of points is irrelevant (unlike
 *  in the original algorithm this implementation is based on).
 */
thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_tetrahedra_QMARK_(p__29270,p__29271){
var vec__29273 = p__29270;
var pa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29273,(0),null);
var pb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29273,(1),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29273,(2),null);
var pd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29273,(3),null);
var p = vec__29273;
var vec__29276 = p__29271;
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29276,(0),null);
var qb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29276,(1),null);
var qc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29276,(2),null);
var qd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29276,(3),null);
var q = vec__29276;
var masks = thi.ng.geom.utils.intersect.check_faces_a(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29267_SHARP_){
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p1__29267_SHARP_,pa);
}),q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2),(3)], null)], null));
if(cljs.core.truth_(masks)){
var or__4185__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((15),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_or,masks));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return thi.ng.geom.utils.intersect.check_faces_b(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29268_SHARP_){
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p1__29268_SHARP_,qa);
}),p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null)], null));
}
} else {
return null;
}
});

//# sourceMappingURL=thi.ng.geom.utils.intersect.js.map
