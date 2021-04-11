goog.provide('thi.ng.geom.cuboid');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.attribs');
goog.require('thi.ng.geom.basicmesh');
goog.require('thi.ng.geom.plane');
goog.require('thi.ng.geom.tetrahedron');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
thi.ng.geom.cuboid.cuboid = (function thi$ng$geom$cuboid$cuboid(var_args){
var G__30059 = arguments.length;
switch (G__30059) {
case 0:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0();

break;
case 8:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 1:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1(1.0);
}));

(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null)),null,null,null));
}));

(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(typeof x === 'number'){
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),x);
} else {
if(cljs.core.map_QMARK_(x)){
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"size","size",1098693007)));
} else {
if(cljs.core.sequential_QMARK_(x)){
if(((8) === cljs.core.count(x))){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,x),null,null,null));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2("Wrong number of points, expected 8 but got",cljs.core.count(x));
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}));

(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
var vec__30061 = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(o);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30061,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30061,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30061,(2),null);
var a = vec__30061;
var vec__30064 = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(a,size);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(2),null);
var g = vec__30064;
var b = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y1,z2);
var c = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z2);
var d = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z1);
var e = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z1);
var f = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z2);
var h = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y2,z1);
return (new thi.ng.geom.types.Cuboid(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null),null,null,null));
}));

(thi.ng.geom.cuboid.cuboid.cljs$lang$maxFixedArity = 8);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30075_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__30075_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__30067_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.tri_area3,p1__30067_SHARP_);
})),cljs.core._PLUS_,thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1(___$1));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,f){
var p_SINGLEQUOTE_ = thi.ng.geom.core.closest_point(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1(f),p);
var d = thi.ng.geom.core.dist_squared(p,p_SINGLEQUOTE_);
if((d < (acc.cljs$core$IFn$_invoke$arity$1 ? acc.cljs$core$IFn$_invoke$arity$1((1)) : acc.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_SINGLEQUOTE_,d], null);
} else {
return acc;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1.0E100], null),thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(___$1)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (p__30082,p__30083){
var map__30084 = p__30082;
var map__30084__$1 = (((((!((map__30084 == null))))?(((((map__30084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30084):map__30084);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30084__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__30085 = p__30083;
var map__30085__$1 = (((((!((map__30085 == null))))?(((((map__30085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30085):map__30085);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30085__$1,new cljs.core.Keyword(null,"num","num",1985240673),(1));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30085__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30085__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var slices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30085__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var map__30088 = this;
var map__30088__$1 = (((((!((map__30088 == null))))?(((((map__30088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30088):map__30088);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30088__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ru = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),thi.ng.math.core.norm_range((function (){var or__4185__auto__ = cols;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return num;
}
})()));
var rv = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),thi.ng.math.core.norm_range((function (){var or__4185__auto__ = rows;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return num;
}
})()));
var rw = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),thi.ng.math.core.norm_range((function (){var or__4185__auto__ = slices;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return num;
}
})()));
var map_p = (function (p){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30068_SHARP_){
return thi.ng.math.core.roundto(p1__30068_SHARP_,thi.ng.math.core._STAR_eps_STAR_);
}),thi.ng.geom.utils.map_trilinear(points__$1,p)));
});
var iter__4582__auto__ = (function thi$ng$geom$cuboid$iter__30090(s__30091){
return (new cljs.core.LazySeq(null,(function (){
var s__30091__$1 = s__30091;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30091__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__30098 = cljs.core.first(xs__6292__auto__);
var w1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30098,(0),null);
var w2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30098,(1),null);
var iterys__4578__auto__ = ((function (s__30091__$1,vec__30098,w1,w2,xs__6292__auto__,temp__5735__auto__,ru,rv,rw,map_p,map__30088,map__30088__$1,points__$1,map__30084,map__30084__$1,points,map__30085,map__30085__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__30090_$_iter__30092(s__30093){
return (new cljs.core.LazySeq(null,((function (s__30091__$1,vec__30098,w1,w2,xs__6292__auto__,temp__5735__auto__,ru,rv,rw,map_p,map__30088,map__30088__$1,points__$1,map__30084,map__30084__$1,points,map__30085,map__30085__$1,num,cols,rows,slices){
return (function (){
var s__30093__$1 = s__30093;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30093__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var vec__30101 = cljs.core.first(xs__6292__auto____$1);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30101,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30101,(1),null);
var iterys__4578__auto__ = ((function (s__30093__$1,s__30091__$1,vec__30101,v1,v2,xs__6292__auto____$1,temp__5735__auto____$1,vec__30098,w1,w2,xs__6292__auto__,temp__5735__auto__,ru,rv,rw,map_p,map__30088,map__30088__$1,points__$1,map__30084,map__30084__$1,points,map__30085,map__30085__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__30090_$_iter__30092_$_iter__30094(s__30095){
return (new cljs.core.LazySeq(null,((function (s__30093__$1,s__30091__$1,vec__30101,v1,v2,xs__6292__auto____$1,temp__5735__auto____$1,vec__30098,w1,w2,xs__6292__auto__,temp__5735__auto__,ru,rv,rw,map_p,map__30088,map__30088__$1,points__$1,map__30084,map__30084__$1,points,map__30085,map__30085__$1,num,cols,rows,slices){
return (function (){
var s__30095__$1 = s__30095;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__30095__$1);
if(temp__5735__auto____$2){
var s__30095__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__30095__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30095__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30097 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30096 = (0);
while(true){
if((i__30096 < size__4581__auto__)){
var vec__30105 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30096);
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30105,(0),null);
var u2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30105,(1),null);
cljs.core.chunk_append(b__30097,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)),null,null,null)));

var G__30232 = (i__30096 + (1));
i__30096 = G__30232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30097),thi$ng$geom$cuboid$iter__30090_$_iter__30092_$_iter__30094(cljs.core.chunk_rest(s__30095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30097),null);
}
} else {
var vec__30108 = cljs.core.first(s__30095__$2);
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(0),null);
var u2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(1),null);
return cljs.core.cons((new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)),null,null,null)),thi$ng$geom$cuboid$iter__30090_$_iter__30092_$_iter__30094(cljs.core.rest(s__30095__$2)));
}
} else {
return null;
}
break;
}
});})(s__30093__$1,s__30091__$1,vec__30101,v1,v2,xs__6292__auto____$1,temp__5735__auto____$1,vec__30098,w1,w2,xs__6292__auto__,temp__5735__auto__,ru,rv,rw,map_p,map__30088,map__30088__$1,points__$1,map__30084,map__30084__$1,points,map__30085,map__30085__$1,num,cols,rows,slices))
,null,null));
});})(s__30093__$1,s__30091__$1,vec__30101,v1,v2,xs__6292__auto____$1,temp__5735__auto____$1,vec__30098,w1,w2,xs__6292__auto__,temp__5735__auto__,ru,rv,rw,map_p,map__30088,map__30088__$1,points__$1,map__30084,map__30084__$1,points,map__30085,map__30085__$1,num,cols,rows,slices))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(ru));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,thi$ng$geom$cuboid$iter__30090_$_iter__30092(cljs.core.rest(s__30093__$1)));
} else {
var G__30235 = cljs.core.rest(s__30093__$1);
s__30093__$1 = G__30235;
continue;
}
} else {
return null;
}
break;
}
});})(s__30091__$1,vec__30098,w1,w2,xs__6292__auto__,temp__5735__auto__,ru,rv,rw,map_p,map__30088,map__30088__$1,points__$1,map__30084,map__30084__$1,points,map__30085,map__30085__$1,num,cols,rows,slices))
,null,null));
});})(s__30091__$1,vec__30098,w1,w2,xs__6292__auto__,temp__5735__auto__,ru,rv,rw,map_p,map__30088,map__30088__$1,points__$1,map__30084,map__30084__$1,points,map__30085,map__30085__$1,num,cols,rows,slices))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(rv));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,thi$ng$geom$cuboid$iter__30090(cljs.core.rest(s__30091__$1)));
} else {
var G__30236 = cljs.core.rest(s__30091__$1);
s__30091__$1 = G__30236;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(rw);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (p__30111){
var map__30112 = p__30111;
var map__30112__$1 = (((((!((map__30112 == null))))?(((((map__30112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30112):map__30112);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30112__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30112__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30122 = this;
var map__30122__$1 = (((((!((map__30122 == null))))?(((((map__30122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30122):map__30122);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30122__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30122__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__30127 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30127,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30127,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30127,(2),null);
var vec__30130 = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30130,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30130,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30130,(2),null);
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__30133){
var map__30134 = p__30133;
var map__30134__$1 = (((((!((map__30134 == null))))?(((((map__30134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30134):map__30134);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30134__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30134__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__30137 = this;
var map__30137__$1 = (((((!((map__30137 == null))))?(((((map__30137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30137):map__30137);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30137__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30137__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__30142 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30142,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30142,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30142,(2),null);
var vec__30145 = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30145,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30145,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30145,(2),null);
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

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(___$1,theta);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30073_SHARP_){
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(p1__30073_SHARP_,s);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IPointMap$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IPointMap$unmap_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.geom.utils.map_trilinear(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),p);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__30165){
var map__30166 = p__30165;
var map__30166__$1 = (((((!((map__30166 == null))))?(((((map__30166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30166):map__30166);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30166__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30166__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),"nsewfb");
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30166__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var vec__30172 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(7),null);
var vec__30175 = thi.ng.dstruct.core.demunge_flags_seq(flags,"nsewfb");
var north = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(0),null);
var south = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(1),null);
var east = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(2),null);
var west = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(3),null);
var front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(4),null);
var back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(5),null);
return thi.ng.geom.core.into((function (){var or__4185__auto__ = mesh;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(east)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),(0),attribs,null):null),(cljs.core.truth_(west)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),(1),attribs,null):null),(cljs.core.truth_(north)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),(2),attribs,null):null),(cljs.core.truth_(south)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),(3),attribs,null):null),(cljs.core.truth_(front)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),(4),attribs,null):null),(cljs.core.truth_(back)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null),(5),attribs,null):null)], null)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__30190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30190,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null)], null);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30074_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__30074_SHARP_,t);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return (- cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (c,f){
var c_SINGLEQUOTE_ = thi.ng.geom.core.classify_point(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1(f),p);
if((c_SINGLEQUOTE_ > (0))){
return cljs.core.reduced(c_SINGLEQUOTE_);
} else {
var x__4273__auto__ = c;
var y__4274__auto__ = c_SINGLEQUOTE_;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
}
}),-1.0,thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(___$1)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(o),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.geom.core.classify_point(___$1,p) >= (0));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30069_SHARP_){
return thi.ng.geom.core.rotate_x(p1__30069_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30070_SHARP_){
return thi.ng.geom.core.rotate_y(p1__30070_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30071_SHARP_){
return thi.ng.geom.core.rotate_z(p1__30071_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30072_SHARP_){
return thi.ng.geom.core.rotate_around_axis(p1__30072_SHARP_,axis,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__30201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30201,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
var vec__30204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30204,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30204,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30204,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30204,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30204,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30204,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30204,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30204,(7),null);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__30076_SHARP_){
var G__30207 = thi.ng.geom.core.volume(thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1(p1__30076_SHARP_));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__30207) : thi.ng.math.core.abs_STAR_.call(null,G__30207));
})),cljs.core._PLUS_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,d,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,e,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,d,e,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f,g,e], null)], null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__30208){
var map__30209 = p__30208;
var map__30209__$1 = (((((!((map__30209 == null))))?(((((map__30209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30209):map__30209);
var opts = map__30209__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30209__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.faces),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(f)),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"slices","slices",-94090930),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null),cljs.core.keys(opts)))?thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2(___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

//# sourceMappingURL=thi.ng.geom.cuboid.js.map
