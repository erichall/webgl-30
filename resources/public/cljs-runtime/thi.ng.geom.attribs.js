goog.provide('thi.ng.geom.attribs');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.math.core');
/**
 * Vertex attribute generator using given seq of attribs. The seq
 *   should contain at least the same number of elements as there are
 *   faces to be generated. Each item itself is a vector of attrib
 *   values (in vertex order) to be assigned to each vertex. Returns
 *   generator fn.
 */
thi.ng.geom.attribs.face_attribs = (function thi$ng$geom$attribs$face_attribs(fattribs){
return (function (fid,vid,_,___$1){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fattribs,fid),vid);
});
});
/**
 * Similar to face-attribs fn, but for attributes which are constant
 *   for all vertices of a single face. Takes a seq of attrib values and
 *   returns generator fn.
 */
thi.ng.geom.attribs.const_face_attribs = (function thi$ng$geom$attribs$const_face_attribs(fattribs){
return (function (fid,_,___$1,___$2){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fattribs,fid);
});
});
/**
 * Takes a vector of face vertices, face id, a map of vertex attribute
 *   generator fns and an options arg passed to the attribute generator
 *   fns. Returns 2-elem vector of [verts vert-attribs]. The generator
 *   fns themselves take these 4 args and should return the attribute for
 *   a single vertex: face-id, vertex-id, vertex, opts (a map).
 */
thi.ng.geom.attribs.generate_face_attribs = (function thi$ng$geom$attribs$generate_face_attribs(verts,face_id,attribs,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts,((cljs.core.seq(attribs))?cljs.core.reduce_kv((function (acc,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__29335_SHARP_,p2__29336_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(face_id,p1__29335_SHARP_,p2__29336_SHARP_,opts) : f.call(null,face_id,p1__29335_SHARP_,p2__29336_SHARP_,opts));
}),verts));
}),cljs.core.PersistentArrayMap.EMPTY,attribs):null)], null);
});
/**
 * Higher order helper, returns attribute generator fn for types which
 *   emit pre-computed values as part of their `as-mesh` impl. Takes
 *   attrib key and for each vertex looks up value in opts map (which is
 *   supplied by supporting types, e.g. sphere). If called via 2 args,
 *   the looked up values will also be passed to transformation fn (2nd
 *   arg).
 */
thi.ng.geom.attribs.supplied_attrib = (function thi$ng$geom$attribs$supplied_attrib(var_args){
var G__29351 = arguments.length;
switch (G__29351) {
case 1:
return thi.ng.geom.attribs.supplied_attrib.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.attribs.supplied_attrib.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.attribs.supplied_attrib.cljs$core$IFn$_invoke$arity$1 = (function (attrib){
return (function (_,id,___$1,opts){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,attrib),id);
});
}));

(thi.ng.geom.attribs.supplied_attrib.cljs$core$IFn$_invoke$arity$2 = (function (attrib,tx){
return (function (_,id,___$1,opts){
var G__29357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,attrib),id);
return (tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1(G__29357) : tx.call(null,G__29357));
});
}));

(thi.ng.geom.attribs.supplied_attrib.cljs$lang$maxFixedArity = 2);

thi.ng.geom.attribs.uv_rect_for_size = (function thi$ng$geom$attribs$uv_rect_for_size(var_args){
var G__29363 = arguments.length;
switch (G__29363) {
case 1:
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 6:
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$1 = (function (w){
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$2(w,w);
}));

(thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$6(w,w,0.0,0.0,1.0,1.0);
}));

(thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$6 = (function (w,h,x,y,uw,vh){
var u = (0.5 * (uw / w));
var v = (0.5 * (vh / h));
var iu = (uw - u);
var iv = (vh - v);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29360_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3(p1__29360_SHARP_,x,y);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(u,v),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(iu,v),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(iu,iv),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(u,iv)], null));
}));

(thi.ng.geom.attribs.uv_rect_for_size.cljs$lang$maxFixedArity = 6);

thi.ng.geom.attribs.uv_cube_map_h = (function thi$ng$geom$attribs$uv_cube_map_h(var_args){
var G__29369 = arguments.length;
switch (G__29369) {
case 1:
return thi.ng.geom.attribs.uv_cube_map_h.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.attribs.uv_cube_map_h.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.attribs.uv_cube_map_h.cljs$core$IFn$_invoke$arity$1 = (function (h){
return thi.ng.geom.attribs.uv_cube_map_h.cljs$core$IFn$_invoke$arity$2(h,false);
}));

(thi.ng.geom.attribs.uv_cube_map_h.cljs$core$IFn$_invoke$arity$2 = (function (h,pow2_QMARK_){
var w = (h * (6));
var tw = (cljs.core.truth_(pow2_QMARK_)?thi.ng.math.core.ceil_pow2(w):w);
var fw = ((w / tw) / 6.0);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29367_SHARP_){
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$6(h,h,(p1__29367_SHARP_ * fw),0.0,fw,1.0);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
}));

(thi.ng.geom.attribs.uv_cube_map_h.cljs$lang$maxFixedArity = 2);

thi.ng.geom.attribs.uv_cube_map_v = (function thi$ng$geom$attribs$uv_cube_map_v(var_args){
var G__29379 = arguments.length;
switch (G__29379) {
case 1:
return thi.ng.geom.attribs.uv_cube_map_v.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.attribs.uv_cube_map_v.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.attribs.uv_cube_map_v.cljs$core$IFn$_invoke$arity$1 = (function (h){
return thi.ng.geom.attribs.uv_cube_map_v.cljs$core$IFn$_invoke$arity$2(h,false);
}));

(thi.ng.geom.attribs.uv_cube_map_v.cljs$core$IFn$_invoke$arity$2 = (function (w,pow2_QMARK_){
var h = (w * (6));
var th = (cljs.core.truth_(pow2_QMARK_)?thi.ng.math.core.ceil_pow2(h):h);
var fh = ((h / th) / 6.0);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29375_SHARP_){
return thi.ng.geom.attribs.uv_rect_for_size.cljs$core$IFn$_invoke$arity$6(w,w,0.0,(p1__29375_SHARP_ * fh),1.0,fh);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
}));

(thi.ng.geom.attribs.uv_cube_map_v.cljs$lang$maxFixedArity = 2);

thi.ng.geom.attribs.uv_default_rect = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(1.0,0.0),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(1.0),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(0.0,1.0)], null);
thi.ng.geom.attribs.uv_faces = thi.ng.geom.attribs.face_attribs(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.attribs.uv_default_rect));
/**
 * Generates tubular UV coordinates, using data provided in
 *   options map (:u :v :du :dv keys)
 */
thi.ng.geom.attribs.uv_tube = (function thi$ng$geom$attribs$uv_tube(_,vid,___$1,p__29384){
var map__29385 = p__29384;
var map__29385__$1 = (((((!((map__29385 == null))))?(((((map__29385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29385):map__29385);
var u = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29385__$1,new cljs.core.Keyword(null,"u","u",-1156634785));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29385__$1,new cljs.core.Keyword(null,"v","v",21465059));
var du = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29385__$1,new cljs.core.Keyword(null,"du","du",1000321745));
var dv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29385__$1,new cljs.core.Keyword(null,"dv","dv",781315158));
var G__29388 = (vid | (0));
switch (G__29388) {
case (0):
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(u,v);

break;
case (1):
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((u + du),v);

break;
case (2):
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((u + du),(v + dv));

break;
default:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(u,(v + dv));

}
});
/**
 * Generates UV coordinates for a circle/trianglefan, using data
 *   provided in options map (:theta & :r keys). The first vertex of each
 *   triangle is assumed to be in the center of the circle, the other 2
 *   vertices are located at the circles perimeter.
 */
thi.ng.geom.attribs.uv_flat_disc = (function thi$ng$geom$attribs$uv_flat_disc(_,vid,___$1,p__29391){
var map__29392 = p__29391;
var map__29392__$1 = (((((!((map__29392 == null))))?(((((map__29392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29392):map__29392);
var opts = map__29392__$1;
var theta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29392__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29392__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var G__29394 = (vid | (0));
switch (G__29394) {
case (0):
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(0.5);

break;
case (1):
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(((Math.cos(theta) * r) + 0.5),((Math.sin(theta) * r) + 0.5));

break;
default:
var theta__$1 = (theta + cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"delta","delta",108939957)));
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(((Math.cos(theta__$1) * r) + 0.5),((Math.sin(theta__$1) * r) + 0.5));

}
});
/**
 * HOF UV generator for polygons/polyhedras. Takes polygon resolution
 *   and computes N UV coords, returns generator fn
 */
thi.ng.geom.attribs.uv_polygon_disc = (function thi$ng$geom$attribs$uv_polygon_disc(res){
return thi.ng.geom.attribs.face_attribs(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29395_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(0.5,(p1__29395_SHARP_ * thi.ng.math.core.TWO_PI)).thi$ng$geom$core$IPolar$as_cartesian$arity$1(null),0.5);
}),thi.ng.math.core.norm_range(res))));
});

//# sourceMappingURL=thi.ng.geom.attribs.js.map
