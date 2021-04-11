goog.provide('clojure.core.matrix.utils');
goog.require('cljs.core');
clojure.core.matrix.utils.class$ = cljs.core.type;
/**
 * returns true if the given object is a valid core.matrix array shape.
 */
clojure.core.matrix.utils.valid_shape_QMARK_ = (function clojure$core$matrix$utils$valid_shape_QMARK_(shape){
try{return (((cljs.core.count(shape) >= (0))) && (cljs.core.every_QMARK_(cljs.core.integer_QMARK_,shape)));
}catch (e26036){if((e26036 instanceof Error)){
var t = e26036;
return false;
} else {
throw e26036;

}
}});
/**
 * Returns true if two shapes are the same.
 */
clojure.core.matrix.utils.same_shape_object_QMARK_ = (function clojure$core$matrix$utils$same_shape_object_QMARK_(sa,sb){
if((sa === sb)){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sa),cljs.core.count(sb))){
return false;
} else {
var ca = cljs.core.count(sa);
var i = (0);
while(true){
if((i >= ca)){
return true;
} else {
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sa,i) === cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sb,i))){
var G__26160 = (i + (1));
i = G__26160;
continue;
} else {
return false;
}
}
break;
}

}
}
});
/**
 * Returns the logical xor of a set of values, considered as booleans
 */
clojure.core.matrix.utils.xor = (function clojure$core$matrix$utils$xor(var_args){
var G__26098 = arguments.length;
switch (G__26098) {
case 0:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___26162 = arguments.length;
var i__4790__auto___26163 = (0);
while(true){
if((i__4790__auto___26163 < len__4789__auto___26162)){
args_arr__4810__auto__.push((arguments[i__4790__auto___26163]));

var G__26164 = (i__4790__auto___26163 + (1));
i__4790__auto___26163 = G__26164;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
}));

(clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.boolean$(x);
}));

(clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(x)){
return cljs.core.not(y);
} else {
return cljs.core.boolean$(y);
}
}));

(clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var p = clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2(x,y);
var ss = cljs.core.seq(more);
while(true){
if(ss){
var G__26165 = (cljs.core.truth_(cljs.core.first(ss))?(!(p)):p);
var G__26166 = cljs.core.next(ss);
p = G__26165;
ss = G__26166;
continue;
} else {
return p;
}
break;
}
}));

/** @this {Function} */
(clojure.core.matrix.utils.xor.cljs$lang$applyTo = (function (seq26088){
var G__26095 = cljs.core.first(seq26088);
var seq26088__$1 = cljs.core.next(seq26088);
var G__26096 = cljs.core.first(seq26088__$1);
var seq26088__$2 = cljs.core.next(seq26088__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26095,G__26096,seq26088__$2);
}));

(clojure.core.matrix.utils.xor.cljs$lang$maxFixedArity = (2));

/**
 * Returns a copy of a double array
 */
clojure.core.matrix.utils.copy_double_array = (function clojure$core$matrix$utils$copy_double_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_long_array = (function clojure$core$matrix$utils$copy_long_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_object_array = (function clojure$core$matrix$utils$copy_object_array(arr){
return arr.slice((0));
});
/**
 * Returns a range of longs in a long[] array
 */
clojure.core.matrix.utils.long_range = (function clojure$core$matrix$utils$long_range(end){
var end__$1 = (end | (0));
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(end__$1);
var n__4666__auto___26167 = end__$1;
var i_26168 = (0);
while(true){
if((i_26168 < n__4666__auto___26167)){
(arr[i_26168] = cljs.core.long$(i_26168));

var G__26169 = (i_26168 + (1));
i_26168 = G__26169;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.long_array_of = (function clojure$core$matrix$utils$long_array_of(var_args){
var G__26121 = arguments.length;
switch (G__26121) {
case 0:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___26171 = arguments.length;
var i__4790__auto___26172 = (0);
while(true){
if((i__4790__auto___26172 < len__4789__auto___26171)){
args_arr__4810__auto__.push((arguments[i__4790__auto___26172]));

var G__26173 = (i__4790__auto___26172 + (1));
i__4790__auto___26172 = G__26173;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((0));
}));

(clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = cljs.core.long$(a));

return arr;
}));

(clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((2));
(arr[(0)] = cljs.core.long$(a));

(arr[(1)] = cljs.core.long$(b));

return arr;
}));

(clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(((2) + cljs.core.count(more)));
(arr[(0)] = cljs.core.long$(a));

(arr[(1)] = cljs.core.long$(b));

var G__26122_26174 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null);
var G__26123_26175 = (arr[((2) + clojure.core.matrix.utils.i)] = cljs.core.long$(clojure.core.matrix.utils.x));
(clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2(G__26122_26174,G__26123_26175) : clojure.core.matrix.utils.doseq_indexed.call(null,G__26122_26174,G__26123_26175));

return arr;
}));

/** @this {Function} */
(clojure.core.matrix.utils.long_array_of.cljs$lang$applyTo = (function (seq26118){
var G__26119 = cljs.core.first(seq26118);
var seq26118__$1 = cljs.core.next(seq26118);
var G__26120 = cljs.core.first(seq26118__$1);
var seq26118__$2 = cljs.core.next(seq26118__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26119,G__26120,seq26118__$2);
}));

(clojure.core.matrix.utils.long_array_of.cljs$lang$maxFixedArity = (2));

/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.object_array_of = (function clojure$core$matrix$utils$object_array_of(var_args){
var G__26128 = arguments.length;
switch (G__26128) {
case 0:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___26177 = arguments.length;
var i__4790__auto___26178 = (0);
while(true){
if((i__4790__auto___26178 < len__4789__auto___26177)){
args_arr__4810__auto__.push((arguments[i__4790__auto___26178]));

var G__26179 = (i__4790__auto___26178 + (1));
i__4790__auto___26178 = G__26179;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
}));

(clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = a);

return arr;
}));

(clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(arr[(0)] = a);

(arr[(1)] = b);

return arr;
}));

(clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((2) + cljs.core.count(more)));
(arr[(0)] = a);

(arr[(1)] = b);

var G__26135_26180 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null);
var G__26136_26181 = (arr[((2) + clojure.core.matrix.utils.i)] = clojure.core.matrix.utils.x);
(clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2(G__26135_26180,G__26136_26181) : clojure.core.matrix.utils.doseq_indexed.call(null,G__26135_26180,G__26136_26181));

return arr;
}));

/** @this {Function} */
(clojure.core.matrix.utils.object_array_of.cljs$lang$applyTo = (function (seq26125){
var G__26126 = cljs.core.first(seq26125);
var seq26125__$1 = cljs.core.next(seq26125);
var G__26127 = cljs.core.first(seq26125__$1);
var seq26125__$2 = cljs.core.next(seq26125__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26126,G__26127,seq26125__$2);
}));

(clojure.core.matrix.utils.object_array_of.cljs$lang$maxFixedArity = (2));

/**
 * Returns the index of a value in a vector, or nil if not present
 */
clojure.core.matrix.utils.find_index = (function clojure$core$matrix$utils$find_index(v,value){
var n = v.count();
var i = (0);
while(true){
if((i < n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,v.nth(i))){
return i;
} else {
var G__26182 = (i + (1));
i = G__26182;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.utils.base_index_seq_for_shape = (function clojure$core$matrix$utils$base_index_seq_for_shape(sh){
var gen = (function clojure$core$matrix$utils$base_index_seq_for_shape_$_gen(prefix,rem){
if(cljs.core.truth_(rem)){
var nrem = cljs.core.next(rem);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__26146_SHARP_){
return clojure$core$matrix$utils$base_index_seq_for_shape_$_gen(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,p1__26146_SHARP_),nrem);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.first(rem))], 0));
} else {
return (new cljs.core.List(null,prefix,null,(1),null));
}
});
return gen(cljs.core.PersistentVector.EMPTY,cljs.core.seq(sh));
});
/**
 * Returns the smallest shape that both shapes a and b can broadcast to, or nil if the the shapes
 * are not compatible.
 */
clojure.core.matrix.utils.broadcast_shape_STAR_ = (function clojure$core$matrix$utils$broadcast_shape_STAR_(var_args){
var G__26148 = arguments.length;
switch (G__26148) {
case 2:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.empty_QMARK_(a)){
var or__4185__auto__ = b;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.List.EMPTY;
}
} else {
if(cljs.core.empty_QMARK_(b)){
return a;
} else {
if(((1) === cljs.core.first(a))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(b),cljs.core.next(a),cljs.core.next(b));
} else {
if(((1) === cljs.core.first(b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a),cljs.core.next(a),cljs.core.next(b));
} else {
if((cljs.core.first(a) === cljs.core.first(b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a),cljs.core.next(a),cljs.core.next(b));
} else {
return null;

}
}
}
}
}
}));

(clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (prefix,a,b){
if(cljs.core.truth_((function (){var or__4185__auto__ = a;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return b;
}
})())){
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2(a,b);
if(cljs.core.truth_(r)){
return cljs.core.cons(prefix,r);
} else {
return null;
}
} else {
return cljs.core.cons(prefix,null);
}
}));

(clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Returns the smallest compatible shape that a set of shapes can all broadcast to.
 * Returns nil if this is not possible (i.e. the shapes are incompatible).
 * Returns an empty list if both shape sequences are empty (i.e. represent scalars)
 */
clojure.core.matrix.utils.broadcast_shape = (function clojure$core$matrix$utils$broadcast_shape(var_args){
var G__26150 = arguments.length;
switch (G__26150) {
case 1:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = cljs.core.seq(cljs.core.reverse(a));
var b__$1 = cljs.core.seq(cljs.core.reverse(b));
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1);
if(cljs.core.truth_(r)){
return cljs.core.reverse(r);
} else {
return null;
}
}));

(clojure.core.matrix.utils.broadcast_shape.cljs$lang$maxFixedArity = 2);

/**
 * Returns truthy if the first shape a can be broadcast to the shape b
 */
clojure.core.matrix.utils.can_broadcast = (function clojure$core$matrix$utils$can_broadcast(from_shape,to_shape){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TODO: not yet implemented",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns true if an argument is a protocol'
 */
clojure.core.matrix.utils.protocol_QMARK_ = (function clojure$core$matrix$utils$protocol_QMARK_(p){
if(cljs.core.map_QMARK_(p)){
var and__4174__auto__ = new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p).isInterface();
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
/**
 * Transform MapEntry to just map with some additional fields
 */
clojure.core.matrix.utils.enhance_protocol_kv = (function clojure$core$matrix$utils$enhance_protocol_kv(p__26151){
var vec__26152 = p__26151;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26152,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26152,(1),null);
var m = cljs.core.meta(new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(p)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(p),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"name","name",1843675177),name], 0));
});
clojure.core.matrix.utils.update_indexed = (function clojure$core$matrix$utils$update_indexed(xs,idxs,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26156_SHARP_,p2__26157_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26156_SHARP_,p2__26157_SHARP_,(function (){var G__26158 = p2__26157_SHARP_;
var G__26159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__26156_SHARP_,p2__26157_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26158,G__26159) : f.call(null,G__26158,G__26159));
})());
}),xs,idxs);
});

//# sourceMappingURL=clojure.core.matrix.utils.js.map
