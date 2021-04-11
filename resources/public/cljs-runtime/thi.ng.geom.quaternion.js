goog.provide('thi.ng.geom.quaternion');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');


/**
* @constructor
 * @implements {thi.ng.geom.core.IMatrixConvert}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IRotate3D}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.IConjugate}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {thi.ng.geom.core.IVectorTransform}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.quaternion.Quat4 = (function (x,y,z,w,_hasheq){
this.x = x;
this.y = y;
this.z = z;
this.w = w;
this._hasheq = _hasheq;
this.cljs$lang$protocol_mask$partition0$ = 165700571;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
(thi.ng.geom.quaternion.Quat4.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.y)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.z)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.w),"]"].join('');
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (thi.ng.geom.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(___$1,k,null) : thi.ng.geom.quaternion.swizzle4.call(null,___$1,k,null));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
return (thi.ng.geom.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(___$1,k,nf) : thi.ng.geom.quaternion.swizzle4.call(null,___$1,k,nf));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IConjugate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IConjugate$conjugate$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.quaternion.Quat4((- self__.x),(- self__.y),(- self__.z),self__.w,(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__29381 = (k | (0));
switch (G__29381) {
case (0):
return self__.x;

break;
case (1):
return self__.y;

break;
case (2):
return self__.z;

break;
case (3):
return self__.w;

break;
default:
return thi.ng.xerror.core.key_error_BANG_(k);

}
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
var G__29382 = (k | (0));
switch (G__29382) {
case (0):
return self__.x;

break;
case (1):
return self__.y;

break;
case (2):
return self__.z;

break;
case (3):
return self__.w;

break;
default:
return nf;

}
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
var G__29383 = (k | (0));
switch (G__29383) {
case (0):
return (new thi.ng.geom.quaternion.Quat4(v,self__.y,self__.z,self__.w,(-1)));

break;
case (1):
return (new thi.ng.geom.quaternion.Quat4(self__.x,v,self__.z,self__.w,(-1)));

break;
case (2):
return (new thi.ng.geom.quaternion.Quat4(self__.x,self__.y,v,self__.w,(-1)));

break;
case (3):
return (new thi.ng.geom.quaternion.Quat4(self__.x,self__.y,self__.z,v,(-1)));

break;
default:
return thi.ng.xerror.core.key_error_BANG_(k);

}
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.quaternion.Quat4(self__.x,self__.y,self__.z,self__.w,(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(self__.y,cljs.core.cons(self__.z,cljs.core.cons(self__.w,null)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (4);
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.w;
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(self__.x,self__.y,self__.z);
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var d = ___$1.thi$ng$math$core$IMagnitude$mag_squared$arity$1(null);
var d__$1 = (((d === (0)))?0.0:((1) / d));
var id = (- d__$1);
return (new thi.ng.geom.quaternion.Quat4((self__.x * id),(self__.y * id),(self__.z * id),(self__.w * d__$1),(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.quaternion.Quat4(self__.w,self__.z,self__.y,self__.x,(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.quaternion.Quat4((self__.x * s),(self__.y * s),(self__.z * s),(self__.w * s),(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((-1) === self__._hasheq)){
return (self__._hasheq = cljs.core.mix_collection_hash(((cljs.core.imul(((cljs.core.imul(((cljs.core.imul((((31) + cljs.core.hash(self__.x)) | (0)),(31)) + cljs.core.hash(self__.y)) | (0)),(31)) + cljs.core.hash(self__.z)) | (0)),(31)) + cljs.core.hash(self__.w)) | (0)),(4)));
} else {
return self__._hasheq;
}
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(null,q,thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,q,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(q)){
if(((4) === cljs.core.count(q))){
var and__4174__auto__ = thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.x,cljs.core.first(q),eps);
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.y,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(1)),eps);
if(cljs.core.truth_(and__4174__auto____$1)){
var and__4174__auto____$2 = thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.z,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(2)),eps);
if(cljs.core.truth_(and__4174__auto____$2)){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(self__.w,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(3)),eps);
} else {
return and__4174__auto____$2;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
} else {
return false;
}
} else {
return false;
}
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.quaternion.Quat4)){
return (((self__.x === o.x)) && ((self__.y === o.y)) && ((self__.z === o.z)) && ((self__.w === o.w)));
} else {
return ((cljs.core.sequential_QMARK_(o)) && (((4) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.x,cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.y,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.z,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(2)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.w,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(3)))));
}
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
return ((((self__.x * q__$1.x) + (self__.y * q__$1.y)) + (self__.z * q__$1.z)) + (self__.w * q__$1.w));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IMatrixConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$2(null,null);
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
var vec__29415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"translate","translate",1336199447));
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29415,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29415,(1),null);
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29415,(2),null);
var x2 = (self__.x + self__.x);
var y2 = (self__.y + self__.y);
var z2 = (self__.z + self__.z);
var xx = (self__.x * x2);
var xy = (self__.x * y2);
var xz = (self__.x * z2);
var yy = (self__.y * y2);
var yz = (self__.y * z2);
var zz = (self__.z * z2);
var wx = (self__.w * x2);
var wy = (self__.w * y2);
var wz = (self__.w * z2);
return (new thi.ng.geom.matrix.Matrix44((1.0 - (yy + zz)),(xy + wz),(xz - wy),0.0,(xy - wz),(1.0 - (xx + zz)),(yz + wx),0.0,(xz + wy),(yz - wx),(1.0 - (xx + yy)),0.0,(function (){var or__4185__auto__ = tx;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return 0.0;
}
})(),(function (){var or__4185__auto__ = ty;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return 0.0;
}
})(),(function (){var or__4185__auto__ = tz;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return 0.0;
}
})(),1.0,null,null));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IVectorTransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2 = (function (_,p__29422){
var self__ = this;
var vec__29423 = p__29422;
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29423,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29423,(1),null);
var vz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29423,(2),null);
var v = vec__29423;
var ___$1 = this;
var ix = (((self__.w * vx) + (self__.y * vz)) - (self__.z * vy));
var iy = (((self__.w * vy) + (self__.z * vx)) - (self__.x * vz));
var iz = (((self__.w * vz) + (self__.x * vy)) - (self__.y * vx));
var nx = (- self__.x);
var ny = (- self__.y);
var nz = (- self__.z);
var iw = (((nx * vx) - (self__.y * vy)) - (self__.z * vz));
var b = (new Float32Array((3)));
(b[(0)] = ((((ix * self__.w) + (iw * nx)) + (iy * nz)) - (iz * ny)));

(b[(1)] = ((((iy * self__.w) + (iw * ny)) + (iz * nx)) - (ix * nz)));

(b[(2)] = ((((iz * self__.w) + (iw * nz)) + (ix * ny)) - (iy * nx)));

return (new thi.ng.geom.vector.Vec3(b,null,cljs.core.meta(v)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.x;
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(self__.y,cljs.core.cons(self__.z,cljs.core.cons(self__.w,null)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,q,0.5);
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,q,t){
var self__ = this;
var ___$1 = this;
var d = ___$1.thi$ng$math$core$IDotProduct$dot$arity$2(null,q);
if(((thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(d) : thi.ng.math.core.abs_STAR_.call(null,d)) < 1.0)){
var theta = Math.acos(d);
var stheta = (function (){var G__29437 = ((d * (- d)) + 1.0);
return Math.sqrt(G__29437);
})();
var vec__29434 = ((((thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(stheta) : thi.ng.math.core.abs_STAR_.call(null,stheta)) < 0.001))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (){var G__29438 = ((1.0 - t) * theta);
return Math.sin(G__29438);
})() / stheta),((function (){var G__29439 = (t * theta);
return Math.sin(G__29439);
})() / stheta)], null));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29434,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29434,(1),null);
var q__$1 = q;
return (new thi.ng.geom.quaternion.Quat4(((self__.x * a) + (q__$1.x * b)),((self__.y * a) + (q__$1.y * b)),((self__.z * a) + (q__$1.z * b)),((self__.w * a) + (q__$1.w * b)),(-1)));
} else {
return ___$1;
}
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (!(((function (){var fexpr__29440 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [(0),null,new cljs.core.Keyword(null,"y","y",-1757859776),null,(1),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"z","z",-789527183),null,(3),null,(2),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null);
return (fexpr__29440.cljs$core$IFn$_invoke$arity$1 ? fexpr__29440.cljs$core$IFn$_invoke$arity$1(k) : fexpr__29440.call(null,k));
})() == null)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (thi.ng.geom.quaternion.swizzle4_assoc.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.quaternion.swizzle4_assoc.cljs$core$IFn$_invoke$arity$3(___$1,k,v) : thi.ng.geom.quaternion.swizzle4_assoc.call(null,___$1,k,v));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var t = (theta / 2.0);
var s = Math.sin(t);
var c = Math.cos(t);
return (new thi.ng.geom.quaternion.Quat4(((self__.x * c) + (self__.w * s)),((self__.y * c) + (self__.z * s)),((self__.z * c) - (self__.y * s)),((self__.w * c) - (self__.x * s)),(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var t = (theta / 2.0);
var s = Math.sin(t);
var c = Math.cos(t);
return (new thi.ng.geom.quaternion.Quat4(((self__.x * c) - (self__.z * s)),((self__.y * c) + (self__.w * s)),((self__.z * c) + (self__.x * s)),((self__.w * c) - (self__.y * s)),(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var t = (theta / 2.0);
var s = Math.sin(t);
var c = Math.cos(t);
return (new thi.ng.geom.quaternion.Quat4(((self__.x * c) + (self__.y * s)),((self__.y * c) - (self__.x * s)),((self__.z * c) + (self__.w * s)),((self__.w * c) - (self__.z * s)),(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x,self__.y,self__.z,self__.w,v], null);
}));

(thi.ng.geom.quaternion.Quat4.prototype.call = (function (unused__9235__auto__){
var self__ = this;
var self__ = this;
var G__29447 = (arguments.length - (1));
switch (G__29447) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(thi.ng.geom.quaternion.Quat4.prototype.apply = (function (self__,args29377){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29377)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
return (thi.ng.geom.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(_,k,null) : thi.ng.geom.quaternion.swizzle4.call(null,_,k,null));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
return (thi.ng.geom.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.quaternion.swizzle4.cljs$core$IFn$_invoke$arity$3(_,k,nf) : thi.ng.geom.quaternion.swizzle4.call(null,_,k,nf));
}));

(thi.ng.geom.quaternion.Quat4.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.quaternion.Quat4)){
var c = cljs.core.compare(self__.x,o.x);
if(((0) === c)){
var c__$1 = cljs.core.compare(self__.y,o.y);
if(((0) === c__$1)){
var c__$2 = cljs.core.compare(self__.z,o.z);
if(((0) === c__$2)){
return cljs.core.compare(self__.w,o.w);
} else {
return c__$2;
}
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((4) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((4) - c);
}
}
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var m = (function (){var G__29464 = ((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w));
return Math.sqrt(G__29464);
})();
if((m > thi.ng.math.core._STAR_eps_STAR_)){
return (new thi.ng.geom.quaternion.Quat4((self__.x / m),(self__.y / m),(self__.z / m),(self__.w / m),(-1)));
} else {
return ___$1;
}
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__29474 = ((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w));
return Math.sqrt(G__29474);
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
return (new thi.ng.geom.quaternion.Quat4((self__.x + q__$1.x),(self__.y + q__$1.y),(self__.z + q__$1.z),(self__.w + q__$1.w),(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
return (new thi.ng.geom.quaternion.Quat4((self__.x - q__$1.x),(self__.y - q__$1.y),(self__.z - q__$1.z),(self__.w - q__$1.w),(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
var qx = q__$1.x;
var qy = q__$1.y;
var qz = q__$1.z;
var qw = q__$1.w;
return (new thi.ng.geom.quaternion.Quat4(((((self__.x * qw) + (self__.w * qx)) + (self__.y * qz)) - (self__.z * qy)),((((self__.y * qw) + (self__.w * qy)) + (self__.z * qx)) - (self__.x * qz)),((((self__.z * qw) + (self__.w * qz)) + (self__.x * qy)) - (self__.y * qx)),((((self__.w * qw) - (self__.x * qx)) - (self__.y * qy)) - (self__.z * qz)),(-1)));
}));

(thi.ng.geom.quaternion.Quat4.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,q,r){
var self__ = this;
var ___$1 = this;
var q__$1 = q;
var r__$1 = r;
var qx = q__$1.x;
var qy = q__$1.y;
var qz = q__$1.z;
var qw = q__$1.w;
var rx = r__$1.x;
var ry = r__$1.y;
var rz = r__$1.z;
var rw = r__$1.w;
var x_SINGLEQUOTE_ = ((((self__.x * qw) + (self__.w * qx)) + (self__.y * qz)) - (self__.z * qy));
var y_SINGLEQUOTE_ = ((((self__.y * qw) + (self__.w * qy)) + (self__.z * qx)) - (self__.x * qz));
var z_SINGLEQUOTE_ = ((((self__.z * qw) + (self__.w * qz)) + (self__.x * qy)) - (self__.y * qx));
var w_SINGLEQUOTE_ = ((((self__.w * qw) - (self__.x * qx)) - (self__.y * qy)) - (self__.z * qz));
return (new thi.ng.geom.quaternion.Quat4(((((x_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * rx)) + (y_SINGLEQUOTE_ * rz)) - (z_SINGLEQUOTE_ * ry)),((((y_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * ry)) + (z_SINGLEQUOTE_ * rx)) - (x_SINGLEQUOTE_ * rz)),((((z_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * rz)) + (x_SINGLEQUOTE_ * ry)) - (y_SINGLEQUOTE_ * rx)),((((w_SINGLEQUOTE_ * rw) - (x_SINGLEQUOTE_ * rx)) - (y_SINGLEQUOTE_ * ry)) - (z_SINGLEQUOTE_ * rz)),(-1)));
}));

(thi.ng.geom.quaternion.Quat4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null),new cljs.core.Symbol(null,"w","w",1994700528,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hasheq","_hasheq",-1509801429,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(thi.ng.geom.quaternion.Quat4.cljs$lang$type = true);

(thi.ng.geom.quaternion.Quat4.cljs$lang$ctorStr = "thi.ng.geom.quaternion/Quat4");

(thi.ng.geom.quaternion.Quat4.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"thi.ng.geom.quaternion/Quat4");
}));

/**
 * Positional factory function for thi.ng.geom.quaternion/Quat4.
 */
thi.ng.geom.quaternion.__GT_Quat4 = (function thi$ng$geom$quaternion$__GT_Quat4(x,y,z,w,_hasheq){
return (new thi.ng.geom.quaternion.Quat4(x,y,z,w,_hasheq));
});

thi.ng.geom.quaternion.Q = (new thi.ng.geom.quaternion.Quat4(0.0,0.0,0.0,1.0,(-1)));
thi.ng.geom.quaternion.quat = (function thi$ng$geom$quaternion$quat(var_args){
var G__29503 = arguments.length;
switch (G__29503) {
case 0:
return thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.quaternion.Q;
}));

(thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$2 = (function (p__29511,w){
var vec__29512 = p__29511;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29512,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29512,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29512,(2),null);
return (new thi.ng.geom.quaternion.Quat4(x,y,z,w,(-1)));
}));

(thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$1 = (function (p__29515){
var vec__29516 = p__29515;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29516,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29516,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29516,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29516,(3),null);
return (new thi.ng.geom.quaternion.Quat4(x,y,z,w,(-1)));
}));

(thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,w){
return (new thi.ng.geom.quaternion.Quat4(x,y,z,w,(-1)));
}));

(thi.ng.geom.quaternion.quat.cljs$lang$maxFixedArity = 4);

thi.ng.geom.quaternion.quat_from_axis_angle = (function thi$ng$geom$quaternion$quat_from_axis_angle(axis,theta){
var theta__$1 = (theta / 2.0);
return thi.ng.geom.quaternion.quat.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(axis),Math.sin(theta__$1)),Math.cos(theta__$1));
});
thi.ng.geom.quaternion.as_axis_angle = (function thi$ng$geom$quaternion$as_axis_angle(q){
var vec__29521 = thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(q);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29521,(3),null);
var theta = (2.0 * Math.acos(w));
var mag = (function (){var G__29524 = (1.0 - (w * w));
return Math.sqrt(G__29524);
})();
if((mag < 5.0E-4)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z),theta], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((x / mag),(y / mag),(z / mag)),theta], null);
}
});
thi.ng.geom.quaternion.quat_from_euler = (function thi$ng$geom$quaternion$quat_from_euler(order,alpha,beta,gamma){
var vec__29529 = (function (){var G__29532 = order;
var G__29532__$1 = (((G__29532 instanceof cljs.core.Keyword))?G__29532.fqn:null);
switch (G__29532__$1) {
case "xyz":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.V3X,thi.ng.geom.vector.V3Y,thi.ng.geom.vector.V3Z], null);

break;
case "yxz":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.V3Y,thi.ng.geom.vector.V3X,thi.ng.geom.vector.V3Z], null);

break;
case "xzy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.V3X,thi.ng.geom.vector.V3Z,thi.ng.geom.vector.V3Y], null);

break;
case "zxy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.V3Z,thi.ng.geom.vector.V3X,thi.ng.geom.vector.V3Y], null);

break;
case "yzx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.V3Y,thi.ng.geom.vector.V3Z,thi.ng.geom.vector.V3X], null);

break;
case "zyx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.V3Z,thi.ng.geom.vector.V3Y,thi.ng.geom.vector.V3X], null);

break;
default:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(order);

}
})();
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29529,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29529,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29529,(2),null);
return thi.ng.geom.quaternion.quat_from_axis_angle(a,alpha).thi$ng$math$core$IMathOps$_STAR_$arity$3(null,thi.ng.geom.quaternion.quat_from_axis_angle(b,beta),thi.ng.geom.quaternion.quat_from_axis_angle(c,gamma));
});
thi.ng.geom.quaternion.quat_from_matrix = (function thi$ng$geom$quaternion$quat_from_matrix(m){
var trace = ((m.m00 + m.m11) + m.m22);
if((trace > (0))){
var s = (0.5 / (function (){var G__29547 = (trace + (1));
return Math.sqrt(G__29547);
})());
return (new thi.ng.geom.quaternion.Quat4(((m.m12 - m.m21) * s),((m.m20 - m.m02) * s),((m.m01 - m.m10) * s),(0.25 / s),(-1)));
} else {
if((((m.m00 > m.m11)) && ((m.m00 > m.m22)))){
var s = (2.0 * (function (){var G__29548 = (((m.m00 - m.m11) - m.m22) + (1));
return Math.sqrt(G__29548);
})());
var s_SINGLEQUOTE_ = ((1) / s);
return (new thi.ng.geom.quaternion.Quat4((0.25 * s),((m.m10 + m.m01) * s_SINGLEQUOTE_),((m.m20 + m.m02) * s_SINGLEQUOTE_),((m.m12 - m.m21) * s_SINGLEQUOTE_),(-1)));
} else {
if((m.m11 > m.m22)){
var s = (2.0 * (function (){var G__29549 = (((m.m11 - m.m22) - m.m00) + (1));
return Math.sqrt(G__29549);
})());
var s_SINGLEQUOTE_ = ((1) / s);
return (new thi.ng.geom.quaternion.Quat4(((m.m10 + m.m01) * s_SINGLEQUOTE_),(0.25 * s),((m.m21 + m.m12) * s_SINGLEQUOTE_),((m.m20 - m.m02) * s_SINGLEQUOTE_),(-1)));
} else {
var s = (2.0 * (function (){var G__29550 = (((m.m22 - m.m00) - m.m11) + (1));
return Math.sqrt(G__29550);
})());
var s_SINGLEQUOTE_ = ((1) / s);
return (new thi.ng.geom.quaternion.Quat4(((m.m20 + m.m02) * s_SINGLEQUOTE_),((m.m21 + m.m12) * s_SINGLEQUOTE_),(0.25 * s),((m.m01 - m.m10) * s_SINGLEQUOTE_),(-1)));
}
}
}
});
thi.ng.geom.quaternion.alignment_quat = (function thi$ng$geom$quaternion$alignment_quat(from,to){
var from__$1 = thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(from);
var to__$1 = thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(to);
var axis = thi.ng.math.core.cross(from__$1,to__$1);
var theta = (function (){var G__29563 = thi.ng.math.core.mag(axis);
var G__29564 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(from__$1,to__$1);
return Math.atan2(G__29563,G__29564);
})();
return thi.ng.geom.quaternion.quat_from_axis_angle(axis,theta);
});
thi.ng.geom.quaternion.lookup4 = (function thi$ng$geom$quaternion$lookup4(_,k,nf){
var G__29565 = k;
switch (G__29565) {
case "x":
return _.x;

break;
case "y":
return _.y;

break;
case "z":
return _.z;

break;
case "w":
return _.w;

break;
default:
var or__4185__auto__ = nf;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}

}
});
thi.ng.geom.quaternion.swizzle4 = (function thi$ng$geom$quaternion$swizzle4(_,k,default$){
if(typeof k === 'number'){
var G__29567 = (k | (0));
switch (G__29567) {
case (0):
return _.x;

break;
case (1):
return _.y;

break;
case (2):
return _.z;

break;
case (3):
return _.w;

break;
default:
var or__4185__auto__ = default$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}

}
} else {
var G__29569 = k;
var G__29569__$1 = (((G__29569 instanceof cljs.core.Keyword))?G__29569.fqn:null);
switch (G__29569__$1) {
case "x":
return _.x;

break;
case "y":
return _.y;

break;
case "z":
return _.z;

break;
case "w":
return _.w;

break;
default:
var n = cljs.core.name(k);
var c = ((n).length);
var G__29571 = c;
switch (G__29571) {
case (2):
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.quaternion.lookup4(_,cljs.core.first(n),default$),thi.ng.geom.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(1)),default$));

break;
case (3):
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.quaternion.lookup4(_,cljs.core.first(n),default$),thi.ng.geom.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(1)),default$),thi.ng.geom.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(2)),default$));

break;
case (4):
return (new thi.ng.geom.quaternion.Quat4(thi.ng.geom.quaternion.lookup4(_,cljs.core.first(n),default$),thi.ng.geom.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(1)),default$),thi.ng.geom.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(2)),default$),thi.ng.geom.quaternion.lookup4(_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(n,(3)),default$),(-1)));

break;
default:
var or__4185__auto__ = default$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}

}

}
}
});
thi.ng.geom.quaternion.swizzle_assoc_STAR_ = (function thi$ng$geom$quaternion$swizzle_assoc_STAR_(_,ctor,keymap,k,v){
var n = cljs.core.name(k);
var c = ((n).length);
if((((c <= cljs.core.count(keymap))) && ((((c === cljs.core.count(v))) && ((cljs.core.count(v) === cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,n)))))))){
var acc = cljs.core.vec(cljs.core.seq(_));
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var G__29762 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var G__29580 = cljs.core.first(n__$1);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__29580) : keymap.call(null,G__29580));
})(),(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)));
var G__29763 = (i + (1));
var G__29764 = cljs.core.next(n__$1);
acc = G__29762;
i = G__29763;
n__$1 = G__29764;
continue;
} else {
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(acc) : ctor.call(null,acc));
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
});
thi.ng.geom.quaternion.swizzle4_assoc = (function thi$ng$geom$quaternion$swizzle4_assoc(_,k,v){
if(typeof k === 'number'){
var G__29582 = (k | (0));
switch (G__29582) {
case (0):
return (new thi.ng.geom.quaternion.Quat4(v,_.y,_.z,_.w,(-1)));

break;
case (1):
return (new thi.ng.geom.quaternion.Quat4(_.x,v,_.z,_.w,(-1)));

break;
case (2):
return (new thi.ng.geom.quaternion.Quat4(_.x,_.y,v,_.w,(-1)));

break;
case (3):
return (new thi.ng.geom.quaternion.Quat4(_.x,_.y,_.z,v,(-1)));

break;
default:
return thi.ng.xerror.core.key_error_BANG_(k);

}
} else {
var G__29587 = k;
var G__29587__$1 = (((G__29587 instanceof cljs.core.Keyword))?G__29587.fqn:null);
switch (G__29587__$1) {
case "x":
return (new thi.ng.geom.quaternion.Quat4(v,_.y,_.z,_.w,(-1)));

break;
case "y":
return (new thi.ng.geom.quaternion.Quat4(_.x,v,_.z,_.w,(-1)));

break;
case "z":
return (new thi.ng.geom.quaternion.Quat4(_.x,_.y,v,_.w,(-1)));

break;
case "w":
return (new thi.ng.geom.quaternion.Quat4(_.x,_.y,_.z,v,(-1)));

break;
default:
return thi.ng.geom.quaternion.swizzle_assoc_STAR_(_,thi.ng.geom.quaternion.quat,new cljs.core.PersistentArrayMap(null, 4, ["x",(0),"y",(1),"z",(2),"w",(3)], null),k,v);

}
}
});

//# sourceMappingURL=thi.ng.geom.quaternion.js.map
