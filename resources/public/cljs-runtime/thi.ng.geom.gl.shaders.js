goog.provide('thi.ng.geom.gl.shaders');
goog.require('cljs.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.color.core');
goog.require('thi.ng.xerror.core');
goog.require('clojure.string');
goog.require('thi.ng.geom.gl.webgl.constants');
goog.require('thi.ng.geom.gl.utils');
goog.require('thi.ng.glsl.core');
goog.require('thi.ng.typedarrays.core');
thi.ng.geom.gl.shaders.bool__GT_int = (function thi$ng$geom$gl$shaders$bool__GT_int(x){
if(cljs.core.truth_(x)){
return (1);
} else {
return (0);
}
});
thi.ng.geom.gl.shaders.bool__GT_ivec = (function thi$ng$geom$gl$shaders$bool__GT_ivec(coll){
return thi.ng.typedarrays.core.int32(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.gl.shaders.bool__GT_int,coll));
});
thi.ng.geom.gl.shaders.uniform_types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bvec3","bvec3",-635324058),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"mat3","mat3",402087048),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"ivec4","ivec4",-537108439),new cljs.core.Keyword(null,"mat2","mat2",238424363),new cljs.core.Keyword(null,"ivec2","ivec2",148465998),new cljs.core.Keyword(null,"vec4","vec4",631182126),new cljs.core.Keyword(null,"vec2","vec2",-762258640),new cljs.core.Keyword(null,"bvec2","bvec2",-148389679),new cljs.core.Keyword(null,"samplerCube","samplerCube",-734605291),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"bvec4","bvec4",1798744632),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),new cljs.core.Keyword(null,"ivec3","ivec3",-104254851)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3iv",thi.ng.typedarrays.core.int32,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1i",cljs.core.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix3fv",thi.ng.typedarrays.core.float32,(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3fv",thi.ng.typedarrays.core.float32,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1f",cljs.core.float$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4iv",thi.ng.typedarrays.core.int32,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix2fv",thi.ng.typedarrays.core.float32,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2iv",thi.ng.typedarrays.core.int32,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4fv",thi.ng.typedarrays.core.float32,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2fv",thi.ng.typedarrays.core.float32,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2iv",thi.ng.typedarrays.core.int32,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1i",cljs.core.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix4fv",thi.ng.typedarrays.core.float32,(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4iv",thi.ng.typedarrays.core.int32,(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1i",cljs.core.int$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1i",cljs.core.int$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3iv",thi.ng.typedarrays.core.int32,(3)], null)]);
thi.ng.geom.gl.shaders.init_shader_uniforms = (function thi$ng$geom$gl$shaders$init_shader_uniforms(gl,prog,uniforms){
return cljs.core.reduce_kv((function (umap,id,type){
var loc = gl.getUniformLocation(prog,cljs.core.name(id));
var vec__31101 = ((cljs.core.sequential_QMARK_(type))?type:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));
var type__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31101,(0),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31101,(1),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31101,(2),null);
var vec__31104 = (thi.ng.geom.gl.shaders.uniform_types.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.gl.shaders.uniform_types.cljs$core$IFn$_invoke$arity$1(type__$1) : thi.ng.geom.gl.shaders.uniform_types.call(null,type__$1));
var setter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31104,(0),null);
var u_cast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31104,(1),null);
var u_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31104,(2),null);
var setter__$1 = (gl[["uniform",cljs.core.str.cljs$core$IFn$_invoke$arity$1(setter)].join('')]);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(umap,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$,new cljs.core.Keyword(null,"setter","setter",1948354926),(cljs.core.truth_((function (){var fexpr__31107 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"int","int",-1741416922),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"bool","bool",1444635321),null,new cljs.core.Keyword(null,"sampler2D","sampler2D",-2107312644),null], null), null);
return (fexpr__31107.cljs$core$IFn$_invoke$arity$1 ? fexpr__31107.cljs$core$IFn$_invoke$arity$1(type__$1) : fexpr__31107.call(null,type__$1));
})())?(function (x){
return setter__$1.call(gl,loc,(u_cast.cljs$core$IFn$_invoke$arity$1 ? u_cast.cljs$core$IFn$_invoke$arity$1(x) : u_cast.call(null,x)));
}):(cljs.core.truth_((function (){var fexpr__31108 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mat3","mat3",402087048),null,new cljs.core.Keyword(null,"mat2","mat2",238424363),null,new cljs.core.Keyword(null,"mat4","mat4",-237531594),null], null), null);
return (fexpr__31108.cljs$core$IFn$_invoke$arity$1 ? fexpr__31108.cljs$core$IFn$_invoke$arity$1(type__$1) : fexpr__31108.call(null,type__$1));
})())?(function (x){
return setter__$1.call(gl,loc,cljs.core.boolean$(opt),(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(x))?x:(u_cast.cljs$core$IFn$_invoke$arity$1 ? u_cast.cljs$core$IFn$_invoke$arity$1(x) : u_cast.call(null,x))));
}):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vec2","vec2",-762258640),type__$1))?(function (x){
var x__$1 = (cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(x))?x:(((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.thi$ng$dstruct$streams$IBuffer$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.dstruct.streams.IBuffer,x):false)):cljs.core.native_satisfies_QMARK_(thi.ng.dstruct.streams.IBuffer,x)))?thi.ng.dstruct.streams.get_float_buffer(x):((typeof x === 'number')?(function (){var G__31110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
return (u_cast.cljs$core$IFn$_invoke$arity$1 ? u_cast.cljs$core$IFn$_invoke$arity$1(G__31110) : u_cast.call(null,G__31110));
})():(u_cast.cljs$core$IFn$_invoke$arity$1 ? u_cast.cljs$core$IFn$_invoke$arity$1(x) : u_cast.call(null,x))
)));
return setter__$1.call(gl,loc,x__$1);
}):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vec3","vec3",1116680488),type__$1))?(function (x){
var x__$1 = (cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(x))?x:(((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.thi$ng$dstruct$streams$IBuffer$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.dstruct.streams.IBuffer,x):false)):cljs.core.native_satisfies_QMARK_(thi.ng.dstruct.streams.IBuffer,x)))?thi.ng.dstruct.streams.get_float_buffer(x):((typeof x === 'number')?(function (){var G__31112 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(thi.ng.color.core.int24(x).thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)),(0),(3));
return (u_cast.cljs$core$IFn$_invoke$arity$1 ? u_cast.cljs$core$IFn$_invoke$arity$1(G__31112) : u_cast.call(null,G__31112));
})():(u_cast.cljs$core$IFn$_invoke$arity$1 ? u_cast.cljs$core$IFn$_invoke$arity$1(x) : u_cast.call(null,x))
)));
return setter__$1.call(gl,loc,x__$1);
}):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vec4","vec4",631182126),type__$1))?(function (x){
var x__$1 = (cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(x))?x:(((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.thi$ng$dstruct$streams$IBuffer$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.dstruct.streams.IBuffer,x):false)):cljs.core.native_satisfies_QMARK_(thi.ng.dstruct.streams.IBuffer,x)))?thi.ng.dstruct.streams.get_float_buffer(x):((typeof x === 'number')?thi.ng.dstruct.streams.get_float_buffer(thi.ng.color.core.int24(x).thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)):((typeof x === 'string')?thi.ng.dstruct.streams.get_float_buffer(thi.ng.color.core.css(x).thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)):(u_cast.cljs$core$IFn$_invoke$arity$1 ? u_cast.cljs$core$IFn$_invoke$arity$1(x) : u_cast.call(null,x))
))));
return setter__$1.call(gl,loc,x__$1);
}):(function (x){
return setter__$1.call(gl,loc,(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(x))?x:(function (){var G__31114 = (((!(cljs.core.sequential_QMARK_(x))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null):x);
return (u_cast.cljs$core$IFn$_invoke$arity$1 ? u_cast.cljs$core$IFn$_invoke$arity$1(G__31114) : u_cast.call(null,G__31114));
})()));
})
))))),new cljs.core.Keyword(null,"loc","loc",-584284901),loc], null));
}),cljs.core.PersistentArrayMap.EMPTY,uniforms);
});
thi.ng.geom.gl.shaders.set_uniform = (function thi$ng$geom$gl$shaders$set_uniform(shader,uniforms,id,val){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153)),id);
if(cljs.core.truth_(temp__5733__auto__)){
var u_spec = temp__5733__auto__;
var G__31116 = ((cljs.core.fn_QMARK_(val))?(val.cljs$core$IFn$_invoke$arity$2 ? val.cljs$core$IFn$_invoke$arity$2(shader,uniforms) : val.call(null,shader,uniforms)):val);
var fexpr__31115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(u_spec,new cljs.core.Keyword(null,"setter","setter",1948354926));
return (fexpr__31115.cljs$core$IFn$_invoke$arity$1 ? fexpr__31115.cljs$core$IFn$_invoke$arity$1(G__31116) : fexpr__31115.call(null,G__31116));
} else {
return console.warn((new Date()),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",(new cljs.core.List(null,"WARN",(new cljs.core.List(null,"Unknown shader uniform: ",(new cljs.core.List(null,id,null,(1),null)),(2),null)),(3),null)))));
}
});
thi.ng.geom.gl.shaders.apply_default_uniforms = (function thi$ng$geom$gl$shaders$apply_default_uniforms(shader,uniforms){
return cljs.core.reduce_kv((function (_,id,val){
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(uniforms,id))){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5733__auto__)){
var d = temp__5733__auto__;
return thi.ng.geom.gl.shaders.set_uniform(shader,uniforms,id,d);
} else {
return null;
}
} else {
return null;
}
}),null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153)));
});
thi.ng.geom.gl.shaders.init_shader_attribs = (function thi$ng$geom$gl$shaders$init_shader_attribs(gl,prog,attribs){
return cljs.core.reduce_kv((function (acc,id,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,id,gl.getAttribLocation(prog,cljs.core.name(id)));
}),cljs.core.PersistentArrayMap.EMPTY,attribs);
});
thi.ng.geom.gl.shaders.set_attribute = (function thi$ng$geom$gl$shaders$set_attribute(gl,shader,id,attrib_spec){
var map__31118 = attrib_spec;
var map__31118__$1 = (((((!((map__31118 == null))))?(((((map__31118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31118):map__31118);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"normalized?","normalized?",1246099953));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var loc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"loc","loc",-584284901));
var temp__5733__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),id) | (0));
if(cljs.core.truth_(temp__5733__auto__)){
var loc__$1 = temp__5733__auto__;
var G__31120 = gl;
G__31120.bindBuffer(thi.ng.geom.gl.webgl.constants.array_buffer,buffer);

G__31120.enableVertexAttribArray(loc__$1);

G__31120.vertexAttribPointer(loc__$1,(size | (0)),(function (){var or__4185__auto__ = type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.gl.webgl.constants.float$;
}
})(),cljs.core.boolean$(normalized_QMARK_),(function (){var or__4185__auto__ = stride;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})(),(function (){var or__4185__auto__ = offset;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})());

return G__31120;
} else {
return console.warn((new Date()),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",(new cljs.core.List(null,"WARN",(new cljs.core.List(null,["Unknown shader attribute: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),null,(1),null)),(2),null)))));
}
});
thi.ng.geom.gl.shaders.disable_attribute = (function thi$ng$geom$gl$shaders$disable_attribute(gl,shader,id){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),id);
if(cljs.core.truth_(temp__5733__auto__)){
var loc = temp__5733__auto__;
gl.disableVertexAttribArray(loc);

return gl;
} else {
return console.warn((new Date()),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",(new cljs.core.List(null,"WARN",(new cljs.core.List(null,["Unknown shader attribute: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),null,(1),null)),(2),null)))));
}
});
thi.ng.geom.gl.shaders.default_prelude = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp int;\n  precision highp float;\n  #else\n  precision mediump int;\n  precision mediump float;\n  #endif\n  #ifndef PI\n  #define PI      3.141592653589793\n  #endif\n  #ifndef TWO_PI\n  #define TWO_PI  6.283185307179586\n  #endif\n  #ifndef HALF_PI\n  #define HALF_PI 1.570796326794896\n  #endif\n  #ifndef RAD\n  #define RAD     0.008726646259972\n  #endif\n  ";
thi.ng.geom.gl.shaders.compile_glsl_vars = (function thi$ng$geom$gl$shaders$compile_glsl_vars(qualifier,coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31121){
var vec__31122 = p__31121;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31122,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31122,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualifier)," ",cljs.core.name(((cljs.core.sequential_QMARK_(type))?cljs.core.first(type):type))," ",cljs.core.name(id),";\n"].join('');
}),coll));
});
thi.ng.geom.gl.shaders.compile_glsl3_attribs = (function thi$ng$geom$gl$shaders$compile_glsl3_attribs(coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31125){
var vec__31126 = p__31125;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31126,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31126,(1),null);
if(cljs.core.sequential_QMARK_(type)){
return ["layout(location=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(type,(1))),") in ",cljs.core.name(cljs.core.first(type))," ",cljs.core.name(id),";\n"].join('');
} else {
return ["in ",cljs.core.name(type)," ",cljs.core.name(id),";\n"].join('');
}
}),coll));
});
thi.ng.geom.gl.shaders.prepare_shader_sources = (function thi$ng$geom$gl$shaders$prepare_shader_sources(p__31129){
var map__31130 = p__31129;
var map__31130__$1 = (((((!((map__31130 == null))))?(((((map__31130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31130):map__31130);
var vs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31130__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var fs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31130__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var uniforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31130__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31130__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var varying = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31130__$1,new cljs.core.Keyword(null,"varying","varying",685535123));
var prelude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31130__$1,new cljs.core.Keyword(null,"prelude","prelude",-138977836));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31130__$1,new cljs.core.Keyword(null,"version","version",425292698));
var gl3_QMARK_ = (function (){var and__4174__auto__ = version;
if(cljs.core.truth_(and__4174__auto__)){
return (version >= (300));
} else {
return and__4174__auto__;
}
})();
var u_src = thi.ng.geom.gl.shaders.compile_glsl_vars("uniform",uniforms);
var a_src = (cljs.core.truth_(gl3_QMARK_)?thi.ng.geom.gl.shaders.compile_glsl3_attribs(attribs):thi.ng.geom.gl.shaders.compile_glsl_vars("attribute",attribs));
var v_src_vs = thi.ng.geom.gl.shaders.compile_glsl_vars((cljs.core.truth_(gl3_QMARK_)?"out":"varying"),varying);
var v_src_fs = thi.ng.geom.gl.shaders.compile_glsl_vars((cljs.core.truth_(gl3_QMARK_)?"in":"varying"),varying);
var src = (cljs.core.truth_(version)?["#version ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version),"\n"].join(''):"");
var src__$1 = [src,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = prelude;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.geom.gl.shaders.default_prelude;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(u_src)].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vs-src","vs-src",-692281053),[src__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_src_vs),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_src),cljs.core.str.cljs$core$IFn$_invoke$arity$1(vs)].join(''),new cljs.core.Keyword(null,"fs-src","fs-src",1463465927),[src__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_src_fs),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fs)].join('')], null);
});
thi.ng.geom.gl.shaders.parse_and_throw_error = (function thi$ng$geom$gl$shaders$parse_and_throw_error(gl,shader,src){
var src_lines = cljs.core.vec(clojure.string.split_lines(src));
var errors = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
var vec__31133 = cljs.core.re_find(/ERROR: \d+:(\d+): (.*)/,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31133,(0),null);
var ln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31133,(1),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31133,(2),null);
if(cljs.core.truth_(ln)){
return ["line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ln),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(src_lines,parseInt(ln,(10))))].join('');
} else {
return null;
}
}),clojure.string.split_lines(gl.getShaderInfoLog(shader)))));
gl.deleteShader(shader);

return thi.ng.xerror.core.throw_BANG_(["Error compiling shader:\n",errors].join(''));
});
thi.ng.geom.gl.shaders.compile_shader = (function thi$ng$geom$gl$shaders$compile_shader(gl,src,type){
var temp__5733__auto__ = gl.createShader(type);
if(cljs.core.truth_(temp__5733__auto__)){
var shader = temp__5733__auto__;
gl.shaderSource(shader,src);

gl.compileShader(shader);

if(cljs.core.truth_(gl.getShaderParameter(shader,thi.ng.geom.gl.webgl.constants.compile_status))){
return shader;
} else {
return thi.ng.geom.gl.shaders.parse_and_throw_error(gl,shader,src);
}
} else {
return thi.ng.xerror.core.throw_BANG_("Can't create shader");
}
});
thi.ng.geom.gl.shaders.bind_attrib_locations = (function thi$ng$geom$gl$shaders$bind_attrib_locations(gl,program,attribs){
return cljs.core.reduce_kv((function (_,id,att){
if(cljs.core.sequential_QMARK_(att)){
console.debug((new Date()),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",(new cljs.core.List(null,"DEBUG",(new cljs.core.List(null,new cljs.core.Keyword(null,"bind-attr","bind-attr",393092719),(new cljs.core.List(null,id,(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(att,(1)),null,(1),null)),(2),null)),(3),null)),(4),null)))));

return gl.bindAttribLocation(program,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(att,(1)),cljs.core.name(id));
} else {
return null;
}
}),null,attribs);
});
thi.ng.geom.gl.shaders.make_shader_from_spec = (function thi$ng$geom$gl$shaders$make_shader_from_spec(gl,spec){
var map__31136 = spec;
var map__31136__$1 = (((((!((map__31136 == null))))?(((((map__31136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31136):map__31136);
var uniforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31136__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31136__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var map__31137 = thi.ng.geom.gl.shaders.prepare_shader_sources(spec);
var map__31137__$1 = (((((!((map__31137 == null))))?(((((map__31137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31137):map__31137);
var vs_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31137__$1,new cljs.core.Keyword(null,"vs-src","vs-src",-692281053));
var fs_src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31137__$1,new cljs.core.Keyword(null,"fs-src","fs-src",1463465927));
var vs = thi.ng.geom.gl.shaders.compile_shader(gl,vs_src,thi.ng.geom.gl.webgl.constants.vertex_shader);
var fs = thi.ng.geom.gl.shaders.compile_shader(gl,fs_src,thi.ng.geom.gl.webgl.constants.fragment_shader);
var prog = gl.createProgram();
var G__31140_31150 = gl;
G__31140_31150.attachShader(prog,vs);

G__31140_31150.attachShader(prog,fs);

thi.ng.geom.gl.shaders.bind_attrib_locations(G__31140_31150,prog,attribs);

G__31140_31150.linkProgram(prog);


if(cljs.core.truth_(gl.getProgramParameter(prog,thi.ng.geom.gl.webgl.constants.link_status))){
var attribs__$1 = thi.ng.geom.gl.shaders.init_shader_attribs(gl,prog,attribs);
var uniforms__$1 = thi.ng.geom.gl.shaders.init_shader_uniforms(gl,prog,uniforms);
var G__31141_31151 = gl;
G__31141_31151.deleteShader(vs);

G__31141_31151.deleteShader(fs);


return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"program","program",781564284),prog,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),uniforms__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093),attribs__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090),vs_src,new cljs.core.Keyword(null,"fs","fs",-2122926244),fs_src], null)], 0));
} else {
return thi.ng.xerror.core.throw_BANG_(["Shader failed to link:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getProgramInfoLog(prog))].join(''));
}
});
thi.ng.geom.gl.shaders.make_shader_from_dom = (function thi$ng$geom$gl$shaders$make_shader_from_dom(gl,p__31142){
var map__31143 = p__31142;
var map__31143__$1 = (((((!((map__31143 == null))))?(((((map__31143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31143):map__31143);
var spec = map__31143__$1;
var vs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31143__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var fs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31143__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
return thi.ng.geom.gl.shaders.make_shader_from_spec(gl,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(spec,new cljs.core.Keyword(null,"vs","vs",-2022097090),thi.ng.geom.gl.utils.get_script_text(vs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fs","fs",-2122926244),thi.ng.geom.gl.utils.get_script_text(fs)], 0)));
});

//# sourceMappingURL=thi.ng.geom.gl.shaders.js.map
