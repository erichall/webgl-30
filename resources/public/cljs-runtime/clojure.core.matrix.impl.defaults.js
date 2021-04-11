goog.provide('clojure.core.matrix.impl.defaults');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.impl.mathsops');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.double_array');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.utils');
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = null;
/**
 * Returns the total count of elements in an array
 */
clojure.core.matrix.impl.defaults.calc_element_count = (function clojure$core$matrix$impl$defaults$calc_element_count(m){
var temp__5733__auto__ = clojure.core.matrix.protocols.get_shape(m);
if(cljs.core.truth_(temp__5733__auto__)){
var sh = temp__5733__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,sh);
} else {
return (1);
}
});
/**
 * Constructs a new mutable matrix with the given data.
 */
clojure.core.matrix.impl.defaults.construct_mutable_matrix = (function clojure$core$matrix$impl$defaults$construct_mutable_matrix(m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var type = clojure.core.matrix.protocols.element_type(m);
var double_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Number,type);
if((dims === (0))){
return clojure.core.matrix.impl.wrappers.wrap_scalar(clojure.core.matrix.protocols.get_0d(m));
} else {
if((((dims === (1))) && (double_QMARK_))){
return clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
if(double_QMARK_){
return clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
return clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);

}
}
}
});
goog.object.set(clojure.core.matrix.protocols.PImplementation,"object",true);

var G__37316_39279 = clojure.core.matrix.protocols.implementation_key;
var G__37317_39280 = "object";
var G__37318_39281 = (function (m){
return new cljs.core.Keyword(null,"default","default",-1987822328);
});
goog.object.set(G__37316_39279,G__37317_39280,G__37318_39281);

var G__37319_39282 = clojure.core.matrix.protocols.meta_info;
var G__37320_39283 = "object";
var G__37321_39284 = (function (m){
return cljs.core.PersistentArrayMap.EMPTY;
});
goog.object.set(G__37319_39282,G__37320_39283,G__37321_39284);

var G__37322_39285 = clojure.core.matrix.protocols.construct_matrix;
var G__37323_39286 = "object";
var G__37324_39287 = (function (m,data){
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
});
goog.object.set(G__37322_39285,G__37323_39286,G__37324_39287);

var G__37325_39288 = clojure.core.matrix.protocols.new_vector;
var G__37326_39289 = "object";
var G__37327_39290 = (function (m,length){
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
});
goog.object.set(G__37325_39288,G__37326_39289,G__37327_39290);

var G__37328_39291 = clojure.core.matrix.protocols.new_matrix;
var G__37329_39292 = "object";
var G__37330_39293 = (function (m,rows,columns){
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
});
goog.object.set(G__37328_39291,G__37329_39292,G__37330_39293);

var G__37331_39294 = clojure.core.matrix.protocols.new_matrix_nd;
var G__37332_39295 = "object";
var G__37333_39296 = (function (m,shape){
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
});
goog.object.set(G__37331_39294,G__37332_39295,G__37333_39296);

var G__37334_39297 = clojure.core.matrix.protocols.supports_dimensionality_QMARK_;
var G__37335_39298 = "object";
var G__37336_39299 = (function (m,dimensions){
return true;
});
goog.object.set(G__37334_39297,G__37335_39298,G__37336_39299);

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.protocols.meta_info(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1));
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),data);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),length);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),rows,columns);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,shape){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),shape);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dimensions){
var m__$1 = this;
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),dimensions);
}));
goog.object.set(clojure.core.matrix.protocols.PSparse,"null",true);

var G__37337_39302 = clojure.core.matrix.protocols.sparse_coerce;
var G__37338_39303 = "null";
var G__37339_39304 = (function (m,data){
return clojure.core.matrix.protocols.sparse(data);
});
goog.object.set(G__37337_39302,G__37338_39303,G__37339_39304);

var G__37340_39305 = clojure.core.matrix.protocols.sparse;
var G__37341_39306 = "null";
var G__37342_39307 = (function (m){
return null;
});
goog.object.set(G__37340_39305,G__37341_39306,G__37342_39307);

goog.object.set(clojure.core.matrix.protocols.PSparse,"object",true);

var G__37343_39310 = clojure.core.matrix.protocols.sparse_coerce;
var G__37344_39311 = "object";
var G__37345_39312 = (function (m,data){
return null;
});
goog.object.set(G__37343_39310,G__37344_39311,G__37345_39312);

var G__37346_39313 = clojure.core.matrix.protocols.sparse;
var G__37347_39314 = "object";
var G__37348_39315 = (function (m){
return m;
});
goog.object.set(G__37346_39313,G__37347_39314,G__37348_39315);
goog.object.set(clojure.core.matrix.protocols.PNative,"null",true);

var G__37349_39318 = clojure.core.matrix.protocols.native$;
var G__37350_39319 = "null";
var G__37351_39320 = (function (m){
return null;
});
goog.object.set(G__37349_39318,G__37350_39319,G__37351_39320);

var G__37352_39322 = clojure.core.matrix.protocols.native_QMARK_;
var G__37353_39323 = "null";
var G__37354_39324 = (function (m){
return false;
});
goog.object.set(G__37352_39322,G__37353_39323,G__37354_39324);

goog.object.set(clojure.core.matrix.protocols.PNative,"object",true);

var G__37355_39326 = clojure.core.matrix.protocols.native$;
var G__37356_39327 = "object";
var G__37357_39328 = (function (m){
return null;
});
goog.object.set(G__37355_39326,G__37356_39327,G__37357_39328);

var G__37358_39329 = clojure.core.matrix.protocols.native_QMARK_;
var G__37359_39330 = "object";
var G__37360_39331 = (function (m){
return false;
});
goog.object.set(G__37358_39329,G__37359_39330,G__37360_39331);
goog.object.set(clojure.core.matrix.protocols.PNewSparseArray,"object",true);

var G__37361_39332 = clojure.core.matrix.protocols.new_sparse_array;
var G__37362_39333 = "object";
var G__37363_39334 = (function (m,shape){
return null;
});
goog.object.set(G__37361_39332,G__37362_39333,G__37363_39334);
goog.object.set(clojure.core.matrix.protocols.PDense,"null",true);

var G__37364_39335 = clojure.core.matrix.protocols.dense_coerce;
var G__37365_39336 = "null";
var G__37366_39337 = (function (m,data){
return clojure.core.matrix.protocols.dense(data);
});
goog.object.set(G__37364_39335,G__37365_39336,G__37366_39337);

var G__37367_39340 = clojure.core.matrix.protocols.dense;
var G__37368_39341 = "null";
var G__37369_39342 = (function (m){
return null;
});
goog.object.set(G__37367_39340,G__37368_39341,G__37369_39342);

goog.object.set(clojure.core.matrix.protocols.PDense,"object",true);

var G__37370_39343 = clojure.core.matrix.protocols.dense_coerce;
var G__37371_39344 = "object";
var G__37372_39345 = (function (m,data){
return null;
});
goog.object.set(G__37370_39343,G__37371_39344,G__37372_39345);

var G__37373_39348 = clojure.core.matrix.protocols.dense;
var G__37374_39349 = "object";
var G__37375_39350 = (function (m){
return m;
});
goog.object.set(G__37373_39348,G__37374_39349,G__37375_39350);
goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"null",true);

var G__37376_39352 = clojure.core.matrix.protocols.get_1d;
var G__37377_39353 = "null";
var G__37378_39354 = (function (m,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D get on nil",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37376_39352,G__37377_39353,G__37378_39354);

var G__37379_39356 = clojure.core.matrix.protocols.get_2d;
var G__37380_39357 = "null";
var G__37381_39358 = (function (m,x,y){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on nil",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37379_39356,G__37380_39357,G__37381_39358);

var G__37382_39361 = clojure.core.matrix.protocols.get_nd;
var G__37383_39362 = "null";
var G__37384_39363 = (function (m,indexes){
var temp__5733__auto__ = cljs.core.seq(indexes);
if(temp__5733__auto__){
var s = temp__5733__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ND get on nil with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
});
goog.object.set(G__37382_39361,G__37383_39362,G__37384_39363);

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"number",true);

var G__37385_39364 = clojure.core.matrix.protocols.get_1d;
var G__37386_39365 = "number";
var G__37387_39366 = (function (m,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37385_39364,G__37386_39365,G__37387_39366);

var G__37388_39367 = clojure.core.matrix.protocols.get_2d;
var G__37389_39368 = "number";
var G__37390_39369 = (function (m,x,y){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37388_39367,G__37389_39368,G__37390_39369);

var G__37391_39373 = clojure.core.matrix.protocols.get_nd;
var G__37392_39374 = "number";
var G__37393_39375 = (function (m,indexes){
var temp__5733__auto__ = cljs.core.seq(indexes);
if(temp__5733__auto__){
var s = temp__5733__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ND get on a scalar number with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
});
goog.object.set(G__37391_39373,G__37392_39374,G__37393_39375);

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"object",true);

var G__37394_39377 = clojure.core.matrix.protocols.get_1d;
var G__37395_39378 = "object";
var G__37396_39379 = (function (m,x){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_0d(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,x));
} else {
return clojure.core.matrix.protocols.get_nd(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));

}
});
goog.object.set(G__37394_39377,G__37395_39378,G__37396_39379);

var G__37397_39384 = clojure.core.matrix.protocols.get_2d;
var G__37398_39385 = "object";
var G__37399_39386 = (function (m,x,y){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_1d(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,x),y);
} else {
return clojure.core.matrix.protocols.get_nd(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

}
});
goog.object.set(G__37397_39384,G__37398_39385,G__37399_39386);

var G__37400_39392 = clojure.core.matrix.protocols.get_nd;
var G__37401_39393 = "object";
var G__37402_39394 = (function (m,indexes){
if(cljs.core.seq(indexes)){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_nd(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(indexes)),cljs.core.next(indexes));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Indexed get failed, not defined for:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
} else {
return clojure.core.matrix.protocols.get_0d(m);
}
});
goog.object.set(G__37400_39392,G__37401_39393,G__37402_39394);

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
if(cljs.core.seqable_QMARK_(cljs.core.first(m__$1))){
return clojure.core.matrix.protocols.get_1d(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x),y);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on a lazy seq",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq(indexes)){
return clojure.core.matrix.protocols.get_nd(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes)),cljs.core.next(indexes));
} else {
return clojure.core.matrix.protocols.get_0d(m__$1);
}
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on a range",cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq(indexes)){
return clojure.core.matrix.protocols.get_nd(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes)),cljs.core.next(indexes));
} else {
return clojure.core.matrix.protocols.get_0d(m__$1);
}
}));
goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"null",true);

var G__37403_39414 = clojure.core.matrix.protocols.nonzero_count;
var G__37404_39415 = "null";
var G__37405_39416 = (function (m){
return (1);
});
goog.object.set(G__37403_39414,G__37404_39415,G__37405_39416);

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"number",true);

var G__37406_39420 = clojure.core.matrix.protocols.nonzero_count;
var G__37407_39421 = "number";
var G__37408_39422 = (function (m){
if((m === (0))){
return (0);
} else {
return (1);
}
});
goog.object.set(G__37406_39420,G__37407_39421,G__37408_39422);

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"object",true);

var G__37409_39424 = clojure.core.matrix.protocols.nonzero_count;
var G__37410_39425 = "object";
var G__37411_39426 = (function (m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(m,(function (cnt,e){
if((e === (0))){
return cnt;
} else {
return (cnt + (1));
}
}),(0));
});
goog.object.set(G__37409_39424,G__37410_39425,G__37411_39426);
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"null",true);

var G__37412_39431 = clojure.core.matrix.protocols.new_scalar_array;
var G__37413_39432 = "null";
var G__37414_39433 = (function() {
var G__39436 = null;
var G__39436__1 = (function (m){
return 0.0;
});
var G__39436__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar(value);
});
G__39436 = function(m,value){
switch(arguments.length){
case 1:
return G__39436__1.call(this,m);
case 2:
return G__39436__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39436.cljs$core$IFn$_invoke$arity$1 = G__39436__1;
G__39436.cljs$core$IFn$_invoke$arity$2 = G__39436__2;
return G__39436;
})()
;
goog.object.set(G__37412_39431,G__37413_39432,G__37414_39433);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"object",true);

var G__37415_39440 = clojure.core.matrix.protocols.new_scalar_array;
var G__37416_39441 = "object";
var G__37417_39442 = (function() {
var G__39444 = null;
var G__39444__1 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(0.0);
});
var G__39444__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar(value);
});
G__39444 = function(m,value){
switch(arguments.length){
case 1:
return G__39444__1.call(this,m);
case 2:
return G__39444__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39444.cljs$core$IFn$_invoke$arity$1 = G__39444__1;
G__39444.cljs$core$IFn$_invoke$arity$2 = G__39444__2;
return G__39444;
})()
;
goog.object.set(G__37415_39440,G__37416_39441,G__37417_39442);
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"null",true);

var G__37418_39449 = clojure.core.matrix.protocols.get_0d;
var G__37419_39450 = "null";
var G__37420_39451 = (function (m){
return null;
});
goog.object.set(G__37418_39449,G__37419_39450,G__37420_39451);

var G__37421_39454 = clojure.core.matrix.protocols.set_0d_BANG_;
var G__37422_39455 = "null";
var G__37423_39456 = (function (m,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set the value of nil!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37421_39454,G__37422_39455,G__37423_39456);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"string",true);

var G__37424_39458 = clojure.core.matrix.protocols.get_0d;
var G__37425_39459 = "string";
var G__37426_39460 = (function (m){
return m;
});
goog.object.set(G__37424_39458,G__37425_39459,G__37426_39460);

var G__37427_39464 = clojure.core.matrix.protocols.set_0d_BANG_;
var G__37428_39465 = "string";
var G__37429_39466 = (function (m,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set a string value!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37427_39464,G__37428_39465,G__37429_39466);

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set a keyword!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"number",true);

var G__37430_39472 = clojure.core.matrix.protocols.get_0d;
var G__37431_39473 = "number";
var G__37432_39474 = (function (m){
return m;
});
goog.object.set(G__37430_39472,G__37431_39473,G__37432_39474);

var G__37433_39476 = clojure.core.matrix.protocols.set_0d_BANG_;
var G__37434_39477 = "number";
var G__37435_39478 = (function (m,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37433_39476,G__37434_39477,G__37435_39478);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"object",true);

var G__37436_39482 = clojure.core.matrix.protocols.get_0d;
var G__37437_39483 = "object";
var G__37438_39484 = (function (m){
return m;
});
goog.object.set(G__37436_39482,G__37437_39483,G__37438_39484);

var G__37439_39487 = clojure.core.matrix.protocols.set_0d_BANG_;
var G__37440_39488 = "object";
var G__37441_39489 = (function (m,value){
return clojure.core.matrix.protocols.set_nd_BANG_(m,cljs.core.PersistentVector.EMPTY,value);
});
goog.object.set(G__37439_39487,G__37440_39488,G__37441_39489);
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"null",true);

var G__37442_39492 = clojure.core.matrix.protocols.set_0d;
var G__37443_39493 = "null";
var G__37444_39494 = (function (m,value){
return value;
});
goog.object.set(G__37442_39492,G__37443_39493,G__37444_39494);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"object",true);

var G__37445_39497 = clojure.core.matrix.protocols.set_0d;
var G__37446_39498 = "object";
var G__37447_39499 = (function (m,value){
return value;
});
goog.object.set(G__37445_39497,G__37446_39498,G__37447_39499);
goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"null",true);

var G__37448_39502 = clojure.core.matrix.protocols.set_1d;
var G__37449_39503 = "null";
var G__37450_39504 = (function (m,row,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D set on nil",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37448_39502,G__37449_39503,G__37450_39504);

var G__37451_39507 = clojure.core.matrix.protocols.set_2d;
var G__37452_39508 = "null";
var G__37453_39509 = (function (m,row,column,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on nil",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37451_39507,G__37452_39508,G__37453_39509);

var G__37454_39511 = clojure.core.matrix.protocols.set_nd;
var G__37455_39512 = "null";
var G__37456_39513 = (function (m,indexes,v){
if(cljs.core.seq(indexes)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes)),"D set on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
});
goog.object.set(G__37454_39511,G__37455_39512,G__37456_39513);

var G__37457_39517 = clojure.core.matrix.protocols.is_mutable_QMARK_;
var G__37458_39518 = "null";
var G__37459_39519 = (function (m){
return false;
});
goog.object.set(G__37457_39517,G__37458_39518,G__37459_39519);

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"number",true);

var G__37460_39521 = clojure.core.matrix.protocols.set_1d;
var G__37461_39522 = "number";
var G__37462_39523 = (function (m,row,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37460_39521,G__37461_39522,G__37462_39523);

var G__37463_39525 = clojure.core.matrix.protocols.set_2d;
var G__37464_39526 = "number";
var G__37465_39527 = (function (m,row,column,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37463_39525,G__37464_39526,G__37465_39527);

var G__37466_39530 = clojure.core.matrix.protocols.set_nd;
var G__37467_39531 = "number";
var G__37468_39532 = (function (m,indexes,v){
if(cljs.core.seq(indexes)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes)),"D set on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
});
goog.object.set(G__37466_39530,G__37467_39531,G__37468_39532);

var G__37469_39538 = clojure.core.matrix.protocols.is_mutable_QMARK_;
var G__37470_39539 = "number";
var G__37471_39540 = (function (m){
return false;
});
goog.object.set(G__37469_39538,G__37470_39539,G__37471_39540);

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"object",true);

var G__37472_39542 = clojure.core.matrix.protocols.set_1d;
var G__37473_39543 = "object";
var G__37474_39544 = (function (m,row,v){
var m__$1 = clojure.core.matrix.protocols.clone(m);
clojure.core.matrix.protocols.set_1d_BANG_(m__$1,row,v);

return m__$1;
});
goog.object.set(G__37472_39542,G__37473_39543,G__37474_39544);

var G__37475_39548 = clojure.core.matrix.protocols.set_2d;
var G__37476_39549 = "object";
var G__37477_39550 = (function (m,row,column,v){
var m__$1 = clojure.core.matrix.protocols.clone(m);
clojure.core.matrix.protocols.set_2d_BANG_(m__$1,row,column,v);

return m__$1;
});
goog.object.set(G__37475_39548,G__37476_39549,G__37477_39550);

var G__37478_39557 = clojure.core.matrix.protocols.set_nd;
var G__37479_39558 = "object";
var G__37480_39559 = (function (m,indexes,v){
var m__$1 = clojure.core.matrix.protocols.clone(m);
clojure.core.matrix.protocols.set_nd_BANG_(m__$1,indexes,v);

return m__$1;
});
goog.object.set(G__37478_39557,G__37479_39558,G__37480_39559);

var G__37481_39562 = clojure.core.matrix.protocols.is_mutable_QMARK_;
var G__37482_39563 = "object";
var G__37483_39564 = (function (m){
return true;
});
goog.object.set(G__37481_39562,G__37482_39563,G__37483_39564);
goog.object.set(clojure.core.matrix.protocols.PNumerical,"number",true);

var G__37484_39565 = clojure.core.matrix.protocols.numerical_QMARK_;
var G__37485_39566 = "number";
var G__37486_39567 = (function (m){
return true;
});
goog.object.set(G__37484_39565,G__37485_39566,G__37486_39567);

goog.object.set(clojure.core.matrix.protocols.PNumerical,"null",true);

var G__37487_39568 = clojure.core.matrix.protocols.numerical_QMARK_;
var G__37488_39569 = "null";
var G__37489_39570 = (function (m){
return false;
});
goog.object.set(G__37487_39568,G__37488_39569,G__37489_39570);

goog.object.set(clojure.core.matrix.protocols.PNumerical,"object",true);

var G__37490_39571 = clojure.core.matrix.protocols.numerical_QMARK_;
var G__37491_39572 = "object";
var G__37492_39573 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return false;
} else {
return cljs.core.every_QMARK_(cljs.core.number_QMARK_,clojure.core.matrix.protocols.element_seq(m));
}
});
goog.object.set(G__37490_39571,G__37491_39572,G__37492_39573);
goog.object.set(clojure.core.matrix.protocols.PVectorOps,"number",true);

var G__37493_39575 = clojure.core.matrix.protocols.vector_dot;
var G__37494_39576 = "number";
var G__37495_39577 = (function (a,b){
return clojure.core.matrix.protocols.pre_scale(b,a);
});
goog.object.set(G__37493_39575,G__37494_39576,G__37495_39577);

var G__37496_39578 = clojure.core.matrix.protocols.length;
var G__37497_39579 = "number";
var G__37498_39580 = (function (a){
var G__37499 = a;
return Math.abs(G__37499);
});
goog.object.set(G__37496_39578,G__37497_39579,G__37498_39580);

var G__37500_39587 = clojure.core.matrix.protocols.length_squared;
var G__37501_39588 = "number";
var G__37502_39589 = (function (a){
var a__$1 = a;
return (a__$1 * a__$1);
});
goog.object.set(G__37500_39587,G__37501_39588,G__37502_39589);

var G__37503_39592 = clojure.core.matrix.protocols.normalise;
var G__37504_39593 = "number";
var G__37505_39594 = (function (a){
var a__$1 = a;
if((a__$1 > 0.0)){
return 1.0;
} else {
if((a__$1 < 0.0)){
return -1.0;
} else {
return 0.0;

}
}
});
goog.object.set(G__37503_39592,G__37504_39593,G__37505_39594);

goog.object.set(clojure.core.matrix.protocols.PVectorOps,"object",true);

var G__37506_39601 = clojure.core.matrix.protocols.vector_dot;
var G__37507_39602 = "object";
var G__37508_39603 = (function (a,b){
if(((((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))) && (((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))))){
return clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_multiply(a,b));
} else {
return null;
}
});
goog.object.set(G__37506_39601,G__37507_39602,G__37508_39603);

var G__37509_39607 = clojure.core.matrix.protocols.length;
var G__37510_39608 = "object";
var G__37511_39609 = (function (a){
var G__37512 = clojure.core.matrix.protocols.length_squared(a);
return Math.sqrt(G__37512);
});
goog.object.set(G__37509_39607,G__37510_39608,G__37511_39609);

var G__37513_39612 = clojure.core.matrix.protocols.length_squared;
var G__37514_39613 = "object";
var G__37515_39614 = (function (a){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(a,(function (r,x){
return (r + (x * x));
}),0.0);
});
goog.object.set(G__37513_39612,G__37514_39613,G__37515_39614);

var G__37516_39621 = clojure.core.matrix.protocols.normalise;
var G__37517_39622 = "object";
var G__37518_39623 = (function (a){
return clojure.core.matrix.protocols.scale(a,(1.0 / (function (){var G__37519 = clojure.core.matrix.protocols.length_squared(a);
return Math.sqrt(G__37519);
})()));
});
goog.object.set(G__37516_39621,G__37517_39622,G__37518_39623);
goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"number",true);

var G__37520_39629 = clojure.core.matrix.protocols.distance;
var G__37521_39630 = "number";
var G__37522_39631 = (function (a,b){
if(typeof b === 'number'){
var G__37523 = (b - a);
return Math.abs(G__37523);
} else {
return clojure.core.matrix.protocols.distance(b,a);
}
});
goog.object.set(G__37520_39629,G__37521_39630,G__37522_39631);

goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"object",true);

var G__37524_39636 = clojure.core.matrix.protocols.distance;
var G__37525_39637 = "object";
var G__37526_39638 = (function (a,b){
return clojure.core.matrix.protocols.length(clojure.core.matrix.protocols.matrix_sub(a,b));
});
goog.object.set(G__37524_39636,G__37525_39637,G__37526_39638);
goog.object.set(clojure.core.matrix.protocols.PVectorCross,"object",true);

var G__37527_39643 = clojure.core.matrix.protocols.cross_product;
var G__37528_39644 = "object";
var G__37529_39645 = (function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d(a,(0));
var y1 = clojure.core.matrix.protocols.get_1d(a,(1));
var z1 = clojure.core.matrix.protocols.get_1d(a,(2));
var x2 = clojure.core.matrix.protocols.get_1d(b,(0));
var y2 = clojure.core.matrix.protocols.get_1d(b,(1));
var z2 = clojure.core.matrix.protocols.get_1d(b,(2));
return clojure.core.matrix.protocols.construct_matrix(a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (z1 * y2)),((z1 * x2) - (x1 * z2)),((x1 * y2) - (y1 * x2))], null));
});
goog.object.set(G__37527_39643,G__37528_39644,G__37529_39645);

var G__37530_39654 = clojure.core.matrix.protocols.cross_product_BANG_;
var G__37531_39655 = "object";
var G__37532_39656 = (function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d(a,(0));
var y1 = clojure.core.matrix.protocols.get_1d(a,(1));
var z1 = clojure.core.matrix.protocols.get_1d(a,(2));
var x2 = clojure.core.matrix.protocols.get_1d(b,(0));
var y2 = clojure.core.matrix.protocols.get_1d(b,(1));
var z2 = clojure.core.matrix.protocols.get_1d(b,(2));
clojure.core.matrix.protocols.set_1d_BANG_(a,(0),((y1 * z2) - (z1 * y2)));

clojure.core.matrix.protocols.set_1d_BANG_(a,(1),((z1 * x2) - (x1 * z2)));

clojure.core.matrix.protocols.set_1d_BANG_(a,(2),((x1 * y2) - (y1 * x2)));

return a;
});
goog.object.set(G__37530_39654,G__37531_39655,G__37532_39656);
goog.object.set(clojure.core.matrix.protocols.PMutableVectorOps,"object",true);

var G__37533_39660 = clojure.core.matrix.protocols.normalise_BANG_;
var G__37534_39661 = "object";
var G__37535_39662 = (function (a){
return clojure.core.matrix.protocols.scale_BANG_(a,(1.0 / (function (){var G__37536 = clojure.core.matrix.protocols.length_squared(a);
return Math.sqrt(G__37536);
})()));
});
goog.object.set(G__37533_39660,G__37534_39661,G__37535_39662);
goog.object.set(clojure.core.matrix.protocols.PAssignment,"object",true);

var G__37537_39663 = clojure.core.matrix.protocols.assign_BANG_;
var G__37538_39664 = "object";
var G__37539_39665 = (function (m,x){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if(((0) === dims)){
return clojure.core.matrix.protocols.set_0d_BANG_(m,clojure.core.matrix.protocols.get_0d(x));
} else {
if(((1) === dims)){
if((x instanceof cljs.core.ISeq)){
var x__$1 = cljs.core.seq(x);
var msize = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var i = (0);
var s = cljs.core.seq(x__$1);
while(true){
if((i >= msize)){
if(s){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mismatches size of sequence in assign!",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
clojure.core.matrix.protocols.set_1d_BANG_(m,i,cljs.core.first(s));

var G__39666 = (i + (1));
var G__39667 = cljs.core.next(s);
i = G__39666;
s = G__39667;
continue;
}
break;
}
} else {
var xdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(x));
var msize = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
if(((0) === xdims)){
var value = clojure.core.matrix.protocols.get_0d(x);
var n__4666__auto__ = msize;
var i = (0);
while(true){
if((i < n__4666__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,value);

var G__39672 = (i + (1));
i = G__39672;
continue;
} else {
return null;
}
break;
}
} else {
if(((1) === xdims)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(msize,cljs.core.long$(clojure.core.matrix.protocols.dimension_count(x,(0))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Mismatched shapes in assign to array of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m))," with argument of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4666__auto__ = msize;
var i = (0);
while(true){
if((i < n__4666__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,clojure.core.matrix.protocols.get_1d(x,i));

var G__39677 = (i + (1));
i = G__39677;
continue;
} else {
return null;
}
break;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't assign! with an argument of higher dimensionality",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
var xdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(x));
if((dims === xdims)){
var xss = clojure.core.matrix.protocols.get_major_slice_seq(x);
var _ = (function (){var or__4185__auto__ = clojure.core.matrix.protocols.same_shapes_QMARK_(xss);
if(or__4185__auto__){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Inconsistent slice shapes for assign!",cljs.core.PersistentArrayMap.EMPTY);
}
})();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return clojure.core.matrix.protocols.assign_BANG_(a,b);
}),clojure.core.matrix.protocols.get_major_slice_view_seq(m),xss));
} else {
var seq__37540 = cljs.core.seq(clojure.core.matrix.protocols.get_major_slice_view_seq(m));
var chunk__37541 = null;
var count__37542 = (0);
var i__37543 = (0);
while(true){
if((i__37543 < count__37542)){
var ms = chunk__37541.cljs$core$IIndexed$_nth$arity$2(null,i__37543);
clojure.core.matrix.protocols.assign_BANG_(ms,x);


var G__39682 = seq__37540;
var G__39683 = chunk__37541;
var G__39684 = count__37542;
var G__39685 = (i__37543 + (1));
seq__37540 = G__39682;
chunk__37541 = G__39683;
count__37542 = G__39684;
i__37543 = G__39685;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37540);
if(temp__5735__auto__){
var seq__37540__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37540__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37540__$1);
var G__39688 = cljs.core.chunk_rest(seq__37540__$1);
var G__39689 = c__4609__auto__;
var G__39690 = cljs.core.count(c__4609__auto__);
var G__39691 = (0);
seq__37540 = G__39688;
chunk__37541 = G__39689;
count__37542 = G__39690;
i__37543 = G__39691;
continue;
} else {
var ms = cljs.core.first(seq__37540__$1);
clojure.core.matrix.protocols.assign_BANG_(ms,x);


var G__39698 = cljs.core.next(seq__37540__$1);
var G__39699 = null;
var G__39700 = (0);
var G__39701 = (0);
seq__37540 = G__39698;
chunk__37541 = G__39699;
count__37542 = G__39700;
i__37543 = G__39701;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't assign to a non-array object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
goog.object.set(G__37537_39663,G__37538_39664,G__37539_39665);

var G__37544_39707 = clojure.core.matrix.protocols.assign_array_BANG_;
var G__37545_39708 = "object";
var G__37546_39709 = (function() {
var G__39711 = null;
var G__39711__2 = (function (m,arr){
var alen = cljs.core.long$(cljs.core.count(arr));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
var n__4666__auto__ = alen;
var i = (0);
while(true){
if((i < n__4666__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arr,i));

var G__39716 = (i + (1));
i = G__39716;
continue;
} else {
return null;
}
break;
}
} else {
return clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$4(m,arr,(0),alen);
}
});
var G__39711__4 = (function (m,arr,start,length){
var length__$1 = cljs.core.long$(length);
var start__$1 = cljs.core.long$(start);
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
var n__4666__auto__ = length__$1;
var i = (0);
while(true){
if((i < n__4666__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arr,(start__$1 + i)));

var G__39724 = (i + (1));
i = G__39724;
continue;
} else {
return null;
}
break;
}
} else {
var ss = cljs.core.seq(clojure.core.matrix.protocols.get_major_slice_seq(m));
var skip = cljs.core.long$(((ss)?clojure.core.matrix.impl.defaults.calc_element_count(cljs.core.first(clojure.core.matrix.protocols.get_major_slice_seq(m))):(0)));
var vals__25943__auto__ = cljs.core.seq(ss);
var i = cljs.core.long$((0));
while(true){
if(vals__25943__auto__){
var s = cljs.core.first(vals__25943__auto__);
clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$4(s,arr,(start__$1 + (skip * i)),skip);

var G__39732 = cljs.core.next(vals__25943__auto__);
var G__39733 = (i + (1));
vals__25943__auto__ = G__39732;
i = G__39733;
continue;
} else {
return null;
}
break;
}
}
});
G__39711 = function(m,arr,start,length){
switch(arguments.length){
case 2:
return G__39711__2.call(this,m,arr);
case 4:
return G__39711__4.call(this,m,arr,start,length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39711.cljs$core$IFn$_invoke$arity$2 = G__39711__2;
G__39711.cljs$core$IFn$_invoke$arity$4 = G__39711__4;
return G__39711;
})()
;
goog.object.set(G__37544_39707,G__37545_39708,G__37546_39709);
goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"null",true);

var G__37547_39739 = clojure.core.matrix.protocols.assign;
var G__37548_39740 = "null";
var G__37549_39741 = (function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce(m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone(r);
} else {
return r;
}
});
goog.object.set(G__37547_39739,G__37548_39740,G__37549_39741);

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"number",true);

var G__37550_39748 = clojure.core.matrix.protocols.assign;
var G__37551_39749 = "number";
var G__37552_39750 = (function (m,source){
return source;
});
goog.object.set(G__37550_39748,G__37551_39749,G__37552_39750);

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"object",true);

var G__37553_39753 = clojure.core.matrix.protocols.assign;
var G__37554_39754 = "object";
var G__37555_39755 = (function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce(m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone(r);
} else {
return r;
}
});
goog.object.set(G__37553_39753,G__37554_39754,G__37555_39755);
goog.object.set(clojure.core.matrix.protocols.PMutableFill,"object",true);

var G__37556_39757 = clojure.core.matrix.protocols.fill_BANG_;
var G__37557_39758 = "object";
var G__37558_39759 = (function (m,value){
return clojure.core.matrix.protocols.assign_BANG_(m,value);
});
goog.object.set(G__37556_39757,G__37557_39758,G__37558_39759);
goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"null",true);

var G__37559_39760 = clojure.core.matrix.protocols.clone;
var G__37560_39761 = "null";
var G__37561_39762 = (function (m){
return m;
});
goog.object.set(G__37559_39760,G__37560_39761,G__37561_39762);

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"number",true);

var G__37562_39763 = clojure.core.matrix.protocols.clone;
var G__37563_39764 = "number";
var G__37564_39765 = (function (m){
return m;
});
goog.object.set(G__37562_39763,G__37563_39764,G__37564_39765);

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"object",true);

var G__37565_39768 = clojure.core.matrix.protocols.clone;
var G__37566_39769 = "object";
var G__37567_39770 = (function (m){
return clojure.core.matrix.protocols.construct_matrix(m,m);
});
goog.object.set(G__37565_39768,G__37566_39769,G__37567_39770);
goog.object.set(clojure.core.matrix.protocols.PSparseArray,"object",true);

var G__37568_39772 = clojure.core.matrix.protocols.is_sparse_QMARK_;
var G__37569_39773 = "object";
var G__37570_39774 = (function (m){
return false;
});
goog.object.set(G__37568_39772,G__37569_39773,G__37570_39774);
goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"null",true);

var G__37571_39777 = clojure.core.matrix.protocols.immutable_matrix;
var G__37572_39778 = "null";
var G__37573_39779 = (function (m){
return null;
});
goog.object.set(G__37571_39777,G__37572_39778,G__37573_39779);

goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"object",true);

var G__37574_39781 = clojure.core.matrix.protocols.immutable_matrix;
var G__37575_39782 = "object";
var G__37576_39783 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
return clojure.core.matrix.protocols.convert_to_nested_vectors(m);
} else {
return m;
}
});
goog.object.set(G__37574_39781,G__37575_39782,G__37576_39783);
goog.object.set(clojure.core.matrix.protocols.PZeroCount,"null",true);

var G__37577_39784 = clojure.core.matrix.protocols.zero_count;
var G__37578_39785 = "null";
var G__37579_39786 = (function (m){
return (0);
});
goog.object.set(G__37577_39784,G__37578_39785,G__37579_39786);

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"number",true);

var G__37580_39787 = clojure.core.matrix.protocols.zero_count;
var G__37581_39788 = "number";
var G__37582_39789 = (function (m){
if((m === (0))){
return (1);
} else {
return (0);
}
});
goog.object.set(G__37580_39787,G__37581_39788,G__37582_39789);

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"object",true);

var G__37583_39793 = clojure.core.matrix.protocols.zero_count;
var G__37584_39794 = "object";
var G__37585_39795 = (function (m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(m,(function (acc,e){
if((e === (0))){
return (acc + (1));
} else {
return acc;
}
}),(0));
});
goog.object.set(G__37583_39793,G__37584_39794,G__37585_39795);
goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"null",true);

var G__37586_39799 = clojure.core.matrix.protocols.mutable_matrix;
var G__37587_39800 = "null";
var G__37588_39801 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
});
goog.object.set(G__37586_39799,G__37587_39800,G__37588_39801);

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"number",true);

var G__37589_39804 = clojure.core.matrix.protocols.mutable_matrix;
var G__37590_39805 = "number";
var G__37591_39806 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
});
goog.object.set(G__37589_39804,G__37590_39805,G__37591_39806);

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"object",true);

var G__37592_39808 = clojure.core.matrix.protocols.mutable_matrix;
var G__37593_39809 = "object";
var G__37594_39810 = (function (m){
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(m);
});
goog.object.set(G__37592_39808,G__37593_39809,G__37594_39810);
goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"null",true);

var G__37595_39811 = clojure.core.matrix.protocols.ensure_mutable;
var G__37596_39812 = "null";
var G__37597_39813 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
});
goog.object.set(G__37595_39811,G__37596_39812,G__37597_39813);

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"number",true);

var G__37598_39815 = clojure.core.matrix.protocols.ensure_mutable;
var G__37599_39816 = "number";
var G__37600_39817 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
});
goog.object.set(G__37598_39815,G__37599_39816,G__37600_39817);

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"object",true);

var G__37601_39818 = clojure.core.matrix.protocols.ensure_mutable;
var G__37602_39819 = "object";
var G__37603_39820 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
return m;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(m);
}
});
goog.object.set(G__37601_39818,G__37602_39819,G__37603_39820);
goog.object.set(clojure.core.matrix.protocols.PComputeMatrix,"object",true);

var G__37604_39823 = clojure.core.matrix.protocols.compute_matrix;
var G__37605_39824 = "object";
var G__37606_39825 = (function (m,shape,f){
var m__$1 = clojure.core.matrix.protocols.new_matrix_nd(m,shape);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$2,ix){
return clojure.core.matrix.protocols.set_nd(m__$2,ix,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,ix));
}),m__$1,clojure.core.matrix.utils.base_index_seq_for_shape(shape));
});
goog.object.set(G__37604_39823,G__37605_39824,G__37606_39825);
goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"null",true);

var G__37607_39829 = clojure.core.matrix.protocols.dimensionality;
var G__37608_39830 = "null";
var G__37609_39831 = (function (m){
return (0);
});
goog.object.set(G__37607_39829,G__37608_39830,G__37609_39831);

var G__37610_39832 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__37611_39833 = "null";
var G__37612_39834 = (function (m){
return true;
});
goog.object.set(G__37610_39832,G__37611_39833,G__37612_39834);

var G__37613_39837 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__37614_39838 = "null";
var G__37615_39839 = (function (m){
return false;
});
goog.object.set(G__37613_39837,G__37614_39838,G__37615_39839);

var G__37616_39840 = clojure.core.matrix.protocols.get_shape;
var G__37617_39841 = "null";
var G__37618_39842 = (function (m){
return null;
});
goog.object.set(G__37616_39840,G__37617_39841,G__37618_39842);

var G__37619_39843 = clojure.core.matrix.protocols.dimension_count;
var G__37620_39844 = "null";
var G__37621_39845 = (function (m,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["nil has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37619_39843,G__37620_39844,G__37621_39845);

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"object",true);

var G__37622_39851 = clojure.core.matrix.protocols.dimensionality;
var G__37623_39852 = "object";
var G__37624_39853 = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
var n = cljs.core.long$(cljs.core.count(m));
if((n > (0))){
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)))) + (1));
} else {
return (1);
}
} else {
return (0);

}
});
goog.object.set(G__37622_39851,G__37623_39852,G__37624_39853);

var G__37625_39856 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__37626_39857 = "object";
var G__37627_39858 = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
var n = cljs.core.long$(cljs.core.count(m));
return (((n === (0))) || (((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)))))));
} else {
return false;

}
});
goog.object.set(G__37625_39856,G__37626_39857,G__37627_39858);

var G__37628_39859 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__37629_39860 = "object";
var G__37630_39861 = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
return false;
} else {
return true;

}
});
goog.object.set(G__37628_39859,G__37629_39860,G__37630_39861);

var G__37631_39862 = clojure.core.matrix.protocols.get_shape;
var G__37632_39863 = "object";
var G__37633_39864 = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
var n = cljs.core.count(m);
if((n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
} else {
return cljs.core.cons(n,clojure.core.matrix.protocols.get_shape(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0))));
}
} else {
return null;

}
});
goog.object.set(G__37631_39862,G__37632_39863,G__37633_39864);

var G__37634_39867 = clojure.core.matrix.protocols.dimension_count;
var G__37635_39868 = "object";
var G__37636_39869 = (function (m,i){
var i__$1 = cljs.core.long$(i);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
if((i__$1 === (0))){
return cljs.core.count(m);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)),(i__$1 - (1)));
}
} else {
if(((0) === i__$1)){
return cljs.core.count(m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't determine count of dimension ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)," on Object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
goog.object.set(G__37634_39867,G__37635_39868,G__37636_39869);

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"number",true);

var G__37637_39876 = clojure.core.matrix.protocols.dimensionality;
var G__37638_39877 = "number";
var G__37639_39878 = (function (m){
return (0);
});
goog.object.set(G__37637_39876,G__37638_39877,G__37639_39878);

var G__37640_39879 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__37641_39880 = "number";
var G__37642_39881 = (function (m){
return true;
});
goog.object.set(G__37640_39879,G__37641_39880,G__37642_39881);

var G__37643_39882 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__37644_39883 = "number";
var G__37645_39884 = (function (m){
return false;
});
goog.object.set(G__37643_39882,G__37644_39883,G__37645_39884);

var G__37646_39885 = clojure.core.matrix.protocols.get_shape;
var G__37647_39886 = "number";
var G__37648_39887 = (function (m){
return null;
});
goog.object.set(G__37646_39885,G__37647_39886,G__37648_39887);

var G__37649_39888 = clojure.core.matrix.protocols.dimension_count;
var G__37650_39889 = "number";
var G__37651_39890 = (function (m,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Number has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37649_39888,G__37650_39889,G__37651_39890);

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"string",true);

var G__37652_39897 = clojure.core.matrix.protocols.dimensionality;
var G__37653_39898 = "string";
var G__37654_39899 = (function (m){
return (0);
});
goog.object.set(G__37652_39897,G__37653_39898,G__37654_39899);

var G__37655_39901 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__37656_39902 = "string";
var G__37657_39903 = (function (m){
return true;
});
goog.object.set(G__37655_39901,G__37656_39902,G__37657_39903);

var G__37658_39905 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__37659_39906 = "string";
var G__37660_39907 = (function (m){
return false;
});
goog.object.set(G__37658_39905,G__37659_39906,G__37660_39907);

var G__37661_39908 = clojure.core.matrix.protocols.get_shape;
var G__37662_39909 = "string";
var G__37663_39910 = (function (m){
return null;
});
goog.object.set(G__37661_39908,G__37662_39909,G__37663_39910);

var G__37664_39911 = clojure.core.matrix.protocols.dimension_count;
var G__37665_39912 = "string";
var G__37666_39913 = (function (m,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["String has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37664_39911,G__37665_39912,G__37666_39913);

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
}));

(cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (0);
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return null;
}));

(cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,i){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Keyword has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));
goog.object.set(clojure.core.matrix.protocols.PSameShape,"null",true);

var G__37667_39922 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__37668_39923 = "null";
var G__37669_39924 = (function (a,b){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)));
});
goog.object.set(G__37667_39922,G__37668_39923,G__37669_39924);

goog.object.set(clojure.core.matrix.protocols.PSameShape,"string",true);

var G__37670_39926 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__37671_39927 = "string";
var G__37672_39928 = (function (a,b){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)));
});
goog.object.set(G__37670_39926,G__37671_39927,G__37672_39928);

goog.object.set(clojure.core.matrix.protocols.PSameShape,"number",true);

var G__37673_39929 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__37674_39930 = "number";
var G__37675_39931 = (function (a,b){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)));
});
goog.object.set(G__37673_39929,G__37674_39930,G__37675_39931);

goog.object.set(clojure.core.matrix.protocols.PSameShape,"object",true);

var G__37676_39932 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__37677_39933 = "object";
var G__37678_39934 = (function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_(clojure.core.matrix.protocols.get_shape(a),clojure.core.matrix.protocols.get_shape(b));
});
goog.object.set(G__37676_39932,G__37677_39933,G__37678_39934);
goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"null",true);

var G__37679_39937 = clojure.core.matrix.protocols.trace;
var G__37680_39938 = "null";
var G__37681_39939 = (function (m){
return m;
});
goog.object.set(G__37679_39937,G__37680_39938,G__37681_39939);

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"number",true);

var G__37682_39940 = clojure.core.matrix.protocols.trace;
var G__37683_39941 = "number";
var G__37684_39942 = (function (m){
return m;
});
goog.object.set(G__37682_39940,G__37683_39941,G__37684_39942);

var G__37685_39943 = clojure.core.matrix.protocols.inverse;
var G__37686_39944 = "number";
var G__37687_39945 = (function (m){
return ((1) / m);
});
goog.object.set(G__37685_39943,G__37686_39944,G__37687_39945);

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"object",true);

var G__37688_39946 = clojure.core.matrix.protocols.trace;
var G__37689_39947 = "object";
var G__37690_39948 = (function (m){
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
var G__39950 = (i + (1));
var G__39951 = (res + clojure.core.matrix.protocols.get_2d(m,i,i));
i = G__39950;
res = G__39951;
continue;
}
break;
}
});
goog.object.set(G__37688_39946,G__37689_39947,G__37690_39948);

var G__37691_39953 = clojure.core.matrix.protocols.determinant;
var G__37692_39954 = "object";
var G__37693_39955 = (function (m){
var imp = (function (){var or__4185__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("(let Need to load an implementation which supports determinant, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp,m);
return clojure.core.matrix.protocols.determinant(m__$1);
});
goog.object.set(G__37691_39953,G__37692_39954,G__37693_39955);

var G__37694_39959 = clojure.core.matrix.protocols.inverse;
var G__37695_39960 = "object";
var G__37696_39961 = (function (m){
var imp = (function (){var or__4185__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Need to load an implementation which supports inverse, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var mm = clojure.core.matrix.protocols.coerce_param(imp,m);
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.inverse(mm));
});
goog.object.set(G__37694_39959,G__37695_39960,G__37696_39961);
goog.object.set(clojure.core.matrix.protocols.PTranspose,"null",true);

var G__37697_39969 = clojure.core.matrix.protocols.transpose;
var G__37698_39970 = "null";
var G__37699_39971 = (function (m){
return m;
});
goog.object.set(G__37697_39969,G__37698_39970,G__37699_39971);

goog.object.set(clojure.core.matrix.protocols.PTranspose,"number",true);

var G__37700_39975 = clojure.core.matrix.protocols.transpose;
var G__37701_39976 = "number";
var G__37702_39977 = (function (m){
return m;
});
goog.object.set(G__37700_39975,G__37701_39976,G__37702_39977);

goog.object.set(clojure.core.matrix.protocols.PTranspose,"object",true);

var G__37703_39979 = clojure.core.matrix.protocols.transpose;
var G__37704_39980 = "object";
var G__37705_39981 = (function (m){
return clojure.core.matrix.protocols.coerce_param(m,(function (){var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var G__37706 = dims;
switch (G__37706) {
case (0):
return m;

break;
case (1):
return m;

break;
case (2):
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,clojure.core.matrix.protocols.convert_to_nested_vectors(m));

break;
default:
return clojure.core.matrix.protocols.transpose_dims(m,cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims)));

}
})());
});
goog.object.set(G__37703_39979,G__37704_39980,G__37705_39981);
goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"null",true);

var G__37707_39991 = clojure.core.matrix.protocols.transpose_dims;
var G__37708_39992 = "null";
var G__37709_39993 = (function (m,ordering){
return m;
});
goog.object.set(G__37707_39991,G__37708_39992,G__37709_39993);

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"number",true);

var G__37710_39996 = clojure.core.matrix.protocols.transpose_dims;
var G__37711_39997 = "number";
var G__37712_39998 = (function (m,ordering){
return m;
});
goog.object.set(G__37710_39996,G__37711_39997,G__37712_39998);

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"object",true);

var G__37713_39999 = clojure.core.matrix.protocols.transpose_dims;
var G__37714_40000 = "object";
var G__37715_40001 = (function (m,ordering){
return clojure.core.matrix.protocols.transpose_dims(clojure.core.matrix.protocols.convert_to_nested_vectors(m),ordering);
});
goog.object.set(G__37713_39999,G__37714_40000,G__37715_40001);
goog.object.set(clojure.core.matrix.protocols.PTransposeInPlace,"object",true);

var G__37716_40004 = clojure.core.matrix.protocols.transpose_BANG_;
var G__37717_40005 = "object";
var G__37718_40006 = (function (m){
var n_40008 = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n_40008,cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("transpose! requires a quare matrix",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4666__auto___40011 = n_40008;
var i_40013 = (0);
while(true){
if((i_40013 < n__4666__auto___40011)){
var n__4666__auto___40014__$1 = i_40013;
var j_40017 = (0);
while(true){
if((j_40017 < n__4666__auto___40014__$1)){
var t_40018 = clojure.core.matrix.protocols.get_2d(m,i_40013,j_40017);
clojure.core.matrix.protocols.set_2d_BANG_(m,i_40013,j_40017,clojure.core.matrix.protocols.get_2d(m,j_40017,i_40013));

clojure.core.matrix.protocols.set_2d_BANG_(m,j_40017,i_40013,t_40018);

var G__40021 = (j_40017 + (1));
j_40017 = G__40021;
continue;
} else {
}
break;
}

var G__40022 = (i_40013 + (1));
i_40013 = G__40022;
continue;
} else {
}
break;
}

return m;
});
goog.object.set(G__37716_40004,G__37717_40005,G__37718_40006);
goog.object.set(clojure.core.matrix.protocols.PRotate,"null",true);

var G__37719_40024 = clojure.core.matrix.protocols.rotate;
var G__37720_40025 = "null";
var G__37721_40026 = (function (m,dim,places){
return null;
});
goog.object.set(G__37719_40024,G__37720_40025,G__37721_40026);

goog.object.set(clojure.core.matrix.protocols.PRotate,"number",true);

var G__37722_40029 = clojure.core.matrix.protocols.rotate;
var G__37723_40030 = "number";
var G__37724_40031 = (function (m,dim,places){
return m;
});
goog.object.set(G__37722_40029,G__37723_40030,G__37724_40031);

goog.object.set(clojure.core.matrix.protocols.PRotate,"object",true);

var G__37725_40032 = clojure.core.matrix.protocols.rotate;
var G__37726_40034 = "object";
var G__37727_40035 = (function (m,dim,places){
var dim__$1 = cljs.core.long$(dim);
var places__$1 = cljs.core.long$(places);
if((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) <= (0))){
return m;
} else {
if(((0) === dim__$1)){
var ss = clojure.core.matrix.protocols.get_major_slice_seq(m);
var c = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var sh = cljs.core.long$((((c > (0)))?cljs.core.long$(cljs.core.mod(places__$1,c)):(0)));
if((sh === (0))){
return m;
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take_last((c - sh),ss),cljs.core.take.cljs$core$IFn$_invoke$arity$2(sh,ss)));
}
} else {
return clojure.core.matrix.protocols.rotate(clojure.core.matrix.protocols.convert_to_nested_vectors(m),dim__$1,places__$1);

}
}
});
goog.object.set(G__37725_40032,G__37726_40034,G__37727_40035);
goog.object.set(clojure.core.matrix.protocols.PRotateAll,"null",true);

var G__37728_40044 = clojure.core.matrix.protocols.rotate_all;
var G__37729_40045 = "null";
var G__37730_40046 = (function (m,shifts){
return null;
});
goog.object.set(G__37728_40044,G__37729_40045,G__37730_40046);

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"number",true);

var G__37731_40048 = clojure.core.matrix.protocols.rotate_all;
var G__37732_40049 = "number";
var G__37733_40050 = (function (m,shifts){
return m;
});
goog.object.set(G__37731_40048,G__37732_40049,G__37733_40050);

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"object",true);

var G__37734_40052 = clojure.core.matrix.protocols.rotate_all;
var G__37735_40053 = "object";
var G__37736_40054 = (function (m,shifts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__37737){
var vec__37738 = p__37737;
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37738,(0),null);
var shift = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37738,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.rotate(m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
});
goog.object.set(G__37734_40052,G__37735_40053,G__37736_40054);
goog.object.set(clojure.core.matrix.protocols.PShift,"object",true);

var G__37741_40058 = clojure.core.matrix.protocols.shift;
var G__37742_40059 = "object";
var G__37743_40060 = (function (m,dim,shift){
var shift__$1 = cljs.core.long$(shift);
var z = clojure.core.matrix.protocols.generic_zero(m);
var c = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,dim));
var sh = cljs.core.vec(clojure.core.matrix.protocols.get_shape(m));
if((shift__$1 === (0))){
return m;
} else {
if((shift__$1 >= c)){
return clojure.core.matrix.protocols.broadcast_coerce(m,z);
} else {
if((shift__$1 <= (- c))){
return clojure.core.matrix.protocols.broadcast_coerce(m,z);
} else {
if((shift__$1 < (0))){
return clojure.core.matrix.protocols.join_along(clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.construct_matrix(m,z),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,(- shift__$1))),clojure.core.matrix.protocols.submatrix(m,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sh),(0))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,(c + shift__$1)))),dim);
} else {
if((shift__$1 > (0))){
return clojure.core.matrix.protocols.join_along(clojure.core.matrix.protocols.submatrix(m,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sh),(0))),dim,shift__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,(c - shift__$1)))),clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.construct_matrix(m,z),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,shift__$1)),dim);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Shouldn't be possible!!",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
});
goog.object.set(G__37741_40058,G__37742_40059,G__37743_40060);

var G__37744_40071 = clojure.core.matrix.protocols.shift_all;
var G__37745_40072 = "object";
var G__37746_40073 = (function (m,shifts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__37747){
var vec__37748 = p__37747;
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37748,(0),null);
var shift = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37748,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.shift(m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
});
goog.object.set(G__37744_40071,G__37745_40072,G__37746_40073);
goog.object.set(clojure.core.matrix.protocols.POrder,"null",true);

var G__37754_40079 = clojure.core.matrix.protocols.order;
var G__37755_40080 = "null";
var G__37756_40081 = (function() {
var G__40082 = null;
var G__40082__2 = (function (m,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40082__3 = (function (m,dim,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__40082 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__40082__2.call(this,m,dim);
case 3:
return G__40082__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40082.cljs$core$IFn$_invoke$arity$2 = G__40082__2;
G__40082.cljs$core$IFn$_invoke$arity$3 = G__40082__3;
return G__40082;
})()
;
goog.object.set(G__37754_40079,G__37755_40080,G__37756_40081);

goog.object.set(clojure.core.matrix.protocols.POrder,"number",true);

var G__37757_40086 = clojure.core.matrix.protocols.order;
var G__37758_40087 = "number";
var G__37759_40088 = (function() {
var G__40089 = null;
var G__40089__2 = (function (m,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40089__3 = (function (m,dim,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
G__40089 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__40089__2.call(this,m,dim);
case 3:
return G__40089__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40089.cljs$core$IFn$_invoke$arity$2 = G__40089__2;
G__40089.cljs$core$IFn$_invoke$arity$3 = G__40089__3;
return G__40089;
})()
;
goog.object.set(G__37757_40086,G__37758_40087,G__37759_40088);

goog.object.set(clojure.core.matrix.protocols.POrder,"object",true);

var G__37760_40094 = clojure.core.matrix.protocols.order;
var G__37761_40095 = "object";
var G__37762_40096 = (function() {
var G__40097 = null;
var G__40097__2 = (function (m,indices){
var mshape = cljs.core.vec(clojure.core.matrix.protocols.get_shape(m));
var subshape = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,(0),(1));
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37751_SHARP_){
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.get_major_slice(m,p1__37751_SHARP_),subshape);
}),indices);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__37752_SHARP_,p2__37753_SHARP_){
return clojure.core.matrix.protocols.join(p1__37752_SHARP_,p2__37753_SHARP_);
}),ss);
});
var G__40097__3 = (function (m,dim,indices){
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.convert_to_nested_vectors(m),dim,indices);
});
G__40097 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__40097__2.call(this,m,dim);
case 3:
return G__40097__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40097.cljs$core$IFn$_invoke$arity$2 = G__40097__2;
G__40097.cljs$core$IFn$_invoke$arity$3 = G__40097__3;
return G__40097;
})()
;
goog.object.set(G__37760_40094,G__37761_40095,G__37762_40096);
/**
 * Outputs a vector containing the rank of array elements, given a sorted sequence of [index value] pairs and a length
 */
clojure.core.matrix.impl.defaults.output_rank = (function clojure$core$matrix$impl$defaults$output_rank(pairs,n){
var dest = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n);
var i_40106 = cljs.core.long$((0));
var pairs_40107__$1 = cljs.core.seq(pairs);
while(true){
if((i_40106 < n)){
(dest[cljs.core.first(cljs.core.first(pairs_40107__$1))] = Long.valueOf(i_40106));

var G__40109 = (i_40106 + (1));
var G__40110 = cljs.core.next(pairs_40107__$1);
i_40106 = G__40109;
pairs_40107__$1 = G__40110;
continue;
} else {
}
break;
}

return cljs.core.vec(dest);
});
goog.object.set(clojure.core.matrix.protocols.PIndexRank,"object",true);

var G__37764_40114 = clojure.core.matrix.protocols.index_rank;
var G__37765_40115 = "object";
var G__37766_40116 = (function() {
var G__40117 = null;
var G__40117__1 = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var G__37767 = dims;
switch (G__37767) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$(clojure.core.matrix.protocols.element_count(m));
return clojure.core.matrix.impl.defaults.output_rank(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_count(m)),clojure.core.matrix.protocols.element_seq(m))),n);

break;
default:
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.index_rank,clojure.core.matrix.protocols.get_major_slice_seq(m));

}
});
var G__40117__2 = (function (m,comp){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var G__37768 = dims;
switch (G__37768) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$(clojure.core.matrix.protocols.element_count(m));
return clojure.core.matrix.impl.defaults.output_rank(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,comp,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_count(m)),clojure.core.matrix.protocols.element_seq(m))),n);

break;
default:
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37763_SHARP_){
return clojure.core.matrix.protocols.index_rank.cljs$core$IFn$_invoke$arity$2(p1__37763_SHARP_,comp);
}),clojure.core.matrix.protocols.get_major_slice_seq(m));

}
});
G__40117 = function(m,comp){
switch(arguments.length){
case 1:
return G__40117__1.call(this,m);
case 2:
return G__40117__2.call(this,m,comp);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40117.cljs$core$IFn$_invoke$arity$1 = G__40117__1;
G__40117.cljs$core$IFn$_invoke$arity$2 = G__40117__2;
return G__40117;
})()
;
goog.object.set(G__37764_40114,G__37765_40115,G__37766_40116);
goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"number",true);

var G__37770_40135 = clojure.core.matrix.protocols.inner_product;
var G__37771_40136 = "number";
var G__37772_40137 = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
});
goog.object.set(G__37770_40135,G__37771_40136,G__37772_40137);

var G__37773_40140 = clojure.core.matrix.protocols.outer_product;
var G__37774_40141 = "number";
var G__37775_40142 = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
});
goog.object.set(G__37773_40140,G__37774_40141,G__37775_40142);

goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"object",true);

var G__37776_40145 = clojure.core.matrix.protocols.inner_product;
var G__37777_40146 = "object";
var G__37778_40147 = (function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return clojure.core.matrix.protocols.pre_scale(a,m);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(a))){
return clojure.core.matrix.protocols.scale(m,a);
} else {
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))){
return clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_multiply(m,a));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.matrix_add,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (sl,x){
return clojure.core.matrix.protocols.scale(sl,x);
}),clojure.core.matrix.protocols.get_major_slice_seq(a),clojure.core.matrix.protocols.get_major_slice_seq(m)));
}
} else {
return clojure.core.matrix.protocols.construct_matrix(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37769_SHARP_){
return clojure.core.matrix.protocols.inner_product(p1__37769_SHARP_,a);
}),clojure.core.matrix.protocols.get_major_slice_seq(m)));

}
}
}
});
goog.object.set(G__37776_40145,G__37777_40146,G__37778_40147);

var G__37779_40155 = clojure.core.matrix.protocols.outer_product;
var G__37780_40156 = "object";
var G__37781_40157 = (function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return clojure.core.matrix.protocols.pre_scale(a,m);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors(m),(function (x){
return clojure.core.matrix.protocols.pre_scale(a,x);
}));

}
});
goog.object.set(G__37779_40155,G__37780_40156,G__37781_40157);
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"number",true);

var G__37782_40161 = clojure.core.matrix.protocols.element_multiply;
var G__37783_40162 = "number";
var G__37784_40163 = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
});
goog.object.set(G__37782_40161,G__37783_40162,G__37784_40163);

var G__37785_40167 = clojure.core.matrix.protocols.matrix_multiply;
var G__37786_40168 = "number";
var G__37787_40169 = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(a))){
return clojure.core.matrix.protocols.pre_scale(a,m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to multiply number with: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(a))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
goog.object.set(G__37785_40167,G__37786_40168,G__37787_40169);

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"object",true);

var G__37788_40179 = clojure.core.matrix.protocols.matrix_multiply;
var G__37789_40180 = "object";
var G__37790_40181 = (function (m,a){
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale(m,a);
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot(m,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
var vec__37791 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37791,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37791,(1),null);
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(clojure.core.matrix.protocols.reshape(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var mshape = clojure.core.matrix.protocols.get_shape(m);
var vec__37794 = mshape;
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37794,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37794,(1),null);
var acount = clojure.core.matrix.protocols.element_count(a);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(mcols,acount)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't multiply matrix of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mshape)," with a vector of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(acount)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(m,clojure.core.matrix.protocols.reshape(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_(m);
var vec__37797 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37797,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37797,(1),null);
var vec__37800 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37800,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37800,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix(new_m_type,mrows,acols);
var i_40194 = cljs.core.long$((0));
while(true){
if((i_40194 < mrows)){
var j_40196 = cljs.core.long$((0));
while(true){
if((j_40196 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_40194,j_40196,(0));

var G__40198 = (j_40196 + (1));
j_40196 = G__40198;
continue;
} else {
}
break;
}

var G__40200 = (i_40194 + (1));
i_40194 = G__40200;
continue;
} else {
}
break;
}


var i_40203 = cljs.core.long$((0));
while(true){
if((i_40203 < mrows)){
var j_40204 = cljs.core.long$((0));
while(true){
if((j_40204 < acols)){
var k_40205 = cljs.core.long$((0));
while(true){
if((k_40205 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_40203,j_40204,(clojure.core.matrix.protocols.get_2d(new_m,i_40203,j_40204) + (clojure.core.matrix.protocols.get_2d(m,i_40203,k_40205) * clojure.core.matrix.protocols.get_2d(a,k_40205,j_40204))));

var G__40209 = (k_40205 + (1));
k_40205 = G__40209;
continue;
} else {
}
break;
}

var G__40210 = (j_40204 + (1));
j_40204 = G__40210;
continue;
} else {
}
break;
}

var G__40211 = (i_40203 + (1));
i_40203 = G__40211;
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
goog.object.set(G__37788_40179,G__37789_40180,G__37790_40181);

var G__37803_40212 = clojure.core.matrix.protocols.element_multiply;
var G__37804_40213 = "object";
var G__37805_40215 = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale(m,a);
} else {
var vec__37806 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37806,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37806,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._STAR_,a__$1);
}
});
goog.object.set(G__37803_40212,G__37804_40213,G__37805_40215);
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"number",true);

var G__37809_40239 = clojure.core.matrix.protocols.element_multiply_BANG_;
var G__37810_40240 = "number";
var G__37811_40241 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37809_40239,G__37810_40240,G__37811_40241);

var G__37812_40243 = clojure.core.matrix.protocols.matrix_multiply_BANG_;
var G__37813_40244 = "number";
var G__37814_40245 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37812_40243,G__37813_40244,G__37814_40245);

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"object",true);

var G__37815_40250 = clojure.core.matrix.protocols.element_multiply_BANG_;
var G__37816_40251 = "object";
var G__37817_40252 = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_multiply(m,a));
});
goog.object.set(G__37815_40250,G__37816_40251,G__37817_40252);

var G__37818_40256 = clojure.core.matrix.protocols.matrix_multiply_BANG_;
var G__37819_40257 = "object";
var G__37820_40258 = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.matrix_multiply(m,a));
});
goog.object.set(G__37818_40256,G__37819_40257,G__37820_40258);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"number",true);

var G__37821_40261 = clojure.core.matrix.protocols.element_divide;
var G__37822_40262 = "number";
var G__37823_40263 = (function() {
var G__40264 = null;
var G__40264__1 = (function (m){
return ((1) / m);
});
var G__40264__2 = (function (m,a){
return clojure.core.matrix.protocols.pre_scale(clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$1(a),m);
});
G__40264 = function(m,a){
switch(arguments.length){
case 1:
return G__40264__1.call(this,m);
case 2:
return G__40264__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40264.cljs$core$IFn$_invoke$arity$1 = G__40264__1;
G__40264.cljs$core$IFn$_invoke$arity$2 = G__40264__2;
return G__40264;
})()
;
goog.object.set(G__37821_40261,G__37822_40262,G__37823_40263);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"object",true);

var G__37824_40268 = clojure.core.matrix.protocols.element_divide;
var G__37825_40269 = "object";
var G__37826_40270 = (function() {
var G__40273 = null;
var G__40273__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape(m))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__40273__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply(m,clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$1(a));
});
G__40273 = function(m,a){
switch(arguments.length){
case 1:
return G__40273__1.call(this,m);
case 2:
return G__40273__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40273.cljs$core$IFn$_invoke$arity$1 = G__40273__1;
G__40273.cljs$core$IFn$_invoke$arity$2 = G__40273__2;
return G__40273;
})()
;
goog.object.set(G__37824_40268,G__37825_40269,G__37826_40270);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"number",true);

var G__37827_40278 = clojure.core.matrix.protocols.element_divide_BANG_;
var G__37828_40279 = "number";
var G__37829_40280 = (function() {
var G__40281 = null;
var G__40281__1 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable divide on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40281__2 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable divide on a scalar numer",cljs.core.PersistentArrayMap.EMPTY);
});
G__40281 = function(m,a){
switch(arguments.length){
case 1:
return G__40281__1.call(this,m);
case 2:
return G__40281__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40281.cljs$core$IFn$_invoke$arity$1 = G__40281__1;
G__40281.cljs$core$IFn$_invoke$arity$2 = G__40281__2;
return G__40281;
})()
;
goog.object.set(G__37827_40278,G__37828_40279,G__37829_40280);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"object",true);

var G__37830_40288 = clojure.core.matrix.protocols.element_divide_BANG_;
var G__37831_40289 = "object";
var G__37832_40290 = (function() {
var G__40292 = null;
var G__40292__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,cljs.core._SLASH_);
});
var G__40292__2 = (function (m,a){
var vec__37833 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37833,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37833,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._SLASH_,a__$1);
});
G__40292 = function(m,a){
switch(arguments.length){
case 1:
return G__40292__1.call(this,m);
case 2:
return G__40292__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40292.cljs$core$IFn$_invoke$arity$1 = G__40292__1;
G__40292.cljs$core$IFn$_invoke$arity$2 = G__40292__2;
return G__40292;
})()
;
goog.object.set(G__37830_40288,G__37831_40289,G__37832_40290);
goog.object.set(clojure.core.matrix.protocols.PSummable,"number",true);

var G__37836_40299 = clojure.core.matrix.protocols.element_sum;
var G__37837_40300 = "number";
var G__37838_40301 = (function (a){
return a;
});
goog.object.set(G__37836_40299,G__37837_40300,G__37838_40301);

goog.object.set(clojure.core.matrix.protocols.PSummable,"object",true);

var G__37839_40302 = clojure.core.matrix.protocols.element_sum;
var G__37840_40303 = "object";
var G__37841_40304 = (function (a){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_(a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
});
goog.object.set(G__37839_40302,G__37840_40303,G__37841_40304);
goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"number",true);

var G__37843_40309 = clojure.core.matrix.protocols.element_min;
var G__37844_40310 = "number";
var G__37845_40311 = (function (m){
return m;
});
goog.object.set(G__37843_40309,G__37844_40310,G__37845_40311);

var G__37846_40312 = clojure.core.matrix.protocols.element_max;
var G__37847_40313 = "number";
var G__37848_40314 = (function (m){
return m;
});
goog.object.set(G__37846_40312,G__37847_40313,G__37848_40314);

var G__37849_40317 = clojure.core.matrix.protocols.element_clamp;
var G__37850_40318 = "number";
var G__37851_40319 = (function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((m < a)){
return a;
} else {
if((m > b)){
return b;
} else {
return m;
}
}
}
});
goog.object.set(G__37849_40317,G__37850_40318,G__37851_40319);

goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"object",true);

var G__37852_40322 = clojure.core.matrix.protocols.element_min;
var G__37853_40323 = "object";
var G__37854_40324 = (function (m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(m,(function (best,v){
if(((cljs.core.not(best)) || ((v < best)))){
return v;
} else {
return best;
}
}),null);
});
goog.object.set(G__37852_40322,G__37853_40323,G__37854_40324);

var G__37855_40328 = clojure.core.matrix.protocols.element_max;
var G__37856_40329 = "object";
var G__37857_40330 = (function (m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(m,(function (best,v){
if(((cljs.core.not(best)) || ((v > best)))){
return v;
} else {
return best;
}
}),null);
});
goog.object.set(G__37855_40328,G__37856_40329,G__37857_40330);

var G__37858_40331 = clojure.core.matrix.protocols.element_clamp;
var G__37859_40332 = "object";
var G__37860_40333 = (function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__37842_SHARP_){
if((p1__37842_SHARP_ < a)){
return a;
} else {
if((p1__37842_SHARP_ > b)){
return b;
} else {
return p1__37842_SHARP_;
}
}
}));
}
});
goog.object.set(G__37858_40331,G__37859_40332,G__37860_40333);
goog.object.set(clojure.core.matrix.protocols.PCompare,"number",true);

var G__37888_40335 = clojure.core.matrix.protocols.element_compare;
var G__37889_40336 = "number";
var G__37890_40337 = (function (a,b){
if(typeof b === 'number'){
return cljs.core.long$(clojure.core.matrix.impl.mathsops.signum((a - b)));
} else {
return clojure.core.matrix.protocols.signum(clojure.core.matrix.protocols.matrix_sub(a,b));
}
});
goog.object.set(G__37888_40335,G__37889_40336,G__37890_40337);

var G__37891_40341 = clojure.core.matrix.protocols.element_if;
var G__37892_40342 = "number";
var G__37893_40343 = (function (m,a,b){
var vec__37894 = clojure.core.matrix.protocols.broadcast_same_shape(a,b);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37894,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37894,(1),null);
if((m > (0))){
return a__$1;
} else {
return b__$1;
}
});
goog.object.set(G__37891_40341,G__37892_40342,G__37893_40343);

var G__37897_40345 = clojure.core.matrix.protocols.element_lt;
var G__37898_40346 = "number";
var G__37899_40347 = (function (m,a){
if(typeof a === 'number'){
if((m < a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_gt(a,m);
}
});
goog.object.set(G__37897_40345,G__37898_40346,G__37899_40347);

var G__37900_40348 = clojure.core.matrix.protocols.element_le;
var G__37901_40349 = "number";
var G__37902_40350 = (function (m,a){
if(typeof a === 'number'){
if((m <= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ge(a,m);
}
});
goog.object.set(G__37900_40348,G__37901_40349,G__37902_40350);

var G__37903_40352 = clojure.core.matrix.protocols.element_gt;
var G__37904_40353 = "number";
var G__37905_40354 = (function (m,a){
if(typeof a === 'number'){
if((m > a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_lt(a,m);
}
});
goog.object.set(G__37903_40352,G__37904_40353,G__37905_40354);

var G__37906_40355 = clojure.core.matrix.protocols.element_ge;
var G__37907_40356 = "number";
var G__37908_40357 = (function (m,a){
if(typeof a === 'number'){
if((m >= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_le(a,m);
}
});
goog.object.set(G__37906_40355,G__37907_40356,G__37908_40357);

var G__37909_40359 = clojure.core.matrix.protocols.element_ne;
var G__37910_40360 = "number";
var G__37911_40361 = (function (m,a){
if(typeof a === 'number'){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ne(a,m);
}
});
goog.object.set(G__37909_40359,G__37910_40360,G__37911_40361);

var G__37912_40363 = clojure.core.matrix.protocols.element_eq;
var G__37913_40364 = "number";
var G__37914_40365 = (function (m,a){
if(typeof a === 'number'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_eq(a,m);
}
});
goog.object.set(G__37912_40363,G__37913_40364,G__37914_40365);

goog.object.set(clojure.core.matrix.protocols.PCompare,"object",true);

var G__37915_40366 = clojure.core.matrix.protocols.element_compare;
var G__37916_40367 = "object";
var G__37917_40368 = (function (a,b){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.matrix_sub(a,b),(function (p1__37861_SHARP_){
return cljs.core.long$(clojure.core.matrix.impl.mathsops.signum(p1__37861_SHARP_));
}));
});
goog.object.set(G__37915_40366,G__37916_40367,G__37917_40368);

var G__37918_40372 = clojure.core.matrix.protocols.element_if;
var G__37919_40373 = "object";
var G__37920_40374 = (function (m,a,b){
if(((typeof a === 'number') && (typeof b === 'number'))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__37862_SHARP_){
if((p1__37862_SHARP_ > (0))){
return a;
} else {
return b;
}
}));
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,(function (p1__37863_SHARP_,p2__37864_SHARP_){
if((p1__37863_SHARP_ > (0))){
return a;
} else {
return p2__37864_SHARP_;
}
}),b);
} else {
if(typeof b === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,(function (p1__37865_SHARP_,p2__37866_SHARP_){
if((p1__37865_SHARP_ > (0))){
return p2__37866_SHARP_;
} else {
return b;
}
}),a);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(m,(function (p1__37867_SHARP_,p2__37868_SHARP_,p3__37869_SHARP_){
if((p1__37867_SHARP_ > (0))){
return p2__37868_SHARP_;
} else {
return p3__37869_SHARP_;
}
}),a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));

}
}
}
});
goog.object.set(G__37918_40372,G__37919_40373,G__37920_40374);

var G__37921_40379 = clojure.core.matrix.protocols.element_lt;
var G__37922_40380 = "object";
var G__37923_40381 = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__37870_SHARP_){
if((p1__37870_SHARP_ < a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,(function (p1__37871_SHARP_,p2__37872_SHARP_){
if((p1__37871_SHARP_ < p2__37872_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
});
goog.object.set(G__37921_40379,G__37922_40380,G__37923_40381);

var G__37924_40384 = clojure.core.matrix.protocols.element_le;
var G__37925_40385 = "object";
var G__37926_40386 = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__37873_SHARP_){
if((p1__37873_SHARP_ <= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,(function (p1__37874_SHARP_,p2__37875_SHARP_){
if((p1__37874_SHARP_ <= p2__37875_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
});
goog.object.set(G__37924_40384,G__37925_40385,G__37926_40386);

var G__37927_40388 = clojure.core.matrix.protocols.element_gt;
var G__37928_40389 = "object";
var G__37929_40390 = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__37876_SHARP_){
if((p1__37876_SHARP_ > a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,(function (p1__37877_SHARP_,p2__37878_SHARP_){
if((p1__37877_SHARP_ > p2__37878_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
});
goog.object.set(G__37927_40388,G__37928_40389,G__37929_40390);

var G__37930_40392 = clojure.core.matrix.protocols.element_ge;
var G__37931_40393 = "object";
var G__37932_40394 = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__37879_SHARP_){
if((p1__37879_SHARP_ >= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,(function (p1__37880_SHARP_,p2__37881_SHARP_){
if((p1__37880_SHARP_ >= p2__37881_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
});
goog.object.set(G__37930_40392,G__37931_40393,G__37932_40394);

var G__37933_40396 = clojure.core.matrix.protocols.element_ne;
var G__37934_40397 = "object";
var G__37935_40398 = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__37882_SHARP_){
if((!((p1__37882_SHARP_ === a)))){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,(function (p1__37883_SHARP_,p2__37884_SHARP_){
if((!((p1__37883_SHARP_ === p2__37884_SHARP_)))){
return (1);
} else {
return (0);
}
}),a);
}
});
goog.object.set(G__37933_40396,G__37934_40397,G__37935_40398);

var G__37936_40400 = clojure.core.matrix.protocols.element_eq;
var G__37937_40401 = "object";
var G__37938_40402 = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__37885_SHARP_){
if((p1__37885_SHARP_ === a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,(function (p1__37886_SHARP_,p2__37887_SHARP_){
if((p1__37886_SHARP_ === p2__37887_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
});
goog.object.set(G__37936_40400,G__37937_40401,G__37938_40402);
goog.object.set(clojure.core.matrix.protocols.PAddProduct,"number",true);

var G__37939_40404 = clojure.core.matrix.protocols.add_product;
var G__37940_40405 = "number";
var G__37941_40406 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.element_multiply(a,b),m);
});
goog.object.set(G__37939_40404,G__37940_40405,G__37941_40406);

goog.object.set(clojure.core.matrix.protocols.PAddProduct,"object",true);

var G__37942_40408 = clojure.core.matrix.protocols.add_product;
var G__37943_40409 = "object";
var G__37944_40410 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add(m,clojure.core.matrix.protocols.element_multiply(a,b));
});
goog.object.set(G__37942_40408,G__37943_40409,G__37944_40410);
goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"number",true);

var G__37945_40412 = clojure.core.matrix.protocols.add_product_BANG_;
var G__37946_40413 = "number";
var G__37947_40414 = (function (m,a,b){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37945_40412,G__37946_40413,G__37947_40414);

goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"object",true);

var G__37948_40415 = clojure.core.matrix.protocols.add_product_BANG_;
var G__37949_40416 = "object";
var G__37950_40417 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.element_multiply(a,b));
});
goog.object.set(G__37948_40415,G__37949_40416,G__37950_40417);
goog.object.set(clojure.core.matrix.protocols.PAddScaled,"number",true);

var G__37951_40418 = clojure.core.matrix.protocols.add_scaled;
var G__37952_40419 = "number";
var G__37953_40420 = (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.scale(a,factor),m);
});
goog.object.set(G__37951_40418,G__37952_40419,G__37953_40420);

goog.object.set(clojure.core.matrix.protocols.PAddScaled,"object",true);

var G__37954_40426 = clojure.core.matrix.protocols.add_scaled;
var G__37955_40427 = "object";
var G__37956_40428 = (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add(m,clojure.core.matrix.protocols.scale(a,factor));
});
goog.object.set(G__37954_40426,G__37955_40427,G__37956_40428);
goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"number",true);

var G__37957_40429 = clojure.core.matrix.protocols.add_scaled_BANG_;
var G__37958_40430 = "number";
var G__37959_40431 = (function (m,a,factor){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37957_40429,G__37958_40430,G__37959_40431);

goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"object",true);

var G__37960_40434 = clojure.core.matrix.protocols.add_scaled_BANG_;
var G__37961_40435 = "object";
var G__37962_40436 = (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.scale(a,factor));
});
goog.object.set(G__37960_40434,G__37961_40435,G__37962_40436);
goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"number",true);

var G__37963_40438 = clojure.core.matrix.protocols.add_scaled_product;
var G__37964_40439 = "number";
var G__37965_40440 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.scale(clojure.core.matrix.protocols.element_multiply(a,b),factor),m);
});
goog.object.set(G__37963_40438,G__37964_40439,G__37965_40440);

goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"object",true);

var G__37966_40441 = clojure.core.matrix.protocols.add_scaled_product;
var G__37967_40442 = "object";
var G__37968_40443 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add(m,clojure.core.matrix.protocols.scale(clojure.core.matrix.protocols.element_multiply(a,b),factor));
});
goog.object.set(G__37966_40441,G__37967_40442,G__37968_40443);
goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"number",true);

var G__37969_40445 = clojure.core.matrix.protocols.add_scaled_product_BANG_;
var G__37970_40446 = "number";
var G__37971_40447 = (function (m,a,b,factor){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__37969_40445,G__37970_40446,G__37971_40447);

goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"object",true);

var G__37972_40449 = clojure.core.matrix.protocols.add_scaled_product_BANG_;
var G__37973_40450 = "object";
var G__37974_40451 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.scale(clojure.core.matrix.protocols.element_multiply(a,b),factor));
});
goog.object.set(G__37972_40449,G__37973_40450,G__37974_40451);
goog.object.set(clojure.core.matrix.protocols.PScaleAdd,"object",true);

var G__37975_40452 = clojure.core.matrix.protocols.scale_add_BANG_;
var G__37976_40453 = "object";
var G__37977_40454 = (function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.element_multiply_BANG_(m1,a);

if(((typeof b === 'number') && ((b === (0))))){
} else {
clojure.core.matrix.protocols.add_product_BANG_(m1,m2,b);
}

if(((typeof constant === 'number') && ((constant === (0))))){
} else {
clojure.core.matrix.protocols.matrix_add_BANG_(m1,constant);
}

return m1;
});
goog.object.set(G__37975_40452,G__37976_40453,G__37977_40454);
goog.object.set(clojure.core.matrix.protocols.PScaleAdd2,"object",true);

var G__37978_40457 = clojure.core.matrix.protocols.scale_add;
var G__37979_40458 = "object";
var G__37980_40459 = (function (m1,a,m2,b,constant){
var r = clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.scale(m1,a),clojure.core.matrix.protocols.scale(m2,b));
if((0.0 === constant)){
return r;
} else {
return clojure.core.matrix.protocols.matrix_add(r,constant);
}
});
goog.object.set(G__37978_40457,G__37979_40458,G__37980_40459);
goog.object.set(clojure.core.matrix.protocols.PLerp,"object",true);

var G__37981_40461 = clojure.core.matrix.protocols.lerp;
var G__37982_40462 = "object";
var G__37983_40463 = (function (a,b,factor){
return clojure.core.matrix.protocols.scale_add(a,(1.0 - factor),b,factor,0.0);
});
goog.object.set(G__37981_40461,G__37982_40462,G__37983_40463);

var G__37984_40466 = clojure.core.matrix.protocols.lerp_BANG_;
var G__37985_40467 = "object";
var G__37986_40468 = (function (a,b,factor){
return clojure.core.matrix.protocols.scale_add_BANG_(a,(1.0 - factor),b,factor,0.0);
});
goog.object.set(G__37984_40466,G__37985_40467,G__37986_40468);
goog.object.set(clojure.core.matrix.protocols.PAddInnerProductMutable,"object",true);

var G__37987_40471 = clojure.core.matrix.protocols.add_inner_product_BANG_;
var G__37988_40472 = "object";
var G__37989_40473 = (function() {
var G__40474 = null;
var G__40474__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b));
});
var G__40474__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b),factor);
});
G__40474 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__40474__3.call(this,m,a,b);
case 4:
return G__40474__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40474.cljs$core$IFn$_invoke$arity$3 = G__40474__3;
G__40474.cljs$core$IFn$_invoke$arity$4 = G__40474__4;
return G__40474;
})()
;
goog.object.set(G__37987_40471,G__37988_40472,G__37989_40473);
goog.object.set(clojure.core.matrix.protocols.PAddOuterProductMutable,"object",true);

var G__37990_40477 = clojure.core.matrix.protocols.add_outer_product_BANG_;
var G__37991_40478 = "object";
var G__37992_40479 = (function() {
var G__40480 = null;
var G__40480__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.outer_product(a,b));
});
var G__40480__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_(m,clojure.core.matrix.protocols.outer_product(a,b),factor);
});
G__40480 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__40480__3.call(this,m,a,b);
case 4:
return G__40480__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40480.cljs$core$IFn$_invoke$arity$3 = G__40480__3;
G__40480.cljs$core$IFn$_invoke$arity$4 = G__40480__4;
return G__40480;
})()
;
goog.object.set(G__37990_40477,G__37991_40478,G__37992_40479);
goog.object.set(clojure.core.matrix.protocols.PSetInnerProductMutable,"object",true);

var G__37993_40482 = clojure.core.matrix.protocols.set_inner_product_BANG_;
var G__37994_40483 = "object";
var G__37995_40484 = (function() {
var G__40486 = null;
var G__40486__3 = (function (m,a,b){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b));
});
var G__40486__4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b));

return clojure.core.matrix.protocols.scale_BANG_(m,factor);
});
G__40486 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__40486__3.call(this,m,a,b);
case 4:
return G__40486__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40486.cljs$core$IFn$_invoke$arity$3 = G__40486__3;
G__40486.cljs$core$IFn$_invoke$arity$4 = G__40486__4;
return G__40486;
})()
;
goog.object.set(G__37993_40482,G__37994_40483,G__37995_40484);
goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"null",true);

var G__37996_40491 = clojure.core.matrix.protocols.element_type;
var G__37997_40492 = "null";
var G__37998_40493 = (function (a){
return Object;
});
goog.object.set(G__37996_40491,G__37997_40492,G__37998_40493);

goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"object",true);

var G__37999_40495 = clojure.core.matrix.protocols.element_type;
var G__38000_40496 = "object";
var G__38001_40497 = (function (a){
if((Array === a.constructor)){
return cljs.core.type(a).getComponentType();
} else {
return Object;
}
});
goog.object.set(G__37999_40495,G__38000_40496,G__38001_40497);
goog.object.set(clojure.core.matrix.protocols.PGenericValues,"object",true);

var G__38002_40498 = clojure.core.matrix.protocols.generic_zero;
var G__38003_40499 = "object";
var G__38004_40500 = (function (m){
return (0);
});
goog.object.set(G__38002_40498,G__38003_40499,G__38004_40500);

var G__38005_40502 = clojure.core.matrix.protocols.generic_one;
var G__38006_40503 = "object";
var G__38007_40504 = (function (m){
return (1);
});
goog.object.set(G__38005_40502,G__38006_40503,G__38007_40504);

var G__38008_40505 = clojure.core.matrix.protocols.generic_value;
var G__38009_40506 = "object";
var G__38010_40507 = (function (m){
return (0);
});
goog.object.set(G__38008_40505,G__38009_40506,G__38010_40507);
(cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_(m__$1)){
return clojure.core.matrix.protocols.matrix_multiply(m__$1,a);
} else {
return (m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(a) : m__$1.call(null,a));
}
}));

(cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_(m__$1)){
return clojure.core.matrix.protocols.assign_BANG_(a,clojure.core.matrix.protocols.matrix_multiply(m__$1,a));
} else {
return clojure.core.matrix.protocols.assign_BANG_(a,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(a) : m__$1.call(null,a)));
}
}));

goog.object.set(clojure.core.matrix.protocols.PVectorTransform,"object",true);

var G__38011_40510 = clojure.core.matrix.protocols.vector_transform;
var G__38012_40511 = "object";
var G__38013_40512 = (function (m,a){
if(((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
return clojure.core.matrix.protocols.matrix_multiply(m,a);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to transform using: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
});
goog.object.set(G__38011_40510,G__38012_40511,G__38013_40512);

var G__38014_40514 = clojure.core.matrix.protocols.vector_transform_BANG_;
var G__38015_40515 = "object";
var G__38016_40516 = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(a,clojure.core.matrix.protocols.vector_transform(m,a));
});
goog.object.set(G__38014_40514,G__38015_40515,G__38016_40516);
goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"number",true);

var G__38018_40518 = clojure.core.matrix.protocols.scale;
var G__38019_40519 = "number";
var G__38020_40520 = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
});
goog.object.set(G__38018_40518,G__38019_40519,G__38020_40520);

var G__38021_40522 = clojure.core.matrix.protocols.pre_scale;
var G__38022_40523 = "number";
var G__38023_40524 = (function (m,a){
if(typeof a === 'number'){
return (a * m);
} else {
return clojure.core.matrix.protocols.scale(a,m);
}
});
goog.object.set(G__38021_40522,G__38022_40523,G__38023_40524);

goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"object",true);

var G__38024_40527 = clojure.core.matrix.protocols.scale;
var G__38025_40528 = "object";
var G__38026_40529 = (function (m,a){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__38017_SHARP_){
return (p1__38017_SHARP_ * a);
}));
});
goog.object.set(G__38024_40527,G__38025_40528,G__38026_40529);

var G__38027_40531 = clojure.core.matrix.protocols.pre_scale;
var G__38028_40532 = "object";
var G__38029_40533 = (function (m,a){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,a));
});
goog.object.set(G__38027_40531,G__38028_40532,G__38029_40533);
goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"number",true);

var G__38031_40536 = clojure.core.matrix.protocols.scale_BANG_;
var G__38032_40537 = "number";
var G__38033_40538 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38031_40536,G__38032_40537,G__38033_40538);

var G__38034_40540 = clojure.core.matrix.protocols.pre_scale_BANG_;
var G__38035_40541 = "number";
var G__38036_40542 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't pre-scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38034_40540,G__38035_40541,G__38036_40542);

goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"object",true);

var G__38037_40543 = clojure.core.matrix.protocols.scale_BANG_;
var G__38038_40544 = "object";
var G__38039_40545 = (function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__38030_SHARP_){
return (p1__38030_SHARP_ * a);
}));

return m;
});
goog.object.set(G__38037_40543,G__38038_40544,G__38039_40545);

var G__38040_40547 = clojure.core.matrix.protocols.pre_scale_BANG_;
var G__38041_40548 = "object";
var G__38042_40549 = (function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,a));

return m;
});
goog.object.set(G__38040_40547,G__38041_40548,G__38042_40549);
goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"number",true);

var G__38043_40551 = clojure.core.matrix.protocols.matrix_add;
var G__38044_40552 = "number";
var G__38045_40553 = (function (m,a){
if(typeof a === 'number'){
return (m + a);
} else {
return clojure.core.matrix.protocols.matrix_add(a,m);
}
});
goog.object.set(G__38043_40551,G__38044_40552,G__38045_40553);

var G__38046_40556 = clojure.core.matrix.protocols.matrix_sub;
var G__38047_40557 = "number";
var G__38048_40558 = (function (m,a){
if(typeof a === 'number'){
return (m - a);
} else {
return clojure.core.matrix.protocols.negate(clojure.core.matrix.protocols.matrix_sub(a,m));
}
});
goog.object.set(G__38046_40556,G__38047_40557,G__38048_40558);

goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"object",true);

var G__38049_40560 = clojure.core.matrix.protocols.matrix_add;
var G__38050_40561 = "object";
var G__38051_40562 = (function (m,a){
var vec__38052 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38052,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._PLUS_,a__$1);
});
goog.object.set(G__38049_40560,G__38050_40561,G__38051_40562);

var G__38055_40564 = clojure.core.matrix.protocols.matrix_sub;
var G__38056_40565 = "object";
var G__38057_40566 = (function (m,a){
var vec__38058 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._,a__$1);
});
goog.object.set(G__38055_40564,G__38056_40565,G__38057_40566);
goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"number",true);

var G__38061_40569 = clojure.core.matrix.protocols.matrix_add_BANG_;
var G__38062_40570 = "number";
var G__38063_40571 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable add! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38061_40569,G__38062_40570,G__38063_40571);

var G__38064_40573 = clojure.core.matrix.protocols.matrix_sub_BANG_;
var G__38065_40574 = "number";
var G__38066_40575 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable sub! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38064_40573,G__38065_40574,G__38066_40575);

goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"object",true);

var G__38067_40576 = clojure.core.matrix.protocols.matrix_add_BANG_;
var G__38068_40577 = "object";
var G__38069_40578 = (function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core._PLUS_,a);
});
goog.object.set(G__38067_40576,G__38068_40577,G__38069_40578);

var G__38070_40580 = clojure.core.matrix.protocols.matrix_sub_BANG_;
var G__38071_40581 = "object";
var G__38072_40582 = (function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core._,a);
});
goog.object.set(G__38070_40580,G__38071_40581,G__38072_40582);
goog.object.set(clojure.core.matrix.protocols.PNegation,"null",true);

var G__38073_40584 = clojure.core.matrix.protocols.negate;
var G__38074_40585 = "null";
var G__38075_40586 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't negate nil!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38073_40584,G__38074_40585,G__38075_40586);

goog.object.set(clojure.core.matrix.protocols.PNegation,"number",true);

var G__38076_40588 = clojure.core.matrix.protocols.negate;
var G__38077_40589 = "number";
var G__38078_40590 = (function (m){
return (- m);
});
goog.object.set(G__38076_40588,G__38077_40589,G__38078_40590);

goog.object.set(clojure.core.matrix.protocols.PNegation,"object",true);

var G__38079_40591 = clojure.core.matrix.protocols.negate;
var G__38080_40592 = "object";
var G__38081_40593 = (function (m){
return clojure.core.matrix.protocols.scale(m,-1.0);
});
goog.object.set(G__38079_40591,G__38080_40592,G__38081_40593);
goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"null",true);

var G__38082_40595 = clojure.core.matrix.protocols.matrix_equals;
var G__38083_40596 = "null";
var G__38084_40597 = (function (a,b){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38082_40595,G__38083_40596,G__38084_40597);

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"number",true);

var G__38085_40599 = clojure.core.matrix.protocols.matrix_equals;
var G__38086_40600 = "number";
var G__38087_40601 = (function (a,b){
if(typeof b === 'number'){
return (a === b);
} else {
if(((0) === clojure.core.matrix.protocols.dimensionality(b))){
return (a === (function (){var x__25978__auto__ = b;
if(typeof x__25978__auto__ === 'number'){
return x__25978__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__25978__auto__);

}
})());
} else {
return false;

}
}
});
goog.object.set(G__38085_40599,G__38086_40600,G__38087_40601);

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"object",true);

var G__38088_40603 = clojure.core.matrix.protocols.matrix_equals;
var G__38089_40604 = "object";
var G__38090_40605 = (function (a,b){
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
goog.object.set(G__38088_40603,G__38089_40604,G__38090_40605);
goog.object.set(clojure.core.matrix.protocols.PValueEquality,"null",true);

var G__38091_40610 = clojure.core.matrix.protocols.value_equals;
var G__38092_40611 = "null";
var G__38093_40612 = (function (a,b){
return (((b == null)) || (((((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))) && ((clojure.core.matrix.protocols.get_0d(b) == null)))));
});
goog.object.set(G__38091_40610,G__38092_40611,G__38093_40612);

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"number",true);

var G__38094_40615 = clojure.core.matrix.protocols.value_equals;
var G__38095_40616 = "number";
var G__38096_40617 = (function (a,b){
return ((((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))) && ((a === clojure.core.matrix.protocols.get_0d(b))));
});
goog.object.set(G__38094_40615,G__38095_40616,G__38096_40617);

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"object",true);

var G__38097_40620 = clojure.core.matrix.protocols.value_equals;
var G__38098_40621 = "object";
var G__38099_40622 = (function (a,b){
var and__4174__auto__ = clojure.core.matrix.protocols.same_shape_QMARK_(a,b);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
} else {
return and__4174__auto__;
}
});
goog.object.set(G__38097_40620,G__38098_40621,G__38099_40622);
goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"null",true);

var G__38101_40624 = clojure.core.matrix.protocols.matrix_equals_epsilon;
var G__38102_40625 = "null";
var G__38103_40626 = (function (a,b,eps){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38101_40624,G__38102_40625,G__38103_40626);

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"number",true);

var G__38104_40629 = clojure.core.matrix.protocols.matrix_equals_epsilon;
var G__38105_40630 = "number";
var G__38106_40631 = (function (a,b,eps){
if(typeof b === 'number'){
return (Math.abs((a - b)) <= eps);
} else {
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))){
return (Math.abs((a - clojure.core.matrix.protocols.get_0d(b))) <= eps);
} else {
return false;

}
}
});
goog.object.set(G__38104_40629,G__38105_40630,G__38106_40631);

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"object",true);

var G__38107_40635 = clojure.core.matrix.protocols.matrix_equals_epsilon;
var G__38108_40636 = "object";
var G__38109_40637 = (function (a,b,eps){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_(a,b))){
var eps__$1 = eps;
return cljs.core.every_QMARK_((function (p1__38100_SHARP_){
return ((function (){var G__38110 = p1__38100_SHARP_;
return Math.abs(G__38110);
})() <= eps__$1);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
} else {
return false;

}
}
});
goog.object.set(G__38107_40635,G__38108_40636,G__38109_40637);
goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"number",true);

var G__38111_40640 = clojure.core.matrix.protocols.to_double_array;
var G__38112_40641 = "number";
var G__38113_40642 = (function (m){
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = m);

return arr;
});
goog.object.set(G__38111_40640,G__38112_40641,G__38113_40642);

var G__38114_40643 = clojure.core.matrix.protocols.as_double_array;
var G__38115_40644 = "number";
var G__38116_40645 = (function (m){
return null;
});
goog.object.set(G__38114_40643,G__38115_40644,G__38116_40645);

goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"object",true);

var G__38117_40648 = clojure.core.matrix.protocols.to_double_array;
var G__38118_40649 = "object";
var G__38119_40650 = (function (m){
return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
});
goog.object.set(G__38117_40648,G__38118_40649,G__38119_40650);

var G__38120_40651 = clojure.core.matrix.protocols.as_double_array;
var G__38121_40652 = "object";
var G__38122_40653 = (function (m){
return null;
});
goog.object.set(G__38120_40651,G__38121_40652,G__38122_40653);
goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"null",true);

var G__38123_40655 = clojure.core.matrix.protocols.to_object_array;
var G__38124_40656 = "null";
var G__38125_40657 = (function (m){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
return arr;
});
goog.object.set(G__38123_40655,G__38124_40656,G__38125_40657);

var G__38126_40659 = clojure.core.matrix.protocols.as_object_array;
var G__38127_40660 = "null";
var G__38128_40661 = (function (m){
return null;
});
goog.object.set(G__38126_40659,G__38127_40660,G__38128_40661);

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"number",true);

var G__38129_40662 = clojure.core.matrix.protocols.to_object_array;
var G__38130_40663 = "number";
var G__38131_40664 = (function (m){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = m);

return arr;
});
goog.object.set(G__38129_40662,G__38130_40663,G__38131_40664);

var G__38132_40667 = clojure.core.matrix.protocols.as_object_array;
var G__38133_40668 = "number";
var G__38134_40669 = (function (m){
return null;
});
goog.object.set(G__38132_40667,G__38133_40668,G__38134_40669);

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"object",true);

var G__38135_40670 = clojure.core.matrix.protocols.to_object_array;
var G__38136_40671 = "object";
var G__38137_40672 = (function (m){
return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
});
goog.object.set(G__38135_40670,G__38136_40671,G__38137_40672);

var G__38138_40674 = clojure.core.matrix.protocols.as_object_array;
var G__38139_40675 = "object";
var G__38140_40676 = (function (m){
return null;
});
goog.object.set(G__38138_40674,G__38139_40675,G__38140_40676);
goog.object.set(clojure.core.matrix.protocols.PRowOperations,"object",true);

var G__38141_40679 = clojure.core.matrix.protocols.swap_rows;
var G__38142_40680 = "object";
var G__38143_40681 = (function (m,i,j){
return clojure.core.matrix.protocols.swap_rows(clojure.core.matrix.protocols.convert_to_nested_vectors(m),i,j);
});
goog.object.set(G__38141_40679,G__38142_40680,G__38143_40681);

var G__38144_40684 = clojure.core.matrix.protocols.multiply_row;
var G__38145_40685 = "object";
var G__38146_40686 = (function (m,i,k){
return clojure.core.matrix.protocols.multiply_row(clojure.core.matrix.protocols.convert_to_nested_vectors(m),i,k);
});
goog.object.set(G__38144_40684,G__38145_40685,G__38146_40686);

var G__38147_40687 = clojure.core.matrix.protocols.add_row;
var G__38148_40688 = "object";
var G__38149_40689 = (function (m,i,j,k){
return clojure.core.matrix.protocols.add_row(clojure.core.matrix.protocols.convert_to_nested_vectors(m),i,j,k);
});
goog.object.set(G__38147_40687,G__38148_40688,G__38149_40689);
goog.object.set(clojure.core.matrix.protocols.PRowSetting,"object",true);

var G__38150_40691 = clojure.core.matrix.protocols.set_row;
var G__38151_40692 = "object";
var G__38152_40693 = (function (m,i,row){
var svec = cljs.core.vec(clojure.core.matrix.protocols.get_major_slice_seq(m));
var row__$1 = clojure.core.matrix.protocols.broadcast_like((svec.cljs$core$IFn$_invoke$arity$1 ? svec.cljs$core$IFn$_invoke$arity$1((0)) : svec.call(null,(0))),row);
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(svec,i,row__$1));
});
goog.object.set(G__38150_40691,G__38151_40692,G__38152_40693);

var G__38153_40695 = clojure.core.matrix.protocols.set_row_BANG_;
var G__38154_40696 = "object";
var G__38155_40697 = (function (m,i,row){
var sl = clojure.core.matrix.protocols.get_major_slice_view(m,i);
var row__$1 = clojure.core.matrix.protocols.broadcast_like(sl,row);
clojure.core.matrix.protocols.assign_BANG_(sl,row__$1);

return m;
});
goog.object.set(G__38153_40695,G__38154_40696,G__38155_40697);
goog.object.set(clojure.core.matrix.protocols.PColumnSetting,"object",true);

var G__38156_40699 = clojure.core.matrix.protocols.set_column;
var G__38157_40700 = "object";
var G__38158_40701 = (function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column(m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like(scol,column);
var indices = cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(column__$1,(0)));
var new_m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,idx){
return clojure.core.matrix.protocols.set_2d(acc,idx,i,clojure.core.matrix.protocols.get_1d(column__$1,idx));
}),m,indices);
return clojure.core.matrix.protocols.coerce_param(m,new_m);
});
goog.object.set(G__38156_40699,G__38157_40700,G__38158_40701);

var G__38159_40704 = clojure.core.matrix.protocols.set_column_BANG_;
var G__38160_40705 = "object";
var G__38161_40706 = (function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column(m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like(scol,column);
var n__4666__auto__ = clojure.core.matrix.protocols.dimension_count(column__$1,(0));
var j = (0);
while(true){
if((j < n__4666__auto__)){
clojure.core.matrix.protocols.set_2d_BANG_(m,j,i,clojure.core.matrix.protocols.get_1d(column__$1,j));

var G__40707 = (j + (1));
j = G__40707;
continue;
} else {
return null;
}
break;
}
});
goog.object.set(G__38159_40704,G__38160_40705,G__38161_40706);
goog.object.set(clojure.core.matrix.protocols.PSliceMap,"object",true);

var G__38162_40710 = clojure.core.matrix.protocols.slice_map;
var G__38163_40711 = "object";
var G__38164_40712 = (function() {
var G__40713 = null;
var G__40713__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.get_major_slice_seq(m)));
});
var G__40713__3 = (function (m,f,a){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a)));
});
var G__40713__4 = (function (m,f,a,more){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,f,clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more)));
});
G__40713 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40713__2.call(this,m,f);
case 3:
return G__40713__3.call(this,m,f,a);
case 4:
return G__40713__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40713.cljs$core$IFn$_invoke$arity$2 = G__40713__2;
G__40713.cljs$core$IFn$_invoke$arity$3 = G__40713__3;
G__40713.cljs$core$IFn$_invoke$arity$4 = G__40713__4;
return G__40713;
})()
;
goog.object.set(G__38162_40710,G__38163_40711,G__38164_40712);
goog.object.set(clojure.core.matrix.protocols.PFilterSlices,"object",true);

var G__38165_40717 = clojure.core.matrix.protocols.filter_slices;
var G__38166_40718 = "object";
var G__38167_40719 = (function (m,f){
var slcs = cljs.core.filterv(f,clojure.core.matrix.protocols.get_major_slice_seq(m));
if(cljs.core.seq(slcs)){
return slcs;
} else {
return null;
}
});
goog.object.set(G__38165_40717,G__38166_40718,G__38167_40719);
goog.object.set(clojure.core.matrix.protocols.PAddEmap,"object",true);

var G__38168_40721 = clojure.core.matrix.protocols.add_emap_BANG_;
var G__38169_40722 = "object";
var G__38170_40723 = (function() {
var G__40724 = null;
var G__40724__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.matrix_add_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(a,f));
});
var G__40724__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(a,f,b));
});
var G__40724__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.matrix_add_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(a,f,b,more));
});
G__40724 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__40724__3.call(this,dest,f,a);
case 4:
return G__40724__4.call(this,dest,f,a,b);
case 5:
return G__40724__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40724.cljs$core$IFn$_invoke$arity$3 = G__40724__3;
G__40724.cljs$core$IFn$_invoke$arity$4 = G__40724__4;
G__40724.cljs$core$IFn$_invoke$arity$5 = G__40724__5;
return G__40724;
})()
;
goog.object.set(G__38168_40721,G__38169_40722,G__38170_40723);
goog.object.set(clojure.core.matrix.protocols.PSetEmap,"object",true);

var G__38171_40727 = clojure.core.matrix.protocols.set_emap_BANG_;
var G__38172_40728 = "object";
var G__38173_40729 = (function() {
var G__40730 = null;
var G__40730__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.assign_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(a,f));
});
var G__40730__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.assign_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(a,f,b));
});
var G__40730__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.assign_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(a,f,b,more));
});
G__40730 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__40730__3.call(this,dest,f,a);
case 4:
return G__40730__4.call(this,dest,f,a,b);
case 5:
return G__40730__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40730.cljs$core$IFn$_invoke$arity$3 = G__40730__3;
G__40730.cljs$core$IFn$_invoke$arity$4 = G__40730__4;
G__40730.cljs$core$IFn$_invoke$arity$5 = G__40730__5;
return G__40730;
})()
;
goog.object.set(G__38171_40727,G__38172_40728,G__38173_40729);
goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"number",true);

var G__38181_40735 = clojure.core.matrix.protocols.element_seq;
var G__38182_40736 = "number";
var G__38183_40737 = (function (m){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[m],null));
});
goog.object.set(G__38181_40735,G__38182_40736,G__38183_40737);

var G__38184_40738 = clojure.core.matrix.protocols.element_map;
var G__38185_40739 = "number";
var G__38186_40740 = (function() {
var G__40741 = null;
var G__40741__2 = (function (m,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
});
var G__40741__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(a,(function (p1__38174_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(m,p1__38174_SHARP_) : f.call(null,m,p1__38174_SHARP_));
}));
});
var G__40741__4 = (function (m,f,a,more){
var temp__5733__auto__ = cljs.core.next(more);
if(temp__5733__auto__){
var moremore = temp__5733__auto__;
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(a,(function() { 
var G__40745__delegate = function (p1__38175_SHARP_,p2__38176_SHARP_,rest__38177_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,m,p1__38175_SHARP_,p2__38176_SHARP_,rest__38177_SHARP_);
};
var G__40745 = function (p1__38175_SHARP_,p2__38176_SHARP_,var_args){
var rest__38177_SHARP_ = null;
if (arguments.length > 2) {
var G__40746__i = 0, G__40746__a = new Array(arguments.length -  2);
while (G__40746__i < G__40746__a.length) {G__40746__a[G__40746__i] = arguments[G__40746__i + 2]; ++G__40746__i;}
  rest__38177_SHARP_ = new cljs.core.IndexedSeq(G__40746__a,0,null);
} 
return G__40745__delegate.call(this,p1__38175_SHARP_,p2__38176_SHARP_,rest__38177_SHARP_);};
G__40745.cljs$lang$maxFixedArity = 2;
G__40745.cljs$lang$applyTo = (function (arglist__40747){
var p1__38175_SHARP_ = cljs.core.first(arglist__40747);
arglist__40747 = cljs.core.next(arglist__40747);
var p2__38176_SHARP_ = cljs.core.first(arglist__40747);
var rest__38177_SHARP_ = cljs.core.rest(arglist__40747);
return G__40745__delegate(p1__38175_SHARP_,p2__38176_SHARP_,rest__38177_SHARP_);
});
G__40745.cljs$core$IFn$_invoke$arity$variadic = G__40745__delegate;
return G__40745;
})()
,cljs.core.first(more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(a,(function (p1__38178_SHARP_,p2__38179_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(m,p1__38178_SHARP_,p2__38179_SHARP_) : f.call(null,m,p1__38178_SHARP_,p2__38179_SHARP_));
}),cljs.core.first(more));
}
});
G__40741 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40741__2.call(this,m,f);
case 3:
return G__40741__3.call(this,m,f,a);
case 4:
return G__40741__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40741.cljs$core$IFn$_invoke$arity$2 = G__40741__2;
G__40741.cljs$core$IFn$_invoke$arity$3 = G__40741__3;
G__40741.cljs$core$IFn$_invoke$arity$4 = G__40741__4;
return G__40741;
})()
;
goog.object.set(G__38184_40738,G__38185_40739,G__38186_40740);

var G__38187_40749 = clojure.core.matrix.protocols.element_map_BANG_;
var G__38188_40750 = "number";
var G__38189_40751 = (function() {
var G__40752 = null;
var G__40752__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40752__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40752__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__40752 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40752__2.call(this,m,f);
case 3:
return G__40752__3.call(this,m,f,a);
case 4:
return G__40752__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40752.cljs$core$IFn$_invoke$arity$2 = G__40752__2;
G__40752.cljs$core$IFn$_invoke$arity$3 = G__40752__3;
G__40752.cljs$core$IFn$_invoke$arity$4 = G__40752__4;
return G__40752;
})()
;
goog.object.set(G__38187_40749,G__38188_40750,G__38189_40751);

var G__38190_40753 = clojure.core.matrix.protocols.element_reduce;
var G__38191_40754 = "number";
var G__38192_40755 = (function() {
var G__40756 = null;
var G__40756__2 = (function (m,f){
return m;
});
var G__40756__3 = (function (m,f,init){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(init,m) : f.call(null,init,m));
});
G__40756 = function(m,f,init){
switch(arguments.length){
case 2:
return G__40756__2.call(this,m,f);
case 3:
return G__40756__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40756.cljs$core$IFn$_invoke$arity$2 = G__40756__2;
G__40756.cljs$core$IFn$_invoke$arity$3 = G__40756__3;
return G__40756;
})()
;
goog.object.set(G__38190_40753,G__38191_40754,G__38192_40755);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"object",true);

var G__38193_40759 = clojure.core.matrix.protocols.element_seq;
var G__38194_40760 = "object";
var G__38195_40761 = (function (m){
var c = cljs.core.type(m);
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims > (1))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0));
} else {
if(cljs.core.seq_QMARK_(m)){
return m;
} else {
if(((0) === dims)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.core.matrix.protocols.get_0d(m)],null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,c)){
return m;
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.convert_to_nested_vectors(m);
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to create element-seq from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}
});
goog.object.set(G__38193_40759,G__38194_40760,G__38195_40761);

var G__38196_40764 = clojure.core.matrix.protocols.element_map;
var G__38197_40765 = "object";
var G__38198_40766 = (function() {
var G__40767 = null;
var G__40767__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix(m,clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2(f,m));
});
var G__40767__3 = (function (m,f,a){
var vec__38199 = clojure.core.matrix.protocols.broadcast_same_shape(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38199,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38199,(1),null);
return clojure.core.matrix.impl.common.construct_matrix(m__$1,clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(f,m__$1,a__$1));
});
var G__40767__4 = (function (m,f,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__4185__auto__ = clojure.core.matrix.protocols.common_shape(shapes);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38180_SHARP_){
return clojure.core.matrix.protocols.broadcast(p1__38180_SHARP_,sh);
}),arrays);
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1));
});
G__40767 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40767__2.call(this,m,f);
case 3:
return G__40767__3.call(this,m,f,a);
case 4:
return G__40767__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40767.cljs$core$IFn$_invoke$arity$2 = G__40767__2;
G__40767.cljs$core$IFn$_invoke$arity$3 = G__40767__3;
G__40767.cljs$core$IFn$_invoke$arity$4 = G__40767__4;
return G__40767;
})()
;
goog.object.set(G__38196_40764,G__38197_40765,G__38198_40766);

var G__38202_40770 = clojure.core.matrix.protocols.element_map_BANG_;
var G__38203_40771 = "object";
var G__38204_40772 = (function() {
var G__40773 = null;
var G__40773__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,f));
});
var G__40773__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,f,a));
});
var G__40773__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(m,f,a,more));
});
G__40773 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40773__2.call(this,m,f);
case 3:
return G__40773__3.call(this,m,f,a);
case 4:
return G__40773__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40773.cljs$core$IFn$_invoke$arity$2 = G__40773__2;
G__40773.cljs$core$IFn$_invoke$arity$3 = G__40773__3;
G__40773.cljs$core$IFn$_invoke$arity$4 = G__40773__4;
return G__40773;
})()
;
goog.object.set(G__38202_40770,G__38203_40771,G__38204_40772);

var G__38205_40776 = clojure.core.matrix.protocols.element_reduce;
var G__38206_40777 = "object";
var G__38207_40778 = (function() {
var G__40779 = null;
var G__40779__2 = (function (m,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.element_seq(m));
});
var G__40779__3 = (function (m,f,init){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,clojure.core.matrix.protocols.element_seq(m));
});
G__40779 = function(m,f,init){
switch(arguments.length){
case 2:
return G__40779__2.call(this,m,f);
case 3:
return G__40779__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40779.cljs$core$IFn$_invoke$arity$2 = G__40779__2;
G__40779.cljs$core$IFn$_invoke$arity$3 = G__40779__3;
return G__40779;
})()
;
goog.object.set(G__38205_40776,G__38206_40777,G__38207_40778);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"null",true);

var G__38208_40781 = clojure.core.matrix.protocols.element_seq;
var G__38209_40782 = "null";
var G__38210_40783 = (function (m){
return cljs.core.list(null);
});
goog.object.set(G__38208_40781,G__38209_40782,G__38210_40783);

var G__38211_40784 = clojure.core.matrix.protocols.element_map;
var G__38212_40785 = "null";
var G__38213_40786 = (function() {
var G__40787 = null;
var G__40787__2 = (function (m,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
});
var G__40787__3 = (function (m,f,a){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,a) : f.call(null,null,a));
});
var G__40787__4 = (function (m,f,a,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,null,a,more);
});
G__40787 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40787__2.call(this,m,f);
case 3:
return G__40787__3.call(this,m,f,a);
case 4:
return G__40787__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40787.cljs$core$IFn$_invoke$arity$2 = G__40787__2;
G__40787.cljs$core$IFn$_invoke$arity$3 = G__40787__3;
G__40787.cljs$core$IFn$_invoke$arity$4 = G__40787__4;
return G__40787;
})()
;
goog.object.set(G__38211_40784,G__38212_40785,G__38213_40786);

var G__38214_40791 = clojure.core.matrix.protocols.element_map_BANG_;
var G__38215_40792 = "null";
var G__38216_40793 = (function() {
var G__40794 = null;
var G__40794__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40794__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40794__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__40794 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40794__2.call(this,m,f);
case 3:
return G__40794__3.call(this,m,f,a);
case 4:
return G__40794__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40794.cljs$core$IFn$_invoke$arity$2 = G__40794__2;
G__40794.cljs$core$IFn$_invoke$arity$3 = G__40794__3;
G__40794.cljs$core$IFn$_invoke$arity$4 = G__40794__4;
return G__40794;
})()
;
goog.object.set(G__38214_40791,G__38215_40792,G__38216_40793);

var G__38217_40797 = clojure.core.matrix.protocols.element_reduce;
var G__38218_40798 = "null";
var G__38219_40799 = (function() {
var G__40800 = null;
var G__40800__2 = (function (m,f){
return null;
});
var G__40800__3 = (function (m,f,init){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(init,null) : f.call(null,init,null));
});
G__40800 = function(m,f,init){
switch(arguments.length){
case 2:
return G__40800__2.call(this,m,f);
case 3:
return G__40800__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40800.cljs$core$IFn$_invoke$arity$2 = G__40800__2;
G__40800.cljs$core$IFn$_invoke$arity$3 = G__40800__3;
return G__40800;
})()
;
goog.object.set(G__38217_40797,G__38218_40798,G__38219_40799);

(cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
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
clojure.core.matrix.impl.defaults.cart = (function clojure$core$matrix$impl$defaults$cart(colls){
if(cljs.core.empty_QMARK_(colls)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
var iter__4582__auto__ = (function clojure$core$matrix$impl$defaults$cart_$_iter__38220(s__38221){
return (new cljs.core.LazySeq(null,(function (){
var s__38221__$1 = s__38221;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38221__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__38221__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function clojure$core$matrix$impl$defaults$cart_$_iter__38220_$_iter__38222(s__38223){
return (new cljs.core.LazySeq(null,((function (s__38221__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__38223__$1 = s__38223;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38223__$1);
if(temp__5735__auto____$1){
var s__38223__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38223__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38223__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38225 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38224 = (0);
while(true){
if((i__38224 < size__4581__auto__)){
var more = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38224);
cljs.core.chunk_append(b__38225,cljs.core.cons(x,more));

var G__40805 = (i__38224 + (1));
i__38224 = G__40805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38225),clojure$core$matrix$impl$defaults$cart_$_iter__38220_$_iter__38222(cljs.core.chunk_rest(s__38223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38225),null);
}
} else {
var more = cljs.core.first(s__38223__$2);
return cljs.core.cons(cljs.core.cons(x,more),clojure$core$matrix$impl$defaults$cart_$_iter__38220_$_iter__38222(cljs.core.rest(s__38223__$2)));
}
} else {
return null;
}
break;
}
});})(s__38221__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__38221__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((function (){var G__38226 = cljs.core.rest(colls);
return (clojure.core.matrix.impl.defaults.cart.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.defaults.cart.cljs$core$IFn$_invoke$arity$1(G__38226) : clojure.core.matrix.impl.defaults.cart.call(null,G__38226));
})()));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,clojure$core$matrix$impl$defaults$cart_$_iter__38220(cljs.core.rest(s__38221__$1)));
} else {
var G__40808 = cljs.core.rest(s__38221__$1);
s__38221__$1 = G__40808;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.first(colls));
}
});
clojure.core.matrix.impl.defaults.indices_seq = (function clojure$core$matrix$impl$defaults$indices_seq(m){
return clojure.core.matrix.impl.defaults.cart(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.range,clojure.core.matrix.protocols.get_shape(m)));
});
goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"number",true);

var G__38235_40810 = clojure.core.matrix.protocols.element_map_indexed;
var G__38236_40811 = "number";
var G__38237_40812 = (function() {
var G__40813 = null;
var G__40813__2 = (function (m,f){
var G__38238 = cljs.core.PersistentVector.EMPTY;
var G__38239 = m;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38238,G__38239) : f.call(null,G__38238,G__38239));
});
var G__40813__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(a,(function (p1__38227_SHARP_){
var G__38240 = cljs.core.PersistentVector.EMPTY;
var G__38241 = m;
var G__38242 = p1__38227_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__38240,G__38241,G__38242) : f.call(null,G__38240,G__38241,G__38242));
}));
});
var G__40813__4 = (function (m,f,a,more){
var temp__5733__auto__ = cljs.core.next(more);
if(temp__5733__auto__){
var moremore = temp__5733__auto__;
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(a,(function() { 
var G__40817__delegate = function (p1__38228_SHARP_,p2__38229_SHARP_,rest__38230_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.PersistentVector.EMPTY,m,p1__38228_SHARP_,p2__38229_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__38230_SHARP_], 0));
};
var G__40817 = function (p1__38228_SHARP_,p2__38229_SHARP_,var_args){
var rest__38230_SHARP_ = null;
if (arguments.length > 2) {
var G__40819__i = 0, G__40819__a = new Array(arguments.length -  2);
while (G__40819__i < G__40819__a.length) {G__40819__a[G__40819__i] = arguments[G__40819__i + 2]; ++G__40819__i;}
  rest__38230_SHARP_ = new cljs.core.IndexedSeq(G__40819__a,0,null);
} 
return G__40817__delegate.call(this,p1__38228_SHARP_,p2__38229_SHARP_,rest__38230_SHARP_);};
G__40817.cljs$lang$maxFixedArity = 2;
G__40817.cljs$lang$applyTo = (function (arglist__40820){
var p1__38228_SHARP_ = cljs.core.first(arglist__40820);
arglist__40820 = cljs.core.next(arglist__40820);
var p2__38229_SHARP_ = cljs.core.first(arglist__40820);
var rest__38230_SHARP_ = cljs.core.rest(arglist__40820);
return G__40817__delegate(p1__38228_SHARP_,p2__38229_SHARP_,rest__38230_SHARP_);
});
G__40817.cljs$core$IFn$_invoke$arity$variadic = G__40817__delegate;
return G__40817;
})()
,cljs.core.first(more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(a,(function (p1__38231_SHARP_,p2__38232_SHARP_){
var G__38243 = cljs.core.PersistentVector.EMPTY;
var G__38244 = m;
var G__38245 = p1__38231_SHARP_;
var G__38246 = p2__38232_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__38243,G__38244,G__38245,G__38246) : f.call(null,G__38243,G__38244,G__38245,G__38246));
}),cljs.core.first(more));
}
});
G__40813 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40813__2.call(this,m,f);
case 3:
return G__40813__3.call(this,m,f,a);
case 4:
return G__40813__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40813.cljs$core$IFn$_invoke$arity$2 = G__40813__2;
G__40813.cljs$core$IFn$_invoke$arity$3 = G__40813__3;
G__40813.cljs$core$IFn$_invoke$arity$4 = G__40813__4;
return G__40813;
})()
;
goog.object.set(G__38235_40810,G__38236_40811,G__38237_40812);

var G__38247_40824 = clojure.core.matrix.protocols.element_map_indexed_BANG_;
var G__38248_40825 = "number";
var G__38249_40826 = (function() {
var G__40827 = null;
var G__40827__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40827__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40827__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__40827 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40827__2.call(this,m,f);
case 3:
return G__40827__3.call(this,m,f,a);
case 4:
return G__40827__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40827.cljs$core$IFn$_invoke$arity$2 = G__40827__2;
G__40827.cljs$core$IFn$_invoke$arity$3 = G__40827__3;
G__40827.cljs$core$IFn$_invoke$arity$4 = G__40827__4;
return G__40827;
})()
;
goog.object.set(G__38247_40824,G__38248_40825,G__38249_40826);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"object",true);

var G__38250_40829 = clojure.core.matrix.protocols.element_map_indexed;
var G__38251_40830 = "object";
var G__38252_40831 = (function() {
var G__40832 = null;
var G__40832__2 = (function (m,f){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
var G__38253 = cljs.core.PersistentVector.EMPTY;
var G__38254 = clojure.core.matrix.protocols.get_0d(m);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38253,G__38254) : f.call(null,G__38253,G__38254));
} else {
var s = cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.impl.defaults.indices_seq(m),clojure.core.matrix.protocols.element_seq(m));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m,s),clojure.core.matrix.protocols.get_shape(m));
}
});
var G__40832__3 = (function (m,f,a){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
var v = clojure.core.matrix.protocols.get_0d(m);
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(a,(function (p1__38233_SHARP_,p2__38234_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__38233_SHARP_,v,p2__38234_SHARP_) : f.call(null,p1__38233_SHARP_,v,p2__38234_SHARP_));
}));
} else {
var vec__38255 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38255,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38255,(1),null);
var s = cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,clojure.core.matrix.impl.defaults.indices_seq(m__$1),clojure.core.matrix.protocols.element_seq(m__$1),clojure.core.matrix.protocols.element_seq(a__$1));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m__$1,s),clojure.core.matrix.protocols.get_shape(m__$1));
}
});
var G__40832__4 = (function (m,f,a,more){
var s = cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.protocols.element_seq(m),clojure.core.matrix.protocols.element_seq(a));
var s__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(clojure.core.matrix.impl.defaults.indices_seq(m),clojure.core.matrix.protocols.element_seq(m),clojure.core.matrix.protocols.element_seq(a),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,more)));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m,s__$1),clojure.core.matrix.protocols.get_shape(m));
});
G__40832 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40832__2.call(this,m,f);
case 3:
return G__40832__3.call(this,m,f,a);
case 4:
return G__40832__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40832.cljs$core$IFn$_invoke$arity$2 = G__40832__2;
G__40832.cljs$core$IFn$_invoke$arity$3 = G__40832__3;
G__40832.cljs$core$IFn$_invoke$arity$4 = G__40832__4;
return G__40832;
})()
;
goog.object.set(G__38250_40829,G__38251_40830,G__38252_40831);

var G__38258_40844 = clojure.core.matrix.protocols.element_map_indexed_BANG_;
var G__38259_40845 = "object";
var G__38260_40846 = (function() {
var G__40847 = null;
var G__40847__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(m,f));
});
var G__40847__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$3(m,f,a));
});
var G__40847__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$4(m,f,a,more));
});
G__40847 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40847__2.call(this,m,f);
case 3:
return G__40847__3.call(this,m,f,a);
case 4:
return G__40847__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40847.cljs$core$IFn$_invoke$arity$2 = G__40847__2;
G__40847.cljs$core$IFn$_invoke$arity$3 = G__40847__3;
G__40847.cljs$core$IFn$_invoke$arity$4 = G__40847__4;
return G__40847;
})()
;
goog.object.set(G__38258_40844,G__38259_40845,G__38260_40846);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"null",true);

var G__38261_40851 = clojure.core.matrix.protocols.element_map_indexed;
var G__38262_40852 = "null";
var G__38263_40853 = (function() {
var G__40854 = null;
var G__40854__2 = (function (m,f){
var G__38264 = cljs.core.PersistentVector.EMPTY;
var G__38265 = null;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38264,G__38265) : f.call(null,G__38264,G__38265));
});
var G__40854__3 = (function (m,f,a){
var G__38266 = cljs.core.PersistentVector.EMPTY;
var G__38267 = null;
var G__38268 = a;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__38266,G__38267,G__38268) : f.call(null,G__38266,G__38267,G__38268));
});
var G__40854__4 = (function (m,f,a,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.PersistentVector.EMPTY,null,a,more);
});
G__40854 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40854__2.call(this,m,f);
case 3:
return G__40854__3.call(this,m,f,a);
case 4:
return G__40854__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40854.cljs$core$IFn$_invoke$arity$2 = G__40854__2;
G__40854.cljs$core$IFn$_invoke$arity$3 = G__40854__3;
G__40854.cljs$core$IFn$_invoke$arity$4 = G__40854__4;
return G__40854;
})()
;
goog.object.set(G__38261_40851,G__38262_40852,G__38263_40853);

var G__38269_40857 = clojure.core.matrix.protocols.element_map_indexed_BANG_;
var G__38270_40858 = "null";
var G__38271_40859 = (function() {
var G__40860 = null;
var G__40860__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40860__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__40860__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__40860 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40860__2.call(this,m,f);
case 3:
return G__40860__3.call(this,m,f,a);
case 4:
return G__40860__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40860.cljs$core$IFn$_invoke$arity$2 = G__40860__2;
G__40860.cljs$core$IFn$_invoke$arity$3 = G__40860__3;
G__40860.cljs$core$IFn$_invoke$arity$4 = G__40860__4;
return G__40860;
})()
;
goog.object.set(G__38269_40857,G__38270_40858,G__38271_40859);
goog.object.set(clojure.core.matrix.protocols.PElementCount,"null",true);

var G__38272_40863 = clojure.core.matrix.protocols.element_count;
var G__38273_40864 = "null";
var G__38274_40865 = (function (m){
return (1);
});
goog.object.set(G__38272_40863,G__38273_40864,G__38274_40865);

goog.object.set(clojure.core.matrix.protocols.PElementCount,"number",true);

var G__38275_40866 = clojure.core.matrix.protocols.element_count;
var G__38276_40867 = "number";
var G__38277_40868 = (function (m){
return (1);
});
goog.object.set(G__38275_40866,G__38276_40867,G__38277_40868);

goog.object.set(clojure.core.matrix.protocols.PElementCount,"object",true);

var G__38278_40871 = clojure.core.matrix.protocols.element_count;
var G__38279_40872 = "object";
var G__38280_40873 = (function (m){
return clojure.core.matrix.impl.defaults.calc_element_count(m);
});
goog.object.set(G__38278_40871,G__38279_40872,G__38280_40873);
goog.object.set(clojure.core.matrix.protocols.PValidateShape,"null",true);

var G__38282_40874 = clojure.core.matrix.protocols.validate_shape;
var G__38283_40875 = "null";
var G__38284_40876 = (function() {
var G__40878 = null;
var G__40878__1 = (function (m){
return null;
});
var G__40878__2 = (function (m,shape){
if((shape == null)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
G__40878 = function(m,shape){
switch(arguments.length){
case 1:
return G__40878__1.call(this,m);
case 2:
return G__40878__2.call(this,m,shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40878.cljs$core$IFn$_invoke$arity$1 = G__40878__1;
G__40878.cljs$core$IFn$_invoke$arity$2 = G__40878__2;
return G__40878;
})()
;
goog.object.set(G__38282_40874,G__38283_40875,G__38284_40876);

goog.object.set(clojure.core.matrix.protocols.PValidateShape,"object",true);

var G__38285_40882 = clojure.core.matrix.protocols.validate_shape;
var G__38286_40883 = "object";
var G__38287_40884 = (function() {
var G__40885 = null;
var G__40885__1 = (function (m){
return clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.get_shape(m));
});
var G__40885__2 = (function (m,expected_shape){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
var sh = clojure.core.matrix.protocols.get_shape(m);
if((sh == null)){
if((expected_shape == null)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sh),cljs.core.vec(expected_shape))){
return sh;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
} else {
var sh = clojure.core.matrix.protocols.get_shape(m);
var ss = clojure.core.matrix.protocols.get_major_slice_seq(m);
var efirst = (function (){var or__4185__auto__ = cljs.core.first(expected_shape);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var enext = cljs.core.next(expected_shape);
var shapes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38281_SHARP_){
return clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$2(p1__38281_SHARP_,enext);
}),ss);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,enext,shapes))){
return cljs.core.vec(cljs.core.cons(clojure.core.matrix.protocols.dimension_count(m,(0)),cljs.core.first(shapes)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconsistent shapes for sub arrays in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
});
G__40885 = function(m,expected_shape){
switch(arguments.length){
case 1:
return G__40885__1.call(this,m);
case 2:
return G__40885__2.call(this,m,expected_shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40885.cljs$core$IFn$_invoke$arity$1 = G__40885__1;
G__40885.cljs$core$IFn$_invoke$arity$2 = G__40885__2;
return G__40885;
})()
;
goog.object.set(G__38285_40882,G__38286_40883,G__38287_40884);
goog.object.set(clojure.core.matrix.protocols.PMatrixSlices,"object",true);

var G__38288_40892 = clojure.core.matrix.protocols.get_row;
var G__38289_40893 = "object";
var G__38290_40894 = (function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
} else {
return clojure.core.matrix.protocols.get_major_slice(m,i);
}
});
goog.object.set(G__38288_40892,G__38289_40893,G__38290_40894);

var G__38291_40896 = clojure.core.matrix.protocols.get_column;
var G__38292_40897 = "object";
var G__38293_40898 = (function (m,i){
return clojure.core.matrix.protocols.get_slice(m,(1),i);
});
goog.object.set(G__38291_40896,G__38292_40897,G__38293_40898);

var G__38294_40900 = clojure.core.matrix.protocols.get_major_slice;
var G__38295_40901 = "object";
var G__38296_40902 = (function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
} else {
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
return clojure.core.matrix.protocols.get_1d(m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice(m,i);

}
}
});
goog.object.set(G__38294_40900,G__38295_40901,G__38296_40902);

var G__38297_40904 = clojure.core.matrix.protocols.get_slice;
var G__38298_40905 = "object";
var G__38299_40906 = (function (m,dimension,i){
var ldimension = cljs.core.long$(dimension);
if(((0) === ldimension)){
return clojure.core.matrix.protocols.get_major_slice(m,i);
} else {
return clojure.core.matrix.protocols.get_slice(clojure.core.matrix.protocols.convert_to_nested_vectors(m),dimension,i);

}
});
goog.object.set(G__38297_40904,G__38298_40905,G__38299_40906);
goog.object.set(clojure.core.matrix.protocols.PBLASBase,"object",true);

var G__38300_40907 = clojure.core.matrix.protocols.gemm_BANG_;
var G__38301_40908 = "object";
var G__38302_40909 = (function (c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose(a):a);
var b__$1 = (cljs.core.truth_(trans_b_QMARK_)?clojure.core.matrix.protocols.transpose(b):b);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_(c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4(c,a__$1,b__$1,alpha);
});
goog.object.set(G__38300_40907,G__38301_40908,G__38302_40909);

var G__38303_40912 = clojure.core.matrix.protocols.gemv_BANG_;
var G__38304_40913 = "object";
var G__38305_40914 = (function (c,trans_a_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose(a):a);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_(c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4(c,a__$1,b,alpha);
});
goog.object.set(G__38303_40912,G__38304_40913,G__38305_40914);
goog.object.set(clojure.core.matrix.protocols.PMatrixColumns,"object",true);

var G__38306_40916 = clojure.core.matrix.protocols.get_columns;
var G__38307_40917 = "object";
var G__38308_40918 = (function (m){
var G__38309 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__38309) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get columns of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get columns of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec(clojure.core.matrix.protocols.get_slice_seq(m,(1)));

break;
default:
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.get_columns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0)));

}
});
goog.object.set(G__38306_40916,G__38307_40917,G__38308_40918);
goog.object.set(clojure.core.matrix.protocols.PMatrixRows,"object",true);

var G__38310_40921 = clojure.core.matrix.protocols.get_rows;
var G__38311_40922 = "object";
var G__38312_40923 = (function (m){
var G__38313 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__38313) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get rows of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get rows of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec(clojure.core.matrix.protocols.get_major_slice_seq(m));

break;
default:
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.get_rows,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0)));

}
});
goog.object.set(G__38310_40921,G__38311_40922,G__38312_40923);
goog.object.set(clojure.core.matrix.protocols.PSliceView,"object",true);

var G__38314_40926 = clojure.core.matrix.protocols.get_major_slice_view;
var G__38315_40927 = "object";
var G__38316_40928 = (function (m,i){
if((Array === m.constructor)){
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(ss))){
return ss;
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice(m,i);
}
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice(m,i);

}
});
goog.object.set(G__38314_40926,G__38315_40927,G__38316_40928);
goog.object.set(clojure.core.matrix.protocols.PSliceView2,"object",true);

var G__38317_40930 = clojure.core.matrix.protocols.get_slice_view;
var G__38318_40931 = "object";
var G__38319_40932 = (function (m,dim,i){
if((dim === (0))){
return clojure.core.matrix.protocols.get_major_slice_view(m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_nd(m).clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3(null,dim,i);
}
});
goog.object.set(G__38317_40930,G__38318_40931,G__38319_40932);
goog.object.set(clojure.core.matrix.protocols.PSliceSeq,"object",true);

var G__38321_40933 = clojure.core.matrix.protocols.get_major_slice_seq;
var G__38322_40934 = "object";
var G__38323_40935 = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims <= (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get slices on [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dims),"]-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
return cljs.core.seq(m);
} else {
if((dims === (1))){
var iter__4582__auto__ = (function clojure$core$matrix$impl$defaults$iter__38324(s__38325){
return (new cljs.core.LazySeq(null,(function (){
var s__38325__$1 = s__38325;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38325__$1);
if(temp__5735__auto__){
var s__38325__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38325__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38325__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38327 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38326 = (0);
while(true){
if((i__38326 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38326);
cljs.core.chunk_append(b__38327,clojure.core.matrix.protocols.get_1d(m,i));

var G__40939 = (i__38326 + (1));
i__38326 = G__40939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38327),clojure$core$matrix$impl$defaults$iter__38324(cljs.core.chunk_rest(s__38325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38327),null);
}
} else {
var i = cljs.core.first(s__38325__$2);
return cljs.core.cons(clojure.core.matrix.protocols.get_1d(m,i),clojure$core$matrix$impl$defaults$iter__38324(cljs.core.rest(s__38325__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38320_SHARP_){
return clojure.core.matrix.protocols.get_major_slice(m,p1__38320_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));

}
}
}
});
goog.object.set(G__38321_40933,G__38322_40934,G__38323_40935);
goog.object.set(clojure.core.matrix.protocols.PSliceSeq2,"object",true);

var G__38329_40942 = clojure.core.matrix.protocols.get_slice_seq;
var G__38330_40943 = "object";
var G__38331_40944 = (function (m,dimension){
var ldimension = cljs.core.long$(dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq(m);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38328_SHARP_){
return clojure.core.matrix.protocols.get_slice(m,dimension,p1__38328_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,dimension)));

}
}
});
goog.object.set(G__38329_40942,G__38330_40943,G__38331_40944);
goog.object.set(clojure.core.matrix.protocols.PSliceViewSeq,"object",true);

var G__38332_40947 = clojure.core.matrix.protocols.get_major_slice_view_seq;
var G__38333_40948 = "object";
var G__38334_40949 = (function (m){
var n = clojure.core.matrix.protocols.dimension_count(m,(0));
var iter__4582__auto__ = (function clojure$core$matrix$impl$defaults$iter__38335(s__38336){
return (new cljs.core.LazySeq(null,(function (){
var s__38336__$1 = s__38336;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38336__$1);
if(temp__5735__auto__){
var s__38336__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38336__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38336__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38338 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38337 = (0);
while(true){
if((i__38337 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38337);
cljs.core.chunk_append(b__38338,clojure.core.matrix.protocols.get_major_slice_view(m,i));

var G__40953 = (i__38337 + (1));
i__38337 = G__40953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38338),clojure$core$matrix$impl$defaults$iter__38335(cljs.core.chunk_rest(s__38336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38338),null);
}
} else {
var i = cljs.core.first(s__38336__$2);
return cljs.core.cons(clojure.core.matrix.protocols.get_major_slice_view(m,i),clojure$core$matrix$impl$defaults$iter__38335(cljs.core.rest(s__38336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
goog.object.set(G__38332_40947,G__38333_40948,G__38334_40949);
goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"null",true);

var G__38339_40955 = clojure.core.matrix.protocols.join;
var G__38340_40956 = "null";
var G__38341_40957 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38339_40955,G__38340_40956,G__38341_40957);

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"number",true);

var G__38342_40958 = clojure.core.matrix.protocols.join;
var G__38343_40959 = "number";
var G__38344_40960 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38342_40958,G__38343_40959,G__38344_40960);

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"object",true);

var G__38345_40961 = clojure.core.matrix.protocols.join;
var G__38346_40962 = "object";
var G__38347_40963 = (function (m,a){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((dims === (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join to a 0-dimensional array!",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === adims)){
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a)));
} else {
if((dims === (adims + (1)))){
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq(m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Joining with array of incompatible size",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
goog.object.set(G__38345_40961,G__38346_40962,G__38347_40963);
goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"null",true);

var G__38350_40965 = clojure.core.matrix.protocols.join_along;
var G__38351_40966 = "null";
var G__38352_40967 = (function (m,a,dim){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38350_40965,G__38351_40966,G__38352_40967);

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"number",true);

var G__38353_40970 = clojure.core.matrix.protocols.join_along;
var G__38354_40971 = "number";
var G__38355_40972 = (function (m,a,dim){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38353_40970,G__38354_40971,G__38355_40972);

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"object",true);

var G__38356_40973 = clojure.core.matrix.protocols.join_along;
var G__38357_40974 = "object";
var G__38358_40975 = (function (m,a,dim){
return clojure.core.matrix.protocols.coerce_param(m,(function (){var dim__$1 = cljs.core.long$(dim);
if((dim__$1 === (0))){
return clojure.core.matrix.protocols.join(m,a);
} else {
var ddim = (dim__$1 - (1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__38348_SHARP_,p2__38349_SHARP_){
return clojure.core.matrix.protocols.join_along(p1__38348_SHARP_,p2__38349_SHARP_,ddim);
}),clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a));

}
})());
});
goog.object.set(G__38356_40973,G__38357_40974,G__38358_40975);
goog.object.set(clojure.core.matrix.protocols.PSubVector,"null",true);

var G__38359_40977 = clojure.core.matrix.protocols.subvector;
var G__38360_40978 = "null";
var G__38361_40979 = (function (m,start,length){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take subvector of nil",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38359_40977,G__38360_40978,G__38361_40979);

goog.object.set(clojure.core.matrix.protocols.PSubVector,"number",true);

var G__38362_40980 = clojure.core.matrix.protocols.subvector;
var G__38363_40981 = "number";
var G__38364_40982 = (function (m,start,length){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take subvector of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38362_40980,G__38363_40981,G__38364_40982);

goog.object.set(clojure.core.matrix.protocols.PSubVector,"object",true);

var G__38365_40984 = clojure.core.matrix.protocols.subvector;
var G__38366_40985 = "object";
var G__38367_40986 = (function (m,start,length){
return clojure.core.matrix.impl.wrappers.wrap_nd(m).clojure$core$matrix$protocols$PSubVector$subvector$arity$3(null,start,length);
});
goog.object.set(G__38365_40984,G__38366_40985,G__38367_40986);
goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"null",true);

var G__38368_40987 = clojure.core.matrix.protocols.submatrix;
var G__38369_40988 = "null";
var G__38370_40989 = (function (m,index_ranges){
if(cljs.core.seq(index_ranges)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take partial submatrix of nil",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
});
goog.object.set(G__38368_40987,G__38369_40988,G__38370_40989);

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"number",true);

var G__38371_40994 = clojure.core.matrix.protocols.submatrix;
var G__38372_40995 = "number";
var G__38373_40996 = (function (m,index_ranges){
if(cljs.core.seq(index_ranges)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take partial submatrix of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
});
goog.object.set(G__38371_40994,G__38372_40995,G__38373_40996);

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"object",true);

var G__38374_40997 = clojure.core.matrix.protocols.submatrix;
var G__38375_40998 = "object";
var G__38376_40999 = (function (m,index_ranges){
return clojure.core.matrix.impl.wrappers.wrap_submatrix(m,index_ranges);
});
goog.object.set(G__38374_40997,G__38375_40998,G__38376_40999);
goog.object.set(clojure.core.matrix.protocols.PBroadcast,"null",true);

var G__38377_41003 = clojure.core.matrix.protocols.broadcast;
var G__38378_41004 = "null";
var G__38379_41005 = (function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);
});
goog.object.set(G__38377_41003,G__38378_41004,G__38379_41005);

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"number",true);

var G__38380_41006 = clojure.core.matrix.protocols.broadcast;
var G__38381_41007 = "number";
var G__38382_41008 = (function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);
});
goog.object.set(G__38380_41006,G__38381_41007,G__38382_41008);

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"object",true);

var G__38383_41009 = clojure.core.matrix.protocols.broadcast;
var G__38384_41010 = "object";
var G__38385_41011 = (function (m,new_shape){
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
goog.object.set(G__38383_41009,G__38384_41010,G__38385_41011);
goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"null",true);

var G__38386_41016 = clojure.core.matrix.protocols.broadcast_like;
var G__38387_41017 = "null";
var G__38388_41018 = (function (m,a){
return clojure.core.matrix.impl.wrappers.wrap_broadcast(a,clojure.core.matrix.protocols.get_shape(m));
});
goog.object.set(G__38386_41016,G__38387_41017,G__38388_41018);

goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"object",true);

var G__38389_41022 = clojure.core.matrix.protocols.broadcast_like;
var G__38390_41023 = "object";
var G__38391_41024 = (function (m,a){
var sm = clojure.core.matrix.protocols.get_shape(m);
var sa = clojure.core.matrix.protocols.get_shape(a);
if(clojure.core.matrix.utils.same_shape_object_QMARK_(sm,sa)){
return a;
} else {
return clojure.core.matrix.protocols.broadcast(a,sm);
}
});
goog.object.set(G__38389_41022,G__38390_41023,G__38391_41024);
goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"null",true);

var G__38392_41025 = clojure.core.matrix.protocols.broadcast_coerce;
var G__38393_41026 = "null";
var G__38394_41027 = (function (m,a){
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.broadcast_like(m,a));
});
goog.object.set(G__38392_41025,G__38393_41026,G__38394_41027);

goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"object",true);

var G__38395_41032 = clojure.core.matrix.protocols.broadcast_coerce;
var G__38396_41033 = "object";
var G__38397_41034 = (function (m,a){
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.broadcast_like(m,a));
});
goog.object.set(G__38395_41032,G__38396_41033,G__38397_41034);
goog.object.set(clojure.core.matrix.protocols.PPack,"null",true);

var G__38398_41036 = clojure.core.matrix.protocols.pack;
var G__38399_41037 = "null";
var G__38400_41038 = (function (m){
return null;
});
goog.object.set(G__38398_41036,G__38399_41037,G__38400_41038);

goog.object.set(clojure.core.matrix.protocols.PPack,"object",true);

var G__38401_41041 = clojure.core.matrix.protocols.pack;
var G__38402_41042 = "object";
var G__38403_41043 = (function (m){
return m;
});
goog.object.set(G__38401_41041,G__38402_41042,G__38403_41043);
goog.object.set(clojure.core.matrix.protocols.PConversion,"null",true);

var G__38404_41044 = clojure.core.matrix.protocols.convert_to_nested_vectors;
var G__38405_41045 = "null";
var G__38406_41046 = (function (m){
return null;
});
goog.object.set(G__38404_41044,G__38405_41045,G__38406_41046);

goog.object.set(clojure.core.matrix.protocols.PConversion,"number",true);

var G__38407_41047 = clojure.core.matrix.protocols.convert_to_nested_vectors;
var G__38408_41048 = "number";
var G__38409_41049 = (function (m){
return m;
});
goog.object.set(G__38407_41047,G__38408_41048,G__38409_41049);

goog.object.set(clojure.core.matrix.protocols.PConversion,"object",true);

var G__38410_41051 = clojure.core.matrix.protocols.convert_to_nested_vectors;
var G__38411_41052 = "object";
var G__38412_41053 = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d(m);
} else {
if(((1) === dims)){
if(((cljs.core.seq_QMARK_(m)) || (cljs.core.sequential_QMARK_(m)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_0d,m);
} else {
var n = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < n)){
var G__41055 = (i + (1));
var G__41056 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,clojure.core.matrix.protocols.get_1d(m,i));
i = G__41055;
res = G__41056;
continue;
} else {
return res;
}
break;
}
}
} else {
if(cljs.core.sequential_QMARK_(m)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq(m));
} else {
if(cljs.core.seq_QMARK_(m)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't work out how to convert to nested vectors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
});
goog.object.set(G__38410_41051,G__38411_41052,G__38412_41053);
goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"null",true);

var G__38413_41058 = clojure.core.matrix.protocols.column_matrix;
var G__38414_41059 = "null";
var G__38415_41060 = (function (m,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38413_41058,G__38414_41059,G__38415_41060);

var G__38416_41065 = clojure.core.matrix.protocols.row_matrix;
var G__38417_41066 = "null";
var G__38418_41067 = (function (m,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38416_41065,G__38417_41066,G__38418_41067);

goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"object",true);

var G__38419_41068 = clojure.core.matrix.protocols.column_matrix;
var G__38420_41069 = "object";
var G__38421_41070 = (function (m,data){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data)))){
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,clojure.core.matrix.protocols.element_seq(data)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a column matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
});
goog.object.set(G__38419_41068,G__38420_41069,G__38421_41070);

var G__38422_41074 = clojure.core.matrix.protocols.row_matrix;
var G__38423_41075 = "object";
var G__38424_41076 = (function (m,data){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data)))){
return clojure.core.matrix.protocols.coerce_param(m,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[data],null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a row matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
});
goog.object.set(G__38422_41074,G__38423_41075,G__38424_41076);
goog.object.set(clojure.core.matrix.protocols.PVectorView,"null",true);

var G__38425_41078 = clojure.core.matrix.protocols.as_vector;
var G__38426_41079 = "null";
var G__38427_41080 = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
});
goog.object.set(G__38425_41078,G__38426_41079,G__38427_41080);

goog.object.set(clojure.core.matrix.protocols.PVectorView,"number",true);

var G__38428_41081 = clojure.core.matrix.protocols.as_vector;
var G__38429_41082 = "number";
var G__38430_41083 = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
});
goog.object.set(G__38428_41081,G__38429_41082,G__38430_41083);

goog.object.set(clojure.core.matrix.protocols.PVectorView,"object",true);

var G__38431_41085 = clojure.core.matrix.protocols.as_vector;
var G__38432_41086 = "object";
var G__38433_41087 = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims === (0))){
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.impl.wrappers.wrap_nd(m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
} else {
if((dims === (1))){
return m;
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
return clojure.core.matrix.protocols.to_vector(m);
} else {
return null;

}
}
}
});
goog.object.set(G__38431_41085,G__38432_41086,G__38433_41087);
goog.object.set(clojure.core.matrix.protocols.PVectorisable,"null",true);

var G__38434_41089 = clojure.core.matrix.protocols.to_vector;
var G__38435_41090 = "null";
var G__38436_41091 = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
});
goog.object.set(G__38434_41089,G__38435_41090,G__38436_41091);

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"number",true);

var G__38437_41093 = clojure.core.matrix.protocols.to_vector;
var G__38438_41094 = "number";
var G__38439_41095 = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
});
goog.object.set(G__38437_41093,G__38438_41094,G__38439_41095);

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"object",true);

var G__38440_41096 = clojure.core.matrix.protocols.to_vector;
var G__38441_41097 = "object";
var G__38442_41098 = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if(((0) === dims)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.protocols.get_0d(m)], null);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
return clojure.core.matrix.protocols.clone(m);
} else {
return cljs.core.vec(clojure.core.matrix.protocols.element_seq(m));

}
}
});
goog.object.set(G__38440_41096,G__38441_41097,G__38442_41098);
goog.object.set(clojure.core.matrix.protocols.PReshaping,"null",true);

var G__38444_41100 = clojure.core.matrix.protocols.reshape;
var G__38445_41101 = "null";
var G__38446_41102 = (function (m,shape){
return clojure.core.matrix.protocols.reshape(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),shape);
});
goog.object.set(G__38444_41100,G__38445_41101,G__38446_41102);

goog.object.set(clojure.core.matrix.protocols.PReshaping,"number",true);

var G__38447_41104 = clojure.core.matrix.protocols.reshape;
var G__38448_41105 = "number";
var G__38449_41106 = (function (m,shape){
return clojure.core.matrix.protocols.reshape(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null),shape);
});
goog.object.set(G__38447_41104,G__38448_41105,G__38449_41106);

goog.object.set(clojure.core.matrix.protocols.PReshaping,"object",true);

var G__38450_41107 = clojure.core.matrix.protocols.reshape;
var G__38451_41108 = "object";
var G__38452_41109 = (function (m,shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape(m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value(m);
var es = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq(m),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(gv));
var partition_shape = (function clojure$core$matrix$impl$defaults$partition_shape(es__$1,shape__$1){
var temp__5733__auto__ = cljs.core.seq(shape__$1);
if(temp__5733__auto__){
var s = temp__5733__auto__;
var ns = cljs.core.next(s);
var plen = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,(1),ns);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38443_SHARP_){
return clojure$core$matrix$impl$defaults$partition_shape(p1__38443_SHARP_,ns);
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
goog.object.set(G__38450_41107,G__38451_41108,G__38452_41109);
goog.object.set(clojure.core.matrix.protocols.PCoercion,"null",true);

var G__38453_41114 = clojure.core.matrix.protocols.coerce_param;
var G__38454_41115 = "null";
var G__38455_41116 = (function (m,param){
return param;
});
goog.object.set(G__38453_41114,G__38454_41115,G__38455_41116);

goog.object.set(clojure.core.matrix.protocols.PCoercion,"number",true);

var G__38456_41117 = clojure.core.matrix.protocols.coerce_param;
var G__38457_41118 = "number";
var G__38458_41119 = (function (m,param){
return param;
});
goog.object.set(G__38456_41117,G__38457_41118,G__38458_41119);

goog.object.set(clojure.core.matrix.protocols.PCoercion,"object",true);

var G__38459_41121 = clojure.core.matrix.protocols.coerce_param;
var G__38460_41122 = "object";
var G__38461_41123 = (function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors(param):param);
var or__4185__auto__ = clojure.core.matrix.protocols.construct_matrix(m,param__$1);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return param__$1;
}
});
goog.object.set(G__38459_41121,G__38460_41122,G__38461_41123);
goog.object.set(clojure.core.matrix.protocols.PExponent,"number",true);

var G__38470_41125 = clojure.core.matrix.protocols.element_pow;
var G__38471_41126 = "number";
var G__38472_41127 = (function (m,exponent){
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(exponent))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(exponent,(function (p1__38463_SHARP_){
return Math.pow(m,p1__38463_SHARP_);
}));
} else {
return Math.pow(m,exponent);
}
});
goog.object.set(G__38470_41125,G__38471_41126,G__38472_41127);

goog.object.set(clojure.core.matrix.protocols.PExponent,"object",true);

var G__38473_41128 = clojure.core.matrix.protocols.element_pow;
var G__38474_41129 = "object";
var G__38475_41130 = (function (m,exponent){
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(exponent))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,(function (p1__38467_SHARP_,p2__38468_SHARP_){
return Math.pow(p1__38467_SHARP_,p2__38468_SHARP_);
}),exponent);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__38469_SHARP_){
return Math.pow(p1__38469_SHARP_,exponent);
}));
}
});
goog.object.set(G__38473_41128,G__38474_41129,G__38475_41130);
goog.object.set(clojure.core.matrix.protocols.PSquare,"number",true);

var G__38476_41132 = clojure.core.matrix.protocols.square;
var G__38477_41133 = "number";
var G__38478_41134 = (function (m){
return (m * m);
});
goog.object.set(G__38476_41132,G__38477_41133,G__38478_41134);

goog.object.set(clojure.core.matrix.protocols.PSquare,"object",true);

var G__38479_41135 = clojure.core.matrix.protocols.square;
var G__38480_41136 = "object";
var G__38481_41137 = (function (m){
return clojure.core.matrix.protocols.element_multiply(m,m);
});
goog.object.set(G__38479_41135,G__38480_41136,G__38481_41137);
goog.object.set(clojure.core.matrix.protocols.PLogistic,"number",true);

var G__38482_41138 = clojure.core.matrix.protocols.logistic;
var G__38483_41139 = "number";
var G__38484_41140 = (function (m){
var e_t = (function (){var G__38485 = (- m);
return Math.exp(G__38485);
})();
return (1.0 / (1.0 + e_t));
});
goog.object.set(G__38482_41138,G__38483_41139,G__38484_41140);

goog.object.set(clojure.core.matrix.protocols.PLogistic,"object",true);

var G__38486_41142 = clojure.core.matrix.protocols.logistic;
var G__38487_41143 = "object";
var G__38488_41144 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.logistic_fn);
});
goog.object.set(G__38486_41142,G__38487_41143,G__38488_41144);
goog.object.set(clojure.core.matrix.protocols.PLogisticMutable,"object",true);

var G__38489_41145 = clojure.core.matrix.protocols.logistic_BANG_;
var G__38490_41146 = "object";
var G__38491_41147 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.logistic_fn);
});
goog.object.set(G__38489_41145,G__38490_41146,G__38491_41147);
goog.object.set(clojure.core.matrix.protocols.PSoftplus,"number",true);

var G__38492_41152 = clojure.core.matrix.protocols.softplus;
var G__38493_41153 = "number";
var G__38494_41154 = (function (m){
var et = (function (){var G__38495 = m;
return Math.exp(G__38495);
})();
var G__38496 = (1.0 + et);
return Math.log(G__38496);
});
goog.object.set(G__38492_41152,G__38493_41153,G__38494_41154);

goog.object.set(clojure.core.matrix.protocols.PSoftplus,"object",true);

var G__38497_41156 = clojure.core.matrix.protocols.softplus;
var G__38498_41157 = "object";
var G__38499_41158 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.softplus_fn);
});
goog.object.set(G__38497_41156,G__38498_41157,G__38499_41158);
goog.object.set(clojure.core.matrix.protocols.PSoftmax,"object",true);

var G__38500_41161 = clojure.core.matrix.protocols.softmax;
var G__38501_41162 = "object";
var G__38502_41163 = (function (m){
var em = clojure.core.matrix.protocols.exp(m);
return clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$2(em,clojure.core.matrix.protocols.element_sum(em));
});
goog.object.set(G__38500_41161,G__38501_41162,G__38502_41163);
goog.object.set(clojure.core.matrix.protocols.PSoftmaxMutable,"object",true);

var G__38503_41164 = clojure.core.matrix.protocols.softmax_BANG_;
var G__38504_41165 = "object";
var G__38505_41166 = (function (m){
clojure.core.matrix.protocols.exp_BANG_(m);

clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.element_sum(m));

return m;
});
goog.object.set(G__38503_41164,G__38504_41165,G__38505_41166);
goog.object.set(clojure.core.matrix.protocols.PSoftplusMutable,"object",true);

var G__38506_41168 = clojure.core.matrix.protocols.softplus_BANG_;
var G__38507_41169 = "object";
var G__38508_41170 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.softplus_fn);
});
goog.object.set(G__38506_41168,G__38507_41169,G__38508_41170);
goog.object.set(clojure.core.matrix.protocols.PReLU,"number",true);

var G__38509_41171 = clojure.core.matrix.protocols.relu;
var G__38510_41172 = "number";
var G__38511_41173 = (function (m){
var G__38512 = 0.0;
var G__38513 = m;
return Math.max(G__38512,G__38513);
});
goog.object.set(G__38509_41171,G__38510_41172,G__38511_41173);

goog.object.set(clojure.core.matrix.protocols.PReLU,"object",true);

var G__38514_41175 = clojure.core.matrix.protocols.relu;
var G__38515_41176 = "object";
var G__38516_41177 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.relu_fn);
});
goog.object.set(G__38514_41175,G__38515_41176,G__38516_41177);
goog.object.set(clojure.core.matrix.protocols.PReLUMutable,"object",true);

var G__38517_41179 = clojure.core.matrix.protocols.relu_BANG_;
var G__38518_41180 = "object";
var G__38519_41181 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.relu_fn);
});
goog.object.set(G__38517_41179,G__38518_41180,G__38519_41181);
goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"number",true);

var G__38528_41183 = clojure.core.matrix.protocols.abs;
var G__38529_41184 = "number";
var G__38530_41185 = (function (m){
var G__38531 = m;
return Math.abs(G__38531);
});
goog.object.set(G__38528_41183,G__38529_41184,G__38530_41185);

var G__38532_41186 = clojure.core.matrix.protocols.acos;
var G__38533_41187 = "number";
var G__38534_41188 = (function (m){
var G__38535 = m;
return Math.acos(G__38535);
});
goog.object.set(G__38532_41186,G__38533_41187,G__38534_41188);

var G__38536_41190 = clojure.core.matrix.protocols.asin;
var G__38537_41191 = "number";
var G__38538_41192 = (function (m){
var G__38539 = m;
return Math.asin(G__38539);
});
goog.object.set(G__38536_41190,G__38537_41191,G__38538_41192);

var G__38540_41193 = clojure.core.matrix.protocols.atan;
var G__38541_41194 = "number";
var G__38542_41195 = (function (m){
var G__38543 = m;
return Math.atan(G__38543);
});
goog.object.set(G__38540_41193,G__38541_41194,G__38542_41195);

var G__38544_41196 = clojure.core.matrix.protocols.cbrt;
var G__38545_41197 = "number";
var G__38546_41198 = (function (m){
var G__38547 = m;
return Math.cbrt(G__38547);
});
goog.object.set(G__38544_41196,G__38545_41197,G__38546_41198);

var G__38548_41201 = clojure.core.matrix.protocols.ceil;
var G__38549_41202 = "number";
var G__38550_41203 = (function (m){
var G__38551 = m;
return Math.ceil(G__38551);
});
goog.object.set(G__38548_41201,G__38549_41202,G__38550_41203);

var G__38552_41204 = clojure.core.matrix.protocols.cos;
var G__38553_41205 = "number";
var G__38554_41206 = (function (m){
var G__38555 = m;
return Math.cos(G__38555);
});
goog.object.set(G__38552_41204,G__38553_41205,G__38554_41206);

var G__38556_41207 = clojure.core.matrix.protocols.cosh;
var G__38557_41208 = "number";
var G__38558_41209 = (function (m){
var G__38559 = m;
return Math.cosh(G__38559);
});
goog.object.set(G__38556_41207,G__38557_41208,G__38558_41209);

var G__38560_41210 = clojure.core.matrix.protocols.exp;
var G__38561_41211 = "number";
var G__38562_41212 = (function (m){
var G__38563 = m;
return Math.exp(G__38563);
});
goog.object.set(G__38560_41210,G__38561_41211,G__38562_41212);

var G__38564_41214 = clojure.core.matrix.protocols.floor;
var G__38565_41215 = "number";
var G__38566_41216 = (function (m){
var G__38567 = m;
return Math.floor(G__38567);
});
goog.object.set(G__38564_41214,G__38565_41215,G__38566_41216);

var G__38568_41217 = clojure.core.matrix.protocols.log;
var G__38569_41218 = "number";
var G__38570_41219 = (function (m){
var G__38571 = m;
return Math.log(G__38571);
});
goog.object.set(G__38568_41217,G__38569_41218,G__38570_41219);

var G__38572_41220 = clojure.core.matrix.protocols.log10;
var G__38573_41221 = "number";
var G__38574_41222 = (function (m){
var G__38575 = m;
return Math.log10(G__38575);
});
goog.object.set(G__38572_41220,G__38573_41221,G__38574_41222);

var G__38576_41224 = clojure.core.matrix.protocols.round;
var G__38577_41225 = "number";
var G__38578_41226 = (function (m){
var G__38579 = m;
return Math.rint(G__38579);
});
goog.object.set(G__38576_41224,G__38577_41225,G__38578_41226);

var G__38580_41228 = clojure.core.matrix.protocols.signum;
var G__38581_41229 = "number";
var G__38582_41230 = (function (m){
var G__38583 = m;
return Math.sign(G__38583);
});
goog.object.set(G__38580_41228,G__38581_41229,G__38582_41230);

var G__38584_41231 = clojure.core.matrix.protocols.sin;
var G__38585_41232 = "number";
var G__38586_41233 = (function (m){
var G__38587 = m;
return Math.sin(G__38587);
});
goog.object.set(G__38584_41231,G__38585_41232,G__38586_41233);

var G__38588_41235 = clojure.core.matrix.protocols.sinh;
var G__38589_41236 = "number";
var G__38590_41237 = (function (m){
var G__38591 = m;
return Math.sinh(G__38591);
});
goog.object.set(G__38588_41235,G__38589_41236,G__38590_41237);

var G__38592_41238 = clojure.core.matrix.protocols.sqrt;
var G__38593_41239 = "number";
var G__38594_41240 = (function (m){
var G__38595 = m;
return Math.sqrt(G__38595);
});
goog.object.set(G__38592_41238,G__38593_41239,G__38594_41240);

var G__38596_41241 = clojure.core.matrix.protocols.tan;
var G__38597_41242 = "number";
var G__38598_41243 = (function (m){
var G__38599 = m;
return Math.tan(G__38599);
});
goog.object.set(G__38596_41241,G__38597_41242,G__38598_41243);

var G__38600_41245 = clojure.core.matrix.protocols.tanh;
var G__38601_41246 = "number";
var G__38602_41247 = (function (m){
var G__38603 = m;
return Math.tanh(G__38603);
});
goog.object.set(G__38600_41245,G__38601_41246,G__38602_41247);

var G__38604_41248 = clojure.core.matrix.protocols.to_degrees;
var G__38605_41249 = "number";
var G__38606_41250 = (function (m){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(m);
});
goog.object.set(G__38604_41248,G__38605_41249,G__38606_41250);

var G__38607_41252 = clojure.core.matrix.protocols.to_radians;
var G__38608_41253 = "number";
var G__38609_41254 = (function (m){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(m);
});
goog.object.set(G__38607_41252,G__38608_41253,G__38609_41254);

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"object",true);

var G__38610_41255 = clojure.core.matrix.protocols.abs;
var G__38611_41256 = "object";
var G__38612_41257 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38613 = p1__36623__36624__auto__;
return Math.abs(G__38613);
}));
});
goog.object.set(G__38610_41255,G__38611_41256,G__38612_41257);

var G__38614_41260 = clojure.core.matrix.protocols.acos;
var G__38615_41261 = "object";
var G__38616_41262 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38617 = p1__36623__36624__auto__;
return Math.acos(G__38617);
}));
});
goog.object.set(G__38614_41260,G__38615_41261,G__38616_41262);

var G__38618_41264 = clojure.core.matrix.protocols.asin;
var G__38619_41265 = "object";
var G__38620_41266 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38621 = p1__36623__36624__auto__;
return Math.asin(G__38621);
}));
});
goog.object.set(G__38618_41264,G__38619_41265,G__38620_41266);

var G__38622_41267 = clojure.core.matrix.protocols.atan;
var G__38623_41268 = "object";
var G__38624_41269 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38625 = p1__36623__36624__auto__;
return Math.atan(G__38625);
}));
});
goog.object.set(G__38622_41267,G__38623_41268,G__38624_41269);

var G__38626_41271 = clojure.core.matrix.protocols.cbrt;
var G__38627_41272 = "object";
var G__38628_41273 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38629 = p1__36623__36624__auto__;
return Math.cbrt(G__38629);
}));
});
goog.object.set(G__38626_41271,G__38627_41272,G__38628_41273);

var G__38630_41275 = clojure.core.matrix.protocols.ceil;
var G__38631_41276 = "object";
var G__38632_41277 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38633 = p1__36623__36624__auto__;
return Math.ceil(G__38633);
}));
});
goog.object.set(G__38630_41275,G__38631_41276,G__38632_41277);

var G__38634_41279 = clojure.core.matrix.protocols.cos;
var G__38635_41280 = "object";
var G__38636_41281 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38637 = p1__36623__36624__auto__;
return Math.cos(G__38637);
}));
});
goog.object.set(G__38634_41279,G__38635_41280,G__38636_41281);

var G__38638_41283 = clojure.core.matrix.protocols.cosh;
var G__38639_41284 = "object";
var G__38640_41285 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38641 = p1__36623__36624__auto__;
return Math.cosh(G__38641);
}));
});
goog.object.set(G__38638_41283,G__38639_41284,G__38640_41285);

var G__38642_41287 = clojure.core.matrix.protocols.exp;
var G__38643_41288 = "object";
var G__38644_41289 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38645 = p1__36623__36624__auto__;
return Math.exp(G__38645);
}));
});
goog.object.set(G__38642_41287,G__38643_41288,G__38644_41289);

var G__38646_41290 = clojure.core.matrix.protocols.floor;
var G__38647_41291 = "object";
var G__38648_41292 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38649 = p1__36623__36624__auto__;
return Math.floor(G__38649);
}));
});
goog.object.set(G__38646_41290,G__38647_41291,G__38648_41292);

var G__38650_41294 = clojure.core.matrix.protocols.log;
var G__38651_41295 = "object";
var G__38652_41296 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38653 = p1__36623__36624__auto__;
return Math.log(G__38653);
}));
});
goog.object.set(G__38650_41294,G__38651_41295,G__38652_41296);

var G__38654_41298 = clojure.core.matrix.protocols.log10;
var G__38655_41299 = "object";
var G__38656_41300 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38657 = p1__36623__36624__auto__;
return Math.log10(G__38657);
}));
});
goog.object.set(G__38654_41298,G__38655_41299,G__38656_41300);

var G__38658_41301 = clojure.core.matrix.protocols.round;
var G__38659_41302 = "object";
var G__38660_41303 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38661 = p1__36623__36624__auto__;
return Math.rint(G__38661);
}));
});
goog.object.set(G__38658_41301,G__38659_41302,G__38660_41303);

var G__38662_41307 = clojure.core.matrix.protocols.signum;
var G__38663_41308 = "object";
var G__38664_41309 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38665 = p1__36623__36624__auto__;
return Math.sign(G__38665);
}));
});
goog.object.set(G__38662_41307,G__38663_41308,G__38664_41309);

var G__38666_41310 = clojure.core.matrix.protocols.sin;
var G__38667_41311 = "object";
var G__38668_41312 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38669 = p1__36623__36624__auto__;
return Math.sin(G__38669);
}));
});
goog.object.set(G__38666_41310,G__38667_41311,G__38668_41312);

var G__38670_41314 = clojure.core.matrix.protocols.sinh;
var G__38671_41315 = "object";
var G__38672_41316 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38673 = p1__36623__36624__auto__;
return Math.sinh(G__38673);
}));
});
goog.object.set(G__38670_41314,G__38671_41315,G__38672_41316);

var G__38674_41317 = clojure.core.matrix.protocols.sqrt;
var G__38675_41318 = "object";
var G__38676_41319 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38677 = p1__36623__36624__auto__;
return Math.sqrt(G__38677);
}));
});
goog.object.set(G__38674_41317,G__38675_41318,G__38676_41319);

var G__38678_41321 = clojure.core.matrix.protocols.tan;
var G__38679_41322 = "object";
var G__38680_41323 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38681 = p1__36623__36624__auto__;
return Math.tan(G__38681);
}));
});
goog.object.set(G__38678_41321,G__38679_41322,G__38680_41323);

var G__38682_41325 = clojure.core.matrix.protocols.tanh;
var G__38683_41326 = "object";
var G__38684_41327 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
var G__38685 = p1__36623__36624__auto__;
return Math.tanh(G__38685);
}));
});
goog.object.set(G__38682_41325,G__38683_41326,G__38684_41327);

var G__38686_41331 = clojure.core.matrix.protocols.to_degrees;
var G__38687_41332 = "object";
var G__38688_41333 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__36623__36624__auto__);
}));
});
goog.object.set(G__38686_41331,G__38687_41332,G__38688_41333);

var G__38689_41338 = clojure.core.matrix.protocols.to_radians;
var G__38690_41339 = "object";
var G__38691_41340 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36623__36624__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__36623__36624__auto__);
}));
});
goog.object.set(G__38689_41338,G__38690_41339,G__38691_41340);

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"array",true);

var G__38692_41343 = clojure.core.matrix.protocols.abs;
var G__38693_41344 = "array";
var G__38694_41345 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38695 = p1__36625__36626__auto__;
return Math.abs(G__38695);
}));
});
goog.object.set(G__38692_41343,G__38693_41344,G__38694_41345);

var G__38696_41350 = clojure.core.matrix.protocols.acos;
var G__38697_41351 = "array";
var G__38698_41352 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38699 = p1__36625__36626__auto__;
return Math.acos(G__38699);
}));
});
goog.object.set(G__38696_41350,G__38697_41351,G__38698_41352);

var G__38700_41354 = clojure.core.matrix.protocols.asin;
var G__38701_41355 = "array";
var G__38702_41356 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38703 = p1__36625__36626__auto__;
return Math.asin(G__38703);
}));
});
goog.object.set(G__38700_41354,G__38701_41355,G__38702_41356);

var G__38704_41364 = clojure.core.matrix.protocols.atan;
var G__38705_41365 = "array";
var G__38706_41366 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38707 = p1__36625__36626__auto__;
return Math.atan(G__38707);
}));
});
goog.object.set(G__38704_41364,G__38705_41365,G__38706_41366);

var G__38708_41370 = clojure.core.matrix.protocols.cbrt;
var G__38709_41371 = "array";
var G__38710_41372 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38711 = p1__36625__36626__auto__;
return Math.cbrt(G__38711);
}));
});
goog.object.set(G__38708_41370,G__38709_41371,G__38710_41372);

var G__38712_41377 = clojure.core.matrix.protocols.ceil;
var G__38713_41378 = "array";
var G__38714_41379 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38715 = p1__36625__36626__auto__;
return Math.ceil(G__38715);
}));
});
goog.object.set(G__38712_41377,G__38713_41378,G__38714_41379);

var G__38716_41380 = clojure.core.matrix.protocols.cos;
var G__38717_41381 = "array";
var G__38718_41382 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38719 = p1__36625__36626__auto__;
return Math.cos(G__38719);
}));
});
goog.object.set(G__38716_41380,G__38717_41381,G__38718_41382);

var G__38720_41384 = clojure.core.matrix.protocols.cosh;
var G__38721_41385 = "array";
var G__38722_41386 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38723 = p1__36625__36626__auto__;
return Math.cosh(G__38723);
}));
});
goog.object.set(G__38720_41384,G__38721_41385,G__38722_41386);

var G__38724_41387 = clojure.core.matrix.protocols.exp;
var G__38725_41388 = "array";
var G__38726_41389 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38727 = p1__36625__36626__auto__;
return Math.exp(G__38727);
}));
});
goog.object.set(G__38724_41387,G__38725_41388,G__38726_41389);

var G__38728_41391 = clojure.core.matrix.protocols.floor;
var G__38729_41392 = "array";
var G__38730_41393 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38731 = p1__36625__36626__auto__;
return Math.floor(G__38731);
}));
});
goog.object.set(G__38728_41391,G__38729_41392,G__38730_41393);

var G__38732_41395 = clojure.core.matrix.protocols.log;
var G__38733_41396 = "array";
var G__38734_41397 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38735 = p1__36625__36626__auto__;
return Math.log(G__38735);
}));
});
goog.object.set(G__38732_41395,G__38733_41396,G__38734_41397);

var G__38736_41399 = clojure.core.matrix.protocols.log10;
var G__38737_41400 = "array";
var G__38738_41401 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38739 = p1__36625__36626__auto__;
return Math.log10(G__38739);
}));
});
goog.object.set(G__38736_41399,G__38737_41400,G__38738_41401);

var G__38740_41403 = clojure.core.matrix.protocols.round;
var G__38741_41404 = "array";
var G__38742_41405 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38743 = p1__36625__36626__auto__;
return Math.rint(G__38743);
}));
});
goog.object.set(G__38740_41403,G__38741_41404,G__38742_41405);

var G__38744_41407 = clojure.core.matrix.protocols.signum;
var G__38745_41408 = "array";
var G__38746_41409 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38747 = p1__36625__36626__auto__;
return Math.sign(G__38747);
}));
});
goog.object.set(G__38744_41407,G__38745_41408,G__38746_41409);

var G__38748_41410 = clojure.core.matrix.protocols.sin;
var G__38749_41411 = "array";
var G__38750_41412 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38751 = p1__36625__36626__auto__;
return Math.sin(G__38751);
}));
});
goog.object.set(G__38748_41410,G__38749_41411,G__38750_41412);

var G__38752_41414 = clojure.core.matrix.protocols.sinh;
var G__38753_41415 = "array";
var G__38754_41416 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38755 = p1__36625__36626__auto__;
return Math.sinh(G__38755);
}));
});
goog.object.set(G__38752_41414,G__38753_41415,G__38754_41416);

var G__38756_41418 = clojure.core.matrix.protocols.sqrt;
var G__38757_41419 = "array";
var G__38758_41420 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38759 = p1__36625__36626__auto__;
return Math.sqrt(G__38759);
}));
});
goog.object.set(G__38756_41418,G__38757_41419,G__38758_41420);

var G__38760_41422 = clojure.core.matrix.protocols.tan;
var G__38761_41423 = "array";
var G__38762_41424 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38763 = p1__36625__36626__auto__;
return Math.tan(G__38763);
}));
});
goog.object.set(G__38760_41422,G__38761_41423,G__38762_41424);

var G__38764_41426 = clojure.core.matrix.protocols.tanh;
var G__38765_41427 = "array";
var G__38766_41428 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
var G__38767 = p1__36625__36626__auto__;
return Math.tanh(G__38767);
}));
});
goog.object.set(G__38764_41426,G__38765_41427,G__38766_41428);

var G__38768_41429 = clojure.core.matrix.protocols.to_degrees;
var G__38769_41430 = "array";
var G__38770_41431 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__36625__36626__auto__);
}));
});
goog.object.set(G__38768_41429,G__38769_41430,G__38770_41431);

var G__38771_41433 = clojure.core.matrix.protocols.to_radians;
var G__38772_41434 = "array";
var G__38773_41435 = (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36625__36626__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__36625__36626__auto__);
}));
});
goog.object.set(G__38771_41433,G__38772_41434,G__38773_41435);
goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"number",true);

var G__38774_41437 = clojure.core.matrix.protocols.abs_BANG_;
var G__38775_41438 = "number";
var G__38776_41439 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38774_41437,G__38775_41438,G__38776_41439);

var G__38777_41441 = clojure.core.matrix.protocols.acos_BANG_;
var G__38778_41442 = "number";
var G__38779_41443 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38777_41441,G__38778_41442,G__38779_41443);

var G__38780_41444 = clojure.core.matrix.protocols.asin_BANG_;
var G__38781_41445 = "number";
var G__38782_41446 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38780_41444,G__38781_41445,G__38782_41446);

var G__38783_41448 = clojure.core.matrix.protocols.atan_BANG_;
var G__38784_41449 = "number";
var G__38785_41450 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38783_41448,G__38784_41449,G__38785_41450);

var G__38786_41451 = clojure.core.matrix.protocols.cbrt_BANG_;
var G__38787_41452 = "number";
var G__38788_41453 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38786_41451,G__38787_41452,G__38788_41453);

var G__38789_41455 = clojure.core.matrix.protocols.ceil_BANG_;
var G__38790_41456 = "number";
var G__38791_41457 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38789_41455,G__38790_41456,G__38791_41457);

var G__38792_41458 = clojure.core.matrix.protocols.cos_BANG_;
var G__38793_41459 = "number";
var G__38794_41460 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38792_41458,G__38793_41459,G__38794_41460);

var G__38795_41462 = clojure.core.matrix.protocols.cosh_BANG_;
var G__38796_41463 = "number";
var G__38797_41464 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38795_41462,G__38796_41463,G__38797_41464);

var G__38798_41466 = clojure.core.matrix.protocols.exp_BANG_;
var G__38799_41467 = "number";
var G__38800_41468 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38798_41466,G__38799_41467,G__38800_41468);

var G__38801_41469 = clojure.core.matrix.protocols.floor_BANG_;
var G__38802_41470 = "number";
var G__38803_41471 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38801_41469,G__38802_41470,G__38803_41471);

var G__38804_41473 = clojure.core.matrix.protocols.log_BANG_;
var G__38805_41474 = "number";
var G__38806_41475 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38804_41473,G__38805_41474,G__38806_41475);

var G__38807_41476 = clojure.core.matrix.protocols.log10_BANG_;
var G__38808_41477 = "number";
var G__38809_41478 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38807_41476,G__38808_41477,G__38809_41478);

var G__38810_41480 = clojure.core.matrix.protocols.round_BANG_;
var G__38811_41481 = "number";
var G__38812_41482 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38810_41480,G__38811_41481,G__38812_41482);

var G__38813_41484 = clojure.core.matrix.protocols.signum_BANG_;
var G__38814_41485 = "number";
var G__38815_41486 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38813_41484,G__38814_41485,G__38815_41486);

var G__38816_41487 = clojure.core.matrix.protocols.sin_BANG_;
var G__38817_41488 = "number";
var G__38818_41489 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38816_41487,G__38817_41488,G__38818_41489);

var G__38819_41491 = clojure.core.matrix.protocols.sinh_BANG_;
var G__38820_41492 = "number";
var G__38821_41493 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38819_41491,G__38820_41492,G__38821_41493);

var G__38822_41494 = clojure.core.matrix.protocols.sqrt_BANG_;
var G__38823_41495 = "number";
var G__38824_41496 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38822_41494,G__38823_41495,G__38824_41496);

var G__38825_41498 = clojure.core.matrix.protocols.tan_BANG_;
var G__38826_41499 = "number";
var G__38827_41500 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38825_41498,G__38826_41499,G__38827_41500);

var G__38828_41501 = clojure.core.matrix.protocols.tanh_BANG_;
var G__38829_41502 = "number";
var G__38830_41503 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38828_41501,G__38829_41502,G__38830_41503);

var G__38831_41505 = clojure.core.matrix.protocols.to_degrees_BANG_;
var G__38832_41506 = "number";
var G__38833_41507 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38831_41505,G__38832_41506,G__38833_41507);

var G__38834_41508 = clojure.core.matrix.protocols.to_radians_BANG_;
var G__38835_41509 = "number";
var G__38836_41510 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__38834_41508,G__38835_41509,G__38836_41510);

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"object",true);

var G__38837_41512 = clojure.core.matrix.protocols.abs_BANG_;
var G__38838_41513 = "object";
var G__38839_41514 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38840 = p1__36627__36628__auto__;
return Math.abs(G__38840);
}));
});
goog.object.set(G__38837_41512,G__38838_41513,G__38839_41514);

var G__38841_41516 = clojure.core.matrix.protocols.acos_BANG_;
var G__38842_41517 = "object";
var G__38843_41518 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38844 = p1__36627__36628__auto__;
return Math.acos(G__38844);
}));
});
goog.object.set(G__38841_41516,G__38842_41517,G__38843_41518);

var G__38845_41520 = clojure.core.matrix.protocols.asin_BANG_;
var G__38846_41521 = "object";
var G__38847_41522 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38848 = p1__36627__36628__auto__;
return Math.asin(G__38848);
}));
});
goog.object.set(G__38845_41520,G__38846_41521,G__38847_41522);

var G__38849_41523 = clojure.core.matrix.protocols.atan_BANG_;
var G__38850_41524 = "object";
var G__38851_41525 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38852 = p1__36627__36628__auto__;
return Math.atan(G__38852);
}));
});
goog.object.set(G__38849_41523,G__38850_41524,G__38851_41525);

var G__38853_41527 = clojure.core.matrix.protocols.cbrt_BANG_;
var G__38854_41528 = "object";
var G__38855_41529 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38856 = p1__36627__36628__auto__;
return Math.cbrt(G__38856);
}));
});
goog.object.set(G__38853_41527,G__38854_41528,G__38855_41529);

var G__38857_41531 = clojure.core.matrix.protocols.ceil_BANG_;
var G__38858_41532 = "object";
var G__38859_41533 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38860 = p1__36627__36628__auto__;
return Math.ceil(G__38860);
}));
});
goog.object.set(G__38857_41531,G__38858_41532,G__38859_41533);

var G__38861_41535 = clojure.core.matrix.protocols.cos_BANG_;
var G__38862_41536 = "object";
var G__38863_41537 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38864 = p1__36627__36628__auto__;
return Math.cos(G__38864);
}));
});
goog.object.set(G__38861_41535,G__38862_41536,G__38863_41537);

var G__38865_41539 = clojure.core.matrix.protocols.cosh_BANG_;
var G__38866_41540 = "object";
var G__38867_41541 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38868 = p1__36627__36628__auto__;
return Math.cosh(G__38868);
}));
});
goog.object.set(G__38865_41539,G__38866_41540,G__38867_41541);

var G__38869_41543 = clojure.core.matrix.protocols.exp_BANG_;
var G__38870_41544 = "object";
var G__38871_41545 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38872 = p1__36627__36628__auto__;
return Math.exp(G__38872);
}));
});
goog.object.set(G__38869_41543,G__38870_41544,G__38871_41545);

var G__38873_41546 = clojure.core.matrix.protocols.floor_BANG_;
var G__38874_41547 = "object";
var G__38875_41548 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38876 = p1__36627__36628__auto__;
return Math.floor(G__38876);
}));
});
goog.object.set(G__38873_41546,G__38874_41547,G__38875_41548);

var G__38877_41550 = clojure.core.matrix.protocols.log_BANG_;
var G__38878_41551 = "object";
var G__38879_41552 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38880 = p1__36627__36628__auto__;
return Math.log(G__38880);
}));
});
goog.object.set(G__38877_41550,G__38878_41551,G__38879_41552);

var G__38881_41554 = clojure.core.matrix.protocols.log10_BANG_;
var G__38882_41555 = "object";
var G__38883_41556 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38884 = p1__36627__36628__auto__;
return Math.log10(G__38884);
}));
});
goog.object.set(G__38881_41554,G__38882_41555,G__38883_41556);

var G__38885_41558 = clojure.core.matrix.protocols.round_BANG_;
var G__38886_41559 = "object";
var G__38887_41560 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38888 = p1__36627__36628__auto__;
return Math.rint(G__38888);
}));
});
goog.object.set(G__38885_41558,G__38886_41559,G__38887_41560);

var G__38889_41562 = clojure.core.matrix.protocols.signum_BANG_;
var G__38890_41563 = "object";
var G__38891_41564 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38892 = p1__36627__36628__auto__;
return Math.sign(G__38892);
}));
});
goog.object.set(G__38889_41562,G__38890_41563,G__38891_41564);

var G__38893_41566 = clojure.core.matrix.protocols.sin_BANG_;
var G__38894_41567 = "object";
var G__38895_41568 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38896 = p1__36627__36628__auto__;
return Math.sin(G__38896);
}));
});
goog.object.set(G__38893_41566,G__38894_41567,G__38895_41568);

var G__38897_41570 = clojure.core.matrix.protocols.sinh_BANG_;
var G__38898_41571 = "object";
var G__38899_41572 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38900 = p1__36627__36628__auto__;
return Math.sinh(G__38900);
}));
});
goog.object.set(G__38897_41570,G__38898_41571,G__38899_41572);

var G__38901_41573 = clojure.core.matrix.protocols.sqrt_BANG_;
var G__38902_41574 = "object";
var G__38903_41575 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38904 = p1__36627__36628__auto__;
return Math.sqrt(G__38904);
}));
});
goog.object.set(G__38901_41573,G__38902_41574,G__38903_41575);

var G__38905_41577 = clojure.core.matrix.protocols.tan_BANG_;
var G__38906_41578 = "object";
var G__38907_41579 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38908 = p1__36627__36628__auto__;
return Math.tan(G__38908);
}));
});
goog.object.set(G__38905_41577,G__38906_41578,G__38907_41579);

var G__38909_41581 = clojure.core.matrix.protocols.tanh_BANG_;
var G__38910_41582 = "object";
var G__38911_41583 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
var G__38912 = p1__36627__36628__auto__;
return Math.tanh(G__38912);
}));
});
goog.object.set(G__38909_41581,G__38910_41582,G__38911_41583);

var G__38913_41585 = clojure.core.matrix.protocols.to_degrees_BANG_;
var G__38914_41586 = "object";
var G__38915_41587 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__36627__36628__auto__);
}));
});
goog.object.set(G__38913_41585,G__38914_41586,G__38915_41587);

var G__38916_41589 = clojure.core.matrix.protocols.to_radians_BANG_;
var G__38917_41590 = "object";
var G__38918_41591 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36627__36628__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__36627__36628__auto__);
}));
});
goog.object.set(G__38916_41589,G__38917_41590,G__38918_41591);

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"array",true);

var G__38919_41593 = clojure.core.matrix.protocols.abs_BANG_;
var G__38920_41594 = "array";
var G__38921_41595 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38922 = p1__36629__36630__auto__;
return Math.abs(G__38922);
}));
});
goog.object.set(G__38919_41593,G__38920_41594,G__38921_41595);

var G__38923_41596 = clojure.core.matrix.protocols.acos_BANG_;
var G__38924_41597 = "array";
var G__38925_41598 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38926 = p1__36629__36630__auto__;
return Math.acos(G__38926);
}));
});
goog.object.set(G__38923_41596,G__38924_41597,G__38925_41598);

var G__38927_41600 = clojure.core.matrix.protocols.asin_BANG_;
var G__38928_41601 = "array";
var G__38929_41602 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38930 = p1__36629__36630__auto__;
return Math.asin(G__38930);
}));
});
goog.object.set(G__38927_41600,G__38928_41601,G__38929_41602);

var G__38931_41604 = clojure.core.matrix.protocols.atan_BANG_;
var G__38932_41605 = "array";
var G__38933_41606 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38934 = p1__36629__36630__auto__;
return Math.atan(G__38934);
}));
});
goog.object.set(G__38931_41604,G__38932_41605,G__38933_41606);

var G__38935_41608 = clojure.core.matrix.protocols.cbrt_BANG_;
var G__38936_41609 = "array";
var G__38937_41610 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38938 = p1__36629__36630__auto__;
return Math.cbrt(G__38938);
}));
});
goog.object.set(G__38935_41608,G__38936_41609,G__38937_41610);

var G__38939_41612 = clojure.core.matrix.protocols.ceil_BANG_;
var G__38940_41613 = "array";
var G__38941_41614 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38942 = p1__36629__36630__auto__;
return Math.ceil(G__38942);
}));
});
goog.object.set(G__38939_41612,G__38940_41613,G__38941_41614);

var G__38943_41616 = clojure.core.matrix.protocols.cos_BANG_;
var G__38944_41617 = "array";
var G__38945_41618 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38946 = p1__36629__36630__auto__;
return Math.cos(G__38946);
}));
});
goog.object.set(G__38943_41616,G__38944_41617,G__38945_41618);

var G__38947_41619 = clojure.core.matrix.protocols.cosh_BANG_;
var G__38948_41620 = "array";
var G__38949_41621 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38950 = p1__36629__36630__auto__;
return Math.cosh(G__38950);
}));
});
goog.object.set(G__38947_41619,G__38948_41620,G__38949_41621);

var G__38951_41623 = clojure.core.matrix.protocols.exp_BANG_;
var G__38952_41624 = "array";
var G__38953_41625 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38954 = p1__36629__36630__auto__;
return Math.exp(G__38954);
}));
});
goog.object.set(G__38951_41623,G__38952_41624,G__38953_41625);

var G__38955_41627 = clojure.core.matrix.protocols.floor_BANG_;
var G__38956_41628 = "array";
var G__38957_41629 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38958 = p1__36629__36630__auto__;
return Math.floor(G__38958);
}));
});
goog.object.set(G__38955_41627,G__38956_41628,G__38957_41629);

var G__38959_41631 = clojure.core.matrix.protocols.log_BANG_;
var G__38960_41632 = "array";
var G__38961_41633 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38962 = p1__36629__36630__auto__;
return Math.log(G__38962);
}));
});
goog.object.set(G__38959_41631,G__38960_41632,G__38961_41633);

var G__38963_41635 = clojure.core.matrix.protocols.log10_BANG_;
var G__38964_41636 = "array";
var G__38965_41637 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38966 = p1__36629__36630__auto__;
return Math.log10(G__38966);
}));
});
goog.object.set(G__38963_41635,G__38964_41636,G__38965_41637);

var G__38967_41638 = clojure.core.matrix.protocols.round_BANG_;
var G__38968_41639 = "array";
var G__38969_41640 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38970 = p1__36629__36630__auto__;
return Math.rint(G__38970);
}));
});
goog.object.set(G__38967_41638,G__38968_41639,G__38969_41640);

var G__38971_41642 = clojure.core.matrix.protocols.signum_BANG_;
var G__38972_41643 = "array";
var G__38973_41644 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38974 = p1__36629__36630__auto__;
return Math.sign(G__38974);
}));
});
goog.object.set(G__38971_41642,G__38972_41643,G__38973_41644);

var G__38975_41646 = clojure.core.matrix.protocols.sin_BANG_;
var G__38976_41647 = "array";
var G__38977_41648 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38978 = p1__36629__36630__auto__;
return Math.sin(G__38978);
}));
});
goog.object.set(G__38975_41646,G__38976_41647,G__38977_41648);

var G__38979_41649 = clojure.core.matrix.protocols.sinh_BANG_;
var G__38980_41650 = "array";
var G__38981_41651 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38982 = p1__36629__36630__auto__;
return Math.sinh(G__38982);
}));
});
goog.object.set(G__38979_41649,G__38980_41650,G__38981_41651);

var G__38983_41653 = clojure.core.matrix.protocols.sqrt_BANG_;
var G__38984_41654 = "array";
var G__38985_41655 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38986 = p1__36629__36630__auto__;
return Math.sqrt(G__38986);
}));
});
goog.object.set(G__38983_41653,G__38984_41654,G__38985_41655);

var G__38987_41657 = clojure.core.matrix.protocols.tan_BANG_;
var G__38988_41658 = "array";
var G__38989_41659 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38990 = p1__36629__36630__auto__;
return Math.tan(G__38990);
}));
});
goog.object.set(G__38987_41657,G__38988_41658,G__38989_41659);

var G__38991_41660 = clojure.core.matrix.protocols.tanh_BANG_;
var G__38992_41661 = "array";
var G__38993_41662 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
var G__38994 = p1__36629__36630__auto__;
return Math.tanh(G__38994);
}));
});
goog.object.set(G__38991_41660,G__38992_41661,G__38993_41662);

var G__38995_41664 = clojure.core.matrix.protocols.to_degrees_BANG_;
var G__38996_41665 = "array";
var G__38997_41666 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__36629__36630__auto__);
}));
});
goog.object.set(G__38995_41664,G__38996_41665,G__38997_41666);

var G__38998_41668 = clojure.core.matrix.protocols.to_radians_BANG_;
var G__38999_41669 = "array";
var G__39000_41670 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,(function (p1__36629__36630__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__36629__36630__auto__);
}));
});
goog.object.set(G__38998_41668,G__38999_41669,G__39000_41670);
goog.object.set(clojure.core.matrix.protocols.PMatrixSubComponents,"object",true);

var G__39001_41672 = clojure.core.matrix.protocols.main_diagonal;
var G__39002_41673 = "object";
var G__39003_41674 = (function (m){
var sh = clojure.core.matrix.protocols.get_shape(m);
var rank = cljs.core.count(sh);
var dims = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,sh);
var diag_vals = (function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$defaults$iter__39004(s__39005){
return (new cljs.core.LazySeq(null,(function (){
var s__39005__$1 = s__39005;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39005__$1);
if(temp__5735__auto__){
var s__39005__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39005__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39005__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39007 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39006 = (0);
while(true){
if((i__39006 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39006);
cljs.core.chunk_append(b__39007,clojure.core.matrix.protocols.get_nd(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rank,i)));

var G__41677 = (i__39006 + (1));
i__39006 = G__41677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39007),clojure$core$matrix$impl$defaults$iter__39004(cljs.core.chunk_rest(s__39005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39007),null);
}
} else {
var i = cljs.core.first(s__39005__$2);
return cljs.core.cons(clojure.core.matrix.protocols.get_nd(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rank,i)),clojure$core$matrix$impl$defaults$iter__39004(cljs.core.rest(s__39005__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims));
})();
return clojure.core.matrix.implementations.construct(m,diag_vals);
});
goog.object.set(G__39001_41672,G__39002_41673,G__39003_41674);
goog.object.set(clojure.core.matrix.protocols.PSpecialisedConstructors,"object",true);

var G__39008_41679 = clojure.core.matrix.protocols.identity_matrix;
var G__39009_41680 = "object";
var G__39010_41681 = (function (m,dims){
return clojure.core.matrix.protocols.diagonal_matrix(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,1.0));
});
goog.object.set(G__39008_41679,G__39009_41680,G__39010_41681);

var G__39011_41683 = clojure.core.matrix.protocols.diagonal_matrix;
var G__39012_41684 = "object";
var G__39013_41685 = (function (m,diagonal_values){
var dims = cljs.core.count(diagonal_values);
var diagonal_values__$1 = clojure.core.matrix.protocols.convert_to_nested_vectors(diagonal_values);
var zs = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,0.0));
var dm = cljs.core.vec((function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$defaults$iter__39014(s__39015){
return (new cljs.core.LazySeq(null,(function (){
var s__39015__$1 = s__39015;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39015__$1);
if(temp__5735__auto__){
var s__39015__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39015__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39015__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39017 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39016 = (0);
while(true){
if((i__39016 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39016);
cljs.core.chunk_append(b__39017,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zs,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(diagonal_values__$1,i)));

var G__41687 = (i__39016 + (1));
i__39016 = G__41687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39017),clojure$core$matrix$impl$defaults$iter__39014(cljs.core.chunk_rest(s__39015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39017),null);
}
} else {
var i = cljs.core.first(s__39015__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zs,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(diagonal_values__$1,i)),clojure$core$matrix$impl$defaults$iter__39014(cljs.core.rest(s__39015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims));
})());
return clojure.core.matrix.protocols.coerce_param(m,dm);
});
goog.object.set(G__39011_41683,G__39012_41684,G__39013_41685);
goog.object.set(clojure.core.matrix.protocols.PPermutationMatrix,"object",true);

var G__39018_41690 = clojure.core.matrix.protocols.permutation_matrix;
var G__39019_41691 = "object";
var G__39020_41692 = (function (m,permutation){
var v = clojure.core.matrix.protocols.convert_to_nested_vectors(permutation);
var n = cljs.core.count(v);
var r = clojure.core.matrix.protocols.new_matrix(m,n,n);
var r__$1 = (cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(r))?r:clojure.core.matrix.impl.defaults.construct_mutable_matrix(r));
var n__4666__auto___41694 = n;
var i_41695 = (0);
while(true){
if((i_41695 < n__4666__auto___41694)){
clojure.core.matrix.protocols.set_2d_BANG_(r__$1,i_41695,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i_41695) : v.call(null,i_41695)),1.0);

var G__41697 = (i_41695 + (1));
i_41695 = G__41697;
continue;
} else {
}
break;
}

return r__$1;
});
goog.object.set(G__39018_41690,G__39019_41691,G__39020_41692);
goog.object.set(clojure.core.matrix.protocols.PBlockDiagonalMatrix,"object",true);

var G__39021_41698 = clojure.core.matrix.protocols.block_diagonal_matrix;
var G__39022_41699 = "object";
var G__39023_41700 = (function (m,blocks){
var aux = (function clojure$core$matrix$impl$defaults$aux(acc,blocks__$1){
if(cljs.core.empty_QMARK_(blocks__$1)){
return acc;
} else {
var acc_dim = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(acc,(0)));
var new_block = (blocks__$1.cljs$core$IFn$_invoke$arity$1 ? blocks__$1.cljs$core$IFn$_invoke$arity$1((0)) : blocks__$1.call(null,(0)));
var new_block_dim = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(new_block,(0)));
var new_dim = (acc_dim + new_block_dim);
var dm = cljs.core.vec((function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$defaults$aux_$_iter__39024(s__39025){
return (new cljs.core.LazySeq(null,(function (){
var s__39025__$1 = s__39025;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39025__$1);
if(temp__5735__auto__){
var s__39025__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39025__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39025__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39027 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39026 = (0);
while(true){
if((i__39026 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39026);
cljs.core.chunk_append(b__39027,(((i < acc_dim))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((acc.cljs$core$IFn$_invoke$arity$1 ? acc.cljs$core$IFn$_invoke$arity$1(i) : acc.call(null,i)),clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,acc_dim),(function (){var G__39028 = (i - acc_dim);
return (new_block.cljs$core$IFn$_invoke$arity$1 ? new_block.cljs$core$IFn$_invoke$arity$1(G__39028) : new_block.call(null,G__39028));
})()))));

var G__41705 = (i__39026 + (1));
i__39026 = G__41705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39027),clojure$core$matrix$impl$defaults$aux_$_iter__39024(cljs.core.chunk_rest(s__39025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39027),null);
}
} else {
var i = cljs.core.first(s__39025__$2);
return cljs.core.cons((((i < acc_dim))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((acc.cljs$core$IFn$_invoke$arity$1 ? acc.cljs$core$IFn$_invoke$arity$1(i) : acc.call(null,i)),clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,acc_dim),(function (){var G__39029 = (i - acc_dim);
return (new_block.cljs$core$IFn$_invoke$arity$1 ? new_block.cljs$core$IFn$_invoke$arity$1(G__39029) : new_block.call(null,G__39029));
})()))),clojure$core$matrix$impl$defaults$aux_$_iter__39024(cljs.core.rest(s__39025__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(new_dim));
})());
return clojure$core$matrix$impl$defaults$aux(dm,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(blocks__$1,(1)));
}
});
return aux(cljs.core.PersistentVector.EMPTY,blocks);
});
goog.object.set(G__39021_41698,G__39022_41699,G__39023_41700);
goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"object",true);

var G__39031_41708 = clojure.core.matrix.protocols.identity_matrix_QMARK_;
var G__39032_41709 = "object";
var G__39033_41710 = (function (m){
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
var G__41711 = (j + (1));
j = G__41711;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__41713 = (j + (1));
j = G__41713;
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
var G__41714 = (i + (1));
i = G__41714;
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
goog.object.set(G__39031_41708,G__39032_41709,G__39033_41710);

var G__39034_41715 = clojure.core.matrix.protocols.zero_matrix_QMARK_;
var G__39035_41716 = "object";
var G__39036_41717 = (function (m){
return cljs.core.every_QMARK_((function (p1__39030_SHARP_){
return ((typeof p1__39030_SHARP_ === 'number') && ((p1__39030_SHARP_ === (0))));
}),clojure.core.matrix.protocols.element_seq(m));
});
goog.object.set(G__39034_41715,G__39035_41716,G__39036_41717);

var G__39037_41718 = clojure.core.matrix.protocols.symmetric_QMARK_;
var G__39038_41719 = "object";
var G__39039_41720 = (function (m){
var G__39040 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__39040) {
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
goog.object.set(G__39037_41718,G__39038_41719,G__39039_41720);

goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"null",true);

var G__39041_41723 = clojure.core.matrix.protocols.identity_matrix_QMARK_;
var G__39042_41724 = "null";
var G__39043_41725 = (function (m){
return false;
});
goog.object.set(G__39041_41723,G__39042_41724,G__39043_41725);

var G__39044_41727 = clojure.core.matrix.protocols.zero_matrix_QMARK_;
var G__39045_41728 = "null";
var G__39046_41729 = (function (m){
return false;
});
goog.object.set(G__39044_41727,G__39045_41728,G__39046_41729);

var G__39047_41730 = clojure.core.matrix.protocols.symmetric_QMARK_;
var G__39048_41731 = "null";
var G__39049_41732 = (function (m){
return true;
});
goog.object.set(G__39047_41730,G__39048_41731,G__39049_41732);
goog.object.set(clojure.core.matrix.protocols.PIndicesAccess,"object",true);

var G__39051_41734 = clojure.core.matrix.protocols.get_indices;
var G__39052_41735 = "object";
var G__39053_41736 = (function (a,indices){
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39050_SHARP_){
return clojure.core.matrix.protocols.get_nd(a,p1__39050_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,indices));
var or__4185__auto__ = ((cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(a)))?clojure.core.matrix.protocols.construct_matrix(a,vals):null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,vals);
}
});
goog.object.set(G__39051_41734,G__39052_41735,G__39053_41736);
goog.object.set(clojure.core.matrix.protocols.PIndicesSetting,"object",true);

var G__39054_41738 = clojure.core.matrix.protocols.set_indices;
var G__39055_41739 = "object";
var G__39056_41740 = (function (a,indices,values){
var indices__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq(clojure.core.matrix.protocols.broadcast(values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(indices__$1)], null)));
var a__$1 = a;
var G__39063 = indices__$1;
var vec__39065 = G__39063;
var seq__39066 = cljs.core.seq(vec__39065);
var first__39067 = cljs.core.first(seq__39066);
var seq__39066__$1 = cljs.core.next(seq__39066);
var id = first__39067;
var idx = seq__39066__$1;
var G__39064 = values__$1;
var vec__39068 = G__39064;
var seq__39069 = cljs.core.seq(vec__39068);
var first__39070 = cljs.core.first(seq__39069);
var seq__39069__$1 = cljs.core.next(seq__39069);
var v = first__39070;
var vs = seq__39069__$1;
var a__$2 = a__$1;
var G__39063__$1 = G__39063;
var G__39064__$1 = G__39064;
while(true){
var a__$3 = a__$2;
var vec__39077 = G__39063__$1;
var seq__39078 = cljs.core.seq(vec__39077);
var first__39079 = cljs.core.first(seq__39078);
var seq__39078__$1 = cljs.core.next(seq__39078);
var id__$1 = first__39079;
var idx__$1 = seq__39078__$1;
var vec__39080 = G__39064__$1;
var seq__39081 = cljs.core.seq(vec__39080);
var first__39082 = cljs.core.first(seq__39081);
var seq__39081__$1 = cljs.core.next(seq__39081);
var v__$1 = first__39082;
var vs__$1 = seq__39081__$1;
if(cljs.core.truth_(id__$1)){
var G__41746 = clojure.core.matrix.protocols.set_nd(a__$3,id__$1,v__$1);
var G__41747 = idx__$1;
var G__41748 = vs__$1;
a__$2 = G__41746;
G__39063__$1 = G__41747;
G__39064__$1 = G__41748;
continue;
} else {
return a__$3;
}
break;
}
});
goog.object.set(G__39054_41738,G__39055_41739,G__39056_41740);

var G__39083_41750 = clojure.core.matrix.protocols.set_indices_BANG_;
var G__39084_41751 = "object";
var G__39085_41752 = (function (a,indices,values){
var indices__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq(clojure.core.matrix.protocols.broadcast(values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(indices__$1)], null)));
var G__39092 = indices__$1;
var vec__39094 = G__39092;
var seq__39095 = cljs.core.seq(vec__39094);
var first__39096 = cljs.core.first(seq__39095);
var seq__39095__$1 = cljs.core.next(seq__39095);
var id = first__39096;
var idx = seq__39095__$1;
var G__39093 = values__$1;
var vec__39097 = G__39093;
var seq__39098 = cljs.core.seq(vec__39097);
var first__39099 = cljs.core.first(seq__39098);
var seq__39098__$1 = cljs.core.next(seq__39098);
var v = first__39099;
var vs = seq__39098__$1;
var G__39092__$1 = G__39092;
var G__39093__$1 = G__39093;
while(true){
var vec__39106 = G__39092__$1;
var seq__39107 = cljs.core.seq(vec__39106);
var first__39108 = cljs.core.first(seq__39107);
var seq__39107__$1 = cljs.core.next(seq__39107);
var id__$1 = first__39108;
var idx__$1 = seq__39107__$1;
var vec__39109 = G__39093__$1;
var seq__39110 = cljs.core.seq(vec__39109);
var first__39111 = cljs.core.first(seq__39110);
var seq__39110__$1 = cljs.core.next(seq__39110);
var v__$1 = first__39111;
var vs__$1 = seq__39110__$1;
if(cljs.core.truth_(id__$1)){
clojure.core.matrix.protocols.set_nd_BANG_(a,id__$1,v__$1);

var G__41754 = idx__$1;
var G__41755 = vs__$1;
G__39092__$1 = G__41754;
G__39093__$1 = G__41755;
continue;
} else {
return null;
}
break;
}
});
goog.object.set(G__39083_41750,G__39084_41751,G__39085_41752);
goog.object.set(clojure.core.matrix.protocols.PNonZeroIndices,"object",true);

var G__39112_41756 = clojure.core.matrix.protocols.non_zero_indices;
var G__39113_41757 = "object";
var G__39114_41758 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
return cljs.core.vec((function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$defaults$iter__39115(s__39116){
return (new cljs.core.LazySeq(null,(function (){
var s__39116__$1 = s__39116;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39116__$1);
if(temp__5735__auto__){
var s__39116__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39116__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39116__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39118 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39117 = (0);
while(true){
if((i__39117 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39117);
if((!((clojure.core.matrix.protocols.get_1d(m,i) === (0))))){
cljs.core.chunk_append(b__39118,i);

var G__41761 = (i__39117 + (1));
i__39117 = G__41761;
continue;
} else {
var G__41762 = (i__39117 + (1));
i__39117 = G__41762;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39118),clojure$core$matrix$impl$defaults$iter__39115(cljs.core.chunk_rest(s__39116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39118),null);
}
} else {
var i = cljs.core.first(s__39116__$2);
if((!((clojure.core.matrix.protocols.get_1d(m,i) === (0))))){
return cljs.core.cons(i,clojure$core$matrix$impl$defaults$iter__39115(cljs.core.rest(s__39116__$2)));
} else {
var G__41763 = cljs.core.rest(s__39116__$2);
s__39116__$1 = G__41763;
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
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));
})());
} else {
return cljs.core.vec((function (){var iter__4582__auto__ = (function clojure$core$matrix$impl$defaults$iter__39119(s__39120){
return (new cljs.core.LazySeq(null,(function (){
var s__39120__$1 = s__39120;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39120__$1);
if(temp__5735__auto__){
var s__39120__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39120__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39120__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39122 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39121 = (0);
while(true){
if((i__39121 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39121);
cljs.core.chunk_append(b__39122,clojure.core.matrix.protocols.non_zero_indices(clojure.core.matrix.protocols.get_major_slice(m,i)));

var G__41764 = (i__39121 + (1));
i__39121 = G__41764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39122),clojure$core$matrix$impl$defaults$iter__39119(cljs.core.chunk_rest(s__39120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39122),null);
}
} else {
var i = cljs.core.first(s__39120__$2);
return cljs.core.cons(clojure.core.matrix.protocols.non_zero_indices(clojure.core.matrix.protocols.get_major_slice(m,i)),clojure$core$matrix$impl$defaults$iter__39119(cljs.core.rest(s__39120__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));
})());
}
});
goog.object.set(G__39112_41756,G__39113_41757,G__39114_41758);
goog.object.set(clojure.core.matrix.protocols.PMatrixTypes,"object",true);

var G__39123_41767 = clojure.core.matrix.protocols.diagonal_QMARK_;
var G__39124_41768 = "object";
var G__39125_41769 = (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)),(2))){
var vec__39126 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39126,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39126,(1),null);
return cljs.core.every_QMARK_((function (p__39129){
var vec__39130 = p__39129;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39130,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39130,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39130,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
return true;
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)) && ((v === (0))))){
return true;
} else {
return false;

}
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (i,elem){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.quot(i,mcols),cljs.core.rem(i,mcols),elem],null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((mrows * mcols)),clojure.core.matrix.protocols.element_seq(m)));
} else {
return false;
}
});
goog.object.set(G__39123_41767,G__39124_41768,G__39125_41769);

var G__39133_41772 = clojure.core.matrix.protocols.upper_triangular_QMARK_;
var G__39134_41773 = "object";
var G__39135_41774 = (function (m){
if(clojure.core.matrix.impl.common.square_QMARK_(m)){
return cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__39136){
var vec__39137 = p__39136;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39137,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39137,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(idx,xs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),clojure.core.matrix.protocols.get_slice_seq(m,(0)))], 0)));
} else {
return false;
}
});
goog.object.set(G__39133_41772,G__39134_41773,G__39135_41774);

var G__39140_41775 = clojure.core.matrix.protocols.lower_triangular_QMARK_;
var G__39141_41776 = "object";
var G__39142_41777 = (function (m){
if(clojure.core.matrix.impl.common.square_QMARK_(m)){
return cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__39143){
var vec__39144 = p__39143;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39144,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39144,(1),null);
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((idx + (1)),xs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),clojure.core.matrix.protocols.get_slice_seq(m,(0)))], 0)));
} else {
return false;
}
});
goog.object.set(G__39140_41775,G__39141_41776,G__39142_41777);

var G__39147_41780 = clojure.core.matrix.protocols.positive_definite_QMARK_;
var G__39148_41781 = "object";
var G__39149_41782 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);

return clojure.core.matrix.protocols.positive_definite_QMARK_(clojure.core.matrix.protocols.convert_to_nested_vectors(m));
});
goog.object.set(G__39147_41780,G__39148_41781,G__39149_41782);

var G__39150_41783 = clojure.core.matrix.protocols.positive_semidefinite_QMARK_;
var G__39151_41784 = "object";
var G__39152_41785 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(G__39150_41783,G__39151_41784,G__39152_41785);

var G__39153_41786 = clojure.core.matrix.protocols.orthogonal_QMARK_;
var G__39154_41787 = "object";
var G__39155_41788 = (function (m,eps){
if(clojure.core.matrix.impl.common.square_QMARK_(m)){
return clojure.core.matrix.protocols.matrix_equals_epsilon(clojure.core.matrix.protocols.matrix_multiply(m,clojure.core.matrix.protocols.transpose(m)),clojure.core.matrix.protocols.identity_matrix(m,clojure.core.matrix.protocols.dimension_count(m,(0))),eps);
} else {
return false;
}
});
goog.object.set(G__39153_41786,G__39154_41787,G__39155_41788);
goog.object.set(clojure.core.matrix.protocols.PSelect,"null",true);

var G__39156_41790 = clojure.core.matrix.protocols.select;
var G__39157_41791 = "null";
var G__39158_41792 = (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
});
goog.object.set(G__39156_41790,G__39157_41791,G__39158_41792);

goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

var G__39159_41794 = clojure.core.matrix.protocols.select;
var G__39160_41795 = "number";
var G__39161_41796 = (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
});
goog.object.set(G__39159_41794,G__39160_41795,G__39161_41796);

goog.object.set(clojure.core.matrix.protocols.PSelect,"object",true);

var G__39162_41797 = clojure.core.matrix.protocols.select;
var G__39163_41798 = "object";
var G__39164_41799 = (function (a,area){
var or__4185__auto__ = clojure.core.matrix.protocols.select_view(a,area);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection(a,area);
}
});
goog.object.set(G__39162_41797,G__39163_41798,G__39164_41799);
goog.object.set(clojure.core.matrix.protocols.PSelectView,"null",true);

var G__39165_41800 = clojure.core.matrix.protocols.select_view;
var G__39166_41801 = "null";
var G__39167_41802 = (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
});
goog.object.set(G__39165_41800,G__39166_41801,G__39167_41802);

goog.object.set(clojure.core.matrix.protocols.PSelectView,"object",true);

var G__39168_41805 = clojure.core.matrix.protocols.select_view;
var G__39169_41806 = "object";
var G__39170_41807 = (function (a,area){
return clojure.core.matrix.impl.wrappers.wrap_selection(a,area);
});
goog.object.set(G__39168_41805,G__39169_41806,G__39170_41807);

goog.object.set(clojure.core.matrix.protocols.PSelectView,"number",true);

var G__39171_41808 = clojure.core.matrix.protocols.select_view;
var G__39172_41809 = "number";
var G__39173_41810 = (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
});
goog.object.set(G__39171_41808,G__39172_41809,G__39173_41810);
goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

var G__39174_41811 = clojure.core.matrix.protocols.select;
var G__39175_41812 = "number";
var G__39176_41813 = (function (a,area){
if(cljs.core.empty_QMARK_(area)){
return a;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Non empty area argument in select, called on Number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
goog.object.set(G__39174_41811,G__39175_41812,G__39176_41813);
clojure.core.matrix.impl.defaults.area_indices = (function clojure$core$matrix$impl$defaults$area_indices(area){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (io,in$){
var iter__4582__auto__ = (function clojure$core$matrix$impl$defaults$area_indices_$_iter__39177(s__39178){
return (new cljs.core.LazySeq(null,(function (){
var s__39178__$1 = s__39178;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39178__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var a = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__39178__$1,a,xs__6292__auto__,temp__5735__auto__){
return (function clojure$core$matrix$impl$defaults$area_indices_$_iter__39177_$_iter__39179(s__39180){
return (new cljs.core.LazySeq(null,((function (s__39178__$1,a,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__39180__$1 = s__39180;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39180__$1);
if(temp__5735__auto____$1){
var s__39180__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39180__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__39180__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__39182 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__39181 = (0);
while(true){
if((i__39181 < size__4581__auto__)){
var b = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__39181);
cljs.core.chunk_append(b__39182,cljs.core.cons(a,b));

var G__41816 = (i__39181 + (1));
i__39181 = G__41816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39182),clojure$core$matrix$impl$defaults$area_indices_$_iter__39177_$_iter__39179(cljs.core.chunk_rest(s__39180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39182),null);
}
} else {
var b = cljs.core.first(s__39180__$2);
return cljs.core.cons(cljs.core.cons(a,b),clojure$core$matrix$impl$defaults$area_indices_$_iter__39177_$_iter__39179(cljs.core.rest(s__39180__$2)));
}
} else {
return null;
}
break;
}
});})(s__39178__$1,a,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__39178__$1,a,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(io));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,clojure$core$matrix$impl$defaults$area_indices_$_iter__39177(cljs.core.rest(s__39178__$1)));
} else {
var G__41819 = cljs.core.rest(s__39178__$1);
s__39178__$1 = G__41819;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(in$);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.last(area)),cljs.core.rest(cljs.core.reverse(area)));
});
clojure.core.matrix.impl.defaults.indices = (function clojure$core$matrix$impl$defaults$indices(vals){
return clojure.core.matrix.impl.defaults.area_indices(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.range,clojure.core.matrix.protocols.get_shape(vals)));
});
goog.object.set(clojure.core.matrix.protocols.PSetSelection,"object",true);

var G__39183_41820 = clojure.core.matrix.protocols.set_selection;
var G__39184_41821 = "object";
var G__39185_41822 = (function (m,area,vals){
var mm = (function (){var or__4185__auto__ = clojure.core.matrix.protocols.mutable_matrix(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(m);
}
})();
var v = clojure.core.matrix.protocols.select_view(m,area);
clojure.core.matrix.protocols.assign_BANG_(v,vals);

return mm;
});
goog.object.set(G__39183_41820,G__39184_41821,G__39185_41822);
goog.object.set(clojure.core.matrix.protocols.PIndexImplementation,"object",true);

var G__39186_41823 = clojure.core.matrix.protocols.index_QMARK_;
var G__39187_41824 = "object";
var G__39188_41825 = (function (m){
return false;
});
goog.object.set(G__39186_41823,G__39187_41824,G__39188_41825);

var G__39189_41826 = clojure.core.matrix.protocols.index_to_longs;
var G__39190_41827 = "object";
var G__39191_41828 = (function (m){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
});
goog.object.set(G__39189_41826,G__39190_41827,G__39191_41828);

var G__39192_41830 = clojure.core.matrix.protocols.index_to_ints;
var G__39193_41831 = "object";
var G__39194_41832 = (function (m){
return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
});
goog.object.set(G__39192_41830,G__39193_41831,G__39194_41832);

var G__39195_41834 = clojure.core.matrix.protocols.index_from_longs;
var G__39196_41835 = "object";
var G__39197_41836 = (function (m,xs){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(xs);
});
goog.object.set(G__39195_41834,G__39196_41835,G__39197_41836);

var G__39198_41837 = clojure.core.matrix.protocols.index_from_ints;
var G__39199_41838 = "object";
var G__39200_41839 = (function (m,xs){
return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(xs);
});
goog.object.set(G__39198_41837,G__39199_41838,G__39200_41839);

var G__39201_41840 = clojure.core.matrix.protocols.index_coerce;
var G__39202_41841 = "object";
var G__39203_41842 = (function (m,a){
return clojure.core.matrix.protocols.index_to_longs(m);
});
goog.object.set(G__39201_41840,G__39202_41841,G__39203_41842);
goog.object.set(clojure.core.matrix.protocols.PDimensionLabels,"object",true);

var G__39204_41843 = clojure.core.matrix.protocols.label;
var G__39205_41844 = "object";
var G__39206_41845 = (function (m,dim,i){
if(((((0) <= cljs.core.long$(i))) && ((cljs.core.long$(i) <= (cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,dim)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Dimension index out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
goog.object.set(G__39204_41843,G__39205_41844,G__39206_41845);

var G__39207_41846 = clojure.core.matrix.protocols.labels;
var G__39208_41847 = "object";
var G__39209_41848 = (function (m,dim){
if(((((0) <= cljs.core.long$(dim))) && ((cljs.core.long$(dim) <= (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Dimension out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
goog.object.set(G__39207_41846,G__39208_41847,G__39209_41848);
goog.object.set(clojure.core.matrix.protocols.PColumnNames,"object",true);

var G__39210_41851 = clojure.core.matrix.protocols.column_name;
var G__39211_41852 = "object";
var G__39212_41853 = (function (m,i){
var dim = (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) - (1));
return clojure.core.matrix.protocols.label(m,dim,i);
});
goog.object.set(G__39210_41851,G__39211_41852,G__39212_41853);

var G__39213_41854 = clojure.core.matrix.protocols.column_names;
var G__39214_41855 = "object";
var G__39215_41856 = (function (m){
var dim = (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) - (1));
return clojure.core.matrix.protocols.labels(m,dim);
});
goog.object.set(G__39213_41854,G__39214_41855,G__39215_41856);
goog.object.set(clojure.core.matrix.protocols.PNorm,"object",true);

var G__39216_41857 = clojure.core.matrix.protocols.norm;
var G__39217_41858 = "object";
var G__39218_41859 = (function (m,p){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,Number.POSITIVE_INFINITY)){
return clojure.core.matrix.protocols.element_max(clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.mathsops.abs));
} else {
if(typeof p === 'number'){
var sum_of_element_powers = clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_pow(clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.mathsops.abs),p));
var pred__39219 = cljs.core._EQ__EQ_;
var expr__39220 = p;
if(cljs.core.truth_((pred__39219.cljs$core$IFn$_invoke$arity$2 ? pred__39219.cljs$core$IFn$_invoke$arity$2((1),expr__39220) : pred__39219.call(null,(1),expr__39220)))){
return sum_of_element_powers;
} else {
if(cljs.core.truth_((pred__39219.cljs$core$IFn$_invoke$arity$2 ? pred__39219.cljs$core$IFn$_invoke$arity$2((2),expr__39220) : pred__39219.call(null,(2),expr__39220)))){
return Math.sqrt(sum_of_element_powers);
} else {
if(cljs.core.truth_((pred__39219.cljs$core$IFn$_invoke$arity$2 ? pred__39219.cljs$core$IFn$_invoke$arity$2((3),expr__39220) : pred__39219.call(null,(3),expr__39220)))){
return Math.cbrt(sum_of_element_powers);
} else {
var G__39222 = sum_of_element_powers;
var G__39223 = (1.0 / p);
return Math.pow(G__39222,G__39223);
}
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("p must be a number",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
goog.object.set(G__39216_41857,G__39217_41858,G__39218_41859);
clojure.core.matrix.impl.defaults.compute_q = (function clojure$core$matrix$impl$defaults$compute_q(m,qr_data,mcols,mrows,min_len,us,vs,gammas){
var q = clojure.core.matrix.protocols.to_double_array(clojure.core.matrix.protocols.identity_matrix(cljs.core.PersistentVector.EMPTY,mrows));
var mcols__$1 = cljs.core.long$(mcols);
var mrows__$1 = cljs.core.long$(mrows);
var min_len__$1 = cljs.core.long$(min_len);
var i_41862 = (min_len__$1 - (1));
while(true){
if((i_41862 > (-1))){
var gamma_41863 = (gammas[i_41862]);
(us[i_41862] = 1.0);

var j_41864 = (i_41862 + (1));
while(true){
if((j_41864 < mrows__$1)){
(us[j_41864] = (qr_data[((j_41864 * mcols__$1) + i_41862)]));

var G__41866 = (j_41864 + (1));
j_41864 = G__41866;
continue;
} else {
}
break;
}


var j_41868 = i_41862;
while(true){
if((j_41868 < mrows__$1)){
(vs[j_41868] = ((us[i_41862]) * (q[((i_41862 * mrows__$1) + j_41868)])));

var G__41869 = (j_41868 + (1));
j_41868 = G__41869;
continue;
} else {
}
break;
}


var j_41870 = (i_41862 + (1));
while(true){
if((j_41870 < mrows__$1)){
var u_41871 = (us[j_41870]);
var k_41872 = i_41862;
while(true){
if((k_41872 < mrows__$1)){
var q_idx_41873 = (((j_41870 * mrows__$1) + i_41862) + (k_41872 - i_41862));
(vs[k_41872] = ((vs[k_41872]) + (u_41871 * (q[q_idx_41873]))));

var G__41874 = (k_41872 + (1));
k_41872 = G__41874;
continue;
} else {
}
break;
}


var G__41875 = (j_41870 + (1));
j_41870 = G__41875;
continue;
} else {
}
break;
}


var j_41876 = i_41862;
while(true){
if((j_41876 < mrows__$1)){
(vs[j_41876] = ((vs[j_41876]) * gamma_41863));

var G__41877 = (j_41876 + (1));
j_41876 = G__41877;
continue;
} else {
}
break;
}


var j_41878 = i_41862;
while(true){
if((j_41878 < mrows__$1)){
var u_41880 = (us[j_41878]);
var k_41881 = i_41862;
while(true){
if((k_41881 < mrows__$1)){
var qr_idx_41883 = (((j_41878 * mrows__$1) + i_41862) + (k_41881 - i_41862));
(q[qr_idx_41883] = ((q[qr_idx_41883]) - (u_41880 * (vs[k_41881]))));

var G__41884 = (k_41881 + (1));
k_41881 = G__41884;
continue;
} else {
}
break;
}


var G__41885 = (j_41878 + (1));
j_41878 = G__41885;
continue;
} else {
}
break;
}


var G__41886 = (i_41862 - (1));
i_41862 = G__41886;
continue;
} else {
}
break;
}


return clojure.core.matrix.protocols.compute_matrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mrows__$1], null),(function (i,j){
return (q[((i * mrows__$1) + j)]);
}));
});
clojure.core.matrix.impl.defaults.compute_r = (function clojure$core$matrix$impl$defaults$compute_r(m,data,mcols,mrows,min_len,compact_QMARK_){
var mrows__$1 = cljs.core.long$(mrows);
var mcols__$1 = cljs.core.long$(mcols);
var min_len__$1 = cljs.core.long$(min_len);
var cm = clojure.core.matrix.protocols.compute_matrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mcols__$1], null),(function (i,j){
if((((i < min_len__$1)) && ((j >= i)) && ((j < mcols__$1)))){
return (data[((i * mcols__$1) + j)]);
} else {
return (0);
}
}));
if(cljs.core.truth_(compact_QMARK_)){
var slcs = clojure.core.matrix.protocols.get_major_slice_seq(cm);
var non_zero_rows = cljs.core.long$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cnt,slice){
if(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,slice)){
return (cnt + (1));
} else {
return cnt;
}
}),(0),slcs));
return clojure.core.matrix.protocols.reshape(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols__$1,(mrows__$1 - non_zero_rows)], null));
} else {
return cm;
}
});
clojure.core.matrix.impl.defaults.householder_qr = (function clojure$core$matrix$impl$defaults$householder_qr(qr_data,idx,mcols,mrows,us,gammas){
var idx__$1 = cljs.core.long$(idx);
var mcols__$1 = cljs.core.long$(mcols);
var mrows__$1 = cljs.core.long$(mrows);
var qr_idx_41889 = cljs.core.long$((idx__$1 + (idx__$1 * mcols__$1)));
var i_41890 = cljs.core.long$(idx__$1);
while(true){
if((i_41890 < mrows__$1)){
(us[i_41890] = (qr_data[qr_idx_41889]));

var G__41891 = (qr_idx_41889 + mcols__$1);
var G__41892 = (i_41890 + (1));
qr_idx_41889 = G__41891;
i_41890 = G__41892;
continue;
} else {
}
break;
}

var max_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39224_SHARP_){
var G__39225 = p1__39224_SHARP_;
return Math.abs(G__39225);
}),clojure.core.matrix.protocols.subvector(us,idx__$1,(mrows__$1 - idx__$1))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_,0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null);
} else {
var _ = (function (){
var i_41895 = idx__$1;
while(true){
if((i_41895 < mrows__$1)){
(us[i_41895] = ((us[i_41895]) / max_));

var G__41896 = (i_41895 + (1));
i_41895 = G__41896;
continue;
} else {
}
break;
}

return null;
})()
;
var tau = (function (){var G__39226 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return (acc + (x * x));
}),0.0,clojure.core.matrix.protocols.subvector(us,idx__$1,(mrows__$1 - idx__$1)));
return Math.sqrt(G__39226);
})();
var u_idx = (us[idx__$1]);
var tau__$1 = (((u_idx < (0)))?(- tau):tau);
var u_0 = (u_idx + tau__$1);
var gamma = (u_0 / tau__$1);
var tau__$2 = (tau__$1 * max_);
(gammas[idx__$1] = gamma);

var i_41899 = (idx__$1 + (1));
while(true){
if((i_41899 < mrows__$1)){
(us[i_41899] = ((us[i_41899]) / u_0));

var G__41900 = (i_41899 + (1));
i_41899 = G__41900;
continue;
} else {
}
break;
}


(us[idx__$1] = 1.0);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gamma","gamma",1883969687),gamma,new cljs.core.Keyword(null,"gammas","gammas",-195052461),gammas,new cljs.core.Keyword(null,"us","us",746429226),us,new cljs.core.Keyword(null,"tau","tau",89782904),tau__$2,new cljs.core.Keyword(null,"error","error",-978969032),false], null);
}
});
clojure.core.matrix.impl.defaults.update_qr = (function clojure$core$matrix$impl$defaults$update_qr(qr_data,idx,mcols,mrows,vs,us,gamma,tau){
var idx__$1 = cljs.core.long$(idx);
var mrows__$1 = cljs.core.long$(mrows);
var mcols__$1 = cljs.core.long$(mcols);
var u = (us[idx__$1]);
var idx_PLUS_1 = (idx__$1 + (1));
var gamma__$1 = gamma;
var tau__$1 = tau;
var i_41903 = idx_PLUS_1;
while(true){
if((i_41903 < mcols__$1)){
(vs[i_41903] = (qr_data[(i_41903 + (idx__$1 * mcols__$1))]));

var G__41904 = (i_41903 + (1));
i_41903 = G__41904;
continue;
} else {
}
break;
}


var i_41905 = idx_PLUS_1;
while(true){
if((i_41905 < mrows__$1)){
var qr_idx_41906 = (idx_PLUS_1 + (i_41905 * mcols__$1));
var j_41907 = idx_PLUS_1;
while(true){
if((j_41907 < mcols__$1)){
(vs[j_41907] = ((vs[j_41907]) + ((us[i_41905]) * (qr_data[(qr_idx_41906 + (j_41907 - idx_PLUS_1))]))));

var G__41908 = (j_41907 + (1));
j_41907 = G__41908;
continue;
} else {
}
break;
}


var G__41909 = (i_41905 + (1));
i_41905 = G__41909;
continue;
} else {
}
break;
}


var i_41911 = idx_PLUS_1;
while(true){
if((i_41911 < mcols__$1)){
(vs[i_41911] = ((vs[i_41911]) * gamma__$1));

var G__41913 = (i_41911 + (1));
i_41911 = G__41913;
continue;
} else {
}
break;
}


var i_41914 = idx__$1;
while(true){
if((i_41914 < mrows__$1)){
var u_41915__$1 = (us[i_41914]);
var j_41916 = idx_PLUS_1;
while(true){
if((j_41916 < mcols__$1)){
var qr_idx_41917 = (((i_41914 * mcols__$1) + idx_PLUS_1) + (j_41916 - idx_PLUS_1));
(qr_data[qr_idx_41917] = ((qr_data[qr_idx_41917]) - (u_41915__$1 * (vs[j_41916]))));

var G__41918 = (j_41916 + (1));
j_41916 = G__41918;
continue;
} else {
}
break;
}


var G__41920 = (i_41914 + (1));
i_41914 = G__41920;
continue;
} else {
}
break;
}


if((idx__$1 < mcols__$1)){
(qr_data[(idx__$1 + (idx__$1 * mcols__$1))] = (- tau__$1));
} else {
}

var i_41921 = idx_PLUS_1;
while(true){
if((i_41921 < mrows__$1)){
(qr_data[(idx__$1 + (i_41921 * mcols__$1))] = (us[i_41921]));

var G__41922 = (i_41921 + (1));
i_41921 = G__41922;
continue;
} else {
}
break;
}


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qr-data","qr-data",-504970292),qr_data,new cljs.core.Keyword(null,"vs","vs",-2022097090),vs], null);
});
goog.object.set(clojure.core.matrix.protocols.PQRDecomposition,"object",true);

var G__39227_41923 = clojure.core.matrix.protocols.qr;
var G__39228_41924 = "object";
var G__39229_41925 = (function (m,options){
var vec__39230 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39230,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39230,(1),null);
var mrows__$1 = cljs.core.long$(mrows);
var mcols__$1 = cljs.core.long$(mcols);
var min_len = (function (){var x__4276__auto__ = mcols__$1;
var y__4277__auto__ = mrows__$1;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var max_len = (function (){var x__4273__auto__ = mcols__$1;
var y__4274__auto__ = mrows__$1;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var qr_data = clojure.core.matrix.protocols.to_double_array(m);
var vs = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(max_len);
var us = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(max_len);
var gammas = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(min_len);
var gamma = 0.0;
var tau = 0.0;
var i = (0);
while(true){
if((i < min_len)){
var map__39241 = clojure.core.matrix.impl.defaults.householder_qr(qr_data,i,mcols__$1,mrows__$1,us,gammas);
var map__39241__$1 = (((((!((map__39241 == null))))?(((((map__39241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39241):map__39241);
var us__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39241__$1,new cljs.core.Keyword(null,"us","us",746429226));
var gamma__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39241__$1,new cljs.core.Keyword(null,"gamma","gamma",1883969687));
var gammas__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39241__$1,new cljs.core.Keyword(null,"gammas","gammas",-195052461));
var tau__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39241__$1,new cljs.core.Keyword(null,"tau","tau",89782904));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39241__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return null;
} else {
var map__39243 = clojure.core.matrix.impl.defaults.update_qr(qr_data,i,mcols__$1,mrows__$1,vs,us__$1,gamma__$1,tau__$1);
var map__39243__$1 = (((((!((map__39243 == null))))?(((((map__39243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39243):map__39243);
var qr_data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39243__$1,new cljs.core.Keyword(null,"qr-data","qr-data",-504970292));
var vs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39243__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var G__41928 = qr_data__$1;
var G__41929 = vs__$1;
var G__41930 = us__$1;
var G__41931 = gammas__$1;
var G__41932 = gamma__$1;
var G__41933 = tau__$1;
var G__41934 = (i + (1));
qr_data = G__41928;
vs = G__41929;
us = G__41930;
gammas = G__41931;
gamma = G__41932;
tau = G__41933;
i = G__41934;
continue;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (qr_data,vs,us,gammas,gamma,tau,i,vec__39230,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__39227_41923,G__39228_41924){
return (function (p__39245){
var vec__39246 = p__39245;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39246,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(v.cljs$core$IFn$_invoke$arity$0 ? v.cljs$core$IFn$_invoke$arity$0() : v.call(null))], null);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__39230,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__39227_41923,G__39228_41924))
,cljs.core.select_keys(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Q","Q",663320520),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__39230,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__39227_41923,G__39228_41924){
return (function (){
return clojure.core.matrix.impl.defaults.compute_q(m,qr_data,mcols__$1,mrows__$1,min_len,us,vs,gammas);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__39230,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__39227_41923,G__39228_41924))
,new cljs.core.Keyword(null,"R","R",-936662523),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__39230,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__39227_41923,G__39228_41924){
return (function (){
return clojure.core.matrix.impl.defaults.compute_r(m,qr_data,mcols__$1,mrows__$1,min_len,new cljs.core.Keyword(null,"compact","compact",-348732150).cljs$core$IFn$_invoke$arity$1(options));
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__39230,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__39227_41923,G__39228_41924))
], null),new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(options))));
}
break;
}
});
goog.object.set(G__39227_41923,G__39228_41924,G__39229_41925);
goog.object.set(clojure.core.matrix.protocols.PCholeskyDecomposition,"object",true);

var G__39249_41938 = clojure.core.matrix.protocols.cholesky;
var G__39250_41939 = "object";
var G__39251_41940 = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__39252 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__39253 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__39253);

try{var imp__26335__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__26335__auto__,m);
return clojure.core.matrix.protocols.cholesky(m__$1,options);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__39252);
}} else {
return null;
}
});
goog.object.set(G__39249_41938,G__39250_41939,G__39251_41940);
goog.object.set(clojure.core.matrix.protocols.PLUDecomposition,"object",true);

var G__39254_41942 = clojure.core.matrix.protocols.lu;
var G__39255_41943 = "object";
var G__39256_41944 = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__39257 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__39258 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__39258);

try{var imp__26335__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__26335__auto__,m);
return clojure.core.matrix.protocols.lu(m__$1,options);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__39257);
}} else {
return null;
}
});
goog.object.set(G__39254_41942,G__39255_41943,G__39256_41944);
goog.object.set(clojure.core.matrix.protocols.PSVDDecomposition,"object",true);

var G__39259_41945 = clojure.core.matrix.protocols.svd;
var G__39260_41946 = "object";
var G__39261_41947 = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__39262 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__39263 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__39263);

try{var imp__26335__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__26335__auto__,m);
return clojure.core.matrix.protocols.svd(m__$1,options);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__39262);
}} else {
return null;
}
});
goog.object.set(G__39259_41945,G__39260_41946,G__39261_41947);
goog.object.set(clojure.core.matrix.protocols.PEigenDecomposition,"object",true);

var G__39264_41950 = clojure.core.matrix.protocols.eigen;
var G__39265_41951 = "object";
var G__39266_41952 = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__39267 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__39268 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__39268);

try{var imp__26335__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__26335__auto__,m);
return clojure.core.matrix.protocols.eigen(m__$1,options);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__39267);
}} else {
return null;
}
});
goog.object.set(G__39264_41950,G__39265_41951,G__39266_41952);
goog.object.set(clojure.core.matrix.protocols.PSolveLinear,"object",true);

var G__39269_41953 = clojure.core.matrix.protocols.solve;
var G__39270_41954 = "object";
var G__39271_41955 = (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__39272 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__39273 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__39273);

try{var imp__26335__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var a__$1 = clojure.core.matrix.protocols.coerce_param(imp__26335__auto__,a);
return clojure.core.matrix.protocols.solve(a__$1,b);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__39272);
}} else {
return null;
}
});
goog.object.set(G__39269_41953,G__39270_41954,G__39271_41955);
goog.object.set(clojure.core.matrix.protocols.PLeastSquares,"object",true);

var G__39274_41958 = clojure.core.matrix.protocols.least_squares;
var G__39275_41959 = "object";
var G__39276_41960 = (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__39277 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__39278 = true;
(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__39278);

try{var imp__26335__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var a__$1 = clojure.core.matrix.protocols.coerce_param(imp__26335__auto__,a);
return clojure.core.matrix.protocols.least_squares(a__$1,b);
}finally {(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__39277);
}} else {
return null;
}
});
goog.object.set(G__39274_41958,G__39275_41959,G__39276_41960);

//# sourceMappingURL=clojure.core.matrix.impl.defaults.js.map
