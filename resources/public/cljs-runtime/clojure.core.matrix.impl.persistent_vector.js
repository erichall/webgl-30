goog.provide('clojure.core.matrix.impl.persistent_vector');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.impl.mathsops');
/**
 * Ensures a vector is fully coerced to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.coerce_nested = (function clojure$core$matrix$impl$persistent_vector$coerce_nested(v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce,v);
});
/**
 * Maps a function over a persistent vector, only modifying the vector if the function
 * returns a different value
 */
clojure.core.matrix.impl.persistent_vector.mapv_identity_check = (function clojure$core$matrix$impl$persistent_vector$mapv_identity_check(f,v){
var n = cljs.core.count(v);
var i = (0);
var v__$1 = v;
while(true){
if((i < n)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,i);
var y = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
var G__33707 = (i + (1));
var G__33708 = (((x === y))?v__$1:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,i,y));
i = G__33707;
v__$1 = G__33708;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
if((v instanceof cljs.core.PersistentVector)){
if((cljs.core.count(v) === cljs.core.long$(cljs.core.first(shape)))){
var temp__5733__auto__ = cljs.core.next(shape);
if(temp__5733__auto__){
var ns = temp__5733__auto__;
return cljs.core.every_QMARK_((function (p1__33605_SHARP_){
return (clojure.core.matrix.impl.persistent_vector.check_vector_shape.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.impl.persistent_vector.check_vector_shape.cljs$core$IFn$_invoke$arity$2(p1__33605_SHARP_,ns) : clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,p1__33605_SHARP_,ns));
}),v);
} else {
return cljs.core.every_QMARK_((function (p1__33606_SHARP_){
return (!((p1__33606_SHARP_ instanceof cljs.core.PersistentVector)));
}),v);
}
} else {
return false;
}
} else {
return false;
}
});
/**
 * Test if array is already in nested persistent vector array format.
 */
clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_ = (function clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_(x){
if(typeof x === 'number'){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(x))){
return true;
} else {
if((!((x instanceof cljs.core.PersistentVector)))){
return false;
} else {
return ((cljs.core.every_QMARK_(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_,x)) && (clojure.core.matrix.impl.persistent_vector.check_vector_shape(x,clojure.core.matrix.protocols.get_shape(x))));

}
}
}
});
/**
 * Coerces to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce = (function clojure$core$matrix$impl$persistent_vector$persistent_vector_coerce(x){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(x));
if((dims > (0))){
return clojure.core.matrix.protocols.convert_to_nested_vectors(x);
} else {
if((((dims === (0))) && (cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(x))))){
return clojure.core.matrix.protocols.get_0d(x);
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.IIterable)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested(x);
} else {
return x;

}
}
}
}
}
});
/**
 * Calculates the dimensionality (== nesting depth) of nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.vector_dimensionality = (function clojure$core$matrix$impl$persistent_vector$vector_dimensionality(m){
if(cljs.core.vector_QMARK_(m)){
if((cljs.core.count(m) > (0))){
return ((1) + (function (){var G__33607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0));
return (clojure.core.matrix.impl.persistent_vector.vector_dimensionality.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.persistent_vector.vector_dimensionality.cljs$core$IFn$_invoke$arity$1(G__33607) : clojure.core.matrix.impl.persistent_vector.vector_dimensionality.call(null,G__33607));
})());
} else {
return (1);
}
} else {
return cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));

}
});
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Implementation for nested Clojure persistent vectors\n             used as matrices"], null);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length,0.0));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,clojure.core.matrix.protocols.new_vector(m__$1,columns)));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
var temp__5733__auto__ = cljs.core.seq(dims);
if(temp__5733__auto__){
var dims__$1 = temp__5733__auto__;
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(dims__$1),clojure.core.matrix.protocols.new_matrix_nd(m__$1,cljs.core.next(dims__$1))));
} else {
return 0.0;
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(data);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,target_shape){
var m__$1 = this;
var mshape = clojure.core.matrix.protocols.get_shape(m__$1);
var dims = cljs.core.long$(cljs.core.count(mshape));
var tdims = cljs.core.long$(cljs.core.count(target_shape));
if((dims > tdims)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't broadcast to a lower dimensional shape",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((!(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ__EQ_,mshape,cljs.core.take_last(dims,target_shape)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Incompatible shapes, cannot broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(mshape))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(target_shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$2,dup){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dup,m__$2));
}),m__$1,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(dims,target_shape)));

}
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(a,clojure.core.matrix.protocols.get_shape(m__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(a),clojure.core.matrix.protocols.get_shape(m__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(x | (0)));
var x__25978__auto__ = r;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(x | (0)));
return clojure.core.matrix.protocols.get_1d(row,y);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5733__auto__ = cljs.core.seq(indexes);
if(temp__5733__auto__){
var indexes__$1 = temp__5733__auto__;
var temp__5733__auto____$1 = cljs.core.next(indexes__$1);
if(temp__5733__auto____$1){
var next_indexes = temp__5733__auto____$1;
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(cljs.core.first(indexes__$1) | (0)));
return clojure.core.matrix.protocols.get_nd(m__$2,next_indexes);
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(cljs.core.first(indexes__$1) | (0)));
}
} else {
return m__$1;
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,row,v);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,row,clojure.core.matrix.protocols.set_1d((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(row) : m__$1.call(null,row)),column,v));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
var temp__5733__auto__ = cljs.core.seq(indexes);
if(temp__5733__auto__){
var indexes__$1 = temp__5733__auto__;
var fi = cljs.core.first(indexes__$1);
if(((1) === cljs.core.count(indexes__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,fi,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,fi,clojure.core.matrix.protocols.set_nd((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(fi) : m__$1.call(null,fi)),cljs.core.next(indexes__$1),v));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Trying to set on a persistent vector with insufficient indexes?",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.long$(i));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 = (function (m,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice(m__$1,(1),i);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 = (function (m,i){
var m__$1 = this;
var sl = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.long$(i));
return sl;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 = (function (m,dimension,i){
var m__$1 = this;
var dimension__$1 = cljs.core.long$(dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.get_major_slice(m__$1,i);
} else {
var sd = (dimension__$1 - (1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33608_SHARP_){
return clojure.core.matrix.protocols.get_slice(p1__33608_SHARP_,sd,i);
}),m__$1);
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec((function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__33610(s__33611){
return (new cljs.core.LazySeq(null,(function (){
var s__33611__$1 = s__33611;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33611__$1);
if(temp__5735__auto__){
var s__33611__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33611__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__33611__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__33613 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__33612 = (0);
while(true){
if((i__33612 < size__4581__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__33612);
cljs.core.chunk_append(b__33613,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__33612,j,c__4580__auto__,size__4581__auto__,b__33613,s__33611__$2,temp__5735__auto__,m__$1){
return (function (p1__33609_SHARP_){
return clojure.core.matrix.protocols.get_1d(p1__33609_SHARP_,j);
});})(i__33612,j,c__4580__auto__,size__4581__auto__,b__33613,s__33611__$2,temp__5735__auto__,m__$1))
,m__$1));

var G__33726 = (i__33612 + (1));
i__33612 = G__33726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33613),clojure$core$matrix$impl$persistent_vector$iter__33610(cljs.core.chunk_rest(s__33611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33613),null);
}
} else {
var j = cljs.core.first(s__33611__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (j,s__33611__$2,temp__5735__auto__,m__$1){
return (function (p1__33609_SHARP_){
return clojure.core.matrix.protocols.get_1d(p1__33609_SHARP_,j);
});})(j,s__33611__$2,temp__5735__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__33610(cljs.core.rest(s__33611__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m__$1,(1))));
})());
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,i);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dimension,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice(m__$1,dimension,i);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 = (function (m,a){
var m__$1 = this;
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m__$1));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((dims === adims)){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq(m__$1),clojure.core.matrix.protocols.get_major_slice_seq(a)));
} else {
if((dims === (adims + (1)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,a);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Joining with array of incompatible size",cljs.core.PersistentArrayMap.EMPTY);

}
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$rotate$arity$3 = (function (m,dim,places){
var m__$1 = this;
var dim__$1 = cljs.core.long$(dim);
var places__$1 = cljs.core.long$(places);
if(((0) === dim__$1)){
var c = cljs.core.long$(cljs.core.count(m__$1));
var sh = cljs.core.long$((((c > (0)))?cljs.core.mod(places__$1,c):(0)));
if((sh === (0))){
return m__$1;
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(m__$1,sh,c),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(m__$1,(0),sh)));
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s){
return clojure.core.matrix.protocols.rotate(s,(dim__$1 - (1)),places__$1);
}),m__$1);
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2 = (function (m,ordering){
var m__$1 = this;
var temp__5733__auto__ = cljs.core.seq(ordering);
if(temp__5733__auto__){
var ordering__$1 = temp__5733__auto__;
var dim = cljs.core.long$(cljs.core.first(ordering__$1));
var next_ordering = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
if((i < dim)){
return i;
} else {
return (i - (1));
}
}),cljs.core.next(ordering__$1));
var slice_range = cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m__$1,dim));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (si){
return clojure.core.matrix.protocols.transpose_dims(clojure.core.matrix.protocols.get_slice(m__$1,dim,si),next_ordering);
}),slice_range);
} else {
return m__$1;
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33614_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,p1__33614_SHARP_);
}),clojure.core.matrix.protocols.element_seq(indices));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$3 = (function (m,dimension,indices){
var m__$1 = this;
var dimension__$1 = cljs.core.long$(dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$2(m__$1,indices);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33615_SHARP_){
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$3(p1__33615_SHARP_,(dimension__$1 - (1)),indices);
}),m__$1);
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var m__$1 = this;
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(m__$1,start,(cljs.core.long$(start) + cljs.core.long$(length)));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 = (function (m){
var m__$1 = this;
if(clojure.core.matrix.protocols.same_shapes_QMARK_(m__$1)){
return clojure.core.matrix.protocols.get_shape(m__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Inconsistent shape for persistent vector array.",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$2 = (function (m,shape){
var m__$1 = this;
if(cljs.core.empty_QMARK_(shape)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected empty shape for persistent vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,cljs.core.next(shape),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.validate_shape,m__$1)))){
return shape;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconsistent shape for persistent vector array, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)," on array ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 = (function (m,a){
var m__$1 = this;
var vec__33616 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33616,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33616,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(a__$1));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__33619 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33619,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33619,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(cljs.core._,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(a__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 = (function (a,b){
var a__$1 = this;
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b));
if((((dims === (1))) && (((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))))){
var n = cljs.core.long$(cljs.core.count(a__$1));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.long$(cljs.core.long$(clojure.core.matrix.protocols.dimension_count(b,(0)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mismatched vector sizes",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((b instanceof cljs.core.List)){
var b__$1 = b;
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__33747 = (i + (1));
var G__33748 = (res + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__33747;
res = G__33748;
continue;
}
break;
}
} else {
if((Array === b.constructor)){
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__33749 = (i + (1));
var G__33750 = (res + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,(i | (0))) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,i)));
i = G__33749;
res = G__33750;
continue;
}
break;
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,a__$1,clojure.core.matrix.protocols.element_seq(b)));

}
}
}
} else {
return clojure.core.matrix.protocols.inner_product(a__$1,b);

}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first(a__$1) === 'number'){
var n = cljs.core.long$(cljs.core.count(a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i);
var G__33752 = (i + (1));
var G__33753 = (res + (x * x));
i = G__33752;
res = G__33753;
continue;
} else {
return Math.sqrt(res);
}
break;
}
} else {
var G__33622 = clojure.core.matrix.protocols.length_squared(a__$1);
return Math.sqrt(G__33622);
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first(a__$1) === 'number'){
var n = cljs.core.long$(cljs.core.count(a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i);
var G__33757 = (i + (1));
var G__33758 = (res + (x * x));
i = G__33757;
res = G__33758;
continue;
} else {
return res;
}
break;
}
} else {
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(a__$1,(function (r,x){
return (r + (x * x));
}),0.0);
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.scale(a__$1,(1.0 / (function (){var G__33623 = clojure.core.matrix.protocols.length_squared(a__$1);
return Math.sqrt(G__33623);
})()));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return null;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2 = (function (a,b){
var a__$1 = this;
return clojure.core.matrix.protocols.length(clojure.core.matrix.protocols.matrix_sub(b,a__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$2(a__$1,cljs.core._PLUS_);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 = (function (m,param){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(param);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 = (function (a,b){
var a__$1 = this;
var bdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b));
var acount = cljs.core.long$(cljs.core.count(a__$1));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(acount,clojure.core.matrix.protocols.dimension_count(b,(0)))){
return false;
} else {
if(((1) === bdims)){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a__$1)))){
var i = (0);
while(true){
if((i < acount)){
if((clojure.core.matrix.protocols.get_1d(a__$1,i) === clojure.core.matrix.protocols.get_1d(b,i))){
var G__33777 = (i + (1));
i = G__33777;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
if(cljs.core.vector_QMARK_(b)){
var n = acount;
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(i) : a__$1.call(null,i)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(i) : b.call(null,i))))){
var G__33786 = (i + (1));
i = G__33786;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
var sa = cljs.core.seq(a__$1);
var sb = clojure.core.matrix.protocols.get_major_slice_seq(b);
while(true){
if(sa){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals(cljs.core.first(sa),cljs.core.first(sb)))){
var G__33787 = cljs.core.next(sa);
var G__33788 = cljs.core.next(sb);
sa = G__33787;
sb = G__33788;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}

}
}
}
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2 = (function (m,a){
var m__$1 = this;
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale(m__$1,a);
} else {
var vec__33625 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33625,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33625,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$2,cljs.core._STAR_,a__$1);
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 = (function (m,a){
var m__$1 = this;
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m__$1));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale(m__$1,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
return cljs.core.vec((function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__33628(s__33629){
return (new cljs.core.LazySeq(null,(function (){
var s__33629__$1 = s__33629;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33629__$1);
if(temp__5735__auto__){
var s__33629__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33629__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__33629__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__33631 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__33630 = (0);
while(true){
if((i__33630 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__33630);
cljs.core.chunk_append(b__33631,(function (){var r = clojure.core.matrix.protocols.get_column(a,i);
return clojure.core.matrix.protocols.vector_dot(m__$1,r);
})());

var G__33794 = (i__33630 + (1));
i__33630 = G__33794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33631),clojure$core$matrix$impl$persistent_vector$iter__33628(cljs.core.chunk_rest(s__33629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33631),null);
}
} else {
var i = cljs.core.first(s__33629__$2);
return cljs.core.cons((function (){var r = clojure.core.matrix.protocols.get_column(a,i);
return clojure.core.matrix.protocols.vector_dot(m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__33628(cljs.core.rest(s__33629__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(a,(1))));
})());
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot(m__$1,a);
} else {
if((((mdims === (2))) && ((adims === (1))))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33624_SHARP_){
return clojure.core.matrix.protocols.vector_dot(p1__33624_SHARP_,a);
}),m__$1);
} else {
if((((mdims === (2))) && ((adims === (2))))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
return cljs.core.vec((function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__33632(s__33633){
return (new cljs.core.LazySeq(null,(function (){
var s__33633__$1 = s__33633;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33633__$1);
if(temp__5735__auto__){
var s__33633__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33633__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__33633__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__33635 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__33634 = (0);
while(true){
if((i__33634 < size__4581__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__33634);
cljs.core.chunk_append(b__33635,clojure.core.matrix.protocols.vector_dot(r,clojure.core.matrix.protocols.get_column(a,j)));

var G__33801 = (i__33634 + (1));
i__33634 = G__33801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33635),clojure$core$matrix$impl$persistent_vector$iter__33632(cljs.core.chunk_rest(s__33633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33635),null);
}
} else {
var j = cljs.core.first(s__33633__$2);
return cljs.core.cons(clojure.core.matrix.protocols.vector_dot(r,clojure.core.matrix.protocols.get_column(a,j)),clojure$core$matrix$impl$persistent_vector$iter__33632(cljs.core.rest(s__33633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(a,(1))));
})());
}),m__$1);
} else {
return clojure.core.matrix.protocols.inner_product(m__$1,a);

}
}
}
}
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 = (function (m,a){
var m__$1 = this;
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m__$1));
if(((0) === adims)){
return clojure.core.matrix.protocols.scale(m__$1,clojure.core.matrix.protocols.get_0d(a));
} else {
if((!((cljs.core.long$(cljs.core.last(clojure.core.matrix.protocols.get_shape(m__$1))) === cljs.core.long$(cljs.core.first(clojure.core.matrix.protocols.get_shape(a))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Incompatible shapes for inner product: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m__$1))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((1) === mdims)){
if(((1) === adims)){
return clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_multiply(m__$1,a));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.matrix_add,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (sl,x){
return clojure.core.matrix.protocols.scale(sl,x);
}),clojure.core.matrix.protocols.get_major_slice_seq(a),clojure.core.matrix.protocols.get_major_slice_seq(m__$1)));
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33636_SHARP_){
return clojure.core.matrix.protocols.inner_product(p1__33636_SHARP_,a);
}),clojure.core.matrix.protocols.get_major_slice_seq(m__$1));

}
}
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m__$1,(function (v){
return clojure.core.matrix.protocols.pre_scale(a,v);
}));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.matrix_multiply(m__$1,a);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.assign_BANG_(a,clojure.core.matrix.protocols.matrix_multiply(m__$1,a));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2((function (p1__33637_SHARP_){
return (p1__33637_SHARP_ * a);
}),m__$1);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2((function (p1__33638_SHARP_){
return (a * p1__33638_SHARP_);
}),m__$1);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$square$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,m__$1,m__$1);
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 = (function (m,i,j){
var m__$1 = this;
var i__$1 = cljs.core.long$(i);
var j__$1 = cljs.core.long$(j);
if((i__$1 === j__$1)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,i__$1,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(j__$1) : m__$1.call(null,j__$1))),j__$1,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i__$1) : m__$1.call(null,i__$1)));
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 = (function (m,i,factor){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,i,clojure.core.matrix.protocols.scale((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i) : m__$1.call(null,i)),factor));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 = (function (m,i,j,factor){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,i,clojure.core.matrix.protocols.matrix_add((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i) : m__$1.call(null,i)),clojure.core.matrix.protocols.matrix_multiply((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(j) : m__$1.call(null,j)),factor)));
}));
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__33640){
var vec__33641 = p__33640;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33641,(0),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33641,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__33639__auto__","x__33639__auto__",-1910317100,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,func,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33639__auto__","x__33639__auto__",-1910317100,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count(m__$1))){
return (1);
} else {
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0)))) + (1));
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
var pv__32818__auto__ = m__$1;
return ((((0) === cljs.core.count(pv__32818__auto__))) || (((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pv__32818__auto__,(0)))))));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.count(m__$1);
return cljs.core.cons(c,(((c > (0)))?clojure.core.matrix.protocols.get_shape(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0))):null));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
var x__$1 = cljs.core.long$(x);
if((x__$1 === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0)),(x__$1 - (1)));
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.long$(cljs.core.count(m__$1));
if((c === (0))){
return (0);
} else {
return (c * clojure.core.matrix.protocols.element_count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0))));
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_(m__$1)){
return m__$1;
} else {
var m__$2 = clojure.core.matrix.impl.persistent_vector.mapv_identity_check(clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
var m_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,m__$2);
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(m_shapes)),cljs.core.rest(m_shapes))){
return m__$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't convert to persistent vector array: inconsistent shape.",cljs.core.PersistentArrayMap.EMPTY);
}
}
}));
/**
 * Copy an arbitrary array to a region of a double array.
 * Assumes size represents the element count of the array, must be greater than zero.
 */
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_ = (function clojure$core$matrix$impl$persistent_vector$copy_to_double_array_BANG_(m,arr,off,size){
if(typeof m === 'number'){
if((size === (1))){
return (arr[off] = m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid shape while copying to double array",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core.vector_QMARK_(m)){
var m__$1 = m;
var ct = cljs.core.count(m__$1);
var skip = cljs.core.quot(size,ct);
var n__4666__auto__ = ct;
var i = (0);
while(true){
if((i < n__4666__auto__)){
var slc_33837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,i);
var G__33646_33838 = slc_33837;
var G__33647_33839 = arr;
var G__33648_33840 = (off + (i * skip));
var G__33649_33841 = skip;
(clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.cljs$core$IFn$_invoke$arity$4(G__33646_33838,G__33647_33839,G__33648_33840,G__33649_33841) : clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,G__33646_33838,G__33647_33839,G__33648_33840,G__33649_33841));

var G__33842 = (i + (1));
i = G__33842;
continue;
} else {
return null;
}
break;
}
} else {
var vals__25943__auto__ = cljs.core.seq(clojure.core.matrix.protocols.element_seq(m));
var i = cljs.core.long$((0));
while(true){
if(vals__25943__auto__){
var v = cljs.core.first(vals__25943__auto__);
(arr[(off + i)] = v);

var G__33843 = cljs.core.next(vals__25943__auto__);
var G__33844 = (i + (1));
vals__25943__auto__ = G__33843;
i = G__33844;
continue;
} else {
return null;
}
break;
}

}
}
});
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$(clojure.core.matrix.protocols.element_count(m__$1));
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(size);
var ct = cljs.core.count(m__$1);
if((size > (0))){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_(m__$1,arr,(0),size);
} else {
}

return arr;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
}));
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count(m);
if((!(cljs.core.vector_QMARK_(m)))){
var vals__25943__auto___33845 = cljs.core.seq(clojure.core.matrix.protocols.element_seq(m));
var i_33846 = cljs.core.long$((0));
while(true){
if(vals__25943__auto___33845){
var v_33847 = cljs.core.first(vals__25943__auto___33845);
(arr[(off + i_33846)] = v_33847);

var G__33848 = cljs.core.next(vals__25943__auto___33845);
var G__33849 = (i_33846 + (1));
vals__25943__auto___33845 = G__33848;
i_33846 = G__33849;
continue;
} else {
}
break;
}
} else {
if((((size === ct)) && ((!(cljs.core.vector_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(m,(0),null))))))){
var n__4666__auto___33850 = size;
var i_33851 = (0);
while(true){
if((i_33851 < n__4666__auto___33850)){
(arr[(off + i_33851)] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i_33851));

var G__33852 = (i_33851 + (1));
i_33851 = G__33852;
continue;
} else {
}
break;
}
} else {
var skip_33853 = cljs.core.quot(size,ct);
var n__4666__auto___33854 = ct;
var i_33855 = (0);
while(true){
if((i_33855 < n__4666__auto___33854)){
var G__33650_33856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i_33855);
var G__33651_33857 = arr;
var G__33652_33858 = (off + (i_33855 * skip_33853));
var G__33653_33859 = skip_33853;
(clojure.core.matrix.impl.persistent_vector.copy_to_object_array.cljs$core$IFn$_invoke$arity$4 ? clojure.core.matrix.impl.persistent_vector.copy_to_object_array.cljs$core$IFn$_invoke$arity$4(G__33650_33856,G__33651_33857,G__33652_33858,G__33653_33859) : clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,G__33650_33856,G__33651_33857,G__33652_33858,G__33653_33859));

var G__33860 = (i_33855 + (1));
i_33855 = G__33860;
continue;
} else {
}
break;
}

}
}

return arr;
});
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$(clojure.core.matrix.protocols.element_count(m__$1));
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(size);
var ct = cljs.core.count(m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_object_array(m__$1,arr,(0),size);

return arr;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 = (function (m){
var m__$1 = this;
return null;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count(m__$1))){
return null;
} else {
if((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0)))) >= (1))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));
} else {
return m__$1;

}
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2(f,m__$1);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__33656 = clojure.core.matrix.protocols.broadcast_same_shape(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33656,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33656,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(f,m__$2,a__$1);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons(m__$1,cljs.core.cons(a,more));
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__4185__auto__ = clojure.core.matrix.protocols.common_shape(shapes);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33654_SHARP_){
return clojure.core.matrix.protocols.broadcast(p1__33654_SHARP_,sh);
}),arrays);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__33659_33861 = cljs.core.seq(m__$1);
var chunk__33660_33862 = null;
var count__33661_33863 = (0);
var i__33662_33864 = (0);
while(true){
if((i__33662_33864 < count__33661_33863)){
var s_33865 = chunk__33660_33862.cljs$core$IIndexed$_nth$arity$2(null,i__33662_33864);
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(s_33865,f);


var G__33866 = seq__33659_33861;
var G__33867 = chunk__33660_33862;
var G__33868 = count__33661_33863;
var G__33869 = (i__33662_33864 + (1));
seq__33659_33861 = G__33866;
chunk__33660_33862 = G__33867;
count__33661_33863 = G__33868;
i__33662_33864 = G__33869;
continue;
} else {
var temp__5735__auto___33870 = cljs.core.seq(seq__33659_33861);
if(temp__5735__auto___33870){
var seq__33659_33871__$1 = temp__5735__auto___33870;
if(cljs.core.chunked_seq_QMARK_(seq__33659_33871__$1)){
var c__4609__auto___33872 = cljs.core.chunk_first(seq__33659_33871__$1);
var G__33873 = cljs.core.chunk_rest(seq__33659_33871__$1);
var G__33874 = c__4609__auto___33872;
var G__33875 = cljs.core.count(c__4609__auto___33872);
var G__33876 = (0);
seq__33659_33861 = G__33873;
chunk__33660_33862 = G__33874;
count__33661_33863 = G__33875;
i__33662_33864 = G__33876;
continue;
} else {
var s_33877 = cljs.core.first(seq__33659_33871__$1);
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(s_33877,f);


var G__33878 = cljs.core.next(seq__33659_33871__$1);
var G__33879 = null;
var G__33880 = (0);
var G__33881 = (0);
seq__33659_33861 = G__33878;
chunk__33660_33862 = G__33879;
count__33661_33863 = G__33880;
i__33662_33864 = G__33881;
continue;
}
} else {
}
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4666__auto___33882 = cljs.core.count(m__$1);
var i_33883 = (0);
while(true){
if((i_33883 < n__4666__auto___33882)){
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_33883) : m__$1.call(null,i_33883)),f,clojure.core.matrix.protocols.get_major_slice(a,i_33883));

var G__33884 = (i_33883 + (1));
i_33883 = G__33884;
continue;
} else {
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4666__auto___33885 = cljs.core.count(m__$1);
var i_33886 = (0);
while(true){
if((i_33886 < n__4666__auto___33885)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(clojure.core.matrix.protocols.element_map_BANG_,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_33886) : m__$1.call(null,i_33886)),f,clojure.core.matrix.protocols.get_major_slice(a,i_33886),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i_33886,n__4666__auto___33885,m__$1){
return (function (p1__33655_SHARP_){
return clojure.core.matrix.protocols.get_major_slice(p1__33655_SHARP_,i_33886);
});})(i_33886,n__4666__auto___33885,m__$1))
,more));

var G__33887 = (i_33886 + (1));
i_33886 = G__33887;
continue;
} else {
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.element_seq(m__$1));
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,clojure.core.matrix.protocols.element_seq(m__$1));
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(ms__$1));
if(((0) === dims)){
var G__33682 = cljs.core.PersistentVector.EMPTY;
var G__33683 = (function (){var x__25978__auto__ = ms__$1;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33682,G__33683) : f.call(null,G__33682,G__33683));
} else {
if(((1) === dims)){
return cljs.core.vec((function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__33684(s__33685){
return (new cljs.core.LazySeq(null,(function (){
var s__33685__$1 = s__33685;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33685__$1);
if(temp__5735__auto__){
var s__33685__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33685__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__33685__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__33687 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__33686 = (0);
while(true){
if((i__33686 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__33686);
cljs.core.chunk_append(b__33687,(function (){var G__33688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null);
var G__33689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33688,G__33689) : f.call(null,G__33688,G__33689));
})());

var G__33890 = (i__33686 + (1));
i__33686 = G__33890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33687),clojure$core$matrix$impl$persistent_vector$iter__33684(cljs.core.chunk_rest(s__33685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33687),null);
}
} else {
var i = cljs.core.first(s__33685__$2);
return cljs.core.cons((function (){var G__33690 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null);
var G__33691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33690,G__33691) : f.call(null,G__33690,G__33691));
})(),clojure$core$matrix$impl$persistent_vector$iter__33684(cljs.core.rest(s__33685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)));
})());
} else {
return cljs.core.vec((function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$persistent_vector$iter__33692(s__33693){
return (new cljs.core.LazySeq(null,(function (){
var s__33693__$1 = s__33693;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33693__$1);
if(temp__5735__auto__){
var s__33693__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33693__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__33693__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__33695 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__33694 = (0);
while(true){
if((i__33694 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__33694);
cljs.core.chunk_append(b__33695,clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i),((function (i__33694,i,c__4580__auto__,size__4581__auto__,b__33695,s__33693__$2,temp__5735__auto__,dims,ms__$1){
return (function (p1__33663_SHARP_,p2__33664_SHARP_){
var G__33696 = cljs.core.cons(i,p1__33663_SHARP_);
var G__33697 = p2__33664_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33696,G__33697) : f.call(null,G__33696,G__33697));
});})(i__33694,i,c__4580__auto__,size__4581__auto__,b__33695,s__33693__$2,temp__5735__auto__,dims,ms__$1))
));

var G__33891 = (i__33694 + (1));
i__33694 = G__33891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33695),clojure$core$matrix$impl$persistent_vector$iter__33692(cljs.core.chunk_rest(s__33693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33695),null);
}
} else {
var i = cljs.core.first(s__33693__$2);
return cljs.core.cons(clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i),((function (i,s__33693__$2,temp__5735__auto__,dims,ms__$1){
return (function (p1__33663_SHARP_,p2__33664_SHARP_){
var G__33698 = cljs.core.cons(i,p1__33663_SHARP_);
var G__33699 = p2__33664_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33698,G__33699) : f.call(null,G__33698,G__33699));
});})(i,s__33693__$2,temp__5735__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__33692(cljs.core.rest(s__33693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)));
})());

}
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var as__$1 = clojure.core.matrix.protocols.broadcast_like(ms__$1,as);
var dima = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(as__$1));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(ms__$1))){
if((dima > (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("mapping with array of higher dimensionality?",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((((1) === dima)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.dimension_count(ms__$1,(0)),clojure.core.matrix.protocols.dimension_count(as__$1,(0)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Incompatible vector sizes",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((0) === dima)){
var v = (function (){var x__25978__auto__ = as__$1;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})();
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33665_SHARP_,p2__33666_SHARP_){
var G__33700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33665_SHARP_], null);
var G__33701 = p2__33666_SHARP_;
var G__33702 = v;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__33700,G__33701,G__33702) : f.call(null,G__33700,G__33701,G__33702));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function() { 
var G__33892__delegate = function (p1__33667_SHARP_,rest__33668_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33667_SHARP_], null),rest__33668_SHARP_);
};
var G__33892 = function (p1__33667_SHARP_,var_args){
var rest__33668_SHARP_ = null;
if (arguments.length > 1) {
var G__33893__i = 0, G__33893__a = new Array(arguments.length -  1);
while (G__33893__i < G__33893__a.length) {G__33893__a[G__33893__i] = arguments[G__33893__i + 1]; ++G__33893__i;}
  rest__33668_SHARP_ = new cljs.core.IndexedSeq(G__33893__a,0,null);
} 
return G__33892__delegate.call(this,p1__33667_SHARP_,rest__33668_SHARP_);};
G__33892.cljs$lang$maxFixedArity = 1;
G__33892.cljs$lang$applyTo = (function (arglist__33894){
var p1__33667_SHARP_ = cljs.core.first(arglist__33894);
var rest__33668_SHARP_ = cljs.core.rest(arglist__33894);
return G__33892__delegate(p1__33667_SHARP_,rest__33668_SHARP_);
});
G__33892.cljs$core$IFn$_invoke$arity$variadic = G__33892__delegate;
return G__33892;
})()
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq(as__$1));
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$3(m,(function() { 
var G__33895__delegate = function (p1__33669_SHARP_,rest__33670_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__33669_SHARP_),rest__33670_SHARP_);
};
var G__33895 = function (p1__33669_SHARP_,var_args){
var rest__33670_SHARP_ = null;
if (arguments.length > 1) {
var G__33896__i = 0, G__33896__a = new Array(arguments.length -  1);
while (G__33896__i < G__33896__a.length) {G__33896__a[G__33896__i] = arguments[G__33896__i + 1]; ++G__33896__i;}
  rest__33670_SHARP_ = new cljs.core.IndexedSeq(G__33896__a,0,null);
} 
return G__33895__delegate.call(this,p1__33669_SHARP_,rest__33670_SHARP_);};
G__33895.cljs$lang$maxFixedArity = 1;
G__33895.cljs$lang$applyTo = (function (arglist__33897){
var p1__33669_SHARP_ = cljs.core.first(arglist__33897);
var rest__33670_SHARP_ = cljs.core.rest(arglist__33897);
return G__33895__delegate(p1__33669_SHARP_,rest__33670_SHARP_);
});
G__33895.cljs$core$IFn$_invoke$arity$variadic = G__33895__delegate;
return G__33895;
})()
,a);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,clojure.core.matrix.protocols.get_major_slice_seq(as__$1));
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(ms__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv,(function() { 
var G__33898__delegate = function (p1__33671_SHARP_,rest__33672_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33671_SHARP_], null),rest__33672_SHARP_);
};
var G__33898 = function (p1__33671_SHARP_,var_args){
var rest__33672_SHARP_ = null;
if (arguments.length > 1) {
var G__33899__i = 0, G__33899__a = new Array(arguments.length -  1);
while (G__33899__i < G__33899__a.length) {G__33899__a[G__33899__i] = arguments[G__33899__i + 1]; ++G__33899__i;}
  rest__33672_SHARP_ = new cljs.core.IndexedSeq(G__33899__a,0,null);
} 
return G__33898__delegate.call(this,p1__33671_SHARP_,rest__33672_SHARP_);};
G__33898.cljs$lang$maxFixedArity = 1;
G__33898.cljs$lang$applyTo = (function (arglist__33900){
var p1__33671_SHARP_ = cljs.core.first(arglist__33900);
var rest__33672_SHARP_ = cljs.core.rest(arglist__33900);
return G__33898__delegate(p1__33671_SHARP_,rest__33672_SHARP_);
});
G__33898.cljs$core$IFn$_invoke$arity$variadic = G__33898__delegate;
return G__33898;
})()
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv,(function() { 
var G__33901__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$4(m,(function() { 
var G__33902__delegate = function (p1__33673_SHARP_,rest__33674_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__33673_SHARP_),rest__33674_SHARP_);
};
var G__33902 = function (p1__33673_SHARP_,var_args){
var rest__33674_SHARP_ = null;
if (arguments.length > 1) {
var G__33904__i = 0, G__33904__a = new Array(arguments.length -  1);
while (G__33904__i < G__33904__a.length) {G__33904__a[G__33904__i] = arguments[G__33904__i + 1]; ++G__33904__i;}
  rest__33674_SHARP_ = new cljs.core.IndexedSeq(G__33904__a,0,null);
} 
return G__33902__delegate.call(this,p1__33673_SHARP_,rest__33674_SHARP_);};
G__33902.cljs$lang$maxFixedArity = 1;
G__33902.cljs$lang$applyTo = (function (arglist__33905){
var p1__33673_SHARP_ = cljs.core.first(arglist__33905);
var rest__33674_SHARP_ = cljs.core.rest(arglist__33905);
return G__33902__delegate(p1__33673_SHARP_,rest__33674_SHARP_);
});
G__33902.cljs$core$IFn$_invoke$arity$variadic = G__33902__delegate;
return G__33902;
})()
,a,mr);
};
var G__33901 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__33906__i = 0, G__33906__a = new Array(arguments.length -  3);
while (G__33906__i < G__33906__a.length) {G__33906__a[G__33906__i] = arguments[G__33906__i + 3]; ++G__33906__i;}
  mr = new cljs.core.IndexedSeq(G__33906__a,0,null);
} 
return G__33901__delegate.call(this,i,m,a,mr);};
G__33901.cljs$lang$maxFixedArity = 3;
G__33901.cljs$lang$applyTo = (function (arglist__33907){
var i = cljs.core.first(arglist__33907);
arglist__33907 = cljs.core.next(arglist__33907);
var m = cljs.core.first(arglist__33907);
arglist__33907 = cljs.core.next(arglist__33907);
var a = cljs.core.first(arglist__33907);
var mr = cljs.core.rest(arglist__33907);
return G__33901__delegate(i,m,a,mr);
});
G__33901.cljs$core$IFn$_invoke$arity$variadic = G__33901__delegate;
return G__33901;
})()
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0));
}
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__4666__auto___33908 = cljs.core.count(m__$1);
var i_33909 = (0);
while(true){
if((i_33909 < n__4666__auto___33908)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_33909) : m__$1.call(null,i_33909)),((function (i_33909,n__4666__auto___33908,m__$1){
return (function (p1__33675_SHARP_,p2__33676_SHARP_){
var G__33703 = cljs.core.cons(i_33909,p1__33675_SHARP_);
var G__33704 = p2__33676_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__33703,G__33704) : f.call(null,G__33703,G__33704));
});})(i_33909,n__4666__auto___33908,m__$1))
);

var G__33910 = (i_33909 + (1));
i_33909 = G__33910;
continue;
} else {
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4666__auto___33911 = cljs.core.count(m__$1);
var i_33912 = (0);
while(true){
if((i_33912 < n__4666__auto___33911)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_33912) : m__$1.call(null,i_33912)),((function (i_33912,n__4666__auto___33911,m__$1){
return (function() { 
var G__33913__delegate = function (p1__33677_SHARP_,rest__33678_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i_33912,p1__33677_SHARP_),rest__33678_SHARP_);
};
var G__33913 = function (p1__33677_SHARP_,var_args){
var rest__33678_SHARP_ = null;
if (arguments.length > 1) {
var G__33914__i = 0, G__33914__a = new Array(arguments.length -  1);
while (G__33914__i < G__33914__a.length) {G__33914__a[G__33914__i] = arguments[G__33914__i + 1]; ++G__33914__i;}
  rest__33678_SHARP_ = new cljs.core.IndexedSeq(G__33914__a,0,null);
} 
return G__33913__delegate.call(this,p1__33677_SHARP_,rest__33678_SHARP_);};
G__33913.cljs$lang$maxFixedArity = 1;
G__33913.cljs$lang$applyTo = (function (arglist__33915){
var p1__33677_SHARP_ = cljs.core.first(arglist__33915);
var rest__33678_SHARP_ = cljs.core.rest(arglist__33915);
return G__33913__delegate(p1__33677_SHARP_,rest__33678_SHARP_);
});
G__33913.cljs$core$IFn$_invoke$arity$variadic = G__33913__delegate;
return G__33913;
})()
;})(i_33912,n__4666__auto___33911,m__$1))
,clojure.core.matrix.protocols.get_major_slice(a,i_33912));

var G__33916 = (i_33912 + (1));
i_33912 = G__33916;
continue;
} else {
}
break;
}

return m__$1;
}));

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4666__auto___33917 = cljs.core.count(m__$1);
var i_33918 = (0);
while(true){
if((i_33918 < n__4666__auto___33917)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(clojure.core.matrix.protocols.element_map_indexed_BANG_,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_33918) : m__$1.call(null,i_33918)),((function (i_33918,n__4666__auto___33917,m__$1){
return (function() { 
var G__33919__delegate = function (p1__33679_SHARP_,rest__33680_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i_33918,p1__33679_SHARP_),rest__33680_SHARP_);
};
var G__33919 = function (p1__33679_SHARP_,var_args){
var rest__33680_SHARP_ = null;
if (arguments.length > 1) {
var G__33920__i = 0, G__33920__a = new Array(arguments.length -  1);
while (G__33920__i < G__33920__a.length) {G__33920__a[G__33920__i] = arguments[G__33920__i + 1]; ++G__33920__i;}
  rest__33680_SHARP_ = new cljs.core.IndexedSeq(G__33920__a,0,null);
} 
return G__33919__delegate.call(this,p1__33679_SHARP_,rest__33680_SHARP_);};
G__33919.cljs$lang$maxFixedArity = 1;
G__33919.cljs$lang$applyTo = (function (arglist__33921){
var p1__33679_SHARP_ = cljs.core.first(arglist__33921);
var rest__33680_SHARP_ = cljs.core.rest(arglist__33921);
return G__33919__delegate(p1__33679_SHARP_,rest__33680_SHARP_);
});
G__33919.cljs$core$IFn$_invoke$arity$variadic = G__33919__delegate;
return G__33919;
})()
;})(i_33918,n__4666__auto___33917,m__$1))
,clojure.core.matrix.protocols.get_major_slice(a,i_33918),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i_33918,n__4666__auto___33917,m__$1){
return (function (p1__33681_SHARP_){
return clojure.core.matrix.protocols.get_major_slice(p1__33681_SHARP_,i_33918);
});})(i_33918,n__4666__auto___33917,m__$1))
,more));

var G__33922 = (i_33918 + (1));
i_33918 = G__33922;
continue;
} else {
}
break;
}

return m__$1;
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$select$arity$2 = (function (a,args){
var a__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),clojure.core.matrix.protocols.dimensionality(a__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33705_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,p1__33705_SHARP_);
}),cljs.core.first(args)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array dimension does not match length of args",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__33706_SHARP_){
return clojure.core.matrix.protocols.select(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,p1__33706_SHARP_),cljs.core.next(args));
}),cljs.core.first(args)));
}
}));
(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
}));
clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));

//# sourceMappingURL=clojure.core.matrix.impl.persistent_vector.js.map
