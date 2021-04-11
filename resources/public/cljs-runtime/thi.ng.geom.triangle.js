goog.provide('thi.ng.geom.triangle');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.xerror.core');
thi.ng.geom.triangle.triangle2 = (function thi$ng$geom$triangle$triangle2(var_args){
var G__29433 = arguments.length;
switch (G__29433) {
case 1:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$1 = (function (t){
if(cljs.core.map_QMARK_(t)){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"a","a",-2123407586))),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"b","b",1482224470))),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"c","c",-1763192079)))], null),null,null,null));
} else {
if(cljs.core.sequential_QMARK_(t)){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(cljs.core.first(t)),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(t,(1))),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(t,(2)))], null),null,null,null));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(t);

}
}
}));

(thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return (new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(a),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(b),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(c)], null),null,null,null));
}));

(thi.ng.geom.triangle.triangle2.cljs$lang$maxFixedArity = 3);

thi.ng.geom.triangle.triangle3 = (function thi$ng$geom$triangle$triangle3(var_args){
var G__29444 = arguments.length;
switch (G__29444) {
case 1:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1 = (function (t){
if(cljs.core.map_QMARK_(t)){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"a","a",-2123407586))),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"b","b",1482224470))),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"c","c",-1763192079)))], null),null,null,null));
} else {
if(cljs.core.sequential_QMARK_(t)){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.first(t)),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(t,(1))),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(t,(2)))], null),null,null,null));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(t);

}
}
}));

(thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(a),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(b),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(c)], null),null,null,null));
}));

(thi.ng.geom.triangle.triangle3.cljs$lang$maxFixedArity = 3);

thi.ng.geom.triangle.equilateral2 = (function thi$ng$geom$triangle$equilateral2(var_args){
var G__29446 = arguments.length;
switch (G__29446) {
case 1:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$1 = (function (l){
if(cljs.core.map_QMARK_(l)){
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.Keyword(null,"q","q",689001697)));
} else {
if(cljs.core.sequential_QMARK_(l)){
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2(cljs.core.first(l),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l,(1)));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(l);

}
}
}));

(thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(a);
var b__$1 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(b);
var dir = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1);
var n = thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1(dir);
var c = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2(n,((thi.ng.math.core.mag(dir) * thi.ng.math.core.SQRT3) * 0.5)),thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1));
return thi.ng.geom.triangle.triangle2.cljs$core$IFn$_invoke$arity$3(a__$1,b__$1,c);
}));

(thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$4 = (function (x1,y1,x2,y2){
return thi.ng.geom.triangle.equilateral2.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x1,y1),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x2,y2));
}));

(thi.ng.geom.triangle.equilateral2.cljs$lang$maxFixedArity = 4);

thi.ng.geom.triangle.equilateral3 = (function thi$ng$geom$triangle$equilateral3(a,b,n){
var a__$1 = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(a);
var b__$1 = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(b);
var dir = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b__$1,a__$1);
var n__$1 = thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.cross(dir,n));
var c = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2(n__$1,((thi.ng.math.core.mag(dir) * thi.ng.math.core.SQRT3) * 0.5)),thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1));
return (new thi.ng.geom.types.Triangle3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c], null),null,null,null));
});
thi.ng.geom.triangle.other_point_in_tri = (function thi$ng$geom$triangle$other_point_in_tri(p__29467,a,b){
var vec__29468 = p__29467;
var ta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29468,(0),null);
var tb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29468,(1),null);
var tc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29468,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,ta)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,tb)){
return tc;
} else {
return tb;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,tb)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,ta)){
return tc;
} else {
return ta;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,ta)){
return tb;
} else {
return ta;
}
}
}
});
thi.ng.geom.triangle.altitude = (function thi$ng$geom$triangle$altitude(var_args){
var G__29476 = arguments.length;
switch (G__29476) {
case 2:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2 = (function (p__29478,id){
var vec__29479 = p__29478;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29479,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29479,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29479,(2),null);
var G__29482 = id;
var G__29482__$1 = (((G__29482 instanceof cljs.core.Keyword))?G__29482.fqn:null);
switch (G__29482__$1) {
case "a":
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3(b,c,a);

break;
case "b":
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3(a,c,b);

break;
case "c":
return thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3(a,b,c);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29482__$1)].join('')));

}
}));

(thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,thi.ng.geom.utils.closest_point_coeff(c,a,b)),c], null);
}));

(thi.ng.geom.triangle.altitude.cljs$lang$maxFixedArity = 3);

thi.ng.geom.triangle.norm_altitude = (function thi$ng$geom$triangle$norm_altitude(var_args){
var G__29488 = arguments.length;
switch (G__29488) {
case 2:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$2 = (function (points,id){
var vec__29492 = thi.ng.geom.triangle.altitude.cljs$core$IFn$_invoke$arity$2(points,id);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29492,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29492,(1),null);
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a));
}));

(thi.ng.geom.triangle.norm_altitude.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,thi.ng.geom.utils.closest_point_coeff(c,a,b))));
}));

(thi.ng.geom.triangle.norm_altitude.cljs$lang$maxFixedArity = 3);

thi.ng.geom.triangle.centroid = (function thi$ng$geom$triangle$centroid(var_args){
var G__29498 = arguments.length;
switch (G__29498) {
case 3:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3(a,b,c),thi.ng.math.core.THIRD);
}));

(thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1 = (function (p__29504){
var vec__29508 = p__29504;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29508,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29508,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29508,(2),null);
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3(a,b,c),thi.ng.math.core.THIRD);
}));

(thi.ng.geom.triangle.centroid.cljs$lang$maxFixedArity = 3);

thi.ng.geom.triangle.check_edge = (function thi$ng$geom$triangle$check_edge(splits,classifier,e,p,q,add_p_QMARK_,add_q_QMARK_){
var pc = (classifier.cljs$core$IFn$_invoke$arity$2 ? classifier.cljs$core$IFn$_invoke$arity$2(e,p) : classifier.call(null,e,p));
var qc = (classifier.cljs$core$IFn$_invoke$arity$2 ? classifier.cljs$core$IFn$_invoke$arity$2(e,q) : classifier.call(null,e,q));
var splits__$1 = (cljs.core.truth_(add_p_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(splits,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,pc], null)):splits);
if(((pc * qc) < (0))){
var ip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3(e,p,q),new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.truth_(add_q_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ip,(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,qc], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ip,(0)], null));
}
} else {
if(cljs.core.truth_(add_q_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(splits__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,qc], null));
} else {
return splits__$1;
}
}
});
thi.ng.geom.triangle.slice_with_STAR_ = (function thi$ng$geom$triangle$slice_with_STAR_(var_args){
var G__29520 = arguments.length;
switch (G__29520) {
case 2:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (t,e){
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3(t,e,thi.ng.geom.core.classify_point);
}));

(thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (p__29525,e,classifier){
var vec__29526 = p__29525;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29526,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29526,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29526,(2),null);
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5(a,b,c,e,classifier);
}));

(thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,e,classifier){
var verts = thi.ng.geom.triangle.check_edge(thi.ng.geom.triangle.check_edge(thi.ng.geom.triangle.check_edge(cljs.core.PersistentVector.EMPTY,classifier,e,a,b,true,true),classifier,e,b,c,false,true),classifier,e,c,a,false,false);
var cmap = (function (ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__29533){
var vec__29534 = p__29533;
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29534,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29534,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29534,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1((1)) : a__$1.call(null,(1)))], null),cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1((0)) : a__$1.call(null,(0))),(b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1((0)) : b__$1.call(null,(0))),(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1((0)) : c__$1.call(null,(0)))], null));
}),new cljs.core.PersistentArrayMap(null, 2, [(-1),cljs.core.PersistentVector.EMPTY,(1),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29537){
var vec__29538 = p__29537;
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29538,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29538,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29538,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(verts.cljs$core$IFn$_invoke$arity$1 ? verts.cljs$core$IFn$_invoke$arity$1(a__$1) : verts.call(null,a__$1)),(verts.cljs$core$IFn$_invoke$arity$1 ? verts.cljs$core$IFn$_invoke$arity$1(b__$1) : verts.call(null,b__$1)),(verts.cljs$core$IFn$_invoke$arity$1 ? verts.cljs$core$IFn$_invoke$arity$1(c__$1) : verts.call(null,c__$1))], null);
}),ids));
});
var pred__29541 = cljs.core._EQ_;
var expr__29542 = cljs.core.count(verts);
if(cljs.core.truth_((pred__29541.cljs$core$IFn$_invoke$arity$2 ? pred__29541.cljs$core$IFn$_invoke$arity$2((4),expr__29542) : pred__29541.call(null,(4),expr__29542)))){
var triverts = cljs.core.PersistentHashSet.createAsIfByAssoc([a,c,b]);
var d = (function (){var i = (3);
while(true){
var temp__5733__auto__ = (verts.cljs$core$IFn$_invoke$arity$1 ? verts.cljs$core$IFn$_invoke$arity$1(i) : verts.call(null,i));
if(cljs.core.truth_(temp__5733__auto__)){
var vc = temp__5733__auto__;
if(cljs.core.truth_(((((vc.cljs$core$IFn$_invoke$arity$1 ? vc.cljs$core$IFn$_invoke$arity$1((1)) : vc.call(null,(1))) === (0)))?(function (){var G__29546 = (vc.cljs$core$IFn$_invoke$arity$1 ? vc.cljs$core$IFn$_invoke$arity$1((0)) : vc.call(null,(0)));
return (triverts.cljs$core$IFn$_invoke$arity$1 ? triverts.cljs$core$IFn$_invoke$arity$1(G__29546) : triverts.call(null,G__29546));
})():false))){
return i;
} else {
var G__29892 = (i - (1));
i = G__29892;
continue;
}
} else {
return null;
}
break;
}
})();
return cmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.wrap_range((d + (1)),(4)),thi.ng.math.core.wrap_range((d + (2)),(4)),d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.wrap_range((d - (1)),(4)),d,thi.ng.math.core.wrap_range((d + (2)),(4))], null)], null));
} else {
if(cljs.core.truth_((pred__29541.cljs$core$IFn$_invoke$arity$2 ? pred__29541.cljs$core$IFn$_invoke$arity$2((5),expr__29542) : pred__29541.call(null,(5),expr__29542)))){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)) === (0))){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null)) === (0))){
return cmap(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(1)], null)], null));
} else {
return cmap(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(4)], null)], null));
}
} else {
return cmap(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(2)], null)], null));
}
} else {
return null;
}
}
}));

(thi.ng.geom.triangle.slice_with_STAR_.cljs$lang$maxFixedArity = 5);

thi.ng.geom.triangle.circumcircle_raw = (function thi$ng$geom$triangle$circumcircle_raw(p__29551,p__29552,p__29553){
var vec__29554 = p__29551;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29554,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29554,(1),null);
var a = vec__29554;
var vec__29557 = p__29552;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(1),null);
var b = vec__29557;
var vec__29560 = p__29553;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(1),null);
var c = vec__29560;
var eq_ab_QMARK_ = thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(ay,by,thi.ng.math.core._STAR_eps_STAR_);
var eq_bc_QMARK_ = thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(by,cy,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_((function (){var and__4174__auto__ = eq_ab_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return eq_bc_QMARK_;
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
var o = (cljs.core.truth_(eq_ab_QMARK_)?(function (){var cx__$1 = ((ax + bx) * 0.5);
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cx__$1,(((cx__$1 - ((bx + cx__$1) * 0.5)) * (- ((cx__$1 - bx) / (cy - by)))) + ((by + cy) * 0.5)));
})():(cljs.core.truth_(eq_bc_QMARK_)?(function (){var cx__$1 = ((bx + cx) * 0.5);
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cx__$1,(((cx__$1 - ((ax + bx) * 0.5)) * (- ((bx - ax) / (by - ay)))) + ((ay + by) * 0.5)));
})():(function (){var m1 = (- ((bx - ax) / (by - ay)));
var m2 = (- ((cx - bx) / (cy - by)));
var mx1 = ((ax + bx) * 0.5);
var my1 = ((ay + by) * 0.5);
var cx__$1 = (((((m1 * mx1) - (m2 * ((bx + cx) * 0.5))) + ((by + cy) * 0.5)) + (- my1)) / (m1 - m2));
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cx__$1,(((cx__$1 - mx1) * m1) + my1));
})()
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,o.thi$ng$geom$core$IDistance$dist$arity$2(null,b)], null);
}
});
thi.ng.geom.triangle.circumcircle = (function thi$ng$geom$triangle$circumcircle(var_args){
var G__29572 = arguments.length;
switch (G__29572) {
case 1:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$1 = (function (t){
return thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"a","a",-2123407586)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"b","b",1482224470)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"c","c",-1763192079)));
}));

(thi.ng.geom.triangle.circumcircle.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var vec__29573 = thi.ng.geom.triangle.circumcircle_raw(a,b,c);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29573,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29573,(1),null);
return (new thi.ng.geom.types.Circle2(o,r,null,null,null));
}));

(thi.ng.geom.triangle.circumcircle.cljs$lang$maxFixedArity = 3);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29586_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__29586_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.tri_area2,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first(thi.ng.geom.utils.closest_point_on_segments(p,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29581_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__29581_SHARP_,null,null,null));
}),thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (p__29590,t){
var map__29591 = p__29590;
var map__29591__$1 = (((((!((map__29591 == null))))?(((((map__29591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29591):map__29591);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29591__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__29594 = this;
var map__29594__$1 = (((((!((map__29594 == null))))?(((((map__29594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29594):map__29594);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29594__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2(t,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p__$1,cljs.core.first(p__$1)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__29596){
var map__29597 = p__29596;
var map__29597__$1 = (((((!((map__29597 == null))))?(((((map__29597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29597):map__29597);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29597__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__29599 = this;
var map__29599__$1 = (((((!((map__29599 == null))))?(((((map__29599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29599):map__29599);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29599__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p__$1,cljs.core.first(p__$1)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.from_barycentric(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((3)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (p__29601,udist,include_last_QMARK_){
var map__29602 = p__29601;
var map__29602__$1 = (((((!((map__29602 == null))))?(((((map__29602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29602):map__29602);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29602__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__29604 = this;
var map__29604__$1 = (((((!((map__29604 == null))))?(((((map__29604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29604):map__29604);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29604__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p__$1,cljs.core.first(p__$1)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29583_SHARP_){
return thi.ng.geom.core.rotate(p1__29583_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),opts);
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),opts);
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29584_SHARP_){
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__29584_SHARP_,s);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face((function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),thi.ng.geom.attribs.generate_face_attribs(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),(0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),opts));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,p__29612){
var map__29613 = p__29612;
var map__29613__$1 = (((((!((map__29613 == null))))?(((((map__29613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29613):map__29613);
var vec__29614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29613__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29614,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29614,(1),null);
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4174__auto__ = thi.ng.geom.core.contains_point_QMARK_(___$1,p);
if(cljs.core.truth_(and__4174__auto__)){
return thi.ng.geom.core.contains_point_QMARK_(___$1,q);
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301)], null);
} else {
return thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_(p,q,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
}
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__29626 = ((cljs.core.map_QMARK_(ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29626,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29626,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_(p,dir,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_(p,dir,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__29630,v){
var map__29631 = p__29630;
var map__29631__$1 = (((((!((map__29631 == null))))?(((((map__29631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29631):map__29631);
var vec__29632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29631__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29632,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29632,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29632,(2),null);
var map__29636 = this;
var map__29636__$1 = (((((!((map__29636 == null))))?(((((map__29636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29636):map__29636);
var vec__29637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29636__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29637,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29637,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29637,(2),null);
var pred__29641 = cljs.core._EQ_;
var expr__29642 = v;
if(cljs.core.truth_((pred__29641.cljs$core$IFn$_invoke$arity$2 ? pred__29641.cljs$core$IFn$_invoke$arity$2(a__$1,expr__29642) : pred__29641.call(null,a__$1,expr__29642)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_((pred__29641.cljs$core$IFn$_invoke$arity$2 ? pred__29641.cljs$core$IFn$_invoke$arity$2(b__$1,expr__29642) : pred__29641.call(null,b__$1,expr__29642)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_((pred__29641.cljs$core$IFn$_invoke$arity$2 ? pred__29641.cljs$core$IFn$_invoke$arity$2(c__$1,expr__29642) : pred__29641.call(null,c__$1,expr__29642)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1], null);
} else {
return null;
}
}
}
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_((function (){var fexpr__29647 = cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
return (fexpr__29647.cljs$core$IFn$_invoke$arity$1 ? fexpr__29647.cljs$core$IFn$_invoke$arity$1(v) : fexpr__29647.call(null,v));
})())){
return (2);
} else {
return (0);
}
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29585_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__29585_SHARP_,t);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISlice$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),e,thi.ng.geom.core.classify_point);
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ISlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),e,classifier);
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29577_SHARP_){
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.closest_point_coeff,p,p1__29577_SHARP_),thi.ng.math.core._STAR_eps_STAR_);
}),thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle2(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(o),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.point_in_triangle2_QMARK_,p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__29659){
var map__29660 = p__29659;
var map__29660__$1 = (((((!((map__29660 == null))))?(((((map__29660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29660):map__29660);
var vec__29661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29660__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29661,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29661,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29661,(2),null);
var map__29665 = this;
var map__29665__$1 = (((((!((map__29665 == null))))?(((((map__29665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29665):map__29665);
var vec__29666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29665__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29666,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29666,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29666,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null)], null);
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBoundingCircle$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_rect(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IPolygonConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),null,null,null));
}));

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle2.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (p__29674){
var map__29675 = p__29674;
var map__29675__$1 = (((((!((map__29675 == null))))?(((((map__29675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29675):map__29675);
var vec__29676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29675__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29676,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29676,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29676,(2),null);
var map__29683 = this;
var map__29683__$1 = (((((!((map__29683 == null))))?(((((map__29683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29683):map__29683);
var vec__29684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29683__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29684,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29684,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29684,(2),null);
return ((thi.ng.geom.core.dist(a__$1,b__$1) + thi.ng.geom.core.dist(b__$1,c__$1)) + thi.ng.geom.core.dist(c__$1,a__$1));
}));
(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29699_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__29699_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.tri_area3,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first(thi.ng.geom.utils.closest_point_on_segments(p,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29691_SHARP_){
return (new thi.ng.geom.types.Triangle3(p1__29691_SHARP_,null,null,null));
}),thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (p__29703,t){
var map__29704 = p__29703;
var map__29704__$1 = (((((!((map__29704 == null))))?(((((map__29704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29704):map__29704);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29704__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__29708 = this;
var map__29708__$1 = (((((!((map__29708 == null))))?(((((map__29708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29708):map__29708);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29708__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2(t,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p__$1,cljs.core.first(p__$1)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__29712){
var map__29713 = p__29712;
var map__29713__$1 = (((((!((map__29713 == null))))?(((((map__29713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29713):map__29713);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29713__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__29715 = this;
var map__29715__$1 = (((((!((map__29715 == null))))?(((((map__29715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29715):map__29715);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29715__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p__$1,cljs.core.first(p__$1)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.from_barycentric(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((3)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (p__29718,udist,include_last_QMARK_){
var map__29719 = p__29718;
var map__29719__$1 = (((((!((map__29719 == null))))?(((((map__29719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29719):map__29719);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29719__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__29721 = this;
var map__29721__$1 = (((((!((map__29721 == null))))?(((((map__29721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29721):map__29721);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29721__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p__$1,cljs.core.first(p__$1)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29692_SHARP_){
return thi.ng.geom.core.rotate(p1__29692_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29697_SHARP_){
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__29697_SHARP_,s);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face((function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),thi.ng.geom.attribs.generate_face_attribs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),(0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),opts));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (p__29727,ray){
var map__29728 = p__29727;
var map__29728__$1 = (((((!((map__29728 == null))))?(((((map__29728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29728):map__29728);
var vec__29729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29728__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29729,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29729,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29729,(2),null);
var map__29736 = this;
var map__29736__$1 = (((((!((map__29736 == null))))?(((((map__29736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29736):map__29736);
var vec__29737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29736__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29737,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29737,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29737,(2),null);
var vec__29743 = ((cljs.core.map_QMARK_(ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29743,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29743,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_(p,dir,a__$1,b__$1,c__$1);
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (p__29746,p,dir){
var map__29747 = p__29746;
var map__29747__$1 = (((((!((map__29747 == null))))?(((((map__29747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29747):map__29747);
var vec__29748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29747__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29748,(2),null);
var map__29753 = this;
var map__29753__$1 = (((((!((map__29753 == null))))?(((((map__29753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29753):map__29753);
var vec__29754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29753__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29754,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29754,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29754,(2),null);
return thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_(p,dir,a__$1,b__$1,c__$1);
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__29766,v){
var map__29767 = p__29766;
var map__29767__$1 = (((((!((map__29767 == null))))?(((((map__29767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29767):map__29767);
var vec__29768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29767__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29768,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29768,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29768,(2),null);
var map__29774 = this;
var map__29774__$1 = (((((!((map__29774 == null))))?(((((map__29774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29774):map__29774);
var vec__29775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29774__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29775,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29775,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29775,(2),null);
var pred__29779 = cljs.core._EQ_;
var expr__29780 = v;
if(cljs.core.truth_((pred__29779.cljs$core$IFn$_invoke$arity$2 ? pred__29779.cljs$core$IFn$_invoke$arity$2(a__$1,expr__29780) : pred__29779.call(null,a__$1,expr__29780)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1], null);
} else {
if(cljs.core.truth_((pred__29779.cljs$core$IFn$_invoke$arity$2 ? pred__29779.cljs$core$IFn$_invoke$arity$2(b__$1,expr__29780) : pred__29779.call(null,b__$1,expr__29780)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1], null);
} else {
if(cljs.core.truth_((pred__29779.cljs$core$IFn$_invoke$arity$2 ? pred__29779.cljs$core$IFn$_invoke$arity$2(c__$1,expr__29780) : pred__29779.call(null,c__$1,expr__29780)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1], null);
} else {
return null;
}
}
}
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_((function (){var fexpr__29783 = cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
return (fexpr__29783.cljs$core$IFn$_invoke$arity$1 ? fexpr__29783.cljs$core$IFn$_invoke$arity$1(v) : fexpr__29783.call(null,v));
})())){
return (2);
} else {
return (0);
}
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29698_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__29698_SHARP_,t);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISlice$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),e,thi.ng.geom.core.classify_point);
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ISlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return thi.ng.geom.triangle.slice_with_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),e,classifier);
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
var a = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
var n = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
var w = (- thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,a));
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2((thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,p) + w),thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(o),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.triangle.centroid.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.point_in_triangle3_QMARK_,p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29693_SHARP_){
return thi.ng.geom.core.rotate_x(p1__29693_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29694_SHARP_){
return thi.ng.geom.core.rotate_y(p1__29694_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29695_SHARP_){
return thi.ng.geom.core.rotate_z(p1__29695_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Triangle3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29696_SHARP_){
return thi.ng.geom.core.rotate_around_axis(p1__29696_SHARP_,axis,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__29785){
var map__29786 = p__29785;
var map__29786__$1 = (((((!((map__29786 == null))))?(((((map__29786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29786):map__29786);
var vec__29787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29786__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29787,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29787,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29787,(2),null);
var map__29791 = this;
var map__29791__$1 = (((((!((map__29791 == null))))?(((((map__29791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29791):map__29791);
var vec__29792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29791__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29792,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29792,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29792,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null)], null);
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IVolume$signed_volume$arity$1 = (function (p__29797){
var map__29798 = p__29797;
var map__29798__$1 = (((((!((map__29798 == null))))?(((((map__29798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29798):map__29798);
var vec__29799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29798__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(2),null);
var map__29803 = this;
var map__29803__$1 = (((((!((map__29803 == null))))?(((((map__29803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29803):map__29803);
var vec__29804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29804,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29804,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29804,(2),null);
return (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(a__$1,thi.ng.math.core.cross(b__$1,c__$1)) / 6.0);
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Triangle3.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (p__29808){
var map__29809 = p__29808;
var map__29809__$1 = (((((!((map__29809 == null))))?(((((map__29809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29809):map__29809);
var vec__29810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29809__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29810,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29810,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29810,(2),null);
var map__29814 = this;
var map__29814__$1 = (((((!((map__29814 == null))))?(((((map__29814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29814):map__29814);
var vec__29815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29814__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29815,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29815,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29815,(2),null);
return ((thi.ng.geom.core.dist(a__$1,b__$1) + thi.ng.geom.core.dist(b__$1,c__$1)) + thi.ng.geom.core.dist(c__$1,a__$1));
}));

//# sourceMappingURL=thi.ng.geom.triangle.js.map
