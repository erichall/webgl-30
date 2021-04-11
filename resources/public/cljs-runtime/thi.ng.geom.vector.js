goog.provide('thi.ng.geom.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.xerror.core');









/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {thi.ng.geom.core.INormal}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26552_27573 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26553_27574 = v.buf;
(self__.buf[(0)] = ((G__26552_27573[(0)]) - (G__26553_27574[(0)])));

(self__.buf[(1)] = ((G__26552_27573[(1)]) - (G__26553_27574[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__26552_27573[(0)]) - v));

(self__.buf[(1)] = ((G__26552_27573[(1)]) - v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__26552_27573[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__26552_27573[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26561_27575 = typeof v1 === 'number';
var G__26562_27576 = typeof v2 === 'number';
if(((G__26561_27575)?G__26562_27576:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__26563_27577 = (((!(G__26561_27575)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__26564_27578 = (((!(G__26562_27576)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__26555_27579 = (cljs.core.truth_(G__26563_27577)?v1.buf:null);
var G__26556_27580 = (cljs.core.truth_(G__26564_27578)?v2.buf:null);
var G__26557_27581 = (cljs.core.truth_(G__26563_27577)?(G__26555_27579[(0)]):((G__26561_27575)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__26558_27582 = (cljs.core.truth_(G__26563_27577)?(G__26555_27579[(1)]):((G__26561_27575)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__26559_27583 = (cljs.core.truth_(G__26564_27578)?(G__26556_27580[(0)]):((G__26562_27576)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26560_27584 = (cljs.core.truth_(G__26564_27578)?(G__26556_27580[(1)]):((G__26562_27576)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__26557_27581) - G__26559_27583));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__26558_27582) - G__26560_27584));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26565_27586 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26566_27587 = v.buf;
(self__.buf[(0)] = ((G__26565_27586[(0)]) * (G__26566_27587[(0)])));

(self__.buf[(1)] = ((G__26565_27586[(1)]) * (G__26566_27587[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__26565_27586[(0)]) * v));

(self__.buf[(1)] = ((G__26565_27586[(1)]) * v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__26565_27586[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__26565_27586[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26574_27588 = typeof v1 === 'number';
var G__26575_27589 = typeof v2 === 'number';
if(((G__26574_27588)?G__26575_27589:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__26576_27590 = (((!(G__26574_27588)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__26577_27591 = (((!(G__26575_27589)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__26568_27592 = (cljs.core.truth_(G__26576_27590)?v1.buf:null);
var G__26569_27593 = (cljs.core.truth_(G__26577_27591)?v2.buf:null);
var G__26570_27594 = (cljs.core.truth_(G__26576_27590)?(G__26568_27592[(0)]):((G__26574_27588)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__26571_27595 = (cljs.core.truth_(G__26576_27590)?(G__26568_27592[(1)]):((G__26574_27588)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__26572_27596 = (cljs.core.truth_(G__26577_27591)?(G__26569_27593[(0)]):((G__26575_27589)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26573_27597 = (cljs.core.truth_(G__26577_27591)?(G__26569_27593[(1)]):((G__26575_27589)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__26570_27594) * G__26572_27596));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__26571_27595) * G__26573_27597));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__26587_27602 = (a instanceof thi.ng.geom.vector.Vec2);
var G__26588_27603 = (b instanceof thi.ng.geom.vector.Vec2);
var G__26589_27604 = (((!(G__26587_27602)))?typeof a === 'number':null);
var G__26590_27605 = (((!(G__26588_27603)))?typeof b === 'number':null);
var G__26578_27606 = self__.buf;
var G__26579_27607 = ((G__26587_27602)?a.buf:null);
var G__26580_27608 = ((G__26588_27603)?b.buf:null);
var G__26581_27609 = (G__26578_27606[(0)]);
var G__26582_27610 = (G__26578_27606[(1)]);
var G__26583_27611 = ((G__26587_27602)?(G__26579_27607[(0)]):(cljs.core.truth_(G__26589_27604)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__26584_27612 = ((G__26587_27602)?(G__26579_27607[(1)]):(cljs.core.truth_(G__26589_27604)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__26585_27613 = ((G__26588_27603)?(G__26580_27608[(0)]):(cljs.core.truth_(G__26590_27605)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__26586_27614 = ((G__26588_27603)?(G__26580_27608[(1)]):(cljs.core.truth_(G__26590_27605)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__26581_27609 - G__26583_27611) * G__26585_27613));

(self__.buf[(1)] = ((G__26582_27610 - G__26584_27612) * G__26586_27614));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__26600_27615 = (a instanceof thi.ng.geom.vector.Vec2);
var G__26601_27616 = (b instanceof thi.ng.geom.vector.Vec2);
var G__26602_27617 = (((!(G__26600_27615)))?typeof a === 'number':null);
var G__26603_27618 = (((!(G__26601_27616)))?typeof b === 'number':null);
var G__26591_27619 = self__.buf;
var G__26592_27620 = ((G__26600_27615)?a.buf:null);
var G__26593_27621 = ((G__26601_27616)?b.buf:null);
var G__26594_27622 = (G__26591_27619[(0)]);
var G__26595_27623 = (G__26591_27619[(1)]);
var G__26596_27624 = ((G__26600_27615)?(G__26592_27620[(0)]):(cljs.core.truth_(G__26602_27617)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__26597_27625 = ((G__26600_27615)?(G__26592_27620[(1)]):(cljs.core.truth_(G__26602_27617)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__26598_27626 = ((G__26601_27616)?(G__26593_27621[(0)]):(cljs.core.truth_(G__26603_27618)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__26599_27627 = ((G__26601_27616)?(G__26593_27621[(1)]):(cljs.core.truth_(G__26603_27618)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__26594_27622 * G__26596_27624) - G__26598_27626));

(self__.buf[(1)] = ((G__26595_27623 * G__26597_27625) - G__26599_27627));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__26604 = (self__.buf[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__26604) : thi.ng.math.core.abs_STAR_.call(null,G__26604));
})());

(self__.buf[(1)] = (function (){var G__26605 = (self__.buf[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__26605) : thi.ng.math.core.abs_STAR_.call(null,G__26605));
})());

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__26615_27631 = (a instanceof thi.ng.geom.vector.Vec2);
var G__26616_27632 = (b instanceof thi.ng.geom.vector.Vec2);
var G__26617_27633 = (((!(G__26615_27631)))?typeof a === 'number':null);
var G__26618_27634 = (((!(G__26616_27632)))?typeof b === 'number':null);
var G__26606_27635 = self__.buf;
var G__26607_27636 = ((G__26615_27631)?a.buf:null);
var G__26608_27637 = ((G__26616_27632)?b.buf:null);
var G__26609_27638 = (G__26606_27635[(0)]);
var G__26610_27639 = (G__26606_27635[(1)]);
var G__26611_27640 = ((G__26615_27631)?(G__26607_27636[(0)]):(cljs.core.truth_(G__26617_27633)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__26612_27641 = ((G__26615_27631)?(G__26607_27636[(1)]):(cljs.core.truth_(G__26617_27633)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__26613_27642 = ((G__26616_27632)?(G__26608_27637[(0)]):(cljs.core.truth_(G__26618_27634)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__26614_27643 = ((G__26616_27632)?(G__26608_27637[(1)]):(cljs.core.truth_(G__26618_27634)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__26609_27638 * G__26611_27640) + G__26613_27642));

(self__.buf[(1)] = ((G__26610_27639 * G__26612_27641) + G__26614_27643));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26619_27645 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26620_27646 = v.buf;
(self__.buf[(0)] = ((G__26619_27645[(0)]) / (G__26620_27646[(0)])));

(self__.buf[(1)] = ((G__26619_27645[(1)]) / (G__26620_27646[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__26619_27645[(0)]) / v));

(self__.buf[(1)] = ((G__26619_27645[(1)]) / v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__26619_27645[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__26619_27645[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26628_27651 = typeof v1 === 'number';
var G__26629_27652 = typeof v2 === 'number';
if(((G__26628_27651)?G__26629_27652:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__26630_27653 = (((!(G__26628_27651)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__26631_27654 = (((!(G__26629_27652)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__26622_27655 = (cljs.core.truth_(G__26630_27653)?v1.buf:null);
var G__26623_27656 = (cljs.core.truth_(G__26631_27654)?v2.buf:null);
var G__26624_27657 = (cljs.core.truth_(G__26630_27653)?(G__26622_27655[(0)]):((G__26628_27651)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__26625_27658 = (cljs.core.truth_(G__26630_27653)?(G__26622_27655[(1)]):((G__26628_27651)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__26626_27659 = (cljs.core.truth_(G__26631_27654)?(G__26623_27656[(0)]):((G__26629_27652)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26627_27660 = (cljs.core.truth_(G__26631_27654)?(G__26623_27656[(1)]):((G__26629_27652)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__26624_27657) / G__26626_27659));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__26625_27658) / G__26627_27660));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26632_27661 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26633_27662 = v.buf;
(self__.buf[(0)] = ((G__26632_27661[(0)]) + (G__26633_27662[(0)])));

(self__.buf[(1)] = ((G__26632_27661[(1)]) + (G__26633_27662[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__26632_27661[(0)]) + v));

(self__.buf[(1)] = ((G__26632_27661[(1)]) + v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__26632_27661[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__26632_27661[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26641_27664 = typeof v1 === 'number';
var G__26642_27665 = typeof v2 === 'number';
if(((G__26641_27664)?G__26642_27665:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__26643_27666 = (((!(G__26641_27664)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__26644_27667 = (((!(G__26642_27665)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__26635_27668 = (cljs.core.truth_(G__26643_27666)?v1.buf:null);
var G__26636_27669 = (cljs.core.truth_(G__26644_27667)?v2.buf:null);
var G__26637_27670 = (cljs.core.truth_(G__26643_27666)?(G__26635_27668[(0)]):((G__26641_27664)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__26638_27671 = (cljs.core.truth_(G__26643_27666)?(G__26635_27668[(1)]):((G__26641_27664)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__26639_27672 = (cljs.core.truth_(G__26644_27667)?(G__26636_27669[(0)]):((G__26642_27665)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26640_27673 = (cljs.core.truth_(G__26644_27667)?(G__26636_27669[(1)]):((G__26642_27665)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__26637_27670) + G__26639_27672));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__26638_27671) + G__26640_27673));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__26654_27676 = (a instanceof thi.ng.geom.vector.Vec2);
var G__26655_27678 = (b instanceof thi.ng.geom.vector.Vec2);
var G__26656_27679 = (((!(G__26654_27676)))?typeof a === 'number':null);
var G__26657_27680 = (((!(G__26655_27678)))?typeof b === 'number':null);
var G__26645_27681 = self__.buf;
var G__26646_27682 = ((G__26654_27676)?a.buf:null);
var G__26647_27683 = ((G__26655_27678)?b.buf:null);
var G__26648_27684 = (G__26645_27681[(0)]);
var G__26649_27685 = (G__26645_27681[(1)]);
var G__26650_27686 = ((G__26654_27676)?(G__26646_27682[(0)]):(cljs.core.truth_(G__26656_27679)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__26651_27687 = ((G__26654_27676)?(G__26646_27682[(1)]):(cljs.core.truth_(G__26656_27679)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__26652_27688 = ((G__26655_27678)?(G__26647_27683[(0)]):(cljs.core.truth_(G__26657_27680)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__26653_27689 = ((G__26655_27678)?(G__26647_27683[(1)]):(cljs.core.truth_(G__26657_27680)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__26648_27684 + G__26650_27686) * G__26652_27688));

(self__.buf[(1)] = ((G__26649_27685 + G__26651_27687) * G__26653_27689));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
}));

(thi.ng.geom.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)])),"]"].join('');
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26658 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26659 = v.buf;
return (((G__26658[(0)]) * (G__26659[(1)])) - ((G__26658[(1)]) * (G__26659[(0)])));
} else {
return (((G__26658[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) - ((G__26658[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_(n);
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#vec2 ["," ","]",opts,cljs.core.seq(___$1));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__26660 = self__.buf;
var G__26662 = (G__26660[(0)]);
var G__26663 = (G__26660[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26661 = v.buf;
var G__26664 = (G__26661[(0)]);
var G__26665 = (G__26661[(1)]);
var d = (((G__26662 * G__26664) + (G__26663 * G__26665)) * 2.0);
(b[(0)] = ((G__26664 * d) - G__26662));

(b[(1)] = ((G__26665 * d) - G__26663));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
var G__26664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__26665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var d = (((G__26662 * G__26664) + (G__26663 * G__26665)) * 2.0);
(b[(0)] = ((G__26664 * d) - G__26662));

(b[(1)] = ((G__26665 * d) - G__26663));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26666 = ___$1.thi$ng$geom$core$IDistance$dist_squared$arity$2(null,v);
return Math.sqrt(G__26666);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26667 = self__.buf;
var G__26669 = (G__26667[(0)]);
var G__26670 = (G__26667[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26668 = v.buf;
var G__26671 = (G__26668[(0)]);
var G__26672 = (G__26668[(1)]);
var dx = (G__26669 - G__26671);
var dy = (G__26670 - G__26672);
return ((dx * dx) + (dy * dy));
} else {
var G__26671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__26672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var dx = (G__26669 - G__26671);
var dy = (G__26670 - G__26672);
return ((dx * dx) + (dy * dy));
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__26673 = self__.buf;
var G__26674 = (G__26673[(0)]);
var G__26675 = (G__26673[(1)]);
(b[(0)] = ((G__26674 * c) - (G__26675 * s)));

(b[(1)] = ((G__26674 * s) + (G__26675 * c)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IMathOps$_$arity$1(null);
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var fexpr__26677 = (function (){var G__26678 = new cljs.core.Keyword(null,"yx","yx",1696579752);
return (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__26678) : thi.ng.geom.vector.swizzle2_fns.call(null,G__26678));
})();
return (fexpr__26677.cljs$core$IFn$_invoke$arity$1 ? fexpr__26677.cljs$core$IFn$_invoke$arity$1(___$1) : fexpr__26677.call(null,___$1));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((___$1.thi$ng$math$core$IMagnitude$mag_squared$arity$1(null) > (len * len))){
return ___$1.thi$ng$math$core$INormalize$normalize$arity$2(null,len);
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26386__auto__ = (new Float32Array((2)));
var G__26679_27711 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26680_27712 = v.buf;
(dest__26386__auto__[(0)] = ((G__26679_27711[(0)]) * (G__26680_27712[(0)])));

(dest__26386__auto__[(1)] = ((G__26679_27711[(1)]) * (G__26680_27712[(1)])));
} else {
if(typeof v === 'number'){
(dest__26386__auto__[(0)] = ((G__26679_27711[(0)]) * v));

(dest__26386__auto__[(1)] = ((G__26679_27711[(1)]) * v));
} else {
(dest__26386__auto__[(0)] = ((G__26679_27711[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26386__auto__[(1)] = ((G__26679_27711[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__26386__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = self__._hash;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(2)));
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(null,v,thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((2) === cljs.core.count(v))){
var G__26681 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26682 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26681[(0)]),(G__26682[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26681[(1)]),(G__26682[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26681[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__26681[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))));
} else {
return ((cljs.core.sequential_QMARK_(o)) && (((2) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))));
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec2((thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__26683 = (buf_SINGLEQUOTE_[(0)]);
var G__26684 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__26683,G__26684) : f2.call(null,G__26683,G__26684));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__26685 = (buf_SINGLEQUOTE_[(1)]);
var G__26686 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__26685,G__26686) : f2.call(null,G__26685,G__26686));
})());

return (new thi.ng.geom.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26687 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26688 = v.buf;
return (((G__26687[(0)]) * (G__26688[(0)])) + ((G__26687[(1)]) * (G__26688[(1)])));
} else {
return (((G__26687[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__26687[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__26689 = (self__.buf[(0)]);
var G__26690 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26689,G__26690) : f.call(null,G__26689,G__26690));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
return acc;
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__26691 = start;
var G__26692 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26691,G__26692) : f.call(null,G__26691,G__26692));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__26693 = acc;
var G__26694 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26693,G__26694) : f.call(null,G__26693,G__26694));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
return acc__$1;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26386__auto__ = (new Float32Array((2)));
var G__26695_27724 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26696_27725 = v.buf;
(dest__26386__auto__[(0)] = ((G__26695_27724[(0)]) + (G__26696_27725[(0)])));

(dest__26386__auto__[(1)] = ((G__26695_27724[(1)]) + (G__26696_27725[(1)])));
} else {
if(typeof v === 'number'){
(dest__26386__auto__[(0)] = ((G__26695_27724[(0)]) + v));

(dest__26386__auto__[(1)] = ((G__26695_27724[(1)]) + v));
} else {
(dest__26386__auto__[(0)] = ((G__26695_27724[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26386__auto__[(1)] = ((G__26695_27724[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__26386__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__26697 = (self__.buf[(1)]);
var G__26698 = (self__.buf[(0)]);
return Math.atan2(G__26697,G__26698);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$IHeading$heading$arity$1(null);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading(a) - ___$1.thi$ng$geom$core$IHeading$heading$arity$1(null));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__26699_27730 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26700_27733 = v.buf;
(b[(0)] = (((G__26699_27730[(0)]) + (G__26700_27733[(0)])) * 0.5));

(b[(1)] = (((G__26699_27730[(1)]) + (G__26700_27733[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__26699_27730[(0)]) + v) * 0.5));

(b[(1)] = (((G__26699_27730[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__26699_27730[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__26699_27730[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__26710_27736 = (v instanceof thi.ng.geom.vector.Vec2);
var G__26711_27737 = (t instanceof thi.ng.geom.vector.Vec2);
var G__26712_27738 = (((!(G__26710_27736)))?typeof v === 'number':null);
var G__26713_27739 = (((!(G__26711_27737)))?typeof t === 'number':null);
var G__26701_27740 = self__.buf;
var G__26702_27741 = ((G__26710_27736)?v.buf:null);
var G__26703_27742 = ((G__26711_27737)?t.buf:null);
var G__26704_27743 = (G__26701_27740[(0)]);
var G__26705_27744 = (G__26701_27740[(1)]);
var G__26706_27745 = ((G__26710_27736)?(G__26702_27741[(0)]):(cljs.core.truth_(G__26712_27738)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__26707_27746 = ((G__26710_27736)?(G__26702_27741[(1)]):(cljs.core.truth_(G__26712_27738)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__26708_27747 = ((G__26711_27737)?(G__26703_27742[(0)]):(cljs.core.truth_(G__26713_27739)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__26709_27748 = ((G__26711_27737)?(G__26703_27742[(1)]):(cljs.core.truth_(G__26713_27739)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
(b[(0)] = (((G__26706_27745 - G__26704_27743) * G__26708_27747) + G__26704_27743));

(b[(1)] = (((G__26707_27746 - G__26705_27744) * G__26709_27748) + G__26705_27744));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var G__26723_27755 = (b instanceof thi.ng.geom.vector.Vec2);
var G__26724_27756 = (c instanceof thi.ng.geom.vector.Vec2);
var G__26725_27757 = (((!(G__26723_27755)))?typeof b === 'number':null);
var G__26726_27758 = (((!(G__26724_27756)))?typeof c === 'number':null);
var G__26714_27759 = self__.buf;
var G__26715_27760 = ((G__26723_27755)?b.buf:null);
var G__26716_27761 = ((G__26724_27756)?c.buf:null);
var G__26717_27762 = (G__26714_27759[(0)]);
var G__26718_27763 = (G__26714_27759[(1)]);
var G__26719_27764 = ((G__26723_27755)?(G__26715_27760[(0)]):(cljs.core.truth_(G__26725_27757)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__26720_27765 = ((G__26723_27755)?(G__26715_27760[(1)]):(cljs.core.truth_(G__26725_27757)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__26721_27766 = ((G__26724_27756)?(G__26716_27761[(0)]):(cljs.core.truth_(G__26726_27758)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__26722_27767 = ((G__26724_27756)?(G__26716_27761[(1)]):(cljs.core.truth_(G__26726_27758)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var x1_27769 = (((G__26719_27764 - G__26717_27762) * u) + G__26717_27762);
var y1_27770 = (((G__26720_27765 - G__26718_27763) * u) + G__26718_27763);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__26721_27766) * u) + G__26721_27766) - x1_27769) * v) + x1_27769));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__26722_27767) * u) + G__26722_27767) - y1_27770) * v) + y1_27770));

return (new thi.ng.geom.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__26736_27775 = (v instanceof thi.ng.geom.vector.Vec2);
var G__26737_27776 = (t instanceof thi.ng.geom.vector.Vec2);
var G__26738_27777 = (((!(G__26736_27775)))?typeof v === 'number':null);
var G__26739_27778 = (((!(G__26737_27776)))?typeof t === 'number':null);
var G__26727_27779 = self__.buf;
var G__26728_27780 = ((G__26736_27775)?v.buf:null);
var G__26729_27781 = ((G__26737_27776)?t.buf:null);
var G__26730_27782 = (G__26727_27779[(0)]);
var G__26731_27783 = (G__26727_27779[(1)]);
var G__26732_27784 = ((G__26736_27775)?(G__26728_27780[(0)]):(cljs.core.truth_(G__26738_27777)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__26733_27785 = ((G__26736_27775)?(G__26728_27780[(1)]):(cljs.core.truth_(G__26738_27777)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__26734_27786 = ((G__26737_27776)?(G__26729_27781[(0)]):(cljs.core.truth_(G__26739_27778)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__26735_27787 = ((G__26737_27776)?(G__26729_27781[(1)]):(cljs.core.truth_(G__26739_27778)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
(b[(0)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26730_27782,G__26732_27784,G__26734_27786) : f.call(null,G__26730_27782,G__26732_27784,G__26734_27786)));

(b[(1)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26731_27783,G__26733_27785,G__26735_27787) : f.call(null,G__26731_27783,G__26733_27785,G__26735_27787)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__26740_27788 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec2)){
var G__26741_27789 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_((G__26741_27789[(0)]),(G__26740_27788[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_((G__26741_27789[(1)]),(G__26740_27788[(1)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_(e,(G__26740_27788[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(e,(G__26740_27788[(1)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(0),0.0),(G__26740_27788[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(1),0.0),(G__26740_27788[(1)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__26751_27791 = (e1 instanceof thi.ng.geom.vector.Vec2);
var G__26752_27792 = (e2 instanceof thi.ng.geom.vector.Vec2);
var G__26753_27793 = (((!(G__26751_27791)))?typeof e1 === 'number':null);
var G__26754_27794 = (((!(G__26752_27792)))?typeof e2 === 'number':null);
var G__26742_27795 = self__.buf;
var G__26743_27796 = ((G__26751_27791)?e1.buf:null);
var G__26744_27797 = ((G__26752_27792)?e2.buf:null);
var G__26745_27798 = (G__26742_27795[(0)]);
var G__26746_27799 = (G__26742_27795[(1)]);
var G__26747_27800 = ((G__26751_27791)?(G__26743_27796[(0)]):(cljs.core.truth_(G__26753_27793)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(0),0.0)));
var G__26748_27801 = ((G__26751_27791)?(G__26743_27796[(1)]):(cljs.core.truth_(G__26753_27793)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(1),0.0)));
var G__26749_27802 = ((G__26752_27792)?(G__26744_27797[(0)]):(cljs.core.truth_(G__26754_27794)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(0),0.0)));
var G__26750_27803 = ((G__26752_27792)?(G__26744_27797[(1)]):(cljs.core.truth_(G__26754_27794)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(1),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_(G__26747_27800,G__26749_27802,G__26745_27798));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_(G__26747_27800,G__26750_27803,G__26746_27799));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k < (2))));
} else {
if(cljs.core.truth_((thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k)))){
return true;
} else {
return false;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k === (0))) || ((k === (1))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.vector.Vec2((function (){var G__26755 = self__.buf;
var G__26756 = (new Float32Array(self__.buf));
var G__26757 = new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null);
var G__26758 = k;
var G__26759 = v;
return (thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__26755,G__26756,G__26757,G__26758,G__26759) : thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,G__26755,G__26756,G__26757,G__26758,G__26759));
})(),null,self__._meta));
}
} else {
return null;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26386__auto__ = (new Float32Array((2)));
var G__26760_27813 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26761_27814 = v.buf;
(dest__26386__auto__[(0)] = (function (){var a__25949__auto__ = (G__26760_27813[(0)]);
var b__25950__auto__ = (G__26761_27814[(0)]);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26386__auto__[(1)] = (function (){var a__25949__auto__ = (G__26760_27813[(1)]);
var b__25950__auto__ = (G__26761_27814[(1)]);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__26386__auto__[(0)] = (function (){var a__25949__auto__ = (G__26760_27813[(0)]);
var b__25950__auto__ = v;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26386__auto__[(1)] = (function (){var a__25949__auto__ = (G__26760_27813[(1)]);
var b__25950__auto__ = v;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());
} else {
(dest__26386__auto__[(0)] = (function (){var a__25949__auto__ = (G__26760_27813[(0)]);
var b__25950__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26386__auto__[(1)] = (function (){var a__25949__auto__ = (G__26760_27813[(1)]);
var b__25950__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__26386__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__26397__auto__ = (new Float32Array((2)));
var G__26771_27821 = (v instanceof thi.ng.geom.vector.Vec2);
var G__26772_27822 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__26773_27823 = (((!(G__26771_27821)))?typeof v === 'number':null);
var G__26774_27824 = (((!(G__26772_27822)))?typeof v2 === 'number':null);
var G__26762_27825 = self__.buf;
var G__26763_27826 = ((G__26771_27821)?v.buf:null);
var G__26764_27827 = ((G__26772_27822)?v2.buf:null);
var G__26765_27828 = (G__26762_27825[(0)]);
var G__26766_27829 = (G__26762_27825[(1)]);
var G__26767_27830 = ((G__26771_27821)?(G__26763_27826[(0)]):(cljs.core.truth_(G__26773_27823)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__26768_27831 = ((G__26771_27821)?(G__26763_27826[(1)]):(cljs.core.truth_(G__26773_27823)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__26769_27832 = ((G__26772_27822)?(G__26764_27827[(0)]):(cljs.core.truth_(G__26774_27824)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26770_27833 = ((G__26772_27822)?(G__26764_27827[(1)]):(cljs.core.truth_(G__26774_27824)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__26397__auto__[(0)] = (function (){var a__25949__auto__ = (function (){var a__25949__auto__ = G__26765_27828;
var b__25950__auto__ = G__26767_27830;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})();
var b__25950__auto__ = G__26769_27832;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26397__auto__[(1)] = (function (){var a__25949__auto__ = (function (){var a__25949__auto__ = G__26766_27829;
var b__25950__auto__ = G__26768_27831;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})();
var b__25950__auto__ = G__26770_27833;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__26397__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26386__auto__ = (new Float32Array((2)));
var G__26775_27839 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26776_27840 = v.buf;
(dest__26386__auto__[(0)] = (function (){var a__25956__auto__ = (G__26775_27839[(0)]);
var b__25957__auto__ = (G__26776_27840[(0)]);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26386__auto__[(1)] = (function (){var a__25956__auto__ = (G__26775_27839[(1)]);
var b__25957__auto__ = (G__26776_27840[(1)]);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__26386__auto__[(0)] = (function (){var a__25956__auto__ = (G__26775_27839[(0)]);
var b__25957__auto__ = v;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26386__auto__[(1)] = (function (){var a__25956__auto__ = (G__26775_27839[(1)]);
var b__25957__auto__ = v;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());
} else {
(dest__26386__auto__[(0)] = (function (){var a__25956__auto__ = (G__26775_27839[(0)]);
var b__25957__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26386__auto__[(1)] = (function (){var a__25956__auto__ = (G__26775_27839[(1)]);
var b__25957__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__26386__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__26397__auto__ = (new Float32Array((2)));
var G__26786_27842 = (v instanceof thi.ng.geom.vector.Vec2);
var G__26787_27843 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__26788_27844 = (((!(G__26786_27842)))?typeof v === 'number':null);
var G__26789_27845 = (((!(G__26787_27843)))?typeof v2 === 'number':null);
var G__26777_27846 = self__.buf;
var G__26778_27847 = ((G__26786_27842)?v.buf:null);
var G__26779_27848 = ((G__26787_27843)?v2.buf:null);
var G__26780_27849 = (G__26777_27846[(0)]);
var G__26781_27850 = (G__26777_27846[(1)]);
var G__26782_27851 = ((G__26786_27842)?(G__26778_27847[(0)]):(cljs.core.truth_(G__26788_27844)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__26783_27852 = ((G__26786_27842)?(G__26778_27847[(1)]):(cljs.core.truth_(G__26788_27844)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__26784_27853 = ((G__26787_27843)?(G__26779_27848[(0)]):(cljs.core.truth_(G__26789_27845)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26785_27854 = ((G__26787_27843)?(G__26779_27848[(1)]):(cljs.core.truth_(G__26789_27845)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__26397__auto__[(0)] = (function (){var a__25956__auto__ = (function (){var a__25956__auto__ = G__26780_27849;
var b__25957__auto__ = G__26782_27851;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})();
var b__25957__auto__ = G__26784_27853;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26397__auto__[(1)] = (function (){var a__25956__auto__ = (function (){var a__25956__auto__ = G__26781_27850;
var b__25957__auto__ = G__26783_27852;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})();
var b__25957__auto__ = G__26785_27854;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__26397__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta((function (){var G__26790 = (self__.buf[(0)]);
var G__26791 = (self__.buf[(1)]);
var G__26792 = x;
return (thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(G__26790,G__26791,G__26792) : thi.ng.geom.vector.vec3.call(null,G__26790,G__26791,G__26792));
})(),self__._meta);
}));

(thi.ng.geom.vector.Vec2.prototype.call = (function (unused__9235__auto__){
var self__ = this;
var self__ = this;
var G__26793 = (arguments.length - (1));
switch (G__26793) {
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

(thi.ng.geom.vector.Vec2.prototype.apply = (function (self__,args26551){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26551)));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = ___$1.thi$ng$math$core$IMagnitude$mag$arity$1(null));

(b[(1)] = ___$1.thi$ng$geom$core$IHeading$heading$arity$1(null));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__26794 = self__.buf;
var G__26795 = (G__26794[(0)]);
var G__26796 = (G__26794[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__26795 * Math.cos(G__26796)));

(b[(1)] = (G__26795 * Math.sin(G__26796)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((2) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((2) - c);
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__26797 = self__.buf;
var G__26798 = (G__26797[(0)]);
var G__26799 = (G__26797[(1)]);
var l = (function (){var G__26800 = ((G__26798 * G__26798) + (G__26799 * G__26799));
return Math.sqrt(G__26800);
})();
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__26798 / l));

(b[(1)] = (G__26799 / l));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__26801 = self__.buf;
var G__26802 = (G__26801[(0)]);
var G__26803 = (G__26801[(1)]);
var l = (function (){var G__26804 = ((G__26802 * G__26802) + (G__26803 * G__26803));
return Math.sqrt(G__26804);
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__26802 * l__$1));

(b[(1)] = (G__26803 * l__$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,___$1.thi$ng$math$core$IMagnitude$mag_squared$arity$1(null));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__26805 = self__.buf;
var G__26806 = (G__26805[(0)]);
var G__26807 = (G__26805[(1)]);
var G__26808 = ((G__26806 * G__26806) + (G__26807 * G__26807));
return Math.sqrt(G__26808);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__26809 = self__.buf;
var G__26810 = (G__26809[(0)]);
var G__26811 = (G__26809[(1)]);
return ((G__26810 * G__26810) + (G__26811 * G__26811));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__26397__auto__ = (new Float32Array((2)));
var G__26821_27873 = (a instanceof thi.ng.geom.vector.Vec2);
var G__26822_27874 = (b instanceof thi.ng.geom.vector.Vec2);
var G__26823_27875 = (((!(G__26821_27873)))?typeof a === 'number':null);
var G__26824_27876 = (((!(G__26822_27874)))?typeof b === 'number':null);
var G__26812_27877 = self__.buf;
var G__26813_27878 = ((G__26821_27873)?a.buf:null);
var G__26814_27879 = ((G__26822_27874)?b.buf:null);
var G__26815_27880 = (G__26812_27877[(0)]);
var G__26816_27881 = (G__26812_27877[(1)]);
var G__26817_27882 = ((G__26821_27873)?(G__26813_27878[(0)]):(cljs.core.truth_(G__26823_27875)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__26818_27883 = ((G__26821_27873)?(G__26813_27878[(1)]):(cljs.core.truth_(G__26823_27875)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__26819_27884 = ((G__26822_27874)?(G__26814_27879[(0)]):(cljs.core.truth_(G__26824_27876)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__26820_27885 = ((G__26822_27874)?(G__26814_27879[(1)]):(cljs.core.truth_(G__26824_27876)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__26397__auto__[(0)] = ((G__26815_27880 * G__26817_27882) - G__26819_27884));

(dest__26397__auto__[(1)] = ((G__26816_27881 * G__26818_27883) - G__26820_27885));

return (new thi.ng.geom.vector.Vec2(dest__26397__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26386__auto__ = (new Float32Array((2)));
var G__26825_27891 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26826_27892 = v.buf;
(dest__26386__auto__[(0)] = ((G__26825_27891[(0)]) * (G__26826_27892[(0)])));

(dest__26386__auto__[(1)] = ((G__26825_27891[(1)]) * (G__26826_27892[(1)])));
} else {
if(typeof v === 'number'){
(dest__26386__auto__[(0)] = ((G__26825_27891[(0)]) * v));

(dest__26386__auto__[(1)] = ((G__26825_27891[(1)]) * v));
} else {
(dest__26386__auto__[(0)] = ((G__26825_27891[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26386__auto__[(1)] = ((G__26825_27891[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__26386__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26827 = self__.buf;
var G__26830 = (new Float32Array((2)));
var G__26831 = (G__26827[(0)]);
var G__26832 = (G__26827[(1)]);
var G__26837 = typeof v1 === 'number';
var G__26838 = typeof v2 === 'number';
if(((G__26837)?G__26838:false)){
(G__26830[(0)] = (G__26831 * v1));

(G__26830[(1)] = (G__26832 * v2));
} else {
var G__26839_27893 = (((!(G__26837)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__26840_27894 = (((!(G__26838)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__26828_27895 = (cljs.core.truth_(G__26839_27893)?v1.buf:null);
var G__26829_27896 = (cljs.core.truth_(G__26840_27894)?v2.buf:null);
var G__26833_27897 = (cljs.core.truth_(G__26839_27893)?(G__26828_27895[(0)]):((G__26837)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__26834_27898 = (cljs.core.truth_(G__26839_27893)?(G__26828_27895[(1)]):((G__26837)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__26835_27899 = (cljs.core.truth_(G__26840_27894)?(G__26829_27896[(0)]):((G__26838)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__26836_27900 = (cljs.core.truth_(G__26840_27894)?(G__26829_27896[(1)]):((G__26838)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__26830[(0)] = ((G__26831 * G__26833_27897) * G__26835_27899));

(G__26830[(1)] = ((G__26832 * G__26834_27898) * G__26836_27900));
}

return (new thi.ng.geom.vector.Vec2(G__26830,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__26353__auto__ = (new Float32Array((2)));
var G__26841_27906 = self__.buf;
(dest__26353__auto__[(0)] = (- (G__26841_27906[(0)])));

(dest__26353__auto__[(1)] = (- (G__26841_27906[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__26353__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26386__auto__ = (new Float32Array((2)));
var G__26842_27908 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26843_27909 = v.buf;
(dest__26386__auto__[(0)] = ((G__26842_27908[(0)]) - (G__26843_27909[(0)])));

(dest__26386__auto__[(1)] = ((G__26842_27908[(1)]) - (G__26843_27909[(1)])));
} else {
if(typeof v === 'number'){
(dest__26386__auto__[(0)] = ((G__26842_27908[(0)]) - v));

(dest__26386__auto__[(1)] = ((G__26842_27908[(1)]) - v));
} else {
(dest__26386__auto__[(0)] = ((G__26842_27908[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26386__auto__[(1)] = ((G__26842_27908[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__26386__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26844 = self__.buf;
var G__26847 = (new Float32Array((2)));
var G__26848 = (G__26844[(0)]);
var G__26849 = (G__26844[(1)]);
var G__26854 = typeof v1 === 'number';
var G__26855 = typeof v2 === 'number';
if(((G__26854)?G__26855:false)){
(G__26847[(0)] = (G__26848 - v1));

(G__26847[(1)] = (G__26849 - v2));
} else {
var G__26856_27911 = (((!(G__26854)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__26857_27912 = (((!(G__26855)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__26845_27913 = (cljs.core.truth_(G__26856_27911)?v1.buf:null);
var G__26846_27914 = (cljs.core.truth_(G__26857_27912)?v2.buf:null);
var G__26850_27915 = (cljs.core.truth_(G__26856_27911)?(G__26845_27913[(0)]):((G__26854)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__26851_27916 = (cljs.core.truth_(G__26856_27911)?(G__26845_27913[(1)]):((G__26854)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__26852_27917 = (cljs.core.truth_(G__26857_27912)?(G__26846_27914[(0)]):((G__26855)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26853_27918 = (cljs.core.truth_(G__26857_27912)?(G__26846_27914[(1)]):((G__26855)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__26847[(0)] = ((G__26848 - G__26850_27915) - G__26852_27917));

(G__26847[(1)] = ((G__26849 - G__26851_27916) - G__26853_27918));
}

return (new thi.ng.geom.vector.Vec2(G__26847,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__26397__auto__ = (new Float32Array((2)));
var G__26867_27923 = (a instanceof thi.ng.geom.vector.Vec2);
var G__26868_27924 = (b instanceof thi.ng.geom.vector.Vec2);
var G__26869_27925 = (((!(G__26867_27923)))?typeof a === 'number':null);
var G__26870_27926 = (((!(G__26868_27924)))?typeof b === 'number':null);
var G__26858_27927 = self__.buf;
var G__26859_27928 = ((G__26867_27923)?a.buf:null);
var G__26860_27929 = ((G__26868_27924)?b.buf:null);
var G__26861_27930 = (G__26858_27927[(0)]);
var G__26862_27931 = (G__26858_27927[(1)]);
var G__26863_27932 = ((G__26867_27923)?(G__26859_27928[(0)]):(cljs.core.truth_(G__26869_27925)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__26864_27933 = ((G__26867_27923)?(G__26859_27928[(1)]):(cljs.core.truth_(G__26869_27925)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__26865_27934 = ((G__26868_27924)?(G__26860_27929[(0)]):(cljs.core.truth_(G__26870_27926)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__26866_27935 = ((G__26868_27924)?(G__26860_27929[(1)]):(cljs.core.truth_(G__26870_27926)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__26397__auto__[(0)] = ((G__26861_27930 * G__26863_27932) + G__26865_27934));

(dest__26397__auto__[(1)] = ((G__26862_27931 * G__26864_27933) + G__26866_27935));

return (new thi.ng.geom.vector.Vec2(dest__26397__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__26397__auto__ = (new Float32Array((2)));
var G__26880_27936 = (a instanceof thi.ng.geom.vector.Vec2);
var G__26881_27937 = (b instanceof thi.ng.geom.vector.Vec2);
var G__26882_27938 = (((!(G__26880_27936)))?typeof a === 'number':null);
var G__26883_27939 = (((!(G__26881_27937)))?typeof b === 'number':null);
var G__26871_27940 = self__.buf;
var G__26872_27941 = ((G__26880_27936)?a.buf:null);
var G__26873_27942 = ((G__26881_27937)?b.buf:null);
var G__26874_27943 = (G__26871_27940[(0)]);
var G__26875_27944 = (G__26871_27940[(1)]);
var G__26876_27945 = ((G__26880_27936)?(G__26872_27941[(0)]):(cljs.core.truth_(G__26882_27938)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__26877_27946 = ((G__26880_27936)?(G__26872_27941[(1)]):(cljs.core.truth_(G__26882_27938)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__26878_27947 = ((G__26881_27937)?(G__26873_27942[(0)]):(cljs.core.truth_(G__26883_27939)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__26879_27948 = ((G__26881_27937)?(G__26873_27942[(1)]):(cljs.core.truth_(G__26883_27939)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__26397__auto__[(0)] = ((G__26874_27943 + G__26876_27945) * G__26878_27947));

(dest__26397__auto__[(1)] = ((G__26875_27944 + G__26877_27946) * G__26879_27948));

return (new thi.ng.geom.vector.Vec2(dest__26397__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__26353__auto__ = (new Float32Array((2)));
var G__26884_27950 = self__.buf;
(dest__26353__auto__[(0)] = ((1) / (G__26884_27950[(0)])));

(dest__26353__auto__[(1)] = ((1) / (G__26884_27950[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__26353__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26386__auto__ = (new Float32Array((2)));
var G__26885_27951 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26886_27952 = v.buf;
(dest__26386__auto__[(0)] = ((G__26885_27951[(0)]) / (G__26886_27952[(0)])));

(dest__26386__auto__[(1)] = ((G__26885_27951[(1)]) / (G__26886_27952[(1)])));
} else {
if(typeof v === 'number'){
(dest__26386__auto__[(0)] = ((G__26885_27951[(0)]) / v));

(dest__26386__auto__[(1)] = ((G__26885_27951[(1)]) / v));
} else {
(dest__26386__auto__[(0)] = ((G__26885_27951[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26386__auto__[(1)] = ((G__26885_27951[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__26386__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26887 = self__.buf;
var G__26890 = (new Float32Array((2)));
var G__26891 = (G__26887[(0)]);
var G__26892 = (G__26887[(1)]);
var G__26897 = typeof v1 === 'number';
var G__26898 = typeof v2 === 'number';
if(((G__26897)?G__26898:false)){
(G__26890[(0)] = (G__26891 / v1));

(G__26890[(1)] = (G__26892 / v2));
} else {
var G__26899_27966 = (((!(G__26897)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__26900_27967 = (((!(G__26898)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__26888_27968 = (cljs.core.truth_(G__26899_27966)?v1.buf:null);
var G__26889_27969 = (cljs.core.truth_(G__26900_27967)?v2.buf:null);
var G__26893_27970 = (cljs.core.truth_(G__26899_27966)?(G__26888_27968[(0)]):((G__26897)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__26894_27971 = (cljs.core.truth_(G__26899_27966)?(G__26888_27968[(1)]):((G__26897)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__26895_27972 = (cljs.core.truth_(G__26900_27967)?(G__26889_27969[(0)]):((G__26898)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26896_27973 = (cljs.core.truth_(G__26900_27967)?(G__26889_27969[(1)]):((G__26898)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__26890[(0)] = ((G__26891 / G__26893_27970) / G__26895_27972));

(G__26890[(1)] = ((G__26892 / G__26894_27971) / G__26896_27973));
}

return (new thi.ng.geom.vector.Vec2(G__26890,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26386__auto__ = (new Float32Array((2)));
var G__26901_27978 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__26902_27979 = v.buf;
(dest__26386__auto__[(0)] = ((G__26901_27978[(0)]) + (G__26902_27979[(0)])));

(dest__26386__auto__[(1)] = ((G__26901_27978[(1)]) + (G__26902_27979[(1)])));
} else {
if(typeof v === 'number'){
(dest__26386__auto__[(0)] = ((G__26901_27978[(0)]) + v));

(dest__26386__auto__[(1)] = ((G__26901_27978[(1)]) + v));
} else {
(dest__26386__auto__[(0)] = ((G__26901_27978[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26386__auto__[(1)] = ((G__26901_27978[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__26386__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26903 = self__.buf;
var G__26906 = (new Float32Array((2)));
var G__26907 = (G__26903[(0)]);
var G__26908 = (G__26903[(1)]);
var G__26913 = typeof v1 === 'number';
var G__26914 = typeof v2 === 'number';
if(((G__26913)?G__26914:false)){
(G__26906[(0)] = (G__26907 + v1));

(G__26906[(1)] = (G__26908 + v2));
} else {
var G__26915_27980 = (((!(G__26913)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__26916_27981 = (((!(G__26914)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__26904_27982 = (cljs.core.truth_(G__26915_27980)?v1.buf:null);
var G__26905_27983 = (cljs.core.truth_(G__26916_27981)?v2.buf:null);
var G__26909_27984 = (cljs.core.truth_(G__26915_27980)?(G__26904_27982[(0)]):((G__26913)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__26910_27985 = (cljs.core.truth_(G__26915_27980)?(G__26904_27982[(1)]):((G__26913)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__26911_27986 = (cljs.core.truth_(G__26916_27981)?(G__26905_27983[(0)]):((G__26914)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26912_27987 = (cljs.core.truth_(G__26916_27981)?(G__26905_27983[(1)]):((G__26914)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__26906[(0)] = ((G__26907 + G__26909_27984) + G__26911_27986));

(G__26906[(1)] = ((G__26908 + G__26910_27985) + G__26912_27987));
}

return (new thi.ng.geom.vector.Vec2(G__26906,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__26353__auto__ = (new Float32Array((2)));
var G__26917_27994 = self__.buf;
(dest__26353__auto__[(0)] = (function (){var G__26918 = (G__26917_27994[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__26918) : thi.ng.math.core.abs_STAR_.call(null,G__26918));
})());

(dest__26353__auto__[(1)] = (function (){var G__26919 = (G__26917_27994[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__26919) : thi.ng.math.core.abs_STAR_.call(null,G__26919));
})());

return (new thi.ng.geom.vector.Vec2(dest__26353__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__26397__auto__ = (new Float32Array((2)));
var G__26929_27995 = (a instanceof thi.ng.geom.vector.Vec2);
var G__26930_27996 = (b instanceof thi.ng.geom.vector.Vec2);
var G__26931_27997 = (((!(G__26929_27995)))?typeof a === 'number':null);
var G__26932_27998 = (((!(G__26930_27996)))?typeof b === 'number':null);
var G__26920_27999 = self__.buf;
var G__26921_28000 = ((G__26929_27995)?a.buf:null);
var G__26922_28001 = ((G__26930_27996)?b.buf:null);
var G__26923_28002 = (G__26920_27999[(0)]);
var G__26924_28003 = (G__26920_27999[(1)]);
var G__26925_28004 = ((G__26929_27995)?(G__26921_28000[(0)]):(cljs.core.truth_(G__26931_27997)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__26926_28005 = ((G__26929_27995)?(G__26921_28000[(1)]):(cljs.core.truth_(G__26931_27997)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__26927_28006 = ((G__26930_27996)?(G__26922_28001[(0)]):(cljs.core.truth_(G__26932_27998)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__26928_28007 = ((G__26930_27996)?(G__26922_28001[(1)]):(cljs.core.truth_(G__26932_27998)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__26397__auto__[(0)] = ((G__26923_28002 - G__26925_28004) * G__26927_28006));

(dest__26397__auto__[(1)] = ((G__26924_28003 - G__26926_28005) * G__26928_28007));

return (new thi.ng.geom.vector.Vec2(dest__26397__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(thi.ng.geom.vector.Vec2.cljs$lang$type = true);

(thi.ng.geom.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec2");

(thi.ng.geom.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"thi.ng.geom.vector/Vec2");
}));

/**
 * Positional factory function for thi.ng.geom.vector/Vec2.
 */
thi.ng.geom.vector.__GT_Vec2 = (function thi$ng$geom$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.core.IRotate3D}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26934_28013 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__26935_28015 = v.buf;
(self__.buf[(0)] = ((G__26934_28013[(0)]) - (G__26935_28015[(0)])));

(self__.buf[(1)] = ((G__26934_28013[(1)]) - (G__26935_28015[(1)])));

(self__.buf[(2)] = ((G__26934_28013[(2)]) - (G__26935_28015[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__26934_28013[(0)]) - v));

(self__.buf[(1)] = ((G__26934_28013[(1)]) - v));

(self__.buf[(2)] = ((G__26934_28013[(2)]) - v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__26934_28013[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__26934_28013[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__26934_28013[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26948_28016 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__26949_28017 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__26950_28018 = (((!(G__26948_28016)))?typeof v1 === 'number':null);
var G__26951_28019 = (((!(G__26949_28017)))?typeof v2 === 'number':null);
var G__26936_28020 = self__.buf;
var G__26937_28021 = ((G__26948_28016)?v1.buf:null);
var G__26938_28022 = ((G__26949_28017)?v2.buf:null);
var G__26939_28023 = (G__26936_28020[(0)]);
var G__26940_28024 = (G__26936_28020[(1)]);
var G__26941_28025 = (G__26936_28020[(2)]);
var G__26942_28026 = ((G__26948_28016)?(G__26937_28021[(0)]):(cljs.core.truth_(G__26950_28018)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__26943_28027 = ((G__26948_28016)?(G__26937_28021[(1)]):(cljs.core.truth_(G__26950_28018)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__26944_28028 = ((G__26948_28016)?(G__26937_28021[(2)]):(cljs.core.truth_(G__26950_28018)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__26945_28029 = ((G__26949_28017)?(G__26938_28022[(0)]):(cljs.core.truth_(G__26951_28019)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26946_28030 = ((G__26949_28017)?(G__26938_28022[(1)]):(cljs.core.truth_(G__26951_28019)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__26947_28031 = ((G__26949_28017)?(G__26938_28022[(2)]):(cljs.core.truth_(G__26951_28019)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__26939_28023 - G__26942_28026) - G__26945_28029));

(self__.buf[(1)] = ((G__26940_28024 - G__26943_28027) - G__26946_28030));

(self__.buf[(2)] = ((G__26941_28025 - G__26944_28028) - G__26947_28031));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__26952_28037 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__26953_28038 = v.buf;
(self__.buf[(0)] = ((G__26952_28037[(0)]) * (G__26953_28038[(0)])));

(self__.buf[(1)] = ((G__26952_28037[(1)]) * (G__26953_28038[(1)])));

(self__.buf[(2)] = ((G__26952_28037[(2)]) * (G__26953_28038[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__26952_28037[(0)]) * v));

(self__.buf[(1)] = ((G__26952_28037[(1)]) * v));

(self__.buf[(2)] = ((G__26952_28037[(2)]) * v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__26952_28037[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__26952_28037[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__26952_28037[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__26966_28045 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__26967_28046 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__26968_28047 = (((!(G__26966_28045)))?typeof v1 === 'number':null);
var G__26969_28048 = (((!(G__26967_28046)))?typeof v2 === 'number':null);
var G__26954_28049 = self__.buf;
var G__26955_28050 = ((G__26966_28045)?v1.buf:null);
var G__26956_28051 = ((G__26967_28046)?v2.buf:null);
var G__26957_28052 = (G__26954_28049[(0)]);
var G__26958_28053 = (G__26954_28049[(1)]);
var G__26959_28054 = (G__26954_28049[(2)]);
var G__26960_28055 = ((G__26966_28045)?(G__26955_28050[(0)]):(cljs.core.truth_(G__26968_28047)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__26961_28056 = ((G__26966_28045)?(G__26955_28050[(1)]):(cljs.core.truth_(G__26968_28047)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__26962_28057 = ((G__26966_28045)?(G__26955_28050[(2)]):(cljs.core.truth_(G__26968_28047)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__26963_28058 = ((G__26967_28046)?(G__26956_28051[(0)]):(cljs.core.truth_(G__26969_28048)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__26964_28059 = ((G__26967_28046)?(G__26956_28051[(1)]):(cljs.core.truth_(G__26969_28048)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__26965_28060 = ((G__26967_28046)?(G__26956_28051[(2)]):(cljs.core.truth_(G__26969_28048)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__26957_28052 * G__26960_28055) * G__26963_28058));

(self__.buf[(1)] = ((G__26958_28053 * G__26961_28056) * G__26964_28059));

(self__.buf[(2)] = ((G__26959_28054 * G__26962_28057) * G__26965_28060));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__26982_28066 = (a instanceof thi.ng.geom.vector.Vec3);
var G__26983_28067 = (b instanceof thi.ng.geom.vector.Vec3);
var G__26984_28068 = (((!(G__26982_28066)))?typeof a === 'number':null);
var G__26985_28069 = (((!(G__26983_28067)))?typeof b === 'number':null);
var G__26970_28070 = self__.buf;
var G__26971_28071 = ((G__26982_28066)?a.buf:null);
var G__26972_28072 = ((G__26983_28067)?b.buf:null);
var G__26973_28073 = (G__26970_28070[(0)]);
var G__26974_28074 = (G__26970_28070[(1)]);
var G__26975_28075 = (G__26970_28070[(2)]);
var G__26976_28076 = ((G__26982_28066)?(G__26971_28071[(0)]):(cljs.core.truth_(G__26984_28068)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__26977_28077 = ((G__26982_28066)?(G__26971_28071[(1)]):(cljs.core.truth_(G__26984_28068)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__26978_28078 = ((G__26982_28066)?(G__26971_28071[(2)]):(cljs.core.truth_(G__26984_28068)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__26979_28079 = ((G__26983_28067)?(G__26972_28072[(0)]):(cljs.core.truth_(G__26985_28069)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__26980_28080 = ((G__26983_28067)?(G__26972_28072[(1)]):(cljs.core.truth_(G__26985_28069)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__26981_28081 = ((G__26983_28067)?(G__26972_28072[(2)]):(cljs.core.truth_(G__26985_28069)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__26973_28073 - G__26976_28076) * G__26979_28079));

(self__.buf[(1)] = ((G__26974_28074 - G__26977_28077) * G__26980_28080));

(self__.buf[(2)] = ((G__26975_28075 - G__26978_28078) * G__26981_28081));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__26998_28083 = (a instanceof thi.ng.geom.vector.Vec3);
var G__26999_28084 = (b instanceof thi.ng.geom.vector.Vec3);
var G__27000_28085 = (((!(G__26998_28083)))?typeof a === 'number':null);
var G__27001_28086 = (((!(G__26999_28084)))?typeof b === 'number':null);
var G__26986_28087 = self__.buf;
var G__26987_28088 = ((G__26998_28083)?a.buf:null);
var G__26988_28089 = ((G__26999_28084)?b.buf:null);
var G__26989_28090 = (G__26986_28087[(0)]);
var G__26990_28091 = (G__26986_28087[(1)]);
var G__26991_28092 = (G__26986_28087[(2)]);
var G__26992_28093 = ((G__26998_28083)?(G__26987_28088[(0)]):(cljs.core.truth_(G__27000_28085)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__26993_28094 = ((G__26998_28083)?(G__26987_28088[(1)]):(cljs.core.truth_(G__27000_28085)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__26994_28095 = ((G__26998_28083)?(G__26987_28088[(2)]):(cljs.core.truth_(G__27000_28085)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__26995_28096 = ((G__26999_28084)?(G__26988_28089[(0)]):(cljs.core.truth_(G__27001_28086)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__26996_28097 = ((G__26999_28084)?(G__26988_28089[(1)]):(cljs.core.truth_(G__27001_28086)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__26997_28098 = ((G__26999_28084)?(G__26988_28089[(2)]):(cljs.core.truth_(G__27001_28086)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__26989_28090 * G__26992_28093) - G__26995_28096));

(self__.buf[(1)] = ((G__26990_28091 * G__26993_28094) - G__26996_28097));

(self__.buf[(2)] = ((G__26991_28092 * G__26994_28095) - G__26997_28098));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__27002 = (self__.buf[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__27002) : thi.ng.math.core.abs_STAR_.call(null,G__27002));
})());

(self__.buf[(1)] = (function (){var G__27003 = (self__.buf[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__27003) : thi.ng.math.core.abs_STAR_.call(null,G__27003));
})());

(self__.buf[(2)] = (function (){var G__27004 = (self__.buf[(2)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__27004) : thi.ng.math.core.abs_STAR_.call(null,G__27004));
})());

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__27017_28104 = (a instanceof thi.ng.geom.vector.Vec3);
var G__27018_28105 = (b instanceof thi.ng.geom.vector.Vec3);
var G__27019_28106 = (((!(G__27017_28104)))?typeof a === 'number':null);
var G__27020_28107 = (((!(G__27018_28105)))?typeof b === 'number':null);
var G__27005_28108 = self__.buf;
var G__27006_28109 = ((G__27017_28104)?a.buf:null);
var G__27007_28110 = ((G__27018_28105)?b.buf:null);
var G__27008_28111 = (G__27005_28108[(0)]);
var G__27009_28112 = (G__27005_28108[(1)]);
var G__27010_28113 = (G__27005_28108[(2)]);
var G__27011_28114 = ((G__27017_28104)?(G__27006_28109[(0)]):(cljs.core.truth_(G__27019_28106)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__27012_28115 = ((G__27017_28104)?(G__27006_28109[(1)]):(cljs.core.truth_(G__27019_28106)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__27013_28116 = ((G__27017_28104)?(G__27006_28109[(2)]):(cljs.core.truth_(G__27019_28106)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__27014_28117 = ((G__27018_28105)?(G__27007_28110[(0)]):(cljs.core.truth_(G__27020_28107)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__27015_28118 = ((G__27018_28105)?(G__27007_28110[(1)]):(cljs.core.truth_(G__27020_28107)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__27016_28119 = ((G__27018_28105)?(G__27007_28110[(2)]):(cljs.core.truth_(G__27020_28107)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__27008_28111 * G__27011_28114) + G__27014_28117));

(self__.buf[(1)] = ((G__27009_28112 * G__27012_28115) + G__27015_28118));

(self__.buf[(2)] = ((G__27010_28113 * G__27013_28116) + G__27016_28119));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27021_28126 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27022_28127 = v.buf;
(self__.buf[(0)] = ((G__27021_28126[(0)]) / (G__27022_28127[(0)])));

(self__.buf[(1)] = ((G__27021_28126[(1)]) / (G__27022_28127[(1)])));

(self__.buf[(2)] = ((G__27021_28126[(2)]) / (G__27022_28127[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__27021_28126[(0)]) / v));

(self__.buf[(1)] = ((G__27021_28126[(1)]) / v));

(self__.buf[(2)] = ((G__27021_28126[(2)]) / v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__27021_28126[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__27021_28126[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__27021_28126[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27035_28133 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__27036_28134 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__27037_28135 = (((!(G__27035_28133)))?typeof v1 === 'number':null);
var G__27038_28136 = (((!(G__27036_28134)))?typeof v2 === 'number':null);
var G__27023_28137 = self__.buf;
var G__27024_28138 = ((G__27035_28133)?v1.buf:null);
var G__27025_28139 = ((G__27036_28134)?v2.buf:null);
var G__27026_28140 = (G__27023_28137[(0)]);
var G__27027_28141 = (G__27023_28137[(1)]);
var G__27028_28142 = (G__27023_28137[(2)]);
var G__27029_28143 = ((G__27035_28133)?(G__27024_28138[(0)]):(cljs.core.truth_(G__27037_28135)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__27030_28144 = ((G__27035_28133)?(G__27024_28138[(1)]):(cljs.core.truth_(G__27037_28135)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__27031_28145 = ((G__27035_28133)?(G__27024_28138[(2)]):(cljs.core.truth_(G__27037_28135)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__27032_28146 = ((G__27036_28134)?(G__27025_28139[(0)]):(cljs.core.truth_(G__27038_28136)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__27033_28147 = ((G__27036_28134)?(G__27025_28139[(1)]):(cljs.core.truth_(G__27038_28136)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__27034_28148 = ((G__27036_28134)?(G__27025_28139[(2)]):(cljs.core.truth_(G__27038_28136)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__27026_28140 / G__27029_28143) / G__27032_28146));

(self__.buf[(1)] = ((G__27027_28141 / G__27030_28144) / G__27033_28147));

(self__.buf[(2)] = ((G__27028_28142 / G__27031_28145) / G__27034_28148));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27039_28150 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27040_28151 = v.buf;
(self__.buf[(0)] = ((G__27039_28150[(0)]) + (G__27040_28151[(0)])));

(self__.buf[(1)] = ((G__27039_28150[(1)]) + (G__27040_28151[(1)])));

(self__.buf[(2)] = ((G__27039_28150[(2)]) + (G__27040_28151[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__27039_28150[(0)]) + v));

(self__.buf[(1)] = ((G__27039_28150[(1)]) + v));

(self__.buf[(2)] = ((G__27039_28150[(2)]) + v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__27039_28150[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__27039_28150[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__27039_28150[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__27053_28159 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__27054_28160 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__27055_28161 = (((!(G__27053_28159)))?typeof v1 === 'number':null);
var G__27056_28162 = (((!(G__27054_28160)))?typeof v2 === 'number':null);
var G__27041_28163 = self__.buf;
var G__27042_28164 = ((G__27053_28159)?v1.buf:null);
var G__27043_28165 = ((G__27054_28160)?v2.buf:null);
var G__27044_28166 = (G__27041_28163[(0)]);
var G__27045_28167 = (G__27041_28163[(1)]);
var G__27046_28168 = (G__27041_28163[(2)]);
var G__27047_28169 = ((G__27053_28159)?(G__27042_28164[(0)]):(cljs.core.truth_(G__27055_28161)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__27048_28170 = ((G__27053_28159)?(G__27042_28164[(1)]):(cljs.core.truth_(G__27055_28161)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__27049_28171 = ((G__27053_28159)?(G__27042_28164[(2)]):(cljs.core.truth_(G__27055_28161)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__27050_28172 = ((G__27054_28160)?(G__27043_28165[(0)]):(cljs.core.truth_(G__27056_28162)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__27051_28173 = ((G__27054_28160)?(G__27043_28165[(1)]):(cljs.core.truth_(G__27056_28162)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__27052_28174 = ((G__27054_28160)?(G__27043_28165[(2)]):(cljs.core.truth_(G__27056_28162)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__27044_28166 + G__27047_28169) + G__27050_28172));

(self__.buf[(1)] = ((G__27045_28167 + G__27048_28170) + G__27051_28173));

(self__.buf[(2)] = ((G__27046_28168 + G__27049_28171) + G__27052_28174));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__27069_28176 = (a instanceof thi.ng.geom.vector.Vec3);
var G__27070_28177 = (b instanceof thi.ng.geom.vector.Vec3);
var G__27071_28178 = (((!(G__27069_28176)))?typeof a === 'number':null);
var G__27072_28179 = (((!(G__27070_28177)))?typeof b === 'number':null);
var G__27057_28180 = self__.buf;
var G__27058_28181 = ((G__27069_28176)?a.buf:null);
var G__27059_28182 = ((G__27070_28177)?b.buf:null);
var G__27060_28183 = (G__27057_28180[(0)]);
var G__27061_28184 = (G__27057_28180[(1)]);
var G__27062_28185 = (G__27057_28180[(2)]);
var G__27063_28186 = ((G__27069_28176)?(G__27058_28181[(0)]):(cljs.core.truth_(G__27071_28178)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__27064_28187 = ((G__27069_28176)?(G__27058_28181[(1)]):(cljs.core.truth_(G__27071_28178)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__27065_28188 = ((G__27069_28176)?(G__27058_28181[(2)]):(cljs.core.truth_(G__27071_28178)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__27066_28189 = ((G__27070_28177)?(G__27059_28182[(0)]):(cljs.core.truth_(G__27072_28179)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__27067_28190 = ((G__27070_28177)?(G__27059_28182[(1)]):(cljs.core.truth_(G__27072_28179)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__27068_28191 = ((G__27070_28177)?(G__27059_28182[(2)]):(cljs.core.truth_(G__27072_28179)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__27060_28183 + G__27063_28186) * G__27066_28189));

(self__.buf[(1)] = ((G__27061_28184 + G__27064_28187) * G__27067_28190));

(self__.buf[(2)] = ((G__27062_28185 + G__27065_28188) * G__27068_28191));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
}));

(thi.ng.geom.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(2)])),"]"].join('');
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__27073_28202 = self__.buf;
var G__27075_28203 = (G__27073_28202[(0)]);
var G__27076_28204 = (G__27073_28202[(1)]);
var G__27077_28205 = (G__27073_28202[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27074_28206 = v.buf;
var G__27078_28207 = (G__27074_28206[(0)]);
var G__27079_28208 = (G__27074_28206[(1)]);
var G__27080_28209 = (G__27074_28206[(2)]);
(b[(0)] = ((G__27076_28204 * G__27080_28209) - (G__27079_28208 * G__27077_28205)));

(b[(1)] = ((G__27077_28205 * G__27078_28207) - (G__27080_28209 * G__27075_28203)));

(b[(2)] = ((G__27075_28203 * G__27079_28208) - (G__27078_28207 * G__27076_28204)));
} else {
var G__27078_28210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__27079_28211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__27080_28212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
(b[(0)] = ((G__27076_28204 * G__27080_28212) - (G__27079_28211 * G__27077_28205)));

(b[(1)] = ((G__27077_28205 * G__27078_28210) - (G__27080_28212 * G__27075_28203)));

(b[(2)] = ((G__27075_28203 * G__27079_28211) - (G__27078_28210 * G__27076_28204)));
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_(n);
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#vec3 ["," ","]",opts,cljs.core.seq(___$1));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__27081 = self__.buf;
var G__27083 = (G__27081[(0)]);
var G__27084 = (G__27081[(1)]);
var G__27085 = (G__27081[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27082 = v.buf;
var G__27086 = (G__27082[(0)]);
var G__27087 = (G__27082[(1)]);
var G__27088 = (G__27082[(2)]);
var d = ((((G__27083 * G__27086) + (G__27084 * G__27087)) + (G__27085 * G__27088)) * 2.0);
(b[(0)] = ((G__27086 * d) - G__27083));

(b[(1)] = ((G__27087 * d) - G__27084));

(b[(2)] = ((G__27088 * d) - G__27085));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__27086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__27087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__27088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var d = ((((G__27083 * G__27086) + (G__27084 * G__27087)) + (G__27085 * G__27088)) * 2.0);
(b[(0)] = ((G__27086 * d) - G__27083));

(b[(1)] = ((G__27087 * d) - G__27084));

(b[(2)] = ((G__27088 * d) - G__27085));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27089 = ___$1.thi$ng$geom$core$IDistance$dist_squared$arity$2(null,v);
return Math.sqrt(G__27089);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27090 = self__.buf;
var G__27092 = (G__27090[(0)]);
var G__27093 = (G__27090[(1)]);
var G__27094 = (G__27090[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27091 = v.buf;
var G__27095 = (G__27091[(0)]);
var G__27096 = (G__27091[(1)]);
var G__27097 = (G__27091[(2)]);
var dx = (G__27092 - G__27095);
var dy = (G__27093 - G__27096);
var dz = (G__27094 - G__27097);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__27095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__27096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__27097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var dx = (G__27092 - G__27095);
var dy = (G__27093 - G__27096);
var dz = (G__27094 - G__27097);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$IRotate3D$rotate_z$arity$2(null,theta);
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IMathOps$_$arity$1(null);
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var fexpr__27099 = (function (){var G__27100 = new cljs.core.Keyword(null,"zyx","zyx",1752527951);
return (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__27100) : thi.ng.geom.vector.swizzle3_fns.call(null,G__27100));
})();
return (fexpr__27099.cljs$core$IFn$_invoke$arity$1 ? fexpr__27099.cljs$core$IFn$_invoke$arity$1(___$1) : fexpr__27099.call(null,___$1));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((___$1.thi$ng$math$core$IMagnitude$mag_squared$arity$1(null) > (len * len))){
return ___$1.thi$ng$math$core$INormalize$normalize$arity$2(null,len);
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26521__auto__ = (new Float32Array((3)));
var G__27101_28230 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27102_28231 = v.buf;
(dest__26521__auto__[(0)] = ((G__27101_28230[(0)]) * (G__27102_28231[(0)])));

(dest__26521__auto__[(1)] = ((G__27101_28230[(1)]) * (G__27102_28231[(1)])));

(dest__26521__auto__[(2)] = ((G__27101_28230[(2)]) * (G__27102_28231[(2)])));
} else {
if(typeof v === 'number'){
(dest__26521__auto__[(0)] = ((G__27101_28230[(0)]) * v));

(dest__26521__auto__[(1)] = ((G__27101_28230[(1)]) * v));

(dest__26521__auto__[(2)] = ((G__27101_28230[(2)]) * v));
} else {
(dest__26521__auto__[(0)] = ((G__27101_28230[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26521__auto__[(1)] = ((G__27101_28230[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__26521__auto__[(2)] = ((G__27101_28230[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__26521__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = self__._hash;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(2)]))) | (0)),(3)));
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(null,v,thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((3) === cljs.core.count(v))){
var G__27103 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27104 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__27103[(0)]),(G__27104[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__27103[(1)]),(G__27104[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__27103[(2)]),(G__27104[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__27103[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__27103[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__27103[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)]))));
} else {
return ((cljs.core.sequential_QMARK_(o)) && (((3) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(2)))));
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec3((thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__27105 = (buf_SINGLEQUOTE_[(0)]);
var G__27106 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__27105,G__27106) : f2.call(null,G__27105,G__27106));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__27107 = (buf_SINGLEQUOTE_[(1)]);
var G__27108 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__27107,G__27108) : f2.call(null,G__27107,G__27108));
})());

(buf_SINGLEQUOTE_[(2)] = (function (){var G__27109 = (buf_SINGLEQUOTE_[(2)]);
var G__27110 = (2);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__27109,G__27110) : f2.call(null,G__27109,G__27110));
})());

return (new thi.ng.geom.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__27111 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27112 = v.buf;
return ((((G__27111[(0)]) * (G__27112[(0)])) + ((G__27111[(1)]) * (G__27112[(1)]))) + ((G__27111[(2)]) * (G__27112[(2)])));
} else {
return ((((G__27111[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__27111[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0))) + ((G__27111[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__27113 = (self__.buf[(0)]);
var G__27114 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27113,G__27114) : f.call(null,G__27113,G__27114));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__27115 = acc;
var G__27116 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27115,G__27116) : f.call(null,G__27115,G__27116));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
return acc__$1;
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__27117 = start;
var G__27118 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27117,G__27118) : f.call(null,G__27117,G__27118));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__27119 = acc;
var G__27120 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27119,G__27120) : f.call(null,G__27119,G__27120));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
var acc__$2 = (function (){var G__27121 = acc__$1;
var G__27122 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27121,G__27122) : f.call(null,G__27121,G__27122));
})();
if(cljs.core.reduced_QMARK_(acc__$2)){
return cljs.core.deref(acc__$2);
} else {
return acc__$2;
}
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26521__auto__ = (new Float32Array((3)));
var G__27123_28247 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27124_28248 = v.buf;
(dest__26521__auto__[(0)] = ((G__27123_28247[(0)]) + (G__27124_28248[(0)])));

(dest__26521__auto__[(1)] = ((G__27123_28247[(1)]) + (G__27124_28248[(1)])));

(dest__26521__auto__[(2)] = ((G__27123_28247[(2)]) + (G__27124_28248[(2)])));
} else {
if(typeof v === 'number'){
(dest__26521__auto__[(0)] = ((G__27123_28247[(0)]) + v));

(dest__26521__auto__[(1)] = ((G__27123_28247[(1)]) + v));

(dest__26521__auto__[(2)] = ((G__27123_28247[(2)]) + v));
} else {
(dest__26521__auto__[(0)] = ((G__27123_28247[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26521__auto__[(1)] = ((G__27123_28247[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__26521__auto__[(2)] = ((G__27123_28247[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__26521__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$IHeading$heading_xy$arity$1(null);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__27125 = (self__.buf[(1)]);
var G__27126 = (self__.buf[(0)]);
return Math.atan2(G__27125,G__27126);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__27127 = (self__.buf[(2)]);
var G__27128 = (self__.buf[(0)]);
return Math.atan2(G__27127,G__27128);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__27129 = (self__.buf[(2)]);
var G__27130 = (self__.buf[(1)]);
return Math.atan2(G__27129,G__27130);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.vector.Vec3))?v:(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(v) : thi.ng.geom.vector.vec3.call(null,v)));
var G__27131 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(___$1.thi$ng$math$core$INormalize$normalize$arity$1(null),thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(v__$1));
return Math.acos(G__27131);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__27132_28254 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27133_28255 = v.buf;
(b[(0)] = (((G__27132_28254[(0)]) + (G__27133_28255[(0)])) * 0.5));

(b[(1)] = (((G__27132_28254[(1)]) + (G__27133_28255[(1)])) * 0.5));

(b[(2)] = (((G__27132_28254[(2)]) + (G__27133_28255[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__27132_28254[(0)]) + v) * 0.5));

(b[(1)] = (((G__27132_28254[(1)]) + v) * 0.5));

(b[(2)] = (((G__27132_28254[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__27132_28254[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__27132_28254[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));

(b[(2)] = (((G__27132_28254[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__27146_28261 = (v instanceof thi.ng.geom.vector.Vec3);
var G__27147_28262 = (t instanceof thi.ng.geom.vector.Vec3);
var G__27148_28263 = (((!(G__27146_28261)))?typeof v === 'number':null);
var G__27149_28264 = (((!(G__27147_28262)))?typeof t === 'number':null);
var G__27134_28265 = self__.buf;
var G__27135_28266 = ((G__27146_28261)?v.buf:null);
var G__27136_28267 = ((G__27147_28262)?t.buf:null);
var G__27137_28268 = (G__27134_28265[(0)]);
var G__27138_28269 = (G__27134_28265[(1)]);
var G__27139_28270 = (G__27134_28265[(2)]);
var G__27140_28271 = ((G__27146_28261)?(G__27135_28266[(0)]):(cljs.core.truth_(G__27148_28263)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__27141_28272 = ((G__27146_28261)?(G__27135_28266[(1)]):(cljs.core.truth_(G__27148_28263)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__27142_28273 = ((G__27146_28261)?(G__27135_28266[(2)]):(cljs.core.truth_(G__27148_28263)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__27143_28274 = ((G__27147_28262)?(G__27136_28267[(0)]):(cljs.core.truth_(G__27149_28264)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__27144_28275 = ((G__27147_28262)?(G__27136_28267[(1)]):(cljs.core.truth_(G__27149_28264)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
var G__27145_28276 = ((G__27147_28262)?(G__27136_28267[(2)]):(cljs.core.truth_(G__27149_28264)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(2),0.0)));
(b[(0)] = (((G__27140_28271 - G__27137_28268) * G__27143_28274) + G__27137_28268));

(b[(1)] = (((G__27141_28272 - G__27138_28269) * G__27144_28275) + G__27138_28269));

(b[(2)] = (((G__27142_28273 - G__27139_28270) * G__27145_28276) + G__27139_28270));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(2),0.0)));
var G__27162_28284 = (b instanceof thi.ng.geom.vector.Vec3);
var G__27163_28285 = (c instanceof thi.ng.geom.vector.Vec3);
var G__27164_28286 = (((!(G__27162_28284)))?typeof b === 'number':null);
var G__27165_28287 = (((!(G__27163_28285)))?typeof c === 'number':null);
var G__27150_28288 = self__.buf;
var G__27151_28289 = ((G__27162_28284)?b.buf:null);
var G__27152_28290 = ((G__27163_28285)?c.buf:null);
var G__27153_28291 = (G__27150_28288[(0)]);
var G__27154_28292 = (G__27150_28288[(1)]);
var G__27155_28293 = (G__27150_28288[(2)]);
var G__27156_28294 = ((G__27162_28284)?(G__27151_28289[(0)]):(cljs.core.truth_(G__27164_28286)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__27157_28295 = ((G__27162_28284)?(G__27151_28289[(1)]):(cljs.core.truth_(G__27164_28286)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__27158_28296 = ((G__27162_28284)?(G__27151_28289[(2)]):(cljs.core.truth_(G__27164_28286)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
var G__27159_28297 = ((G__27163_28285)?(G__27152_28290[(0)]):(cljs.core.truth_(G__27165_28287)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__27160_28298 = ((G__27163_28285)?(G__27152_28290[(1)]):(cljs.core.truth_(G__27165_28287)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var G__27161_28299 = ((G__27163_28285)?(G__27152_28290[(2)]):(cljs.core.truth_(G__27165_28287)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(2),0.0)));
var x1_28304 = (((G__27156_28294 - G__27153_28291) * u) + G__27153_28291);
var y1_28305 = (((G__27157_28295 - G__27154_28292) * u) + G__27154_28292);
var z1_28306 = (((G__27158_28296 - G__27155_28293) * u) + G__27155_28293);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__27159_28297) * u) + G__27159_28297) - x1_28304) * v) + x1_28304));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__27160_28298) * u) + G__27160_28298) - y1_28305) * v) + y1_28305));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__27161_28299) * u) + G__27161_28299) - z1_28306) * v) + z1_28306));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__27178_28307 = (v instanceof thi.ng.geom.vector.Vec3);
var G__27179_28308 = (t instanceof thi.ng.geom.vector.Vec3);
var G__27180_28309 = (((!(G__27178_28307)))?typeof v === 'number':null);
var G__27181_28310 = (((!(G__27179_28308)))?typeof t === 'number':null);
var G__27166_28311 = self__.buf;
var G__27167_28312 = ((G__27178_28307)?v.buf:null);
var G__27168_28313 = ((G__27179_28308)?t.buf:null);
var G__27169_28314 = (G__27166_28311[(0)]);
var G__27170_28315 = (G__27166_28311[(1)]);
var G__27171_28316 = (G__27166_28311[(2)]);
var G__27172_28317 = ((G__27178_28307)?(G__27167_28312[(0)]):(cljs.core.truth_(G__27180_28309)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__27173_28318 = ((G__27178_28307)?(G__27167_28312[(1)]):(cljs.core.truth_(G__27180_28309)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__27174_28319 = ((G__27178_28307)?(G__27167_28312[(2)]):(cljs.core.truth_(G__27180_28309)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__27175_28320 = ((G__27179_28308)?(G__27168_28313[(0)]):(cljs.core.truth_(G__27181_28310)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__27176_28321 = ((G__27179_28308)?(G__27168_28313[(1)]):(cljs.core.truth_(G__27181_28310)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
var G__27177_28322 = ((G__27179_28308)?(G__27168_28313[(2)]):(cljs.core.truth_(G__27181_28310)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(2),0.0)));
(b[(0)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27169_28314,G__27172_28317,G__27175_28320) : f.call(null,G__27169_28314,G__27172_28317,G__27175_28320)));

(b[(1)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27170_28315,G__27173_28318,G__27176_28321) : f.call(null,G__27170_28315,G__27173_28318,G__27176_28321)));

(b[(2)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27171_28316,G__27174_28319,G__27177_28322) : f.call(null,G__27171_28316,G__27174_28319,G__27177_28322)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__27182_28329 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec3)){
var G__27183_28330 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_((G__27183_28330[(0)]),(G__27182_28329[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_((G__27183_28330[(1)]),(G__27182_28329[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_((G__27183_28330[(2)]),(G__27182_28329[(2)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_(e,(G__27182_28329[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(e,(G__27182_28329[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_(e,(G__27182_28329[(2)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(0),0.0),(G__27182_28329[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(1),0.0),(G__27182_28329[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(2),0.0),(G__27182_28329[(2)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__27196_28331 = (e1 instanceof thi.ng.geom.vector.Vec3);
var G__27197_28332 = (e2 instanceof thi.ng.geom.vector.Vec3);
var G__27198_28333 = (((!(G__27196_28331)))?typeof e1 === 'number':null);
var G__27199_28334 = (((!(G__27197_28332)))?typeof e2 === 'number':null);
var G__27184_28335 = self__.buf;
var G__27185_28336 = ((G__27196_28331)?e1.buf:null);
var G__27186_28337 = ((G__27197_28332)?e2.buf:null);
var G__27187_28338 = (G__27184_28335[(0)]);
var G__27188_28339 = (G__27184_28335[(1)]);
var G__27189_28340 = (G__27184_28335[(2)]);
var G__27190_28341 = ((G__27196_28331)?(G__27185_28336[(0)]):(cljs.core.truth_(G__27198_28333)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(0),0.0)));
var G__27191_28342 = ((G__27196_28331)?(G__27185_28336[(1)]):(cljs.core.truth_(G__27198_28333)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(1),0.0)));
var G__27192_28343 = ((G__27196_28331)?(G__27185_28336[(2)]):(cljs.core.truth_(G__27198_28333)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(2),0.0)));
var G__27193_28344 = ((G__27197_28332)?(G__27186_28337[(0)]):(cljs.core.truth_(G__27199_28334)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(0),0.0)));
var G__27194_28345 = ((G__27197_28332)?(G__27186_28337[(1)]):(cljs.core.truth_(G__27199_28334)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(1),0.0)));
var G__27195_28346 = ((G__27197_28332)?(G__27186_28337[(2)]):(cljs.core.truth_(G__27199_28334)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(2),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_(G__27190_28341,G__27193_28344,G__27187_28338));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_(G__27191_28342,G__27194_28345,G__27188_28339));

(b[(2)] = thi.ng.math.core.smoothstep_STAR_(G__27192_28343,G__27195_28346,G__27189_28340));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k <= (2))));
} else {
if(cljs.core.truth_((thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k)))){
return true;
} else {
return false;
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k >= (0))) && ((k <= (2))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.vector.Vec3((function (){var G__27200 = self__.buf;
var G__27201 = (new Float32Array(self__.buf));
var G__27202 = new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null);
var G__27203 = k;
var G__27204 = v;
return (thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__27200,G__27201,G__27202,G__27203,G__27204) : thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,G__27200,G__27201,G__27202,G__27203,G__27204));
})(),null,self__._meta));
}
} else {
return null;
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26521__auto__ = (new Float32Array((3)));
var G__27205_28358 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27206_28359 = v.buf;
(dest__26521__auto__[(0)] = (function (){var a__25949__auto__ = (G__27205_28358[(0)]);
var b__25950__auto__ = (G__27206_28359[(0)]);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26521__auto__[(1)] = (function (){var a__25949__auto__ = (G__27205_28358[(1)]);
var b__25950__auto__ = (G__27206_28359[(1)]);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26521__auto__[(2)] = (function (){var a__25949__auto__ = (G__27205_28358[(2)]);
var b__25950__auto__ = (G__27206_28359[(2)]);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__26521__auto__[(0)] = (function (){var a__25949__auto__ = (G__27205_28358[(0)]);
var b__25950__auto__ = v;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26521__auto__[(1)] = (function (){var a__25949__auto__ = (G__27205_28358[(1)]);
var b__25950__auto__ = v;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26521__auto__[(2)] = (function (){var a__25949__auto__ = (G__27205_28358[(2)]);
var b__25950__auto__ = v;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());
} else {
(dest__26521__auto__[(0)] = (function (){var a__25949__auto__ = (G__27205_28358[(0)]);
var b__25950__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26521__auto__[(1)] = (function (){var a__25949__auto__ = (G__27205_28358[(1)]);
var b__25950__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26521__auto__[(2)] = (function (){var a__25949__auto__ = (G__27205_28358[(2)]);
var b__25950__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__26521__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27219_28361 = (v instanceof thi.ng.geom.vector.Vec3);
var G__27220_28362 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__27221_28363 = (((!(G__27219_28361)))?typeof v === 'number':null);
var G__27222_28364 = (((!(G__27220_28362)))?typeof v2 === 'number':null);
var G__27207_28365 = self__.buf;
var G__27208_28366 = ((G__27219_28361)?v.buf:null);
var G__27209_28367 = ((G__27220_28362)?v2.buf:null);
var G__27210_28368 = (G__27207_28365[(0)]);
var G__27211_28369 = (G__27207_28365[(1)]);
var G__27212_28370 = (G__27207_28365[(2)]);
var G__27213_28371 = ((G__27219_28361)?(G__27208_28366[(0)]):(cljs.core.truth_(G__27221_28363)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__27214_28372 = ((G__27219_28361)?(G__27208_28366[(1)]):(cljs.core.truth_(G__27221_28363)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__27215_28373 = ((G__27219_28361)?(G__27208_28366[(2)]):(cljs.core.truth_(G__27221_28363)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__27216_28374 = ((G__27220_28362)?(G__27209_28367[(0)]):(cljs.core.truth_(G__27222_28364)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__27217_28375 = ((G__27220_28362)?(G__27209_28367[(1)]):(cljs.core.truth_(G__27222_28364)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__27218_28376 = ((G__27220_28362)?(G__27209_28367[(2)]):(cljs.core.truth_(G__27222_28364)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__26533__auto__[(0)] = (function (){var a__25949__auto__ = (function (){var a__25949__auto__ = G__27210_28368;
var b__25950__auto__ = G__27213_28371;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})();
var b__25950__auto__ = G__27216_28374;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26533__auto__[(1)] = (function (){var a__25949__auto__ = (function (){var a__25949__auto__ = G__27211_28369;
var b__25950__auto__ = G__27214_28372;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})();
var b__25950__auto__ = G__27217_28375;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

(dest__26533__auto__[(2)] = (function (){var a__25949__auto__ = (function (){var a__25949__auto__ = G__27212_28370;
var b__25950__auto__ = G__27215_28373;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})();
var b__25950__auto__ = G__27218_28376;
if((a__25949__auto__ <= b__25950__auto__)){
return a__25949__auto__;
} else {
return b__25950__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26521__auto__ = (new Float32Array((3)));
var G__27223_28386 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27224_28387 = v.buf;
(dest__26521__auto__[(0)] = (function (){var a__25956__auto__ = (G__27223_28386[(0)]);
var b__25957__auto__ = (G__27224_28387[(0)]);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26521__auto__[(1)] = (function (){var a__25956__auto__ = (G__27223_28386[(1)]);
var b__25957__auto__ = (G__27224_28387[(1)]);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26521__auto__[(2)] = (function (){var a__25956__auto__ = (G__27223_28386[(2)]);
var b__25957__auto__ = (G__27224_28387[(2)]);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__26521__auto__[(0)] = (function (){var a__25956__auto__ = (G__27223_28386[(0)]);
var b__25957__auto__ = v;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26521__auto__[(1)] = (function (){var a__25956__auto__ = (G__27223_28386[(1)]);
var b__25957__auto__ = v;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26521__auto__[(2)] = (function (){var a__25956__auto__ = (G__27223_28386[(2)]);
var b__25957__auto__ = v;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());
} else {
(dest__26521__auto__[(0)] = (function (){var a__25956__auto__ = (G__27223_28386[(0)]);
var b__25957__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26521__auto__[(1)] = (function (){var a__25956__auto__ = (G__27223_28386[(1)]);
var b__25957__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26521__auto__[(2)] = (function (){var a__25956__auto__ = (G__27223_28386[(2)]);
var b__25957__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__26521__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27237_28394 = (v instanceof thi.ng.geom.vector.Vec3);
var G__27238_28395 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__27239_28396 = (((!(G__27237_28394)))?typeof v === 'number':null);
var G__27240_28397 = (((!(G__27238_28395)))?typeof v2 === 'number':null);
var G__27225_28398 = self__.buf;
var G__27226_28399 = ((G__27237_28394)?v.buf:null);
var G__27227_28400 = ((G__27238_28395)?v2.buf:null);
var G__27228_28401 = (G__27225_28398[(0)]);
var G__27229_28402 = (G__27225_28398[(1)]);
var G__27230_28403 = (G__27225_28398[(2)]);
var G__27231_28404 = ((G__27237_28394)?(G__27226_28399[(0)]):(cljs.core.truth_(G__27239_28396)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__27232_28405 = ((G__27237_28394)?(G__27226_28399[(1)]):(cljs.core.truth_(G__27239_28396)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__27233_28406 = ((G__27237_28394)?(G__27226_28399[(2)]):(cljs.core.truth_(G__27239_28396)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__27234_28407 = ((G__27238_28395)?(G__27227_28400[(0)]):(cljs.core.truth_(G__27240_28397)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__27235_28408 = ((G__27238_28395)?(G__27227_28400[(1)]):(cljs.core.truth_(G__27240_28397)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__27236_28409 = ((G__27238_28395)?(G__27227_28400[(2)]):(cljs.core.truth_(G__27240_28397)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__26533__auto__[(0)] = (function (){var a__25956__auto__ = (function (){var a__25956__auto__ = G__27228_28401;
var b__25957__auto__ = G__27231_28404;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})();
var b__25957__auto__ = G__27234_28407;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26533__auto__[(1)] = (function (){var a__25956__auto__ = (function (){var a__25956__auto__ = G__27229_28402;
var b__25957__auto__ = G__27232_28405;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})();
var b__25957__auto__ = G__27235_28408;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

(dest__26533__auto__[(2)] = (function (){var a__25956__auto__ = (function (){var a__25956__auto__ = G__27230_28403;
var b__25957__auto__ = G__27233_28406;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})();
var b__25957__auto__ = G__27236_28409;
if((a__25956__auto__ >= b__25957__auto__)){
return a__25956__auto__;
} else {
return b__25957__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__27241 = self__.buf;
var G__27242 = (G__27241[(0)]);
var G__27243 = (G__27241[(1)]);
var G__27244 = (G__27241[(2)]);
(b[(0)] = G__27242);

(b[(1)] = ((G__27243 * c) - (G__27244 * s)));

(b[(2)] = ((G__27243 * s) + (G__27244 * c)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__27245 = self__.buf;
var G__27246 = (G__27245[(0)]);
var G__27247 = (G__27245[(1)]);
var G__27248 = (G__27245[(2)]);
(b[(0)] = ((G__27246 * c) + (G__27248 * s)));

(b[(1)] = G__27247);

(b[(2)] = ((G__27248 * c) - (G__27246 * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__27249 = self__.buf;
var G__27250 = (G__27249[(0)]);
var G__27251 = (G__27249[(1)]);
var G__27252 = (G__27249[(2)]);
(b[(0)] = ((G__27250 * c) - (G__27251 * s)));

(b[(1)] = ((G__27250 * s) + (G__27251 * c)));

(b[(2)] = G__27252);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__27253 = self__.buf;
var G__27255 = (G__27253[(0)]);
var G__27256 = (G__27253[(1)]);
var G__27257 = (G__27253[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27254 = v.buf;
var G__27258 = (G__27254[(0)]);
var G__27259 = (G__27254[(1)]);
var G__27260 = (G__27254[(2)]);
var ux_SINGLEQUOTE_ = (G__27258 * G__27255);
var uy_SINGLEQUOTE_ = (G__27258 * G__27256);
var uz_SINGLEQUOTE_ = (G__27258 * G__27257);
var vx_SINGLEQUOTE_ = (G__27259 * G__27255);
var vy_SINGLEQUOTE_ = (G__27259 * G__27256);
var vz_SINGLEQUOTE_ = (G__27259 * G__27257);
var wx_SINGLEQUOTE_ = (G__27260 * G__27255);
var wy_SINGLEQUOTE_ = (G__27260 * G__27256);
var wz_SINGLEQUOTE_ = (G__27260 * G__27257);
var vx2 = (G__27258 * G__27258);
var vy2 = (G__27259 * G__27259);
var vz2 = (G__27260 * G__27260);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__27258) + ((((vy2 + vz2) * G__27255) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__27258)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__27259) + ((((vx2 + vz2) * G__27256) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__27259)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__27260) + ((((vx2 + vy2) * G__27257) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__27260)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__27258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__27259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__27260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__27258 * G__27255);
var uy_SINGLEQUOTE_ = (G__27258 * G__27256);
var uz_SINGLEQUOTE_ = (G__27258 * G__27257);
var vx_SINGLEQUOTE_ = (G__27259 * G__27255);
var vy_SINGLEQUOTE_ = (G__27259 * G__27256);
var vz_SINGLEQUOTE_ = (G__27259 * G__27257);
var wx_SINGLEQUOTE_ = (G__27260 * G__27255);
var wy_SINGLEQUOTE_ = (G__27260 * G__27256);
var wz_SINGLEQUOTE_ = (G__27260 * G__27257);
var vx2 = (G__27258 * G__27258);
var vy2 = (G__27259 * G__27259);
var vz2 = (G__27260 * G__27260);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__27258) + ((((vy2 + vz2) * G__27255) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__27258)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__27259) + ((((vx2 + vz2) * G__27256) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__27259)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__27260) + ((((vx2 + vy2) * G__27257) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__27260)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
}));

(thi.ng.geom.vector.Vec3.prototype.call = (function (unused__9235__auto__){
var self__ = this;
var self__ = this;
var G__27261 = (arguments.length - (1));
switch (G__27261) {
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

(thi.ng.geom.vector.Vec3.prototype.apply = (function (self__,args26933){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args26933)));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = ___$1.thi$ng$math$core$IMagnitude$mag$arity$1(null);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = (function (){var G__27262 = ((self__.buf[(2)]) / r);
return Math.asin(G__27262);
})());

(b[(2)] = (function (){var G__27263 = (self__.buf[(1)]);
var G__27264 = (self__.buf[(0)]);
return Math.atan2(G__27263,G__27264);
})());

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare((self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((3) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((3) - c);
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27265 = self__.buf;
var G__27266 = (G__27265[(0)]);
var G__27267 = (G__27265[(1)]);
var G__27268 = (G__27265[(2)]);
var l = (function (){var G__27269 = (((G__27266 * G__27266) + (G__27267 * G__27267)) + (G__27268 * G__27268));
return Math.sqrt(G__27269);
})();
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__27266 / l));

(b[(1)] = (G__27267 / l));

(b[(2)] = (G__27268 / l));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__27270 = self__.buf;
var G__27271 = (G__27270[(0)]);
var G__27272 = (G__27270[(1)]);
var G__27273 = (G__27270[(2)]);
var l = (function (){var G__27274 = (((G__27271 * G__27271) + (G__27272 * G__27272)) + (G__27273 * G__27273));
return Math.sqrt(G__27274);
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__27271 * l__$1));

(b[(1)] = (G__27272 * l__$1));

(b[(2)] = (G__27273 * l__$1));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,___$1.thi$ng$math$core$IMagnitude$mag_squared$arity$1(null));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27275 = self__.buf;
var G__27276 = (G__27275[(0)]);
var G__27277 = (G__27275[(1)]);
var G__27278 = (G__27275[(2)]);
var G__27279 = (((G__27276 * G__27276) + (G__27277 * G__27277)) + (G__27278 * G__27278));
return Math.sqrt(G__27279);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__27280 = self__.buf;
var G__27281 = (G__27280[(0)]);
var G__27282 = (G__27280[(1)]);
var G__27283 = (G__27280[(2)]);
return (((G__27281 * G__27281) + (G__27282 * G__27282)) + (G__27283 * G__27283));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27296_28444 = (a instanceof thi.ng.geom.vector.Vec3);
var G__27297_28445 = (b instanceof thi.ng.geom.vector.Vec3);
var G__27298_28446 = (((!(G__27296_28444)))?typeof a === 'number':null);
var G__27299_28447 = (((!(G__27297_28445)))?typeof b === 'number':null);
var G__27284_28448 = self__.buf;
var G__27285_28449 = ((G__27296_28444)?a.buf:null);
var G__27286_28450 = ((G__27297_28445)?b.buf:null);
var G__27287_28451 = (G__27284_28448[(0)]);
var G__27288_28452 = (G__27284_28448[(1)]);
var G__27289_28453 = (G__27284_28448[(2)]);
var G__27290_28454 = ((G__27296_28444)?(G__27285_28449[(0)]):(cljs.core.truth_(G__27298_28446)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__27291_28455 = ((G__27296_28444)?(G__27285_28449[(1)]):(cljs.core.truth_(G__27298_28446)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__27292_28456 = ((G__27296_28444)?(G__27285_28449[(2)]):(cljs.core.truth_(G__27298_28446)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__27293_28457 = ((G__27297_28445)?(G__27286_28450[(0)]):(cljs.core.truth_(G__27299_28447)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__27294_28458 = ((G__27297_28445)?(G__27286_28450[(1)]):(cljs.core.truth_(G__27299_28447)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__27295_28459 = ((G__27297_28445)?(G__27286_28450[(2)]):(cljs.core.truth_(G__27299_28447)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__26533__auto__[(0)] = ((G__27287_28451 * G__27290_28454) - G__27293_28457));

(dest__26533__auto__[(1)] = ((G__27288_28452 * G__27291_28455) - G__27294_28458));

(dest__26533__auto__[(2)] = ((G__27289_28453 * G__27292_28456) - G__27295_28459));

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26521__auto__ = (new Float32Array((3)));
var G__27300_28469 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27301_28470 = v.buf;
(dest__26521__auto__[(0)] = ((G__27300_28469[(0)]) * (G__27301_28470[(0)])));

(dest__26521__auto__[(1)] = ((G__27300_28469[(1)]) * (G__27301_28470[(1)])));

(dest__26521__auto__[(2)] = ((G__27300_28469[(2)]) * (G__27301_28470[(2)])));
} else {
if(typeof v === 'number'){
(dest__26521__auto__[(0)] = ((G__27300_28469[(0)]) * v));

(dest__26521__auto__[(1)] = ((G__27300_28469[(1)]) * v));

(dest__26521__auto__[(2)] = ((G__27300_28469[(2)]) * v));
} else {
(dest__26521__auto__[(0)] = ((G__27300_28469[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26521__auto__[(1)] = ((G__27300_28469[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__26521__auto__[(2)] = ((G__27300_28469[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__26521__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27314_28476 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__27315_28477 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__27316_28478 = (((!(G__27314_28476)))?typeof v1 === 'number':null);
var G__27317_28479 = (((!(G__27315_28477)))?typeof v2 === 'number':null);
var G__27302_28480 = self__.buf;
var G__27303_28481 = ((G__27314_28476)?v1.buf:null);
var G__27304_28482 = ((G__27315_28477)?v2.buf:null);
var G__27305_28483 = (G__27302_28480[(0)]);
var G__27306_28484 = (G__27302_28480[(1)]);
var G__27307_28485 = (G__27302_28480[(2)]);
var G__27308_28486 = ((G__27314_28476)?(G__27303_28481[(0)]):(cljs.core.truth_(G__27316_28478)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__27309_28487 = ((G__27314_28476)?(G__27303_28481[(1)]):(cljs.core.truth_(G__27316_28478)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__27310_28488 = ((G__27314_28476)?(G__27303_28481[(2)]):(cljs.core.truth_(G__27316_28478)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__27311_28489 = ((G__27315_28477)?(G__27304_28482[(0)]):(cljs.core.truth_(G__27317_28479)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__27312_28490 = ((G__27315_28477)?(G__27304_28482[(1)]):(cljs.core.truth_(G__27317_28479)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__27313_28491 = ((G__27315_28477)?(G__27304_28482[(2)]):(cljs.core.truth_(G__27317_28479)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__26533__auto__[(0)] = ((G__27305_28483 * G__27308_28486) * G__27311_28489));

(dest__26533__auto__[(1)] = ((G__27306_28484 * G__27309_28487) * G__27312_28490));

(dest__26533__auto__[(2)] = ((G__27307_28485 * G__27310_28488) * G__27313_28491));

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__27318 = self__.buf;
var dest__26507__auto__ = (new Float32Array((3)));
(dest__26507__auto__[(0)] = ((G__27318[(0)]) * x));

(dest__26507__auto__[(1)] = ((G__27318[(1)]) * y));

(dest__26507__auto__[(2)] = ((G__27318[(2)]) * z));

return (new thi.ng.geom.vector.Vec3(dest__26507__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__26500__auto__ = (new Float32Array((3)));
var G__27319_28498 = self__.buf;
(dest__26500__auto__[(0)] = (- (G__27319_28498[(0)])));

(dest__26500__auto__[(1)] = (- (G__27319_28498[(1)])));

(dest__26500__auto__[(2)] = (- (G__27319_28498[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__26500__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26521__auto__ = (new Float32Array((3)));
var G__27320_28499 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27321_28500 = v.buf;
(dest__26521__auto__[(0)] = ((G__27320_28499[(0)]) - (G__27321_28500[(0)])));

(dest__26521__auto__[(1)] = ((G__27320_28499[(1)]) - (G__27321_28500[(1)])));

(dest__26521__auto__[(2)] = ((G__27320_28499[(2)]) - (G__27321_28500[(2)])));
} else {
if(typeof v === 'number'){
(dest__26521__auto__[(0)] = ((G__27320_28499[(0)]) - v));

(dest__26521__auto__[(1)] = ((G__27320_28499[(1)]) - v));

(dest__26521__auto__[(2)] = ((G__27320_28499[(2)]) - v));
} else {
(dest__26521__auto__[(0)] = ((G__27320_28499[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26521__auto__[(1)] = ((G__27320_28499[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__26521__auto__[(2)] = ((G__27320_28499[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__26521__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27334_28502 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__27335_28503 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__27336_28504 = (((!(G__27334_28502)))?typeof v1 === 'number':null);
var G__27337_28505 = (((!(G__27335_28503)))?typeof v2 === 'number':null);
var G__27322_28506 = self__.buf;
var G__27323_28507 = ((G__27334_28502)?v1.buf:null);
var G__27324_28508 = ((G__27335_28503)?v2.buf:null);
var G__27325_28509 = (G__27322_28506[(0)]);
var G__27326_28510 = (G__27322_28506[(1)]);
var G__27327_28511 = (G__27322_28506[(2)]);
var G__27328_28512 = ((G__27334_28502)?(G__27323_28507[(0)]):(cljs.core.truth_(G__27336_28504)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__27329_28513 = ((G__27334_28502)?(G__27323_28507[(1)]):(cljs.core.truth_(G__27336_28504)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__27330_28514 = ((G__27334_28502)?(G__27323_28507[(2)]):(cljs.core.truth_(G__27336_28504)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__27331_28515 = ((G__27335_28503)?(G__27324_28508[(0)]):(cljs.core.truth_(G__27337_28505)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__27332_28516 = ((G__27335_28503)?(G__27324_28508[(1)]):(cljs.core.truth_(G__27337_28505)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__27333_28517 = ((G__27335_28503)?(G__27324_28508[(2)]):(cljs.core.truth_(G__27337_28505)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__26533__auto__[(0)] = ((G__27325_28509 - G__27328_28512) - G__27331_28515));

(dest__26533__auto__[(1)] = ((G__27326_28510 - G__27329_28513) - G__27332_28516));

(dest__26533__auto__[(2)] = ((G__27327_28511 - G__27330_28514) - G__27333_28517));

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__27338 = self__.buf;
var dest__26507__auto__ = (new Float32Array((3)));
(dest__26507__auto__[(0)] = ((G__27338[(0)]) - x));

(dest__26507__auto__[(1)] = ((G__27338[(1)]) - y));

(dest__26507__auto__[(2)] = ((G__27338[(2)]) - z));

return (new thi.ng.geom.vector.Vec3(dest__26507__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27351_28523 = (a instanceof thi.ng.geom.vector.Vec3);
var G__27352_28524 = (b instanceof thi.ng.geom.vector.Vec3);
var G__27353_28525 = (((!(G__27351_28523)))?typeof a === 'number':null);
var G__27354_28526 = (((!(G__27352_28524)))?typeof b === 'number':null);
var G__27339_28527 = self__.buf;
var G__27340_28528 = ((G__27351_28523)?a.buf:null);
var G__27341_28529 = ((G__27352_28524)?b.buf:null);
var G__27342_28530 = (G__27339_28527[(0)]);
var G__27343_28531 = (G__27339_28527[(1)]);
var G__27344_28532 = (G__27339_28527[(2)]);
var G__27345_28533 = ((G__27351_28523)?(G__27340_28528[(0)]):(cljs.core.truth_(G__27353_28525)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__27346_28534 = ((G__27351_28523)?(G__27340_28528[(1)]):(cljs.core.truth_(G__27353_28525)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__27347_28535 = ((G__27351_28523)?(G__27340_28528[(2)]):(cljs.core.truth_(G__27353_28525)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__27348_28536 = ((G__27352_28524)?(G__27341_28529[(0)]):(cljs.core.truth_(G__27354_28526)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__27349_28537 = ((G__27352_28524)?(G__27341_28529[(1)]):(cljs.core.truth_(G__27354_28526)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__27350_28538 = ((G__27352_28524)?(G__27341_28529[(2)]):(cljs.core.truth_(G__27354_28526)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__26533__auto__[(0)] = ((G__27342_28530 * G__27345_28533) + G__27348_28536));

(dest__26533__auto__[(1)] = ((G__27343_28531 * G__27346_28534) + G__27349_28537));

(dest__26533__auto__[(2)] = ((G__27344_28532 * G__27347_28535) + G__27350_28538));

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27367_28545 = (a instanceof thi.ng.geom.vector.Vec3);
var G__27368_28546 = (b instanceof thi.ng.geom.vector.Vec3);
var G__27369_28547 = (((!(G__27367_28545)))?typeof a === 'number':null);
var G__27370_28548 = (((!(G__27368_28546)))?typeof b === 'number':null);
var G__27355_28549 = self__.buf;
var G__27356_28550 = ((G__27367_28545)?a.buf:null);
var G__27357_28551 = ((G__27368_28546)?b.buf:null);
var G__27358_28552 = (G__27355_28549[(0)]);
var G__27359_28553 = (G__27355_28549[(1)]);
var G__27360_28554 = (G__27355_28549[(2)]);
var G__27361_28555 = ((G__27367_28545)?(G__27356_28550[(0)]):(cljs.core.truth_(G__27369_28547)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__27362_28556 = ((G__27367_28545)?(G__27356_28550[(1)]):(cljs.core.truth_(G__27369_28547)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__27363_28557 = ((G__27367_28545)?(G__27356_28550[(2)]):(cljs.core.truth_(G__27369_28547)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__27364_28558 = ((G__27368_28546)?(G__27357_28551[(0)]):(cljs.core.truth_(G__27370_28548)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__27365_28559 = ((G__27368_28546)?(G__27357_28551[(1)]):(cljs.core.truth_(G__27370_28548)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__27366_28560 = ((G__27368_28546)?(G__27357_28551[(2)]):(cljs.core.truth_(G__27370_28548)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__26533__auto__[(0)] = ((G__27358_28552 + G__27361_28555) * G__27364_28558));

(dest__26533__auto__[(1)] = ((G__27359_28553 + G__27362_28556) * G__27365_28559));

(dest__26533__auto__[(2)] = ((G__27360_28554 + G__27363_28557) * G__27366_28560));

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__26500__auto__ = (new Float32Array((3)));
var G__27371_28566 = self__.buf;
(dest__26500__auto__[(0)] = ((1) / (G__27371_28566[(0)])));

(dest__26500__auto__[(1)] = ((1) / (G__27371_28566[(1)])));

(dest__26500__auto__[(2)] = ((1) / (G__27371_28566[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__26500__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26521__auto__ = (new Float32Array((3)));
var G__27372_28567 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27373_28568 = v.buf;
(dest__26521__auto__[(0)] = ((G__27372_28567[(0)]) / (G__27373_28568[(0)])));

(dest__26521__auto__[(1)] = ((G__27372_28567[(1)]) / (G__27373_28568[(1)])));

(dest__26521__auto__[(2)] = ((G__27372_28567[(2)]) / (G__27373_28568[(2)])));
} else {
if(typeof v === 'number'){
(dest__26521__auto__[(0)] = ((G__27372_28567[(0)]) / v));

(dest__26521__auto__[(1)] = ((G__27372_28567[(1)]) / v));

(dest__26521__auto__[(2)] = ((G__27372_28567[(2)]) / v));
} else {
(dest__26521__auto__[(0)] = ((G__27372_28567[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26521__auto__[(1)] = ((G__27372_28567[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__26521__auto__[(2)] = ((G__27372_28567[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__26521__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27386_28570 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__27387_28571 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__27388_28572 = (((!(G__27386_28570)))?typeof v1 === 'number':null);
var G__27389_28573 = (((!(G__27387_28571)))?typeof v2 === 'number':null);
var G__27374_28574 = self__.buf;
var G__27375_28575 = ((G__27386_28570)?v1.buf:null);
var G__27376_28576 = ((G__27387_28571)?v2.buf:null);
var G__27377_28577 = (G__27374_28574[(0)]);
var G__27378_28578 = (G__27374_28574[(1)]);
var G__27379_28579 = (G__27374_28574[(2)]);
var G__27380_28580 = ((G__27386_28570)?(G__27375_28575[(0)]):(cljs.core.truth_(G__27388_28572)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__27381_28581 = ((G__27386_28570)?(G__27375_28575[(1)]):(cljs.core.truth_(G__27388_28572)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__27382_28582 = ((G__27386_28570)?(G__27375_28575[(2)]):(cljs.core.truth_(G__27388_28572)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__27383_28583 = ((G__27387_28571)?(G__27376_28576[(0)]):(cljs.core.truth_(G__27389_28573)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__27384_28584 = ((G__27387_28571)?(G__27376_28576[(1)]):(cljs.core.truth_(G__27389_28573)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__27385_28585 = ((G__27387_28571)?(G__27376_28576[(2)]):(cljs.core.truth_(G__27389_28573)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__26533__auto__[(0)] = ((G__27377_28577 / G__27380_28580) / G__27383_28583));

(dest__26533__auto__[(1)] = ((G__27378_28578 / G__27381_28581) / G__27384_28584));

(dest__26533__auto__[(2)] = ((G__27379_28579 / G__27382_28582) / G__27385_28585));

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__27390 = self__.buf;
var dest__26507__auto__ = (new Float32Array((3)));
(dest__26507__auto__[(0)] = ((G__27390[(0)]) / x));

(dest__26507__auto__[(1)] = ((G__27390[(1)]) / y));

(dest__26507__auto__[(2)] = ((G__27390[(2)]) / z));

return (new thi.ng.geom.vector.Vec3(dest__26507__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__26521__auto__ = (new Float32Array((3)));
var G__27391_28591 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__27392_28592 = v.buf;
(dest__26521__auto__[(0)] = ((G__27391_28591[(0)]) + (G__27392_28592[(0)])));

(dest__26521__auto__[(1)] = ((G__27391_28591[(1)]) + (G__27392_28592[(1)])));

(dest__26521__auto__[(2)] = ((G__27391_28591[(2)]) + (G__27392_28592[(2)])));
} else {
if(typeof v === 'number'){
(dest__26521__auto__[(0)] = ((G__27391_28591[(0)]) + v));

(dest__26521__auto__[(1)] = ((G__27391_28591[(1)]) + v));

(dest__26521__auto__[(2)] = ((G__27391_28591[(2)]) + v));
} else {
(dest__26521__auto__[(0)] = ((G__27391_28591[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__26521__auto__[(1)] = ((G__27391_28591[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__26521__auto__[(2)] = ((G__27391_28591[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__26521__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27405_28598 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__27406_28599 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__27407_28600 = (((!(G__27405_28598)))?typeof v1 === 'number':null);
var G__27408_28601 = (((!(G__27406_28599)))?typeof v2 === 'number':null);
var G__27393_28602 = self__.buf;
var G__27394_28603 = ((G__27405_28598)?v1.buf:null);
var G__27395_28604 = ((G__27406_28599)?v2.buf:null);
var G__27396_28605 = (G__27393_28602[(0)]);
var G__27397_28606 = (G__27393_28602[(1)]);
var G__27398_28607 = (G__27393_28602[(2)]);
var G__27399_28608 = ((G__27405_28598)?(G__27394_28603[(0)]):(cljs.core.truth_(G__27407_28600)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__27400_28609 = ((G__27405_28598)?(G__27394_28603[(1)]):(cljs.core.truth_(G__27407_28600)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__27401_28610 = ((G__27405_28598)?(G__27394_28603[(2)]):(cljs.core.truth_(G__27407_28600)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__27402_28611 = ((G__27406_28599)?(G__27395_28604[(0)]):(cljs.core.truth_(G__27408_28601)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__27403_28612 = ((G__27406_28599)?(G__27395_28604[(1)]):(cljs.core.truth_(G__27408_28601)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__27404_28613 = ((G__27406_28599)?(G__27395_28604[(2)]):(cljs.core.truth_(G__27408_28601)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__26533__auto__[(0)] = ((G__27396_28605 + G__27399_28608) + G__27402_28611));

(dest__26533__auto__[(1)] = ((G__27397_28606 + G__27400_28609) + G__27403_28612));

(dest__26533__auto__[(2)] = ((G__27398_28607 + G__27401_28610) + G__27404_28613));

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__27409 = self__.buf;
var dest__26507__auto__ = (new Float32Array((3)));
(dest__26507__auto__[(0)] = ((G__27409[(0)]) + x));

(dest__26507__auto__[(1)] = ((G__27409[(1)]) + y));

(dest__26507__auto__[(2)] = ((G__27409[(2)]) + z));

return (new thi.ng.geom.vector.Vec3(dest__26507__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__26500__auto__ = (new Float32Array((3)));
var G__27410_28620 = self__.buf;
(dest__26500__auto__[(0)] = (function (){var G__27411 = (G__27410_28620[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__27411) : thi.ng.math.core.abs_STAR_.call(null,G__27411));
})());

(dest__26500__auto__[(1)] = (function (){var G__27412 = (G__27410_28620[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__27412) : thi.ng.math.core.abs_STAR_.call(null,G__27412));
})());

(dest__26500__auto__[(2)] = (function (){var G__27413 = (G__27410_28620[(2)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__27413) : thi.ng.math.core.abs_STAR_.call(null,G__27413));
})());

return (new thi.ng.geom.vector.Vec3(dest__26500__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__26533__auto__ = (new Float32Array((3)));
var G__27426_28621 = (a instanceof thi.ng.geom.vector.Vec3);
var G__27427_28622 = (b instanceof thi.ng.geom.vector.Vec3);
var G__27428_28623 = (((!(G__27426_28621)))?typeof a === 'number':null);
var G__27429_28624 = (((!(G__27427_28622)))?typeof b === 'number':null);
var G__27414_28625 = self__.buf;
var G__27415_28626 = ((G__27426_28621)?a.buf:null);
var G__27416_28627 = ((G__27427_28622)?b.buf:null);
var G__27417_28628 = (G__27414_28625[(0)]);
var G__27418_28629 = (G__27414_28625[(1)]);
var G__27419_28630 = (G__27414_28625[(2)]);
var G__27420_28631 = ((G__27426_28621)?(G__27415_28626[(0)]):(cljs.core.truth_(G__27428_28623)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__27421_28632 = ((G__27426_28621)?(G__27415_28626[(1)]):(cljs.core.truth_(G__27428_28623)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__27422_28633 = ((G__27426_28621)?(G__27415_28626[(2)]):(cljs.core.truth_(G__27428_28623)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__27423_28634 = ((G__27427_28622)?(G__27416_28627[(0)]):(cljs.core.truth_(G__27429_28624)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__27424_28635 = ((G__27427_28622)?(G__27416_28627[(1)]):(cljs.core.truth_(G__27429_28624)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__27425_28636 = ((G__27427_28622)?(G__27416_28627[(2)]):(cljs.core.truth_(G__27429_28624)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__26533__auto__[(0)] = ((G__27417_28628 - G__27420_28631) * G__27423_28634));

(dest__26533__auto__[(1)] = ((G__27418_28629 - G__27421_28632) * G__27424_28635));

(dest__26533__auto__[(2)] = ((G__27419_28630 - G__27422_28633) * G__27425_28636));

return (new thi.ng.geom.vector.Vec3(dest__26533__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(thi.ng.geom.vector.Vec3.cljs$lang$type = true);

(thi.ng.geom.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec3");

(thi.ng.geom.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"thi.ng.geom.vector/Vec3");
}));

/**
 * Positional factory function for thi.ng.geom.vector/Vec3.
 */
thi.ng.geom.vector.__GT_Vec3 = (function thi$ng$geom$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.vector.x = (function thi$ng$geom$vector$x(G__27432){
var G__27430 = (((G__27432 instanceof thi.ng.geom.vector.Vec2))?G__27432.buf:G__27432.buf);
return (G__27430[(0)]);
});
thi.ng.geom.vector.xx = (function thi$ng$geom$vector$xx(G__27435){
var G__27433 = (((G__27435 instanceof thi.ng.geom.vector.Vec2))?G__27435.buf:G__27435.buf);
var G__27434 = (new Float32Array(2));
(G__27434[(0)] = (G__27433[(0)]));

(G__27434[(1)] = (G__27433[(0)]));

return (new thi.ng.geom.vector.Vec2(G__27434,null,cljs.core.meta(G__27435)));
});
thi.ng.geom.vector.xxx = (function thi$ng$geom$vector$xxx(G__27438){
var G__27436 = (((G__27438 instanceof thi.ng.geom.vector.Vec2))?G__27438.buf:G__27438.buf);
var G__27437 = (new Float32Array(3));
(G__27437[(0)] = (G__27436[(0)]));

(G__27437[(1)] = (G__27436[(0)]));

(G__27437[(2)] = (G__27436[(0)]));

return (new thi.ng.geom.vector.Vec3(G__27437,null,cljs.core.meta(G__27438)));
});
thi.ng.geom.vector.xxy = (function thi$ng$geom$vector$xxy(G__27441){
var G__27439 = (((G__27441 instanceof thi.ng.geom.vector.Vec2))?G__27441.buf:G__27441.buf);
var G__27440 = (new Float32Array(3));
(G__27440[(0)] = (G__27439[(0)]));

(G__27440[(1)] = (G__27439[(0)]));

(G__27440[(2)] = (G__27439[(1)]));

return (new thi.ng.geom.vector.Vec3(G__27440,null,cljs.core.meta(G__27441)));
});
thi.ng.geom.vector.xxz = (function thi$ng$geom$vector$xxz(G__27444){
var G__27442 = (((G__27444 instanceof thi.ng.geom.vector.Vec2))?G__27444.buf:G__27444.buf);
var G__27443 = (new Float32Array(3));
(G__27443[(0)] = (G__27442[(0)]));

(G__27443[(1)] = (G__27442[(0)]));

(G__27443[(2)] = (G__27442[(2)]));

return (new thi.ng.geom.vector.Vec3(G__27443,null,cljs.core.meta(G__27444)));
});
thi.ng.geom.vector.xy = (function thi$ng$geom$vector$xy(G__27447){
var G__27445 = (((G__27447 instanceof thi.ng.geom.vector.Vec2))?G__27447.buf:G__27447.buf);
var G__27446 = (new Float32Array(2));
(G__27446[(0)] = (G__27445[(0)]));

(G__27446[(1)] = (G__27445[(1)]));

return (new thi.ng.geom.vector.Vec2(G__27446,null,cljs.core.meta(G__27447)));
});
thi.ng.geom.vector.xyx = (function thi$ng$geom$vector$xyx(G__27450){
var G__27448 = (((G__27450 instanceof thi.ng.geom.vector.Vec2))?G__27450.buf:G__27450.buf);
var G__27449 = (new Float32Array(3));
(G__27449[(0)] = (G__27448[(0)]));

(G__27449[(1)] = (G__27448[(1)]));

(G__27449[(2)] = (G__27448[(0)]));

return (new thi.ng.geom.vector.Vec3(G__27449,null,cljs.core.meta(G__27450)));
});
thi.ng.geom.vector.xyy = (function thi$ng$geom$vector$xyy(G__27453){
var G__27451 = (((G__27453 instanceof thi.ng.geom.vector.Vec2))?G__27453.buf:G__27453.buf);
var G__27452 = (new Float32Array(3));
(G__27452[(0)] = (G__27451[(0)]));

(G__27452[(1)] = (G__27451[(1)]));

(G__27452[(2)] = (G__27451[(1)]));

return (new thi.ng.geom.vector.Vec3(G__27452,null,cljs.core.meta(G__27453)));
});
thi.ng.geom.vector.xyz = (function thi$ng$geom$vector$xyz(G__27456){
var G__27454 = (((G__27456 instanceof thi.ng.geom.vector.Vec2))?G__27456.buf:G__27456.buf);
var G__27455 = (new Float32Array(3));
(G__27455[(0)] = (G__27454[(0)]));

(G__27455[(1)] = (G__27454[(1)]));

(G__27455[(2)] = (G__27454[(2)]));

return (new thi.ng.geom.vector.Vec3(G__27455,null,cljs.core.meta(G__27456)));
});
thi.ng.geom.vector.xz = (function thi$ng$geom$vector$xz(G__27459){
var G__27457 = (((G__27459 instanceof thi.ng.geom.vector.Vec2))?G__27459.buf:G__27459.buf);
var G__27458 = (new Float32Array(2));
(G__27458[(0)] = (G__27457[(0)]));

(G__27458[(1)] = (G__27457[(2)]));

return (new thi.ng.geom.vector.Vec2(G__27458,null,cljs.core.meta(G__27459)));
});
thi.ng.geom.vector.xzx = (function thi$ng$geom$vector$xzx(G__27462){
var G__27460 = (((G__27462 instanceof thi.ng.geom.vector.Vec2))?G__27462.buf:G__27462.buf);
var G__27461 = (new Float32Array(3));
(G__27461[(0)] = (G__27460[(0)]));

(G__27461[(1)] = (G__27460[(2)]));

(G__27461[(2)] = (G__27460[(0)]));

return (new thi.ng.geom.vector.Vec3(G__27461,null,cljs.core.meta(G__27462)));
});
thi.ng.geom.vector.xzy = (function thi$ng$geom$vector$xzy(G__27465){
var G__27463 = (((G__27465 instanceof thi.ng.geom.vector.Vec2))?G__27465.buf:G__27465.buf);
var G__27464 = (new Float32Array(3));
(G__27464[(0)] = (G__27463[(0)]));

(G__27464[(1)] = (G__27463[(2)]));

(G__27464[(2)] = (G__27463[(1)]));

return (new thi.ng.geom.vector.Vec3(G__27464,null,cljs.core.meta(G__27465)));
});
thi.ng.geom.vector.xzz = (function thi$ng$geom$vector$xzz(G__27468){
var G__27466 = (((G__27468 instanceof thi.ng.geom.vector.Vec2))?G__27468.buf:G__27468.buf);
var G__27467 = (new Float32Array(3));
(G__27467[(0)] = (G__27466[(0)]));

(G__27467[(1)] = (G__27466[(2)]));

(G__27467[(2)] = (G__27466[(2)]));

return (new thi.ng.geom.vector.Vec3(G__27467,null,cljs.core.meta(G__27468)));
});
thi.ng.geom.vector.y = (function thi$ng$geom$vector$y(G__27471){
var G__27469 = (((G__27471 instanceof thi.ng.geom.vector.Vec2))?G__27471.buf:G__27471.buf);
return (G__27469[(1)]);
});
thi.ng.geom.vector.yx = (function thi$ng$geom$vector$yx(G__27474){
var G__27472 = (((G__27474 instanceof thi.ng.geom.vector.Vec2))?G__27474.buf:G__27474.buf);
var G__27473 = (new Float32Array(2));
(G__27473[(0)] = (G__27472[(1)]));

(G__27473[(1)] = (G__27472[(0)]));

return (new thi.ng.geom.vector.Vec2(G__27473,null,cljs.core.meta(G__27474)));
});
thi.ng.geom.vector.yxx = (function thi$ng$geom$vector$yxx(G__27477){
var G__27475 = (((G__27477 instanceof thi.ng.geom.vector.Vec2))?G__27477.buf:G__27477.buf);
var G__27476 = (new Float32Array(3));
(G__27476[(0)] = (G__27475[(1)]));

(G__27476[(1)] = (G__27475[(0)]));

(G__27476[(2)] = (G__27475[(0)]));

return (new thi.ng.geom.vector.Vec3(G__27476,null,cljs.core.meta(G__27477)));
});
thi.ng.geom.vector.yxy = (function thi$ng$geom$vector$yxy(G__27480){
var G__27478 = (((G__27480 instanceof thi.ng.geom.vector.Vec2))?G__27480.buf:G__27480.buf);
var G__27479 = (new Float32Array(3));
(G__27479[(0)] = (G__27478[(1)]));

(G__27479[(1)] = (G__27478[(0)]));

(G__27479[(2)] = (G__27478[(1)]));

return (new thi.ng.geom.vector.Vec3(G__27479,null,cljs.core.meta(G__27480)));
});
thi.ng.geom.vector.yxz = (function thi$ng$geom$vector$yxz(G__27483){
var G__27481 = (((G__27483 instanceof thi.ng.geom.vector.Vec2))?G__27483.buf:G__27483.buf);
var G__27482 = (new Float32Array(3));
(G__27482[(0)] = (G__27481[(1)]));

(G__27482[(1)] = (G__27481[(0)]));

(G__27482[(2)] = (G__27481[(2)]));

return (new thi.ng.geom.vector.Vec3(G__27482,null,cljs.core.meta(G__27483)));
});
thi.ng.geom.vector.yy = (function thi$ng$geom$vector$yy(G__27486){
var G__27484 = (((G__27486 instanceof thi.ng.geom.vector.Vec2))?G__27486.buf:G__27486.buf);
var G__27485 = (new Float32Array(2));
(G__27485[(0)] = (G__27484[(1)]));

(G__27485[(1)] = (G__27484[(1)]));

return (new thi.ng.geom.vector.Vec2(G__27485,null,cljs.core.meta(G__27486)));
});
thi.ng.geom.vector.yyx = (function thi$ng$geom$vector$yyx(G__27489){
var G__27487 = (((G__27489 instanceof thi.ng.geom.vector.Vec2))?G__27489.buf:G__27489.buf);
var G__27488 = (new Float32Array(3));
(G__27488[(0)] = (G__27487[(1)]));

(G__27488[(1)] = (G__27487[(1)]));

(G__27488[(2)] = (G__27487[(0)]));

return (new thi.ng.geom.vector.Vec3(G__27488,null,cljs.core.meta(G__27489)));
});
thi.ng.geom.vector.yyy = (function thi$ng$geom$vector$yyy(G__27492){
var G__27490 = (((G__27492 instanceof thi.ng.geom.vector.Vec2))?G__27492.buf:G__27492.buf);
var G__27491 = (new Float32Array(3));
(G__27491[(0)] = (G__27490[(1)]));

(G__27491[(1)] = (G__27490[(1)]));

(G__27491[(2)] = (G__27490[(1)]));

return (new thi.ng.geom.vector.Vec3(G__27491,null,cljs.core.meta(G__27492)));
});
thi.ng.geom.vector.yyz = (function thi$ng$geom$vector$yyz(G__27495){
var G__27493 = (((G__27495 instanceof thi.ng.geom.vector.Vec2))?G__27495.buf:G__27495.buf);
var G__27494 = (new Float32Array(3));
(G__27494[(0)] = (G__27493[(1)]));

(G__27494[(1)] = (G__27493[(1)]));

(G__27494[(2)] = (G__27493[(2)]));

return (new thi.ng.geom.vector.Vec3(G__27494,null,cljs.core.meta(G__27495)));
});
thi.ng.geom.vector.yz = (function thi$ng$geom$vector$yz(G__27498){
var G__27496 = (((G__27498 instanceof thi.ng.geom.vector.Vec2))?G__27498.buf:G__27498.buf);
var G__27497 = (new Float32Array(2));
(G__27497[(0)] = (G__27496[(1)]));

(G__27497[(1)] = (G__27496[(2)]));

return (new thi.ng.geom.vector.Vec2(G__27497,null,cljs.core.meta(G__27498)));
});
thi.ng.geom.vector.yzx = (function thi$ng$geom$vector$yzx(G__27501){
var G__27499 = (((G__27501 instanceof thi.ng.geom.vector.Vec2))?G__27501.buf:G__27501.buf);
var G__27500 = (new Float32Array(3));
(G__27500[(0)] = (G__27499[(1)]));

(G__27500[(1)] = (G__27499[(2)]));

(G__27500[(2)] = (G__27499[(0)]));

return (new thi.ng.geom.vector.Vec3(G__27500,null,cljs.core.meta(G__27501)));
});
thi.ng.geom.vector.yzy = (function thi$ng$geom$vector$yzy(G__27504){
var G__27502 = (((G__27504 instanceof thi.ng.geom.vector.Vec2))?G__27504.buf:G__27504.buf);
var G__27503 = (new Float32Array(3));
(G__27503[(0)] = (G__27502[(1)]));

(G__27503[(1)] = (G__27502[(2)]));

(G__27503[(2)] = (G__27502[(1)]));

return (new thi.ng.geom.vector.Vec3(G__27503,null,cljs.core.meta(G__27504)));
});
thi.ng.geom.vector.yzz = (function thi$ng$geom$vector$yzz(G__27507){
var G__27505 = (((G__27507 instanceof thi.ng.geom.vector.Vec2))?G__27507.buf:G__27507.buf);
var G__27506 = (new Float32Array(3));
(G__27506[(0)] = (G__27505[(1)]));

(G__27506[(1)] = (G__27505[(2)]));

(G__27506[(2)] = (G__27505[(2)]));

return (new thi.ng.geom.vector.Vec3(G__27506,null,cljs.core.meta(G__27507)));
});
thi.ng.geom.vector.z = (function thi$ng$geom$vector$z(G__27510){
var G__27508 = (((G__27510 instanceof thi.ng.geom.vector.Vec2))?G__27510.buf:G__27510.buf);
return (G__27508[(2)]);
});
thi.ng.geom.vector.zx = (function thi$ng$geom$vector$zx(G__27513){
var G__27511 = (((G__27513 instanceof thi.ng.geom.vector.Vec2))?G__27513.buf:G__27513.buf);
var G__27512 = (new Float32Array(2));
(G__27512[(0)] = (G__27511[(2)]));

(G__27512[(1)] = (G__27511[(0)]));

return (new thi.ng.geom.vector.Vec2(G__27512,null,cljs.core.meta(G__27513)));
});
thi.ng.geom.vector.zxx = (function thi$ng$geom$vector$zxx(G__27516){
var G__27514 = (((G__27516 instanceof thi.ng.geom.vector.Vec2))?G__27516.buf:G__27516.buf);
var G__27515 = (new Float32Array(3));
(G__27515[(0)] = (G__27514[(2)]));

(G__27515[(1)] = (G__27514[(0)]));

(G__27515[(2)] = (G__27514[(0)]));

return (new thi.ng.geom.vector.Vec3(G__27515,null,cljs.core.meta(G__27516)));
});
thi.ng.geom.vector.zxy = (function thi$ng$geom$vector$zxy(G__27519){
var G__27517 = (((G__27519 instanceof thi.ng.geom.vector.Vec2))?G__27519.buf:G__27519.buf);
var G__27518 = (new Float32Array(3));
(G__27518[(0)] = (G__27517[(2)]));

(G__27518[(1)] = (G__27517[(0)]));

(G__27518[(2)] = (G__27517[(1)]));

return (new thi.ng.geom.vector.Vec3(G__27518,null,cljs.core.meta(G__27519)));
});
thi.ng.geom.vector.zxz = (function thi$ng$geom$vector$zxz(G__27522){
var G__27520 = (((G__27522 instanceof thi.ng.geom.vector.Vec2))?G__27522.buf:G__27522.buf);
var G__27521 = (new Float32Array(3));
(G__27521[(0)] = (G__27520[(2)]));

(G__27521[(1)] = (G__27520[(0)]));

(G__27521[(2)] = (G__27520[(2)]));

return (new thi.ng.geom.vector.Vec3(G__27521,null,cljs.core.meta(G__27522)));
});
thi.ng.geom.vector.zy = (function thi$ng$geom$vector$zy(G__27525){
var G__27523 = (((G__27525 instanceof thi.ng.geom.vector.Vec2))?G__27525.buf:G__27525.buf);
var G__27524 = (new Float32Array(2));
(G__27524[(0)] = (G__27523[(2)]));

(G__27524[(1)] = (G__27523[(1)]));

return (new thi.ng.geom.vector.Vec2(G__27524,null,cljs.core.meta(G__27525)));
});
thi.ng.geom.vector.zyx = (function thi$ng$geom$vector$zyx(G__27528){
var G__27526 = (((G__27528 instanceof thi.ng.geom.vector.Vec2))?G__27528.buf:G__27528.buf);
var G__27527 = (new Float32Array(3));
(G__27527[(0)] = (G__27526[(2)]));

(G__27527[(1)] = (G__27526[(1)]));

(G__27527[(2)] = (G__27526[(0)]));

return (new thi.ng.geom.vector.Vec3(G__27527,null,cljs.core.meta(G__27528)));
});
thi.ng.geom.vector.zyy = (function thi$ng$geom$vector$zyy(G__27531){
var G__27529 = (((G__27531 instanceof thi.ng.geom.vector.Vec2))?G__27531.buf:G__27531.buf);
var G__27530 = (new Float32Array(3));
(G__27530[(0)] = (G__27529[(2)]));

(G__27530[(1)] = (G__27529[(1)]));

(G__27530[(2)] = (G__27529[(1)]));

return (new thi.ng.geom.vector.Vec3(G__27530,null,cljs.core.meta(G__27531)));
});
thi.ng.geom.vector.zyz = (function thi$ng$geom$vector$zyz(G__27534){
var G__27532 = (((G__27534 instanceof thi.ng.geom.vector.Vec2))?G__27534.buf:G__27534.buf);
var G__27533 = (new Float32Array(3));
(G__27533[(0)] = (G__27532[(2)]));

(G__27533[(1)] = (G__27532[(1)]));

(G__27533[(2)] = (G__27532[(2)]));

return (new thi.ng.geom.vector.Vec3(G__27533,null,cljs.core.meta(G__27534)));
});
thi.ng.geom.vector.zz = (function thi$ng$geom$vector$zz(G__27537){
var G__27535 = (((G__27537 instanceof thi.ng.geom.vector.Vec2))?G__27537.buf:G__27537.buf);
var G__27536 = (new Float32Array(2));
(G__27536[(0)] = (G__27535[(2)]));

(G__27536[(1)] = (G__27535[(2)]));

return (new thi.ng.geom.vector.Vec2(G__27536,null,cljs.core.meta(G__27537)));
});
thi.ng.geom.vector.zzx = (function thi$ng$geom$vector$zzx(G__27540){
var G__27538 = (((G__27540 instanceof thi.ng.geom.vector.Vec2))?G__27540.buf:G__27540.buf);
var G__27539 = (new Float32Array(3));
(G__27539[(0)] = (G__27538[(2)]));

(G__27539[(1)] = (G__27538[(2)]));

(G__27539[(2)] = (G__27538[(0)]));

return (new thi.ng.geom.vector.Vec3(G__27539,null,cljs.core.meta(G__27540)));
});
thi.ng.geom.vector.zzy = (function thi$ng$geom$vector$zzy(G__27543){
var G__27541 = (((G__27543 instanceof thi.ng.geom.vector.Vec2))?G__27543.buf:G__27543.buf);
var G__27542 = (new Float32Array(3));
(G__27542[(0)] = (G__27541[(2)]));

(G__27542[(1)] = (G__27541[(2)]));

(G__27542[(2)] = (G__27541[(1)]));

return (new thi.ng.geom.vector.Vec3(G__27542,null,cljs.core.meta(G__27543)));
});
thi.ng.geom.vector.zzz = (function thi$ng$geom$vector$zzz(G__27546){
var G__27544 = (((G__27546 instanceof thi.ng.geom.vector.Vec2))?G__27546.buf:G__27546.buf);
var G__27545 = (new Float32Array(3));
(G__27545[(0)] = (G__27544[(2)]));

(G__27545[(1)] = (G__27544[(2)]));

(G__27545[(2)] = (G__27544[(2)]));

return (new thi.ng.geom.vector.Vec3(G__27545,null,cljs.core.meta(G__27546)));
});
thi.ng.geom.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.vector.yy], null);
thi.ng.geom.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.vector.y,thi.ng.geom.vector.xzx,thi.ng.geom.vector.xyz,thi.ng.geom.vector.zzy,thi.ng.geom.vector.yx,thi.ng.geom.vector.xy,thi.ng.geom.vector.yyz,thi.ng.geom.vector.zxy,thi.ng.geom.vector.xzy,thi.ng.geom.vector.zxz,thi.ng.geom.vector.zx,thi.ng.geom.vector.xx,thi.ng.geom.vector.xxx,thi.ng.geom.vector.zy,thi.ng.geom.vector.zzx,thi.ng.geom.vector.zyx,thi.ng.geom.vector.yzx,thi.ng.geom.vector.z,thi.ng.geom.vector.yyx,thi.ng.geom.vector.xz,thi.ng.geom.vector.zyz,thi.ng.geom.vector.yy,thi.ng.geom.vector.xxz,thi.ng.geom.vector.yzy,thi.ng.geom.vector.yz,thi.ng.geom.vector.yxx,thi.ng.geom.vector.xyy,thi.ng.geom.vector.xxy,thi.ng.geom.vector.zz,thi.ng.geom.vector.zzz,thi.ng.geom.vector.x,thi.ng.geom.vector.xzz,thi.ng.geom.vector.yxz,thi.ng.geom.vector.zxx,thi.ng.geom.vector.yzz,thi.ng.geom.vector.xyx,thi.ng.geom.vector.yxy,thi.ng.geom.vector.yyy,thi.ng.geom.vector.zyy]);
thi.ng.geom.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name(k);
var c = ((n).length);
var temp__5733__auto__ = ((((1) === c))?(function (){var G__27548 = cljs.core.first(n);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__27548) : keymap.call(null,G__27548));
})():false);
if(cljs.core.truth_(temp__5733__auto__)){
var idx = temp__5733__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if((((c <= cljs.core.count(keymap))) && ((((c === cljs.core.count(v))) && ((cljs.core.count(v) === cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,n)))))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__5733__auto____$1 = (function (){var G__27550 = cljs.core.first(n__$1);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__27550) : keymap.call(null,G__27550));
})();
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
(dest[(idx | (0))] = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)));

var G__28681 = (i + (1));
var G__28682 = cljs.core.next(n__$1);
i = G__28681;
n__$1 = G__28682;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});
thi.ng.geom.vector.vec2_reduce_STAR_ = (function thi$ng$geom$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__28684 = null;
var G__28684__1 = (function (a){
return a;
});
var G__28684__2 = (function (a,b){
(a[(0)] = (function (){var G__27551 = (a[(0)]);
var G__27552 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__27551,G__27552) : op.call(null,G__27551,G__27552));
})());

(a[(1)] = (function (){var G__27553 = (a[(1)]);
var G__27554 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__27553,G__27554) : op.call(null,G__27553,G__27554));
})());

return a;
});
G__28684 = function(a,b){
switch(arguments.length){
case 1:
return G__28684__1.call(this,a);
case 2:
return G__28684__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28684.cljs$core$IFn$_invoke$arity$1 = G__28684__1;
G__28684.cljs$core$IFn$_invoke$arity$2 = G__28684__2;
return G__28684;
})()
,acc,xs);
});
thi.ng.geom.vector.vec3_reduce_STAR_ = (function thi$ng$geom$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__28690 = null;
var G__28690__1 = (function (a){
return a;
});
var G__28690__2 = (function (a,b){
(a[(0)] = (function (){var G__27555 = (a[(0)]);
var G__27556 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__27555,G__27556) : op.call(null,G__27555,G__27556));
})());

(a[(1)] = (function (){var G__27557 = (a[(1)]);
var G__27558 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__27557,G__27558) : op.call(null,G__27557,G__27558));
})());

(a[(2)] = (function (){var G__27559 = (a[(2)]);
var G__27560 = (b[(2)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__27559,G__27560) : op.call(null,G__27559,G__27560));
})());

return a;
});
G__28690 = function(a,b){
switch(arguments.length){
case 1:
return G__28690__1.call(this,a);
case 2:
return G__28690__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28690.cljs$core$IFn$_invoke$arity$1 = G__28690__1;
G__28690.cljs$core$IFn$_invoke$arity$2 = G__28690__2;
return G__28690;
})()
,acc,xs);
});
thi.ng.geom.vector.V2 = (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.vector.V3 = (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.vector.vec2 = (function thi$ng$geom$vector$vec2(var_args){
var G__27562 = arguments.length;
switch (G__27562) {
case 0:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V2;
}));

(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

}
}
}
}
}));

(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,null));
}));

(thi.ng.geom.vector.vec2.cljs$lang$maxFixedArity = 2);

thi.ng.geom.vector.vec3 = (function thi$ng$geom$vector$vec3(var_args){
var G__27564 = arguments.length;
switch (G__27564) {
case 0:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V3;
}));

(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"z","z",-789527183),0.0));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}
}));

(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}));

(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,null));
}));

(thi.ng.geom.vector.vec3.cljs$lang$maxFixedArity = 3);

thi.ng.geom.vector.vec2_with_meta = (function thi$ng$geom$vector$vec2_with_meta(var_args){
var G__27566 = arguments.length;
switch (G__27566) {
case 2:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec2)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

}
}
}
}
}));

(thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,meta));
}));

(thi.ng.geom.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3);

thi.ng.geom.vector.vec3_with_meta = (function thi$ng$geom$vector$vec3_with_meta(var_args){
var G__27568 = arguments.length;
switch (G__27568) {
case 2:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec3)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"z","z",-789527183),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}
}));

(thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,meta));
}));

(thi.ng.geom.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4);

thi.ng.geom.vector.vec2_QMARK_ = (function thi$ng$geom$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec2);
});
thi.ng.geom.vector.vec3_QMARK_ = (function thi$ng$geom$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec3);
});
thi.ng.geom.vector.V2X = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((1),(0));
thi.ng.geom.vector.V2Y = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(1));
thi.ng.geom.vector.V3X = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((1),(0),(0));
thi.ng.geom.vector.V3Y = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(1),(0));
thi.ng.geom.vector.V3Z = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),(1));
thi.ng.geom.vector.V2INF_ = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.vector.V2INF_PLUS_ = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.V3INF_ = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.vector.V3INF_PLUS_ = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.randvec2 = (function thi$ng$geom$vector$randvec2(var_args){
var G__27570 = arguments.length;
switch (G__27570) {
case 0:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$math$core$INormalize$normalize$arity$1(null);
}));

(thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$math$core$INormalize$normalize$arity$2(null,n);
}));

(thi.ng.geom.vector.randvec2.cljs$lang$maxFixedArity = 1);

thi.ng.geom.vector.randvec3 = (function thi$ng$geom$vector$randvec3(var_args){
var G__27572 = arguments.length;
switch (G__27572) {
case 0:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$math$core$INormalize$normalize$arity$1(null);
}));

(thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$math$core$INormalize$normalize$arity$2(null,n);
}));

(thi.ng.geom.vector.randvec3.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=thi.ng.geom.vector.js.map
