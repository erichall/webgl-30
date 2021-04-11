goog.provide('thi.ng.geom.gl.webgl.animator');
goog.require('cljs.core');
thi.ng.geom.gl.webgl.animator.animframe_provider = (function (){var or__4185__auto__ = self.requestAnimationFrame;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = self.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = self.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
var or__4185__auto____$3 = self.msRequestAnimationFrame;
if(cljs.core.truth_(or__4185__auto____$3)){
return or__4185__auto____$3;
} else {
return self.oRequestAnimationFrame;
}
}
}
}
})();
thi.ng.geom.gl.webgl.animator.now = (function thi$ng$geom$gl$webgl$animator$now(){
var or__4185__auto__ = performance.now();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = performance.webkitNow();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = performance.mozNow();
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
var or__4185__auto____$3 = performance.msNow();
if(cljs.core.truth_(or__4185__auto____$3)){
return or__4185__auto____$3;
} else {
return performance.oNow();
}
}
}
}
});
thi.ng.geom.gl.webgl.animator.animate = (function thi$ng$geom$gl$webgl$animator$animate(var_args){
var G__29925 = arguments.length;
switch (G__29925) {
case 1:
return thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$1 = (function (f){
return thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$2(f,null);
}));

(thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$2 = (function (f,element){
var t0 = (new Date()).getTime();
var fid = cljs.core.volatile_BANG_((0));
var f_SINGLEQUOTE_ = (function thi$ng$geom$gl$webgl$animator$animate_STAR_(){
if(cljs.core.truth_((function (){var G__29931 = (((new Date()).getTime() - t0) * 0.001);
var G__29932 = fid.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(fid.cljs$core$IDeref$_deref$arity$1(null) + (1)));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29931,G__29932) : f.call(null,G__29931,G__29932));
})())){
if(cljs.core.truth_(element)){
return (thi.ng.geom.gl.webgl.animator.animframe_provider.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.webgl.animator.animframe_provider.cljs$core$IFn$_invoke$arity$2(thi$ng$geom$gl$webgl$animator$animate_STAR_,element) : thi.ng.geom.gl.webgl.animator.animframe_provider.call(null,thi$ng$geom$gl$webgl$animator$animate_STAR_,element));
} else {
return (thi.ng.geom.gl.webgl.animator.animframe_provider.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.gl.webgl.animator.animframe_provider.cljs$core$IFn$_invoke$arity$1(thi$ng$geom$gl$webgl$animator$animate_STAR_) : thi.ng.geom.gl.webgl.animator.animframe_provider.call(null,thi$ng$geom$gl$webgl$animator$animate_STAR_));
}
} else {
return null;
}
});
return f_SINGLEQUOTE_();
}));

(thi.ng.geom.gl.webgl.animator.animate.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=thi.ng.geom.gl.webgl.animator.js.map
