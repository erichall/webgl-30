goog.provide('thi.ng.geom.meshface');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
thi.ng.geom.meshface.xf_face_verts = (function thi$ng$geom$meshface$xf_face_verts(mesh){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__27585_SHARP_){
return cljs.core.first(thi.ng.geom.core.raw(p1__27585_SHARP_,mesh));
}));
});

/**
* @constructor
 * @implements {thi.ng.geom.core.IAttributeAccess}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.geom.core.IRawAccess}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.meshface.MeshFace = (function (vertices,_hash){
this.vertices = vertices;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.vertices;
}));

(thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return self__.vertices;
}));

(thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IAttributeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IAttributeAccess$attribs$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IRawAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.meshface.MeshFace.prototype.thi$ng$geom$core$IRawAccess$raw$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.vertices], null);
}));

(thi.ng.geom.meshface.MeshFace.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.vertices),"]"].join('');
}));

(thi.ng.geom.meshface.MeshFace.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = self__._hash;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (self__._hash = cljs.core.hash(self__.vertices));
}
}));

(thi.ng.geom.meshface.MeshFace.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return cljs.core.compare(self__.vertices,o.vertices);
}));

(thi.ng.geom.meshface.MeshFace.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(thi.ng.geom.meshface.MeshFace.cljs$lang$type = true);

(thi.ng.geom.meshface.MeshFace.cljs$lang$ctorStr = "thi.ng.geom.meshface/MeshFace");

(thi.ng.geom.meshface.MeshFace.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"thi.ng.geom.meshface/MeshFace");
}));

/**
 * Positional factory function for thi.ng.geom.meshface/MeshFace.
 */
thi.ng.geom.meshface.__GT_MeshFace = (function thi$ng$geom$meshface$__GT_MeshFace(vertices,_hash){
return (new thi.ng.geom.meshface.MeshFace(vertices,_hash));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.IAttributeAccess}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.geom.core.IRawAccess}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.meshface.IndexedMeshFace = (function (vertices,attribs,_hash){
this.vertices = vertices;
this.attribs = attribs;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$2 = (function (_,mesh){
var self__ = this;
var ___$1 = this;
var idx = new cljs.core.Keyword(null,"id->v","id->v",1642967604).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(mesh));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27628_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,p1__27628_SHARP_);
}),self__.vertices);
}));

(thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IAttributeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IAttributeAccess$attribs$arity$2 = (function (_,mesh){
var self__ = this;
var ___$1 = this;
var mattr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mesh,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
return cljs.core.reduce_kv((function (acc,k,v){
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mattr,k),new cljs.core.Keyword(null,"id->v","id->v",1642967604));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,((cljs.core.sequential_QMARK_(v))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27629_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,p1__27629_SHARP_);
}),v):cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,v)));
}),cljs.core.PersistentArrayMap.EMPTY,self__.attribs);
}));

(thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IAttributeAccess$attribs$arity$3 = (function (_,mesh,attr){
var self__ = this;
var ___$1 = this;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mesh,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),attr),new cljs.core.Keyword(null,"id->v","id->v",1642967604));
var aval = (self__.attribs.cljs$core$IFn$_invoke$arity$1 ? self__.attribs.cljs$core$IFn$_invoke$arity$1(attr) : self__.attribs.call(null,attr));
if(cljs.core.sequential_QMARK_(aval)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(idx,self__.attribs);
} else {
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(aval) : idx.call(null,aval));
}
}));

(thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IRawAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.meshface.IndexedMeshFace.prototype.thi$ng$geom$core$IRawAccess$raw$arity$2 = (function (_,mesh){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$2(null,mesh),___$1.thi$ng$geom$core$IAttributeAccess$attribs$arity$2(null,mesh)], null);
}));

(thi.ng.geom.meshface.IndexedMeshFace.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.vertices)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.attribs),"]"].join('');
}));

(thi.ng.geom.meshface.IndexedMeshFace.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = self__._hash;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (self__._hash = ((cljs.core.imul(cljs.core.hash(self__.vertices),(31)) + cljs.core.hash(self__.attribs)) | (0)));
}
}));

(thi.ng.geom.meshface.IndexedMeshFace.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
var c = cljs.core.compare(self__.vertices,o.vertices);
if((c === (0))){
return cljs.core.compare(self__.attribs,o.attribs);
} else {
return c;
}
}));

(thi.ng.geom.meshface.IndexedMeshFace.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(thi.ng.geom.meshface.IndexedMeshFace.cljs$lang$type = true);

(thi.ng.geom.meshface.IndexedMeshFace.cljs$lang$ctorStr = "thi.ng.geom.meshface/IndexedMeshFace");

(thi.ng.geom.meshface.IndexedMeshFace.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"thi.ng.geom.meshface/IndexedMeshFace");
}));

/**
 * Positional factory function for thi.ng.geom.meshface/IndexedMeshFace.
 */
thi.ng.geom.meshface.__GT_IndexedMeshFace = (function thi$ng$geom$meshface$__GT_IndexedMeshFace(vertices,attribs,_hash){
return (new thi.ng.geom.meshface.IndexedMeshFace(vertices,attribs,_hash));
});


//# sourceMappingURL=thi.ng.geom.meshface.js.map
