goog.provide('clojure.core.matrix.impl.double_array');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.utils');
/**
 * Creates a new zero-filled nested double array of the given shape
 */
clojure.core.matrix.impl.double_array.new_double_array = (function clojure$core$matrix$impl$double_array$new_double_array(shape){
var dims = cljs.core.count(shape);
if(((0) === dims)){
return 0.0;
} else {
if(((1) === dims)){
return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1((cljs.core.first(shape) | (0)));
} else {
var ns = cljs.core.next(shape);
var rn = cljs.core.long$(cljs.core.first(shape));
var r0 = (clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1(ns) : clojure.core.matrix.impl.double_array.new_double_array.call(null,ns));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(r0,(function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$double_array$new_double_array_$_iter__33944(s__33945){
return (new cljs.core.LazySeq(null,(function (){
var s__33945__$1 = s__33945;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33945__$1);
if(temp__5735__auto__){
var s__33945__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33945__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__33945__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__33947 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__33946 = (0);
while(true){
if((i__33946 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__33946);
cljs.core.chunk_append(b__33947,(clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1(ns) : clojure.core.matrix.impl.double_array.new_double_array.call(null,ns)));

var G__34243 = (i__33946 + (1));
i__33946 = G__34243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33947),clojure$core$matrix$impl$double_array$new_double_array_$_iter__33944(cljs.core.chunk_rest(s__33945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33947),null);
}
} else {
var i = cljs.core.first(s__33945__$2);
return cljs.core.cons((clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1(ns) : clojure.core.matrix.impl.double_array.new_double_array.call(null,ns)),clojure$core$matrix$impl$double_array$new_double_array_$_iter__33944(cljs.core.rest(s__33945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((rn - (1))));
})()));

}
}
});
clojure.core.matrix.impl.double_array.construct_double_array = (function clojure$core$matrix$impl$double_array$construct_double_array(data){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data));
if((dims === (1))){
var n = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(data,(0)));
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(n);
var n__4666__auto___34244 = n;
var i_34245 = (0);
while(true){
if((i_34245 < n__4666__auto___34244)){
(r[i_34245] = clojure.core.matrix.protocols.get_1d(data,i_34245));

var G__34246 = (i_34245 + (1));
i_34245 = G__34246;
continue;
} else {
}
break;
}

return r;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d(data);
} else {
return null;

}
}
});
goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"array",true);

var G__33948_34247 = clojure.core.matrix.protocols.assign;
var G__33949_34248 = "array";
var G__33950_34249 = (function (m,source){
return null;
});
goog.object.set(G__33948_34247,G__33949_34248,G__33950_34249);
goog.object.set(clojure.core.matrix.protocols.PAssignment,"array",true);

var G__33951_34251 = clojure.core.matrix.protocols.assign_BANG_;
var G__33952_34252 = "array";
var G__33953_34253 = (function (m,source){
var n__4666__auto___34255 = cljs.core.count(source);
var i_34256 = (0);
while(true){
if((i_34256 < n__4666__auto___34255)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i_34256,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(source,i_34256));

var G__34258 = (i_34256 + (1));
i_34256 = G__34258;
continue;
} else {
}
break;
}

return m;
});
goog.object.set(G__33951_34251,G__33952_34252,G__33953_34253);

var G__33954_34260 = clojure.core.matrix.protocols.assign_array_BANG_;
var G__33955_34261 = "array";
var G__33956_34262 = (function (m,arr,start,length){
var length_34264__$1 = cljs.core.long$(length);
var start_34265__$1 = cljs.core.long$(start);
var n__4666__auto___34267 = length_34264__$1;
var i_34268 = (0);
while(true){
if((i_34268 < n__4666__auto___34267)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i_34268,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arr,(start_34265__$1 + i_34268)));

var G__34270 = (i_34268 + (1));
i_34268 = G__34270;
continue;
} else {
}
break;
}

return m;
});
goog.object.set(G__33954_34260,G__33955_34261,G__33956_34262);
goog.object.set(clojure.core.matrix.protocols.PImplementation,"array",true);

var G__33957_34272 = clojure.core.matrix.protocols.implementation_key;
var G__33958_34273 = "array";
var G__33959_34274 = (function (m){
return new cljs.core.Keyword(null,"number-array","number-array",-676376237);
});
goog.object.set(G__33957_34272,G__33958_34273,G__33959_34274);

var G__33960_34275 = clojure.core.matrix.protocols.meta_info;
var G__33961_34276 = "array";
var G__33962_34277 = (function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clojure.core.matrix implementation for JS arrays"], null);
});
goog.object.set(G__33960_34275,G__33961_34276,G__33962_34277);

var G__33963_34278 = clojure.core.matrix.protocols.new_vector;
var G__33964_34279 = "array";
var G__33965_34280 = (function (m,length){
return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1((length | (0)));
});
goog.object.set(G__33963_34278,G__33964_34279,G__33965_34280);

var G__33966_34281 = clojure.core.matrix.protocols.new_matrix;
var G__33967_34282 = "array";
var G__33968_34283 = (function (m,rows,columns){
return clojure.core.matrix.impl.double_array.new_double_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,columns], null));
});
goog.object.set(G__33966_34281,G__33967_34282,G__33968_34283);

var G__33969_34284 = clojure.core.matrix.protocols.new_matrix_nd;
var G__33970_34285 = "array";
var G__33971_34286 = (function (m,shape){
return clojure.core.matrix.impl.double_array.new_double_array(shape);
});
goog.object.set(G__33969_34284,G__33970_34285,G__33971_34286);

var G__33972_34287 = clojure.core.matrix.protocols.construct_matrix;
var G__33973_34288 = "array";
var G__33974_34289 = (function (m,data){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data));
if((dims === (2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Double arrays in cljs only support a single dimension currently - submit a patch!",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === (1))){
var n = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(data,(0)));
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(n);
var n__4666__auto___34292 = n;
var i_34293 = (0);
while(true){
if((i_34293 < n__4666__auto___34292)){
(arr[i_34293] = clojure.core.matrix.protocols.get_1d(data,i_34293));

var G__34294 = (i_34293 + (1));
i_34293 = G__34294;
continue;
} else {
}
break;
}

return arr;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d(data);
} else {
return null;

}
}
}
});
goog.object.set(G__33972_34287,G__33973_34288,G__33974_34289);

var G__33975_34297 = clojure.core.matrix.protocols.supports_dimensionality_QMARK_;
var G__33976_34298 = "array";
var G__33977_34299 = (function (m,dims){
var dims__$1 = cljs.core.long$(dims);
return (((dims__$1 === (1))) || ((dims__$1 === (2))));
});
goog.object.set(G__33975_34297,G__33976_34298,G__33977_34299);
goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"array",true);

var G__33978_34303 = clojure.core.matrix.protocols.dimensionality;
var G__33979_34304 = "array";
var G__33980_34305 = (function (m){
return (1);
});
goog.object.set(G__33978_34303,G__33979_34304,G__33980_34305);

var G__33983_34307 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__33984_34308 = "array";
var G__33985_34309 = (function (m){
return true;
});
goog.object.set(G__33983_34307,G__33984_34308,G__33985_34309);

var G__33986_34310 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__33987_34311 = "array";
var G__33988_34312 = (function (m){
return false;
});
goog.object.set(G__33986_34310,G__33987_34311,G__33988_34312);

var G__33991_34313 = clojure.core.matrix.protocols.get_shape;
var G__33992_34314 = "array";
var G__33993_34315 = (function (m){
return (new cljs.core.List(null,cljs.core.count(m),null,(1),null));
});
goog.object.set(G__33991_34313,G__33992_34314,G__33993_34315);

var G__33996_34317 = clojure.core.matrix.protocols.dimension_count;
var G__33997_34318 = "array";
var G__33998_34319 = (function (m,x){
if((cljs.core.long$(x) === (0))){
return cljs.core.count(m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Double array does not have dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
goog.object.set(G__33996_34317,G__33997_34318,G__33998_34319);
goog.object.set(clojure.core.matrix.protocols.PReshaping,"array",true);

var G__34004_34323 = clojure.core.matrix.protocols.reshape;
var G__34005_34324 = "array";
var G__34006_34325 = (function (m,shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape(m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value(m);
var es = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq(m),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(gv));
var partition_shape = (function clojure$core$matrix$impl$double_array$partition_shape(es__$1,shape__$1){
var temp__5733__auto__ = cljs.core.seq(shape__$1);
if(temp__5733__auto__){
var s = temp__5733__auto__;
var ns = cljs.core.next(s);
var plen = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,(1),ns);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34001_SHARP_){
return clojure$core$matrix$impl$double_array$partition_shape(p1__34001_SHARP_,ns);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(plen,es__$1));
} else {
return cljs.core.first(es__$1);
}
});
var temp__5733__auto__ = cljs.core.seq(shape);
if(temp__5733__auto__){
var shape__$1 = temp__5733__auto__;
var fs = cljs.core.long$(cljs.core.first(shape__$1));
var parts = partition_shape(es,shape__$1);
var or__4185__auto__ = clojure.core.matrix.protocols.construct_matrix(m,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fs,parts));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fs,parts));
}
} else {
return cljs.core.first(es);
}
}
});
goog.object.set(G__34004_34323,G__34005_34324,G__34006_34325);
goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"array",true);

var G__34011_34336 = clojure.core.matrix.protocols.element_type;
var G__34012_34337 = "array";
var G__34013_34338 = (function (m){
return Number;
});
goog.object.set(G__34011_34336,G__34012_34337,G__34013_34338);
goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"array",true);

var G__34016_34341 = clojure.core.matrix.protocols.get_1d;
var G__34017_34342 = "array";
var G__34018_34343 = (function (m,x){
return (m[(x | (0))]);
});
goog.object.set(G__34016_34341,G__34017_34342,G__34018_34343);

var G__34023_34345 = clojure.core.matrix.protocols.get_2d;
var G__34024_34346 = "array";
var G__34025_34347 = (function (m,row,column){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do get-2D from 1D double array",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__34023_34345,G__34024_34346,G__34025_34347);

var G__34027_34352 = clojure.core.matrix.protocols.get_nd;
var G__34028_34353 = "array";
var G__34029_34354 = (function (m,indexes){
if(((1) === cljs.core.count(indexes))){
return (m[(cljs.core.first(indexes) | (0))]);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get from double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
goog.object.set(G__34027_34352,G__34028_34353,G__34029_34354);
goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"array",true);

var G__34034_34357 = clojure.core.matrix.protocols.set_1d;
var G__34035_34358 = "array";
var G__34036_34359 = (function (m,x,v){
var arr = m.slice();
(arr[(x | (0))] = v);

return arr;
});
goog.object.set(G__34034_34357,G__34035_34358,G__34036_34359);

var G__34039_34360 = clojure.core.matrix.protocols.set_2d;
var G__34040_34361 = "array";
var G__34041_34362 = (function (m,x,y,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on double array",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__34039_34360,G__34040_34361,G__34041_34362);

var G__34043_34363 = clojure.core.matrix.protocols.set_nd;
var G__34044_34364 = "array";
var G__34045_34365 = (function (m,indexes,v){
if(((1) === cljs.core.count(indexes))){
var arr = m.slice();
var x = (cljs.core.first(indexes) | (0));
(arr[(x | (0))] = v);

return arr;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't set on double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
goog.object.set(G__34043_34363,G__34044_34364,G__34045_34365);

var G__34049_34367 = clojure.core.matrix.protocols.is_mutable_QMARK_;
var G__34050_34368 = "array";
var G__34051_34369 = (function (m){
return true;
});
goog.object.set(G__34049_34367,G__34050_34368,G__34051_34369);
goog.object.set(clojure.core.matrix.protocols.PIndexedSettingMutable,"array",true);

var G__34052_34373 = clojure.core.matrix.protocols.set_1d_BANG_;
var G__34053_34374 = "array";
var G__34054_34375 = (function (m,x,v){
(m[(x | (0))] = v);

return m;
});
goog.object.set(G__34052_34373,G__34053_34374,G__34054_34375);

var G__34055_34376 = clojure.core.matrix.protocols.set_2d_BANG_;
var G__34056_34377 = "array";
var G__34057_34378 = (function (m,x,y,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on double array",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__34055_34376,G__34056_34377,G__34057_34378);

var G__34058_34379 = clojure.core.matrix.protocols.set_nd_BANG_;
var G__34059_34380 = "array";
var G__34060_34381 = (function (m,indexes,v){
if(((1) === cljs.core.count(indexes))){
(m[(cljs.core.first(indexes) | (0))] = v);

return m;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't set on double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
goog.object.set(G__34058_34379,G__34059_34380,G__34060_34381);
goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"array",true);

var G__34061_34383 = clojure.core.matrix.protocols.mutable_matrix;
var G__34062_34384 = "array";
var G__34063_34385 = (function (m){
return m.slice();
});
goog.object.set(G__34061_34383,G__34062_34384,G__34063_34385);
goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"array",true);

var G__34064_34387 = clojure.core.matrix.protocols.scale;
var G__34065_34388 = "array";
var G__34066_34389 = (function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(len);
var a__$1 = a;
var n__4666__auto___34390 = len;
var i_34391 = (0);
while(true){
if((i_34391 < n__4666__auto___34390)){
(arr[i_34391] = (a__$1 * (m__$1[i_34391])));

var G__34393 = (i_34391 + (1));
i_34391 = G__34393;
continue;
} else {
}
break;
}

return arr;
});
goog.object.set(G__34064_34387,G__34065_34388,G__34066_34389);

var G__34067_34394 = clojure.core.matrix.protocols.pre_scale;
var G__34068_34395 = "array";
var G__34069_34396 = (function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(len);
var a__$1 = a;
var n__4666__auto___34399 = len;
var i_34400 = (0);
while(true){
if((i_34400 < n__4666__auto___34399)){
(arr[i_34400] = (a__$1 * (m__$1[i_34400])));

var G__34401 = (i_34400 + (1));
i_34400 = G__34401;
continue;
} else {
}
break;
}

return arr;
});
goog.object.set(G__34067_34394,G__34068_34395,G__34069_34396);
goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"array",true);

var G__34070_34403 = clojure.core.matrix.protocols.scale_BANG_;
var G__34071_34404 = "array";
var G__34072_34405 = (function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__4666__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__4666__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__34406 = (i + (1));
i = G__34406;
continue;
} else {
return null;
}
break;
}
});
goog.object.set(G__34070_34403,G__34071_34404,G__34072_34405);

var G__34073_34407 = clojure.core.matrix.protocols.pre_scale_BANG_;
var G__34074_34408 = "array";
var G__34075_34410 = (function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__4666__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__4666__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__34414 = (i + (1));
i = G__34414;
continue;
} else {
return null;
}
break;
}
});
goog.object.set(G__34073_34407,G__34074_34408,G__34075_34410);
goog.object.set(clojure.core.matrix.protocols.PConversion,"array",true);

var G__34076_34415 = clojure.core.matrix.protocols.convert_to_nested_vectors;
var G__34077_34416 = "array";
var G__34078_34417 = (function (m){
return cljs.core.vec(m);
});
goog.object.set(G__34076_34415,G__34077_34416,G__34078_34417);
goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"array",true);

var G__34080_34419 = clojure.core.matrix.protocols.element_seq;
var G__34081_34420 = "array";
var G__34082_34421 = (function (m){
return m;
});
goog.object.set(G__34080_34419,G__34081_34420,G__34082_34421);

var G__34083_34425 = clojure.core.matrix.protocols.element_map;
var G__34084_34426 = "array";
var G__34085_34427 = (function() {
var G__34429 = null;
var G__34429__2 = (function (m,f){
var cnt = m.length;
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(cnt);
var n__4666__auto___34438 = cnt;
var i_34439 = (0);
while(true){
if((i_34439 < n__4666__auto___34438)){
(r[i_34439] = (function (){var G__34086 = (m[i_34439]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34086) : f.call(null,G__34086));
})());

var G__34440 = (i_34439 + (1));
i_34439 = G__34440;
continue;
} else {
}
break;
}

return r;
});
var G__34429__3 = (function (m,f,a){
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce(r,a);
var n__4666__auto___34441 = m.length;
var i_34442 = (0);
while(true){
if((i_34442 < n__4666__auto___34441)){
(r[i_34442] = (function (){var G__34092 = (m[i_34442]);
var G__34093 = (a__$1[i_34442]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34092,G__34093) : f.call(null,G__34092,G__34093));
})());

var G__34447 = (i_34442 + (1));
i_34442 = G__34447;
continue;
} else {
}
break;
}

return r;
});
var G__34429__4 = (function (m,f,a,more){
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce(m,a);
var more__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__34079_SHARP_){
return clojure.core.matrix.protocols.broadcast_coerce(m,p1__34079_SHARP_);
}),more);
var more_count = cljs.core.long$(cljs.core.count(more__$1));
var vs = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(more_count);
var n__4666__auto___34453 = m.length;
var i_34454 = (0);
while(true){
if((i_34454 < n__4666__auto___34453)){
var n__4666__auto___34455__$1 = more_count;
var j_34457 = (0);
while(true){
if((j_34457 < n__4666__auto___34455__$1)){
(vs[j_34457] = ((more__$1.cljs$core$IFn$_invoke$arity$1 ? more__$1.cljs$core$IFn$_invoke$arity$1(j_34457) : more__$1.call(null,j_34457))[i_34454]));

var G__34460 = (j_34457 + (1));
j_34457 = G__34460;
continue;
} else {
}
break;
}

(r[i_34454] = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,(m[i_34454]),(a__$1[i_34454]),vs));

var G__34464 = (i_34454 + (1));
i_34454 = G__34464;
continue;
} else {
}
break;
}

return r;
});
G__34429 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__34429__2.call(this,m,f);
case 3:
return G__34429__3.call(this,m,f,a);
case 4:
return G__34429__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34429.cljs$core$IFn$_invoke$arity$2 = G__34429__2;
G__34429.cljs$core$IFn$_invoke$arity$3 = G__34429__3;
G__34429.cljs$core$IFn$_invoke$arity$4 = G__34429__4;
return G__34429;
})()
;
goog.object.set(G__34083_34425,G__34084_34426,G__34085_34427);

var G__34100_34472 = clojure.core.matrix.protocols.element_map_BANG_;
var G__34101_34473 = "array";
var G__34102_34474 = (function() {
var G__34475 = null;
var G__34475__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,f));
});
var G__34475__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,f,a));
});
var G__34475__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(m,f,a,more));
});
G__34475 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__34475__2.call(this,m,f);
case 3:
return G__34475__3.call(this,m,f,a);
case 4:
return G__34475__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34475.cljs$core$IFn$_invoke$arity$2 = G__34475__2;
G__34475.cljs$core$IFn$_invoke$arity$3 = G__34475__3;
G__34475.cljs$core$IFn$_invoke$arity$4 = G__34475__4;
return G__34475;
})()
;
goog.object.set(G__34100_34472,G__34101_34473,G__34102_34474);

var G__34103_34485 = clojure.core.matrix.protocols.element_reduce;
var G__34104_34486 = "array";
var G__34105_34487 = (function() {
var G__34488 = null;
var G__34488__2 = (function (m,f){
var m__$1 = m;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,m__$1);
});
var G__34488__3 = (function (m,f,init){
var m__$1 = m;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,m__$1);
});
G__34488 = function(m,f,init){
switch(arguments.length){
case 2:
return G__34488__2.call(this,m,f);
case 3:
return G__34488__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34488.cljs$core$IFn$_invoke$arity$2 = G__34488__2;
G__34488.cljs$core$IFn$_invoke$arity$3 = G__34488__3;
return G__34488;
})()
;
goog.object.set(G__34103_34485,G__34104_34486,G__34105_34487);
goog.object.set(clojure.core.matrix.protocols.PIndexImplementation,"array",true);

var G__34106_34497 = clojure.core.matrix.protocols.index_QMARK_;
var G__34107_34498 = "array";
var G__34108_34499 = (function (m){
return true;
});
goog.object.set(G__34106_34497,G__34107_34498,G__34108_34499);

var G__34109_34501 = clojure.core.matrix.protocols.index_to_longs;
var G__34110_34502 = "array";
var G__34111_34503 = (function (m){
return m;
});
goog.object.set(G__34109_34501,G__34110_34502,G__34111_34503);

var G__34112_34504 = clojure.core.matrix.protocols.index_to_ints;
var G__34113_34505 = "array";
var G__34114_34506 = (function (m){
return m;
});
goog.object.set(G__34112_34504,G__34113_34505,G__34114_34506);

var G__34115_34508 = clojure.core.matrix.protocols.index_from_longs;
var G__34116_34509 = "array";
var G__34117_34510 = (function (m,xs){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(xs);
});
goog.object.set(G__34115_34508,G__34116_34509,G__34117_34510);

var G__34118_34515 = clojure.core.matrix.protocols.index_from_ints;
var G__34119_34516 = "array";
var G__34120_34517 = (function (m,xs){
return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(xs);
});
goog.object.set(G__34118_34515,G__34119_34516,G__34120_34517);

var G__34121_34522 = clojure.core.matrix.protocols.index_coerce;
var G__34122_34523 = "array";
var G__34123_34524 = (function (m,a){
return m;
});
goog.object.set(G__34121_34522,G__34122_34523,G__34123_34524);
goog.object.set(clojure.core.matrix.protocols.PBroadcast,"array",true);

var G__34124_34527 = clojure.core.matrix.protocols.broadcast;
var G__34125_34528 = "array";
var G__34126_34529 = (function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape(m);
var mdims = cljs.core.count(mshape);
var ndims = cljs.core.count(nshape);
if((((mdims === ndims)) && (clojure.core.matrix.utils.same_shape_object_QMARK_(nshape,mshape)))){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);

}
});
goog.object.set(G__34124_34527,G__34125_34528,G__34126_34529);
goog.object.set(clojure.core.matrix.protocols.PNumerical,"array",true);

var G__34127_34534 = clojure.core.matrix.protocols.numerical_QMARK_;
var G__34128_34535 = "array";
var G__34129_34536 = (function (m){
return true;
});
goog.object.set(G__34127_34534,G__34128_34535,G__34129_34536);
goog.object.set(clojure.core.matrix.protocols.PSubVector,"array",true);

var G__34130_34539 = clojure.core.matrix.protocols.subvector;
var G__34131_34540 = "array";
var G__34132_34541 = (function (m,start,length){
return clojure.core.matrix.impl.wrappers.wrap_nd(m).clojure$core$matrix$protocols$PSubVector$subvector$arity$3(null,start,length);
});
goog.object.set(G__34130_34539,G__34131_34540,G__34132_34541);
goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"array",true);

var G__34133_34546 = clojure.core.matrix.protocols.matrix_equals;
var G__34134_34547 = "array";
var G__34135_34548 = (function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_(a,b))){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))){
return (clojure.core.matrix.protocols.get_0d(a) === (function (){var x__25978__auto__ = b;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})());
} else {
return cljs.core.not_any_QMARK_(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ__EQ_,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
}
} else {
return false;

}
}
});
goog.object.set(G__34133_34546,G__34134_34547,G__34135_34548);
goog.object.set(clojure.core.matrix.protocols.PSameShape,"array",true);

var G__34136_34555 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__34137_34556 = "array";
var G__34138_34557 = (function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_(clojure.core.matrix.protocols.get_shape(a),clojure.core.matrix.protocols.get_shape(b));
});
goog.object.set(G__34136_34555,G__34137_34556,G__34138_34557);
goog.object.set(clojure.core.matrix.protocols.PSelect,"array",true);

var G__34139_34561 = clojure.core.matrix.protocols.select;
var G__34140_34562 = "array";
var G__34141_34563 = (function (a,area){
var or__4185__auto__ = clojure.core.matrix.protocols.select_view(a,area);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection(a,area);
}
});
goog.object.set(G__34139_34561,G__34140_34562,G__34141_34563);
goog.object.set(clojure.core.matrix.protocols.PLogistic,"array",true);

var G__34142_34568 = clojure.core.matrix.protocols.logistic;
var G__34143_34569 = "array";
var G__34144_34570 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.logistic_fn);
});
goog.object.set(G__34142_34568,G__34143_34569,G__34144_34570);
goog.object.set(clojure.core.matrix.protocols.PLogisticMutable,"array",true);

var G__34145_34572 = clojure.core.matrix.protocols.logistic_BANG_;
var G__34146_34573 = "array";
var G__34147_34574 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.logistic_fn);
});
goog.object.set(G__34145_34572,G__34146_34573,G__34147_34574);
goog.object.set(clojure.core.matrix.protocols.PSoftplus,"array",true);

var G__34148_34579 = clojure.core.matrix.protocols.softplus;
var G__34149_34580 = "array";
var G__34150_34581 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.softplus_fn);
});
goog.object.set(G__34148_34579,G__34149_34580,G__34150_34581);
goog.object.set(clojure.core.matrix.protocols.PSoftmax,"array",true);

var G__34151_34583 = clojure.core.matrix.protocols.softmax;
var G__34152_34584 = "array";
var G__34153_34585 = (function (m){
var em = clojure.core.matrix.protocols.exp(m);
return clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$2(em,clojure.core.matrix.protocols.element_sum(em));
});
goog.object.set(G__34151_34583,G__34152_34584,G__34153_34585);
goog.object.set(clojure.core.matrix.protocols.PSoftmaxMutable,"array",true);

var G__34154_34591 = clojure.core.matrix.protocols.softmax_BANG_;
var G__34155_34592 = "array";
var G__34156_34593 = (function (m){
clojure.core.matrix.protocols.exp_BANG_(m);

clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.element_sum(m));

return m;
});
goog.object.set(G__34154_34591,G__34155_34592,G__34156_34593);
goog.object.set(clojure.core.matrix.protocols.PSoftplusMutable,"array",true);

var G__34157_34595 = clojure.core.matrix.protocols.softplus_BANG_;
var G__34158_34596 = "array";
var G__34159_34597 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.softplus_fn);
});
goog.object.set(G__34157_34595,G__34158_34596,G__34159_34597);
goog.object.set(clojure.core.matrix.protocols.PReLU,"array",true);

var G__34160_34603 = clojure.core.matrix.protocols.relu;
var G__34161_34604 = "array";
var G__34162_34605 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.relu_fn);
});
goog.object.set(G__34160_34603,G__34161_34604,G__34162_34605);
goog.object.set(clojure.core.matrix.protocols.PReLUMutable,"array",true);

var G__34163_34606 = clojure.core.matrix.protocols.relu_BANG_;
var G__34164_34607 = "array";
var G__34165_34608 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.relu_fn);
});
goog.object.set(G__34163_34606,G__34164_34607,G__34165_34608);
goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"array",true);

var G__34167_34612 = clojure.core.matrix.protocols.identity_matrix_QMARK_;
var G__34168_34613 = "array";
var G__34169_34614 = (function (m){
var rc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var cc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1)));
if((((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2))) && ((rc === cc)))){
var i = cljs.core.long$((0));
while(true){
if((i < rc)){
if((function (){var j = cljs.core.long$((0));
while(true){
if((j < cc)){
var elem = clojure.core.matrix.protocols.get_2d(m,i,j);
if(typeof elem === 'number'){
if((i === j)){
if((elem === 1.0)){
var G__34623 = (j + (1));
j = G__34623;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__34624 = (j + (1));
j = G__34624;
continue;
} else {
return false;
}
}
} else {
return false;
}
} else {
return true;
}
break;
}
})()){
var G__34625 = (i + (1));
i = G__34625;
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
});
goog.object.set(G__34167_34612,G__34168_34613,G__34169_34614);

var G__34170_34627 = clojure.core.matrix.protocols.zero_matrix_QMARK_;
var G__34171_34628 = "array";
var G__34172_34629 = (function (m){
return cljs.core.every_QMARK_((function (p1__34166_SHARP_){
return ((typeof p1__34166_SHARP_ === 'number') && ((p1__34166_SHARP_ === (0))));
}),clojure.core.matrix.protocols.element_seq(m));
});
goog.object.set(G__34170_34627,G__34171_34628,G__34172_34629);

var G__34173_34635 = clojure.core.matrix.protocols.symmetric_QMARK_;
var G__34174_34636 = "array";
var G__34175_34637 = (function (m){
var G__34176 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__34176) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
if(clojure.core.matrix.impl.common.square_QMARK_(m)){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_(m);
} else {
return false;
}

break;
default:
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.transpose(m));

}
});
goog.object.set(G__34173_34635,G__34174_34636,G__34175_34637);

goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"number",true);

var G__34177_34643 = clojure.core.matrix.protocols.identity_matrix_QMARK_;
var G__34178_34644 = "number";
var G__34179_34645 = (function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),m);
});
goog.object.set(G__34177_34643,G__34178_34644,G__34179_34645);

var G__34180_34648 = clojure.core.matrix.protocols.zero_matrix_QMARK_;
var G__34181_34649 = "number";
var G__34182_34650 = (function (m){
return (m === (0));
});
goog.object.set(G__34180_34648,G__34181_34649,G__34182_34650);

var G__34183_34653 = clojure.core.matrix.protocols.symmetric_QMARK_;
var G__34184_34654 = "number";
var G__34185_34655 = (function (m){
return true;
});
goog.object.set(G__34183_34653,G__34184_34654,G__34185_34655);
goog.object.set(clojure.core.matrix.protocols.PSummable,"array",true);

var G__34186_34656 = clojure.core.matrix.protocols.element_sum;
var G__34187_34657 = "array";
var G__34188_34658 = (function (a){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_(a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
});
goog.object.set(G__34186_34656,G__34187_34657,G__34188_34658);
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"array",true);

var G__34189_34662 = clojure.core.matrix.protocols.matrix_multiply;
var G__34190_34663 = "array";
var G__34191_34664 = (function (m,a){
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale(m,a);
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot(m,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
var vec__34192 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34192,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34192,(1),null);
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(clojure.core.matrix.protocols.reshape(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var vec__34195 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195,(1),null);
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(m,clojure.core.matrix.protocols.reshape(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_(m);
var vec__34198 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34198,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34198,(1),null);
var vec__34201 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34201,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34201,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix(new_m_type,mrows,acols);
var i_34681 = cljs.core.long$((0));
while(true){
if((i_34681 < mrows)){
var j_34683 = cljs.core.long$((0));
while(true){
if((j_34683 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_34681,j_34683,(0));

var G__34685 = (j_34683 + (1));
j_34683 = G__34685;
continue;
} else {
}
break;
}

var G__34687 = (i_34681 + (1));
i_34681 = G__34687;
continue;
} else {
}
break;
}


var i_34692 = cljs.core.long$((0));
while(true){
if((i_34692 < mrows)){
var j_34694 = cljs.core.long$((0));
while(true){
if((j_34694 < acols)){
var k_34695 = cljs.core.long$((0));
while(true){
if((k_34695 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_34692,j_34694,(clojure.core.matrix.protocols.get_2d(new_m,i_34692,j_34694) + (clojure.core.matrix.protocols.get_2d(m,i_34692,k_34695) * clojure.core.matrix.protocols.get_2d(a,k_34695,j_34694))));

var G__34698 = (k_34695 + (1));
k_34695 = G__34698;
continue;
} else {
}
break;
}

var G__34700 = (j_34694 + (1));
j_34694 = G__34700;
continue;
} else {
}
break;
}

var G__34701 = (i_34692 + (1));
i_34692 = G__34701;
continue;
} else {
}
break;
}


return new_m;
} else {
return null;
}
}
}
}
}
});
goog.object.set(G__34189_34662,G__34190_34663,G__34191_34664);

var G__34204_34704 = clojure.core.matrix.protocols.element_multiply;
var G__34205_34705 = "array";
var G__34206_34706 = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale(m,a);
} else {
var vec__34207 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34207,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34207,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._STAR_,a__$1);
}
});
goog.object.set(G__34204_34704,G__34205_34705,G__34206_34706);
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"array",true);

var G__34210_34712 = clojure.core.matrix.protocols.element_multiply_BANG_;
var G__34211_34713 = "array";
var G__34212_34714 = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_multiply(m,a));
});
goog.object.set(G__34210_34712,G__34211_34713,G__34212_34714);

var G__34213_34715 = clojure.core.matrix.protocols.matrix_multiply_BANG_;
var G__34214_34716 = "array";
var G__34215_34717 = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.matrix_multiply(m,a));
});
goog.object.set(G__34213_34715,G__34214_34716,G__34215_34717);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"array",true);

var G__34216_34721 = clojure.core.matrix.protocols.element_divide;
var G__34217_34722 = "array";
var G__34218_34723 = (function() {
var G__34725 = null;
var G__34725__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape(m))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__34725__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply(m,clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$1(a));
});
G__34725 = function(m,a){
switch(arguments.length){
case 1:
return G__34725__1.call(this,m);
case 2:
return G__34725__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34725.cljs$core$IFn$_invoke$arity$1 = G__34725__1;
G__34725.cljs$core$IFn$_invoke$arity$2 = G__34725__2;
return G__34725;
})()
;
goog.object.set(G__34216_34721,G__34217_34722,G__34218_34723);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"array",true);

var G__34219_34735 = clojure.core.matrix.protocols.element_divide_BANG_;
var G__34220_34736 = "array";
var G__34221_34737 = (function() {
var G__34738 = null;
var G__34738__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,cljs.core._SLASH_);
});
var G__34738__2 = (function (m,a){
var vec__34222 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._SLASH_,a__$1);
});
G__34738 = function(m,a){
switch(arguments.length){
case 1:
return G__34738__1.call(this,m);
case 2:
return G__34738__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34738.cljs$core$IFn$_invoke$arity$1 = G__34738__1;
G__34738.cljs$core$IFn$_invoke$arity$2 = G__34738__2;
return G__34738;
})()
;
goog.object.set(G__34219_34735,G__34220_34736,G__34221_34737);
goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"array",true);

var G__34225_34742 = clojure.core.matrix.protocols.broadcast_coerce;
var G__34226_34743 = "array";
var G__34227_34744 = (function (m,a){
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.broadcast_like(m,a));
});
goog.object.set(G__34225_34742,G__34226_34743,G__34227_34744);
goog.object.set(clojure.core.matrix.protocols.PCoercion,"array",true);

var G__34228_34748 = clojure.core.matrix.protocols.coerce_param;
var G__34229_34749 = "array";
var G__34230_34750 = (function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors(param):param);
var or__4185__auto__ = clojure.core.matrix.protocols.construct_matrix(m,param__$1);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return param__$1;
}
});
goog.object.set(G__34228_34748,G__34229_34749,G__34230_34750);
goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"array",true);

var G__34231_34753 = clojure.core.matrix.protocols.broadcast_like;
var G__34232_34754 = "array";
var G__34233_34755 = (function (m,a){
var sm = clojure.core.matrix.protocols.get_shape(m);
var sa = clojure.core.matrix.protocols.get_shape(a);
if(clojure.core.matrix.utils.same_shape_object_QMARK_(sm,sa)){
return a;
} else {
return clojure.core.matrix.protocols.broadcast(a,sm);
}
});
goog.object.set(G__34231_34753,G__34232_34754,G__34233_34755);
goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"array",true);

var G__34234_34761 = clojure.core.matrix.protocols.trace;
var G__34235_34762 = "array";
var G__34236_34763 = (function (m){
if(((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Trace requires a 2D matrix",cljs.core.PersistentArrayMap.EMPTY);
}

var rc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var cc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1)));
var dims = Math.min(rc,cc);
var i = (0);
var res = 0.0;
while(true){
if((i >= dims)){
return res;
} else {
var G__34770 = (i + (1));
var G__34771 = (res + clojure.core.matrix.protocols.get_2d(m,i,i));
i = G__34770;
res = G__34771;
continue;
}
break;
}
});
goog.object.set(G__34234_34761,G__34235_34762,G__34236_34763);

var G__34237_34774 = clojure.core.matrix.protocols.determinant;
var G__34238_34775 = "array";
var G__34239_34776 = (function (m){
return null;
});
goog.object.set(G__34237_34774,G__34238_34775,G__34239_34776);

var G__34240_34779 = clojure.core.matrix.protocols.inverse;
var G__34241_34780 = "array";
var G__34242_34781 = (function (m){
return null;
});
goog.object.set(G__34240_34779,G__34241_34780,G__34242_34781);

//# sourceMappingURL=clojure.core.matrix.impl.double_array.js.map
