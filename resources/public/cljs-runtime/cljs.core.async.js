goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28951 = arguments.length;
switch (G__28951) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28959 = (function (f,blockable,meta28960){
this.f = f;
this.blockable = blockable;
this.meta28960 = meta28960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28961,meta28960__$1){
var self__ = this;
var _28961__$1 = this;
return (new cljs.core.async.t_cljs$core$async28959(self__.f,self__.blockable,meta28960__$1));
}));

(cljs.core.async.t_cljs$core$async28959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28961){
var self__ = this;
var _28961__$1 = this;
return self__.meta28960;
}));

(cljs.core.async.t_cljs$core$async28959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28960","meta28960",-1340373376,null)], null);
}));

(cljs.core.async.t_cljs$core$async28959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28959");

(cljs.core.async.t_cljs$core$async28959.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28959.
 */
cljs.core.async.__GT_t_cljs$core$async28959 = (function cljs$core$async$__GT_t_cljs$core$async28959(f__$1,blockable__$1,meta28960){
return (new cljs.core.async.t_cljs$core$async28959(f__$1,blockable__$1,meta28960));
});

}

return (new cljs.core.async.t_cljs$core$async28959(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29017 = arguments.length;
switch (G__29017) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29048 = arguments.length;
switch (G__29048) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29079 = arguments.length;
switch (G__29079) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31999 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31999) : fn1.call(null,val_31999));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31999) : fn1.call(null,val_31999));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29091 = arguments.length;
switch (G__29091) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32034 = n;
var x_32035 = (0);
while(true){
if((x_32035 < n__4666__auto___32034)){
(a[x_32035] = x_32035);

var G__32039 = (x_32035 + (1));
x_32035 = G__32039;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29122 = (function (flag,meta29123){
this.flag = flag;
this.meta29123 = meta29123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29124,meta29123__$1){
var self__ = this;
var _29124__$1 = this;
return (new cljs.core.async.t_cljs$core$async29122(self__.flag,meta29123__$1));
}));

(cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29124){
var self__ = this;
var _29124__$1 = this;
return self__.meta29123;
}));

(cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29123","meta29123",601616204,null)], null);
}));

(cljs.core.async.t_cljs$core$async29122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29122");

(cljs.core.async.t_cljs$core$async29122.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29122.
 */
cljs.core.async.__GT_t_cljs$core$async29122 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29122(flag__$1,meta29123){
return (new cljs.core.async.t_cljs$core$async29122(flag__$1,meta29123));
});

}

return (new cljs.core.async.t_cljs$core$async29122(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29149 = (function (flag,cb,meta29150){
this.flag = flag;
this.cb = cb;
this.meta29150 = meta29150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29151,meta29150__$1){
var self__ = this;
var _29151__$1 = this;
return (new cljs.core.async.t_cljs$core$async29149(self__.flag,self__.cb,meta29150__$1));
}));

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29151){
var self__ = this;
var _29151__$1 = this;
return self__.meta29150;
}));

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29150","meta29150",2061446072,null)], null);
}));

(cljs.core.async.t_cljs$core$async29149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29149");

(cljs.core.async.t_cljs$core$async29149.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29149.
 */
cljs.core.async.__GT_t_cljs$core$async29149 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29149(flag__$1,cb__$1,meta29150){
return (new cljs.core.async.t_cljs$core$async29149(flag__$1,cb__$1,meta29150));
});

}

return (new cljs.core.async.t_cljs$core$async29149(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29156_SHARP_){
var G__29161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29156_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29161) : fret.call(null,G__29161));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29157_SHARP_){
var G__29162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29157_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29162) : fret.call(null,G__29162));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32106 = (i + (1));
i = G__32106;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32116 = arguments.length;
var i__4790__auto___32117 = (0);
while(true){
if((i__4790__auto___32117 < len__4789__auto___32116)){
args__4795__auto__.push((arguments[i__4790__auto___32117]));

var G__32121 = (i__4790__auto___32117 + (1));
i__4790__auto___32117 = G__32121;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29171){
var map__29173 = p__29171;
var map__29173__$1 = (((((!((map__29173 == null))))?(((((map__29173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29173):map__29173);
var opts = map__29173__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29165){
var G__29166 = cljs.core.first(seq29165);
var seq29165__$1 = cljs.core.next(seq29165);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29166,seq29165__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29179 = arguments.length;
switch (G__29179) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28795__auto___32150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_29218){
var state_val_29219 = (state_29218[(1)]);
if((state_val_29219 === (7))){
var inst_29210 = (state_29218[(2)]);
var state_29218__$1 = state_29218;
var statearr_29222_32154 = state_29218__$1;
(statearr_29222_32154[(2)] = inst_29210);

(statearr_29222_32154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (1))){
var state_29218__$1 = state_29218;
var statearr_29226_32156 = state_29218__$1;
(statearr_29226_32156[(2)] = null);

(statearr_29226_32156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (4))){
var inst_29188 = (state_29218[(7)]);
var inst_29188__$1 = (state_29218[(2)]);
var inst_29189 = (inst_29188__$1 == null);
var state_29218__$1 = (function (){var statearr_29258 = state_29218;
(statearr_29258[(7)] = inst_29188__$1);

return statearr_29258;
})();
if(cljs.core.truth_(inst_29189)){
var statearr_29259_32160 = state_29218__$1;
(statearr_29259_32160[(1)] = (5));

} else {
var statearr_29260_32163 = state_29218__$1;
(statearr_29260_32163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (13))){
var state_29218__$1 = state_29218;
var statearr_29268_32170 = state_29218__$1;
(statearr_29268_32170[(2)] = null);

(statearr_29268_32170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (6))){
var inst_29188 = (state_29218[(7)]);
var state_29218__$1 = state_29218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29218__$1,(11),to,inst_29188);
} else {
if((state_val_29219 === (3))){
var inst_29212 = (state_29218[(2)]);
var state_29218__$1 = state_29218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29218__$1,inst_29212);
} else {
if((state_val_29219 === (12))){
var state_29218__$1 = state_29218;
var statearr_29274_32173 = state_29218__$1;
(statearr_29274_32173[(2)] = null);

(statearr_29274_32173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (2))){
var state_29218__$1 = state_29218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29218__$1,(4),from);
} else {
if((state_val_29219 === (11))){
var inst_29203 = (state_29218[(2)]);
var state_29218__$1 = state_29218;
if(cljs.core.truth_(inst_29203)){
var statearr_29276_32184 = state_29218__$1;
(statearr_29276_32184[(1)] = (12));

} else {
var statearr_29277_32185 = state_29218__$1;
(statearr_29277_32185[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (9))){
var state_29218__$1 = state_29218;
var statearr_29279_32189 = state_29218__$1;
(statearr_29279_32189[(2)] = null);

(statearr_29279_32189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (5))){
var state_29218__$1 = state_29218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29285_32193 = state_29218__$1;
(statearr_29285_32193[(1)] = (8));

} else {
var statearr_29286_32194 = state_29218__$1;
(statearr_29286_32194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (14))){
var inst_29208 = (state_29218[(2)]);
var state_29218__$1 = state_29218;
var statearr_29287_32198 = state_29218__$1;
(statearr_29287_32198[(2)] = inst_29208);

(statearr_29287_32198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (10))){
var inst_29197 = (state_29218[(2)]);
var state_29218__$1 = state_29218;
var statearr_29288_32199 = state_29218__$1;
(statearr_29288_32199[(2)] = inst_29197);

(statearr_29288_32199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29219 === (8))){
var inst_29192 = cljs.core.async.close_BANG_(to);
var state_29218__$1 = state_29218;
var statearr_29289_32202 = state_29218__$1;
(statearr_29289_32202[(2)] = inst_29192);

(statearr_29289_32202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_29290 = [null,null,null,null,null,null,null,null];
(statearr_29290[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_29290[(1)] = (1));

return statearr_29290;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_29218){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29218);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29291){if((e29291 instanceof Object)){
var ex__28441__auto__ = e29291;
var statearr_29292_32218 = state_29218;
(statearr_29292_32218[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32224 = state_29218;
state_29218 = G__32224;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_29218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_29218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_29293 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29293[(6)] = c__28795__auto___32150);

return statearr_29293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29295){
var vec__29296 = p__29295;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29296,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29296,(1),null);
var job = vec__29296;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28795__auto___32236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_29307){
var state_val_29309 = (state_29307[(1)]);
if((state_val_29309 === (1))){
var state_29307__$1 = state_29307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29307__$1,(2),res,v);
} else {
if((state_val_29309 === (2))){
var inst_29304 = (state_29307[(2)]);
var inst_29305 = cljs.core.async.close_BANG_(res);
var state_29307__$1 = (function (){var statearr_29313 = state_29307;
(statearr_29313[(7)] = inst_29304);

return statearr_29313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29307__$1,inst_29305);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0 = (function (){
var statearr_29315 = [null,null,null,null,null,null,null,null];
(statearr_29315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__);

(statearr_29315[(1)] = (1));

return statearr_29315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1 = (function (state_29307){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29307);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29316){if((e29316 instanceof Object)){
var ex__28441__auto__ = e29316;
var statearr_29317_32245 = state_29307;
(statearr_29317_32245[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32246 = state_29307;
state_29307 = G__32246;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = function(state_29307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1.call(this,state_29307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_29318 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29318[(6)] = c__28795__auto___32236);

return statearr_29318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29319){
var vec__29321 = p__29319;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29321,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29321,(1),null);
var job = vec__29321;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32255 = n;
var __32256 = (0);
while(true){
if((__32256 < n__4666__auto___32255)){
var G__29329_32257 = type;
var G__29329_32258__$1 = (((G__29329_32257 instanceof cljs.core.Keyword))?G__29329_32257.fqn:null);
switch (G__29329_32258__$1) {
case "compute":
var c__28795__auto___32260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32256,c__28795__auto___32260,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async){
return (function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = ((function (__32256,c__28795__auto___32260,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async){
return (function (state_29345){
var state_val_29346 = (state_29345[(1)]);
if((state_val_29346 === (1))){
var state_29345__$1 = state_29345;
var statearr_29347_32265 = state_29345__$1;
(statearr_29347_32265[(2)] = null);

(statearr_29347_32265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (2))){
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29345__$1,(4),jobs);
} else {
if((state_val_29346 === (3))){
var inst_29342 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29345__$1,inst_29342);
} else {
if((state_val_29346 === (4))){
var inst_29332 = (state_29345[(2)]);
var inst_29333 = process(inst_29332);
var state_29345__$1 = state_29345;
if(cljs.core.truth_(inst_29333)){
var statearr_29349_32268 = state_29345__$1;
(statearr_29349_32268[(1)] = (5));

} else {
var statearr_29351_32269 = state_29345__$1;
(statearr_29351_32269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (5))){
var state_29345__$1 = state_29345;
var statearr_29352_32270 = state_29345__$1;
(statearr_29352_32270[(2)] = null);

(statearr_29352_32270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (6))){
var state_29345__$1 = state_29345;
var statearr_29353_32272 = state_29345__$1;
(statearr_29353_32272[(2)] = null);

(statearr_29353_32272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (7))){
var inst_29339 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
var statearr_29354_32273 = state_29345__$1;
(statearr_29354_32273[(2)] = inst_29339);

(statearr_29354_32273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32256,c__28795__auto___32260,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async))
;
return ((function (__32256,switch__28437__auto__,c__28795__auto___32260,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0 = (function (){
var statearr_29355 = [null,null,null,null,null,null,null];
(statearr_29355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__);

(statearr_29355[(1)] = (1));

return statearr_29355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1 = (function (state_29345){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29345);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29356){if((e29356 instanceof Object)){
var ex__28441__auto__ = e29356;
var statearr_29357_32278 = state_29345;
(statearr_29357_32278[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32282 = state_29345;
state_29345 = G__32282;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = function(state_29345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1.call(this,state_29345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__;
})()
;})(__32256,switch__28437__auto__,c__28795__auto___32260,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async))
})();
var state__28797__auto__ = (function (){var statearr_29360 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29360[(6)] = c__28795__auto___32260);

return statearr_29360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
});})(__32256,c__28795__auto___32260,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async))
);


break;
case "async":
var c__28795__auto___32290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32256,c__28795__auto___32290,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async){
return (function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = ((function (__32256,c__28795__auto___32290,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async){
return (function (state_29373){
var state_val_29374 = (state_29373[(1)]);
if((state_val_29374 === (1))){
var state_29373__$1 = state_29373;
var statearr_29375_32294 = state_29373__$1;
(statearr_29375_32294[(2)] = null);

(statearr_29375_32294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (2))){
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29373__$1,(4),jobs);
} else {
if((state_val_29374 === (3))){
var inst_29371 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29373__$1,inst_29371);
} else {
if((state_val_29374 === (4))){
var inst_29363 = (state_29373[(2)]);
var inst_29364 = async(inst_29363);
var state_29373__$1 = state_29373;
if(cljs.core.truth_(inst_29364)){
var statearr_29385_32300 = state_29373__$1;
(statearr_29385_32300[(1)] = (5));

} else {
var statearr_29386_32304 = state_29373__$1;
(statearr_29386_32304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (5))){
var state_29373__$1 = state_29373;
var statearr_29387_32305 = state_29373__$1;
(statearr_29387_32305[(2)] = null);

(statearr_29387_32305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (6))){
var state_29373__$1 = state_29373;
var statearr_29388_32306 = state_29373__$1;
(statearr_29388_32306[(2)] = null);

(statearr_29388_32306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (7))){
var inst_29369 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29389_32308 = state_29373__$1;
(statearr_29389_32308[(2)] = inst_29369);

(statearr_29389_32308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32256,c__28795__auto___32290,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async))
;
return ((function (__32256,switch__28437__auto__,c__28795__auto___32290,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0 = (function (){
var statearr_29391 = [null,null,null,null,null,null,null];
(statearr_29391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__);

(statearr_29391[(1)] = (1));

return statearr_29391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1 = (function (state_29373){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29373);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29392){if((e29392 instanceof Object)){
var ex__28441__auto__ = e29392;
var statearr_29393_32314 = state_29373;
(statearr_29393_32314[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32322 = state_29373;
state_29373 = G__32322;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = function(state_29373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1.call(this,state_29373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__;
})()
;})(__32256,switch__28437__auto__,c__28795__auto___32290,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async))
})();
var state__28797__auto__ = (function (){var statearr_29395 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29395[(6)] = c__28795__auto___32290);

return statearr_29395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
});})(__32256,c__28795__auto___32290,G__29329_32257,G__29329_32258__$1,n__4666__auto___32255,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29329_32258__$1)].join('')));

}

var G__32331 = (__32256 + (1));
__32256 = G__32331;
continue;
} else {
}
break;
}

var c__28795__auto___32332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_29419){
var state_val_29420 = (state_29419[(1)]);
if((state_val_29420 === (7))){
var inst_29414 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
var statearr_29424_32334 = state_29419__$1;
(statearr_29424_32334[(2)] = inst_29414);

(statearr_29424_32334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (1))){
var state_29419__$1 = state_29419;
var statearr_29425_32336 = state_29419__$1;
(statearr_29425_32336[(2)] = null);

(statearr_29425_32336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (4))){
var inst_29398 = (state_29419[(7)]);
var inst_29398__$1 = (state_29419[(2)]);
var inst_29399 = (inst_29398__$1 == null);
var state_29419__$1 = (function (){var statearr_29431 = state_29419;
(statearr_29431[(7)] = inst_29398__$1);

return statearr_29431;
})();
if(cljs.core.truth_(inst_29399)){
var statearr_29433_32342 = state_29419__$1;
(statearr_29433_32342[(1)] = (5));

} else {
var statearr_29434_32344 = state_29419__$1;
(statearr_29434_32344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (6))){
var inst_29398 = (state_29419[(7)]);
var inst_29403 = (state_29419[(8)]);
var inst_29403__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29406 = [inst_29398,inst_29403__$1];
var inst_29407 = (new cljs.core.PersistentVector(null,2,(5),inst_29404,inst_29406,null));
var state_29419__$1 = (function (){var statearr_29435 = state_29419;
(statearr_29435[(8)] = inst_29403__$1);

return statearr_29435;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29419__$1,(8),jobs,inst_29407);
} else {
if((state_val_29420 === (3))){
var inst_29416 = (state_29419[(2)]);
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29419__$1,inst_29416);
} else {
if((state_val_29420 === (2))){
var state_29419__$1 = state_29419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29419__$1,(4),from);
} else {
if((state_val_29420 === (9))){
var inst_29411 = (state_29419[(2)]);
var state_29419__$1 = (function (){var statearr_29437 = state_29419;
(statearr_29437[(9)] = inst_29411);

return statearr_29437;
})();
var statearr_29441_32354 = state_29419__$1;
(statearr_29441_32354[(2)] = null);

(statearr_29441_32354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (5))){
var inst_29401 = cljs.core.async.close_BANG_(jobs);
var state_29419__$1 = state_29419;
var statearr_29442_32355 = state_29419__$1;
(statearr_29442_32355[(2)] = inst_29401);

(statearr_29442_32355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29420 === (8))){
var inst_29403 = (state_29419[(8)]);
var inst_29409 = (state_29419[(2)]);
var state_29419__$1 = (function (){var statearr_29446 = state_29419;
(statearr_29446[(10)] = inst_29409);

return statearr_29446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29419__$1,(9),results,inst_29403);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0 = (function (){
var statearr_29447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__);

(statearr_29447[(1)] = (1));

return statearr_29447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1 = (function (state_29419){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29419);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29448){if((e29448 instanceof Object)){
var ex__28441__auto__ = e29448;
var statearr_29449_32362 = state_29419;
(statearr_29449_32362[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32367 = state_29419;
state_29419 = G__32367;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = function(state_29419){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1.call(this,state_29419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_29451 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29451[(6)] = c__28795__auto___32332);

return statearr_29451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


var c__28795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_29499){
var state_val_29500 = (state_29499[(1)]);
if((state_val_29500 === (7))){
var inst_29495 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29504_32368 = state_29499__$1;
(statearr_29504_32368[(2)] = inst_29495);

(statearr_29504_32368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (20))){
var state_29499__$1 = state_29499;
var statearr_29508_32372 = state_29499__$1;
(statearr_29508_32372[(2)] = null);

(statearr_29508_32372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (1))){
var state_29499__$1 = state_29499;
var statearr_29516_32374 = state_29499__$1;
(statearr_29516_32374[(2)] = null);

(statearr_29516_32374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (4))){
var inst_29458 = (state_29499[(7)]);
var inst_29458__$1 = (state_29499[(2)]);
var inst_29459 = (inst_29458__$1 == null);
var state_29499__$1 = (function (){var statearr_29517 = state_29499;
(statearr_29517[(7)] = inst_29458__$1);

return statearr_29517;
})();
if(cljs.core.truth_(inst_29459)){
var statearr_29518_32376 = state_29499__$1;
(statearr_29518_32376[(1)] = (5));

} else {
var statearr_29519_32377 = state_29499__$1;
(statearr_29519_32377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (15))){
var inst_29472 = (state_29499[(8)]);
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29499__$1,(18),to,inst_29472);
} else {
if((state_val_29500 === (21))){
var inst_29490 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29523_32379 = state_29499__$1;
(statearr_29523_32379[(2)] = inst_29490);

(statearr_29523_32379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (13))){
var inst_29492 = (state_29499[(2)]);
var state_29499__$1 = (function (){var statearr_29525 = state_29499;
(statearr_29525[(9)] = inst_29492);

return statearr_29525;
})();
var statearr_29527_32380 = state_29499__$1;
(statearr_29527_32380[(2)] = null);

(statearr_29527_32380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (6))){
var inst_29458 = (state_29499[(7)]);
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29499__$1,(11),inst_29458);
} else {
if((state_val_29500 === (17))){
var inst_29485 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
if(cljs.core.truth_(inst_29485)){
var statearr_29530_32381 = state_29499__$1;
(statearr_29530_32381[(1)] = (19));

} else {
var statearr_29534_32382 = state_29499__$1;
(statearr_29534_32382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (3))){
var inst_29497 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29499__$1,inst_29497);
} else {
if((state_val_29500 === (12))){
var inst_29469 = (state_29499[(10)]);
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29499__$1,(14),inst_29469);
} else {
if((state_val_29500 === (2))){
var state_29499__$1 = state_29499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29499__$1,(4),results);
} else {
if((state_val_29500 === (19))){
var state_29499__$1 = state_29499;
var statearr_29539_32387 = state_29499__$1;
(statearr_29539_32387[(2)] = null);

(statearr_29539_32387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (11))){
var inst_29469 = (state_29499[(2)]);
var state_29499__$1 = (function (){var statearr_29540 = state_29499;
(statearr_29540[(10)] = inst_29469);

return statearr_29540;
})();
var statearr_29541_32389 = state_29499__$1;
(statearr_29541_32389[(2)] = null);

(statearr_29541_32389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (9))){
var state_29499__$1 = state_29499;
var statearr_29543_32390 = state_29499__$1;
(statearr_29543_32390[(2)] = null);

(statearr_29543_32390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (5))){
var state_29499__$1 = state_29499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29544_32391 = state_29499__$1;
(statearr_29544_32391[(1)] = (8));

} else {
var statearr_29545_32392 = state_29499__$1;
(statearr_29545_32392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (14))){
var inst_29472 = (state_29499[(8)]);
var inst_29472__$1 = (state_29499[(2)]);
var inst_29478 = (inst_29472__$1 == null);
var inst_29479 = cljs.core.not(inst_29478);
var state_29499__$1 = (function (){var statearr_29549 = state_29499;
(statearr_29549[(8)] = inst_29472__$1);

return statearr_29549;
})();
if(inst_29479){
var statearr_29553_32394 = state_29499__$1;
(statearr_29553_32394[(1)] = (15));

} else {
var statearr_29555_32395 = state_29499__$1;
(statearr_29555_32395[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (16))){
var state_29499__$1 = state_29499;
var statearr_29557_32397 = state_29499__$1;
(statearr_29557_32397[(2)] = false);

(statearr_29557_32397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (10))){
var inst_29466 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29560_32399 = state_29499__$1;
(statearr_29560_32399[(2)] = inst_29466);

(statearr_29560_32399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (18))){
var inst_29482 = (state_29499[(2)]);
var state_29499__$1 = state_29499;
var statearr_29561_32400 = state_29499__$1;
(statearr_29561_32400[(2)] = inst_29482);

(statearr_29561_32400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29500 === (8))){
var inst_29463 = cljs.core.async.close_BANG_(to);
var state_29499__$1 = state_29499;
var statearr_29562_32402 = state_29499__$1;
(statearr_29562_32402[(2)] = inst_29463);

(statearr_29562_32402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0 = (function (){
var statearr_29567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__);

(statearr_29567[(1)] = (1));

return statearr_29567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1 = (function (state_29499){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29499);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29570){if((e29570 instanceof Object)){
var ex__28441__auto__ = e29570;
var statearr_29572_32405 = state_29499;
(statearr_29572_32405[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32406 = state_29499;
state_29499 = G__32406;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__ = function(state_29499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1.call(this,state_29499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28438__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_29574 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29574[(6)] = c__28795__auto__);

return statearr_29574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));

return c__28795__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29577 = arguments.length;
switch (G__29577) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29596 = arguments.length;
switch (G__29596) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29625 = arguments.length;
switch (G__29625) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28795__auto___32424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_29660){
var state_val_29661 = (state_29660[(1)]);
if((state_val_29661 === (7))){
var inst_29656 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
var statearr_29669_32425 = state_29660__$1;
(statearr_29669_32425[(2)] = inst_29656);

(statearr_29669_32425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (1))){
var state_29660__$1 = state_29660;
var statearr_29676_32426 = state_29660__$1;
(statearr_29676_32426[(2)] = null);

(statearr_29676_32426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (4))){
var inst_29635 = (state_29660[(7)]);
var inst_29635__$1 = (state_29660[(2)]);
var inst_29636 = (inst_29635__$1 == null);
var state_29660__$1 = (function (){var statearr_29678 = state_29660;
(statearr_29678[(7)] = inst_29635__$1);

return statearr_29678;
})();
if(cljs.core.truth_(inst_29636)){
var statearr_29679_32427 = state_29660__$1;
(statearr_29679_32427[(1)] = (5));

} else {
var statearr_29680_32428 = state_29660__$1;
(statearr_29680_32428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (13))){
var state_29660__$1 = state_29660;
var statearr_29693_32429 = state_29660__$1;
(statearr_29693_32429[(2)] = null);

(statearr_29693_32429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (6))){
var inst_29635 = (state_29660[(7)]);
var inst_29641 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29635) : p.call(null,inst_29635));
var state_29660__$1 = state_29660;
if(cljs.core.truth_(inst_29641)){
var statearr_29696_32431 = state_29660__$1;
(statearr_29696_32431[(1)] = (9));

} else {
var statearr_29697_32432 = state_29660__$1;
(statearr_29697_32432[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (3))){
var inst_29658 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29660__$1,inst_29658);
} else {
if((state_val_29661 === (12))){
var state_29660__$1 = state_29660;
var statearr_29700_32434 = state_29660__$1;
(statearr_29700_32434[(2)] = null);

(statearr_29700_32434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (2))){
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29660__$1,(4),ch);
} else {
if((state_val_29661 === (11))){
var inst_29635 = (state_29660[(7)]);
var inst_29646 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29660__$1,(8),inst_29646,inst_29635);
} else {
if((state_val_29661 === (9))){
var state_29660__$1 = state_29660;
var statearr_29707_32440 = state_29660__$1;
(statearr_29707_32440[(2)] = tc);

(statearr_29707_32440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (5))){
var inst_29638 = cljs.core.async.close_BANG_(tc);
var inst_29639 = cljs.core.async.close_BANG_(fc);
var state_29660__$1 = (function (){var statearr_29709 = state_29660;
(statearr_29709[(8)] = inst_29638);

return statearr_29709;
})();
var statearr_29710_32443 = state_29660__$1;
(statearr_29710_32443[(2)] = inst_29639);

(statearr_29710_32443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (14))){
var inst_29654 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
var statearr_29711_32444 = state_29660__$1;
(statearr_29711_32444[(2)] = inst_29654);

(statearr_29711_32444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (10))){
var state_29660__$1 = state_29660;
var statearr_29713_32448 = state_29660__$1;
(statearr_29713_32448[(2)] = fc);

(statearr_29713_32448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29661 === (8))){
var inst_29648 = (state_29660[(2)]);
var state_29660__$1 = state_29660;
if(cljs.core.truth_(inst_29648)){
var statearr_29715_32452 = state_29660__$1;
(statearr_29715_32452[(1)] = (12));

} else {
var statearr_29718_32453 = state_29660__$1;
(statearr_29718_32453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_29721 = [null,null,null,null,null,null,null,null,null];
(statearr_29721[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_29721[(1)] = (1));

return statearr_29721;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_29660){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29660);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29725){if((e29725 instanceof Object)){
var ex__28441__auto__ = e29725;
var statearr_29727_32484 = state_29660;
(statearr_29727_32484[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32487 = state_29660;
state_29660 = G__32487;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_29660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_29660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_29729 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29729[(6)] = c__28795__auto___32424);

return statearr_29729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_29755){
var state_val_29756 = (state_29755[(1)]);
if((state_val_29756 === (7))){
var inst_29748 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29761_32491 = state_29755__$1;
(statearr_29761_32491[(2)] = inst_29748);

(statearr_29761_32491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (1))){
var inst_29731 = init;
var state_29755__$1 = (function (){var statearr_29766 = state_29755;
(statearr_29766[(7)] = inst_29731);

return statearr_29766;
})();
var statearr_29767_32493 = state_29755__$1;
(statearr_29767_32493[(2)] = null);

(statearr_29767_32493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (4))){
var inst_29734 = (state_29755[(8)]);
var inst_29734__$1 = (state_29755[(2)]);
var inst_29735 = (inst_29734__$1 == null);
var state_29755__$1 = (function (){var statearr_29771 = state_29755;
(statearr_29771[(8)] = inst_29734__$1);

return statearr_29771;
})();
if(cljs.core.truth_(inst_29735)){
var statearr_29772_32496 = state_29755__$1;
(statearr_29772_32496[(1)] = (5));

} else {
var statearr_29773_32497 = state_29755__$1;
(statearr_29773_32497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (6))){
var inst_29739 = (state_29755[(9)]);
var inst_29731 = (state_29755[(7)]);
var inst_29734 = (state_29755[(8)]);
var inst_29739__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29731,inst_29734) : f.call(null,inst_29731,inst_29734));
var inst_29740 = cljs.core.reduced_QMARK_(inst_29739__$1);
var state_29755__$1 = (function (){var statearr_29775 = state_29755;
(statearr_29775[(9)] = inst_29739__$1);

return statearr_29775;
})();
if(inst_29740){
var statearr_29777_32505 = state_29755__$1;
(statearr_29777_32505[(1)] = (8));

} else {
var statearr_29779_32506 = state_29755__$1;
(statearr_29779_32506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (3))){
var inst_29750 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29755__$1,inst_29750);
} else {
if((state_val_29756 === (2))){
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29755__$1,(4),ch);
} else {
if((state_val_29756 === (9))){
var inst_29739 = (state_29755[(9)]);
var inst_29731 = inst_29739;
var state_29755__$1 = (function (){var statearr_29784 = state_29755;
(statearr_29784[(7)] = inst_29731);

return statearr_29784;
})();
var statearr_29786_32507 = state_29755__$1;
(statearr_29786_32507[(2)] = null);

(statearr_29786_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (5))){
var inst_29731 = (state_29755[(7)]);
var state_29755__$1 = state_29755;
var statearr_29788_32509 = state_29755__$1;
(statearr_29788_32509[(2)] = inst_29731);

(statearr_29788_32509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (10))){
var inst_29746 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29792_32510 = state_29755__$1;
(statearr_29792_32510[(2)] = inst_29746);

(statearr_29792_32510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (8))){
var inst_29739 = (state_29755[(9)]);
var inst_29742 = cljs.core.deref(inst_29739);
var state_29755__$1 = state_29755;
var statearr_29794_32515 = state_29755__$1;
(statearr_29794_32515[(2)] = inst_29742);

(statearr_29794_32515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28438__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28438__auto____0 = (function (){
var statearr_29803 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29803[(0)] = cljs$core$async$reduce_$_state_machine__28438__auto__);

(statearr_29803[(1)] = (1));

return statearr_29803;
});
var cljs$core$async$reduce_$_state_machine__28438__auto____1 = (function (state_29755){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29755);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29807){if((e29807 instanceof Object)){
var ex__28441__auto__ = e29807;
var statearr_29808_32527 = state_29755;
(statearr_29808_32527[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29807;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32528 = state_29755;
state_29755 = G__32528;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28438__auto__ = function(state_29755){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28438__auto____1.call(this,state_29755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28438__auto____0;
cljs$core$async$reduce_$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28438__auto____1;
return cljs$core$async$reduce_$_state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_29811 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29811[(6)] = c__28795__auto__);

return statearr_29811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));

return c__28795__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_29819){
var state_val_29820 = (state_29819[(1)]);
if((state_val_29820 === (1))){
var inst_29814 = cljs.core.async.reduce(f__$1,init,ch);
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29819__$1,(2),inst_29814);
} else {
if((state_val_29820 === (2))){
var inst_29816 = (state_29819[(2)]);
var inst_29817 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29816) : f__$1.call(null,inst_29816));
var state_29819__$1 = state_29819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29819__$1,inst_29817);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28438__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28438__auto____0 = (function (){
var statearr_29827 = [null,null,null,null,null,null,null];
(statearr_29827[(0)] = cljs$core$async$transduce_$_state_machine__28438__auto__);

(statearr_29827[(1)] = (1));

return statearr_29827;
});
var cljs$core$async$transduce_$_state_machine__28438__auto____1 = (function (state_29819){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29819);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29833){if((e29833 instanceof Object)){
var ex__28441__auto__ = e29833;
var statearr_29835_32541 = state_29819;
(statearr_29835_32541[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32542 = state_29819;
state_29819 = G__32542;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28438__auto__ = function(state_29819){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28438__auto____1.call(this,state_29819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28438__auto____0;
cljs$core$async$transduce_$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28438__auto____1;
return cljs$core$async$transduce_$_state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_29838 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29838[(6)] = c__28795__auto__);

return statearr_29838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));

return c__28795__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29845 = arguments.length;
switch (G__29845) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_29874){
var state_val_29875 = (state_29874[(1)]);
if((state_val_29875 === (7))){
var inst_29856 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29886_32547 = state_29874__$1;
(statearr_29886_32547[(2)] = inst_29856);

(statearr_29886_32547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (1))){
var inst_29849 = cljs.core.seq(coll);
var inst_29850 = inst_29849;
var state_29874__$1 = (function (){var statearr_29887 = state_29874;
(statearr_29887[(7)] = inst_29850);

return statearr_29887;
})();
var statearr_29888_32551 = state_29874__$1;
(statearr_29888_32551[(2)] = null);

(statearr_29888_32551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (4))){
var inst_29850 = (state_29874[(7)]);
var inst_29854 = cljs.core.first(inst_29850);
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29874__$1,(7),ch,inst_29854);
} else {
if((state_val_29875 === (13))){
var inst_29868 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29894_32552 = state_29874__$1;
(statearr_29894_32552[(2)] = inst_29868);

(statearr_29894_32552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (6))){
var inst_29859 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
if(cljs.core.truth_(inst_29859)){
var statearr_29896_32555 = state_29874__$1;
(statearr_29896_32555[(1)] = (8));

} else {
var statearr_29900_32556 = state_29874__$1;
(statearr_29900_32556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (3))){
var inst_29872 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29874__$1,inst_29872);
} else {
if((state_val_29875 === (12))){
var state_29874__$1 = state_29874;
var statearr_29901_32557 = state_29874__$1;
(statearr_29901_32557[(2)] = null);

(statearr_29901_32557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (2))){
var inst_29850 = (state_29874[(7)]);
var state_29874__$1 = state_29874;
if(cljs.core.truth_(inst_29850)){
var statearr_29903_32560 = state_29874__$1;
(statearr_29903_32560[(1)] = (4));

} else {
var statearr_29906_32561 = state_29874__$1;
(statearr_29906_32561[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (11))){
var inst_29865 = cljs.core.async.close_BANG_(ch);
var state_29874__$1 = state_29874;
var statearr_29908_32563 = state_29874__$1;
(statearr_29908_32563[(2)] = inst_29865);

(statearr_29908_32563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (9))){
var state_29874__$1 = state_29874;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29915_32565 = state_29874__$1;
(statearr_29915_32565[(1)] = (11));

} else {
var statearr_29917_32569 = state_29874__$1;
(statearr_29917_32569[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (5))){
var inst_29850 = (state_29874[(7)]);
var state_29874__$1 = state_29874;
var statearr_29918_32571 = state_29874__$1;
(statearr_29918_32571[(2)] = inst_29850);

(statearr_29918_32571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (10))){
var inst_29870 = (state_29874[(2)]);
var state_29874__$1 = state_29874;
var statearr_29919_32572 = state_29874__$1;
(statearr_29919_32572[(2)] = inst_29870);

(statearr_29919_32572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (8))){
var inst_29850 = (state_29874[(7)]);
var inst_29861 = cljs.core.next(inst_29850);
var inst_29850__$1 = inst_29861;
var state_29874__$1 = (function (){var statearr_29920 = state_29874;
(statearr_29920[(7)] = inst_29850__$1);

return statearr_29920;
})();
var statearr_29921_32576 = state_29874__$1;
(statearr_29921_32576[(2)] = null);

(statearr_29921_32576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_29924 = [null,null,null,null,null,null,null,null];
(statearr_29924[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_29924[(1)] = (1));

return statearr_29924;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_29874){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_29874);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e29925){if((e29925 instanceof Object)){
var ex__28441__auto__ = e29925;
var statearr_29926_32587 = state_29874;
(statearr_29926_32587[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29925;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32594 = state_29874;
state_29874 = G__32594;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_29874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_29874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_29930 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_29930[(6)] = c__28795__auto__);

return statearr_29930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));

return c__28795__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29978 = (function (ch,cs,meta29979){
this.ch = ch;
this.cs = cs;
this.meta29979 = meta29979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29980,meta29979__$1){
var self__ = this;
var _29980__$1 = this;
return (new cljs.core.async.t_cljs$core$async29978(self__.ch,self__.cs,meta29979__$1));
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29980){
var self__ = this;
var _29980__$1 = this;
return self__.meta29979;
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29979","meta29979",-569028062,null)], null);
}));

(cljs.core.async.t_cljs$core$async29978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29978");

(cljs.core.async.t_cljs$core$async29978.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29978.
 */
cljs.core.async.__GT_t_cljs$core$async29978 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29978(ch__$1,cs__$1,meta29979){
return (new cljs.core.async.t_cljs$core$async29978(ch__$1,cs__$1,meta29979));
});

}

return (new cljs.core.async.t_cljs$core$async29978(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28795__auto___32682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_30157){
var state_val_30158 = (state_30157[(1)]);
if((state_val_30158 === (7))){
var inst_30147 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30159_32684 = state_30157__$1;
(statearr_30159_32684[(2)] = inst_30147);

(statearr_30159_32684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (20))){
var inst_30041 = (state_30157[(7)]);
var inst_30054 = cljs.core.first(inst_30041);
var inst_30055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30054,(0),null);
var inst_30056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30054,(1),null);
var state_30157__$1 = (function (){var statearr_30167 = state_30157;
(statearr_30167[(8)] = inst_30055);

return statearr_30167;
})();
if(cljs.core.truth_(inst_30056)){
var statearr_30168_32686 = state_30157__$1;
(statearr_30168_32686[(1)] = (22));

} else {
var statearr_30170_32692 = state_30157__$1;
(statearr_30170_32692[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (27))){
var inst_30085 = (state_30157[(9)]);
var inst_30097 = (state_30157[(10)]);
var inst_30087 = (state_30157[(11)]);
var inst_30002 = (state_30157[(12)]);
var inst_30097__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30085,inst_30087);
var inst_30099 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30097__$1,inst_30002,done);
var state_30157__$1 = (function (){var statearr_30174 = state_30157;
(statearr_30174[(10)] = inst_30097__$1);

return statearr_30174;
})();
if(cljs.core.truth_(inst_30099)){
var statearr_30176_32699 = state_30157__$1;
(statearr_30176_32699[(1)] = (30));

} else {
var statearr_30177_32700 = state_30157__$1;
(statearr_30177_32700[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (1))){
var state_30157__$1 = state_30157;
var statearr_30181_32701 = state_30157__$1;
(statearr_30181_32701[(2)] = null);

(statearr_30181_32701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (24))){
var inst_30041 = (state_30157[(7)]);
var inst_30061 = (state_30157[(2)]);
var inst_30062 = cljs.core.next(inst_30041);
var inst_30011 = inst_30062;
var inst_30012 = null;
var inst_30013 = (0);
var inst_30014 = (0);
var state_30157__$1 = (function (){var statearr_30184 = state_30157;
(statearr_30184[(13)] = inst_30011);

(statearr_30184[(14)] = inst_30061);

(statearr_30184[(15)] = inst_30014);

(statearr_30184[(16)] = inst_30012);

(statearr_30184[(17)] = inst_30013);

return statearr_30184;
})();
var statearr_30189_32705 = state_30157__$1;
(statearr_30189_32705[(2)] = null);

(statearr_30189_32705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (39))){
var state_30157__$1 = state_30157;
var statearr_30194_32710 = state_30157__$1;
(statearr_30194_32710[(2)] = null);

(statearr_30194_32710[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (4))){
var inst_30002 = (state_30157[(12)]);
var inst_30002__$1 = (state_30157[(2)]);
var inst_30003 = (inst_30002__$1 == null);
var state_30157__$1 = (function (){var statearr_30196 = state_30157;
(statearr_30196[(12)] = inst_30002__$1);

return statearr_30196;
})();
if(cljs.core.truth_(inst_30003)){
var statearr_30197_32711 = state_30157__$1;
(statearr_30197_32711[(1)] = (5));

} else {
var statearr_30198_32712 = state_30157__$1;
(statearr_30198_32712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (15))){
var inst_30011 = (state_30157[(13)]);
var inst_30014 = (state_30157[(15)]);
var inst_30012 = (state_30157[(16)]);
var inst_30013 = (state_30157[(17)]);
var inst_30037 = (state_30157[(2)]);
var inst_30038 = (inst_30014 + (1));
var tmp30190 = inst_30011;
var tmp30191 = inst_30012;
var tmp30192 = inst_30013;
var inst_30011__$1 = tmp30190;
var inst_30012__$1 = tmp30191;
var inst_30013__$1 = tmp30192;
var inst_30014__$1 = inst_30038;
var state_30157__$1 = (function (){var statearr_30199 = state_30157;
(statearr_30199[(13)] = inst_30011__$1);

(statearr_30199[(15)] = inst_30014__$1);

(statearr_30199[(16)] = inst_30012__$1);

(statearr_30199[(18)] = inst_30037);

(statearr_30199[(17)] = inst_30013__$1);

return statearr_30199;
})();
var statearr_30206_32724 = state_30157__$1;
(statearr_30206_32724[(2)] = null);

(statearr_30206_32724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (21))){
var inst_30065 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30218_32725 = state_30157__$1;
(statearr_30218_32725[(2)] = inst_30065);

(statearr_30218_32725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (31))){
var inst_30097 = (state_30157[(10)]);
var inst_30102 = done(null);
var inst_30103 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30097);
var state_30157__$1 = (function (){var statearr_30219 = state_30157;
(statearr_30219[(19)] = inst_30102);

return statearr_30219;
})();
var statearr_30220_32728 = state_30157__$1;
(statearr_30220_32728[(2)] = inst_30103);

(statearr_30220_32728[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (32))){
var inst_30086 = (state_30157[(20)]);
var inst_30085 = (state_30157[(9)]);
var inst_30087 = (state_30157[(11)]);
var inst_30084 = (state_30157[(21)]);
var inst_30105 = (state_30157[(2)]);
var inst_30106 = (inst_30087 + (1));
var tmp30211 = inst_30086;
var tmp30212 = inst_30085;
var tmp30213 = inst_30084;
var inst_30084__$1 = tmp30213;
var inst_30085__$1 = tmp30212;
var inst_30086__$1 = tmp30211;
var inst_30087__$1 = inst_30106;
var state_30157__$1 = (function (){var statearr_30231 = state_30157;
(statearr_30231[(22)] = inst_30105);

(statearr_30231[(20)] = inst_30086__$1);

(statearr_30231[(9)] = inst_30085__$1);

(statearr_30231[(11)] = inst_30087__$1);

(statearr_30231[(21)] = inst_30084__$1);

return statearr_30231;
})();
var statearr_30236_32729 = state_30157__$1;
(statearr_30236_32729[(2)] = null);

(statearr_30236_32729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (40))){
var inst_30118 = (state_30157[(23)]);
var inst_30122 = done(null);
var inst_30124 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30118);
var state_30157__$1 = (function (){var statearr_30240 = state_30157;
(statearr_30240[(24)] = inst_30122);

return statearr_30240;
})();
var statearr_30241_32730 = state_30157__$1;
(statearr_30241_32730[(2)] = inst_30124);

(statearr_30241_32730[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (33))){
var inst_30109 = (state_30157[(25)]);
var inst_30111 = cljs.core.chunked_seq_QMARK_(inst_30109);
var state_30157__$1 = state_30157;
if(inst_30111){
var statearr_30246_32731 = state_30157__$1;
(statearr_30246_32731[(1)] = (36));

} else {
var statearr_30250_32732 = state_30157__$1;
(statearr_30250_32732[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (13))){
var inst_30025 = (state_30157[(26)]);
var inst_30034 = cljs.core.async.close_BANG_(inst_30025);
var state_30157__$1 = state_30157;
var statearr_30258_32734 = state_30157__$1;
(statearr_30258_32734[(2)] = inst_30034);

(statearr_30258_32734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (22))){
var inst_30055 = (state_30157[(8)]);
var inst_30058 = cljs.core.async.close_BANG_(inst_30055);
var state_30157__$1 = state_30157;
var statearr_30260_32738 = state_30157__$1;
(statearr_30260_32738[(2)] = inst_30058);

(statearr_30260_32738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (36))){
var inst_30109 = (state_30157[(25)]);
var inst_30113 = cljs.core.chunk_first(inst_30109);
var inst_30114 = cljs.core.chunk_rest(inst_30109);
var inst_30115 = cljs.core.count(inst_30113);
var inst_30084 = inst_30114;
var inst_30085 = inst_30113;
var inst_30086 = inst_30115;
var inst_30087 = (0);
var state_30157__$1 = (function (){var statearr_30267 = state_30157;
(statearr_30267[(20)] = inst_30086);

(statearr_30267[(9)] = inst_30085);

(statearr_30267[(11)] = inst_30087);

(statearr_30267[(21)] = inst_30084);

return statearr_30267;
})();
var statearr_30268_32744 = state_30157__$1;
(statearr_30268_32744[(2)] = null);

(statearr_30268_32744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (41))){
var inst_30109 = (state_30157[(25)]);
var inst_30126 = (state_30157[(2)]);
var inst_30127 = cljs.core.next(inst_30109);
var inst_30084 = inst_30127;
var inst_30085 = null;
var inst_30086 = (0);
var inst_30087 = (0);
var state_30157__$1 = (function (){var statearr_30269 = state_30157;
(statearr_30269[(20)] = inst_30086);

(statearr_30269[(9)] = inst_30085);

(statearr_30269[(11)] = inst_30087);

(statearr_30269[(27)] = inst_30126);

(statearr_30269[(21)] = inst_30084);

return statearr_30269;
})();
var statearr_30272_32750 = state_30157__$1;
(statearr_30272_32750[(2)] = null);

(statearr_30272_32750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (43))){
var state_30157__$1 = state_30157;
var statearr_30275_32754 = state_30157__$1;
(statearr_30275_32754[(2)] = null);

(statearr_30275_32754[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (29))){
var inst_30135 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30277_32755 = state_30157__$1;
(statearr_30277_32755[(2)] = inst_30135);

(statearr_30277_32755[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (44))){
var inst_30144 = (state_30157[(2)]);
var state_30157__$1 = (function (){var statearr_30280 = state_30157;
(statearr_30280[(28)] = inst_30144);

return statearr_30280;
})();
var statearr_30282_32759 = state_30157__$1;
(statearr_30282_32759[(2)] = null);

(statearr_30282_32759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (6))){
var inst_30076 = (state_30157[(29)]);
var inst_30075 = cljs.core.deref(cs);
var inst_30076__$1 = cljs.core.keys(inst_30075);
var inst_30077 = cljs.core.count(inst_30076__$1);
var inst_30078 = cljs.core.reset_BANG_(dctr,inst_30077);
var inst_30083 = cljs.core.seq(inst_30076__$1);
var inst_30084 = inst_30083;
var inst_30085 = null;
var inst_30086 = (0);
var inst_30087 = (0);
var state_30157__$1 = (function (){var statearr_30284 = state_30157;
(statearr_30284[(20)] = inst_30086);

(statearr_30284[(9)] = inst_30085);

(statearr_30284[(30)] = inst_30078);

(statearr_30284[(11)] = inst_30087);

(statearr_30284[(21)] = inst_30084);

(statearr_30284[(29)] = inst_30076__$1);

return statearr_30284;
})();
var statearr_30290_32760 = state_30157__$1;
(statearr_30290_32760[(2)] = null);

(statearr_30290_32760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (28))){
var inst_30084 = (state_30157[(21)]);
var inst_30109 = (state_30157[(25)]);
var inst_30109__$1 = cljs.core.seq(inst_30084);
var state_30157__$1 = (function (){var statearr_30298 = state_30157;
(statearr_30298[(25)] = inst_30109__$1);

return statearr_30298;
})();
if(inst_30109__$1){
var statearr_30300_32761 = state_30157__$1;
(statearr_30300_32761[(1)] = (33));

} else {
var statearr_30302_32762 = state_30157__$1;
(statearr_30302_32762[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (25))){
var inst_30086 = (state_30157[(20)]);
var inst_30087 = (state_30157[(11)]);
var inst_30093 = (inst_30087 < inst_30086);
var inst_30094 = inst_30093;
var state_30157__$1 = state_30157;
if(cljs.core.truth_(inst_30094)){
var statearr_30303_32763 = state_30157__$1;
(statearr_30303_32763[(1)] = (27));

} else {
var statearr_30307_32764 = state_30157__$1;
(statearr_30307_32764[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (34))){
var state_30157__$1 = state_30157;
var statearr_30308_32765 = state_30157__$1;
(statearr_30308_32765[(2)] = null);

(statearr_30308_32765[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (17))){
var state_30157__$1 = state_30157;
var statearr_30309_32767 = state_30157__$1;
(statearr_30309_32767[(2)] = null);

(statearr_30309_32767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (3))){
var inst_30150 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30157__$1,inst_30150);
} else {
if((state_val_30158 === (12))){
var inst_30070 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30311_32773 = state_30157__$1;
(statearr_30311_32773[(2)] = inst_30070);

(statearr_30311_32773[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (2))){
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30157__$1,(4),ch);
} else {
if((state_val_30158 === (23))){
var state_30157__$1 = state_30157;
var statearr_30313_32776 = state_30157__$1;
(statearr_30313_32776[(2)] = null);

(statearr_30313_32776[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (35))){
var inst_30133 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30315_32777 = state_30157__$1;
(statearr_30315_32777[(2)] = inst_30133);

(statearr_30315_32777[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (19))){
var inst_30041 = (state_30157[(7)]);
var inst_30046 = cljs.core.chunk_first(inst_30041);
var inst_30047 = cljs.core.chunk_rest(inst_30041);
var inst_30048 = cljs.core.count(inst_30046);
var inst_30011 = inst_30047;
var inst_30012 = inst_30046;
var inst_30013 = inst_30048;
var inst_30014 = (0);
var state_30157__$1 = (function (){var statearr_30320 = state_30157;
(statearr_30320[(13)] = inst_30011);

(statearr_30320[(15)] = inst_30014);

(statearr_30320[(16)] = inst_30012);

(statearr_30320[(17)] = inst_30013);

return statearr_30320;
})();
var statearr_30321_32781 = state_30157__$1;
(statearr_30321_32781[(2)] = null);

(statearr_30321_32781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (11))){
var inst_30011 = (state_30157[(13)]);
var inst_30041 = (state_30157[(7)]);
var inst_30041__$1 = cljs.core.seq(inst_30011);
var state_30157__$1 = (function (){var statearr_30324 = state_30157;
(statearr_30324[(7)] = inst_30041__$1);

return statearr_30324;
})();
if(inst_30041__$1){
var statearr_30325_32793 = state_30157__$1;
(statearr_30325_32793[(1)] = (16));

} else {
var statearr_30326_32794 = state_30157__$1;
(statearr_30326_32794[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (9))){
var inst_30072 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30327_32795 = state_30157__$1;
(statearr_30327_32795[(2)] = inst_30072);

(statearr_30327_32795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (5))){
var inst_30009 = cljs.core.deref(cs);
var inst_30010 = cljs.core.seq(inst_30009);
var inst_30011 = inst_30010;
var inst_30012 = null;
var inst_30013 = (0);
var inst_30014 = (0);
var state_30157__$1 = (function (){var statearr_30328 = state_30157;
(statearr_30328[(13)] = inst_30011);

(statearr_30328[(15)] = inst_30014);

(statearr_30328[(16)] = inst_30012);

(statearr_30328[(17)] = inst_30013);

return statearr_30328;
})();
var statearr_30329_32802 = state_30157__$1;
(statearr_30329_32802[(2)] = null);

(statearr_30329_32802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (14))){
var state_30157__$1 = state_30157;
var statearr_30330_32807 = state_30157__$1;
(statearr_30330_32807[(2)] = null);

(statearr_30330_32807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (45))){
var inst_30141 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30332_32808 = state_30157__$1;
(statearr_30332_32808[(2)] = inst_30141);

(statearr_30332_32808[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (26))){
var inst_30076 = (state_30157[(29)]);
var inst_30137 = (state_30157[(2)]);
var inst_30138 = cljs.core.seq(inst_30076);
var state_30157__$1 = (function (){var statearr_30334 = state_30157;
(statearr_30334[(31)] = inst_30137);

return statearr_30334;
})();
if(inst_30138){
var statearr_30335_32815 = state_30157__$1;
(statearr_30335_32815[(1)] = (42));

} else {
var statearr_30336_32816 = state_30157__$1;
(statearr_30336_32816[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (16))){
var inst_30041 = (state_30157[(7)]);
var inst_30044 = cljs.core.chunked_seq_QMARK_(inst_30041);
var state_30157__$1 = state_30157;
if(inst_30044){
var statearr_30340_32817 = state_30157__$1;
(statearr_30340_32817[(1)] = (19));

} else {
var statearr_30341_32818 = state_30157__$1;
(statearr_30341_32818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (38))){
var inst_30130 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30344_32819 = state_30157__$1;
(statearr_30344_32819[(2)] = inst_30130);

(statearr_30344_32819[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (30))){
var state_30157__$1 = state_30157;
var statearr_30346_32820 = state_30157__$1;
(statearr_30346_32820[(2)] = null);

(statearr_30346_32820[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (10))){
var inst_30014 = (state_30157[(15)]);
var inst_30012 = (state_30157[(16)]);
var inst_30023 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30012,inst_30014);
var inst_30025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30023,(0),null);
var inst_30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30023,(1),null);
var state_30157__$1 = (function (){var statearr_30347 = state_30157;
(statearr_30347[(26)] = inst_30025);

return statearr_30347;
})();
if(cljs.core.truth_(inst_30027)){
var statearr_30348_32821 = state_30157__$1;
(statearr_30348_32821[(1)] = (13));

} else {
var statearr_30349_32825 = state_30157__$1;
(statearr_30349_32825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (18))){
var inst_30068 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30360_32832 = state_30157__$1;
(statearr_30360_32832[(2)] = inst_30068);

(statearr_30360_32832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (42))){
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30157__$1,(45),dchan);
} else {
if((state_val_30158 === (37))){
var inst_30002 = (state_30157[(12)]);
var inst_30118 = (state_30157[(23)]);
var inst_30109 = (state_30157[(25)]);
var inst_30118__$1 = cljs.core.first(inst_30109);
var inst_30119 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30118__$1,inst_30002,done);
var state_30157__$1 = (function (){var statearr_30365 = state_30157;
(statearr_30365[(23)] = inst_30118__$1);

return statearr_30365;
})();
if(cljs.core.truth_(inst_30119)){
var statearr_30366_32839 = state_30157__$1;
(statearr_30366_32839[(1)] = (39));

} else {
var statearr_30367_32840 = state_30157__$1;
(statearr_30367_32840[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (8))){
var inst_30014 = (state_30157[(15)]);
var inst_30013 = (state_30157[(17)]);
var inst_30016 = (inst_30014 < inst_30013);
var inst_30017 = inst_30016;
var state_30157__$1 = state_30157;
if(cljs.core.truth_(inst_30017)){
var statearr_30372_32841 = state_30157__$1;
(statearr_30372_32841[(1)] = (10));

} else {
var statearr_30374_32843 = state_30157__$1;
(statearr_30374_32843[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28438__auto__ = null;
var cljs$core$async$mult_$_state_machine__28438__auto____0 = (function (){
var statearr_30379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30379[(0)] = cljs$core$async$mult_$_state_machine__28438__auto__);

(statearr_30379[(1)] = (1));

return statearr_30379;
});
var cljs$core$async$mult_$_state_machine__28438__auto____1 = (function (state_30157){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_30157);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e30381){if((e30381 instanceof Object)){
var ex__28441__auto__ = e30381;
var statearr_30382_32845 = state_30157;
(statearr_30382_32845[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32849 = state_30157;
state_30157 = G__32849;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28438__auto__ = function(state_30157){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28438__auto____1.call(this,state_30157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28438__auto____0;
cljs$core$async$mult_$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28438__auto____1;
return cljs$core$async$mult_$_state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_30385 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_30385[(6)] = c__28795__auto___32682);

return statearr_30385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30391 = arguments.length;
switch (G__30391) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32873 = arguments.length;
var i__4790__auto___32874 = (0);
while(true){
if((i__4790__auto___32874 < len__4789__auto___32873)){
args__4795__auto__.push((arguments[i__4790__auto___32874]));

var G__32875 = (i__4790__auto___32874 + (1));
i__4790__auto___32874 = G__32875;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30467){
var map__30470 = p__30467;
var map__30470__$1 = (((((!((map__30470 == null))))?(((((map__30470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30470):map__30470);
var opts = map__30470__$1;
var statearr_30482_32877 = state;
(statearr_30482_32877[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30483_32878 = state;
(statearr_30483_32878[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30485_32879 = state;
(statearr_30485_32879[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30462){
var G__30463 = cljs.core.first(seq30462);
var seq30462__$1 = cljs.core.next(seq30462);
var G__30464 = cljs.core.first(seq30462__$1);
var seq30462__$2 = cljs.core.next(seq30462__$1);
var G__30465 = cljs.core.first(seq30462__$2);
var seq30462__$3 = cljs.core.next(seq30462__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30463,G__30464,G__30465,seq30462__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30496 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30497){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30497 = meta30497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30498,meta30497__$1){
var self__ = this;
var _30498__$1 = this;
return (new cljs.core.async.t_cljs$core$async30496(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30497__$1));
}));

(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30498){
var self__ = this;
var _30498__$1 = this;
return self__.meta30497;
}));

(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30496.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30497","meta30497",-495921033,null)], null);
}));

(cljs.core.async.t_cljs$core$async30496.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30496");

(cljs.core.async.t_cljs$core$async30496.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30496");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30496.
 */
cljs.core.async.__GT_t_cljs$core$async30496 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30496(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30497){
return (new cljs.core.async.t_cljs$core$async30496(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30497));
});

}

return (new cljs.core.async.t_cljs$core$async30496(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28795__auto___32908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_30626){
var state_val_30627 = (state_30626[(1)]);
if((state_val_30627 === (7))){
var inst_30535 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30629_32910 = state_30626__$1;
(statearr_30629_32910[(2)] = inst_30535);

(statearr_30629_32910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (20))){
var inst_30547 = (state_30626[(7)]);
var state_30626__$1 = state_30626;
var statearr_30630_32911 = state_30626__$1;
(statearr_30630_32911[(2)] = inst_30547);

(statearr_30630_32911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (27))){
var state_30626__$1 = state_30626;
var statearr_30633_32914 = state_30626__$1;
(statearr_30633_32914[(2)] = null);

(statearr_30633_32914[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (1))){
var inst_30518 = (state_30626[(8)]);
var inst_30518__$1 = calc_state();
var inst_30520 = (inst_30518__$1 == null);
var inst_30521 = cljs.core.not(inst_30520);
var state_30626__$1 = (function (){var statearr_30634 = state_30626;
(statearr_30634[(8)] = inst_30518__$1);

return statearr_30634;
})();
if(inst_30521){
var statearr_30635_32918 = state_30626__$1;
(statearr_30635_32918[(1)] = (2));

} else {
var statearr_30636_32920 = state_30626__$1;
(statearr_30636_32920[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (24))){
var inst_30571 = (state_30626[(9)]);
var inst_30595 = (state_30626[(10)]);
var inst_30581 = (state_30626[(11)]);
var inst_30595__$1 = (inst_30571.cljs$core$IFn$_invoke$arity$1 ? inst_30571.cljs$core$IFn$_invoke$arity$1(inst_30581) : inst_30571.call(null,inst_30581));
var state_30626__$1 = (function (){var statearr_30637 = state_30626;
(statearr_30637[(10)] = inst_30595__$1);

return statearr_30637;
})();
if(cljs.core.truth_(inst_30595__$1)){
var statearr_30638_32922 = state_30626__$1;
(statearr_30638_32922[(1)] = (29));

} else {
var statearr_30639_32923 = state_30626__$1;
(statearr_30639_32923[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (4))){
var inst_30538 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30538)){
var statearr_30644_32924 = state_30626__$1;
(statearr_30644_32924[(1)] = (8));

} else {
var statearr_30646_32925 = state_30626__$1;
(statearr_30646_32925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (15))){
var inst_30565 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30565)){
var statearr_30647_32926 = state_30626__$1;
(statearr_30647_32926[(1)] = (19));

} else {
var statearr_30653_32927 = state_30626__$1;
(statearr_30653_32927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (21))){
var inst_30570 = (state_30626[(12)]);
var inst_30570__$1 = (state_30626[(2)]);
var inst_30571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30570__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30570__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30570__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30626__$1 = (function (){var statearr_30655 = state_30626;
(statearr_30655[(12)] = inst_30570__$1);

(statearr_30655[(9)] = inst_30571);

(statearr_30655[(13)] = inst_30572);

return statearr_30655;
})();
return cljs.core.async.ioc_alts_BANG_(state_30626__$1,(22),inst_30573);
} else {
if((state_val_30627 === (31))){
var inst_30604 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30604)){
var statearr_30656_32934 = state_30626__$1;
(statearr_30656_32934[(1)] = (32));

} else {
var statearr_30657_32935 = state_30626__$1;
(statearr_30657_32935[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (32))){
var inst_30580 = (state_30626[(14)]);
var state_30626__$1 = state_30626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30626__$1,(35),out,inst_30580);
} else {
if((state_val_30627 === (33))){
var inst_30570 = (state_30626[(12)]);
var inst_30547 = inst_30570;
var state_30626__$1 = (function (){var statearr_30662 = state_30626;
(statearr_30662[(7)] = inst_30547);

return statearr_30662;
})();
var statearr_30665_32940 = state_30626__$1;
(statearr_30665_32940[(2)] = null);

(statearr_30665_32940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (13))){
var inst_30547 = (state_30626[(7)]);
var inst_30554 = inst_30547.cljs$lang$protocol_mask$partition0$;
var inst_30555 = (inst_30554 & (64));
var inst_30556 = inst_30547.cljs$core$ISeq$;
var inst_30557 = (cljs.core.PROTOCOL_SENTINEL === inst_30556);
var inst_30558 = ((inst_30555) || (inst_30557));
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30558)){
var statearr_30668_32945 = state_30626__$1;
(statearr_30668_32945[(1)] = (16));

} else {
var statearr_30669_32946 = state_30626__$1;
(statearr_30669_32946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (22))){
var inst_30580 = (state_30626[(14)]);
var inst_30581 = (state_30626[(11)]);
var inst_30579 = (state_30626[(2)]);
var inst_30580__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30579,(0),null);
var inst_30581__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30579,(1),null);
var inst_30582 = (inst_30580__$1 == null);
var inst_30583 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30581__$1,change);
var inst_30584 = ((inst_30582) || (inst_30583));
var state_30626__$1 = (function (){var statearr_30671 = state_30626;
(statearr_30671[(14)] = inst_30580__$1);

(statearr_30671[(11)] = inst_30581__$1);

return statearr_30671;
})();
if(cljs.core.truth_(inst_30584)){
var statearr_30676_32947 = state_30626__$1;
(statearr_30676_32947[(1)] = (23));

} else {
var statearr_30677_32948 = state_30626__$1;
(statearr_30677_32948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (36))){
var inst_30570 = (state_30626[(12)]);
var inst_30547 = inst_30570;
var state_30626__$1 = (function (){var statearr_30678 = state_30626;
(statearr_30678[(7)] = inst_30547);

return statearr_30678;
})();
var statearr_30680_32949 = state_30626__$1;
(statearr_30680_32949[(2)] = null);

(statearr_30680_32949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (29))){
var inst_30595 = (state_30626[(10)]);
var state_30626__$1 = state_30626;
var statearr_30683_32952 = state_30626__$1;
(statearr_30683_32952[(2)] = inst_30595);

(statearr_30683_32952[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (6))){
var state_30626__$1 = state_30626;
var statearr_30686_32953 = state_30626__$1;
(statearr_30686_32953[(2)] = false);

(statearr_30686_32953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (28))){
var inst_30591 = (state_30626[(2)]);
var inst_30592 = calc_state();
var inst_30547 = inst_30592;
var state_30626__$1 = (function (){var statearr_30690 = state_30626;
(statearr_30690[(7)] = inst_30547);

(statearr_30690[(15)] = inst_30591);

return statearr_30690;
})();
var statearr_30693_32956 = state_30626__$1;
(statearr_30693_32956[(2)] = null);

(statearr_30693_32956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (25))){
var inst_30618 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30695_32957 = state_30626__$1;
(statearr_30695_32957[(2)] = inst_30618);

(statearr_30695_32957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (34))){
var inst_30616 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30696_32958 = state_30626__$1;
(statearr_30696_32958[(2)] = inst_30616);

(statearr_30696_32958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (17))){
var state_30626__$1 = state_30626;
var statearr_30699_32959 = state_30626__$1;
(statearr_30699_32959[(2)] = false);

(statearr_30699_32959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (3))){
var state_30626__$1 = state_30626;
var statearr_30700_32960 = state_30626__$1;
(statearr_30700_32960[(2)] = false);

(statearr_30700_32960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (12))){
var inst_30620 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30626__$1,inst_30620);
} else {
if((state_val_30627 === (2))){
var inst_30518 = (state_30626[(8)]);
var inst_30523 = inst_30518.cljs$lang$protocol_mask$partition0$;
var inst_30524 = (inst_30523 & (64));
var inst_30525 = inst_30518.cljs$core$ISeq$;
var inst_30526 = (cljs.core.PROTOCOL_SENTINEL === inst_30525);
var inst_30527 = ((inst_30524) || (inst_30526));
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30527)){
var statearr_30703_32961 = state_30626__$1;
(statearr_30703_32961[(1)] = (5));

} else {
var statearr_30704_32962 = state_30626__$1;
(statearr_30704_32962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (23))){
var inst_30580 = (state_30626[(14)]);
var inst_30586 = (inst_30580 == null);
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30586)){
var statearr_30706_32963 = state_30626__$1;
(statearr_30706_32963[(1)] = (26));

} else {
var statearr_30710_32964 = state_30626__$1;
(statearr_30710_32964[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (35))){
var inst_30607 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30607)){
var statearr_30711_32965 = state_30626__$1;
(statearr_30711_32965[(1)] = (36));

} else {
var statearr_30713_32966 = state_30626__$1;
(statearr_30713_32966[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (19))){
var inst_30547 = (state_30626[(7)]);
var inst_30567 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30547);
var state_30626__$1 = state_30626;
var statearr_30715_32967 = state_30626__$1;
(statearr_30715_32967[(2)] = inst_30567);

(statearr_30715_32967[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (11))){
var inst_30547 = (state_30626[(7)]);
var inst_30551 = (inst_30547 == null);
var inst_30552 = cljs.core.not(inst_30551);
var state_30626__$1 = state_30626;
if(inst_30552){
var statearr_30717_32969 = state_30626__$1;
(statearr_30717_32969[(1)] = (13));

} else {
var statearr_30719_32970 = state_30626__$1;
(statearr_30719_32970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (9))){
var inst_30518 = (state_30626[(8)]);
var state_30626__$1 = state_30626;
var statearr_30723_32971 = state_30626__$1;
(statearr_30723_32971[(2)] = inst_30518);

(statearr_30723_32971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (5))){
var state_30626__$1 = state_30626;
var statearr_30724_32972 = state_30626__$1;
(statearr_30724_32972[(2)] = true);

(statearr_30724_32972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (14))){
var state_30626__$1 = state_30626;
var statearr_30729_32973 = state_30626__$1;
(statearr_30729_32973[(2)] = false);

(statearr_30729_32973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (26))){
var inst_30581 = (state_30626[(11)]);
var inst_30588 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30581);
var state_30626__$1 = state_30626;
var statearr_30731_32980 = state_30626__$1;
(statearr_30731_32980[(2)] = inst_30588);

(statearr_30731_32980[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (16))){
var state_30626__$1 = state_30626;
var statearr_30732_32981 = state_30626__$1;
(statearr_30732_32981[(2)] = true);

(statearr_30732_32981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (38))){
var inst_30612 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30733_32983 = state_30626__$1;
(statearr_30733_32983[(2)] = inst_30612);

(statearr_30733_32983[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (30))){
var inst_30571 = (state_30626[(9)]);
var inst_30572 = (state_30626[(13)]);
var inst_30581 = (state_30626[(11)]);
var inst_30599 = cljs.core.empty_QMARK_(inst_30571);
var inst_30600 = (inst_30572.cljs$core$IFn$_invoke$arity$1 ? inst_30572.cljs$core$IFn$_invoke$arity$1(inst_30581) : inst_30572.call(null,inst_30581));
var inst_30601 = cljs.core.not(inst_30600);
var inst_30602 = ((inst_30599) && (inst_30601));
var state_30626__$1 = state_30626;
var statearr_30738_32985 = state_30626__$1;
(statearr_30738_32985[(2)] = inst_30602);

(statearr_30738_32985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (10))){
var inst_30518 = (state_30626[(8)]);
var inst_30543 = (state_30626[(2)]);
var inst_30544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30543,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30543,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30543,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30547 = inst_30518;
var state_30626__$1 = (function (){var statearr_30743 = state_30626;
(statearr_30743[(7)] = inst_30547);

(statearr_30743[(16)] = inst_30544);

(statearr_30743[(17)] = inst_30545);

(statearr_30743[(18)] = inst_30546);

return statearr_30743;
})();
var statearr_30745_32986 = state_30626__$1;
(statearr_30745_32986[(2)] = null);

(statearr_30745_32986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (18))){
var inst_30562 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30747_32987 = state_30626__$1;
(statearr_30747_32987[(2)] = inst_30562);

(statearr_30747_32987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (37))){
var state_30626__$1 = state_30626;
var statearr_30748_32992 = state_30626__$1;
(statearr_30748_32992[(2)] = null);

(statearr_30748_32992[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (8))){
var inst_30518 = (state_30626[(8)]);
var inst_30540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30518);
var state_30626__$1 = state_30626;
var statearr_30749_32997 = state_30626__$1;
(statearr_30749_32997[(2)] = inst_30540);

(statearr_30749_32997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28438__auto__ = null;
var cljs$core$async$mix_$_state_machine__28438__auto____0 = (function (){
var statearr_30752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30752[(0)] = cljs$core$async$mix_$_state_machine__28438__auto__);

(statearr_30752[(1)] = (1));

return statearr_30752;
});
var cljs$core$async$mix_$_state_machine__28438__auto____1 = (function (state_30626){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_30626);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e30754){if((e30754 instanceof Object)){
var ex__28441__auto__ = e30754;
var statearr_30755_33008 = state_30626;
(statearr_30755_33008[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33009 = state_30626;
state_30626 = G__33009;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28438__auto__ = function(state_30626){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28438__auto____1.call(this,state_30626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28438__auto____0;
cljs$core$async$mix_$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28438__auto____1;
return cljs$core$async$mix_$_state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_30758 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_30758[(6)] = c__28795__auto___32908);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30770 = arguments.length;
switch (G__30770) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30779 = arguments.length;
switch (G__30779) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30775_SHARP_){
if(cljs.core.truth_((p1__30775_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30775_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30775_SHARP_.call(null,topic)))){
return p1__30775_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30775_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30781 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30782){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30782 = meta30782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30783,meta30782__$1){
var self__ = this;
var _30783__$1 = this;
return (new cljs.core.async.t_cljs$core$async30781(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30782__$1));
}));

(cljs.core.async.t_cljs$core$async30781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30783){
var self__ = this;
var _30783__$1 = this;
return self__.meta30782;
}));

(cljs.core.async.t_cljs$core$async30781.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30781.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30781.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30781.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30781.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30781.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30782","meta30782",934442248,null)], null);
}));

(cljs.core.async.t_cljs$core$async30781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30781");

(cljs.core.async.t_cljs$core$async30781.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30781.
 */
cljs.core.async.__GT_t_cljs$core$async30781 = (function cljs$core$async$__GT_t_cljs$core$async30781(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30782){
return (new cljs.core.async.t_cljs$core$async30781(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30782));
});

}

return (new cljs.core.async.t_cljs$core$async30781(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28795__auto___33070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_30887){
var state_val_30888 = (state_30887[(1)]);
if((state_val_30888 === (7))){
var inst_30883 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30889_33071 = state_30887__$1;
(statearr_30889_33071[(2)] = inst_30883);

(statearr_30889_33071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (20))){
var state_30887__$1 = state_30887;
var statearr_30891_33082 = state_30887__$1;
(statearr_30891_33082[(2)] = null);

(statearr_30891_33082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (1))){
var state_30887__$1 = state_30887;
var statearr_30892_33083 = state_30887__$1;
(statearr_30892_33083[(2)] = null);

(statearr_30892_33083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (24))){
var inst_30866 = (state_30887[(7)]);
var inst_30875 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30866);
var state_30887__$1 = state_30887;
var statearr_30893_33090 = state_30887__$1;
(statearr_30893_33090[(2)] = inst_30875);

(statearr_30893_33090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (4))){
var inst_30813 = (state_30887[(8)]);
var inst_30813__$1 = (state_30887[(2)]);
var inst_30814 = (inst_30813__$1 == null);
var state_30887__$1 = (function (){var statearr_30894 = state_30887;
(statearr_30894[(8)] = inst_30813__$1);

return statearr_30894;
})();
if(cljs.core.truth_(inst_30814)){
var statearr_30895_33091 = state_30887__$1;
(statearr_30895_33091[(1)] = (5));

} else {
var statearr_30897_33092 = state_30887__$1;
(statearr_30897_33092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (15))){
var inst_30860 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30900_33099 = state_30887__$1;
(statearr_30900_33099[(2)] = inst_30860);

(statearr_30900_33099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (21))){
var inst_30880 = (state_30887[(2)]);
var state_30887__$1 = (function (){var statearr_30902 = state_30887;
(statearr_30902[(9)] = inst_30880);

return statearr_30902;
})();
var statearr_30903_33103 = state_30887__$1;
(statearr_30903_33103[(2)] = null);

(statearr_30903_33103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (13))){
var inst_30838 = (state_30887[(10)]);
var inst_30840 = cljs.core.chunked_seq_QMARK_(inst_30838);
var state_30887__$1 = state_30887;
if(inst_30840){
var statearr_30906_33104 = state_30887__$1;
(statearr_30906_33104[(1)] = (16));

} else {
var statearr_30908_33105 = state_30887__$1;
(statearr_30908_33105[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (22))){
var inst_30872 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
if(cljs.core.truth_(inst_30872)){
var statearr_30912_33106 = state_30887__$1;
(statearr_30912_33106[(1)] = (23));

} else {
var statearr_30913_33107 = state_30887__$1;
(statearr_30913_33107[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (6))){
var inst_30866 = (state_30887[(7)]);
var inst_30813 = (state_30887[(8)]);
var inst_30868 = (state_30887[(11)]);
var inst_30866__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30813) : topic_fn.call(null,inst_30813));
var inst_30867 = cljs.core.deref(mults);
var inst_30868__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30867,inst_30866__$1);
var state_30887__$1 = (function (){var statearr_30914 = state_30887;
(statearr_30914[(7)] = inst_30866__$1);

(statearr_30914[(11)] = inst_30868__$1);

return statearr_30914;
})();
if(cljs.core.truth_(inst_30868__$1)){
var statearr_30915_33109 = state_30887__$1;
(statearr_30915_33109[(1)] = (19));

} else {
var statearr_30916_33110 = state_30887__$1;
(statearr_30916_33110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (25))){
var inst_30877 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30918_33120 = state_30887__$1;
(statearr_30918_33120[(2)] = inst_30877);

(statearr_30918_33120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (17))){
var inst_30838 = (state_30887[(10)]);
var inst_30851 = cljs.core.first(inst_30838);
var inst_30852 = cljs.core.async.muxch_STAR_(inst_30851);
var inst_30853 = cljs.core.async.close_BANG_(inst_30852);
var inst_30854 = cljs.core.next(inst_30838);
var inst_30823 = inst_30854;
var inst_30824 = null;
var inst_30825 = (0);
var inst_30826 = (0);
var state_30887__$1 = (function (){var statearr_30920 = state_30887;
(statearr_30920[(12)] = inst_30826);

(statearr_30920[(13)] = inst_30825);

(statearr_30920[(14)] = inst_30824);

(statearr_30920[(15)] = inst_30823);

(statearr_30920[(16)] = inst_30853);

return statearr_30920;
})();
var statearr_30924_33137 = state_30887__$1;
(statearr_30924_33137[(2)] = null);

(statearr_30924_33137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (3))){
var inst_30885 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30887__$1,inst_30885);
} else {
if((state_val_30888 === (12))){
var inst_30862 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30925_33138 = state_30887__$1;
(statearr_30925_33138[(2)] = inst_30862);

(statearr_30925_33138[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (2))){
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30887__$1,(4),ch);
} else {
if((state_val_30888 === (23))){
var state_30887__$1 = state_30887;
var statearr_30930_33141 = state_30887__$1;
(statearr_30930_33141[(2)] = null);

(statearr_30930_33141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (19))){
var inst_30813 = (state_30887[(8)]);
var inst_30868 = (state_30887[(11)]);
var inst_30870 = cljs.core.async.muxch_STAR_(inst_30868);
var state_30887__$1 = state_30887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30887__$1,(22),inst_30870,inst_30813);
} else {
if((state_val_30888 === (11))){
var inst_30838 = (state_30887[(10)]);
var inst_30823 = (state_30887[(15)]);
var inst_30838__$1 = cljs.core.seq(inst_30823);
var state_30887__$1 = (function (){var statearr_30932 = state_30887;
(statearr_30932[(10)] = inst_30838__$1);

return statearr_30932;
})();
if(inst_30838__$1){
var statearr_30933_33143 = state_30887__$1;
(statearr_30933_33143[(1)] = (13));

} else {
var statearr_30937_33144 = state_30887__$1;
(statearr_30937_33144[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (9))){
var inst_30864 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30939_33149 = state_30887__$1;
(statearr_30939_33149[(2)] = inst_30864);

(statearr_30939_33149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (5))){
var inst_30820 = cljs.core.deref(mults);
var inst_30821 = cljs.core.vals(inst_30820);
var inst_30822 = cljs.core.seq(inst_30821);
var inst_30823 = inst_30822;
var inst_30824 = null;
var inst_30825 = (0);
var inst_30826 = (0);
var state_30887__$1 = (function (){var statearr_30942 = state_30887;
(statearr_30942[(12)] = inst_30826);

(statearr_30942[(13)] = inst_30825);

(statearr_30942[(14)] = inst_30824);

(statearr_30942[(15)] = inst_30823);

return statearr_30942;
})();
var statearr_30945_33155 = state_30887__$1;
(statearr_30945_33155[(2)] = null);

(statearr_30945_33155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (14))){
var state_30887__$1 = state_30887;
var statearr_30951_33158 = state_30887__$1;
(statearr_30951_33158[(2)] = null);

(statearr_30951_33158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (16))){
var inst_30838 = (state_30887[(10)]);
var inst_30842 = cljs.core.chunk_first(inst_30838);
var inst_30847 = cljs.core.chunk_rest(inst_30838);
var inst_30848 = cljs.core.count(inst_30842);
var inst_30823 = inst_30847;
var inst_30824 = inst_30842;
var inst_30825 = inst_30848;
var inst_30826 = (0);
var state_30887__$1 = (function (){var statearr_30952 = state_30887;
(statearr_30952[(12)] = inst_30826);

(statearr_30952[(13)] = inst_30825);

(statearr_30952[(14)] = inst_30824);

(statearr_30952[(15)] = inst_30823);

return statearr_30952;
})();
var statearr_30954_33165 = state_30887__$1;
(statearr_30954_33165[(2)] = null);

(statearr_30954_33165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (10))){
var inst_30826 = (state_30887[(12)]);
var inst_30825 = (state_30887[(13)]);
var inst_30824 = (state_30887[(14)]);
var inst_30823 = (state_30887[(15)]);
var inst_30831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30824,inst_30826);
var inst_30833 = cljs.core.async.muxch_STAR_(inst_30831);
var inst_30834 = cljs.core.async.close_BANG_(inst_30833);
var inst_30835 = (inst_30826 + (1));
var tmp30948 = inst_30825;
var tmp30949 = inst_30824;
var tmp30950 = inst_30823;
var inst_30823__$1 = tmp30950;
var inst_30824__$1 = tmp30949;
var inst_30825__$1 = tmp30948;
var inst_30826__$1 = inst_30835;
var state_30887__$1 = (function (){var statearr_30958 = state_30887;
(statearr_30958[(12)] = inst_30826__$1);

(statearr_30958[(13)] = inst_30825__$1);

(statearr_30958[(17)] = inst_30834);

(statearr_30958[(14)] = inst_30824__$1);

(statearr_30958[(15)] = inst_30823__$1);

return statearr_30958;
})();
var statearr_30961_33169 = state_30887__$1;
(statearr_30961_33169[(2)] = null);

(statearr_30961_33169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (18))){
var inst_30857 = (state_30887[(2)]);
var state_30887__$1 = state_30887;
var statearr_30962_33170 = state_30887__$1;
(statearr_30962_33170[(2)] = inst_30857);

(statearr_30962_33170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30888 === (8))){
var inst_30826 = (state_30887[(12)]);
var inst_30825 = (state_30887[(13)]);
var inst_30828 = (inst_30826 < inst_30825);
var inst_30829 = inst_30828;
var state_30887__$1 = state_30887;
if(cljs.core.truth_(inst_30829)){
var statearr_30963_33177 = state_30887__$1;
(statearr_30963_33177[(1)] = (10));

} else {
var statearr_30964_33178 = state_30887__$1;
(statearr_30964_33178[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_30965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30965[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_30965[(1)] = (1));

return statearr_30965;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_30887){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_30887);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e30966){if((e30966 instanceof Object)){
var ex__28441__auto__ = e30966;
var statearr_30967_33179 = state_30887;
(statearr_30967_33179[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33180 = state_30887;
state_30887 = G__33180;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_30887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_30887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_30970 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_30970[(6)] = c__28795__auto___33070);

return statearr_30970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30976 = arguments.length;
switch (G__30976) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30987 = arguments.length;
switch (G__30987) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30995 = arguments.length;
switch (G__30995) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28795__auto___33221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_31043){
var state_val_31044 = (state_31043[(1)]);
if((state_val_31044 === (7))){
var state_31043__$1 = state_31043;
var statearr_31045_33225 = state_31043__$1;
(statearr_31045_33225[(2)] = null);

(statearr_31045_33225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (1))){
var state_31043__$1 = state_31043;
var statearr_31046_33226 = state_31043__$1;
(statearr_31046_33226[(2)] = null);

(statearr_31046_33226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (4))){
var inst_31003 = (state_31043[(7)]);
var inst_31005 = (inst_31003 < cnt);
var state_31043__$1 = state_31043;
if(cljs.core.truth_(inst_31005)){
var statearr_31047_33227 = state_31043__$1;
(statearr_31047_33227[(1)] = (6));

} else {
var statearr_31048_33228 = state_31043__$1;
(statearr_31048_33228[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (15))){
var inst_31039 = (state_31043[(2)]);
var state_31043__$1 = state_31043;
var statearr_31049_33231 = state_31043__$1;
(statearr_31049_33231[(2)] = inst_31039);

(statearr_31049_33231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (13))){
var inst_31032 = cljs.core.async.close_BANG_(out);
var state_31043__$1 = state_31043;
var statearr_31050_33234 = state_31043__$1;
(statearr_31050_33234[(2)] = inst_31032);

(statearr_31050_33234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (6))){
var state_31043__$1 = state_31043;
var statearr_31051_33242 = state_31043__$1;
(statearr_31051_33242[(2)] = null);

(statearr_31051_33242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (3))){
var inst_31041 = (state_31043[(2)]);
var state_31043__$1 = state_31043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31043__$1,inst_31041);
} else {
if((state_val_31044 === (12))){
var inst_31028 = (state_31043[(8)]);
var inst_31028__$1 = (state_31043[(2)]);
var inst_31029 = cljs.core.some(cljs.core.nil_QMARK_,inst_31028__$1);
var state_31043__$1 = (function (){var statearr_31057 = state_31043;
(statearr_31057[(8)] = inst_31028__$1);

return statearr_31057;
})();
if(cljs.core.truth_(inst_31029)){
var statearr_31058_33257 = state_31043__$1;
(statearr_31058_33257[(1)] = (13));

} else {
var statearr_31059_33258 = state_31043__$1;
(statearr_31059_33258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (2))){
var inst_30999 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31003 = (0);
var state_31043__$1 = (function (){var statearr_31060 = state_31043;
(statearr_31060[(7)] = inst_31003);

(statearr_31060[(9)] = inst_30999);

return statearr_31060;
})();
var statearr_31064_33259 = state_31043__$1;
(statearr_31064_33259[(2)] = null);

(statearr_31064_33259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (11))){
var inst_31003 = (state_31043[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31043,(10),Object,null,(9));
var inst_31015 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31003) : chs__$1.call(null,inst_31003));
var inst_31016 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31003) : done.call(null,inst_31003));
var inst_31017 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31015,inst_31016);
var state_31043__$1 = state_31043;
var statearr_31068_33273 = state_31043__$1;
(statearr_31068_33273[(2)] = inst_31017);


cljs.core.async.impl.ioc_helpers.process_exception(state_31043__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (9))){
var inst_31003 = (state_31043[(7)]);
var inst_31019 = (state_31043[(2)]);
var inst_31020 = (inst_31003 + (1));
var inst_31003__$1 = inst_31020;
var state_31043__$1 = (function (){var statearr_31070 = state_31043;
(statearr_31070[(7)] = inst_31003__$1);

(statearr_31070[(10)] = inst_31019);

return statearr_31070;
})();
var statearr_31073_33285 = state_31043__$1;
(statearr_31073_33285[(2)] = null);

(statearr_31073_33285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (5))){
var inst_31026 = (state_31043[(2)]);
var state_31043__$1 = (function (){var statearr_31077 = state_31043;
(statearr_31077[(11)] = inst_31026);

return statearr_31077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31043__$1,(12),dchan);
} else {
if((state_val_31044 === (14))){
var inst_31028 = (state_31043[(8)]);
var inst_31034 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31028);
var state_31043__$1 = state_31043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31043__$1,(16),out,inst_31034);
} else {
if((state_val_31044 === (16))){
var inst_31036 = (state_31043[(2)]);
var state_31043__$1 = (function (){var statearr_31079 = state_31043;
(statearr_31079[(12)] = inst_31036);

return statearr_31079;
})();
var statearr_31080_33286 = state_31043__$1;
(statearr_31080_33286[(2)] = null);

(statearr_31080_33286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (10))){
var inst_31009 = (state_31043[(2)]);
var inst_31011 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31043__$1 = (function (){var statearr_31081 = state_31043;
(statearr_31081[(13)] = inst_31009);

return statearr_31081;
})();
var statearr_31083_33292 = state_31043__$1;
(statearr_31083_33292[(2)] = inst_31011);


cljs.core.async.impl.ioc_helpers.process_exception(state_31043__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (8))){
var inst_31024 = (state_31043[(2)]);
var state_31043__$1 = state_31043;
var statearr_31088_33297 = state_31043__$1;
(statearr_31088_33297[(2)] = inst_31024);

(statearr_31088_33297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_31095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31095[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_31095[(1)] = (1));

return statearr_31095;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_31043){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_31043);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e31097){if((e31097 instanceof Object)){
var ex__28441__auto__ = e31097;
var statearr_31098_33311 = state_31043;
(statearr_31098_33311[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33313 = state_31043;
state_31043 = G__33313;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_31043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_31043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_31102 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_31102[(6)] = c__28795__auto___33221);

return statearr_31102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31106 = arguments.length;
switch (G__31106) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28795__auto___33316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_31147){
var state_val_31148 = (state_31147[(1)]);
if((state_val_31148 === (7))){
var inst_31123 = (state_31147[(7)]);
var inst_31122 = (state_31147[(8)]);
var inst_31122__$1 = (state_31147[(2)]);
var inst_31123__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31122__$1,(0),null);
var inst_31124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31122__$1,(1),null);
var inst_31129 = (inst_31123__$1 == null);
var state_31147__$1 = (function (){var statearr_31160 = state_31147;
(statearr_31160[(9)] = inst_31124);

(statearr_31160[(7)] = inst_31123__$1);

(statearr_31160[(8)] = inst_31122__$1);

return statearr_31160;
})();
if(cljs.core.truth_(inst_31129)){
var statearr_31162_33317 = state_31147__$1;
(statearr_31162_33317[(1)] = (8));

} else {
var statearr_31163_33318 = state_31147__$1;
(statearr_31163_33318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (1))){
var inst_31110 = cljs.core.vec(chs);
var inst_31111 = inst_31110;
var state_31147__$1 = (function (){var statearr_31164 = state_31147;
(statearr_31164[(10)] = inst_31111);

return statearr_31164;
})();
var statearr_31165_33319 = state_31147__$1;
(statearr_31165_33319[(2)] = null);

(statearr_31165_33319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (4))){
var inst_31111 = (state_31147[(10)]);
var state_31147__$1 = state_31147;
return cljs.core.async.ioc_alts_BANG_(state_31147__$1,(7),inst_31111);
} else {
if((state_val_31148 === (6))){
var inst_31143 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31167_33321 = state_31147__$1;
(statearr_31167_33321[(2)] = inst_31143);

(statearr_31167_33321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (3))){
var inst_31145 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31147__$1,inst_31145);
} else {
if((state_val_31148 === (2))){
var inst_31111 = (state_31147[(10)]);
var inst_31113 = cljs.core.count(inst_31111);
var inst_31114 = (inst_31113 > (0));
var state_31147__$1 = state_31147;
if(cljs.core.truth_(inst_31114)){
var statearr_31171_33323 = state_31147__$1;
(statearr_31171_33323[(1)] = (4));

} else {
var statearr_31172_33324 = state_31147__$1;
(statearr_31172_33324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (11))){
var inst_31111 = (state_31147[(10)]);
var inst_31136 = (state_31147[(2)]);
var tmp31169 = inst_31111;
var inst_31111__$1 = tmp31169;
var state_31147__$1 = (function (){var statearr_31173 = state_31147;
(statearr_31173[(11)] = inst_31136);

(statearr_31173[(10)] = inst_31111__$1);

return statearr_31173;
})();
var statearr_31174_33325 = state_31147__$1;
(statearr_31174_33325[(2)] = null);

(statearr_31174_33325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (9))){
var inst_31123 = (state_31147[(7)]);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31147__$1,(11),out,inst_31123);
} else {
if((state_val_31148 === (5))){
var inst_31141 = cljs.core.async.close_BANG_(out);
var state_31147__$1 = state_31147;
var statearr_31187_33330 = state_31147__$1;
(statearr_31187_33330[(2)] = inst_31141);

(statearr_31187_33330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (10))){
var inst_31139 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31189_33332 = state_31147__$1;
(statearr_31189_33332[(2)] = inst_31139);

(statearr_31189_33332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (8))){
var inst_31124 = (state_31147[(9)]);
var inst_31123 = (state_31147[(7)]);
var inst_31122 = (state_31147[(8)]);
var inst_31111 = (state_31147[(10)]);
var inst_31131 = (function (){var cs = inst_31111;
var vec__31116 = inst_31122;
var v = inst_31123;
var c = inst_31124;
return (function (p1__31103_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31103_SHARP_);
});
})();
var inst_31132 = cljs.core.filterv(inst_31131,inst_31111);
var inst_31111__$1 = inst_31132;
var state_31147__$1 = (function (){var statearr_31194 = state_31147;
(statearr_31194[(10)] = inst_31111__$1);

return statearr_31194;
})();
var statearr_31198_33343 = state_31147__$1;
(statearr_31198_33343[(2)] = null);

(statearr_31198_33343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_31201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31201[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_31201[(1)] = (1));

return statearr_31201;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_31147){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_31147);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e31202){if((e31202 instanceof Object)){
var ex__28441__auto__ = e31202;
var statearr_31203_33351 = state_31147;
(statearr_31203_33351[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33355 = state_31147;
state_31147 = G__33355;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_31204 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_31204[(6)] = c__28795__auto___33316);

return statearr_31204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31211 = arguments.length;
switch (G__31211) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28795__auto___33370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_31242){
var state_val_31243 = (state_31242[(1)]);
if((state_val_31243 === (7))){
var inst_31219 = (state_31242[(7)]);
var inst_31219__$1 = (state_31242[(2)]);
var inst_31220 = (inst_31219__$1 == null);
var inst_31221 = cljs.core.not(inst_31220);
var state_31242__$1 = (function (){var statearr_31244 = state_31242;
(statearr_31244[(7)] = inst_31219__$1);

return statearr_31244;
})();
if(inst_31221){
var statearr_31245_33374 = state_31242__$1;
(statearr_31245_33374[(1)] = (8));

} else {
var statearr_31246_33379 = state_31242__$1;
(statearr_31246_33379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (1))){
var inst_31213 = (0);
var state_31242__$1 = (function (){var statearr_31247 = state_31242;
(statearr_31247[(8)] = inst_31213);

return statearr_31247;
})();
var statearr_31251_33384 = state_31242__$1;
(statearr_31251_33384[(2)] = null);

(statearr_31251_33384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (4))){
var state_31242__$1 = state_31242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31242__$1,(7),ch);
} else {
if((state_val_31243 === (6))){
var inst_31233 = (state_31242[(2)]);
var state_31242__$1 = state_31242;
var statearr_31253_33387 = state_31242__$1;
(statearr_31253_33387[(2)] = inst_31233);

(statearr_31253_33387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (3))){
var inst_31235 = (state_31242[(2)]);
var inst_31236 = cljs.core.async.close_BANG_(out);
var state_31242__$1 = (function (){var statearr_31255 = state_31242;
(statearr_31255[(9)] = inst_31235);

return statearr_31255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31242__$1,inst_31236);
} else {
if((state_val_31243 === (2))){
var inst_31213 = (state_31242[(8)]);
var inst_31215 = (inst_31213 < n);
var state_31242__$1 = state_31242;
if(cljs.core.truth_(inst_31215)){
var statearr_31256_33392 = state_31242__$1;
(statearr_31256_33392[(1)] = (4));

} else {
var statearr_31257_33393 = state_31242__$1;
(statearr_31257_33393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (11))){
var inst_31213 = (state_31242[(8)]);
var inst_31224 = (state_31242[(2)]);
var inst_31226 = (inst_31213 + (1));
var inst_31213__$1 = inst_31226;
var state_31242__$1 = (function (){var statearr_31258 = state_31242;
(statearr_31258[(8)] = inst_31213__$1);

(statearr_31258[(10)] = inst_31224);

return statearr_31258;
})();
var statearr_31259_33399 = state_31242__$1;
(statearr_31259_33399[(2)] = null);

(statearr_31259_33399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (9))){
var state_31242__$1 = state_31242;
var statearr_31260_33400 = state_31242__$1;
(statearr_31260_33400[(2)] = null);

(statearr_31260_33400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (5))){
var state_31242__$1 = state_31242;
var statearr_31262_33402 = state_31242__$1;
(statearr_31262_33402[(2)] = null);

(statearr_31262_33402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (10))){
var inst_31230 = (state_31242[(2)]);
var state_31242__$1 = state_31242;
var statearr_31263_33404 = state_31242__$1;
(statearr_31263_33404[(2)] = inst_31230);

(statearr_31263_33404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31243 === (8))){
var inst_31219 = (state_31242[(7)]);
var state_31242__$1 = state_31242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31242__$1,(11),out,inst_31219);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_31268 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31268[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_31268[(1)] = (1));

return statearr_31268;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_31242){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_31242);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e31271){if((e31271 instanceof Object)){
var ex__28441__auto__ = e31271;
var statearr_31272_33411 = state_31242;
(statearr_31272_33411[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33412 = state_31242;
state_31242 = G__33412;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_31242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_31242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_31273 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_31273[(6)] = c__28795__auto___33370);

return statearr_31273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31276 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31276 = (function (f,ch,meta31277){
this.f = f;
this.ch = ch;
this.meta31277 = meta31277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31278,meta31277__$1){
var self__ = this;
var _31278__$1 = this;
return (new cljs.core.async.t_cljs$core$async31276(self__.f,self__.ch,meta31277__$1));
}));

(cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31278){
var self__ = this;
var _31278__$1 = this;
return self__.meta31277;
}));

(cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31280 = (function (f,ch,meta31277,_,fn1,meta31281){
this.f = f;
this.ch = ch;
this.meta31277 = meta31277;
this._ = _;
this.fn1 = fn1;
this.meta31281 = meta31281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31282,meta31281__$1){
var self__ = this;
var _31282__$1 = this;
return (new cljs.core.async.t_cljs$core$async31280(self__.f,self__.ch,self__.meta31277,self__._,self__.fn1,meta31281__$1));
}));

(cljs.core.async.t_cljs$core$async31280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31282){
var self__ = this;
var _31282__$1 = this;
return self__.meta31281;
}));

(cljs.core.async.t_cljs$core$async31280.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31280.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31274_SHARP_){
var G__31293 = (((p1__31274_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31274_SHARP_) : self__.f.call(null,p1__31274_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31293) : f1.call(null,G__31293));
});
}));

(cljs.core.async.t_cljs$core$async31280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31277","meta31277",236363161,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31276","cljs.core.async/t_cljs$core$async31276",62283176,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31281","meta31281",-1205843341,null)], null);
}));

(cljs.core.async.t_cljs$core$async31280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31280");

(cljs.core.async.t_cljs$core$async31280.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31280.
 */
cljs.core.async.__GT_t_cljs$core$async31280 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31280(f__$1,ch__$1,meta31277__$1,___$2,fn1__$1,meta31281){
return (new cljs.core.async.t_cljs$core$async31280(f__$1,ch__$1,meta31277__$1,___$2,fn1__$1,meta31281));
});

}

return (new cljs.core.async.t_cljs$core$async31280(self__.f,self__.ch,self__.meta31277,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31300 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31300) : self__.f.call(null,G__31300));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31277","meta31277",236363161,null)], null);
}));

(cljs.core.async.t_cljs$core$async31276.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31276");

(cljs.core.async.t_cljs$core$async31276.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31276");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31276.
 */
cljs.core.async.__GT_t_cljs$core$async31276 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31276(f__$1,ch__$1,meta31277){
return (new cljs.core.async.t_cljs$core$async31276(f__$1,ch__$1,meta31277));
});

}

return (new cljs.core.async.t_cljs$core$async31276(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31327 = (function (f,ch,meta31328){
this.f = f;
this.ch = ch;
this.meta31328 = meta31328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31329,meta31328__$1){
var self__ = this;
var _31329__$1 = this;
return (new cljs.core.async.t_cljs$core$async31327(self__.f,self__.ch,meta31328__$1));
}));

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31329){
var self__ = this;
var _31329__$1 = this;
return self__.meta31328;
}));

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31328","meta31328",1409522544,null)], null);
}));

(cljs.core.async.t_cljs$core$async31327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31327");

(cljs.core.async.t_cljs$core$async31327.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31327.
 */
cljs.core.async.__GT_t_cljs$core$async31327 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31327(f__$1,ch__$1,meta31328){
return (new cljs.core.async.t_cljs$core$async31327(f__$1,ch__$1,meta31328));
});

}

return (new cljs.core.async.t_cljs$core$async31327(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31331 = (function (p,ch,meta31332){
this.p = p;
this.ch = ch;
this.meta31332 = meta31332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31333,meta31332__$1){
var self__ = this;
var _31333__$1 = this;
return (new cljs.core.async.t_cljs$core$async31331(self__.p,self__.ch,meta31332__$1));
}));

(cljs.core.async.t_cljs$core$async31331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31333){
var self__ = this;
var _31333__$1 = this;
return self__.meta31332;
}));

(cljs.core.async.t_cljs$core$async31331.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31331.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31331.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31331.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31332","meta31332",1248279549,null)], null);
}));

(cljs.core.async.t_cljs$core$async31331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31331");

(cljs.core.async.t_cljs$core$async31331.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31331.
 */
cljs.core.async.__GT_t_cljs$core$async31331 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31331(p__$1,ch__$1,meta31332){
return (new cljs.core.async.t_cljs$core$async31331(p__$1,ch__$1,meta31332));
});

}

return (new cljs.core.async.t_cljs$core$async31331(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31340 = arguments.length;
switch (G__31340) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28795__auto___33509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_31363){
var state_val_31364 = (state_31363[(1)]);
if((state_val_31364 === (7))){
var inst_31359 = (state_31363[(2)]);
var state_31363__$1 = state_31363;
var statearr_31366_33511 = state_31363__$1;
(statearr_31366_33511[(2)] = inst_31359);

(statearr_31366_33511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (1))){
var state_31363__$1 = state_31363;
var statearr_31367_33513 = state_31363__$1;
(statearr_31367_33513[(2)] = null);

(statearr_31367_33513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (4))){
var inst_31344 = (state_31363[(7)]);
var inst_31344__$1 = (state_31363[(2)]);
var inst_31345 = (inst_31344__$1 == null);
var state_31363__$1 = (function (){var statearr_31368 = state_31363;
(statearr_31368[(7)] = inst_31344__$1);

return statearr_31368;
})();
if(cljs.core.truth_(inst_31345)){
var statearr_31369_33517 = state_31363__$1;
(statearr_31369_33517[(1)] = (5));

} else {
var statearr_31370_33518 = state_31363__$1;
(statearr_31370_33518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (6))){
var inst_31344 = (state_31363[(7)]);
var inst_31349 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31344) : p.call(null,inst_31344));
var state_31363__$1 = state_31363;
if(cljs.core.truth_(inst_31349)){
var statearr_31371_33526 = state_31363__$1;
(statearr_31371_33526[(1)] = (8));

} else {
var statearr_31372_33527 = state_31363__$1;
(statearr_31372_33527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (3))){
var inst_31361 = (state_31363[(2)]);
var state_31363__$1 = state_31363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31363__$1,inst_31361);
} else {
if((state_val_31364 === (2))){
var state_31363__$1 = state_31363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31363__$1,(4),ch);
} else {
if((state_val_31364 === (11))){
var inst_31353 = (state_31363[(2)]);
var state_31363__$1 = state_31363;
var statearr_31374_33537 = state_31363__$1;
(statearr_31374_33537[(2)] = inst_31353);

(statearr_31374_33537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (9))){
var state_31363__$1 = state_31363;
var statearr_31378_33542 = state_31363__$1;
(statearr_31378_33542[(2)] = null);

(statearr_31378_33542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (5))){
var inst_31347 = cljs.core.async.close_BANG_(out);
var state_31363__$1 = state_31363;
var statearr_31379_33550 = state_31363__$1;
(statearr_31379_33550[(2)] = inst_31347);

(statearr_31379_33550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (10))){
var inst_31356 = (state_31363[(2)]);
var state_31363__$1 = (function (){var statearr_31381 = state_31363;
(statearr_31381[(8)] = inst_31356);

return statearr_31381;
})();
var statearr_31382_33551 = state_31363__$1;
(statearr_31382_33551[(2)] = null);

(statearr_31382_33551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31364 === (8))){
var inst_31344 = (state_31363[(7)]);
var state_31363__$1 = state_31363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31363__$1,(11),out,inst_31344);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_31384 = [null,null,null,null,null,null,null,null,null];
(statearr_31384[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_31384[(1)] = (1));

return statearr_31384;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_31363){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_31363);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e31387){if((e31387 instanceof Object)){
var ex__28441__auto__ = e31387;
var statearr_31388_33561 = state_31363;
(statearr_31388_33561[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33564 = state_31363;
state_31363 = G__33564;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_31363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_31363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_31389 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_31389[(6)] = c__28795__auto___33509);

return statearr_31389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31391 = arguments.length;
switch (G__31391) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28795__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_31459){
var state_val_31460 = (state_31459[(1)]);
if((state_val_31460 === (7))){
var inst_31454 = (state_31459[(2)]);
var state_31459__$1 = state_31459;
var statearr_31462_33583 = state_31459__$1;
(statearr_31462_33583[(2)] = inst_31454);

(statearr_31462_33583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (20))){
var inst_31424 = (state_31459[(7)]);
var inst_31435 = (state_31459[(2)]);
var inst_31436 = cljs.core.next(inst_31424);
var inst_31410 = inst_31436;
var inst_31411 = null;
var inst_31412 = (0);
var inst_31413 = (0);
var state_31459__$1 = (function (){var statearr_31463 = state_31459;
(statearr_31463[(8)] = inst_31435);

(statearr_31463[(9)] = inst_31410);

(statearr_31463[(10)] = inst_31413);

(statearr_31463[(11)] = inst_31412);

(statearr_31463[(12)] = inst_31411);

return statearr_31463;
})();
var statearr_31464_33588 = state_31459__$1;
(statearr_31464_33588[(2)] = null);

(statearr_31464_33588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (1))){
var state_31459__$1 = state_31459;
var statearr_31467_33589 = state_31459__$1;
(statearr_31467_33589[(2)] = null);

(statearr_31467_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (4))){
var inst_31399 = (state_31459[(13)]);
var inst_31399__$1 = (state_31459[(2)]);
var inst_31400 = (inst_31399__$1 == null);
var state_31459__$1 = (function (){var statearr_31469 = state_31459;
(statearr_31469[(13)] = inst_31399__$1);

return statearr_31469;
})();
if(cljs.core.truth_(inst_31400)){
var statearr_31470_33590 = state_31459__$1;
(statearr_31470_33590[(1)] = (5));

} else {
var statearr_31471_33595 = state_31459__$1;
(statearr_31471_33595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (15))){
var state_31459__$1 = state_31459;
var statearr_31481_33596 = state_31459__$1;
(statearr_31481_33596[(2)] = null);

(statearr_31481_33596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (21))){
var state_31459__$1 = state_31459;
var statearr_31482_33597 = state_31459__$1;
(statearr_31482_33597[(2)] = null);

(statearr_31482_33597[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (13))){
var inst_31410 = (state_31459[(9)]);
var inst_31413 = (state_31459[(10)]);
var inst_31412 = (state_31459[(11)]);
var inst_31411 = (state_31459[(12)]);
var inst_31420 = (state_31459[(2)]);
var inst_31421 = (inst_31413 + (1));
var tmp31477 = inst_31410;
var tmp31478 = inst_31412;
var tmp31479 = inst_31411;
var inst_31410__$1 = tmp31477;
var inst_31411__$1 = tmp31479;
var inst_31412__$1 = tmp31478;
var inst_31413__$1 = inst_31421;
var state_31459__$1 = (function (){var statearr_31483 = state_31459;
(statearr_31483[(9)] = inst_31410__$1);

(statearr_31483[(14)] = inst_31420);

(statearr_31483[(10)] = inst_31413__$1);

(statearr_31483[(11)] = inst_31412__$1);

(statearr_31483[(12)] = inst_31411__$1);

return statearr_31483;
})();
var statearr_31484_33609 = state_31459__$1;
(statearr_31484_33609[(2)] = null);

(statearr_31484_33609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (22))){
var state_31459__$1 = state_31459;
var statearr_31488_33610 = state_31459__$1;
(statearr_31488_33610[(2)] = null);

(statearr_31488_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (6))){
var inst_31399 = (state_31459[(13)]);
var inst_31408 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31399) : f.call(null,inst_31399));
var inst_31409 = cljs.core.seq(inst_31408);
var inst_31410 = inst_31409;
var inst_31411 = null;
var inst_31412 = (0);
var inst_31413 = (0);
var state_31459__$1 = (function (){var statearr_31489 = state_31459;
(statearr_31489[(9)] = inst_31410);

(statearr_31489[(10)] = inst_31413);

(statearr_31489[(11)] = inst_31412);

(statearr_31489[(12)] = inst_31411);

return statearr_31489;
})();
var statearr_31493_33614 = state_31459__$1;
(statearr_31493_33614[(2)] = null);

(statearr_31493_33614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (17))){
var inst_31424 = (state_31459[(7)]);
var inst_31428 = cljs.core.chunk_first(inst_31424);
var inst_31429 = cljs.core.chunk_rest(inst_31424);
var inst_31430 = cljs.core.count(inst_31428);
var inst_31410 = inst_31429;
var inst_31411 = inst_31428;
var inst_31412 = inst_31430;
var inst_31413 = (0);
var state_31459__$1 = (function (){var statearr_31497 = state_31459;
(statearr_31497[(9)] = inst_31410);

(statearr_31497[(10)] = inst_31413);

(statearr_31497[(11)] = inst_31412);

(statearr_31497[(12)] = inst_31411);

return statearr_31497;
})();
var statearr_31500_33617 = state_31459__$1;
(statearr_31500_33617[(2)] = null);

(statearr_31500_33617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (3))){
var inst_31456 = (state_31459[(2)]);
var state_31459__$1 = state_31459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31459__$1,inst_31456);
} else {
if((state_val_31460 === (12))){
var inst_31444 = (state_31459[(2)]);
var state_31459__$1 = state_31459;
var statearr_31502_33622 = state_31459__$1;
(statearr_31502_33622[(2)] = inst_31444);

(statearr_31502_33622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (2))){
var state_31459__$1 = state_31459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31459__$1,(4),in$);
} else {
if((state_val_31460 === (23))){
var inst_31452 = (state_31459[(2)]);
var state_31459__$1 = state_31459;
var statearr_31503_33626 = state_31459__$1;
(statearr_31503_33626[(2)] = inst_31452);

(statearr_31503_33626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (19))){
var inst_31439 = (state_31459[(2)]);
var state_31459__$1 = state_31459;
var statearr_31505_33629 = state_31459__$1;
(statearr_31505_33629[(2)] = inst_31439);

(statearr_31505_33629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (11))){
var inst_31424 = (state_31459[(7)]);
var inst_31410 = (state_31459[(9)]);
var inst_31424__$1 = cljs.core.seq(inst_31410);
var state_31459__$1 = (function (){var statearr_31509 = state_31459;
(statearr_31509[(7)] = inst_31424__$1);

return statearr_31509;
})();
if(inst_31424__$1){
var statearr_31510_33632 = state_31459__$1;
(statearr_31510_33632[(1)] = (14));

} else {
var statearr_31512_33635 = state_31459__$1;
(statearr_31512_33635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (9))){
var inst_31446 = (state_31459[(2)]);
var inst_31447 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31459__$1 = (function (){var statearr_31515 = state_31459;
(statearr_31515[(15)] = inst_31446);

return statearr_31515;
})();
if(cljs.core.truth_(inst_31447)){
var statearr_31516_33638 = state_31459__$1;
(statearr_31516_33638[(1)] = (21));

} else {
var statearr_31517_33639 = state_31459__$1;
(statearr_31517_33639[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (5))){
var inst_31402 = cljs.core.async.close_BANG_(out);
var state_31459__$1 = state_31459;
var statearr_31526_33642 = state_31459__$1;
(statearr_31526_33642[(2)] = inst_31402);

(statearr_31526_33642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (14))){
var inst_31424 = (state_31459[(7)]);
var inst_31426 = cljs.core.chunked_seq_QMARK_(inst_31424);
var state_31459__$1 = state_31459;
if(inst_31426){
var statearr_31530_33645 = state_31459__$1;
(statearr_31530_33645[(1)] = (17));

} else {
var statearr_31532_33646 = state_31459__$1;
(statearr_31532_33646[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (16))){
var inst_31442 = (state_31459[(2)]);
var state_31459__$1 = state_31459;
var statearr_31537_33648 = state_31459__$1;
(statearr_31537_33648[(2)] = inst_31442);

(statearr_31537_33648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (10))){
var inst_31413 = (state_31459[(10)]);
var inst_31411 = (state_31459[(12)]);
var inst_31418 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31411,inst_31413);
var state_31459__$1 = state_31459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31459__$1,(13),out,inst_31418);
} else {
if((state_val_31460 === (18))){
var inst_31424 = (state_31459[(7)]);
var inst_31433 = cljs.core.first(inst_31424);
var state_31459__$1 = state_31459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31459__$1,(20),out,inst_31433);
} else {
if((state_val_31460 === (8))){
var inst_31413 = (state_31459[(10)]);
var inst_31412 = (state_31459[(11)]);
var inst_31415 = (inst_31413 < inst_31412);
var inst_31416 = inst_31415;
var state_31459__$1 = state_31459;
if(cljs.core.truth_(inst_31416)){
var statearr_31538_33673 = state_31459__$1;
(statearr_31538_33673[(1)] = (10));

} else {
var statearr_31540_33675 = state_31459__$1;
(statearr_31540_33675[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28438__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28438__auto____0 = (function (){
var statearr_31541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31541[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28438__auto__);

(statearr_31541[(1)] = (1));

return statearr_31541;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28438__auto____1 = (function (state_31459){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_31459);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e31542){if((e31542 instanceof Object)){
var ex__28441__auto__ = e31542;
var statearr_31543_33687 = state_31459;
(statearr_31543_33687[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31542;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33688 = state_31459;
state_31459 = G__33688;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28438__auto__ = function(state_31459){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28438__auto____1.call(this,state_31459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28438__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28438__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_31545 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_31545[(6)] = c__28795__auto__);

return statearr_31545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));

return c__28795__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31551 = arguments.length;
switch (G__31551) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31562 = arguments.length;
switch (G__31562) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31567 = arguments.length;
switch (G__31567) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28795__auto___33706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_31599){
var state_val_31600 = (state_31599[(1)]);
if((state_val_31600 === (7))){
var inst_31590 = (state_31599[(2)]);
var state_31599__$1 = state_31599;
var statearr_31607_33708 = state_31599__$1;
(statearr_31607_33708[(2)] = inst_31590);

(statearr_31607_33708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (1))){
var inst_31572 = null;
var state_31599__$1 = (function (){var statearr_31611 = state_31599;
(statearr_31611[(7)] = inst_31572);

return statearr_31611;
})();
var statearr_31616_33719 = state_31599__$1;
(statearr_31616_33719[(2)] = null);

(statearr_31616_33719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (4))){
var inst_31575 = (state_31599[(8)]);
var inst_31575__$1 = (state_31599[(2)]);
var inst_31576 = (inst_31575__$1 == null);
var inst_31577 = cljs.core.not(inst_31576);
var state_31599__$1 = (function (){var statearr_31618 = state_31599;
(statearr_31618[(8)] = inst_31575__$1);

return statearr_31618;
})();
if(inst_31577){
var statearr_31623_33724 = state_31599__$1;
(statearr_31623_33724[(1)] = (5));

} else {
var statearr_31624_33727 = state_31599__$1;
(statearr_31624_33727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (6))){
var state_31599__$1 = state_31599;
var statearr_31625_33728 = state_31599__$1;
(statearr_31625_33728[(2)] = null);

(statearr_31625_33728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (3))){
var inst_31592 = (state_31599[(2)]);
var inst_31593 = cljs.core.async.close_BANG_(out);
var state_31599__$1 = (function (){var statearr_31626 = state_31599;
(statearr_31626[(9)] = inst_31592);

return statearr_31626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31599__$1,inst_31593);
} else {
if((state_val_31600 === (2))){
var state_31599__$1 = state_31599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31599__$1,(4),ch);
} else {
if((state_val_31600 === (11))){
var inst_31575 = (state_31599[(8)]);
var inst_31584 = (state_31599[(2)]);
var inst_31572 = inst_31575;
var state_31599__$1 = (function (){var statearr_31628 = state_31599;
(statearr_31628[(7)] = inst_31572);

(statearr_31628[(10)] = inst_31584);

return statearr_31628;
})();
var statearr_31630_33731 = state_31599__$1;
(statearr_31630_33731[(2)] = null);

(statearr_31630_33731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (9))){
var inst_31575 = (state_31599[(8)]);
var state_31599__$1 = state_31599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31599__$1,(11),out,inst_31575);
} else {
if((state_val_31600 === (5))){
var inst_31572 = (state_31599[(7)]);
var inst_31575 = (state_31599[(8)]);
var inst_31579 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31575,inst_31572);
var state_31599__$1 = state_31599;
if(inst_31579){
var statearr_31634_33735 = state_31599__$1;
(statearr_31634_33735[(1)] = (8));

} else {
var statearr_31635_33742 = state_31599__$1;
(statearr_31635_33742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (10))){
var inst_31587 = (state_31599[(2)]);
var state_31599__$1 = state_31599;
var statearr_31636_33743 = state_31599__$1;
(statearr_31636_33743[(2)] = inst_31587);

(statearr_31636_33743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31600 === (8))){
var inst_31572 = (state_31599[(7)]);
var tmp31632 = inst_31572;
var inst_31572__$1 = tmp31632;
var state_31599__$1 = (function (){var statearr_31637 = state_31599;
(statearr_31637[(7)] = inst_31572__$1);

return statearr_31637;
})();
var statearr_31638_33748 = state_31599__$1;
(statearr_31638_33748[(2)] = null);

(statearr_31638_33748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_31641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31641[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_31641[(1)] = (1));

return statearr_31641;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_31599){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_31599);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e31643){if((e31643 instanceof Object)){
var ex__28441__auto__ = e31643;
var statearr_31644_33753 = state_31599;
(statearr_31644_33753[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31643;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33754 = state_31599;
state_31599 = G__33754;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_31599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_31599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_31645 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_31645[(6)] = c__28795__auto___33706);

return statearr_31645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31656 = arguments.length;
switch (G__31656) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28795__auto___33758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_31697){
var state_val_31698 = (state_31697[(1)]);
if((state_val_31698 === (7))){
var inst_31691 = (state_31697[(2)]);
var state_31697__$1 = state_31697;
var statearr_31707_33760 = state_31697__$1;
(statearr_31707_33760[(2)] = inst_31691);

(statearr_31707_33760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (1))){
var inst_31657 = (new Array(n));
var inst_31658 = inst_31657;
var inst_31659 = (0);
var state_31697__$1 = (function (){var statearr_31712 = state_31697;
(statearr_31712[(7)] = inst_31659);

(statearr_31712[(8)] = inst_31658);

return statearr_31712;
})();
var statearr_31714_33770 = state_31697__$1;
(statearr_31714_33770[(2)] = null);

(statearr_31714_33770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (4))){
var inst_31662 = (state_31697[(9)]);
var inst_31662__$1 = (state_31697[(2)]);
var inst_31663 = (inst_31662__$1 == null);
var inst_31664 = cljs.core.not(inst_31663);
var state_31697__$1 = (function (){var statearr_31719 = state_31697;
(statearr_31719[(9)] = inst_31662__$1);

return statearr_31719;
})();
if(inst_31664){
var statearr_31722_33771 = state_31697__$1;
(statearr_31722_33771[(1)] = (5));

} else {
var statearr_31724_33772 = state_31697__$1;
(statearr_31724_33772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (15))){
var inst_31685 = (state_31697[(2)]);
var state_31697__$1 = state_31697;
var statearr_31726_33773 = state_31697__$1;
(statearr_31726_33773[(2)] = inst_31685);

(statearr_31726_33773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (13))){
var state_31697__$1 = state_31697;
var statearr_31732_33774 = state_31697__$1;
(statearr_31732_33774[(2)] = null);

(statearr_31732_33774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (6))){
var inst_31659 = (state_31697[(7)]);
var inst_31681 = (inst_31659 > (0));
var state_31697__$1 = state_31697;
if(cljs.core.truth_(inst_31681)){
var statearr_31737_33778 = state_31697__$1;
(statearr_31737_33778[(1)] = (12));

} else {
var statearr_31739_33779 = state_31697__$1;
(statearr_31739_33779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (3))){
var inst_31693 = (state_31697[(2)]);
var state_31697__$1 = state_31697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31697__$1,inst_31693);
} else {
if((state_val_31698 === (12))){
var inst_31658 = (state_31697[(8)]);
var inst_31683 = cljs.core.vec(inst_31658);
var state_31697__$1 = state_31697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31697__$1,(15),out,inst_31683);
} else {
if((state_val_31698 === (2))){
var state_31697__$1 = state_31697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31697__$1,(4),ch);
} else {
if((state_val_31698 === (11))){
var inst_31674 = (state_31697[(2)]);
var inst_31676 = (new Array(n));
var inst_31658 = inst_31676;
var inst_31659 = (0);
var state_31697__$1 = (function (){var statearr_31745 = state_31697;
(statearr_31745[(10)] = inst_31674);

(statearr_31745[(7)] = inst_31659);

(statearr_31745[(8)] = inst_31658);

return statearr_31745;
})();
var statearr_31747_33793 = state_31697__$1;
(statearr_31747_33793[(2)] = null);

(statearr_31747_33793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (9))){
var inst_31658 = (state_31697[(8)]);
var inst_31672 = cljs.core.vec(inst_31658);
var state_31697__$1 = state_31697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31697__$1,(11),out,inst_31672);
} else {
if((state_val_31698 === (5))){
var inst_31667 = (state_31697[(11)]);
var inst_31659 = (state_31697[(7)]);
var inst_31658 = (state_31697[(8)]);
var inst_31662 = (state_31697[(9)]);
var inst_31666 = (inst_31658[inst_31659] = inst_31662);
var inst_31667__$1 = (inst_31659 + (1));
var inst_31668 = (inst_31667__$1 < n);
var state_31697__$1 = (function (){var statearr_31752 = state_31697;
(statearr_31752[(11)] = inst_31667__$1);

(statearr_31752[(12)] = inst_31666);

return statearr_31752;
})();
if(cljs.core.truth_(inst_31668)){
var statearr_31753_33802 = state_31697__$1;
(statearr_31753_33802[(1)] = (8));

} else {
var statearr_31758_33803 = state_31697__$1;
(statearr_31758_33803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (14))){
var inst_31688 = (state_31697[(2)]);
var inst_31689 = cljs.core.async.close_BANG_(out);
var state_31697__$1 = (function (){var statearr_31763 = state_31697;
(statearr_31763[(13)] = inst_31688);

return statearr_31763;
})();
var statearr_31764_33804 = state_31697__$1;
(statearr_31764_33804[(2)] = inst_31689);

(statearr_31764_33804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (10))){
var inst_31679 = (state_31697[(2)]);
var state_31697__$1 = state_31697;
var statearr_31766_33805 = state_31697__$1;
(statearr_31766_33805[(2)] = inst_31679);

(statearr_31766_33805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (8))){
var inst_31667 = (state_31697[(11)]);
var inst_31658 = (state_31697[(8)]);
var tmp31760 = inst_31658;
var inst_31658__$1 = tmp31760;
var inst_31659 = inst_31667;
var state_31697__$1 = (function (){var statearr_31768 = state_31697;
(statearr_31768[(7)] = inst_31659);

(statearr_31768[(8)] = inst_31658__$1);

return statearr_31768;
})();
var statearr_31772_33806 = state_31697__$1;
(statearr_31772_33806[(2)] = null);

(statearr_31772_33806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_31775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31775[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_31775[(1)] = (1));

return statearr_31775;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_31697){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_31697);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e31779){if((e31779 instanceof Object)){
var ex__28441__auto__ = e31779;
var statearr_31780_33811 = state_31697;
(statearr_31780_33811[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33812 = state_31697;
state_31697 = G__33812;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_31697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_31697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_31785 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_31785[(6)] = c__28795__auto___33758);

return statearr_31785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31798 = arguments.length;
switch (G__31798) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28795__auto___33818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_31875){
var state_val_31876 = (state_31875[(1)]);
if((state_val_31876 === (7))){
var inst_31868 = (state_31875[(2)]);
var state_31875__$1 = state_31875;
var statearr_31881_33822 = state_31875__$1;
(statearr_31881_33822[(2)] = inst_31868);

(statearr_31881_33822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (1))){
var inst_31824 = [];
var inst_31825 = inst_31824;
var inst_31826 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31875__$1 = (function (){var statearr_31882 = state_31875;
(statearr_31882[(7)] = inst_31825);

(statearr_31882[(8)] = inst_31826);

return statearr_31882;
})();
var statearr_31885_33824 = state_31875__$1;
(statearr_31885_33824[(2)] = null);

(statearr_31885_33824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (4))){
var inst_31830 = (state_31875[(9)]);
var inst_31830__$1 = (state_31875[(2)]);
var inst_31831 = (inst_31830__$1 == null);
var inst_31832 = cljs.core.not(inst_31831);
var state_31875__$1 = (function (){var statearr_31893 = state_31875;
(statearr_31893[(9)] = inst_31830__$1);

return statearr_31893;
})();
if(inst_31832){
var statearr_31895_33832 = state_31875__$1;
(statearr_31895_33832[(1)] = (5));

} else {
var statearr_31896_33833 = state_31875__$1;
(statearr_31896_33833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (15))){
var inst_31862 = (state_31875[(2)]);
var state_31875__$1 = state_31875;
var statearr_31897_33842 = state_31875__$1;
(statearr_31897_33842[(2)] = inst_31862);

(statearr_31897_33842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (13))){
var state_31875__$1 = state_31875;
var statearr_31902_33843 = state_31875__$1;
(statearr_31902_33843[(2)] = null);

(statearr_31902_33843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (6))){
var inst_31825 = (state_31875[(7)]);
var inst_31857 = inst_31825.length;
var inst_31858 = (inst_31857 > (0));
var state_31875__$1 = state_31875;
if(cljs.core.truth_(inst_31858)){
var statearr_31905_33846 = state_31875__$1;
(statearr_31905_33846[(1)] = (12));

} else {
var statearr_31907_33847 = state_31875__$1;
(statearr_31907_33847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (3))){
var inst_31870 = (state_31875[(2)]);
var state_31875__$1 = state_31875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31875__$1,inst_31870);
} else {
if((state_val_31876 === (12))){
var inst_31825 = (state_31875[(7)]);
var inst_31860 = cljs.core.vec(inst_31825);
var state_31875__$1 = state_31875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31875__$1,(15),out,inst_31860);
} else {
if((state_val_31876 === (2))){
var state_31875__$1 = state_31875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31875__$1,(4),ch);
} else {
if((state_val_31876 === (11))){
var inst_31834 = (state_31875[(10)]);
var inst_31830 = (state_31875[(9)]);
var inst_31850 = (state_31875[(2)]);
var inst_31851 = [];
var inst_31852 = inst_31851.push(inst_31830);
var inst_31825 = inst_31851;
var inst_31826 = inst_31834;
var state_31875__$1 = (function (){var statearr_31916 = state_31875;
(statearr_31916[(7)] = inst_31825);

(statearr_31916[(11)] = inst_31850);

(statearr_31916[(8)] = inst_31826);

(statearr_31916[(12)] = inst_31852);

return statearr_31916;
})();
var statearr_31918_33864 = state_31875__$1;
(statearr_31918_33864[(2)] = null);

(statearr_31918_33864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (9))){
var inst_31825 = (state_31875[(7)]);
var inst_31848 = cljs.core.vec(inst_31825);
var state_31875__$1 = state_31875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31875__$1,(11),out,inst_31848);
} else {
if((state_val_31876 === (5))){
var inst_31834 = (state_31875[(10)]);
var inst_31826 = (state_31875[(8)]);
var inst_31830 = (state_31875[(9)]);
var inst_31834__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31830) : f.call(null,inst_31830));
var inst_31840 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31834__$1,inst_31826);
var inst_31841 = cljs.core.keyword_identical_QMARK_(inst_31826,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31842 = ((inst_31840) || (inst_31841));
var state_31875__$1 = (function (){var statearr_31922 = state_31875;
(statearr_31922[(10)] = inst_31834__$1);

return statearr_31922;
})();
if(cljs.core.truth_(inst_31842)){
var statearr_31924_33871 = state_31875__$1;
(statearr_31924_33871[(1)] = (8));

} else {
var statearr_31925_33872 = state_31875__$1;
(statearr_31925_33872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (14))){
var inst_31865 = (state_31875[(2)]);
var inst_31866 = cljs.core.async.close_BANG_(out);
var state_31875__$1 = (function (){var statearr_31929 = state_31875;
(statearr_31929[(13)] = inst_31865);

return statearr_31929;
})();
var statearr_31931_33878 = state_31875__$1;
(statearr_31931_33878[(2)] = inst_31866);

(statearr_31931_33878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (10))){
var inst_31855 = (state_31875[(2)]);
var state_31875__$1 = state_31875;
var statearr_31932_33880 = state_31875__$1;
(statearr_31932_33880[(2)] = inst_31855);

(statearr_31932_33880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31876 === (8))){
var inst_31834 = (state_31875[(10)]);
var inst_31825 = (state_31875[(7)]);
var inst_31830 = (state_31875[(9)]);
var inst_31844 = inst_31825.push(inst_31830);
var tmp31926 = inst_31825;
var inst_31825__$1 = tmp31926;
var inst_31826 = inst_31834;
var state_31875__$1 = (function (){var statearr_31934 = state_31875;
(statearr_31934[(7)] = inst_31825__$1);

(statearr_31934[(8)] = inst_31826);

(statearr_31934[(14)] = inst_31844);

return statearr_31934;
})();
var statearr_31935_33883 = state_31875__$1;
(statearr_31935_33883[(2)] = null);

(statearr_31935_33883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28438__auto__ = null;
var cljs$core$async$state_machine__28438__auto____0 = (function (){
var statearr_31939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31939[(0)] = cljs$core$async$state_machine__28438__auto__);

(statearr_31939[(1)] = (1));

return statearr_31939;
});
var cljs$core$async$state_machine__28438__auto____1 = (function (state_31875){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_31875);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e31943){if((e31943 instanceof Object)){
var ex__28441__auto__ = e31943;
var statearr_31944_33885 = state_31875;
(statearr_31944_33885[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33886 = state_31875;
state_31875 = G__33886;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
cljs$core$async$state_machine__28438__auto__ = function(state_31875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28438__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28438__auto____1.call(this,state_31875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28438__auto____0;
cljs$core$async$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28438__auto____1;
return cljs$core$async$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_31948 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_31948[(6)] = c__28795__auto___33818);

return statearr_31948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
