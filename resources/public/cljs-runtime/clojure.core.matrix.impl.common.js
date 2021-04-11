goog.provide('clojure.core.matrix.impl.common');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.utils');
goog.require('clojure.core.matrix.implementations');
/**
 * Returns a list of available implementations' objects
 */
clojure.core.matrix.impl.common.get_impl_objs = (function clojure$core$matrix$impl$common$get_impl_objs(){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$common$get_impl_objs_$_iter__26229(s__26230){
return (new cljs.core.LazySeq(null,(function (){
var s__26230__$1 = s__26230;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26230__$1);
if(temp__5735__auto__){
var s__26230__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26230__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__26230__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__26232 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__26231 = (0);
while(true){
if((i__26231 < size__4581__auto__)){
var vec__26234 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__26231);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26234,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26234,(1),null);
if(cljs.core.not((function (){var fexpr__26238 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),null,new cljs.core.Keyword(null,"TODO","TODO",-523795145),null], null), null);
return (fexpr__26238.cljs$core$IFn$_invoke$arity$1 ? fexpr__26238.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__26238.call(null,ns));
})())){
cljs.core.chunk_append(b__26232,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"obj","obj",981763962),clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(name)], null);
}catch (e26239){if((e26239 instanceof Error)){
var t = e26239;
return null;
} else {
throw e26239;

}
}})());

var G__26291 = (i__26231 + (1));
i__26231 = G__26291;
continue;
} else {
var G__26292 = (i__26231 + (1));
i__26231 = G__26292;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26232),clojure$core$matrix$impl$common$get_impl_objs_$_iter__26229(cljs.core.chunk_rest(s__26230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26232),null);
}
} else {
var vec__26240 = cljs.core.first(s__26230__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26240,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26240,(1),null);
if(cljs.core.not((function (){var fexpr__26243 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),null,new cljs.core.Keyword(null,"TODO","TODO",-523795145),null], null), null);
return (fexpr__26243.cljs$core$IFn$_invoke$arity$1 ? fexpr__26243.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__26243.call(null,ns));
})())){
return cljs.core.cons((function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"obj","obj",981763962),clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(name)], null);
}catch (e26244){if((e26244 instanceof Error)){
var t = e26244;
return null;
} else {
throw e26244;

}
}})(),clojure$core$matrix$impl$common$get_impl_objs_$_iter__26229(cljs.core.rest(s__26230__$2)));
} else {
var G__26293 = cljs.core.rest(s__26230__$2);
s__26230__$1 = G__26293;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(clojure.core.matrix.implementations.KNOWN_IMPLEMENTATIONS);
})());
});
/**
 * Constructs an array from the provided data, attempting to use the given implementation.
 * Uses a default implementation if needed
 */
clojure.core.matrix.impl.common.construct_matrix = (function clojure$core$matrix$impl$common$construct_matrix(impl,data){
var or__4185__auto__ = clojure.core.matrix.protocols.construct_matrix(impl,data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){try{return clojure.core.matrix.protocols.construct_matrix(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_,data);
}catch (e26249){if((e26249 instanceof clojure.core.matrix.impl.common.ClassCastException)){
var t = e26249;
return null;
} else {
throw e26249;

}
}})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
}
}
});
/**
 * Maps a function over all components of a persistent vector matrix. Like mapv but for matrices.
 * Assumes correct dimensionality / shape.
 * 
 * First array argument must be nested persistent vectors. Others may be
 * any arrays of the same shape.
 * 
 * Returns a nested persistent vector matrix or a scalar value.
 */
clojure.core.matrix.impl.common.mapmatrix = (function clojure$core$matrix$impl$common$mapmatrix(var_args){
var G__26256 = arguments.length;
switch (G__26256) {
case 2:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___26303 = arguments.length;
var i__4790__auto___26304 = (0);
while(true){
if((i__4790__auto___26304 < len__4789__auto___26303)){
args_arr__4810__auto__.push((arguments[i__4790__auto___26304]));

var G__26305 = (i__4790__auto___26304 + (1));
i__4790__auto___26304 = G__26305;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((4)),(0),null));
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if(((0) === dims)){
var G__26257 = (function (){var x__25978__auto__ = m;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26257) : f.call(null,G__26257));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.element_seq(m)));
} else {
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
}));

(clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m1));
if(((0) === dims)){
var G__26259 = (function (){var x__25978__auto__ = m1;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})();
var G__26260 = (function (){var x__25978__auto__ = m2;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26259,G__26260) : f.call(null,G__26259,G__26260));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m1,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.protocols.element_seq(m1),clojure.core.matrix.protocols.element_seq(m2)));
} else {
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m1),clojure.core.matrix.protocols.get_major_slice_seq(m2));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m1,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m1))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
}));

(clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4 = (function (f,m1,m2,m3){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m1));
if(((0) === dims)){
var G__26261 = (function (){var x__25978__auto__ = m1;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})();
var G__26262 = (function (){var x__25978__auto__ = m2;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})();
var G__26263 = (function (){var x__25978__auto__ = m3;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26261,G__26262,G__26263) : f.call(null,G__26261,G__26262,G__26263));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m1,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,clojure.core.matrix.protocols.element_seq(m1),clojure.core.matrix.protocols.element_seq(m2),clojure.core.matrix.protocols.element_seq(m3)));
} else {
var res = cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m1),clojure.core.matrix.protocols.get_major_slice_seq(m2),clojure.core.matrix.protocols.get_major_slice_seq(m3));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m1,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m1))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
}));

(clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,m3,more){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m1));
if(((0) === dims)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(function (){var x__25978__auto__ = m1;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})(),(function (){var x__25978__auto__ = m2;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})(),(function (){var x__25978__auto__ = m3;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_0d,more));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m1,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,clojure.core.matrix.protocols.element_seq(m1),clojure.core.matrix.protocols.element_seq(m2),clojure.core.matrix.protocols.element_seq(m3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,more)], 0)));
} else {
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m1),clojure.core.matrix.protocols.get_major_slice_seq(m2),clojure.core.matrix.protocols.get_major_slice_seq(m3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more)], 0));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m1,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m1))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
}));

/** @this {Function} */
(clojure.core.matrix.impl.common.mapmatrix.cljs$lang$applyTo = (function (seq26251){
var G__26252 = cljs.core.first(seq26251);
var seq26251__$1 = cljs.core.next(seq26251);
var G__26253 = cljs.core.first(seq26251__$1);
var seq26251__$2 = cljs.core.next(seq26251__$1);
var G__26254 = cljs.core.first(seq26251__$2);
var seq26251__$3 = cljs.core.next(seq26251__$2);
var G__26255 = cljs.core.first(seq26251__$3);
var seq26251__$4 = cljs.core.next(seq26251__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26252,G__26253,G__26254,G__26255,seq26251__$4);
}));

(clojure.core.matrix.impl.common.mapmatrix.cljs$lang$maxFixedArity = (4));

/**
 * Logistic function, with primitive type hints
 */
clojure.core.matrix.impl.common.logistic_fn = (function clojure$core$matrix$impl$common$logistic_fn(t){
var e_t = (function (){var G__26270 = (- t);
return Math.exp(G__26270);
})();
return (1.0 / (1.0 + e_t));
});
/**
 * Softplus function, with primitive type hints
 */
clojure.core.matrix.impl.common.softplus_fn = (function clojure$core$matrix$impl$common$softplus_fn(t){
if((t > 100.0)){
return t;
} else {
var et = Math.exp(t);
var G__26274 = (1.0 + et);
return Math.log(G__26274);
}
});
/**
 * ReLU function, with primitive type hints
 */
clojure.core.matrix.impl.common.relu_fn = (function clojure$core$matrix$impl$common$relu_fn(t){
return Math.max(0.0,t);
});
/**
 * Returns true if matrix is square (2D with same number of rows and columns)
 */
clojure.core.matrix.impl.common.square_QMARK_ = (function clojure$core$matrix$impl$common$square_QMARK_(m){
return ((((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))) && ((cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0))) === cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1))))));
});
/**
 * Returns true iff square matrix m is symmetric.
 */
clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_ = (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK_(m){
var dim = cljs.core.long$(cljs.core.first(clojure.core.matrix.protocols.get_shape(m)));
var f = (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK__$_f(i,j){
while(true){
if((i >= dim)){
return true;
} else {
if((j >= dim)){
var G__26354 = ((1) + i);
var G__26355 = ((2) + i);
i = G__26354;
j = G__26355;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_2d(m,i,j),clojure.core.matrix.protocols.get_2d(m,j,i))){
var G__26357 = i;
var G__26358 = (j + (1));
i = G__26357;
j = G__26358;
continue;
} else {
return false;

}
}
}
break;
}
});
return f((0),(1));
});

//# sourceMappingURL=clojure.core.matrix.impl.common.js.map
