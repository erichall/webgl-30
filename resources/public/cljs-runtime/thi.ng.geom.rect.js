goog.provide('thi.ng.geom.rect');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.aabb');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
thi.ng.geom.rect.rect = (function thi$ng$geom$rect$rect(var_args){
var G__30414 = arguments.length;
switch (G__30414) {
case 0:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(1.0),null,null,null));
}));

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1 = (function (w){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(w),null,null,null));
}));

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
if(cljs.core.coll_QMARK_(p)){
if(cljs.core.coll_QMARK_(q)){
var p__$1 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(p);
var q__$1 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(q);
var vec__30420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1),thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1)], null);
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30420,(0),null);
var q__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30420,(1),null);
return (new thi.ng.geom.types.Rect2(p__$2,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q__$2,p__$2),null,null,null));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(q),null,null,null));
}
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(p,q),null,null,null));
}
}));

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3 = (function (x,y,w){
if(typeof x === 'number'){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(w),null,null,null));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(x),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(y,w),null,null,null));
}
}));

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(w,h),null,null,null));
}));

(thi.ng.geom.rect.rect.cljs$lang$maxFixedArity = 4);

thi.ng.geom.rect.union = (function thi$ng$geom$rect$union(p__30432,p__30433){
var map__30434 = p__30432;
var map__30434__$1 = (((((!((map__30434 == null))))?(((((map__30434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30434):map__30434);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30434__$1,new cljs.core.Keyword(null,"p","p",151049309));
var vec__30435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30434__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30435,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30435,(1),null);
var map__30438 = p__30433;
var map__30438__$1 = (((((!((map__30438 == null))))?(((((map__30438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30438):map__30438);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30438__$1,new cljs.core.Keyword(null,"p","p",151049309));
var vec__30439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30438__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30439,(0),null);
var qh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30439,(1),null);
var vec__30446 = thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2(p,q);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30446,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30446,(1),null);
var p_SINGLEQUOTE_ = vec__30446;
var x2 = (function (){var x__4273__auto__ = ((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((0)) : p.call(null,(0))) + w);
var y__4274__auto__ = ((q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1((0)) : q.call(null,(0))) + qw);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var y2 = (function (){var x__4273__auto__ = ((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((1)) : p.call(null,(1))) + h);
var y__4274__auto__ = ((q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1((1)) : q.call(null,(1))) + qh);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var w__$1 = (x2 - x1);
var h__$1 = (y2 - y1);
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(w__$1,h__$1),null,null,null));
});
thi.ng.geom.rect.left = (function thi$ng$geom$rect$left(r){
return thi.ng.geom.vector.x(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309)));
});
thi.ng.geom.rect.right = (function thi$ng$geom$rect$right(r){
return (thi.ng.geom.vector.x(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309))) + thi.ng.geom.vector.x(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"size","size",1098693007))));
});
thi.ng.geom.rect.bottom = (function thi$ng$geom$rect$bottom(r){
return thi.ng.geom.vector.y(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309)));
});
thi.ng.geom.rect.bottom_left = (function thi$ng$geom$rect$bottom_left(r){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309));
});
thi.ng.geom.rect.top = (function thi$ng$geom$rect$top(r){
return (thi.ng.geom.vector.y(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309))) + thi.ng.geom.vector.y(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"size","size",1098693007))));
});
thi.ng.geom.rect.top_right = (function thi$ng$geom$rect$top_right(r){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"size","size",1098693007)));
});
(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),m);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first(thi.ng.geom.utils.closest_point_on_segments(p,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (_,p__30464){
var map__30465 = p__30464;
var map__30465__$1 = (((((!((map__30465 == null))))?(((((map__30465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30465):map__30465);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30465__$1,new cljs.core.Keyword(null,"num","num",1985240673),(2));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30465__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30465__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var ___$1 = this;
var dx = (function (){var or__4185__auto__ = cols;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return num;
}
})();
var dy = (function (){var or__4185__auto__ = rows;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return num;
}
})();
var rx = cljs.core.butlast(thi.ng.math.core.norm_range(dx));
var ry = cljs.core.butlast(thi.ng.math.core.norm_range(dy));
var s = thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),dx,dy);
var iter__4582__auto__ = (function thi$ng$geom$rect$iter__30467(s__30468){
return (new cljs.core.LazySeq(null,(function (){
var s__30468__$1 = s__30468;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30468__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var y = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__30468__$1,y,xs__6292__auto__,temp__5735__auto__,dx,dy,rx,ry,s,___$1,map__30465,map__30465__$1,num,cols,rows){
return (function thi$ng$geom$rect$iter__30467_$_iter__30469(s__30470){
return (new cljs.core.LazySeq(null,((function (s__30468__$1,y,xs__6292__auto__,temp__5735__auto__,dx,dy,rx,ry,s,___$1,map__30465,map__30465__$1,num,cols,rows){
return (function (){
var s__30470__$1 = s__30470;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30470__$1);
if(temp__5735__auto____$1){
var s__30470__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30470__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30470__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30472 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30471 = (0);
while(true){
if((i__30471 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30471);
var vec__30473 = thi.ng.geom.core.unmap_point(___$1,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30473,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30473,(1),null);
var px__$1 = thi.ng.math.core.roundto(px,thi.ng.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.math.core.roundto(py,thi.ng.math.core._STAR_eps_STAR_);
cljs.core.chunk_append(b__30472,(new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(px__$1,py__$1),s,null,null,null)));

var G__30579 = (i__30471 + (1));
i__30471 = G__30579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30472),thi$ng$geom$rect$iter__30467_$_iter__30469(cljs.core.chunk_rest(s__30470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30472),null);
}
} else {
var x = cljs.core.first(s__30470__$2);
var vec__30476 = thi.ng.geom.core.unmap_point(___$1,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30476,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30476,(1),null);
var px__$1 = thi.ng.math.core.roundto(px,thi.ng.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.math.core.roundto(py,thi.ng.math.core._STAR_eps_STAR_);
return cljs.core.cons((new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(px__$1,py__$1),s,null,null,null)),thi$ng$geom$rect$iter__30467_$_iter__30469(cljs.core.rest(s__30470__$2)));
}
} else {
return null;
}
break;
}
});})(s__30468__$1,y,xs__6292__auto__,temp__5735__auto__,dx,dy,rx,ry,s,___$1,map__30465,map__30465__$1,num,cols,rows))
,null,null));
});})(s__30468__$1,y,xs__6292__auto__,temp__5735__auto__,dx,dy,rx,ry,s,___$1,map__30465,map__30465__$1,num,cols,rows))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(rx));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,thi$ng$geom$rect$iter__30467(cljs.core.rest(s__30468__$1)));
} else {
var G__30582 = cljs.core.rest(s__30468__$1);
s__30468__$1 = G__30582;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ry);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2(t,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2(___$1,thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__30480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (fexpr__30480.cljs$core$IFn$_invoke$arity$1 ? fexpr__30480.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__30480.call(null,(0)));
})()),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__30481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (fexpr__30481.cljs$core$IFn$_invoke$arity$1 ? fexpr__30481.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__30481.call(null,(1)));
})()));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.rotate(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),m);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (_,p__30482){
var map__30483 = p__30482;
var map__30483__$1 = (((((!((map__30483 == null))))?(((((map__30483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30483):map__30483);
var opts = map__30483__$1;
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30483__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30483__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var ___$1 = this;
if((((scale === 1.0)) && ((offset == null)))){
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2((new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),depth),null,null,null)),opts);
} else {
return thi.ng.geom.core.extrude(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),opts);
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1(___$1),opts);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),s),thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s),null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s);
return (new thi.ng.geom.types.Rect2(thi.ng.math.core.madd(s_SINGLEQUOTE_,-0.5,thi.ng.geom.core.centroid(___$1)),s_SINGLEQUOTE_,null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPointMap$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (p__30485,q){
var map__30486 = p__30485;
var map__30486__$1 = (((((!((map__30486 == null))))?(((((map__30486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30486):map__30486);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30486__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30486__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30488 = this;
var map__30488__$1 = (((((!((map__30488 == null))))?(((((map__30488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30488):map__30488);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30488__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30488__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(((thi.ng.geom.vector.x(q) - thi.ng.geom.vector.x(p__$1)) / thi.ng.geom.vector.x(size__$1)),((thi.ng.geom.vector.y(q) - thi.ng.geom.vector.y(p__$1)) / thi.ng.geom.vector.y(size__$1)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.math.core.madd(q,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$math$core$ISetOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$math$core$ISetOps$union$arity$2 = (function (p__30490,p__30491){
var map__30492 = p__30490;
var map__30492__$1 = (((((!((map__30492 == null))))?(((((map__30492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30492):map__30492);
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30492__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30492__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30493 = p__30491;
var map__30493__$1 = (((((!((map__30493 == null))))?(((((map__30493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30493):map__30493);
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30493__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30493__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30496 = this;
var map__30496__$1 = (((((!((map__30496 == null))))?(((((map__30496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30496):map__30496);
var pa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30496__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30496__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var p = thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2(pa__$1,pb);
return (new thi.ng.geom.types.Rect2(p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa__$1,sa__$1),thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,sb)),p),null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$math$core$ISetOps$intersection$arity$2 = (function (_,r){
var ___$1 = this;
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var qa = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309));
var qb = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"size","size",1098693007)));
var p_SINGLEQUOTE_ = thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2(pa,pb);
var q_SINGLEQUOTE_ = thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2(qa,qb);
var s = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_((function (p1__30456_SHARP_){
return (p1__30456_SHARP_ >= (0));
}),s)){
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,s,null,null,null));
} else {
return null;
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face((function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),thi.ng.geom.attribs.generate_face_attribs(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1)),(0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uv","uv",-1197749379),thi.ng.geom.attribs.uv_default_rect], null),opts], 0))));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,p__30503){
var map__30504 = p__30503;
var map__30504__$1 = (((((!((map__30504 == null))))?(((((map__30504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30504):map__30504);
var vec__30505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30504__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30505,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30505,(1),null);
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4174__auto__ = thi.ng.geom.core.contains_point_QMARK_(___$1,p);
if(cljs.core.truth_(and__4174__auto__)){
return thi.ng.geom.core.contains_point_QMARK_(___$1,q);
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301)], null);
} else {
return thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_(p,q,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__30509 = ((cljs.core.map_QMARK_(ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30509,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30509,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_(p,dir,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_(p,dir,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Line2)){
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Rect2)){
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Circle2)){
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1(["can't intersect w/ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));

}
}
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var c = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1((0)) : c.call(null,(0))),(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1)))),c,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0))),(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1((1)) : c.call(null,(1))))], null);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(v),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_((function (){var G__30513 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(v);
var fexpr__30512 = cljs.core.set(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1));
return (fexpr__30512.cljs$core$IFn$_invoke$arity$1 ? fexpr__30512.cljs$core$IFn$_invoke$arity$1(G__30513) : fexpr__30512.call(null,G__30513));
})())){
return (2);
} else {
return (0);
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),t),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,q){
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__30450_SHARP_){
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.closest_point_coeff,q,p1__30450_SHARP_),thi.ng.math.core._STAR_eps_STAR_);
})),cljs.core.min,thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (p__30515){
var map__30516 = p__30515;
var map__30516__$1 = (((((!((map__30516 == null))))?(((((map__30516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30516):map__30516);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30516__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30518 = this;
var map__30518__$1 = (((((!((map__30518 == null))))?(((((map__30518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30518):map__30518);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30518__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.Rect2(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(s__$1,-0.5),s__$1,null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (p__30523,o){
var map__30524 = p__30523;
var map__30524__$1 = (((((!((map__30524 == null))))?(((((map__30524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30524):map__30524);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30524__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30526 = this;
var map__30526__$1 = (((((!((map__30526 == null))))?(((((map__30526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30526):map__30526);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30526__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.Rect2(thi.ng.math.core.madd(s__$1,-0.5,o),s__$1,null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.madd(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__30528,p__30529){
var map__30530 = p__30528;
var map__30530__$1 = (((((!((map__30530 == null))))?(((((map__30530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30530):map__30530);
var vec__30531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30530__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30531,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30531,(1),null);
var vec__30534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30530__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30534,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30534,(1),null);
var vec__30537 = p__30529;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30537,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30537,(1),null);
var map__30541 = this;
var map__30541__$1 = (((((!((map__30541 == null))))?(((((map__30541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30541):map__30541);
var vec__30542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30541__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30542,(0),null);
var py__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30542,(1),null);
var vec__30545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30541__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30545,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30545,(1),null);
var and__4174__auto__ = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,w__$1,(x - px__$1));
if(cljs.core.truth_(and__4174__auto__)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,h__$1,(y - py__$1));
} else {
return and__4174__auto__;
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var c = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var b = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1((0)) : c.call(null,(0))),(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1))));
var d = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0))),(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1((1)) : c.call(null,(1))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null)], null);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundingCircle$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
var c = thi.ng.geom.core.centroid(___$1);
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(c,thi.ng.geom.core.dist(c,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
var vec__30555 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30555,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30555,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30555,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30555,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),null,null,null)),(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null),null,null,null))], null);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__30560){
var map__30561 = p__30560;
var map__30561__$1 = (((((!((map__30561 == null))))?(((((map__30561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30561):map__30561);
var opts = map__30561__$1;
var tess_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30561__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__30457_SHARP_){
var G__30565 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(p1__30457_SHARP_);
return (tess_fn.cljs$core$IFn$_invoke$arity$1 ? tess_fn.cljs$core$IFn$_invoke$arity$1(G__30565) : tess_fn.call(null,G__30565));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__30458_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__30458_SHARP_,null,null,null));
}))),thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,opts));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
var fexpr__30566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (fexpr__30566.cljs$core$IFn$_invoke$arity$1 ? fexpr__30566.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__30566.call(null,(0)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
var fexpr__30567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (fexpr__30567.cljs$core$IFn$_invoke$arity$1 ? fexpr__30567.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__30567.call(null,(1)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPolygonConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1),null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))));
}));

//# sourceMappingURL=thi.ng.geom.rect.js.map
