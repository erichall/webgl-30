goog.provide('thi.ng.geom.aabb');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.utils.intersect');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.cuboid');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.types');
/**
 * Creates a new axis-aligned bounding box.
 */
thi.ng.geom.aabb.aabb = (function thi$ng$geom$aabb$aabb(var_args){
var G__30226 = arguments.length;
switch (G__30226) {
case 0:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(0.0),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(1.0),null,null,null));
}));

(thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1 = (function (size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(0.0),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(size),null,null,null));
}));

(thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(o),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(size),null,null,null));
}));

(thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3 = (function (sx,sy,sz){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(0.0),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(sx,sy,sz),null,null,null));
}));

(thi.ng.geom.aabb.aabb.cljs$lang$maxFixedArity = 3);

thi.ng.geom.aabb.aabb_from_minmax = (function thi$ng$geom$aabb$aabb_from_minmax(p,q){
var p__$1 = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(p);
var q__$1 = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(q);
var p__$2 = thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2(p__$1,q__$1);
return (new thi.ng.geom.types.AABB(p__$2,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2(p__$2,q__$1),p__$2),null,null,null));
});
(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),m);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (p__30237){
var map__30238 = p__30237;
var map__30238__$1 = (((((!((map__30238 == null))))?(((((map__30238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30238):map__30238);
var vec__30239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30238__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30239,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30239,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30239,(2),null);
var map__30246 = this;
var map__30246__$1 = (((((!((map__30246 == null))))?(((((map__30246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30246):map__30246);
var vec__30247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30246__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30247,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30247,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30247,(2),null);
return (2.0 * (((w__$1 * h__$1) + (d__$1 * h__$1)) + (w__$1 * d__$1)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (p__30259,q){
var map__30260 = p__30259;
var map__30260__$1 = (((((!((map__30260 == null))))?(((((map__30260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30260):map__30260);
var vec__30261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30260__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30261,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30261,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30261,(2),null);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30260__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30265 = this;
var map__30265__$1 = (((((!((map__30265 == null))))?(((((map__30265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30265):map__30265);
var vec__30266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30265__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30266,(0),null);
var py__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30266,(1),null);
var pz__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30266,(2),null);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30265__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.clamp(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(0)),px__$1,(px__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(0)))),thi.ng.math.core.clamp(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(1)),py__$1,(py__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(1)))),thi.ng.math.core.clamp(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(2)),pz__$1,(pz__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(2)))));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (_,p__30274){
var map__30276 = p__30274;
var map__30276__$1 = (((((!((map__30276 == null))))?(((((map__30276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30276):map__30276);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30276__$1,new cljs.core.Keyword(null,"num","num",1985240673),(1));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30276__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30276__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var slices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30276__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var ___$1 = this;
var sx = (function (){var or__4185__auto__ = cols;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return num;
}
})();
var sy = (function (){var or__4185__auto__ = rows;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return num;
}
})();
var sz = (function (){var or__4185__auto__ = slices;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return num;
}
})();
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
var s = thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4(size,sx,sy,sz);
var iter__4582__auto__ = (function thi$ng$geom$aabb$iter__30282(s__30283){
return (new cljs.core.LazySeq(null,(function (){
var s__30283__$1 = s__30283;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30283__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var z = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__30283__$1,z,xs__6292__auto__,temp__5735__auto__,sx,sy,sz,p,size,s,___$1,map__30276,map__30276__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__30282_$_iter__30284(s__30285){
return (new cljs.core.LazySeq(null,((function (s__30283__$1,z,xs__6292__auto__,temp__5735__auto__,sx,sy,sz,p,size,s,___$1,map__30276,map__30276__$1,num,cols,rows,slices){
return (function (){
var s__30285__$1 = s__30285;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30285__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var y = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__30285__$1,s__30283__$1,y,xs__6292__auto____$1,temp__5735__auto____$1,z,xs__6292__auto__,temp__5735__auto__,sx,sy,sz,p,size,s,___$1,map__30276,map__30276__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__30282_$_iter__30284_$_iter__30286(s__30287){
return (new cljs.core.LazySeq(null,((function (s__30285__$1,s__30283__$1,y,xs__6292__auto____$1,temp__5735__auto____$1,z,xs__6292__auto__,temp__5735__auto__,sx,sy,sz,p,size,s,___$1,map__30276,map__30276__$1,num,cols,rows,slices){
return (function (){
var s__30287__$1 = s__30287;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__30287__$1);
if(temp__5735__auto____$2){
var s__30287__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__30287__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30287__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30289 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30288 = (0);
while(true){
if((i__30288 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30288);
cljs.core.chunk_append(b__30289,(new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z).thi$ng$math$core$IMathOps$madd$arity$3(null,size,p),s,null,null,null)));

var G__30429 = (i__30288 + (1));
i__30288 = G__30429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30289),thi$ng$geom$aabb$iter__30282_$_iter__30284_$_iter__30286(cljs.core.chunk_rest(s__30287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30289),null);
}
} else {
var x = cljs.core.first(s__30287__$2);
return cljs.core.cons((new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z).thi$ng$math$core$IMathOps$madd$arity$3(null,size,p),s,null,null,null)),thi$ng$geom$aabb$iter__30282_$_iter__30284_$_iter__30286(cljs.core.rest(s__30287__$2)));
}
} else {
return null;
}
break;
}
});})(s__30285__$1,s__30283__$1,y,xs__6292__auto____$1,temp__5735__auto____$1,z,xs__6292__auto__,temp__5735__auto__,sx,sy,sz,p,size,s,___$1,map__30276,map__30276__$1,num,cols,rows,slices))
,null,null));
});})(s__30285__$1,s__30283__$1,y,xs__6292__auto____$1,temp__5735__auto____$1,z,xs__6292__auto__,temp__5735__auto__,sx,sy,sz,p,size,s,___$1,map__30276,map__30276__$1,num,cols,rows,slices))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.butlast(thi.ng.math.core.norm_range(sx))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,thi$ng$geom$aabb$iter__30282_$_iter__30284(cljs.core.rest(s__30285__$1)));
} else {
var G__30442 = cljs.core.rest(s__30285__$1);
s__30285__$1 = G__30442;
continue;
}
} else {
return null;
}
break;
}
});})(s__30283__$1,z,xs__6292__auto__,temp__5735__auto__,sx,sy,sz,p,size,s,___$1,map__30276,map__30276__$1,num,cols,rows,slices))
,null,null));
});})(s__30283__$1,z,xs__6292__auto__,temp__5735__auto__,sx,sy,sz,p,size,s,___$1,map__30276,map__30276__$1,num,cols,rows,slices))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.butlast(thi.ng.math.core.norm_range(sy))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,thi$ng$geom$aabb$iter__30282(cljs.core.rest(s__30283__$1)));
} else {
var G__30444 = cljs.core.rest(s__30283__$1);
s__30283__$1 = G__30444;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.butlast(thi.ng.math.core.norm_range(sz)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
var vec__30291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30291,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30291,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30291,(2),null);
var p = vec__30291;
var vec__30294 = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30294,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30294,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30294,(2),null);
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
var vec__30299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30299,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30299,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30299,(2),null);
var p = vec__30299;
var vec__30302 = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30302,(2),null);
var id = (thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((6)) | (0));
if((id < (2))){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((((id === (0)))?x1:x2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
} else {
if((id < (4))){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),id))?y1:y2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
} else {
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),id))?z1:z2));

}
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),s),thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s),null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s);
return (new thi.ng.geom.types.AABB(thi.ng.math.core.madd(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),-0.5,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))),s_SINGLEQUOTE_,null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (p__30307,q){
var map__30308 = p__30307;
var map__30308__$1 = (((((!((map__30308 == null))))?(((((map__30308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30308):map__30308);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30308__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30308__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30310 = this;
var map__30310__$1 = (((((!((map__30310 == null))))?(((((map__30310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30310):map__30310);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30310__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30310__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(0)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0))) / cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(0))),((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(1)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1))) / cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(1))),((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(2)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(2))) / cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(2))));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.math.core.madd(q,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$math$core$ISetOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$math$core$ISetOps$union$arity$2 = (function (_,b){
var ___$1 = this;
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"p","p",151049309));
var p = thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2(pa,pb);
return (new thi.ng.geom.types.AABB(p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"size","size",1098693007)))),p),null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$math$core$ISetOps$intersection$arity$2 = (function (_,b){
var ___$1 = this;
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var qa = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pa,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"p","p",151049309));
var qb = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(pb,cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"size","size",1098693007)));
var p_SINGLEQUOTE_ = thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2(pa,pb);
var q_SINGLEQUOTE_ = thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2(qa,qb);
var s_SINGLEQUOTE_ = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_((function (p1__30234_SHARP_){
return (p1__30234_SHARP_ >= 0.0);
}),s_SINGLEQUOTE_)){
return (new thi.ng.geom.types.AABB(p_SINGLEQUOTE_,s_SINGLEQUOTE_,null,null,null));
} else {
return null;
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
var ext = thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5);
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),ext),thi.ng.math.core.mag(ext));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__30318){
var map__30319 = p__30318;
var map__30319__$1 = (((((!((map__30319 == null))))?(((((map__30319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30319):map__30319);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30319__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30319__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),"nsewfb");
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30319__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var vec__30321 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(7),null);
var vec__30324 = thi.ng.dstruct.core.demunge_flags_seq(flags,"nsewfb");
var north = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30324,(0),null);
var south = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30324,(1),null);
var east = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30324,(2),null);
var west = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30324,(3),null);
var front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30324,(4),null);
var back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30324,(5),null);
return thi.ng.geom.core.into((function (){var or__4185__auto__ = mesh;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(east)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),(0),attribs,null):null),(cljs.core.truth_(west)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),(1),attribs,null):null),(cljs.core.truth_(north)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),(2),attribs,null):null),(cljs.core.truth_(south)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),(3),attribs,null):null),(cljs.core.truth_(front)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),(4),attribs,null):null),(cljs.core.truth_(back)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null),(5),attribs,null):null)], null)], 0)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.AABB)){
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
return thi.ng.xerror.core.type_error_BANG_("AABB",s);

}
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
var vec__30338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30338,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30338,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30338,(2),null);
var a = vec__30338;
var vec__30341 = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30341,(2),null);
var g = vec__30341;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y1,z2),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z2),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z1),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z1),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z2),g,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y2,z1)], null);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__30344 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null)], null);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),t),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p__30348){
var vec__30349 = p__30348;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30349,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30349,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30349,(2),null);
var ___$1 = this;
var vec__30352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30352,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30352,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30352,(2),null);
var p = vec__30352;
var vec__30355 = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(2),null);
var on_plane_QMARK_ = (function (p__30358){
var vec__30359 = p__30358;
var minp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(0),null);
var maxp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(1),null);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(2),null);
var min1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(3),null);
var max1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(4),null);
var min2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(5),null);
var max2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(6),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(7),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(8),null);
var and__4174__auto__ = (function (){var or__4185__auto__ = thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(minp,p__$1,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(maxp,p__$1,thi.ng.math.core._STAR_eps_STAR_);
}
})();
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(min1,max1,c1);
if(cljs.core.truth_(and__4174__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(min2,max2,c2);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
if(cljs.core.truth_(cljs.core.some(on_plane_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2,x,y1,y2,z1,z2,y,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2,y,x1,x2,z1,z2,x,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1,z2,z,x1,x2,y1,y2,x,y], null)], null)))){
return (0);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(x1,x2,x);
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(y1,y2,y);
if(cljs.core.truth_(and__4174__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(z1,z2,z);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (-1);
}
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (p__30363){
var map__30364 = p__30363;
var map__30364__$1 = (((((!((map__30364 == null))))?(((((map__30364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30364):map__30364);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30364__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30366 = this;
var map__30366__$1 = (((((!((map__30366 == null))))?(((((map__30366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30366):map__30366);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30366__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(size__$1,-0.5),size__$1,null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (p__30368,q){
var map__30373 = p__30368;
var map__30373__$1 = (((((!((map__30373 == null))))?(((((map__30373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30373):map__30373);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30373__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30375 = this;
var map__30375__$1 = (((((!((map__30375 == null))))?(((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30375):map__30375);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30375__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.math.core.madd(size__$1,-0.5,q),size__$1,null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.madd(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__30378,q){
var map__30379 = p__30378;
var map__30379__$1 = (((((!((map__30379 == null))))?(((((map__30379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30379):map__30379);
var vec__30380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30379__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30380,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30380,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30380,(2),null);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30379__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30384 = this;
var map__30384__$1 = (((((!((map__30384 == null))))?(((((map__30384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30384):map__30384);
var vec__30385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30384__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30385,(0),null);
var py__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30385,(1),null);
var pz__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30385,(2),null);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30384__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var and__4174__auto__ = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(px__$1,(px__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$1,(0))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(0)));
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(py__$1,(py__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$1,(1))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(1)));
if(cljs.core.truth_(and__4174__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(pz__$1,(pz__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$1,(2))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(2)));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_x(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_y(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_around_axis(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),axis,theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__30394 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (p__30397){
var map__30398 = p__30397;
var map__30398__$1 = (((((!((map__30398 == null))))?(((((map__30398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30398):map__30398);
var vec__30399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30398__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30399,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30399,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30399,(2),null);
var map__30403 = this;
var map__30403__$1 = (((((!((map__30403 == null))))?(((((map__30403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30403):map__30403);
var vec__30404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30403__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30404,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30404,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30404,(2),null);
return ((w__$1 * h__$1) * d__$1);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__30409){
var map__30410 = p__30409;
var map__30410__$1 = (((((!((map__30410 == null))))?(((((map__30410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30410):map__30410);
var opts = map__30410__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30410__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.faces),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(f)),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"slices","slices",-94090930),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null),cljs.core.keys(opts)))?thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),(0));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),(1));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),(2));
}));

//# sourceMappingURL=thi.ng.geom.aabb.js.map
