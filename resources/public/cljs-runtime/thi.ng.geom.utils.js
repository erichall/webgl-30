goog.provide('thi.ng.geom.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.math.core');
thi.ng.geom.utils.closest_point_coeff = (function thi$ng$geom$utils$closest_point_coeff(p,a,b){
var d = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a);
return (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p,a),d) / thi.ng.math.core.mag_squared(d));
});
thi.ng.geom.utils.closest_point_on_line = (function thi$ng$geom$utils$closest_point_on_line(p,a,b){
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,thi.ng.geom.utils.closest_point_coeff(p,a,b));
});
thi.ng.geom.utils.closest_point_on_segment = (function thi$ng$geom$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.utils.closest_point_coeff(p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t);
}
}
});
thi.ng.geom.utils.closest_point_on_segments = (function thi$ng$geom$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__28727_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.closest_point_on_segment,p,p1__28727_SHARP_);
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared(p,q);
if((d_SINGLEQUOTE_ < (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.utils.closest_line_between = (function thi$ng$geom$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b2,a2);
if(cljs.core.not(thi.ng.geom.vector.V3.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(null,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b1,a1);
if(cljs.core.not(thi.ng.geom.vector.V3.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(null,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(a1,a2);
var d1343 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p13,p43);
var d4321 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p43,p21);
var d1321 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p13,p21);
var d4343 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p43,p43);
var d2121 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"a","a",-2123407586),thi.ng.math.core.madd(p21,ua,a1),new cljs.core.Keyword(null,"b","b",1482224470),thi.ng.math.core.madd(p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.dist_STAR_ = (function thi$ng$geom$utils$dist_STAR_(rf){
return (function (c,points){
var G__28730 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__28729_SHARP_){
return thi.ng.geom.core.dist_squared(c,p1__28729_SHARP_);
})),rf,(0),points);
return Math.sqrt(G__28730);
});
});
thi.ng.geom.utils.min_dist = thi.ng.geom.utils.dist_STAR_(cljs.core.min);
thi.ng.geom.utils.max_dist = thi.ng.geom.utils.dist_STAR_(cljs.core.max);
thi.ng.geom.utils.arc_length_index = (function thi$ng$geom$utils$arc_length_index(points){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__28731_SHARP_){
return thi.ng.geom.core.dist(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28731_SHARP_,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28731_SHARP_,(1)));
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,d){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.peek(a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),points));
});
thi.ng.geom.utils.arc_length = (function thi$ng$geom$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.utils.centroid = (function thi$ng$geom$utils$centroid(coll){
var G__28733 = cljs.core.count(coll);
switch (G__28733) {
case (0):
return null;

break;
case (1):
return cljs.core.first(coll);

break;
case (2):
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(cljs.core.first(coll),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(1)));

break;
default:
var s = (1.0 / cljs.core.count(coll));
var f = (function (x,_){
return (x * s);
});
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4(cljs.core.first(coll),cljs.core._PLUS_,f,cljs.core.rest(coll));

}
});
thi.ng.geom.utils.center = (function thi$ng$geom$utils$center(var_args){
var G__28736 = arguments.length;
switch (G__28736) {
case 2:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.centroid(coll),c_SINGLEQUOTE_,coll);
}));

(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c_SINGLEQUOTE_,c);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28734_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__28734_SHARP_,d);
}),coll);
}));

(thi.ng.geom.utils.center.cljs$lang$maxFixedArity = 3);

thi.ng.geom.utils.scale_size = (function thi$ng$geom$utils$scale_size(var_args){
var G__28739 = arguments.length;
switch (G__28739) {
case 2:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.centroid(coll),s,coll);
}));

(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28737_SHARP_){
return thi.ng.math.core.madd(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p1__28737_SHARP_,c),s,c);
}),coll);
}));

(thi.ng.geom.utils.scale_size.cljs$lang$maxFixedArity = 3);

thi.ng.geom.utils.bounds_STAR_ = (function thi$ng$geom$utils$bounds_STAR_(zero,coll){
var c = cljs.core.count(coll);
if((c > (1))){
var vec__28740 = coll;
var seq__28741 = cljs.core.seq(vec__28740);
var first__28742 = cljs.core.first(seq__28741);
var seq__28741__$1 = cljs.core.next(seq__28741);
var x = first__28742;
var xs = seq__28741__$1;
var p = thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3(x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3(x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q,p)], null);
} else {
if((c === (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(coll),zero], null);
} else {
return null;

}
}
});
thi.ng.geom.utils.bounding_rect_raw = (function thi$ng$geom$utils$bounding_rect_raw(points){
return thi.ng.geom.utils.bounds_STAR_(thi.ng.geom.vector.V2,points);
});
thi.ng.geom.utils.bounding_box_raw = (function thi$ng$geom$utils$bounding_box_raw(points){
return thi.ng.geom.utils.bounds_STAR_(thi.ng.geom.vector.V3,points);
});
thi.ng.geom.utils.radial_bounds = (function thi$ng$geom$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(c) : ctor.call(null,c)),((cljs.core.coll_QMARK_(r_or_points))?(thi.ng.geom.utils.max_dist.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.utils.max_dist.cljs$core$IFn$_invoke$arity$2(c,r_or_points) : thi.ng.geom.utils.max_dist.call(null,c,r_or_points)):r_or_points)], null);
});
thi.ng.geom.utils.axis_bounds = (function thi$ng$geom$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28744_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28744_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs)], null);
});
thi.ng.geom.utils.axis_range = (function thi$ng$geom$utils$axis_range(axis,coll){
return (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,thi.ng.geom.utils.axis_bounds(axis,coll)));
});
thi.ng.geom.utils.delta_contains = (function thi$ng$geom$utils$delta_contains(points,p,eps){
return cljs.core.some((function (p1__28745_SHARP_){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(p,p1__28745_SHARP_,eps);
}),points);
});
thi.ng.geom.utils.from_barycentric = (function thi$ng$geom$utils$from_barycentric(points,weights){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core._STAR_,points,weights));
});
/**
 * Takes a seq of points and normalized index (0.0 .. 1.0), returns
 *   interpolated point at position t.
 */
thi.ng.geom.utils.point_at_index = (function thi$ng$geom$utils$point_at_index(points,t){
var n = (cljs.core.count(points) - (1));
var t_SINGLEQUOTE_ = (t * n);
var ti = (t_SINGLEQUOTE_ | (0));
if((ti < n)){
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,ti),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(ti + (1))),(t_SINGLEQUOTE_ - ti));
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(((ti < (0)))?(0):n));
}
});
thi.ng.geom.utils.point_at_STAR_ = (function thi$ng$geom$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)))){
var G__28884 = (i__$1 + (1));
i__$1 = G__28884;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i1) : idx.call(null,i1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i__$1),((ct - pi) / ((idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)) - pi))),i__$1], null);
});
thi.ng.geom.utils.point_at = (function thi$ng$geom$utils$point_at(var_args){
var G__28747 = arguments.length;
switch (G__28747) {
case 2:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,points,null);
}));

(thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,t))){
var n = cljs.core.count(points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first(points);
} else {
if((1.0 === t__$1)){
return cljs.core.last(points);
} else {
var idx__$1 = (function (){var or__4185__auto__ = idx;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.utils.arc_length_index(points);
}
})();
return cljs.core.first(thi.ng.geom.utils.point_at_STAR_(points,idx__$1,cljs.core.peek(idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
}));

(thi.ng.geom.utils.point_at.cljs$lang$maxFixedArity = 3);

thi.ng.geom.utils.sample_uniform_STAR_ = (function thi$ng$geom$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.utils.arc_length_index(points);
var total = cljs.core.peek(idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__28752 = thi.ng.geom.utils.point_at_STAR_(points,idx,total,t,i);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28752,(0),null);
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28752,(1),null);
var G__28902 = (t + delta);
var G__28903 = (i__$1 | (0));
var G__28904 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
t = G__28902;
i = G__28903;
acc = G__28904;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(samples,cljs.core.last(points));
} else {
return samples;
}
});
thi.ng.geom.utils.sample_uniform = (function thi$ng$geom$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count(points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null);
} else {
return thi.ng.geom.utils.sample_uniform_STAR_(udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.utils.sample_segment_with_res = (function thi$ng$geom$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__4582__auto__ = (function thi$ng$geom$utils$sample_segment_with_res_$_iter__28755(s__28756){
return (new cljs.core.LazySeq(null,(function (){
var s__28756__$1 = s__28756;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28756__$1);
if(temp__5735__auto__){
var s__28756__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28756__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__28756__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__28759 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__28758 = (0);
while(true){
if((i__28758 < size__4581__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__28758);
cljs.core.chunk_append(b__28759,thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t));

var G__28912 = (i__28758 + (1));
i__28758 = G__28912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28759),thi$ng$geom$utils$sample_segment_with_res_$_iter__28755(cljs.core.chunk_rest(s__28756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28759),null);
}
} else {
var t = cljs.core.first(s__28756__$2);
return cljs.core.cons(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t),thi$ng$geom$utils$sample_segment_with_res_$_iter__28755(cljs.core.rest(s__28756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(thi.ng.math.core.norm_range(res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast(ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.utils.map_bilinear = (function thi$ng$geom$utils$map_bilinear(p__28760,p__28761){
var vec__28762 = p__28760;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28762,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28762,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28762,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28762,(3),null);
var vec__28765 = p__28761;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28765,(1),null);
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6(a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.utils.map_trilinear = (function thi$ng$geom$utils$map_trilinear(p__28768,p__28769){
var vec__28770 = p__28768;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28770,(7),null);
var vec__28773 = p__28769;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28773,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28773,(2),null);
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6(a,d,e,h,u,v),thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6(b,c,f,g,u,v),w);
});
thi.ng.geom.utils.tessellate_with_point = (function thi$ng$geom$utils$tessellate_with_point(var_args){
var G__28779 = arguments.length;
switch (G__28779) {
case 1:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.centroid(points),points);
}));

(thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28777_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,cljs.core.first(p1__28777_SHARP_),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28777_SHARP_,(1))],null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null))));
}));

(thi.ng.geom.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2);

thi.ng.geom.utils.tessellate_with_first = (function thi$ng$geom$utils$tessellate_with_first(points){
if((cljs.core.count(points) > (3))){
var v0 = cljs.core.first(points);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__28780){
var vec__28781 = p__28780;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28781,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28781,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.rest(points)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$utils$tessellate_tri_with_midpoints(p__28784){
var vec__28785 = p__28784;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28785,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28785,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28785,(2),null);
var ab = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(a,b);
var bc = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(b,c);
var ca = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.utils.tessellate_3 = (function thi$ng$geom$utils$tessellate_3(points){
var pred__28788 = cljs.core._EQ__EQ_;
var expr__28789 = cljs.core.count(points);
if(cljs.core.truth_((pred__28788.cljs$core$IFn$_invoke$arity$2 ? pred__28788.cljs$core$IFn$_invoke$arity$2((3),expr__28789) : pred__28788.call(null,(3),expr__28789)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_((pred__28788.cljs$core$IFn$_invoke$arity$2 ? pred__28788.cljs$core$IFn$_invoke$arity$2((4),expr__28789) : pred__28788.call(null,(4),expr__28789)))){
var vec__28791 = points;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28791,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28791,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28791,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28791,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
}
});
thi.ng.geom.utils.tessellate_max4 = (function thi$ng$geom$utils$tessellate_max4(points){
if((cljs.core.count(points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
});
thi.ng.geom.utils.tessellate_face = (function thi$ng$geom$utils$tessellate_face(tess_fn){
return (function (p__28794){
var vec__28795 = p__28794;
var verts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28795,(0),null);
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28795,(1),null);
var verts__$1 = (tess_fn.cljs$core$IFn$_invoke$arity$1 ? tess_fn.cljs$core$IFn$_invoke$arity$1(verts) : tess_fn.call(null,verts));
var attribs__$1 = cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(tess_fn.cljs$core$IFn$_invoke$arity$1 ? tess_fn.cljs$core$IFn$_invoke$arity$1(v) : tess_fn.call(null,v)));
}),cljs.core.PersistentArrayMap.EMPTY,attribs);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,verts__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts__$2,cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
}),cljs.core.PersistentArrayMap.EMPTY,attribs__$1)], null);
}),verts__$1);
});
});
thi.ng.geom.utils.ortho_normal = (function thi$ng$geom$utils$ortho_normal(var_args){
var G__28799 = arguments.length;
switch (G__28799) {
case 1:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__28800){
var vec__28801 = p__28800;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801,(2),null);
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.cross(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
}));

(thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.cross(a,b));
}));

(thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.cross(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
}));

(thi.ng.geom.utils.ortho_normal.cljs$lang$maxFixedArity = 3);

thi.ng.geom.utils.norm_sign2 = (function thi$ng$geom$utils$norm_sign2(p__28804,p__28805,p__28806){
var vec__28807 = p__28804;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28807,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28807,(1),null);
var vec__28810 = p__28805;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28810,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28810,(1),null);
var vec__28813 = p__28806;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28813,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28813,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.utils.norm_sign3 = (function thi$ng$geom$utils$norm_sign3(a,b,c){
return thi.ng.math.core.mag(thi.ng.math.core.cross(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});
thi.ng.geom.utils.tri_area2 = (function thi$ng$geom$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign2(a,b,c));
});
thi.ng.geom.utils.tri_area3 = (function thi$ng$geom$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign3(a,b,c));
});
thi.ng.geom.utils.clockwise2_QMARK_ = (function thi$ng$geom$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.utils.norm_sign2(a,b,c) < (0));
});
thi.ng.geom.utils.clockwise3_QMARK_ = (function thi$ng$geom$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.cross(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a)),n) > (0));
});
thi.ng.geom.utils.triangle_barycentric_coords = (function thi$ng$geom$utils$triangle_barycentric_coords(var_args){
var G__28818 = arguments.length;
switch (G__28818) {
case 2:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__28819,p){
var vec__28820 = p__28819;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820,(2),null);
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a));
}));

(thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a));
}));

(thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p,a);
var uu = thi.ng.math.core.mag_squared(u);
var vv = thi.ng.math.core.mag_squared(v);
var uv = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(u,v);
var wu = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(w,u);
var wv = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
}));

(thi.ng.geom.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6);

thi.ng.geom.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(thi.ng.geom.utils.clockwise2_QMARK_(a,b,c)){
return (((thi.ng.geom.utils.norm_sign2(a,c,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(b,a,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(c,b,p) >= 0.0)));
} else {
return (((thi.ng.geom.utils.norm_sign2(b,c,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(a,b,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(c,a,p) >= 0.0)));
}
});
thi.ng.geom.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a);
var v = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a);
var n = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(u,v);
var cl = (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,p) - thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,cl))){
var vec__28824 = thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(2),null);
if((u__$1 >= 0.0)){
if((w >= 0.0)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,v__$1);
} else {
return false;
}
} else {
return false;
}
} else {
return null;
}
});
thi.ng.geom.utils.tessellating_transducer = (function thi$ng$geom$utils$tessellating_transducer(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.utils.tessellate_with_first),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f));
});
thi.ng.geom.utils.area_xf = thi.ng.geom.utils.tessellating_transducer((function (p1__28827_SHARP_){
var G__28828 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.tri_area3,p1__28827_SHARP_);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__28828) : thi.ng.math.core.abs_STAR_.call(null,G__28828));
}));
thi.ng.geom.utils.volume_xf = thi.ng.geom.utils.tessellating_transducer((function (p1__28829_SHARP_){
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2((p1__28829_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28829_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__28829_SHARP_.call(null,(0))),thi.ng.math.core.cross((p1__28829_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28829_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__28829_SHARP_.call(null,(1))),(p1__28829_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28829_SHARP_.cljs$core$IFn$_invoke$arity$1((2)) : p1__28829_SHARP_.call(null,(2)))));
}));
thi.ng.geom.utils.total_area_3d = (function thi$ng$geom$utils$total_area_3d(var_args){
var G__28831 = arguments.length;
switch (G__28831) {
case 1:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.area_xf,cljs.core._PLUS_,faces);
}));

(thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xf,thi.ng.geom.utils.area_xf),cljs.core._PLUS_,faces);
}));

(thi.ng.geom.utils.total_area_3d.cljs$lang$maxFixedArity = 2);

thi.ng.geom.utils.total_volume = (function thi$ng$geom$utils$total_volume(var_args){
var G__28833 = arguments.length;
switch (G__28833) {
case 1:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
}));

(thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xf,thi.ng.geom.utils.volume_xf),cljs.core._PLUS_,faces) / 6.0);
}));

(thi.ng.geom.utils.total_volume.cljs$lang$maxFixedArity = 2);

thi.ng.geom.utils.bounding_rect = (function thi$ng$geom$utils$bounding_rect(points){
var vec__28835 = thi.ng.geom.utils.bounding_rect_raw(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_box = (function thi$ng$geom$utils$bounding_box(points){
var vec__28838 = thi.ng.geom.utils.bounding_box_raw(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28838,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28838,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_circle = (function thi$ng$geom$utils$bounding_circle(var_args){
var G__28842 = arguments.length;
switch (G__28842) {
case 1:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.centroid(points),points);
}));

(thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__28843 = thi.ng.geom.utils.radial_bounds(thi.ng.geom.vector.vec2,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28843,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28843,(1),null);
return (new thi.ng.geom.types.Circle2(c__$1,r,null,null,null));
}));

(thi.ng.geom.utils.bounding_circle.cljs$lang$maxFixedArity = 2);

thi.ng.geom.utils.bounding_sphere = (function thi$ng$geom$utils$bounding_sphere(var_args){
var G__28847 = arguments.length;
switch (G__28847) {
case 1:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.centroid(points),points);
}));

(thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__28848 = thi.ng.geom.utils.radial_bounds(thi.ng.geom.vector.vec3,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(1),null);
return (new thi.ng.geom.types.Sphere(c__$1,r,null,null,null));
}));

(thi.ng.geom.utils.bounding_sphere.cljs$lang$maxFixedArity = 2);

/**
 * Takes a seq of shape entities, calls g/bounds on each and returns
 *   union bounds. Does not support collections of mixed 2d/3d entities.
 */
thi.ng.geom.utils.coll_bounds = (function thi$ng$geom$utils$coll_bounds(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.union,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.bounds,coll));
});
/**
 * Takes an AABB or rect and seq of shapes, proportionally scales and
 *   repositions all items to fit into given bounds. Returns lazyseq of
 *   transformed entities. Does not support collections of mixed 2D/3D
 *   entities. Use rects as target bounds for 2D colls.
 */
thi.ng.geom.utils.fit_all_into_bounds = (function thi$ng$geom$utils$fit_all_into_bounds(bounds,coll){
var b = thi.ng.geom.utils.coll_bounds(coll);
var s = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"size","size",1098693007))));
var b_SINGLEQUOTE_ = thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale(b,s),thi.ng.geom.core.centroid(bounds));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28851_SHARP_){
return thi.ng.geom.core.scale_size(thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2(p1__28851_SHARP_,thi.ng.geom.core.unmap_point(b_SINGLEQUOTE_,thi.ng.geom.core.map_point(b,thi.ng.geom.core.centroid(p1__28851_SHARP_)))),s);
}),coll);
});
/**
 * Takes a target mesh, its add-face fn and a source mesh or face
 *   sequence. Adds faces to target mesh and returns it.
 */
thi.ng.geom.utils.into_mesh = (function thi$ng$geom$utils$into_mesh(mesh,add_face,mesh_or_faces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_face,mesh,(((((!((mesh_or_faces == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === mesh_or_faces.thi$ng$geom$core$IFaceAccess$))))?true:(((!mesh_or_faces.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IFaceAccess,mesh_or_faces):false)):cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IFaceAccess,mesh_or_faces)))?thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2(mesh_or_faces,true):mesh_or_faces));
});
/**
 * Applies f to all faces of given mesh and adds resulting faces to
 *   new mesh. Thus f should return a seq of raw faces (i.e. each face as
 *   2-elem vector of [verts attribs]. Returns new mesh.
 */
thi.ng.geom.utils.map_mesh = (function thi$ng$geom$utils$map_mesh(f,mesh){
return thi.ng.geom.core.into(thi.ng.geom.core.clear_STAR_(mesh),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2(mesh,true)], 0)));
});
/**
 * Takes a mesh, its add-face fn and a vertex transformation fn.
 *   Transforms all mesh vertices and returns new mesh.
 */
thi.ng.geom.utils.transform_mesh = (function thi$ng$geom$utils$transform_mesh(mesh,add_face,tx){
var tx__$1 = (((((!((tx == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tx.thi$ng$geom$core$IVectorTransform$))))?true:(((!tx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IVectorTransform,tx):false)):cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IVectorTransform,tx)))?(function (v){
return thi.ng.geom.core.transform_vector(tx,v);
}):tx);
var verts_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,v,(tx__$1.cljs$core$IFn$_invoke$arity$1 ? tx__$1.cljs$core$IFn$_invoke$arity$1(v) : tx__$1.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(mesh)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mesh__$1,p__28855){
var vec__28856 = p__28855;
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28856,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28856,(1),null);
var G__28859 = mesh__$1;
var G__28860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(verts_SINGLEQUOTE_,fv),fa], null);
return (add_face.cljs$core$IFn$_invoke$arity$2 ? add_face.cljs$core$IFn$_invoke$arity$2(G__28859,G__28860) : add_face.call(null,G__28859,G__28860));
}),thi.ng.geom.core.clear_STAR_(mesh),thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2(mesh,true));
});

//# sourceMappingURL=thi.ng.geom.utils.js.map
