goog.provide('clojure.core.matrix');
goog.require('cljs.core');
goog.require('clojure.core.matrix.impl.defaults');
goog.require('clojure.core.matrix.impl.persistent_vector');
goog.require('clojure.core.matrix.impl.sequence');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.mathsops');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.utils');
clojure.core.matrix.class$ = cljs.core.type;

/**
 * Constructs a new n-dimensional array from the given data.
 * 
 * This function will examine the data in order to construct an array of the appropriate shape.
 * 
 * The data may be in one of the following forms:
 * - A valid existing array (which will be converted to the implementation)
 * - Nested sequences of scalar values, e.g. Clojure vectors (must have regular shape)
 * - A sequence of slices, each of which must be valid array data
 * - A single scalar value, which will be wrapped or coerced as necessary for the implementation
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * If the implementation does not support the shape or type of data provided, may either
 * create an array using a different implementation on a best-efforts basis or
 * alternatively throw an error. This behaviour is implementation-specific.
 */
clojure.core.matrix.array = (function clojure$core$matrix$array(var_args){
var G__41760 = arguments.length;
switch (G__41760) {
case 1:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__4185__auto__ = clojure.core.matrix.protocols.construct_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,data);
}
}));

(clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__4185__auto__ = clojure.core.matrix.protocols.construct_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,data);
}
}));

(clojure.core.matrix.array.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a new 2-dimensional matrix from the given numerical data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing numerical array
 * - Nested sequences of scalar values, e.g. Clojure vectors
 * - A sequence of slices, each of which must be valid matrix data
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * `matrix` works as a synonym for `array`
 */
clojure.core.matrix.matrix = (function clojure$core$matrix$matrix(var_args){
var G__41766 = arguments.length;
switch (G__41766) {
case 1:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1(data);
}));

(clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2(implementation,data);
}));

(clojure.core.matrix.matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a new 1-dimensional integer index from given data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing index
 * - A 1D array of integer values
 * - A sequence of integer values
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation* to produce the index object.
 * 
 * If the implementation does not support its own native index types, will return a
 * valid index from a default implementation.
 */
clojure.core.matrix.index = (function clojure$core$matrix$index(var_args){
var G__41771 = arguments.length;
switch (G__41771) {
case 1:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__4185__auto__ = clojure.core.matrix.protocols.index_coerce((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce(cljs.core.PersistentVector.EMPTY,data);
}
}));

(clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__4185__auto__ = clojure.core.matrix.protocols.index_coerce((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce(cljs.core.PersistentVector.EMPTY,data);
}
}));

(clojure.core.matrix.index.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a new zero-filled numerical vector with the given length.
 * 
 * Implementations are encouraged to return immutable vectors or sparse vectors
 * for efficency whre available.
 */
clojure.core.matrix.zero_vector = (function clojure$core$matrix$zero_vector(var_args){
var G__41779 = arguments.length;
switch (G__41779) {
case 1:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),length);
}));

(clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),length);
}));

(clojure.core.matrix.zero_vector.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a new vector with the given length.
 * New matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable vectors, then the new vector will be fully mutable.
 */
clojure.core.matrix.new_vector = (function clojure$core$matrix$new_vector(var_args){
var G__41793 = arguments.length;
switch (G__41793) {
case 1:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),length);
}));

(clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),length);
}));

(clojure.core.matrix.new_vector.cljs$lang$maxFixedArity = 2);

/**
 * Returns a zero-filled numerical matrix with the given dimensions, for the given implementation or the current
 * implementation if not specified.
 * 
 * May produce a lightweight immutable zero matrix if supported by the implementation.
 */
clojure.core.matrix.zero_matrix = (function clojure$core$matrix$zero_matrix(var_args){
var G__41804 = arguments.length;
switch (G__41804) {
case 2:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),rows,columns);
}));

(clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),rows,columns);
}));

(clojure.core.matrix.zero_matrix.cljs$lang$maxFixedArity = 3);

/**
 * Constructs a new 2D array (matrix) with the given dimensions.
 * The new matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_matrix = (function clojure$core$matrix$new_matrix(var_args){
var G__41815 = arguments.length;
switch (G__41815) {
case 2:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),rows,columns);
}));

(clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),rows,columns);
}));

(clojure.core.matrix.new_matrix.cljs$lang$maxFixedArity = 3);

/**
 * Creates a new zero-filled numerical array with the given shape.
 */
clojure.core.matrix.zero_array = (function clojure$core$matrix$zero_array(var_args){
var G__41818 = arguments.length;
switch (G__41818) {
case 1:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__4185__auto__ = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
}
}));

(clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__4185__auto__ = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),shape);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
}
}));

(clojure.core.matrix.zero_array.cljs$lang$maxFixedArity = 2);

/**
 * Creates a new array with the given shape.
 * New array will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_array = (function clojure$core$matrix$new_array(var_args){
var G__41833 = arguments.length;
switch (G__41833) {
case 1:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__4185__auto__ = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
}
}));

(clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__4185__auto__ = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),shape);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = clojure.core.matrix.protocols.new_matrix_nd((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
}
}
}));

(clojure.core.matrix.new_array.cljs$lang$maxFixedArity = 2);

/**
 * Creates a new sparse array with the given shape.
 * New array will contain default values as defined by the implementation (usually zero).
 * If the implementation supports mutable sparse matrices, then the new matrix should be fully mutable.
 */
clojure.core.matrix.new_sparse_array = (function clojure$core$matrix$new_sparse_array(var_args){
var G__41850 = arguments.length;
switch (G__41850) {
case 1:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return clojure.core.matrix.protocols.new_sparse_array((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape);
}));

(clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__4185__auto__ = clojure.core.matrix.protocols.new_sparse_array((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),shape);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.implementation_key(implementation))," does not support sparse arrays of shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.new_sparse_array.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new mutable scalar array containing the scalar value zero.
 */
clojure.core.matrix.new_scalar_array = (function clojure$core$matrix$new_scalar_array(var_args){
var G__41861 = arguments.length;
switch (G__41861) {
case 0:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
}));

(clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (implementation){
var implementation__$1 = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation));
return clojure.core.matrix.protocols.new_scalar_array.cljs$core$IFn$_invoke$arity$1(implementation__$1);
}));

(clojure.core.matrix.new_scalar_array.cljs$lang$maxFixedArity = 1);

/**
 * Creates a new zero-dimensional array containing the specified scalar value.
 */
clojure.core.matrix.scalar_array = (function clojure$core$matrix$scalar_array(var_args){
var G__41867 = arguments.length;
switch (G__41867) {
case 1:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (value){
return clojure.core.matrix.protocols.new_scalar_array.cljs$core$IFn$_invoke$arity$2((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),value);
}));

(clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,value){
return clojure.core.matrix.protocols.new_scalar_array.cljs$core$IFn$_invoke$arity$2((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),value);
}));

(clojure.core.matrix.scalar_array.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a row matrix with the given data. The returned matrix is a 2D 1xN row matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.row_matrix = (function clojure$core$matrix$row_matrix(var_args){
var G__41882 = arguments.length;
switch (G__41882) {
case 1:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.row_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
}));

(clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.row_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
}));

(clojure.core.matrix.row_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a column matrix with the given data. The returned matrix is a 2D Nx1 column matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.column_matrix = (function clojure$core$matrix$column_matrix(var_args){
var G__41888 = arguments.length;
switch (G__41888) {
case 1:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.column_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
}));

(clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.column_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
}));

(clojure.core.matrix.column_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a 2D identity matrix with the given number of rows.
 * 
 * Identity matrices constructed with this function may not be fully mutable because they may be
 * implemented with a specialised identity matrix type. Use (mutable (identity-matrix ...)) if you
 * need to guarantee a mutable matrix.
 */
clojure.core.matrix.identity_matrix = (function clojure$core$matrix$identity_matrix(var_args){
var G__41894 = arguments.length;
switch (G__41894) {
case 1:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1 = (function (dims){
return clojure.core.matrix.protocols.identity_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),dims);
}));

(clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,dims){
return clojure.core.matrix.protocols.identity_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),dims);
}));

(clojure.core.matrix.identity_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a permutation matrix for a given permutation vector. The permutation vector should
 * contain a distinct set of integers 0...n-1, representing the re-ordering performed by
 * the permutation matrix.
 */
clojure.core.matrix.permutation_matrix = (function clojure$core$matrix$permutation_matrix(var_args){
var G__41898 = arguments.length;
switch (G__41898) {
case 1:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1 = (function (permutation){
return clojure.core.matrix.protocols.permutation_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),permutation);
}));

(clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,permutation){
return clojure.core.matrix.protocols.permutation_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),permutation);
}));

(clojure.core.matrix.permutation_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a block diagonal matrix for a given vector of 2D square matrices and arranges
 *   the matrices along the main diagonal of the 2D matrix
 */
clojure.core.matrix.block_diagonal_matrix = (function clojure$core$matrix$block_diagonal_matrix(var_args){
var G__41902 = arguments.length;
switch (G__41902) {
case 1:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),blocks);
}));

(clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),blocks);
}));

(clojure.core.matrix.block_diagonal_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a fully mutable copy of the given array data. 
 * 
 * If the current implementation does not support mutable matrices, will return a mutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.mutable = (function clojure$core$matrix$mutable(var_args){
var G__41912 = arguments.length;
switch (G__41912) {
case 1:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1 = (function (data){
try{var or__4185__auto__ = clojure.core.matrix.protocols.mutable_matrix(data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
}
}catch (e41919){if((e41919 instanceof clojure.core.matrix.Throwable)){
var t = e41919;
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(data);
} else {
throw e41919;

}
}}));

(clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var imp = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation));
var r = clojure.core.matrix.protocols.construct_matrix(imp,data);
var or__4185__auto__ = (function (){var and__4174__auto__ = r;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.core.matrix.protocols.ensure_mutable(r);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = clojure.core.matrix.impl.defaults.construct_mutable_matrix(data);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to create mutable array for implementation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.implementation_key(imp))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
}));

(clojure.core.matrix.mutable.cljs$lang$maxFixedArity = 2);

/**
 * Returns an immutable array containing the given array data.
 * 
 * May return the same array if it is already immutable.
 * 
 * If the implementation does not support immutable matrices, will return an immutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.immutable = (function clojure$core$matrix$immutable(data){
var or__4185__auto__ = clojure.core.matrix.protocols.immutable_matrix(data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (clojure.core.matrix.to_nested_vectors.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.to_nested_vectors.cljs$core$IFn$_invoke$arity$1(data) : clojure.core.matrix.to_nested_vectors.call(null,data));
}
});
/**
 * Checks if an array is mutable, and if not converts to a new mutable array. Guarantees
 * that the result will be mutable, but may not be the same type as the original array.
 */
clojure.core.matrix.ensure_mutable = (function clojure$core$matrix$ensure_mutable(m){
return clojure.core.matrix.protocols.ensure_mutable(m);
});
/**
 * Constructs a 2D diagonal matrix with the given numerical values on the main diagonal.
 * All off-diagonal elements will be zero, and diagonal-values may be a vector or any
 *   Clojure sequence of values.
 * 
 * Diagonal matrices constructed this way may use specialised storage formats, hence may not be fully mutable.
 * Use (mutable (diagonal-matrix ...)) if you need to guarantee a mutable matrix.
 */
clojure.core.matrix.diagonal_matrix = (function clojure$core$matrix$diagonal_matrix(var_args){
var G__41927 = arguments.length;
switch (G__41927) {
case 1:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),diagonal_values);
}));

(clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(implementation),diagonal_values);
}));

(clojure.core.matrix.diagonal_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Creates a array with the specified shape, and each element specified by (f i j k...)
 * Where i, j, k... are the index positions of each element in the matrix
 */
clojure.core.matrix.compute_matrix = (function clojure$core$matrix$compute_matrix(var_args){
var G__41936 = arguments.length;
switch (G__41936) {
case 2:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2 = (function (shape,f){
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),shape,f);
}));

(clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,shape,f){
var m = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation));
return clojure.core.matrix.protocols.compute_matrix(m,shape,f);
}));

(clojure.core.matrix.compute_matrix.cljs$lang$maxFixedArity = 3);

/**
 * Creates a sparse array with the given data, using a specified implementation
 *   or the current implementation if not specified.
 * 
 *   Throws an exception if creation of a sparse array is not possible
 */
clojure.core.matrix.sparse_array = (function clojure$core$matrix$sparse_array(var_args){
var G__41941 = arguments.length;
switch (G__41941) {
case 1:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),data);
}));

(clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__4185__auto__ = clojure.core.matrix.protocols.sparse_coerce((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation)),data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sparse implementation not available",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.sparse_array.cljs$lang$maxFixedArity = 2);

/**
 * Creates a sparse matrix with the given data, using a specified implementation
 *   or the current implementation if not specified. Sparse matrices are required to store
 *   a M*N matrix with E non-zero elements in approx O(M+N+E) space or less.
 * 
 *   Throws an exception if creation of a sparse matrix is not possible.
 * 
 *   `sparse-matrix` wqorks as a synonym for `sparse-array`.
 */
clojure.core.matrix.sparse_matrix = (function clojure$core$matrix$sparse_matrix(var_args){
var G__41949 = arguments.length;
switch (G__41949) {
case 1:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1(data);
}));

(clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2(implementation,data);
}));

(clojure.core.matrix.sparse_matrix.cljs$lang$maxFixedArity = 2);

/**
 * Coerces an array to a sparse format if possible. Sparse arrays are expected to
 * minimise space usage for zero elements.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already sparse.
 */
clojure.core.matrix.sparse = (function clojure$core$matrix$sparse(var_args){
var G__41957 = arguments.length;
switch (G__41957) {
case 1:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.sparse(data);
}));

(clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var implementation__$1 = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(implementation) : clojure.core.matrix.implementation_check.call(null,implementation));
var or__4185__auto__ = clojure.core.matrix.protocols.sparse_coerce(implementation__$1,data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(implementation__$1,data);
}
}));

(clojure.core.matrix.sparse.cljs$lang$maxFixedArity = 2);

/**
 * Coerces an array to a dense format if possible. Dense arrays are expected to
 * allocate contiguous storage space for all elements. Either row-major or column-major
 * storage may be alloacted, depending on the implementation.
 * 
 * 'dense' should not be used with very large arrays, and may throw an OutOfMemoryError
 *  if the dense array is too large to fit in available memory.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already dense.
 */
clojure.core.matrix.dense = (function clojure$core$matrix$dense(var_args){
var G__41962 = arguments.length;
switch (G__41962) {
case 1:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.dense(data);
}));

(clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__4185__auto__ = clojure.core.matrix.protocols.dense_coerce(implementation,data);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(implementation,data);
}
}));

(clojure.core.matrix.dense.cljs$lang$maxFixedArity = 2);

/**
 * Coerces an array into a native format array if possible. Native arrays may offer
 * superior performance for some operations, depending on the implementation.
 * Returns nil if no appropriate native format exists.
 */
clojure.core.matrix.native$ = (function clojure$core$matrix$native(var_args){
var G__41964 = arguments.length;
switch (G__41964) {
case 1:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1 = (function (a){
var or__4185__auto__ = clojure.core.matrix.protocols.native$(a);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),a);
}
}));

(clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2 = (function (impl,a){
var a__$1 = clojure.core.matrix.protocols.coerce_param(impl,a);
return clojure.core.matrix.protocols.native$(a__$1);
}));

(clojure.core.matrix.native$.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the array is in a native format.
 * 
 * Native formats are implementation defined, and may use non-Java resources (e.g. GPU memory).
 */
clojure.core.matrix.native_QMARK_ = (function clojure$core$matrix$native_QMARK_(a){
return clojure.core.matrix.protocols.native_QMARK_(a);
});
/**
 * Returns true if the implementation for a given matrix supports a specific dimensionality, i.e.
 * can natively create and manipulate matrices with the given number of dimensions
 */
clojure.core.matrix.supports_dimensionality_QMARK_ = (function clojure$core$matrix$supports_dimensionality_QMARK_(m,dimension_count){
var m__$1 = (clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1(m) : clojure.core.matrix.implementation_check.call(null,m));
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_(m__$1,dimension_count);
});
/**
 * Returns true if the implementation supports creation of matrices with a specific shape.
 */
clojure.core.matrix.supports_shape_QMARK_ = (function clojure$core$matrix$supports_shape_QMARK_(m,shape){
var m__$1 = (((m instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(m):m);
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_(m__$1,cljs.core.count(shape));
});
/**
 * Assigns a new value to an array. Sets the values of the target element-wise, broadcasting where necessary.
 * Returns the mutated array. The new value may be either a scalar or a array of compatible (maybe smaller) shape.
 */
clojure.core.matrix.assign_BANG_ = (function clojure$core$matrix$assign_BANG_(dest,src){
clojure.core.matrix.protocols.assign_BANG_(dest,src);

return dest;
});
/**
 * Assigns values to a destination core.matrix array from a Java array, in element-wise order. 
 * The element type of Java array must be compatible.
 * Returns the mutated core.matrix array
 */
clojure.core.matrix.assign_array_BANG_ = (function clojure$core$matrix$assign_array_BANG_(var_args){
var G__41966 = arguments.length;
switch (G__41966) {
case 2:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dest,java_array){
clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2(dest,java_array);

return dest;
}));

(clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,java_array,offset){
clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$4(dest,java_array,offset,clojure.core.matrix.protocols.element_count(dest));

return dest;
}));

(clojure.core.matrix.assign_array_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Copies array src element-wise, broadcasting to fill the whole shape of m.
 * Similar to assign!, except returns a new destination array.
 * Returns a new array, of the same shape and implementation as the original m.
 */
clojure.core.matrix.assign = (function clojure$core$matrix$assign(dest,src){
return clojure.core.matrix.protocols.assign(dest,src);
});
/**
 * Constructs a (shallow) clone of the array. This function is intended to
 * allow safe defensive usage of matrices / vectors. If the intent is to create a mutable clone of
 * some array data, it is recommended to use mutable instead.
 * 
 * Guarantees that:
 * 1. Mutating the returned array will not modify any other array (defensive copy)
 * 2. The returned array will be fully mutable, if the implementation supports mutable matrices.
 * 
 * The clone may or may not be of the same implementation: implementations are encouraged to do so but
 * this is not mandatory.
 * 
 * A core.matrix implementation which only provides immutable arrays may safely return the same array.
 */
clojure.core.matrix.clone = (function clojure$core$matrix$clone(m){
return clojure.core.matrix.protocols.clone(m);
});
/**
 * Converts an array to an idiomatic, immutable nested Clojure vector format. The bottom level of the
 * nested vectors will contain the element values. Higher levels will all implement IPersistentVector.
 * 
 * The depth of nesting will be equal to the dimensionality of the array.
 */
clojure.core.matrix.to_nested_vectors = (function clojure$core$matrix$to_nested_vectors(m){
return clojure.core.matrix.protocols.convert_to_nested_vectors(m);
});
/**
 * Coerces m to a scalar value. Result is guaranteed not to be an array.
 * Will throw an exception if m is not zero-dimensional.
 */
clojure.core.matrix.scalar = (function clojure$core$matrix$scalar(m){
return clojure.core.matrix.protocols.get_0d(m);
});
/**
 * Returns true if the parameter is a valid core.matrix N-dimensional array, for any N>=0.
 */
clojure.core.matrix.array_QMARK_ = (function clojure$core$matrix$array_QMARK_(m){
return cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m));
});
/**
 * Returns true if parameter is a valid core.matrix matrix (i.e. an array with dimensionality == 2)
 */
clojure.core.matrix.matrix_QMARK_ = (function clojure$core$matrix$matrix_QMARK_(m){
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2));
});
/**
 * Returns true if the parameter is a core.matrix vector (1-dimensional array)
 */
clojure.core.matrix.vec_QMARK_ = (function clojure$core$matrix$vec_QMARK_(m){
return clojure.core.matrix.protocols.is_vector_QMARK_(m);
});
/**
 * Returns true if the parameter is a scalar value (i.e. acceptable as matrix element value).
 * A 0-d array containing a scalar is *not* itself a scalar value.
 */
clojure.core.matrix.scalar_QMARK_ = (function clojure$core$matrix$scalar_QMARK_(v){
return clojure.core.matrix.protocols.is_scalar_QMARK_(v);
});
/**
 * Returns true if the parameter has zero dimensions. i.e. it is a 0-d array or a scalar value.
 * 
 * Behaviour is the same as `scalar?`, except that true is returned for 0-dimensional arrays.
 */
clojure.core.matrix.zero_dimensional_QMARK_ = (function clojure$core$matrix$zero_dimensional_QMARK_(m){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)));
});
/**
 * Returns true if the parameter is an identity-matrix, i.e. a symmetric square matrix with element values
 * of 1 on the leading diagonal and 0 elsewhere.
 */
clojure.core.matrix.identity_matrix_QMARK_ = (function clojure$core$matrix$identity_matrix_QMARK_(m){
return clojure.core.matrix.protocols.identity_matrix_QMARK_(m);
});
/**
 * Returns true if all the elements of the parameter are zero.
 */
clojure.core.matrix.zero_matrix_QMARK_ = (function clojure$core$matrix$zero_matrix_QMARK_(m){
return clojure.core.matrix.protocols.zero_matrix_QMARK_(m);
});
/**
 * Returns true if the parameter is a symmetric matrix, i.e. Aij = Aji for all i,j.
 */
clojure.core.matrix.symmetric_QMARK_ = (function clojure$core$matrix$symmetric_QMARK_(m){
return clojure.core.matrix.protocols.symmetric_QMARK_(m);
});
/**
 * Returns true if the parameter is a diagonal matrix.
 */
clojure.core.matrix.diagonal_QMARK_ = (function clojure$core$matrix$diagonal_QMARK_(m){
return clojure.core.matrix.protocols.diagonal_QMARK_(m);
});
/**
 * Returns true if the parameter is a upper triangular matrix.
 */
clojure.core.matrix.upper_triangular_QMARK_ = (function clojure$core$matrix$upper_triangular_QMARK_(m){
return clojure.core.matrix.protocols.upper_triangular_QMARK_(m);
});
/**
 * Returns true if the parameter is a lower triangular matrix.
 */
clojure.core.matrix.lower_triangular_QMARK_ = (function clojure$core$matrix$lower_triangular_QMARK_(m){
return clojure.core.matrix.protocols.lower_triangular_QMARK_(m);
});
/**
 * Returns true if the parameter is an orthogonal matrix.
 */
clojure.core.matrix.orthogonal_QMARK_ = (function clojure$core$matrix$orthogonal_QMARK_(var_args){
var G__41968 = arguments.length;
switch (G__41968) {
case 2:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,eps){
return clojure.core.matrix.protocols.orthogonal_QMARK_(m,eps);
}));

(clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.orthogonal_QMARK_(m,1.0E-5);
}));

(clojure.core.matrix.orthogonal_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if an array is sparse, i.e. the implementation supports storage of the entire
 * array in less memory than would normally be implied by the number of elements.
 * 
 * Sparse matrices may have memory requirements that scale with the number of non-zero elements
 * rather than the total number of elements, for example.
 */
clojure.core.matrix.sparse_QMARK_ = (function clojure$core$matrix$sparse_QMARK_(m){
return clojure.core.matrix.protocols.is_sparse_QMARK_(m);
});
/**
 * Returns the class of elements that can be in the array. For example, a numerical array may return
 * the class java.lang.Double.
 */
clojure.core.matrix.element_type = (function clojure$core$matrix$element_type(m){
return clojure.core.matrix.protocols.element_type(m);
});
/**
 * Returns the dimensionality of an array. The dimensionality is equal to
 * the number of dimensions in the array's shape.
 */
clojure.core.matrix.dimensionality = (function clojure$core$matrix$dimensionality(m){
return cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
});
/**
 * Returns the size of the specified dimension in a matrix. Will throw an error if the matrix
 * does not have the specified dimension.
 */
clojure.core.matrix.dimension_count = (function clojure$core$matrix$dimension_count(m,dim){
return cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,dim));
});
/**
 * Returns the number of rows in a matrix or vector (array must be 1D or more).
 */
clojure.core.matrix.row_count = (function clojure$core$matrix$row_count(m){
return clojure.core.matrix.dimension_count(m,(0));
});
/**
 * Returns the number of columns in a matrix (array must be 2D or more)
 */
clojure.core.matrix.column_count = (function clojure$core$matrix$column_count(m){
return clojure.core.matrix.dimension_count(m,(1));
});
/**
 * Returns the number of slices in an array (array must be 1D or more). The array is sliced
 * in row-major order, i.e. this is the dimension count of the first dimension.
 */
clojure.core.matrix.slice_count = (function clojure$core$matrix$slice_count(m){
return clojure.core.matrix.dimension_count(m,(0));
});
/**
 * Returns the total count of elements in an array, as an integer value.
 * 
 * Equal to the product of the lengths of each dimension in the array's shape.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the element count may be a BigInteger, i.e. equal to or larger than 2^63.
 * 
 * Returns 1 for a zero-dimensional array or scalar. 
 */
clojure.core.matrix.ecount = (function clojure$core$matrix$ecount(m){
return clojure.core.matrix.protocols.element_count(m);
});
/**
 * Returns true if matrix is square (i.e. a 2D array with same number of rows and columns)
 */
clojure.core.matrix.square_QMARK_ = (function clojure$core$matrix$square_QMARK_(m){
return ((((2) === clojure.core.matrix.dimensionality(m))) && ((clojure.core.matrix.dimension_count(m,(0)) === clojure.core.matrix.dimension_count(m,(1)))));
});
/**
 * Returns true if a matrix is a row-matrix (i.e. is 2D and has exactly one row)
 */
clojure.core.matrix.row_matrix_QMARK_ = (function clojure$core$matrix$row_matrix_QMARK_(m){
return (((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2))) && (((1) === clojure.core.matrix.dimension_count(m,(0)))));
});
/**
 * Returns true if a matrix is a column-matrix (i.e. is 2D and has has exactly one column)
 */
clojure.core.matrix.column_matrix_QMARK_ = (function clojure$core$matrix$column_matrix_QMARK_(m){
return (((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2))) && (((1) === clojure.core.matrix.dimension_count(m,(1)))));
});
/**
 * Returns the rank of each element in an array, as an array of indexes with 0 being first, in ascending order.
 * 
 * If passed a higher dimensional array, returns an array of ranks along the last dimension.
 * 
 * An optional comparator may be provided, otherwise the default comparator will be used. Comparator should
 * support java.util.Comparator on the JVM, although some implementations may support alternative comparator types 
 * e.g. Clojure predicates. Please check the documentation for your core.matrix implementation.
 */
clojure.core.matrix.rank = (function clojure$core$matrix$rank(var_args){
var G__41970 = arguments.length;
switch (G__41970) {
case 1:
return clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.index_rank.cljs$core$IFn$_invoke$arity$1(a);
}));

(clojure.core.matrix.rank.cljs$core$IFn$_invoke$arity$2 = (function (comparator,a){
return clojure.core.matrix.protocols.index_rank.cljs$core$IFn$_invoke$arity$2(a,comparator);
}));

(clojure.core.matrix.rank.cljs$lang$maxFixedArity = 2);

/**
 * Returns the shape of an array, i.e. the dimension sizes for all dimensions.
 * 
 * The result will be a vector containing only integer index values, with a count
 * equal to the dimensionality of the array.
 * 
 * Returns nil the if object is not an array (i.e. is a scalar value)
 */
clojure.core.matrix.shape = (function clojure$core$matrix$shape(m){
var temp__5733__auto__ = clojure.core.matrix.protocols.get_shape(m);
if(cljs.core.truth_(temp__5733__auto__)){
var sh = temp__5733__auto__;
return cljs.core.vec(sh);
} else {
return null;
}
});
/**
 * Like shape, but validates the shape of the array and throws an exception if the array does not have the
 * expected shape. Useful for ensuring that mixed implementation arrays or nested Clojure vectors conform to
 * the expected shape.
 * 
 * Returns the shape of the array if sucessful, or nil if the object is not a core.matrix array.
 */
clojure.core.matrix.validate_shape = (function clojure$core$matrix$validate_shape(var_args){
var G__41972 = arguments.length;
switch (G__41972) {
case 1:
return clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$1(m);
}));

(clojure.core.matrix.validate_shape.cljs$core$IFn$_invoke$arity$2 = (function (m,shape){
return clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$2(m,shape);
}));

(clojure.core.matrix.validate_shape.cljs$lang$maxFixedArity = 2);

/**
 * Returns the number of zeros in an array.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the zero count may be a BigInteger, i.e. equal to or larger than 2^63.
 */
clojure.core.matrix.zero_count = (function clojure$core$matrix$zero_count(m){
return clojure.core.matrix.protocols.zero_count(m);
});
/**
 * Returns the density of the matrix, defined as the proportion of non-zero elements
 */
clojure.core.matrix.density = (function clojure$core$matrix$density(m){
var zeros = clojure.core.matrix.protocols.zero_count(m);
var elems = clojure.core.matrix.protocols.element_count(m);
return ((elems - zeros) / elems);
});
/**
 * Returns true if the matrix is mutable, i.e. supports setting of values.
 * 
 * It is possible for some matrix implementations to have constraints on mutability (e.g. mutable only in diagonal elements),
 * this method will still return true for such cases.
 */
clojure.core.matrix.mutable_QMARK_ = (function clojure$core$matrix$mutable_QMARK_(m){
return clojure.core.matrix.protocols.is_mutable_QMARK_(m);
});
/**
 * Returns true if the parameter is a valid array index type. An index is a seq-able 1D list
 * of integer values that can be used to index into arrays.
 */
clojure.core.matrix.index_QMARK_ = (function clojure$core$matrix$index_QMARK_(m){
return clojure.core.matrix.protocols.index_QMARK_(m);
});
/**
 * Returns true if two arrays have a conforming shape. Two arrays are conforming if there
 * exists a common shape that both can broadcast to. This is a requirement for element-wise
 * operations to work correctly on two different-shaped arrays.
 */
clojure.core.matrix.conforming_QMARK_ = (function clojure$core$matrix$conforming_QMARK_(var_args){
var G__41974 = arguments.length;
switch (G__41974) {
case 1:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
}));

(clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var sa = clojure.core.matrix.protocols.get_shape(a);
var sb = clojure.core.matrix.protocols.get_shape(b);
return (((cljs.core.count(sa) >= cljs.core.count(sb))) && (cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,cljs.core.reverse(sa),cljs.core.reverse(sb)))));
}));

(clojure.core.matrix.conforming_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the arrays have the same shape, false otherwise
 */
clojure.core.matrix.same_shape_QMARK_ = (function clojure$core$matrix$same_shape_QMARK_(var_args){
var G__41979 = arguments.length;
switch (G__41979) {
case 0:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42313 = arguments.length;
var i__4790__auto___42314 = (0);
while(true){
if((i__4790__auto___42314 < len__4789__auto___42313)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42314]));

var G__42315 = (i__4790__auto___42314 + (1));
i__4790__auto___42314 = G__42315;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
}));

(clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return true;
}));

(clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,n){
var or__4185__auto__ = (m === n);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_(m,n);
}
}));

(clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (m,n,more){
var m__$1 = m;
var n__$1 = n;
var more__$1 = cljs.core.seq(more);
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = (m__$1 === n__$1);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_(m__$1,n__$1);
}
})())){
if(more__$1){
var G__42323 = n__$1;
var G__42324 = cljs.core.first(more__$1);
var G__42325 = cljs.core.next(more__$1);
m__$1 = G__42323;
n__$1 = G__42324;
more__$1 = G__42325;
continue;
} else {
return true;
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(clojure.core.matrix.same_shape_QMARK_.cljs$lang$applyTo = (function (seq41976){
var G__41977 = cljs.core.first(seq41976);
var seq41976__$1 = cljs.core.next(seq41976);
var G__41978 = cljs.core.first(seq41976__$1);
var seq41976__$2 = cljs.core.next(seq41976__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41977,G__41978,seq41976__$2);
}));

(clojure.core.matrix.same_shape_QMARK_.cljs$lang$maxFixedArity = (2));

/**
 * Returns true if the matrix is a valid numerical matrix (i.e. supports numerical core.matrix operations).
 */
clojure.core.matrix.numerical_QMARK_ = (function clojure$core$matrix$numerical_QMARK_(m){
return clojure.core.matrix.protocols.numerical_QMARK_(m);
});
/**
 * Returns a Java double[] array containing the values of a numerical array m in row-major order. Will
 *  throw an error if any of the array elements cannot be converted to doubles.
 * 
 *  If want-copy? is true, will guarantee a new double array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_double_array = (function clojure$core$matrix$to_double_array(var_args){
var G__41981 = arguments.length;
switch (G__41981) {
case 1:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_double_array(m);
}));

(clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_double_array(m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_double_array(arr);
} else {
return clojure.core.matrix.protocols.to_double_array(m);
}
} else {
return arr;
}
}));

(clojure.core.matrix.to_double_array.cljs$lang$maxFixedArity = 2);

/**
 * Returns a Java Object[] array containing the values of an array m in row-major order.
 * 
 *  If want-copy? is true, will guarantee a new Object array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_object_array = (function clojure$core$matrix$to_object_array(var_args){
var G__41983 = arguments.length;
switch (G__41983) {
case 1:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_object_array(m);
}));

(clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_object_array(m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_object_array(arr);
} else {
return clojure.core.matrix.protocols.to_object_array(m);
}
} else {
return arr;
}
}));

(clojure.core.matrix.to_object_array.cljs$lang$maxFixedArity = 2);

/**
 * Packs array data in the most efficient format as defined by the implementation. May return the
 * same array if no additional packing is required.
 */
clojure.core.matrix.pack = (function clojure$core$matrix$pack(a){
return clojure.core.matrix.protocols.pack(a);
});
/**
 * Coerces param (which may be any array) into a format preferred by a specific matrix implementation.
 * If the matrix implementation is not specified, uses the current matrix implementation.
 * If param is already in a format deemed usable by the implementation, may return it unchanged.
 * 
 * coerce should never alter the shape of the array, but may convert element types where necessary
 * (e.g. turning real values into complex values when converting to a complex array type).
 */
clojure.core.matrix.coerce = (function clojure$core$matrix$coerce(var_args){
var G__41985 = arguments.length;
switch (G__41985) {
case 1:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1 = (function (param){
var m = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var or__4185__auto__ = clojure.core.matrix.protocols.coerce_param(m,param);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.convert_to_nested_vectors(param));
}
}));

(clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2 = (function (matrix_or_implementation,param){
var m = (((matrix_or_implementation instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(matrix_or_implementation):matrix_or_implementation);
var or__4185__auto__ = clojure.core.matrix.protocols.coerce_param(m,param);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.convert_to_nested_vectors(param));
}
}));

(clojure.core.matrix.coerce.cljs$lang$maxFixedArity = 2);

/**
 * Gets a scalar value from an array at the specified position. Supports any number of dimensions.
 */
clojure.core.matrix.mget = (function clojure$core$matrix$mget(var_args){
var G__41991 = arguments.length;
switch (G__41991) {
case 1:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42340 = arguments.length;
var i__4790__auto___42341 = (0);
while(true){
if((i__4790__auto___42341 < len__4789__auto___42340)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42341]));

var G__42344 = (i__4790__auto___42341 + (1));
i__4790__auto___42341 = G__42344;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_0d(m);
}));

(clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2 = (function (m,x){
return clojure.core.matrix.protocols.get_1d(m,x);
}));

(clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3 = (function (m,x,y){
return clojure.core.matrix.protocols.get_2d(m,x,y);
}));

(clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,more){
return clojure.core.matrix.protocols.get_nd(m,cljs.core.cons(x,cljs.core.cons(y,more)));
}));

/** @this {Function} */
(clojure.core.matrix.mget.cljs$lang$applyTo = (function (seq41987){
var G__41988 = cljs.core.first(seq41987);
var seq41987__$1 = cljs.core.next(seq41987);
var G__41989 = cljs.core.first(seq41987__$1);
var seq41987__$2 = cljs.core.next(seq41987__$1);
var G__41990 = cljs.core.first(seq41987__$2);
var seq41987__$3 = cljs.core.next(seq41987__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41988,G__41989,G__41990,seq41987__$3);
}));

(clojure.core.matrix.mget.cljs$lang$maxFixedArity = (3));

/**
 * Sets a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Returns a new matrix and leaves the original unchanged.
 * 
 * WARNING: performance of this operation may be as high as O(N) where N is the number of elements in
 * the array. Consider using mutable arrays and `mset!` when setting large numbers of individual elements
 * is required.
 */
clojure.core.matrix.mset = (function clojure$core$matrix$mset(var_args){
var G__41998 = arguments.length;
switch (G__41998) {
case 2:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42352 = arguments.length;
var i__4790__auto___42353 = (0);
while(true){
if((i__4790__auto___42353 < len__4789__auto___42352)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42353]));

var G__42354 = (i__4790__auto___42353 + (1));
i__4790__auto___42353 = G__42354;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((4)),(0),null));
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
return clojure.core.matrix.protocols.set_0d(m,v);
}));

(clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
return clojure.core.matrix.protocols.set_1d(m,x,v);
}));

(clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
return clojure.core.matrix.protocols.set_2d(m,x,y,v);
}));

(clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,more){
return clojure.core.matrix.protocols.set_nd(m,cljs.core.cons(x,cljs.core.cons(y,cljs.core.cons(z,cljs.core.butlast(more)))),cljs.core.last(more));
}));

/** @this {Function} */
(clojure.core.matrix.mset.cljs$lang$applyTo = (function (seq41993){
var G__41994 = cljs.core.first(seq41993);
var seq41993__$1 = cljs.core.next(seq41993);
var G__41995 = cljs.core.first(seq41993__$1);
var seq41993__$2 = cljs.core.next(seq41993__$1);
var G__41996 = cljs.core.first(seq41993__$2);
var seq41993__$3 = cljs.core.next(seq41993__$2);
var G__41997 = cljs.core.first(seq41993__$3);
var seq41993__$4 = cljs.core.next(seq41993__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41994,G__41995,G__41996,G__41997,seq41993__$4);
}));

(clojure.core.matrix.mset.cljs$lang$maxFixedArity = (4));

/**
 * Mutates a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Will throw an exception if the matrix is not mutable at the specified position. Note that it
 * is possible for some arrays to be mutable in places and immutable in others (e.g. sparse arrays)
 * 
 * Returns the modified matrix (it is guaranteed to return the same instance)
 */
clojure.core.matrix.mset_BANG_ = (function clojure$core$matrix$mset_BANG_(var_args){
var G__42006 = arguments.length;
switch (G__42006) {
case 2:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42362 = arguments.length;
var i__4790__auto___42363 = (0);
while(true){
if((i__4790__auto___42363 < len__4789__auto___42362)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42363]));

var G__42364 = (i__4790__auto___42363 + (1));
i__4790__auto___42363 = G__42364;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((5)),(0),null));
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
clojure.core.matrix.protocols.set_0d_BANG_(m,v);

return m;
}));

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
clojure.core.matrix.protocols.set_1d_BANG_(m,x,v);

return m;
}));

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
clojure.core.matrix.protocols.set_2d_BANG_(m,x,y,v);

return m;
}));

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m,x,y,z,v){
clojure.core.matrix.protocols.set_nd_BANG_(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),v);

return m;
}));

(clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,t,more){
clojure.core.matrix.protocols.set_nd_BANG_(m,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z,t], null),cljs.core.butlast(more)),cljs.core.last(more));

return m;
}));

/** @this {Function} */
(clojure.core.matrix.mset_BANG_.cljs$lang$applyTo = (function (seq42000){
var G__42001 = cljs.core.first(seq42000);
var seq42000__$1 = cljs.core.next(seq42000);
var G__42002 = cljs.core.first(seq42000__$1);
var seq42000__$2 = cljs.core.next(seq42000__$1);
var G__42003 = cljs.core.first(seq42000__$2);
var seq42000__$3 = cljs.core.next(seq42000__$2);
var G__42004 = cljs.core.first(seq42000__$3);
var seq42000__$4 = cljs.core.next(seq42000__$3);
var G__42005 = cljs.core.first(seq42000__$4);
var seq42000__$5 = cljs.core.next(seq42000__$4);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42001,G__42002,G__42003,G__42004,G__42005,seq42000__$5);
}));

(clojure.core.matrix.mset_BANG_.cljs$lang$maxFixedArity = (5));

/**
 * Gets a row of a matrix, as a 1D vector.
 * 
 * The format of the returned 1D vector is determined by the implementation of the source matrix. 
 * get-row may return a lightweight mutable view if supported by the implementation.
 */
clojure.core.matrix.get_row = (function clojure$core$matrix$get_row(m,x){
return clojure.core.matrix.protocols.get_row(m,x);
});
/**
 * Gets a column of a matrix, as a 1D vector.
 * 
 * The format of the returned 1D vector is determined by the implementation of the source matrix. 
 * get-column may return a lightweight mutable view if supported by the implementation.
 */
clojure.core.matrix.get_column = (function clojure$core$matrix$get_column(m,col_index){
return clojure.core.matrix.protocols.get_column(m,col_index);
});
/**
 * Slices along all dimensions where there is a numerical argument
 */
clojure.core.matrix.slice_dims = (function clojure$core$matrix$slice_dims(m,args,slice_func){
var shape = clojure.core.matrix.protocols.get_shape(m);
var N = cljs.core.count(args);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(N,clojure.core.matrix.dimensionality(m))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconsistent count of selection arguments ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)," for shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var m__$1 = m;
var i = (0);
var args__$1 = cljs.core.seq(args);
while(true){
if(args__$1){
var ix = cljs.core.first(args__$1);
if(typeof ix === 'number'){
var G__42376 = (slice_func.cljs$core$IFn$_invoke$arity$3 ? slice_func.cljs$core$IFn$_invoke$arity$3(m__$1,i,ix) : slice_func.call(null,m__$1,i,ix));
var G__42377 = i;
var G__42378 = cljs.core.next(args__$1);
m__$1 = G__42376;
i = G__42377;
args__$1 = G__42378;
continue;
} else {
var G__42381 = m__$1;
var G__42382 = (i + (1));
var G__42383 = cljs.core.next(args__$1);
m__$1 = G__42381;
i = G__42382;
args__$1 = G__42383;
continue;
}
} else {
return m__$1;
}
break;
}
});
/**
 * Normalises arg to either a number of a sequable list of indexes
 */
clojure.core.matrix.normalise_arg = (function clojure$core$matrix$normalise_arg(arg,dim_count){
if(typeof arg === 'number'){
return arg;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),arg)){
return cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dim_count));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last","last",1105735132),arg)){
return (dim_count - (1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"butlast","butlast",-67491942),arg)){
return cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1((dim_count - (1))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),arg)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rest","rest",-1241696419),arg)){
return cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),dim_count));
} else {
return arg;

}
}
}
}
}
}
});
/**
 * Normalises arguments by mapping :all to the complete range
 */
clojure.core.matrix.normalise_args = (function clojure$core$matrix$normalise_args(args,m){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.normalise_arg,args,clojure.core.matrix.protocols.get_shape(m));
});
/**
 * Returns an array containing all elements in a which are at the positions
 * of the Cartesian product of args. An argument can be:
 *  - a number - slices at this dimension (eliminates the dimension),
 *  - a keyword which selects specific slices (:first :last)
 *  - a 1-dimensional array of numbers which selects the slices at these indices
 *  - a keyword which selects a range of slices (:all :butlast :rest)
 * 
 * The number of args must match the dimensionality of a.
 * 
 * Examples:
 * (select [[1 2][3 4]] 0 0) ;=> 1
 * (select [[1 2][3 4]] 0 :all) ;=> [1 2]
 * (select [[1 2][3 4]] [0 1] [0]) ;=> [[1] [3]]
 * (select [[1 2][3 4]] :all 0) ;=> [1 3]
 */
clojure.core.matrix.select = (function clojure$core$matrix$select(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42389 = arguments.length;
var i__4790__auto___42390 = (0);
while(true){
if((i__4790__auto___42390 < len__4789__auto___42389)){
args__4795__auto__.push((arguments[i__4790__auto___42390]));

var G__42391 = (i__4790__auto___42390 + (1));
i__4790__auto___42390 = G__42391;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args(args,a);
var a__$1 = clojure.core.matrix.slice_dims(a,args__$1,clojure.core.matrix.slice);
var selecting_args = cljs.core.filterv(cljs.core.complement(cljs.core.number_QMARK_),args__$1);
return clojure.core.matrix.protocols.select(a__$1,selecting_args);
}));

(clojure.core.matrix.select.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.select.cljs$lang$applyTo = (function (seq42007){
var G__42008 = cljs.core.first(seq42007);
var seq42007__$1 = cljs.core.next(seq42007);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42008,seq42007__$1);
}));

/**
 * Like `select`, but guarantees a view over the original data.
 */
clojure.core.matrix.select_view = (function clojure$core$matrix$select_view(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42392 = arguments.length;
var i__4790__auto___42393 = (0);
while(true){
if((i__4790__auto___42393 < len__4789__auto___42392)){
args__4795__auto__.push((arguments[i__4790__auto___42393]));

var G__42394 = (i__4790__auto___42393 + (1));
i__4790__auto___42393 = G__42394;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args(args,a);
var a__$1 = clojure.core.matrix.slice_dims(a,args__$1,clojure.core.matrix.slice_view);
var selecting_args = cljs.core.filterv(cljs.core.complement(cljs.core.number_QMARK_),args__$1);
var or__4185__auto__ = clojure.core.matrix.protocols.select_view(a__$1,selecting_args);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection(a__$1,selecting_args);
}
}));

(clojure.core.matrix.select_view.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.select_view.cljs$lang$applyTo = (function (seq42009){
var G__42010 = cljs.core.first(seq42009);
var seq42009__$1 = cljs.core.next(seq42009);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42010,seq42009__$1);
}));

/**
 * Returns a one-dimensional array of the elements which are at the specified
 * indices. An index is a one-dimensional array which element-count matches the
 * dimensionality of a. Examples:
 * (select-indices [[1 2] [3 4]] [[0 0][1 1]]) ;=> [1 4]
 */
clojure.core.matrix.select_indices = (function clojure$core$matrix$select_indices(a,indices){
return clojure.core.matrix.protocols.get_indices(a,indices);
});
/**
 * Like set-selection but mutates the array in place. Will throw an error if array is immutable.
 */
clojure.core.matrix.set_selection_BANG_ = (function clojure$core$matrix$set_selection_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42395 = arguments.length;
var i__4790__auto___42396 = (0);
while(true){
if((i__4790__auto___42396 < len__4789__auto___42395)){
args__4795__auto__.push((arguments[i__4790__auto___42396]));

var G__42397 = (i__4790__auto___42396 + (1));
i__4790__auto___42396 = G__42397;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var value = cljs.core.last(args);
var args__$1 = cljs.core.butlast(args);
clojure.core.matrix.assign_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.select_view,a,args__$1),value);

return a;
}));

(clojure.core.matrix.set_selection_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.set_selection_BANG_.cljs$lang$applyTo = (function (seq42011){
var G__42012 = cljs.core.first(seq42011);
var seq42011__$1 = cljs.core.next(seq42011);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42012,seq42011__$1);
}));

/**
 * Like select but sets the elements in the selection to the value of the final argument.
 * Leaves a unchanged and returns the modified array
 */
clojure.core.matrix.set_selection = (function clojure$core$matrix$set_selection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42399 = arguments.length;
var i__4790__auto___42400 = (0);
while(true){
if((i__4790__auto___42400 < len__4789__auto___42399)){
args__4795__auto__.push((arguments[i__4790__auto___42400]));

var G__42401 = (i__4790__auto___42400 + (1));
i__4790__auto___42400 = G__42401;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var a__$1 = clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1(a);
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.set_selection_BANG_,a__$1,args);
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2(a__$1,r);
}));

(clojure.core.matrix.set_selection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.set_selection.cljs$lang$applyTo = (function (seq42013){
var G__42014 = cljs.core.first(seq42013);
var seq42013__$1 = cljs.core.next(seq42013);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42014,seq42013__$1);
}));

/**
 * like select-indices but sets the elements at the specified indices to values.
 * Leaves the original array (a) unchanged and returns a modified array
 */
clojure.core.matrix.set_indices = (function clojure$core$matrix$set_indices(a,indices,values){
return clojure.core.matrix.protocols.set_indices(a,indices,values);
});
/**
 * like set-indices but destructively modifies array in place
 */
clojure.core.matrix.set_indices_BANG_ = (function clojure$core$matrix$set_indices_BANG_(a,indices,values){
clojure.core.matrix.protocols.set_indices_BANG_(a,indices,values);

return a;
});
/**
 * Gets a view of a submatrix, for a set of index ranges.
 * 
 * If Index ranges are used they must be a sequence [start, length] pairs,
 * with the special exception that these pairs can be nil (gets the whole range).
 * 
 * May be a mutable view if supported by the implementation.
 */
clojure.core.matrix.submatrix = (function clojure$core$matrix$submatrix(var_args){
var G__42016 = arguments.length;
switch (G__42016) {
case 2:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2 = (function (m,index_ranges){
return clojure.core.matrix.protocols.submatrix(m,index_ranges);
}));

(clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index_range){
return clojure.core.matrix.protocols.submatrix(m,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.dimensionality(m),null)),dimension,index_range));
}));

(clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5 = (function (m,row_start,row_length,col_start,col_length){
return clojure.core.matrix.protocols.submatrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,row_start,(new cljs.core.List(null,row_length,null,(1),null)),(2),null)),(new cljs.core.List(null,col_start,(new cljs.core.List(null,col_length,null,(1),null)),(2),null))], null));
}));

(clojure.core.matrix.submatrix.cljs$lang$maxFixedArity = 5);

/**
 * Gets a view of part of a vector, specifed by a start index and length.
 * 
 * The view maintains a reference to the original,
 * so can be used to modify the original vector if it is mutable.
 */
clojure.core.matrix.subvector = (function clojure$core$matrix$subvector(m,start,length){
return clojure.core.matrix.protocols.subvector(m,start,length);
});
/**
 * Gets a slice of an array along a specific dimension.
 * 
 * The returned array will have one less dimension, i.e. slicing a matrix will return a vector
 * and slicing a 1D vector will return a scalar.
 * 
 * Slicing on the first dimension (dimension 0) is likely to perform better
 * for many array implementations. This is the default.
 */
clojure.core.matrix.slice = (function clojure$core$matrix$slice(var_args){
var G__42018 = arguments.length;
switch (G__42018) {
case 2:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2 = (function (m,index){
return clojure.core.matrix.protocols.get_slice(m,(0),index);
}));

(clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index){
return clojure.core.matrix.protocols.get_slice(m,dimension,index);
}));

(clojure.core.matrix.slice.cljs$lang$maxFixedArity = 3);

/**
 * Gets a sequence of slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension.
 * 
 * Returns a sequence of scalar values if the array is 1-dimensional.
 */
clojure.core.matrix.slices = (function clojure$core$matrix$slices(var_args){
var G__42020 = arguments.length;
switch (G__42020) {
case 1:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_seq(m);
}));

(clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
return clojure.core.matrix.protocols.get_slice_seq(m,dimension);
}));

(clojure.core.matrix.slices.cljs$lang$maxFixedArity = 2);

/**
 * Gets a sequence of views of the slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension. If the matrix implementation supports mutable views, these views
 * can be used to mutate portions of the original array.
 * 
 * A key difference between 'slices' and 'slice-views' is that 'slice-views' must always return views. In order
 * to ensure this behaviour on mutable 1-dimensional arrays, it must return a sequence of 0-dimensional arrays.
 */
clojure.core.matrix.slice_views = (function clojure$core$matrix$slice_views(var_args){
var G__42023 = arguments.length;
switch (G__42023) {
case 1:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_view_seq(m);
}));

(clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
if(((0) === cljs.core.long$(dimension))){
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1(m);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42021_SHARP_){
return clojure.core.matrix.protocols.get_slice_view(m,dimension,p1__42021_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,dimension)));
}
}));

(clojure.core.matrix.slice_views.cljs$lang$maxFixedArity = 2);

/**
 * Gets a view of an array slice. Guaranteed to return a mutable view if the array is mutable.
 */
clojure.core.matrix.slice_view = (function clojure$core$matrix$slice_view(var_args){
var G__42025 = arguments.length;
switch (G__42025) {
case 2:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2 = (function (m,i){
return clojure.core.matrix.protocols.get_major_slice_view(m,i);
}));

(clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,i){
if(((0) === cljs.core.long$(dimension))){
return clojure.core.matrix.protocols.get_major_slice_view(m,i);
} else {
return clojure.core.matrix.protocols.get_slice_view(m,dimension,i);
}
}));

(clojure.core.matrix.slice_view.cljs$lang$maxFixedArity = 3);

/**
 * Gets the rows of a matrix, as a sequence of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the rows from all slices in order.
 */
clojure.core.matrix.rows = (function clojure$core$matrix$rows(m){
return clojure.core.matrix.protocols.get_rows(m);
});
/**
 * Gets the columns of a matrix, as a seqable collection of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the columns from all slices in order.
 */
clojure.core.matrix.columns = (function clojure$core$matrix$columns(m){
return clojure.core.matrix.protocols.get_columns(m);
});
/**
 * Returns the main diagonal of a matrix or general array, as a vector.
 * The main diagonal of a general array is defined as those elements where the all the
 * indexes are equal, i.e. the index is of the form [i i ... i]
 * Works on both square and rectangular matrices.
 */
clojure.core.matrix.main_diagonal = (function clojure$core$matrix$main_diagonal(m){
return clojure.core.matrix.protocols.main_diagonal(m);
});
/**
 * Returns the specified diagonal of a 2D matrix as a vector.
 * If k>0, returns a diagonal above the main diagonal.
 * If k<0, returns a diagonal below the main diagonal.
 * Works on both square and rectangular matrices.
 * Returns empty vector if value of k is out of range (outside matrix)
 */
clojure.core.matrix.diagonal = (function clojure$core$matrix$diagonal(var_args){
var G__42027 = arguments.length;
switch (G__42027) {
case 1:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.main_diagonal(m);
}));

(clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
var k__$1 = cljs.core.long$(k);
if((k__$1 < (0))){
return clojure.core.matrix.protocols.main_diagonal(clojure.core.matrix.protocols.submatrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- k__$1),(clojure.core.matrix.dimension_count(m,(0)) + k__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count(m,(1))], null)], null)));
} else {
if((k__$1 > (0))){
return clojure.core.matrix.protocols.main_diagonal(clojure.core.matrix.protocols.submatrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count(m,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,(clojure.core.matrix.dimension_count(m,(1)) - k__$1)], null)], null)));
} else {
return clojure.core.matrix.protocols.main_diagonal(m);

}
}
}));

(clojure.core.matrix.diagonal.cljs$lang$maxFixedArity = 2);

/**
 * Joins arrays together, along the major dimension 0. For 1D vectors, this behaves as simple concatenation.
 * Other dimensions must be compatible. To join arrays along a different dimension, use 'join-along' instead.
 */
clojure.core.matrix.join = (function clojure$core$matrix$join(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42408 = arguments.length;
var i__4790__auto___42409 = (0);
while(true){
if((i__4790__auto___42409 < len__4789__auto___42408)){
args__4795__auto__.push((arguments[i__4790__auto___42409]));

var G__42410 = (i__4790__auto___42409 + (1));
i__4790__auto___42409 = G__42410;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic = (function (arrays){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.join,arrays);
}));

(clojure.core.matrix.join.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.core.matrix.join.cljs$lang$applyTo = (function (seq42028){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42028));
}));

/**
 * Joins arrays together, concatenating them along the specified dimension.
 * 
 * Other dimensions must be compatible.
 */
clojure.core.matrix.join_along = (function clojure$core$matrix$join_along(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42411 = arguments.length;
var i__4790__auto___42412 = (0);
while(true){
if((i__4790__auto___42412 < len__4789__auto___42411)){
args__4795__auto__.push((arguments[i__4790__auto___42412]));

var G__42413 = (i__4790__auto___42412 + (1));
i__4790__auto___42412 = G__42413;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic = (function (dimension,arrays){
var or__4185__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__42029_SHARP_,p2__42030_SHARP_){
return clojure.core.matrix.protocols.join_along(p1__42029_SHARP_,p2__42030_SHARP_,dimension);
}),arrays);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Failure to joins arrays",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.join_along.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.core.matrix.join_along.cljs$lang$applyTo = (function (seq42031){
var G__42032 = cljs.core.first(seq42031);
var seq42031__$1 = cljs.core.next(seq42031);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42032,seq42031__$1);
}));

/**
 * Adds a new value [b] as a new slice to an array [a], returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj
 */
clojure.core.matrix.conjoin = (function clojure$core$matrix$conjoin(var_args){
var G__42038 = arguments.length;
switch (G__42038) {
case 2:
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42432 = arguments.length;
var i__4790__auto___42433 = (0);
while(true){
if((i__4790__auto___42433 < len__4789__auto___42432)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42433]));

var G__42438 = (i__4790__auto___42433 + (1));
i__4790__auto___42433 = G__42438;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var ss = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(clojure.core.matrix.protocols.get_shape(a)),(0),(1));
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,clojure.core.matrix.protocols.broadcast(b,ss)], 0));
}));

(clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var ss = cljs.core.vec(cljs.core.next(clojure.core.matrix.protocols.get_shape(a)));
var slcs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42033_SHARP_){
return clojure.core.matrix.protocols.broadcast(p1__42033_SHARP_,ss);
}),cljs.core.cons(b,more));
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,slcs], 0));
}));

/** @this {Function} */
(clojure.core.matrix.conjoin.cljs$lang$applyTo = (function (seq42035){
var G__42036 = cljs.core.first(seq42035);
var seq42035__$1 = cljs.core.next(seq42035);
var G__42037 = cljs.core.first(seq42035__$1);
var seq42035__$2 = cljs.core.next(seq42035__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42036,G__42037,seq42035__$2);
}));

(clojure.core.matrix.conjoin.cljs$lang$maxFixedArity = (2));

/**
 * Adds a new value [b] as a new slice to an array [a] along the given dimension,
 * returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj using
 * a specified dimension
 */
clojure.core.matrix.conjoin_along = (function clojure$core$matrix$conjoin_along(var_args){
var G__42044 = arguments.length;
switch (G__42044) {
case 3:
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42465 = arguments.length;
var i__4790__auto___42466 = (0);
while(true){
if((i__4790__auto___42466 < len__4789__auto___42465)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42466]));

var G__42467 = (i__4790__auto___42466 + (1));
i__4790__auto___42466 = G__42467;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3 = (function (dim,a,b){
if((cljs.core.long$(dim) === (0))){
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
var ss = clojure.core.matrix.protocols.get_shape(clojure.core.matrix.protocols.get_slice(a,dim,(0)));
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic(dim,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,clojure.core.matrix.protocols.broadcast(b,ss)], 0));
}
}));

(clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic = (function (dim,a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a__$1,b__$1){
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3(dim,a__$1,b__$1);
}),clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3(dim,a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.conjoin_along.cljs$lang$applyTo = (function (seq42040){
var G__42041 = cljs.core.first(seq42040);
var seq42040__$1 = cljs.core.next(seq42040);
var G__42042 = cljs.core.first(seq42040__$1);
var seq42040__$2 = cljs.core.next(seq42040__$1);
var G__42043 = cljs.core.first(seq42040__$2);
var seq42040__$3 = cljs.core.next(seq42040__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42041,G__42042,G__42043,seq42040__$3);
}));

(clojure.core.matrix.conjoin_along.cljs$lang$maxFixedArity = (3));

/**
 * Rotates an array along specified dimensions.
 * 
 * Elements rotated off will re-appear at the other side. The shape of the array will not be modified.
 */
clojure.core.matrix.rotate = (function clojure$core$matrix$rotate(var_args){
var G__42046 = arguments.length;
switch (G__42046) {
case 3:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.rotate(m,dimension,shift_amount);
}));

(clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.rotate_all(m,shifts);
}));

(clojure.core.matrix.rotate.cljs$lang$maxFixedArity = 3);

/**
 * Shifts all elements of an array along specified dimensions, maintaining the shape of the array.
 * 
 * New spaces shifted into the array are filled with zero.
 */
clojure.core.matrix.shift = (function clojure$core$matrix$shift(var_args){
var G__42048 = arguments.length;
switch (G__42048) {
case 3:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.shift(m,dimension,shift_amount);
}));

(clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.shift_all(m,shifts);
}));

(clojure.core.matrix.shift.cljs$lang$maxFixedArity = 3);

/**
 * Reorders slices of an array along a specified dimension. Re-orders along major dimension
 * if no dimension is specified.
 * 
 * Indicies can be any seqable object containing the indices along the specified dimension to select.
 * An index can be selected multiple times (which created repreated slices), or not at all (which excludes
 * the slice from the result).
 */
clojure.core.matrix.order = (function clojure$core$matrix$order(var_args){
var G__42050 = arguments.length;
switch (G__42050) {
case 2:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2 = (function (m,indices){
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$2(m,indices);
}));

(clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,indices){
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$3(m,dimension,indices);
}));

(clojure.core.matrix.order.cljs$lang$maxFixedArity = 3);

/**
 * Creates a view of an array as a single flattened vector.
 * 
 * Returns nil if this is not supported by the implementation. You should use `to-vector` instead to
 * obtain a flattened vector without guaranteeing a view.
 */
clojure.core.matrix.as_vector = (function clojure$core$matrix$as_vector(m){
return clojure.core.matrix.protocols.as_vector(m);
});
/**
 * Creates a new array representing the elements of array m as a single flattened vector.
 * 
 * This operation guarantees a new copy of the data.
 */
clojure.core.matrix.to_vector = (function clojure$core$matrix$to_vector(m){
var or__4185__auto__ = clojure.core.matrix.protocols.to_vector(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.to_object_array(m));
}
});
/**
 * Broadcasts an array to a specified shape. Returns a new array with the shape specified.
 * The broadcasted array may be a view over the original array: attempting to modify the
 * broadcasted array therefore has implementation-dependent results.
 * 
 * Will throw an exception if broadcast to the target shape is not possible.
 */
clojure.core.matrix.broadcast = (function clojure$core$matrix$broadcast(m,shape){
var or__4185__auto__ = clojure.core.matrix.protocols.broadcast(m,shape);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.coerce_param((clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 ? clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0() : clojure.core.matrix.implementation_check.call(null)),m),shape);
}
});
/**
 * Broadcasts the second array to the shape of the first. See 'broadcast'.
 */
clojure.core.matrix.broadcast_like = (function clojure$core$matrix$broadcast_like(m,a){
return clojure.core.matrix.protocols.broadcast_like(m,a);
});
/**
 * Broadcasts and coerces the second array to the same shape and type of the first.
 * Equivalent to (coerce m (broadcast-like m a)).
 * 
 * Useful for converting arrays to the correct shape and type for efficient future operations.
 */
clojure.core.matrix.broadcast_coerce = (function clojure$core$matrix$broadcast_coerce(m,a){
return clojure.core.matrix.protocols.broadcast_coerce(m,a);
});
/**
 * Transposes an array, returning a new array. 
 * 
 * Assuming no specific ordering is provided:
 *  - 1D vectors and scalars will be returned unchanged
 *  - For 2D matrices, rows and columns are swapped.
 *  - The dimension indices are reversed for any shape of a higher order N-dimensional array. 
 * 
 * If ordering is provided, will re-order dimensions according to the provided order. The 
 * provided ordering must be of the same length as the dimensionality of the array and
 * contain all the integers in the range 0...(dims-1).
 */
clojure.core.matrix.transpose = (function clojure$core$matrix$transpose(var_args){
var G__42052 = arguments.length;
switch (G__42052) {
case 1:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.transpose(m);
}));

(clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2 = (function (m,ordering){
return clojure.core.matrix.protocols.transpose_dims(m,ordering);
}));

(clojure.core.matrix.transpose.cljs$lang$maxFixedArity = 2);

/**
 * Transposes a square 2D matrix in-place.
 * 
 * Will throw an exception if not possible (e.g. if the matrix is not square or not mutable).
 */
clojure.core.matrix.transpose_BANG_ = (function clojure$core$matrix$transpose_BANG_(m){
clojure.core.matrix.protocols.transpose_BANG_(m);

return m;
});
/**
 * Changes the shape of a matrix to the specified new shape. shape can be any sequence of dimension sizes.
 * 
 * Preserves the row-major order of matrix elements. Truncates the sequence of elements if the shape is smaller
 * than the original shape.
 * 
 * Pads with default values (dependent on implementation - normally zero) if the shape is larger.
 */
clojure.core.matrix.reshape = (function clojure$core$matrix$reshape(m,shape){
return clojure.core.matrix.protocols.reshape(m,shape);
});
/**
 * Fills an array with a single scalar value. The scalar value must be compatible with the element-type
 * of the array.
 * 
 * Similar to assign!, but only supports scalar values (and may be more efficient).
 */
clojure.core.matrix.fill_BANG_ = (function clojure$core$matrix$fill_BANG_(m,value){
clojure.core.matrix.protocols.fill_BANG_(m,value);

return m;
});
/**
 * Fills an array with a single scalar value. The scalar value must be compatible with the element-type
 * of the array. Returns a new array.
 * 
 * Functionally similar to `assign!` except only intended for use with a scalar value.
 */
clojure.core.matrix.fill = (function clojure$core$matrix$fill(m,value){
return clojure.core.matrix.assign(m,clojure.core.matrix.protocols.get_0d(value));
});
/**
 * Returns true if two arrays are numerically equal.
 * 
 * Will return false for arrays of different shapes.
 * 
 * May either return false or throw an error if the arrays are not numerical.
 * 
 * If epsilon is provided, performs an equality test
 * with the given maximum tolerance (default is 0.0, i.e. exact numerical equivalence)
 */
clojure.core.matrix.equals = (function clojure$core$matrix$equals(var_args){
var G__42054 = arguments.length;
switch (G__42054) {
case 1:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
}));

(clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_equals(a,b);
}));

(clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3 = (function (a,b,epsilon){
return clojure.core.matrix.protocols.matrix_equals_epsilon(a,b,epsilon);
}));

(clojure.core.matrix.equals.cljs$lang$maxFixedArity = 3);

/**
 * Element-wise of comparisons of two arrays. Returns the signum of the difference
 * between corresponding elements in two arrays.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (cmp 1 3) ;=> -1
 *   (cmp 0 0) ;=> 0
 *   (cmp 1 -1) ;=> 1
 *   (cmp [[1 3] [5 5]] [[3 3] [5 3]]) ;=> [[-1 0] [0 1]]
 *   (cmp [[1 4][1 5][1 8]] [[1 2][1 5][2 7]]) ;=> [[0 1][0 0][-1 1]]
 *   
 */
clojure.core.matrix.cmp = (function clojure$core$matrix$cmp(a,b){
return clojure.core.matrix.protocols.element_compare(a,b);
});
/**
 * Element-wise if. Tranverses each element, x, of an array, m. If x > 0,
 *   returns a (if a is a scalar) or the corresponding element from a (if a is an
 *   array or matrix). If x <= 0, returns b (if b is a scalar) or the corresponding
 *   element from array b (if b is an array or matrix).
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eif (lt 1 3) 3 6) ;=> 3
 *   (eif (lt 5 3) 3 6) ;=> 6
 *   (eif (eq A B) 1 2) ;=> [[1 2] [2 1]]
 *   (eif (eq A B) 1 D) ;=> [[1 1] [9 1]]
 *   (eif (eq A B) C 2) ;=> [[2 2] [2 2]]
 *   (eif [[1 0][0 1] [[2 3][4 5]] [[6 7][8 9]]) ;=> [[2 7][8 5]]
 *   (eif (gt [[2 6][3 5]] 4) [[0 0][0 0]] [[1 1][1 1]] ;=> [[0 1][0 1]]
 */
clojure.core.matrix.eif = (function clojure$core$matrix$eif(m,a,b){
return clojure.core.matrix.protocols.element_if(m,a,b);
});
/**
 * Element-wise less-than comparison operation. Returns a binary array where
 *   elements less-than the argument are represented by 1 and elements greater-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (lt 1 4) ;=> 1
 *   (lt 3 3) ;=> 0
 *   (lt [[1 5] [3 6]] 3) ;=> [[1 0] [0 0]]
 *   (lt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 0]]
 */
clojure.core.matrix.lt = (function clojure$core$matrix$lt(var_args){
var G__42059 = arguments.length;
switch (G__42059) {
case 2:
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42518 = arguments.length;
var i__4790__auto___42519 = (0);
while(true){
if((i__4790__auto___42519 < len__4789__auto___42518)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42519]));

var G__42520 = (i__4790__auto___42519 + (1));
i__4790__auto___42519 = G__42520;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_lt(m,a);
}));

(clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.core.matrix.protocols.element_lt),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),arrays)));
}));

/** @this {Function} */
(clojure.core.matrix.lt.cljs$lang$applyTo = (function (seq42056){
var G__42057 = cljs.core.first(seq42056);
var seq42056__$1 = cljs.core.next(seq42056);
var G__42058 = cljs.core.first(seq42056__$1);
var seq42056__$2 = cljs.core.next(seq42056__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42057,G__42058,seq42056__$2);
}));

(clojure.core.matrix.lt.cljs$lang$maxFixedArity = (2));

/**
 * Element-wise less-than-or-equal-to comparison operation. Returns a binary
 *   array where elements less-than or equal to the argument are represented by 1
 *   and elements greater-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (le 3 3) ;=> 1
 *   (le 4 3) ;=> 0
 *   (le [[1 5] [3 6]] 3) ;=> [[1 0] [1 0]]
 *   (le [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 1]]
 */
clojure.core.matrix.le = (function clojure$core$matrix$le(var_args){
var G__42064 = arguments.length;
switch (G__42064) {
case 2:
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42522 = arguments.length;
var i__4790__auto___42523 = (0);
while(true){
if((i__4790__auto___42523 < len__4789__auto___42522)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42523]));

var G__42524 = (i__4790__auto___42523 + (1));
i__4790__auto___42523 = G__42524;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_le(m,a);
}));

(clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.core.matrix.protocols.element_le),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),arrays)));
}));

/** @this {Function} */
(clojure.core.matrix.le.cljs$lang$applyTo = (function (seq42061){
var G__42062 = cljs.core.first(seq42061);
var seq42061__$1 = cljs.core.next(seq42061);
var G__42063 = cljs.core.first(seq42061__$1);
var seq42061__$2 = cljs.core.next(seq42061__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42062,G__42063,seq42061__$2);
}));

(clojure.core.matrix.le.cljs$lang$maxFixedArity = (2));

/**
 * Element-wise greater-than comparison operation. Returns a binary array where
 *   elements greater-than the argument are represented by 1 and elements less-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (gt 4 3) ;=> 1
 *   (gt 3 3) ;=> 0
 *   (gt [[1 5] [3 6]] 3) ;=> [[0 1] [0 1]]
 *   (gt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 0]]
 */
clojure.core.matrix.gt = (function clojure$core$matrix$gt(var_args){
var G__42069 = arguments.length;
switch (G__42069) {
case 2:
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42526 = arguments.length;
var i__4790__auto___42527 = (0);
while(true){
if((i__4790__auto___42527 < len__4789__auto___42526)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42527]));

var G__42528 = (i__4790__auto___42527 + (1));
i__4790__auto___42527 = G__42528;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_gt(m,a);
}));

(clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.core.matrix.protocols.element_gt),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),arrays)));
}));

/** @this {Function} */
(clojure.core.matrix.gt.cljs$lang$applyTo = (function (seq42066){
var G__42067 = cljs.core.first(seq42066);
var seq42066__$1 = cljs.core.next(seq42066);
var G__42068 = cljs.core.first(seq42066__$1);
var seq42066__$2 = cljs.core.next(seq42066__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42067,G__42068,seq42066__$2);
}));

(clojure.core.matrix.gt.cljs$lang$maxFixedArity = (2));

/**
 * Element-wise greater-than-or-equal-to comparison operation. Returns a binary
 *   array where elements greater-than or equal to the argument are represented by 1
 *   and elements less-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ge 2 3) ;=> 0
 *   (ge 3 3) ;=> 1
 *   (ge [[1 5] [3 6]] 3) ;=> [[0 1] [1 1]]
 *   (ge [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 1]]
 */
clojure.core.matrix.ge = (function clojure$core$matrix$ge(var_args){
var G__42074 = arguments.length;
switch (G__42074) {
case 2:
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42530 = arguments.length;
var i__4790__auto___42531 = (0);
while(true){
if((i__4790__auto___42531 < len__4789__auto___42530)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42531]));

var G__42532 = (i__4790__auto___42531 + (1));
i__4790__auto___42531 = G__42532;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_ge(m,a);
}));

(clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.core.matrix.protocols.element_ge),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),arrays)));
}));

/** @this {Function} */
(clojure.core.matrix.ge.cljs$lang$applyTo = (function (seq42071){
var G__42072 = cljs.core.first(seq42071);
var seq42071__$1 = cljs.core.next(seq42071);
var G__42073 = cljs.core.first(seq42071__$1);
var seq42071__$2 = cljs.core.next(seq42071__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42072,G__42073,seq42071__$2);
}));

(clojure.core.matrix.ge.cljs$lang$maxFixedArity = (2));

/**
 * Element-wise not-equal comparison operation. Returns a binary array where
 *   elements not-equal to the argument are represented by 1 and elements equal to
 *   the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ne 1 1) ;=> 0
 *   (ne 5 1) ;=> 1
 *   (ne [[1 5] [3 6]] 3) ;=> [[1 1] [0 1]]
 *   (ne [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 1] [1 0]]
 */
clojure.core.matrix.ne = (function clojure$core$matrix$ne(m,a){
return clojure.core.matrix.protocols.element_ne(m,a);
});
/**
 * Element-wise equal comparison operation. Returns a binary
 * array where elements equal to the argument are represented by 1 and
 * elements not-equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eq 1 1) ;=> 1
 *   (eq 5 1) ;=> 0
 *   (eq [[1 5] [3 6]] 3) ;=> [[0 0] [1 0]]
 *   (eq [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 0] [0 1]]
 */
clojure.core.matrix.eq = (function clojure$core$matrix$eq(m,a){
return clojure.core.matrix.protocols.element_eq(m,a);
});
/**
 * Returns true if all corresponding array elements are equal (using the semantics of clojure.core/=).
 * 
 * WARNING: a java.lang.Long does not equal a java.lang.Double.
 * Use 'equals' or 'e==' instead if you want to test for numerical equality.
 */
clojure.core.matrix.e_EQ_ = (function clojure$core$matrix$e_EQ_(var_args){
var G__42079 = arguments.length;
switch (G__42079) {
case 1:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42534 = arguments.length;
var i__4790__auto___42535 = (0);
while(true){
if((i__4790__auto___42535 < len__4789__auto___42534)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42535]));

var G__42536 = (i__4790__auto___42535 + (1));
i__4790__auto___42535 = G__42536;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
}));

(clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.protocols.value_equals(m1,m2);
}));

(clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
var and__4174__auto__ = clojure.core.matrix.protocols.value_equals(m1,m2);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.e_EQ_,m2,more);
} else {
return and__4174__auto__;
}
}));

/** @this {Function} */
(clojure.core.matrix.e_EQ_.cljs$lang$applyTo = (function (seq42076){
var G__42077 = cljs.core.first(seq42076);
var seq42076__$1 = cljs.core.next(seq42076);
var G__42078 = cljs.core.first(seq42076__$1);
var seq42076__$2 = cljs.core.next(seq42076__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42077,G__42078,seq42076__$2);
}));

(clojure.core.matrix.e_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns true if all corresponding array elements are numerically equal.
 * 
 * Throws an error if any elements of the arrays being compared are not numerical values.
 */
clojure.core.matrix.e_EQ__EQ_ = (function clojure$core$matrix$e_EQ__EQ_(var_args){
var G__42084 = arguments.length;
switch (G__42084) {
case 1:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42538 = arguments.length;
var i__4790__auto___42539 = (0);
while(true){
if((i__4790__auto___42539 < len__4789__auto___42538)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42539]));

var G__42540 = (i__4790__auto___42539 + (1));
i__4790__auto___42539 = G__42540;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
}));

(clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2(m1,m2);
}));

(clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.equals,clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2(m1,m2),more);
}));

/** @this {Function} */
(clojure.core.matrix.e_EQ__EQ_.cljs$lang$applyTo = (function (seq42081){
var G__42082 = cljs.core.first(seq42081);
var seq42081__$1 = cljs.core.next(seq42081);
var G__42083 = cljs.core.first(seq42081__$1);
var seq42081__$2 = cljs.core.next(seq42081__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42082,G__42083,seq42081__$2);
}));

(clojure.core.matrix.e_EQ__EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns a label for the specified position along a given array dimension. Returns nil if the dimension is unlabelled.
 */
clojure.core.matrix.label = (function clojure$core$matrix$label(m,dim,i){
return clojure.core.matrix.protocols.label(m,dim,i);
});
/**
 * Return a vector of labels for a given array dimension. Return nil if the dimension is unlabelled.
 */
clojure.core.matrix.labels = (function clojure$core$matrix$labels(m,dim){
return clojure.core.matrix.protocols.labels(m,dim);
});
/**
 * Return the index of a label along a given dimension. Returns nil if the label does not exist.
 */
clojure.core.matrix.label_index = (function clojure$core$matrix$label_index(m,dim,label){
var ls = clojure.core.matrix.protocols.labels(m,dim);
var and__4174__auto__ = ls;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.core.matrix.utils.find_index(ls,label);
} else {
return and__4174__auto__;
}
});
/**
 * Performs element-wise multiplication with scalars and numerical arrays.
 * 
 * Examples: 
 *   (mul [1 2] [3 4]) ;=> [3 8]
 * 
 * Behaves like clojure.core/* for scalar values.
 */
clojure.core.matrix.mul = (function clojure$core$matrix$mul(var_args){
var G__42089 = arguments.length;
switch (G__42089) {
case 0:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42542 = arguments.length;
var i__4790__auto___42543 = (0);
while(true){
if((i__4790__auto___42543 < len__4789__auto___42542)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42543]));

var G__42544 = (i__4790__auto___42543 + (1));
i__4790__auto___42543 = G__42544;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply(a,b);
}));

(clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.element_multiply,clojure.core.matrix.protocols.element_multiply(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.mul.cljs$lang$applyTo = (function (seq42086){
var G__42087 = cljs.core.first(seq42086);
var seq42086__$1 = cljs.core.next(seq42086);
var G__42088 = cljs.core.first(seq42086__$1);
var seq42086__$2 = cljs.core.next(seq42086__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42087,G__42088,seq42086__$2);
}));

(clojure.core.matrix.mul.cljs$lang$maxFixedArity = (2));

/**
 * DEPRECATED: please use mul instead.
 */
clojure.core.matrix.emul = (function clojure$core$matrix$emul(var_args){
var G__42094 = arguments.length;
switch (G__42094) {
case 0:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42546 = arguments.length;
var i__4790__auto___42547 = (0);
while(true){
if((i__4790__auto___42547 < len__4789__auto___42546)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42547]));

var G__42548 = (i__4790__auto___42547 + (1));
i__4790__auto___42547 = G__42548;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply(a,b);
}));

(clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.element_multiply,clojure.core.matrix.protocols.element_multiply(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.emul.cljs$lang$applyTo = (function (seq42091){
var G__42092 = cljs.core.first(seq42091);
var seq42091__$1 = cljs.core.next(seq42091);
var G__42093 = cljs.core.first(seq42091__$1);
var seq42091__$2 = cljs.core.next(seq42091__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42092,G__42093,seq42091__$2);
}));

(clojure.core.matrix.emul.cljs$lang$maxFixedArity = (2));

/**
 * Performs matrix multiplication on matrices or vectors. 
 * 
 * Equivalent to inner-product, but may be more efficient for matrices.
 */
clojure.core.matrix.mmul = (function clojure$core$matrix$mmul(var_args){
var G__42099 = arguments.length;
switch (G__42099) {
case 0:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42550 = arguments.length;
var i__4790__auto___42551 = (0);
while(true){
if((i__4790__auto___42551 < len__4789__auto___42550)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42551]));

var G__42552 = (i__4790__auto___42551 + (1));
i__4790__auto___42551 = G__42552;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var or__4185__auto__ = clojure.core.matrix.protocols.matrix_multiply(a,b);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.inner_product(a,b);
}
}));

(clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.matrix_multiply,clojure.core.matrix.protocols.matrix_multiply(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.mmul.cljs$lang$applyTo = (function (seq42096){
var G__42097 = cljs.core.first(seq42096);
var seq42096__$1 = cljs.core.next(seq42096);
var G__42098 = cljs.core.first(seq42096__$1);
var seq42096__$2 = cljs.core.next(seq42096__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42097,G__42098,seq42096__$2);
}));

(clojure.core.matrix.mmul.cljs$lang$maxFixedArity = (2));

/**
 * An element-wise multiply operator equivalent to `mul`.
 */
clojure.core.matrix.e_STAR_ = (function clojure$core$matrix$e_STAR_(var_args){
var G__42104 = arguments.length;
switch (G__42104) {
case 0:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42554 = arguments.length;
var i__4790__auto___42555 = (0);
while(true){
if((i__4790__auto___42555 < len__4789__auto___42554)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42555]));

var G__42556 = (i__4790__auto___42555 + (1));
i__4790__auto___42555 = G__42556;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply(a,b);
}));

(clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.e_STAR_,clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.e_STAR_.cljs$lang$applyTo = (function (seq42101){
var G__42102 = cljs.core.first(seq42101);
var seq42101__$1 = cljs.core.next(seq42101);
var G__42103 = cljs.core.first(seq42101__$1);
var seq42101__$2 = cljs.core.next(seq42101__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42102,G__42103,seq42101__$2);
}));

(clojure.core.matrix.e_STAR_.cljs$lang$maxFixedArity = (2));

/**
 * Performs element-wise division on numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div = (function clojure$core$matrix$div(var_args){
var G__42109 = arguments.length;
switch (G__42109) {
case 1:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42558 = arguments.length;
var i__4790__auto___42559 = (0);
while(true){
if((i__4790__auto___42559 < len__4789__auto___42558)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42559]));

var G__42560 = (i__4790__auto___42559 + (1));
i__4790__auto___42559 = G__42560;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$1(a);
}));

(clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$2(a,b);
}));

(clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.element_divide,clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.div.cljs$lang$applyTo = (function (seq42106){
var G__42107 = cljs.core.first(seq42106);
var seq42106__$1 = cljs.core.next(seq42106);
var G__42108 = cljs.core.first(seq42106__$1);
var seq42106__$2 = cljs.core.next(seq42106__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42107,G__42108,seq42106__$2);
}));

(clojure.core.matrix.div.cljs$lang$maxFixedArity = (2));

/**
 * Performs in-place element-wise matrix division for numerical arrays.
 * 
 * All arguments after the first must be broadcastable to the shape of the first array.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div_BANG_ = (function clojure$core$matrix$div_BANG_(var_args){
var G__42114 = arguments.length;
switch (G__42114) {
case 1:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42562 = arguments.length;
var i__4790__auto___42563 = (0);
while(true){
if((i__4790__auto___42563 < len__4789__auto___42562)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42563]));

var G__42564 = (i__4790__auto___42563 + (1));
i__4790__auto___42563 = G__42564;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$1(a);

return a;
}));

(clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2(a,b);

return a;
}));

(clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2(a,b);

var seq__42115_42565 = cljs.core.seq(more);
var chunk__42116_42566 = null;
var count__42117_42567 = (0);
var i__42118_42568 = (0);
while(true){
if((i__42118_42568 < count__42117_42567)){
var c_42569 = chunk__42116_42566.cljs$core$IIndexed$_nth$arity$2(null,i__42118_42568);
clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2(a,c_42569);


var G__42570 = seq__42115_42565;
var G__42571 = chunk__42116_42566;
var G__42572 = count__42117_42567;
var G__42573 = (i__42118_42568 + (1));
seq__42115_42565 = G__42570;
chunk__42116_42566 = G__42571;
count__42117_42567 = G__42572;
i__42118_42568 = G__42573;
continue;
} else {
var temp__5735__auto___42574 = cljs.core.seq(seq__42115_42565);
if(temp__5735__auto___42574){
var seq__42115_42575__$1 = temp__5735__auto___42574;
if(cljs.core.chunked_seq_QMARK_(seq__42115_42575__$1)){
var c__4609__auto___42576 = cljs.core.chunk_first(seq__42115_42575__$1);
var G__42577 = cljs.core.chunk_rest(seq__42115_42575__$1);
var G__42578 = c__4609__auto___42576;
var G__42579 = cljs.core.count(c__4609__auto___42576);
var G__42580 = (0);
seq__42115_42565 = G__42577;
chunk__42116_42566 = G__42578;
count__42117_42567 = G__42579;
i__42118_42568 = G__42580;
continue;
} else {
var c_42581 = cljs.core.first(seq__42115_42575__$1);
clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2(a,c_42581);


var G__42582 = cljs.core.next(seq__42115_42575__$1);
var G__42583 = null;
var G__42584 = (0);
var G__42585 = (0);
seq__42115_42565 = G__42582;
chunk__42116_42566 = G__42583;
count__42117_42567 = G__42584;
i__42118_42568 = G__42585;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.div_BANG_.cljs$lang$applyTo = (function (seq42111){
var G__42112 = cljs.core.first(seq42111);
var seq42111__$1 = cljs.core.next(seq42111);
var G__42113 = cljs.core.first(seq42111__$1);
var seq42111__$2 = cljs.core.next(seq42111__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42112,G__42113,seq42111__$2);
}));

(clojure.core.matrix.div_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * All arguments after the first must be broadcastable to the shape of the first array.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.mul_BANG_ = (function clojure$core$matrix$mul_BANG_(var_args){
var G__42123 = arguments.length;
switch (G__42123) {
case 1:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42587 = arguments.length;
var i__4790__auto___42588 = (0);
while(true){
if((i__4790__auto___42588 < len__4789__auto___42587)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42588]));

var G__42589 = (i__4790__auto___42588 + (1));
i__4790__auto___42588 = G__42589;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_(a,b);

return a;
}));

(clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_(a,b);

var seq__42124_42590 = cljs.core.seq(more);
var chunk__42125_42591 = null;
var count__42126_42592 = (0);
var i__42127_42593 = (0);
while(true){
if((i__42127_42593 < count__42126_42592)){
var c_42594 = chunk__42125_42591.cljs$core$IIndexed$_nth$arity$2(null,i__42127_42593);
clojure.core.matrix.protocols.element_multiply_BANG_(a,c_42594);


var G__42595 = seq__42124_42590;
var G__42596 = chunk__42125_42591;
var G__42597 = count__42126_42592;
var G__42598 = (i__42127_42593 + (1));
seq__42124_42590 = G__42595;
chunk__42125_42591 = G__42596;
count__42126_42592 = G__42597;
i__42127_42593 = G__42598;
continue;
} else {
var temp__5735__auto___42599 = cljs.core.seq(seq__42124_42590);
if(temp__5735__auto___42599){
var seq__42124_42600__$1 = temp__5735__auto___42599;
if(cljs.core.chunked_seq_QMARK_(seq__42124_42600__$1)){
var c__4609__auto___42601 = cljs.core.chunk_first(seq__42124_42600__$1);
var G__42602 = cljs.core.chunk_rest(seq__42124_42600__$1);
var G__42603 = c__4609__auto___42601;
var G__42604 = cljs.core.count(c__4609__auto___42601);
var G__42605 = (0);
seq__42124_42590 = G__42602;
chunk__42125_42591 = G__42603;
count__42126_42592 = G__42604;
i__42127_42593 = G__42605;
continue;
} else {
var c_42606 = cljs.core.first(seq__42124_42600__$1);
clojure.core.matrix.protocols.element_multiply_BANG_(a,c_42606);


var G__42607 = cljs.core.next(seq__42124_42600__$1);
var G__42608 = null;
var G__42609 = (0);
var G__42610 = (0);
seq__42124_42590 = G__42607;
chunk__42125_42591 = G__42608;
count__42126_42592 = G__42609;
i__42127_42593 = G__42610;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.mul_BANG_.cljs$lang$applyTo = (function (seq42120){
var G__42121 = cljs.core.first(seq42120);
var seq42120__$1 = cljs.core.next(seq42120);
var G__42122 = cljs.core.first(seq42120__$1);
var seq42120__$2 = cljs.core.next(seq42120__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42121,G__42122,seq42120__$2);
}));

(clojure.core.matrix.mul_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.emul_BANG_ = (function clojure$core$matrix$emul_BANG_(var_args){
var G__42132 = arguments.length;
switch (G__42132) {
case 1:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42612 = arguments.length;
var i__4790__auto___42613 = (0);
while(true){
if((i__4790__auto___42613 < len__4789__auto___42612)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42613]));

var G__42614 = (i__4790__auto___42613 + (1));
i__4790__auto___42613 = G__42614;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_(a,b);

return a;
}));

(clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_(a,b);

var seq__42133_42615 = cljs.core.seq(more);
var chunk__42134_42616 = null;
var count__42135_42617 = (0);
var i__42136_42618 = (0);
while(true){
if((i__42136_42618 < count__42135_42617)){
var c_42619 = chunk__42134_42616.cljs$core$IIndexed$_nth$arity$2(null,i__42136_42618);
clojure.core.matrix.protocols.element_multiply_BANG_(a,c_42619);


var G__42620 = seq__42133_42615;
var G__42621 = chunk__42134_42616;
var G__42622 = count__42135_42617;
var G__42623 = (i__42136_42618 + (1));
seq__42133_42615 = G__42620;
chunk__42134_42616 = G__42621;
count__42135_42617 = G__42622;
i__42136_42618 = G__42623;
continue;
} else {
var temp__5735__auto___42624 = cljs.core.seq(seq__42133_42615);
if(temp__5735__auto___42624){
var seq__42133_42625__$1 = temp__5735__auto___42624;
if(cljs.core.chunked_seq_QMARK_(seq__42133_42625__$1)){
var c__4609__auto___42626 = cljs.core.chunk_first(seq__42133_42625__$1);
var G__42627 = cljs.core.chunk_rest(seq__42133_42625__$1);
var G__42628 = c__4609__auto___42626;
var G__42629 = cljs.core.count(c__4609__auto___42626);
var G__42630 = (0);
seq__42133_42615 = G__42627;
chunk__42134_42616 = G__42628;
count__42135_42617 = G__42629;
i__42136_42618 = G__42630;
continue;
} else {
var c_42631 = cljs.core.first(seq__42133_42625__$1);
clojure.core.matrix.protocols.element_multiply_BANG_(a,c_42631);


var G__42632 = cljs.core.next(seq__42133_42625__$1);
var G__42633 = null;
var G__42634 = (0);
var G__42635 = (0);
seq__42133_42615 = G__42632;
chunk__42134_42616 = G__42633;
count__42135_42617 = G__42634;
i__42136_42618 = G__42635;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.emul_BANG_.cljs$lang$applyTo = (function (seq42129){
var G__42130 = cljs.core.first(seq42129);
var seq42129__$1 = cljs.core.next(seq42129);
var G__42131 = cljs.core.first(seq42129__$1);
var seq42129__$2 = cljs.core.next(seq42129__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42130,G__42131,seq42129__$2);
}));

(clojure.core.matrix.emul_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Transforms a given vector with a transformation, returning a new vector.
 * 
 * The transformation may be a 2D matrix, but other types of transformation may also be supported
 * e.g. affine transformations, unary operators.
 */
clojure.core.matrix.transform = (function clojure$core$matrix$transform(t,v){
return clojure.core.matrix.protocols.vector_transform(t,v);
});
/**
 * Transforms a given vector in place. This is a mutable equivalent to `transform`.
 * 
 * Returns the transformed vector.
 * 
 * The transformation must map an n-dimensional vector to another n-dimensional vector, i.e.
 * if it is a 2D matrix then it must have shape [n x n].
 */
clojure.core.matrix.transform_BANG_ = (function clojure$core$matrix$transform_BANG_(t,v){
clojure.core.matrix.protocols.vector_transform_BANG_(t,v);

return v;
});
/**
 * Performs element-wise addition on one or more numerical arrays.
 * 
 * Will broadcast to the smallest shape compatible will addition of all input arrays.
 */
clojure.core.matrix.add = (function clojure$core$matrix$add(var_args){
var G__42141 = arguments.length;
switch (G__42141) {
case 0:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42637 = arguments.length;
var i__4790__auto___42638 = (0);
while(true){
if((i__4790__auto___42638 < len__4789__auto___42637)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42638]));

var G__42639 = (i__4790__auto___42638 + (1));
i__4790__auto___42638 = G__42639;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0 = (function (){
return 0.0;
}));

(clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_add(a,b);
}));

(clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.matrix_add,clojure.core.matrix.protocols.matrix_add(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.add.cljs$lang$applyTo = (function (seq42138){
var G__42139 = cljs.core.first(seq42138);
var seq42138__$1 = cljs.core.next(seq42138);
var G__42140 = cljs.core.first(seq42138__$1);
var seq42138__$2 = cljs.core.next(seq42138__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42139,G__42140,seq42138__$2);
}));

(clojure.core.matrix.add.cljs$lang$maxFixedArity = (2));

/**
 * Performs element-wise mutable addition on one or more numerical arrays. This is the mutable
 * equivalent of `add`.
 * 
 * All arguments after the first must be broadcastable to the shape of the first array.
 * 
 * When adding many arrays, use of `add!` with a mutable array as the first argument is
 * usually faster than repreated use of `add` because it can avoid unnecessary copying.
 * 
 * Returns the first array after it has been mutated.
 */
clojure.core.matrix.add_BANG_ = (function clojure$core$matrix$add_BANG_(var_args){
var G__42146 = arguments.length;
switch (G__42146) {
case 1:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42641 = arguments.length;
var i__4790__auto___42642 = (0);
while(true){
if((i__4790__auto___42642 < len__4789__auto___42641)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42642]));

var G__42643 = (i__4790__auto___42642 + (1));
i__4790__auto___42642 = G__42643;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_add_BANG_(a,b);

return a;
}));

(clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_add_BANG_(a,b);

var seq__42147_42644 = cljs.core.seq(more);
var chunk__42148_42645 = null;
var count__42149_42646 = (0);
var i__42150_42647 = (0);
while(true){
if((i__42150_42647 < count__42149_42646)){
var m_42648 = chunk__42148_42645.cljs$core$IIndexed$_nth$arity$2(null,i__42150_42647);
clojure.core.matrix.protocols.matrix_add_BANG_(a,m_42648);


var G__42649 = seq__42147_42644;
var G__42650 = chunk__42148_42645;
var G__42651 = count__42149_42646;
var G__42652 = (i__42150_42647 + (1));
seq__42147_42644 = G__42649;
chunk__42148_42645 = G__42650;
count__42149_42646 = G__42651;
i__42150_42647 = G__42652;
continue;
} else {
var temp__5735__auto___42653 = cljs.core.seq(seq__42147_42644);
if(temp__5735__auto___42653){
var seq__42147_42654__$1 = temp__5735__auto___42653;
if(cljs.core.chunked_seq_QMARK_(seq__42147_42654__$1)){
var c__4609__auto___42655 = cljs.core.chunk_first(seq__42147_42654__$1);
var G__42656 = cljs.core.chunk_rest(seq__42147_42654__$1);
var G__42657 = c__4609__auto___42655;
var G__42658 = cljs.core.count(c__4609__auto___42655);
var G__42659 = (0);
seq__42147_42644 = G__42656;
chunk__42148_42645 = G__42657;
count__42149_42646 = G__42658;
i__42150_42647 = G__42659;
continue;
} else {
var m_42660 = cljs.core.first(seq__42147_42654__$1);
clojure.core.matrix.protocols.matrix_add_BANG_(a,m_42660);


var G__42661 = cljs.core.next(seq__42147_42654__$1);
var G__42662 = null;
var G__42663 = (0);
var G__42664 = (0);
seq__42147_42644 = G__42661;
chunk__42148_42645 = G__42662;
count__42149_42646 = G__42663;
i__42150_42647 = G__42664;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.add_BANG_.cljs$lang$applyTo = (function (seq42143){
var G__42144 = cljs.core.first(seq42143);
var seq42143__$1 = cljs.core.next(seq42143);
var G__42145 = cljs.core.first(seq42143__$1);
var seq42143__$2 = cljs.core.next(seq42143__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42144,G__42145,seq42143__$2);
}));

(clojure.core.matrix.add_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Adds the element-wise product of two numerical arrays to the first array.
 * 
 * Arrays should be the same shape, some implementations may support broadcasting.
 */
clojure.core.matrix.add_product = (function clojure$core$matrix$add_product(m,a,b){
return clojure.core.matrix.protocols.add_product(m,a,b);
});
/**
 * Adds the product of two numerical arrays to the first array. Returns the mutated array.
 * 
 * Arrays should be the same shape, some implementations may support broadcasting.
 */
clojure.core.matrix.add_product_BANG_ = (function clojure$core$matrix$add_product_BANG_(m,a,b){
clojure.core.matrix.protocols.add_product_BANG_(m,a,b);

return m;
});
/**
 * Adds a numerical array scaled by a given factor to the first array. 
 * 
 * Factor should be a scalar numerical value.
 */
clojure.core.matrix.add_scaled = (function clojure$core$matrix$add_scaled(m,a,factor){
return clojure.core.matrix.protocols.add_scaled(m,a,factor);
});
/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add (mul m1 a) (mul m2 b) constant)
 * 
 * Returns a new array.
 */
clojure.core.matrix.scale_add = (function clojure$core$matrix$scale_add(var_args){
var G__42152 = arguments.length;
switch (G__42152) {
case 4:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.protocols.scale_add(m1,a,m2,b,0.0);
}));

(clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
return clojure.core.matrix.protocols.scale_add(m1,a,m2,b,constant);
}));

(clojure.core.matrix.scale_add.cljs$lang$maxFixedArity = 5);

/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add! (mul! m1 a) (mul m2 b) constant)
 * 
 * Returns the mutated array `m1`. The array `m2` will not be changed.
 */
clojure.core.matrix.scale_add_BANG_ = (function clojure$core$matrix$scale_add_BANG_(var_args){
var G__42154 = arguments.length;
switch (G__42154) {
case 4:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5(m1,a,m2,b,0.0);
}));

(clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.scale_add_BANG_(m1,a,m2,b,constant);

return m1;
}));

(clojure.core.matrix.scale_add_BANG_.cljs$lang$maxFixedArity = 5);

/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a new array.
 */
clojure.core.matrix.lerp = (function clojure$core$matrix$lerp(a,b,factor){
return clojure.core.matrix.protocols.lerp(a,b,factor);
});
/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a the mutated first array.
 */
clojure.core.matrix.lerp_BANG_ = (function clojure$core$matrix$lerp_BANG_(a,b,factor){
clojure.core.matrix.protocols.lerp_BANG_(a,b,factor);

return a;
});
/**
 * Adds a numerical array scaled by a given factor to the first array. Returns the mutated array.
 */
clojure.core.matrix.add_scaled_BANG_ = (function clojure$core$matrix$add_scaled_BANG_(m,a,factor){
clojure.core.matrix.protocols.add_scaled_BANG_(m,a,factor);

return m;
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * 
 * This is equivalent to (add m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product = (function clojure$core$matrix$add_scaled_product(m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_product(m,a,b,factor);
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product_BANG_ = (function clojure$core$matrix$add_scaled_product_BANG_(m,a,b,factor){
clojure.core.matrix.protocols.add_scaled_product_BANG_(m,a,b,factor);

return m;
});
/**
 * Adds the inner product of two numerical arrays to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_inner_product_BANG_ = (function clojure$core$matrix$add_inner_product_BANG_(var_args){
var G__42156 = arguments.length;
switch (G__42156) {
case 3:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3(m,a,b);

return m;
}));

(clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4(m,a,b,factor);

return m;
}));

(clojure.core.matrix.add_inner_product_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Adds the inner product of two numerical arrays to the first array.
 * 
 * Returns the mutated array.
 * 
 * This is equivalent to (add! m (outer-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_outer_product_BANG_ = (function clojure$core$matrix$add_outer_product_BANG_(var_args){
var G__42158 = arguments.length;
switch (G__42158) {
case 3:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3(m,a,b);

return m;
}));

(clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4(m,a,b,factor);

return m;
}));

(clojure.core.matrix.add_outer_product_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Sets an array equal to the inner product of two numerical arrays.
 * Returns the mutated first array.
 * This is equivalent to (assign! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.set_inner_product_BANG_ = (function clojure$core$matrix$set_inner_product_BANG_(var_args){
var G__42160 = arguments.length;
switch (G__42160) {
case 3:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3(m,a,b);

return m;
}));

(clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4(m,a,b,factor);

return m;
}));

(clojure.core.matrix.set_inner_product_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Performs element-wise subtraction on one or more numerical arrays.
 * 
 * For a single argument, returns the negation.
 * 
 * Returns a new array.
 */
clojure.core.matrix.sub = (function clojure$core$matrix$sub(var_args){
var G__42165 = arguments.length;
switch (G__42165) {
case 1:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42671 = arguments.length;
var i__4790__auto___42672 = (0);
while(true){
if((i__4790__auto___42672 < len__4789__auto___42671)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42672]));

var G__42673 = (i__4790__auto___42672 + (1));
i__4790__auto___42672 = G__42673;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.negate(a);
}));

(clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_sub(a,b);
}));

(clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.matrix_sub,clojure.core.matrix.protocols.matrix_sub(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.sub.cljs$lang$applyTo = (function (seq42162){
var G__42163 = cljs.core.first(seq42162);
var seq42162__$1 = cljs.core.next(seq42162);
var G__42164 = cljs.core.first(seq42162__$1);
var seq42162__$2 = cljs.core.next(seq42162__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42163,G__42164,seq42162__$2);
}));

(clojure.core.matrix.sub.cljs$lang$maxFixedArity = (2));

/**
 * Performs element-wise mutable subtraction on one or more numerical arrays.
 * 
 * NOTE: For a single argument, returns the argument unchanged: use negate! instead if you wish to negate a mutable
 * array in place. This is intentional, so that you can do (apply sub! m list-of-arrays) and get the expected
 * result if the list of arrays is empty.
 * 
 * Returns the first array, after it has been mutated.
 */
clojure.core.matrix.sub_BANG_ = (function clojure$core$matrix$sub_BANG_(var_args){
var G__42170 = arguments.length;
switch (G__42170) {
case 1:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42675 = arguments.length;
var i__4790__auto___42676 = (0);
while(true){
if((i__4790__auto___42676 < len__4789__auto___42675)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42676]));

var G__42677 = (i__4790__auto___42676 + (1));
i__4790__auto___42676 = G__42677;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_sub_BANG_(a,b);

return a;
}));

(clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_sub_BANG_(a,b);

var seq__42171_42678 = cljs.core.seq(more);
var chunk__42172_42679 = null;
var count__42173_42680 = (0);
var i__42174_42681 = (0);
while(true){
if((i__42174_42681 < count__42173_42680)){
var m_42682 = chunk__42172_42679.cljs$core$IIndexed$_nth$arity$2(null,i__42174_42681);
clojure.core.matrix.protocols.matrix_sub_BANG_(a,m_42682);


var G__42683 = seq__42171_42678;
var G__42684 = chunk__42172_42679;
var G__42685 = count__42173_42680;
var G__42686 = (i__42174_42681 + (1));
seq__42171_42678 = G__42683;
chunk__42172_42679 = G__42684;
count__42173_42680 = G__42685;
i__42174_42681 = G__42686;
continue;
} else {
var temp__5735__auto___42687 = cljs.core.seq(seq__42171_42678);
if(temp__5735__auto___42687){
var seq__42171_42688__$1 = temp__5735__auto___42687;
if(cljs.core.chunked_seq_QMARK_(seq__42171_42688__$1)){
var c__4609__auto___42689 = cljs.core.chunk_first(seq__42171_42688__$1);
var G__42690 = cljs.core.chunk_rest(seq__42171_42688__$1);
var G__42691 = c__4609__auto___42689;
var G__42692 = cljs.core.count(c__4609__auto___42689);
var G__42693 = (0);
seq__42171_42678 = G__42690;
chunk__42172_42679 = G__42691;
count__42173_42680 = G__42692;
i__42174_42681 = G__42693;
continue;
} else {
var m_42694 = cljs.core.first(seq__42171_42688__$1);
clojure.core.matrix.protocols.matrix_sub_BANG_(a,m_42694);


var G__42695 = cljs.core.next(seq__42171_42688__$1);
var G__42696 = null;
var G__42697 = (0);
var G__42698 = (0);
seq__42171_42678 = G__42695;
chunk__42172_42679 = G__42696;
count__42173_42680 = G__42697;
i__42174_42681 = G__42698;
continue;
}
} else {
}
}
break;
}

return a;
}));

/** @this {Function} */
(clojure.core.matrix.sub_BANG_.cljs$lang$applyTo = (function (seq42167){
var G__42168 = cljs.core.first(seq42167);
var seq42167__$1 = cljs.core.next(seq42167);
var G__42169 = cljs.core.first(seq42167__$1);
var seq42167__$2 = cljs.core.next(seq42167__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42168,G__42169,seq42167__$2);
}));

(clojure.core.matrix.sub_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Scales a array by one or more scalar factors. The default implementation supports numerical arrays and
 * numbers as scalar values, however matrix implementations may extend this to support other scalar types.
 * 
 * Returns a new scaled matrix.
 */
clojure.core.matrix.scale = (function clojure$core$matrix$scale(var_args){
var G__42179 = arguments.length;
switch (G__42179) {
case 2:
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42700 = arguments.length;
var i__4790__auto___42701 = (0);
while(true){
if((i__4790__auto___42701 < len__4789__auto___42700)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42701]));

var G__42702 = (i__4790__auto___42701 + (1));
i__4790__auto___42701 = G__42702;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
return clojure.core.matrix.protocols.scale(m,factor);
}));

(clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
return clojure.core.matrix.protocols.scale(m,clojure.core.matrix.protocols.element_multiply(factor,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,more_factors)));
}));

/** @this {Function} */
(clojure.core.matrix.scale.cljs$lang$applyTo = (function (seq42176){
var G__42177 = cljs.core.first(seq42176);
var seq42176__$1 = cljs.core.next(seq42176);
var G__42178 = cljs.core.first(seq42176__$1);
var seq42176__$2 = cljs.core.next(seq42176__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42177,G__42178,seq42176__$2);
}));

(clojure.core.matrix.scale.cljs$lang$maxFixedArity = (2));

/**
 * Scales a numerical array by one or more scalar factors (in place). The default implementation supports
 * numerical arrays and numbers as scalar values, however matrix implementations may extend this to
 * support other scalar types (e.g. complex numbers).
 * 
 * Returns the array after it has been mutated.
 */
clojure.core.matrix.scale_BANG_ = (function clojure$core$matrix$scale_BANG_(var_args){
var G__42184 = arguments.length;
switch (G__42184) {
case 2:
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42704 = arguments.length;
var i__4790__auto___42705 = (0);
while(true){
if((i__4790__auto___42705 < len__4789__auto___42704)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42705]));

var G__42706 = (i__4790__auto___42705 + (1));
i__4790__auto___42705 = G__42706;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
clojure.core.matrix.protocols.scale_BANG_(m,factor);

return m;
}));

(clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
clojure.core.matrix.protocols.scale_BANG_(m,clojure.core.matrix.protocols.element_multiply(factor,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_multiply,more_factors)));

return m;
}));

/** @this {Function} */
(clojure.core.matrix.scale_BANG_.cljs$lang$applyTo = (function (seq42181){
var G__42182 = cljs.core.first(seq42181);
var seq42181__$1 = cljs.core.next(seq42181);
var G__42183 = cljs.core.first(seq42181__$1);
var seq42181__$2 = cljs.core.next(seq42181__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42182,G__42183,seq42181__$2);
}));

(clojure.core.matrix.scale_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Squares every element of a numerical array. Returns a new array.
 */
clojure.core.matrix.square = (function clojure$core$matrix$square(m){
return clojure.core.matrix.protocols.square(m);
});
/**
 * Normalises a numerical vector (scales to unit length, i.e. the L2 norm). 
 * 
 * Returns a new normalised vector.
 * 
 * The result is undefined if the initial length of the vector is zero (it is possible the
 * implementation may return NaNs or zeros). If this is a concern, it is recommended to check
 * the length of the vector first in order to handle this as a special case.
 */
clojure.core.matrix.normalise = (function clojure$core$matrix$normalise(v){
return clojure.core.matrix.protocols.normalise(v);
});
/**
 * Like 'normalise', but mutates a numerical vector in-place (scales to unit length).
 * Returns the modified vector.
 */
clojure.core.matrix.normalise_BANG_ = (function clojure$core$matrix$normalise_BANG_(v){
clojure.core.matrix.protocols.normalise_BANG_(v);

return v;
});
/**
 * Efficiently computes the scalar dot product (1Dx1D inner product) of two numerical vectors. Prefer this API
 * function if you are performing a dot product on 1D vectors and require a scalar result.
 * 
 * If either argument is not a vector, will compute and return a higher dimensional inner-product.
 */
clojure.core.matrix.dot = (function clojure$core$matrix$dot(a,b){
var or__4185__auto__ = clojure.core.matrix.protocols.vector_dot(a,b);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var v = clojure.core.matrix.protocols.inner_product(a,b);
if(typeof v === 'number'){
return v;
} else {
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(v)))){
return clojure.core.matrix.protocols.get_0d(v);
} else {
return v;

}
}
}
});
/**
 * Computes the inner product of numerical arrays.
 * 
 * For matrix/matrix and matrix/vector arguments, this is equivalent to matrix multiplication.
 * 
 * The inner product of two arrays with indexed dimensions {..i j} and {j k..} has dimensions {..i k..}. The inner-product of two vectors will be scalar.
 */
clojure.core.matrix.inner_product = (function clojure$core$matrix$inner_product(var_args){
var G__42189 = arguments.length;
switch (G__42189) {
case 0:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42708 = arguments.length;
var i__4790__auto___42709 = (0);
while(true){
if((i__4790__auto___42709 < len__4789__auto___42708)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42709]));

var G__42710 = (i__4790__auto___42709 + (1));
i__4790__auto___42709 = G__42710;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.inner_product(a,b);
}));

(clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.inner_product,clojure.core.matrix.protocols.inner_product(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.inner_product.cljs$lang$applyTo = (function (seq42186){
var G__42187 = cljs.core.first(seq42186);
var seq42186__$1 = cljs.core.next(seq42186);
var G__42188 = cljs.core.first(seq42186__$1);
var seq42186__$2 = cljs.core.next(seq42186__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42187,G__42188,seq42186__$2);
}));

(clojure.core.matrix.inner_product.cljs$lang$maxFixedArity = (2));

/**
 * Computes the outer product of numerical arrays.
 * 
 * For two vectors of size m and n, the result will be a m x n matrix.
 * 
 * In general, the outer product fior higher diemnsional arrays is defined as the 
 * tensor product (see https://en.wikipedia.org/wiki/Tensor_product)
 * i.e. The outer product of two arrays with indexed dimensions {i..j} and {k..l} 
 * has dimensions {i..j k..l}. The dimensionality of the result will be the
 * sum of the dimensionalities of the two arguments.
 */
clojure.core.matrix.outer_product = (function clojure$core$matrix$outer_product(var_args){
var G__42194 = arguments.length;
switch (G__42194) {
case 0:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42712 = arguments.length;
var i__4790__auto___42713 = (0);
while(true){
if((i__4790__auto___42713 < len__4789__auto___42712)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42713]));

var G__42714 = (i__4790__auto___42713 + (1));
i__4790__auto___42713 = G__42714;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
}));

(clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var or__4185__auto__ = clojure.core.matrix.protocols.outer_product(a,b);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.outer_product(clojure.core.matrix.protocols.convert_to_nested_vectors(a),b);
}
}));

(clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.outer_product,clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(clojure.core.matrix.outer_product.cljs$lang$applyTo = (function (seq42191){
var G__42192 = cljs.core.first(seq42191);
var seq42191__$1 = cljs.core.next(seq42191);
var G__42193 = cljs.core.first(seq42191__$1);
var seq42191__$2 = cljs.core.next(seq42191__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42192,G__42193,seq42191__$2);
}));

(clojure.core.matrix.outer_product.cljs$lang$maxFixedArity = (2));

/**
 * Computes the 3D cross-product of two numerical vectors.
 * 
 * Behavior on other types is undefined.
 */
clojure.core.matrix.cross = (function clojure$core$matrix$cross(a,b){
return clojure.core.matrix.protocols.cross_product(a,b);
});
/**
 * Computes the cross-product of two numerical 3D vectors a and b, storing the result in the first vector.
 * 
 * Returns the (mutated) first vector.
 */
clojure.core.matrix.cross_BANG_ = (function clojure$core$matrix$cross_BANG_(var_args){
var G__42196 = arguments.length;
switch (G__42196) {
case 2:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.cross_product_BANG_(a,b);

return a;
}));

(clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,a,b){
clojure.core.matrix.protocols.assign_BANG_(dest,a);

return clojure.core.matrix.protocols.cross_product_BANG_(dest,b);
}));

(clojure.core.matrix.cross_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Calculates the euclidean distance between two numerical vectors, as a single numerical scalar value.
 * 
 * This is equivalent to (norm 2 (sub a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.distance = (function clojure$core$matrix$distance(a,b){
return clojure.core.matrix.protocols.distance(a,b);
});
/**
 * Calculates the determinant of a 2D square numerical matrix, as a single numerical scalar value.
 */
clojure.core.matrix.det = (function clojure$core$matrix$det(a){
var or__4185__auto__ = clojure.core.matrix.protocols.determinant(a);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.determinant(clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations._STAR_numeric_implementation_STAR_,a));
}
});
/**
 * Calculates the inverse of a square 2D numerical matrix.
 * 
 * Returns nil if the matrix is singular. 
 * 
 * Throws an error is the argument is not a sqaure 2D matrix.
 */
clojure.core.matrix.inverse = (function clojure$core$matrix$inverse(m){
return clojure.core.matrix.protocols.inverse(m);
});
/**
 * Calculates the negation of a numerical array. Generally equivalent to (scale m -1.0)
 */
clojure.core.matrix.negate = (function clojure$core$matrix$negate(m){
return clojure.core.matrix.protocols.negate(m);
});
/**
 * Calculates the negation of a numerical array in place. Generally equivalent to (scale! m -1.0)
 */
clojure.core.matrix.negate_BANG_ = (function clojure$core$matrix$negate_BANG_(m){
clojure.core.matrix.protocols.scale_BANG_(m,-1.0);

return m;
});
/**
 * Calculates the trace of a 2D numerical matrix (sum of elements on main diagonal).
 * 
 * The matrix need not be square.
 */
clojure.core.matrix.trace = (function clojure$core$matrix$trace(a){
return clojure.core.matrix.protocols.trace(a);
});
/**
 * Calculates the magnitude over all elements in an array.
 * 
 * This is the 2-norm: equivalent to the Frobenius norm on matrices, or the Euclidean length on vectors.
 */
clojure.core.matrix.magnitude = (function clojure$core$matrix$magnitude(m){
return clojure.core.matrix.protocols.length(m);
});
/**
 * Calculates the squared magnitude over all elements in an array.
 * 
 * This may be more efficient that computing the magnitude in some implementations.
 */
clojure.core.matrix.magnitude_squared = (function clojure$core$matrix$magnitude_squared(m){
return clojure.core.matrix.protocols.length_squared(m);
});
/**
 * DEPRECATED: please use magnitude instead.
 */
clojure.core.matrix.length = (function clojure$core$matrix$length(m){
return clojure.core.matrix.protocols.length(m);
});
/**
 * DEPRECATED: please use magnitude-squared instead.
 */
clojure.core.matrix.length_squared = (function clojure$core$matrix$length_squared(m){
return clojure.core.matrix.protocols.length_squared(m);
});
/**
 * Raises every element of a numerical matrix by the given exponent.
 * 
 * Note that behaviour for large exponents may depend on the underlying implementation:
 * for example double-based matrices may overflow to Double/POSITIVE_INFINITY.
 */
clojure.core.matrix.pow = (function clojure$core$matrix$pow(var_args){
var G__42201 = arguments.length;
switch (G__42201) {
case 1:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42717 = arguments.length;
var i__4790__auto___42718 = (0);
while(true){
if((i__4790__auto___42718 < len__4789__auto___42717)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42718]));

var G__42719 = (i__4790__auto___42718 + (1));
i__4790__auto___42718 = G__42719;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1 = (function (m){
return m;
}));

(clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2 = (function (m,exponent){
return clojure.core.matrix.protocols.element_pow(m,exponent);
}));

(clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic = (function (m,exponent,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,x){
return clojure.core.matrix.protocols.element_pow(m__$1,x);
}),clojure.core.matrix.protocols.element_pow(m,exponent),more);
}));

/** @this {Function} */
(clojure.core.matrix.pow.cljs$lang$applyTo = (function (seq42198){
var G__42199 = cljs.core.first(seq42198);
var seq42198__$1 = cljs.core.next(seq42198);
var G__42200 = cljs.core.first(seq42198__$1);
var seq42198__$2 = cljs.core.next(seq42198__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42199,G__42200,seq42198__$2);
}));

(clojure.core.matrix.pow.cljs$lang$maxFixedArity = (2));

/**
 * Mutable exponent function, see 'pow'
 */
clojure.core.matrix.pow_BANG_ = (function clojure$core$matrix$pow_BANG_(m,a){
clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2(m,a));

return m;
});
/**
 * Computes the abs function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.abs = (function clojure$core$matrix$abs(m){
return clojure.core.matrix.protocols.abs(m);
});

/**
 * Computes the abs function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.abs_BANG_ = (function clojure$core$matrix$abs_BANG_(m){
clojure.core.matrix.protocols.abs_BANG_(m);

return m;
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.acos = (function clojure$core$matrix$acos(m){
return clojure.core.matrix.protocols.acos(m);
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.acos_BANG_ = (function clojure$core$matrix$acos_BANG_(m){
clojure.core.matrix.protocols.acos_BANG_(m);

return m;
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.asin = (function clojure$core$matrix$asin(m){
return clojure.core.matrix.protocols.asin(m);
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.asin_BANG_ = (function clojure$core$matrix$asin_BANG_(m){
clojure.core.matrix.protocols.asin_BANG_(m);

return m;
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.atan = (function clojure$core$matrix$atan(m){
return clojure.core.matrix.protocols.atan(m);
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.atan_BANG_ = (function clojure$core$matrix$atan_BANG_(m){
clojure.core.matrix.protocols.atan_BANG_(m);

return m;
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cbrt = (function clojure$core$matrix$cbrt(m){
return clojure.core.matrix.protocols.cbrt(m);
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cbrt_BANG_ = (function clojure$core$matrix$cbrt_BANG_(m){
clojure.core.matrix.protocols.cbrt_BANG_(m);

return m;
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.ceil = (function clojure$core$matrix$ceil(m){
return clojure.core.matrix.protocols.ceil(m);
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.ceil_BANG_ = (function clojure$core$matrix$ceil_BANG_(m){
clojure.core.matrix.protocols.ceil_BANG_(m);

return m;
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cos = (function clojure$core$matrix$cos(m){
return clojure.core.matrix.protocols.cos(m);
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cos_BANG_ = (function clojure$core$matrix$cos_BANG_(m){
clojure.core.matrix.protocols.cos_BANG_(m);

return m;
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cosh = (function clojure$core$matrix$cosh(m){
return clojure.core.matrix.protocols.cosh(m);
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cosh_BANG_ = (function clojure$core$matrix$cosh_BANG_(m){
clojure.core.matrix.protocols.cosh_BANG_(m);

return m;
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.exp = (function clojure$core$matrix$exp(m){
return clojure.core.matrix.protocols.exp(m);
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.exp_BANG_ = (function clojure$core$matrix$exp_BANG_(m){
clojure.core.matrix.protocols.exp_BANG_(m);

return m;
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.floor = (function clojure$core$matrix$floor(m){
return clojure.core.matrix.protocols.floor(m);
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.floor_BANG_ = (function clojure$core$matrix$floor_BANG_(m){
clojure.core.matrix.protocols.floor_BANG_(m);

return m;
});

/**
 * Computes the log function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log = (function clojure$core$matrix$log(m){
return clojure.core.matrix.protocols.log(m);
});

/**
 * Computes the log function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log_BANG_ = (function clojure$core$matrix$log_BANG_(m){
clojure.core.matrix.protocols.log_BANG_(m);

return m;
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log10 = (function clojure$core$matrix$log10(m){
return clojure.core.matrix.protocols.log10(m);
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log10_BANG_ = (function clojure$core$matrix$log10_BANG_(m){
clojure.core.matrix.protocols.log10_BANG_(m);

return m;
});

/**
 * Computes the round function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.round = (function clojure$core$matrix$round(m){
return clojure.core.matrix.protocols.round(m);
});

/**
 * Computes the round function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.round_BANG_ = (function clojure$core$matrix$round_BANG_(m){
clojure.core.matrix.protocols.round_BANG_(m);

return m;
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.signum = (function clojure$core$matrix$signum(m){
return clojure.core.matrix.protocols.signum(m);
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.signum_BANG_ = (function clojure$core$matrix$signum_BANG_(m){
clojure.core.matrix.protocols.signum_BANG_(m);

return m;
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sin = (function clojure$core$matrix$sin(m){
return clojure.core.matrix.protocols.sin(m);
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sin_BANG_ = (function clojure$core$matrix$sin_BANG_(m){
clojure.core.matrix.protocols.sin_BANG_(m);

return m;
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sinh = (function clojure$core$matrix$sinh(m){
return clojure.core.matrix.protocols.sinh(m);
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sinh_BANG_ = (function clojure$core$matrix$sinh_BANG_(m){
clojure.core.matrix.protocols.sinh_BANG_(m);

return m;
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sqrt = (function clojure$core$matrix$sqrt(m){
return clojure.core.matrix.protocols.sqrt(m);
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sqrt_BANG_ = (function clojure$core$matrix$sqrt_BANG_(m){
clojure.core.matrix.protocols.sqrt_BANG_(m);

return m;
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tan = (function clojure$core$matrix$tan(m){
return clojure.core.matrix.protocols.tan(m);
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tan_BANG_ = (function clojure$core$matrix$tan_BANG_(m){
clojure.core.matrix.protocols.tan_BANG_(m);

return m;
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tanh = (function clojure$core$matrix$tanh(m){
return clojure.core.matrix.protocols.tanh(m);
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tanh_BANG_ = (function clojure$core$matrix$tanh_BANG_(m){
clojure.core.matrix.protocols.tanh_BANG_(m);

return m;
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_degrees = (function clojure$core$matrix$to_degrees(m){
return clojure.core.matrix.protocols.to_degrees(m);
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_degrees_BANG_ = (function clojure$core$matrix$to_degrees_BANG_(m){
clojure.core.matrix.protocols.to_degrees_BANG_(m);

return m;
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_radians = (function clojure$core$matrix$to_radians(m){
return clojure.core.matrix.protocols.to_radians(m);
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_radians_BANG_ = (function clojure$core$matrix$to_radians_BANG_(m){
clojure.core.matrix.protocols.to_radians_BANG_(m);

return m;
});
/**
 * Computes the sigmoid (logistic) function for every element of an array.
 */
clojure.core.matrix.logistic = (function clojure$core$matrix$logistic(a){
return clojure.core.matrix.protocols.logistic(a);
});
/**
 * Computes the sigmoid (logistic) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.logistic_BANG_ = (function clojure$core$matrix$logistic_BANG_(a){
clojure.core.matrix.protocols.logistic_BANG_(a);

return a;
});
/**
 * Computes the softplus function for every element of an array.
 */
clojure.core.matrix.softplus = (function clojure$core$matrix$softplus(a){
return clojure.core.matrix.protocols.softplus(a);
});
/**
 * Computes the softplus function for every element of an array. Mutates the array.
 */
clojure.core.matrix.softplus_BANG_ = (function clojure$core$matrix$softplus_BANG_(a){
clojure.core.matrix.protocols.softplus_BANG_(a);

return a;
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array.
 */
clojure.core.matrix.relu = (function clojure$core$matrix$relu(a){
return clojure.core.matrix.protocols.relu(a);
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.relu_BANG_ = (function clojure$core$matrix$relu_BANG_(a){
clojure.core.matrix.protocols.relu_BANG_(a);

return a;
});
/**
 * Computes the softmax function for a numerical vector.
 */
clojure.core.matrix.softmax = (function clojure$core$matrix$softmax(a){
return clojure.core.matrix.protocols.softmax(a);
});
/**
 * Computes the softmax function for every element of a numerical vector. Mutates the vector.
 */
clojure.core.matrix.softmax_BANG_ = (function clojure$core$matrix$softmax_BANG_(a){
clojure.core.matrix.protocols.softmax_BANG_(a);

return a;
});
/**
 * Swap row i with row j in a matrix, returning a new matrix
 * 
 * This is one of the three elementary row operation (see https://en.wikipedia.org/wiki/Elementary_matrix).
 */
clojure.core.matrix.swap_rows = (function clojure$core$matrix$swap_rows(m,i,j){
return clojure.core.matrix.protocols.swap_rows(m,i,j);
});
/**
 * Multiply row i in a matrix by a constant factor, returning a new matrix
 * 
 * This is one of the three elementary row operation (see https://en.wikipedia.org/wiki/Elementary_matrix).
 */
clojure.core.matrix.multiply_row = (function clojure$core$matrix$multiply_row(m,i,factor){
return clojure.core.matrix.protocols.multiply_row(m,i,factor);
});
/**
 * Add a row j (optionally multiplied by a scalar factor) to a row i
 * and replace row i with the result. Returns a new matrix.
 * 
 * This is one of the three elementary row operation (see https://en.wikipedia.org/wiki/Elementary_matrix).
 */
clojure.core.matrix.add_row = (function clojure$core$matrix$add_row(var_args){
var G__42203 = arguments.length;
switch (G__42203) {
case 3:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3 = (function (m,i,j){
return clojure.core.matrix.protocols.add_row(m,i,j,1.0);
}));

(clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4 = (function (m,i,j,factor){
return clojure.core.matrix.protocols.add_row(m,i,j,factor);
}));

(clojure.core.matrix.add_row.cljs$lang$maxFixedArity = 4);

/**
 * Sets a row in a matrix using a specified vector.
 */
clojure.core.matrix.set_row = (function clojure$core$matrix$set_row(m,i,row){
return clojure.core.matrix.protocols.set_row(m,i,row);
});
/**
 * Sets a row in a matrix in-place using a specified vector.
 */
clojure.core.matrix.set_row_BANG_ = (function clojure$core$matrix$set_row_BANG_(m,i,row){
clojure.core.matrix.protocols.set_row_BANG_(m,i,row);

return m;
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column = (function clojure$core$matrix$set_column(m,i,column){
return clojure.core.matrix.protocols.set_column(m,i,column);
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column_BANG_ = (function clojure$core$matrix$set_column_BANG_(m,i,column){
clojure.core.matrix.protocols.set_column_BANG_(m,i,column);

return m;
});
/**
 * Counts the number of non-zero values in a numerical array.
 * May perform a full array scan, but will often be quicker for specialised
 * sparse arrays - sometimes as fast as O(1)
 */
clojure.core.matrix.non_zero_count = (function clojure$core$matrix$non_zero_count(m){
return clojure.core.matrix.protocols.nonzero_count(m);
});
/**
 * Gets the non-zero indices of an array.
 * - For a 1D vector, returns an ordered index list.
 * - For a higher dimensional array, returns the non-zero-indices for each slice in row-major order.
 */
clojure.core.matrix.non_zero_indices = (function clojure$core$matrix$non_zero_indices(m){
return clojure.core.matrix.protocols.non_zero_indices(m);
});
/**
 * Returns all elements of an array as a Clojure sequence in row-major order.
 * 
 * Like clojure.core/seq, Returns nil if the array has no elements.
 */
clojure.core.matrix.eseq = (function clojure$core$matrix$eseq(m){
return cljs.core.seq(clojure.core.matrix.protocols.element_seq(m));
});
/**
 * Element-wise reduce on all elements of an array. 
 * 
 * It is *not* guaranteed that the reduction may be stopped early using clojure.core/reduced. If this 
 * behaviour is wanted, please check the details of the specific implementation or use the more generic 
 * Clojure code:
 *   (reduce f (eseq m))
 */
clojure.core.matrix.ereduce = (function clojure$core$matrix$ereduce(var_args){
var G__42205 = arguments.length;
switch (G__42205) {
case 2:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$2(m,f);
}));

(clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(m,f,init);
}));

(clojure.core.matrix.ereduce.cljs$lang$maxFixedArity = 3);

/**
 * Element-wise map over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m. If a more general 
 * type is required, try coercing to a more general array type first, e.g.
 *   
 *   (emap (fn [x] (str x)) (double-array [1 2 3]))             ;; Throws an error
 *   (emap (fn [x] (str x)) (coerce [] (double-array [1 2 3]))) ;; OK!
 * 
 * Implemenations may *optionally* support custom function types. If this is the case, the
 * parameter m must be a valid array from the given implementation.
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap = (function clojure$core$matrix$emap(var_args){
var G__42211 = arguments.length;
switch (G__42211) {
case 2:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42723 = arguments.length;
var i__4790__auto___42724 = (0);
while(true){
if((i__4790__auto___42724 < len__4789__auto___42723)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42724]));

var G__42725 = (i__4790__auto___42724 + (1));
i__4790__auto___42724 = G__42725;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,f);
}));

(clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,f,a);
}));

(clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(m,f,a,more);
}));

/** @this {Function} */
(clojure.core.matrix.emap.cljs$lang$applyTo = (function (seq42207){
var G__42208 = cljs.core.first(seq42207);
var seq42207__$1 = cljs.core.next(seq42207);
var G__42209 = cljs.core.first(seq42207__$1);
var seq42207__$2 = cljs.core.next(seq42207__$1);
var G__42210 = cljs.core.first(seq42207__$2);
var seq42207__$3 = cljs.core.next(seq42207__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42208,G__42209,G__42210,seq42207__$3);
}));

(clojure.core.matrix.emap.cljs$lang$maxFixedArity = (3));

/**
 * Element-wise map-indexed over all elements of one or more arrays. Like
 * emap, but provides an index as the second argument to the mapping function.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap_indexed = (function clojure$core$matrix$emap_indexed(var_args){
var G__42217 = arguments.length;
switch (G__42217) {
case 2:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42727 = arguments.length;
var i__4790__auto___42728 = (0);
while(true){
if((i__4790__auto___42728 < len__4789__auto___42727)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42728]));

var G__42729 = (i__4790__auto___42728 + (1));
i__4790__auto___42728 = G__42729;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(m,f);
}));

(clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$3(m,f,a);
}));

(clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$4(m,f,a,more);
}));

/** @this {Function} */
(clojure.core.matrix.emap_indexed.cljs$lang$applyTo = (function (seq42213){
var G__42214 = cljs.core.first(seq42213);
var seq42213__$1 = cljs.core.next(seq42213);
var G__42215 = cljs.core.first(seq42213__$1);
var seq42213__$2 = cljs.core.next(seq42213__$1);
var G__42216 = cljs.core.first(seq42213__$2);
var seq42213__$3 = cljs.core.next(seq42213__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42214,G__42215,G__42216,seq42213__$3);
}));

(clojure.core.matrix.emap_indexed.cljs$lang$maxFixedArity = (3));

/**
 * Maps a function over all slices of one or more array
 */
clojure.core.matrix.slice_map = (function clojure$core$matrix$slice_map(var_args){
var G__42223 = arguments.length;
switch (G__42223) {
case 2:
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42731 = arguments.length;
var i__4790__auto___42732 = (0);
while(true){
if((i__4790__auto___42732 < len__4789__auto___42731)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42732]));

var G__42733 = (i__4790__auto___42732 + (1));
i__4790__auto___42732 = G__42733;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.slice_map.cljs$core$IFn$_invoke$arity$2(m,f);
}));

(clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
return clojure.core.matrix.protocols.slice_map.cljs$core$IFn$_invoke$arity$3(m1,f,m2);
}));

(clojure.core.matrix.slice_map.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,more){
return clojure.core.matrix.protocols.slice_map.cljs$core$IFn$_invoke$arity$4(m1,f,m2,more);
}));

/** @this {Function} */
(clojure.core.matrix.slice_map.cljs$lang$applyTo = (function (seq42219){
var G__42220 = cljs.core.first(seq42219);
var seq42219__$1 = cljs.core.next(seq42219);
var G__42221 = cljs.core.first(seq42219__$1);
var seq42219__$2 = cljs.core.next(seq42219__$1);
var G__42222 = cljs.core.first(seq42219__$2);
var seq42219__$3 = cljs.core.next(seq42219__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42220,G__42221,G__42222,seq42219__$3);
}));

(clojure.core.matrix.slice_map.cljs$lang$maxFixedArity = (3));

/**
 * Filters the slices of a core.matrix array, returning only those slices where (pred slice) is truthy.
 * 
 * Will result in an nil value if no slices satify the criteria. If not nil, the return value is 
 * guaranteed to be a seqable core.matrix array, e.g. you can:
 *  - use (seq (filter-slices m)) to get a sequence of slices
 *  - use (when-let [z (filter-slices m)] ...) to operate on the result as a core.matrix array.
 */
clojure.core.matrix.filter_slices = (function clojure$core$matrix$filter_slices(pred,m){
return clojure.core.matrix.protocols.filter_slices(m,pred);
});
/**
 * Calculates the sum of all the elements in a numerical array.
 */
clojure.core.matrix.esum = (function clojure$core$matrix$esum(m){
return clojure.core.matrix.protocols.element_sum(m);
});
/**
 * Gets the minimum element value from a numerical array
 */
clojure.core.matrix.emin = (function clojure$core$matrix$emin(m){
return clojure.core.matrix.protocols.element_min(m);
});
/**
 * Gets the maximum element value from a numerical array
 */
clojure.core.matrix.emax = (function clojure$core$matrix$emax(m){
return clojure.core.matrix.protocols.element_max(m);
});
/**
 * Gets the minimum element value from a numerical array
 */
clojure.core.matrix.minimum = (function clojure$core$matrix$minimum(m){
return clojure.core.matrix.protocols.element_min(m);
});
/**
 * Gets the maximum element value from a numerical array
 */
clojure.core.matrix.maximum = (function clojure$core$matrix$maximum(m){
return clojure.core.matrix.protocols.element_max(m);
});
/**
 * Clamps each element in a numerical array between lower and upper bounds
 *   specified by a and b, respectively.
 * 
 *   Examples:
 *   (clamp [[1 5 1] [4 10 2] [5 6 3]] 2 8) ;=> [[2 5 2] [4 8 2] [5 6 3]]
 *   
 */
clojure.core.matrix.clamp = (function clojure$core$matrix$clamp(m,a,b){
return clojure.core.matrix.protocols.element_clamp(m,a,b);
});
/**
 * Element-wise map of a function f over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_BANG_ = (function clojure$core$matrix$emap_BANG_(var_args){
var G__42229 = arguments.length;
switch (G__42229) {
case 2:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42735 = arguments.length;
var i__4790__auto___42736 = (0);
while(true){
if((i__4790__auto___42736 < len__4789__auto___42735)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42736]));

var G__42737 = (i__4790__auto___42736 + (1));
i__4790__auto___42736 = G__42737;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,f);

return m;
}));

(clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3(m,f,a);

return m;
}));

(clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$4(m,f,a,more);

return m;
}));

/** @this {Function} */
(clojure.core.matrix.emap_BANG_.cljs$lang$applyTo = (function (seq42225){
var G__42226 = cljs.core.first(seq42225);
var seq42225__$1 = cljs.core.next(seq42225);
var G__42227 = cljs.core.first(seq42225__$1);
var seq42225__$2 = cljs.core.next(seq42225__$1);
var G__42228 = cljs.core.first(seq42225__$2);
var seq42225__$3 = cljs.core.next(seq42225__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42226,G__42227,G__42228,seq42225__$3);
}));

(clojure.core.matrix.emap_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Adds the result of emap to a destination array.
 * 
 * dest must be a mutable numerical array. Returns dest.
 */
clojure.core.matrix.add_emap_BANG_ = (function clojure$core$matrix$add_emap_BANG_(var_args){
var G__42236 = arguments.length;
switch (G__42236) {
case 3:
return clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42739 = arguments.length;
var i__4790__auto___42740 = (0);
while(true){
if((i__4790__auto___42740 < len__4789__auto___42739)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42740]));

var G__42741 = (i__4790__auto___42740 + (1));
i__4790__auto___42740 = G__42741;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((4)),(0),null));
return clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,f,a){
clojure.core.matrix.protocols.add_emap_BANG_.cljs$core$IFn$_invoke$arity$3(dest,f,a);

return dest;
}));

(clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (dest,f,a,b){
clojure.core.matrix.protocols.add_emap_BANG_.cljs$core$IFn$_invoke$arity$4(dest,f,a,b);

return dest;
}));

(clojure.core.matrix.add_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dest,f,a,b,more){
clojure.core.matrix.protocols.add_emap_BANG_.cljs$core$IFn$_invoke$arity$5(dest,f,a,b,more);

return dest;
}));

/** @this {Function} */
(clojure.core.matrix.add_emap_BANG_.cljs$lang$applyTo = (function (seq42231){
var G__42232 = cljs.core.first(seq42231);
var seq42231__$1 = cljs.core.next(seq42231);
var G__42233 = cljs.core.first(seq42231__$1);
var seq42231__$2 = cljs.core.next(seq42231__$1);
var G__42234 = cljs.core.first(seq42231__$2);
var seq42231__$3 = cljs.core.next(seq42231__$2);
var G__42235 = cljs.core.first(seq42231__$3);
var seq42231__$4 = cljs.core.next(seq42231__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42232,G__42233,G__42234,G__42235,seq42231__$4);
}));

(clojure.core.matrix.add_emap_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Sets the destination array to the result of an emap operation.
 * 
 * dest must be a mutable array. Returns dest.
 */
clojure.core.matrix.set_emap_BANG_ = (function clojure$core$matrix$set_emap_BANG_(var_args){
var G__42243 = arguments.length;
switch (G__42243) {
case 3:
return clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42743 = arguments.length;
var i__4790__auto___42744 = (0);
while(true){
if((i__4790__auto___42744 < len__4789__auto___42743)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42744]));

var G__42745 = (i__4790__auto___42744 + (1));
i__4790__auto___42744 = G__42745;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((4)),(0),null));
return clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,f,a){
clojure.core.matrix.protocols.set_emap_BANG_.cljs$core$IFn$_invoke$arity$3(dest,f,a);

return dest;
}));

(clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (dest,f,a,b){
clojure.core.matrix.protocols.set_emap_BANG_.cljs$core$IFn$_invoke$arity$4(dest,f,a,b);

return dest;
}));

(clojure.core.matrix.set_emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dest,f,a,b,more){
clojure.core.matrix.protocols.set_emap_BANG_.cljs$core$IFn$_invoke$arity$5(dest,f,a,b,more);

return dest;
}));

/** @this {Function} */
(clojure.core.matrix.set_emap_BANG_.cljs$lang$applyTo = (function (seq42238){
var G__42239 = cljs.core.first(seq42238);
var seq42238__$1 = cljs.core.next(seq42238);
var G__42240 = cljs.core.first(seq42238__$1);
var seq42238__$2 = cljs.core.next(seq42238__$1);
var G__42241 = cljs.core.first(seq42238__$2);
var seq42238__$3 = cljs.core.next(seq42238__$2);
var G__42242 = cljs.core.first(seq42238__$3);
var seq42238__$4 = cljs.core.next(seq42238__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42239,G__42240,G__42241,G__42242,seq42238__$4);
}));

(clojure.core.matrix.set_emap_BANG_.cljs$lang$maxFixedArity = (4));

/**
 * Element-wise map-indexed over all elements of one or more arrays.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_indexed_BANG_ = (function clojure$core$matrix$emap_indexed_BANG_(var_args){
var G__42249 = arguments.length;
switch (G__42249) {
case 2:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___42747 = arguments.length;
var i__4790__auto___42748 = (0);
while(true){
if((i__4790__auto___42748 < len__4789__auto___42747)){
args_arr__4810__auto__.push((arguments[i__4790__auto___42748]));

var G__42749 = (i__4790__auto___42748 + (1));
i__4790__auto___42748 = G__42749;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$2(m,f);
}));

(clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$3(m,f,a);
}));

(clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$4(m,f,a,more);
}));

/** @this {Function} */
(clojure.core.matrix.emap_indexed_BANG_.cljs$lang$applyTo = (function (seq42245){
var G__42246 = cljs.core.first(seq42245);
var seq42245__$1 = cljs.core.next(seq42245);
var G__42247 = cljs.core.first(seq42245__$1);
var seq42245__$2 = cljs.core.next(seq42245__$1);
var G__42248 = cljs.core.first(seq42245__$2);
var seq42245__$3 = cljs.core.next(seq42245__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42246,G__42247,G__42248,seq42245__$3);
}));

(clojure.core.matrix.emap_indexed_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.index_seq_for_shape = (function clojure$core$matrix$index_seq_for_shape(sh){
return clojure.core.matrix.utils.base_index_seq_for_shape(sh);
});
/**
 * Returns a sequence of all possible index vectors into an array, in row-major order.
 */
clojure.core.matrix.index_seq = (function clojure$core$matrix$index_seq(m){
return clojure.core.matrix.index_seq_for_shape(clojure.core.matrix.protocols.get_shape(m));
});
/**
 * Gets the currently active matrix implementation as a keyword, e.g. :vectorz
 */
clojure.core.matrix.current_implementation = (function clojure$core$matrix$current_implementation(){
return clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_;
});
/**
 * Gets a canonical matrix object for a given implementation (keyword or array), or the current implementation
 * if not otherwise specified. Scalars are regarded as conforming to the current implementation
 * Throws an exception if none is available.
 */
clojure.core.matrix.implementation_check = (function clojure$core$matrix$implementation_check(var_args){
var G__42251 = arguments.length;
switch (G__42251) {
case 0:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 = (function (){
var or__4185__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No current clojure.core.matrix implementation available (no canonical)",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 = (function (impl){
var temp__5733__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5733__auto__)){
var im = temp__5733__auto__;
return im;
} else {
if(cljs.core.truth_(clojure.core.matrix.scalar_QMARK_(impl))){
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
} else {
var or__4185__auto__ = clojure.core.matrix.implementations.load_implementation(impl);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No clojure.core.matrix implementation available - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(impl)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
}
}));

(clojure.core.matrix.implementation_check.cljs$lang$maxFixedArity = 1);

/**
 * Gets a canonical object for the currently active matrix implementation. This object
 * can be used to pass as an implementation parameter, or to query implementation internals via core.matrix protocols.
 */
clojure.core.matrix.current_implementation_object = (function clojure$core$matrix$current_implementation_object(){
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.current_implementation());
});
/**
 * Sets the currently active core.matrix implementation.
 * 
 * Parameter may be
 *  - A known keyword for the implementation e.g. :vectorz
 *  - An existing instance from the implementation
 * 
 * Throws an exception if the implementation cannot be loaded.
 * 
 * This is used primarily for functions that construct new matrices, i.e. it determines the
 * implementation used for expressions like: (matrix [[1 2] [3 4]])
 */
clojure.core.matrix.set_current_implementation = (function clojure$core$matrix$set_current_implementation(m){
return clojure.core.matrix.implementations.set_current_implementation(m);
});

//# sourceMappingURL=clojure.core.matrix.js.map
