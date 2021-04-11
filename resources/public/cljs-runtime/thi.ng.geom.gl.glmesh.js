goog.provide('thi.ng.geom.gl.glmesh');
goog.require('cljs.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.gl.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.gl.webgl.constants');
goog.require('thi.ng.typedarrays.core');






/**
* @constructor
 * @implements {thi.ng.geom.core.IFaceAccess}
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {thi.ng.geom.core.IMutableProps}
 * @implements {thi.ng.geom.core.ICenter}
 * @implements {thi.ng.geom.gl.core.IGLConvert}
 * @implements {thi.ng.geom.core.IBounds}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.geom.core.IBoundingSphere}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {thi.ng.geom.core.IGeomContainer}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.gl.glmesh.GLMesh = (function (vertices,fnormals,vnormals,uvs,cols,id,attribs){
this.vertices = vertices;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.uvs = uvs;
this.cols = cols;
this.id = id;
this.attribs = attribs;
});
(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,tx){
var self__ = this;
var ___$1 = this;
var G__31337_31460 = (function (p1__31336_SHARP_){
return thi.ng.geom.core.transform_vector(tx,p1__31336_SHARP_);
});
var G__31338_31461 = self__.vertices;
var G__31339_31462 = (self__.id * (9));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__31337_31460,G__31338_31461,G__31339_31462) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__31337_31460,G__31338_31461,G__31339_31462));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,faces){
var self__ = this;
var ___$1 = this;
if((faces instanceof thi.ng.geom.gl.glmesh.GLMesh)){
return (thi.ng.geom.gl.glmesh.into_glmesh_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.into_glmesh_STAR_.cljs$core$IFn$_invoke$arity$2(___$1,faces) : thi.ng.geom.gl.glmesh.into_glmesh_STAR_.call(null,___$1,faces));
} else {
return thi.ng.geom.utils.into_mesh(___$1,thi.ng.geom.gl.glmesh.add_face_STAR_,faces);
}
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var G__31345_31463 = (function (p1__31333_SHARP_){
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2(p1__31333_SHARP_,s);
});
var G__31346_31464 = self__.vertices;
var G__31347_31465 = (self__.id * (9));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__31345_31463,G__31346_31464,G__31347_31465) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__31345_31463,G__31346_31464,G__31347_31465));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var c_31466 = ___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null);
var G__31355_31467 = (function (p1__31334_SHARP_){
return thi.ng.math.core.madd_BANG_(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2(p1__31334_SHARP_,c_31466),s,c_31466);
});
var G__31356_31468 = self__.vertices;
var G__31357_31469 = (self__.id * (9));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__31355_31467,G__31356_31468,G__31357_31469) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__31355_31467,G__31356_31468,G__31357_31469));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IMutableProps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IMutableProps$get_prop$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),k)){
return self__.id;
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);
}
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),k)){
(self__.id = v);
} else {
thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);
}

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var num = (self__.id * (9));
var acc = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var i = (0);
while(true){
if((i < num)){
var G__31470 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(new thi.ng.geom.vector.Vec3(self__.vertices.slice(i,(i + (3))),null,null)));
var G__31471 = (i + (3));
acc = G__31470;
i = G__31471;
continue;
} else {
return cljs.core.persistent_BANG_(acc);
}
break;
}
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return (thi.ng.geom.gl.glmesh.add_face_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.add_face_STAR_.cljs$core$IFn$_invoke$arity$2(___$1,f) : thi.ng.geom.gl.glmesh.add_face_STAR_.call(null,___$1,f));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
var G__31366_31472 = (function (p1__31335_SHARP_){
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2(p1__31335_SHARP_,t);
});
var G__31367_31473 = self__.vertices;
var G__31368_31474 = (self__.id * (9));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__31366_31472,G__31367_31473,G__31368_31474) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__31366_31472,G__31367_31473,G__31368_31474));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$ICenter$center$arity$2(null,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$ITranslate$translate$arity$2(null,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(o,___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.centroid(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__31373 = ((self__.vertices.length / (9)) | (0));
var G__31374 = self__.attribs;
return (thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2(G__31373,G__31374) : thi.ng.geom.gl.glmesh.gl_mesh.call(null,G__31373,G__31374));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.id = (0));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__31375){
var self__ = this;
var map__31376 = p__31375;
var map__31376__$1 = (((((!((map__31376 == null))))?(((((map__31376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31376):map__31376);
var opts = map__31376__$1;
var attribs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31376__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (){var G__31378 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vertices,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)]);
var G__31378__$1 = (cljs.core.truth_(self__.fnormals)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31378,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.fnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__31378);
var G__31378__$2 = (cljs.core.truth_(self__.vnormals)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31378__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__31378__$1);
var G__31378__$3 = (cljs.core.truth_(self__.uvs)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31378__$2,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"uv","uv",-1197749379)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.uvs,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__31378__$2);
if(cljs.core.truth_(self__.cols)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31378__$3,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.cols,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
} else {
return G__31378__$3;
}
})(),new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),(function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (self__.id * (3));
}
})(),new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles)], null);
}));

(thi.ng.geom.gl.glmesh.GLMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cols","cols",-274269768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
}));

(thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$type = true);

(thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$ctorStr = "thi.ng.geom.gl.glmesh/GLMesh");

(thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"thi.ng.geom.gl.glmesh/GLMesh");
}));

/**
 * Positional factory function for thi.ng.geom.gl.glmesh/GLMesh.
 */
thi.ng.geom.gl.glmesh.__GT_GLMesh = (function thi$ng$geom$gl$glmesh$__GT_GLMesh(vertices,fnormals,vnormals,uvs,cols,id,attribs){
return (new thi.ng.geom.gl.glmesh.GLMesh(vertices,fnormals,vnormals,uvs,cols,id,attribs));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.IFaceAccess}
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {thi.ng.geom.core.IMutableProps}
 * @implements {thi.ng.geom.core.ICenter}
 * @implements {thi.ng.geom.gl.core.IGLConvert}
 * @implements {thi.ng.geom.core.IBounds}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.geom.core.IBoundingSphere}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {thi.ng.geom.core.IGeomContainer}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.gl.glmesh.IndexedGLMesh = (function (vertices,fnormals,vnormals,uvs,cols,indices,attribs,index,id,fid){
this.vertices = vertices;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.uvs = uvs;
this.cols = cols;
this.indices = indices;
this.attribs = attribs;
this.index = index;
this.id = id;
this.fid = fid;
});
(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,tx){
var self__ = this;
var ___$1 = this;
var G__31384_31479 = (function (p1__31383_SHARP_){
return thi.ng.geom.core.transform_vector(tx,p1__31383_SHARP_);
});
var G__31385_31480 = self__.vertices;
var G__31386_31481 = (self__.id * (3));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__31384_31479,G__31385_31480,G__31386_31481) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__31384_31479,G__31385_31480,G__31386_31481));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
if((m instanceof thi.ng.geom.gl.glmesh.IndexedGLMesh)){
return (thi.ng.geom.gl.glmesh.into_iglmesh_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.into_iglmesh_STAR_.cljs$core$IFn$_invoke$arity$2(___$1,m) : thi.ng.geom.gl.glmesh.into_iglmesh_STAR_.call(null,___$1,m));
} else {
return thi.ng.geom.utils.into_mesh(___$1,thi.ng.geom.gl.glmesh.add_face_indexed_STAR_,m);
}
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var G__31389_31482 = (function (p1__31380_SHARP_){
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2(p1__31380_SHARP_,s);
});
var G__31390_31483 = self__.vertices;
var G__31391_31484 = (self__.id * (3));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__31389_31482,G__31390_31483,G__31391_31484) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__31389_31482,G__31390_31483,G__31391_31484));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var c_31485 = ___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null);
var G__31392_31486 = (function (p1__31381_SHARP_){
return thi.ng.math.core.madd_BANG_(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2(p1__31381_SHARP_,c_31485),s,c_31485);
});
var G__31393_31487 = self__.vertices;
var G__31394_31488 = (self__.id * (3));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__31392_31486,G__31393_31487,G__31394_31488) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__31392_31486,G__31393_31487,G__31394_31488));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$get_prop$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__31395 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var G__31395__$1 = (((G__31395 instanceof cljs.core.Keyword))?G__31395.fqn:null);
switch (G__31395__$1) {
case "id":
return self__.id;

break;
case "fid":
return self__.fid;

break;
case "index":
return self__.index;

break;
default:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);

}
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
var G__31396_31490 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var G__31396_31491__$1 = (((G__31396_31490 instanceof cljs.core.Keyword))?G__31396_31490.fqn:null);
switch (G__31396_31491__$1) {
case "id":
(self__.id = v);

break;
case "fid":
(self__.fid = v);

break;
case "index":
(self__.index = v);

break;
default:
thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);

}

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$update_prop_BANG_$arity$3 = (function (_,k,f){
var self__ = this;
var ___$1 = this;
var G__31397_31493 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var G__31397_31494__$1 = (((G__31397_31493 instanceof cljs.core.Keyword))?G__31397_31493.fqn:null);
switch (G__31397_31494__$1) {
case "id":
(self__.id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.id) : f.call(null,self__.id)));

break;
case "fid":
(self__.fid = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.fid) : f.call(null,self__.fid)));

break;
case "index":
(self__.index = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.index) : f.call(null,self__.index)));

break;
default:
thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);

}

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var num = (self__.id * (3));
var acc = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var i = (0);
while(true){
if((i < num)){
var G__31496 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(new thi.ng.geom.vector.Vec3(self__.vertices.slice(i,(i + (3))),null,null)));
var G__31497 = (i + (3));
acc = G__31496;
i = G__31497;
continue;
} else {
return cljs.core.persistent_BANG_(acc);
}
break;
}
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return (thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.cljs$core$IFn$_invoke$arity$2(___$1,f) : thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.call(null,___$1,f));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
var G__31398_31498 = (function (p1__31382_SHARP_){
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2(p1__31382_SHARP_,t);
});
var G__31399_31499 = self__.vertices;
var G__31400_31500 = (self__.id * (3));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__31398_31498,G__31399_31499,G__31400_31500) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__31398_31498,G__31399_31499,G__31400_31500));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$ICenter$center$arity$2(null,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$ITranslate$translate$arity$2(null,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(o,___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.centroid(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__31401 = ((self__.vertices.length / (9)) | (0));
var G__31402 = self__.attribs;
return (thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2(G__31401,G__31402) : thi.ng.geom.gl.glmesh.indexed_gl_mesh.call(null,G__31401,G__31402));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.id = (0));

(self__.fid = (0));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__31403){
var self__ = this;
var map__31404 = p__31403;
var map__31404__$1 = (((((!((map__31404 == null))))?(((((map__31404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31404):map__31404);
var opts = map__31404__$1;
var attribs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31404__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (){var G__31406 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vertices,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)]);
var G__31406__$1 = (cljs.core.truth_(self__.fnormals)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31406,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.fnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__31406);
var G__31406__$2 = (cljs.core.truth_(self__.vnormals)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31406__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__31406__$1);
var G__31406__$3 = (cljs.core.truth_(self__.uvs)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31406__$2,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"uv","uv",-1197749379)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.uvs,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__31406__$2);
if(cljs.core.truth_(self__.cols)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31406__$3,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.cols,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
} else {
return G__31406__$3;
}
})(),new cljs.core.Keyword(null,"indices","indices",-1218138343),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),self__.indices], null),new cljs.core.Keyword(null,"num-items","num-items",-887909266),cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"num-items","num-items",-887909266),self__.fid),new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),self__.id,new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles)], null);
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cols","cols",-274269768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"indices","indices",422393184,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Uint16Array","js/Uint16Array",-221456844,null)], null)),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fid","fid",639980196,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$type = true);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$ctorStr = "thi.ng.geom.gl.glmesh/IndexedGLMesh");

(thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"thi.ng.geom.gl.glmesh/IndexedGLMesh");
}));

/**
 * Positional factory function for thi.ng.geom.gl.glmesh/IndexedGLMesh.
 */
thi.ng.geom.gl.glmesh.__GT_IndexedGLMesh = (function thi$ng$geom$gl$glmesh$__GT_IndexedGLMesh(vertices,fnormals,vnormals,uvs,cols,indices,attribs,index,id,fid){
return (new thi.ng.geom.gl.glmesh.IndexedGLMesh(vertices,fnormals,vnormals,uvs,cols,indices,attribs,index,id,fid));
});

/**
 * Builds a fixed size mesh with given face count & attribs (a set of
 *   #{:fnorm :vnorm :uv :col}). All attributes (incl. vertices) are
 *   stored directly in typed array buffers.
 */
thi.ng.geom.gl.glmesh.gl_mesh = (function thi$ng$geom$gl$glmesh$gl_mesh(var_args){
var G__31408 = arguments.length;
switch (G__31408) {
case 1:
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$1 = (function (numf){
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2(numf,null);
}));

(thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2 = (function (numf,attribs){
return (new thi.ng.geom.gl.glmesh.GLMesh(thi.ng.typedarrays.core.float32((numf * (9))),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408)))?thi.ng.typedarrays.core.float32((numf * (9))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)))?thi.ng.typedarrays.core.float32((numf * (9))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)))?thi.ng.typedarrays.core.float32((numf * (6))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"col","col",-1959363084)))?thi.ng.typedarrays.core.float32((numf * (12))):null),(0),attribs));
}));

(thi.ng.geom.gl.glmesh.gl_mesh.cljs$lang$maxFixedArity = 2);

/**
 * Builds a fixed size, indexed mesh with given face count & optional
 *   attribs (a set of #{:fnorm :vnorm :uv :col}). All attributes (incl.
 *   vertices) are stored directly in typed array buffers. Internally
 *   builds index of unique vertices (position + attribs) and re-uses
 *   indices where possible.
 */
thi.ng.geom.gl.glmesh.indexed_gl_mesh = (function thi$ng$geom$gl$glmesh$indexed_gl_mesh(var_args){
var G__31413 = arguments.length;
switch (G__31413) {
case 1:
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$1 = (function (numf){
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2(numf,null);
}));

(thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2 = (function (numf,attribs){
return (new thi.ng.geom.gl.glmesh.IndexedGLMesh(thi.ng.typedarrays.core.float32((numf * (9))),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408)))?thi.ng.typedarrays.core.float32((numf * (9))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)))?thi.ng.typedarrays.core.float32((numf * (9))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)))?thi.ng.typedarrays.core.float32((numf * (6))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"col","col",-1959363084)))?thi.ng.typedarrays.core.float32((numf * (12))):null),thi.ng.typedarrays.core.uint16((numf * (3))),attribs,cljs.core.PersistentArrayMap.EMPTY,(0),(0)));
}));

(thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$lang$maxFixedArity = 2);

thi.ng.geom.gl.glmesh.add_face_STAR_ = (function thi$ng$geom$gl$glmesh$add_face_STAR_(m,p__31417){
var vec__31418 = p__31417;
var verts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31418,(0),null);
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31418,(1),null);
var f = vec__31418;
if((cljs.core.count(verts) > (3))){
cljs.core.run_BANG_((function (p1__31415_SHARP_){
return (thi.ng.geom.gl.glmesh.add_face_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.add_face_STAR_.cljs$core$IFn$_invoke$arity$2(m,p1__31415_SHARP_) : thi.ng.geom.gl.glmesh.add_face_STAR_.call(null,m,p1__31415_SHARP_));
}),(function (){var fexpr__31421 = thi.ng.geom.utils.tessellate_face(thi.ng.geom.utils.tessellate_with_first);
return (fexpr__31421.cljs$core$IFn$_invoke$arity$1 ? fexpr__31421.cljs$core$IFn$_invoke$arity$1(f) : fexpr__31421.call(null,f));
})());
} else {
var vertices_31503 = m.vertices;
var fnormals_31504 = m.fnormals;
var vnormals_31505 = m.vnormals;
var uvs_31506 = m.uvs;
var cols_31507 = m.cols;
var id_31508 = m.id;
var idv_31509 = (id_31508 * (9));
var iduv_31510 = (id_31508 * (6));
var idcol_31511 = (id_31508 * (12));
vertices_31503.set(cljs.core.first(verts).buf,idv_31509);

vertices_31503.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(1)).buf,(idv_31509 + (3)));

vertices_31503.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(2)).buf,(idv_31509 + (6)));

if(cljs.core.truth_(fnormals_31504)){
var n_31512 = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(verts);
}
})();
var nb_31513 = n_31512.buf;
fnormals_31504.set(nb_31513,idv_31509);

fnormals_31504.set(nb_31513,(idv_31509 + (3)));

fnormals_31504.set(nb_31513,(idv_31509 + (6)));
} else {
}

var temp__5735__auto___31514 = (cljs.core.truth_(vnormals_31505)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)):null);
if(cljs.core.truth_(temp__5735__auto___31514)){
var vn_31515 = temp__5735__auto___31514;
vnormals_31505.set(cljs.core.first(vn_31515).buf,idv_31509);

vnormals_31505.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vn_31515,(1)).buf,(idv_31509 + (3)));

vnormals_31505.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vn_31515,(2)).buf,(idv_31509 + (6)));
} else {
}

var temp__5735__auto___31516 = (cljs.core.truth_(uvs_31506)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)):null);
if(cljs.core.truth_(temp__5735__auto___31516)){
var uv_31517 = temp__5735__auto___31516;
uvs_31506.set(cljs.core.first(uv_31517).buf,iduv_31510);

uvs_31506.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uv_31517,(1)).buf,(iduv_31510 + (2)));

uvs_31506.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uv_31517,(2)).buf,(iduv_31510 + (4)));
} else {
}

var temp__5735__auto___31518 = (cljs.core.truth_(cols_31507)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"col","col",-1959363084)):null);
if(cljs.core.truth_(temp__5735__auto___31518)){
var col_31519 = temp__5735__auto___31518;
thi.ng.dstruct.streams.into_float_buffer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_31519,(2)),cols_31507,(4),thi.ng.dstruct.streams.into_float_buffer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_31519,(1)),cols_31507,(4),thi.ng.dstruct.streams.into_float_buffer(cljs.core.first(col_31519),cols_31507,(4),idcol_31511)));
} else {
}

(m.id = (id_31508 + (1)));
}

return m;
});
thi.ng.geom.gl.glmesh.index_vertex_STAR_ = (function thi$ng$geom$gl$glmesh$index_vertex_STAR_(m,va,vertices,fnormals,vnormals,cols,uvs){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m.thi$ng$geom$core$IMutableProps$get_prop$arity$2(null,new cljs.core.Keyword(null,"index","index",-1531685915)),va);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var index = m.index;
var id = m.id;
var idv = (id * (3));
var vec__31423 = va;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(0),null);
var fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(1),null);
var vn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(3),null);
var uv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31423,(4),null);
vertices.set(v.buf,idv);

if(cljs.core.truth_((cljs.core.truth_(fnormals)?fn:null))){
fnormals.set(fn.buf,idv);
} else {
if(cljs.core.truth_((cljs.core.truth_(vnormals)?vn:null))){
vnormals.set(vn.buf,idv);
} else {
}
}

if(cljs.core.truth_((cljs.core.truth_(cols)?col:null))){
thi.ng.dstruct.streams.into_float_buffer(col,cols,(4),(id * (4)));
} else {
}

if(cljs.core.truth_((cljs.core.truth_(uvs)?uv:null))){
uvs.set(uv.buf,(id * (2)));
} else {
}

(m.index = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,va,id));

(m.id = (id + (1)));

return id;
}
});
thi.ng.geom.gl.glmesh.add_face_indexed_STAR_ = (function thi$ng$geom$gl$glmesh$add_face_indexed_STAR_(m,p__31427){
var vec__31428 = p__31427;
var verts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31428,(0),null);
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31428,(1),null);
var f = vec__31428;
if((cljs.core.count(verts) > (3))){
cljs.core.run_BANG_((function (p1__31426_SHARP_){
return (thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.cljs$core$IFn$_invoke$arity$2(m,p1__31426_SHARP_) : thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.call(null,m,p1__31426_SHARP_));
}),(function (){var fexpr__31431 = thi.ng.geom.utils.tessellate_face(thi.ng.geom.utils.tessellate_with_first);
return (fexpr__31431.cljs$core$IFn$_invoke$arity$1 ? fexpr__31431.cljs$core$IFn$_invoke$arity$1(f) : fexpr__31431.call(null,f));
})());
} else {
var vertices_31520 = m.vertices;
var fnormals_31521 = m.fnormals;
var vnormals_31522 = m.vnormals;
var uvs_31523 = m.uvs;
var cols_31524 = m.cols;
var indices_31525 = m.indices;
var fid_31526 = m.fid;
var map__31432_31527 = attribs;
var map__31432_31528__$1 = (((((!((map__31432_31527 == null))))?(((((map__31432_31527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31432_31527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31432_31527):map__31432_31527);
var vnorm_31529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31432_31528__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302));
var uv_31530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31432_31528__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var col_31531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31432_31528__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var fnorm_31532 = (cljs.core.truth_(fnormals_31521)?(function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(verts);
}
})():null);
(indices_31525[fid_31526] = thi.ng.geom.gl.glmesh.index_vertex_STAR_(m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(0)),fnorm_31532,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vnorm_31529,(0),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(col_31531,(0),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(uv_31530,(0),null)], null),vertices_31520,fnormals_31521,vnormals_31522,cols_31524,uvs_31523));

(indices_31525[(fid_31526 + (1))] = thi.ng.geom.gl.glmesh.index_vertex_STAR_(m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(1)),fnorm_31532,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vnorm_31529,(1),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(col_31531,(1),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(uv_31530,(1),null)], null),vertices_31520,fnormals_31521,vnormals_31522,cols_31524,uvs_31523));

(indices_31525[(fid_31526 + (2))] = thi.ng.geom.gl.glmesh.index_vertex_STAR_(m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(2)),fnorm_31532,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vnorm_31529,(2),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(col_31531,(2),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(uv_31530,(2),null)], null),vertices_31520,fnormals_31521,vnormals_31522,cols_31524,uvs_31523));

(m.fid = (fid_31526 + (3)));
}

return m;
});
thi.ng.geom.gl.glmesh.transform_vertices = (function thi$ng$geom$gl$glmesh$transform_vertices(f,buf,num){
var tv = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1((0));
var tb = tv.buf;
var i = (0);
while(true){
if((i < num)){
tb.set(buf.slice(i,(i + (3))),(0));

buf.set((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(tv) : f.call(null,tv)).buf,i);

var G__31533 = (i + (3));
i = G__31533;
continue;
} else {
return null;
}
break;
}
});
thi.ng.geom.gl.glmesh.into_glmesh_STAR_ = (function thi$ng$geom$gl$glmesh$into_glmesh_STAR_(dest,src){
var map__31434 = src;
var map__31434__$1 = (((((!((map__31434 == null))))?(((((map__31434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31434):map__31434);
var sverts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31434__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var sfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31434__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var svn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31434__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var scol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31434__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var suv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31434__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var sid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31434__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__31435 = dest;
var map__31435__$1 = (((((!((map__31435 == null))))?(((((map__31435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31435):map__31435);
var dverts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var dfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var dvn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var dcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var duv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var did = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sidv = (sid * (9));
var didv = (did * (9));
dverts.set(sverts.slice((0),sidv),didv);

if(cljs.core.truth_((cljs.core.truth_(dfn)?sfn:null))){
dfn.set(sfn.slice((0),sidv),didv);
} else {
}

if(cljs.core.truth_((cljs.core.truth_(dvn)?svn:null))){
dvn.set(svn.slice((0),sidv),didv);
} else {
}

if(cljs.core.truth_((cljs.core.truth_(dcol)?scol:null))){
dcol.set(scol.slice((0),(sid * (12))),(did * (12)));
} else {
}

if(cljs.core.truth_((cljs.core.truth_(duv)?suv:null))){
duv.set(suv.slice((0),(sid * (6))),(did * (6)));
} else {
}

(dest.id = (did + sid));

return dest;
});
thi.ng.geom.gl.glmesh.build_rindex = (function thi$ng$geom$gl$glmesh$build_rindex(dindex,sindex,start){
return cljs.core.reduce_kv((function (p__31446,v,id){
var vec__31447 = p__31446;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31447,(0),null);
var nid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31447,(1),null);
var s = vec__31447;
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dindex,v))){
return s;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(idx,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,v], null)),(nid + (1))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),start], null),sindex);
});
thi.ng.geom.gl.glmesh.merge_index = (function thi$ng$geom$gl$glmesh$merge_index(dindex,rindex){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(dindex,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (kv){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(cljs.core.val(kv)),cljs.core.key(kv)], null);
})),rindex);
});
thi.ng.geom.gl.glmesh.into_iglmesh_STAR_ = (function thi$ng$geom$gl$glmesh$into_iglmesh_STAR_(dest,src){
var map__31453 = src;
var map__31453__$1 = (((((!((map__31453 == null))))?(((((map__31453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31453):map__31453);
var suv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31453__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var sid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31453__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sfid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31453__$1,new cljs.core.Keyword(null,"fid","fid",-1000551331));
var sfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31453__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var sidx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31453__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var svn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31453__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var sindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31453__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var scol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31453__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var sverts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31453__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var map__31454 = dest;
var map__31454__$1 = (((((!((map__31454 == null))))?(((((map__31454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31454):map__31454);
var didx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var dverts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var dfid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"fid","fid",-1000551331));
var dvn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var dindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var dfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var dcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var did = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var duv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31454__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var vec__31455 = thi.ng.geom.gl.glmesh.build_rindex(dindex,sindex,did);
var rindex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31455,(0),null);
var did_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31455,(1),null);
var dindex__$1 = thi.ng.geom.gl.glmesh.merge_index(dindex,cljs.core.persistent_BANG_(rindex));
var sidv = sfid;
var fn_QMARK_ = (cljs.core.truth_(dfn)?sfn:null);
var vn_QMARK_ = (cljs.core.truth_(dvn)?svn:null);
var col_QMARK_ = (cljs.core.truth_(dcol)?scol:null);
var uv_QMARK_ = (cljs.core.truth_(duv)?suv:null);
var i_31534 = (0);
while(true){
if((i_31534 < sidv)){
var temp__5733__auto___31535 = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rindex,(sidx[i_31534])));
if(cljs.core.truth_(temp__5733__auto___31535)){
var nid_31536 = temp__5733__auto___31535;
var sid_31537__$1 = (sidx[i_31534]);
var sidv_31538__$1 = (sid_31537__$1 * (3));
var didv_31539 = (nid_31536 * (3));
var sidcol_31540 = (sid_31537__$1 * (4));
var siduv_31541 = (sid_31537__$1 * (2));
(didx[(dfid + i_31534)] = nid_31536);

dverts.set(sverts.slice(sidv_31538__$1,(sidv_31538__$1 + (3))),didv_31539);

if(cljs.core.truth_(fn_QMARK_)){
dfn.set(sfn.slice(sidv_31538__$1,(sidv_31538__$1 + (3))),didv_31539);
} else {
}

if(cljs.core.truth_(vn_QMARK_)){
dvn.set(svn.slice(sidv_31538__$1,(sidv_31538__$1 + (3))),didv_31539);
} else {
}

if(cljs.core.truth_(col_QMARK_)){
dcol.set(scol.slice(sidcol_31540,(sidcol_31540 + (4))),(nid_31536 * (4)));
} else {
}

if(cljs.core.truth_(uv_QMARK_)){
duv.set(suv.slice(siduv_31541,(siduv_31541 + (2))),(nid_31536 * (2)));
} else {
}
} else {
(didx[(dfid + i_31534)] = (sidx[i_31534]));
}

var G__31542 = (i_31534 + (1));
i_31534 = G__31542;
continue;
} else {
}
break;
}

(dest.index = dindex__$1);

(dest.id = did_SINGLEQUOTE_);

(dest.fid = (dfid + sfid));

return dest;
});

//# sourceMappingURL=thi.ng.geom.gl.glmesh.js.map
