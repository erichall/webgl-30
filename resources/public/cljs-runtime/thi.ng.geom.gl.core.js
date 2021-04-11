goog.provide('thi.ng.geom.gl.core');
goog.require('cljs.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.geom.rect');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.gl.shaders');
goog.require('thi.ng.color.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.geom.gl.webgl.constants');
goog.require('thi.ng.typedarrays.core');

/**
 * @interface
 */
thi.ng.geom.gl.core.IGLConvert = function(){};

thi.ng.geom.gl.core.as_gl_buffer_spec = (function thi$ng$geom$gl$core$as_gl_buffer_spec(_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2(_,opts);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.as_gl_buffer_spec[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4488__auto__.call(null,_,opts));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.as_gl_buffer_spec["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4485__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IGLConvert.as-gl-buffer-spec",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.IRelease = function(){};

thi.ng.geom.gl.core.release = (function thi$ng$geom$gl$core$release(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IRelease$release$arity$1 == null)))))){
return _.thi$ng$geom$gl$core$IRelease$release$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.release[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.release["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IRelease.release",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.IBind = function(){};

thi.ng.geom.gl.core.bind = (function thi$ng$geom$gl$core$bind(var_args){
var G__31147 = arguments.length;
switch (G__31147) {
case 1:
return thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IBind$bind$arity$1 == null)))))){
return _.thi$ng$geom$gl$core$IBind$bind$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.bind[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.bind["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBind.bind",_);
}
}
}
}));

(thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IBind$bind$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IBind$bind$arity$2(_,opts);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.bind[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4488__auto__.call(null,_,opts));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.bind["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4485__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IBind.bind",_);
}
}
}
}));

(thi.ng.geom.gl.core.bind.cljs$lang$maxFixedArity = 2);


thi.ng.geom.gl.core.unbind = (function thi$ng$geom$gl$core$unbind(var_args){
var G__31149 = arguments.length;
switch (G__31149) {
case 1:
return thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IBind$unbind$arity$1 == null)))))){
return _.thi$ng$geom$gl$core$IBind$unbind$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.unbind[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.unbind["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBind.unbind",_);
}
}
}
}));

(thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IBind$unbind$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IBind$unbind$arity$2(_,opts);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.unbind[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4488__auto__.call(null,_,opts));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.unbind["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4485__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IBind.unbind",_);
}
}
}
}));

(thi.ng.geom.gl.core.unbind.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.gl.core.IConfigure = function(){};

thi.ng.geom.gl.core.configure = (function thi$ng$geom$gl$core$configure(_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IConfigure$configure$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IConfigure$configure$arity$2(_,opts);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.configure[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4488__auto__.call(null,_,opts));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.configure["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4485__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IConfigure.configure",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.ITexture = function(){};

thi.ng.geom.gl.core.set_texture_filter = (function thi$ng$geom$gl$core$set_texture_filter(_,min,mag){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$ITexture$set_texture_filter$arity$3 == null)))))){
return _.thi$ng$geom$gl$core$ITexture$set_texture_filter$arity$3(_,min,mag);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.set_texture_filter[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(_,min,mag) : m__4488__auto__.call(null,_,min,mag));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.set_texture_filter["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(_,min,mag) : m__4485__auto__.call(null,_,min,mag));
} else {
throw cljs.core.missing_protocol("ITexture.set-texture-filter",_);
}
}
}
});

thi.ng.geom.gl.core.set_texture_wrap = (function thi$ng$geom$gl$core$set_texture_wrap(_,wrap_s,wrap_t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$ITexture$set_texture_wrap$arity$3 == null)))))){
return _.thi$ng$geom$gl$core$ITexture$set_texture_wrap$arity$3(_,wrap_s,wrap_t);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.set_texture_wrap[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(_,wrap_s,wrap_t) : m__4488__auto__.call(null,_,wrap_s,wrap_t));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.set_texture_wrap["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(_,wrap_s,wrap_t) : m__4485__auto__.call(null,_,wrap_s,wrap_t));
} else {
throw cljs.core.missing_protocol("ITexture.set-texture-wrap",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.IFramebuffer = function(){};

thi.ng.geom.gl.core.set_fbo_color_texture = (function thi$ng$geom$gl$core$set_fbo_color_texture(_,tex){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2(_,tex);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.set_fbo_color_texture[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,tex) : m__4488__auto__.call(null,_,tex));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.set_fbo_color_texture["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,tex) : m__4485__auto__.call(null,_,tex));
} else {
throw cljs.core.missing_protocol("IFramebuffer.set-fbo-color-texture",_);
}
}
}
});

thi.ng.geom.gl.core.set_fbo_depth_buffer = (function thi$ng$geom$gl$core$set_fbo_depth_buffer(_,depth_buffer){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2(_,depth_buffer);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.geom.gl.core.set_fbo_depth_buffer[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,depth_buffer) : m__4488__auto__.call(null,_,depth_buffer));
} else {
var m__4485__auto__ = (thi.ng.geom.gl.core.set_fbo_depth_buffer["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,depth_buffer) : m__4485__auto__.call(null,_,depth_buffer));
} else {
throw cljs.core.missing_protocol("IFramebuffer.set-fbo-depth-buffer",_);
}
}
}
});

thi.ng.geom.gl.core.zero_fill_coll = (function thi$ng$geom$gl$core$zero_fill_coll(coll,stride){
var len = cljs.core.count(coll);
if((len < stride)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(stride,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))));
} else {
if((len > stride)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(stride,coll);
} else {
return coll;

}
}
});
thi.ng.geom.gl.core.fill_buffer_vec2 = (function thi$ng$geom$gl$core$fill_buffer_vec2(buf,idx,v,num,stride){
var vbuf_31340 = v.buf;
var idx_31341__$1 = (0);
var num_31342__$1 = num;
while(true){
if((num_31342__$1 > (0))){
buf.set(vbuf_31340,idx_31341__$1);

var G__31343 = (idx_31341__$1 + stride);
var G__31344 = (num_31342__$1 - (1));
idx_31341__$1 = G__31343;
num_31342__$1 = G__31344;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_buffer_vec3 = (function thi$ng$geom$gl$core$fill_buffer_vec3(buf,idx,v,num,stride){
var vbuf_31348 = v.buf;
var idx_31349__$1 = (0);
var num_31350__$1 = num;
while(true){
if((num_31350__$1 > (0))){
buf.set(vbuf_31348,idx_31349__$1);

var G__31351 = (idx_31349__$1 + stride);
var G__31352 = (num_31350__$1 - (1));
idx_31349__$1 = G__31351;
num_31350__$1 = G__31352;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_buffer = (function thi$ng$geom$gl$core$fill_buffer(buf,idx,coll,n,stride){
var b = thi.ng.typedarrays.core.float32(thi.ng.geom.gl.core.zero_fill_coll(coll,stride));
var i_31353 = idx;
var n_31354__$1 = n;
while(true){
if((n_31354__$1 > (0))){
buf.set(b,i_31353);

var G__31358 = (i_31353 + stride);
var G__31359 = (n_31354__$1 - (1));
i_31353 = G__31358;
n_31354__$1 = G__31359;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_vertex_buffer = (function thi$ng$geom$gl$core$fill_vertex_buffer(buf,coll,stride){
var i = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var G__31360 = (thi.ng.dstruct.streams.into_float_buffer(cljs.core.first(coll__$1),buf,stride,i) | (0));
var G__31361 = cljs.core.next(coll__$1);
i = G__31360;
coll__$1 = G__31361;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.fill_vertex_buffer_faces = (function thi$ng$geom$gl$core$fill_vertex_buffer_faces(f,buf,coll,stride){
var i = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var fv = cljs.core.first(coll__$1);
var G__31362 = ((function (){var G__31153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fv,(2));
var G__31154 = buf;
var G__31155 = stride;
var G__31156 = (function (){var G__31157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fv,(1));
var G__31158 = buf;
var G__31159 = stride;
var G__31160 = (function (){var G__31161 = cljs.core.first(fv);
var G__31162 = buf;
var G__31163 = stride;
var G__31164 = i;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__31161,G__31162,G__31163,G__31164) : f.call(null,G__31161,G__31162,G__31163,G__31164));
})();
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__31157,G__31158,G__31159,G__31160) : f.call(null,G__31157,G__31158,G__31159,G__31160));
})();
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__31153,G__31154,G__31155,G__31156) : f.call(null,G__31153,G__31154,G__31155,G__31156));
})() | (0));
var G__31363 = cljs.core.next(coll__$1);
i = G__31362;
coll__$1 = G__31363;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.face_normals_buffer = (function thi$ng$geom$gl$core$face_normals_buffer(faces){
var buf = thi.ng.typedarrays.core.float32(((cljs.core.count(faces) * (3)) * (3)));
var faces__$1 = faces;
var idx = (0);
while(true){
if(cljs.core.truth_(faces__$1)){
var nbuf = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(cljs.core.first(faces__$1)).buf;
buf.set(nbuf,idx);

buf.set(nbuf,(idx + (3)));

buf.set(nbuf,(idx + (6)));

var G__31364 = cljs.core.next(faces__$1);
var G__31365 = (idx + (9));
faces__$1 = G__31364;
idx = G__31365;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.mesh_face_normals_buffer = (function thi$ng$geom$gl$core$mesh_face_normals_buffer(m){
var fnorms = thi.ng.geom.core.face_normals(m,true);
var faces = thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(m);
var buf = thi.ng.typedarrays.core.float32((cljs.core.count(faces) * (9)));
var faces__$1 = faces;
var idx = (0);
while(true){
if(cljs.core.truth_(faces__$1)){
var nbuf = (function (){var G__31166 = cljs.core.first(faces__$1);
return (fnorms.cljs$core$IFn$_invoke$arity$1 ? fnorms.cljs$core$IFn$_invoke$arity$1(G__31166) : fnorms.call(null,G__31166));
})().buf;
buf.set(nbuf,idx);

buf.set(nbuf,(idx + (3)));

buf.set(nbuf,(idx + (6)));

var G__31369 = (idx + (9));
var G__31370 = cljs.core.next(faces__$1);
faces__$1 = G__31369;
idx = G__31370;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.mesh_vertex_normals_buffer = (function thi$ng$geom$gl$core$mesh_vertex_normals_buffer(m){
var vnorms = thi.ng.geom.core.vertex_normals(m,true);
var faces = thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(m);
var buf = thi.ng.typedarrays.core.float32((cljs.core.count(faces) * (9)));
var faces__$1 = faces;
var idx = (0);
while(true){
if(cljs.core.truth_(faces__$1)){
var f = cljs.core.first(faces__$1);
buf.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vnorms,cljs.core.first(f)).buf,idx);

buf.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vnorms,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(f,(1))).buf,(idx + (3)));

buf.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vnorms,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(f,(2))).buf,(idx + (6)));

var G__31371 = (idx + (9));
var G__31372 = cljs.core.next(faces__$1);
faces__$1 = G__31371;
idx = G__31372;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.common_attrib_buffer_specs = (function thi$ng$geom$gl$core$common_attrib_buffer_specs(p__31167,p__31168){
var map__31169 = p__31167;
var map__31169__$1 = (((((!((map__31169 == null))))?(((((map__31169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31169):map__31169);
var acc = map__31169__$1;
var num_vertices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31169__$1,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051));
var map__31170 = p__31168;
var map__31170__$1 = (((((!((map__31170 == null))))?(((((map__31170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31170):map__31170);
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31170__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var fixed_normal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31170__$1,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463));
var uv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31170__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31170__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var fixed_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31170__$1,new cljs.core.Keyword(null,"fixed-color","fixed-color",1717626731));
var c_stride = (cljs.core.truth_(colors)?cljs.core.count(cljs.core.first(colors)):(cljs.core.truth_(fixed_color)?cljs.core.count(fixed_color):null));
var G__31173 = acc;
var G__31173__$1 = (cljs.core.truth_(normals)?cljs.core.assoc_in(G__31173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),normals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__31173);
var G__31173__$2 = (cljs.core.truth_(fixed_normal)?cljs.core.assoc_in(G__31173__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_buffer_vec3(thi.ng.typedarrays.core.float32((num_vertices * (3))),(0),fixed_normal,num_vertices,(3)),new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__31173__$1);
var G__31173__$3 = (cljs.core.truth_(uv)?cljs.core.assoc_in(G__31173__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"uv","uv",-1197749379)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32(((2) * cljs.core.count(uv))),uv,(2)),new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__31173__$2);
var G__31173__$4 = (cljs.core.truth_(colors)?cljs.core.assoc_in(G__31173__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((c_stride * cljs.core.count(colors))),colors,c_stride),new cljs.core.Keyword(null,"size","size",1098693007),c_stride], null)):G__31173__$3);
if(cljs.core.truth_(fixed_color)){
return cljs.core.assoc_in(G__31173__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_buffer(thi.ng.typedarrays.core.float32((num_vertices * c_stride)),(0),fixed_color,num_vertices,c_stride),new cljs.core.Keyword(null,"size","size",1098693007),c_stride], null));
} else {
return G__31173__$4;
}
});
thi.ng.geom.gl.core.into_float_buffer_vec2 = (function thi$ng$geom$gl$core$into_float_buffer_vec2(v,buf,stride,idx){
buf.set(v.buf,idx);

return (idx + stride);
});
thi.ng.geom.gl.core.into_float_buffer_vec3 = (function thi$ng$geom$gl$core$into_float_buffer_vec3(v,buf,stride,idx){
buf.set(v.buf,idx);

return (idx + stride);
});
(cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.typedarrays.core.float32(___$1);
}));

(cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,buf,stride,idx){
var ___$1 = this;
var t = cljs.core.type(cljs.core.first(___$1));
var into_STAR_ = (function (){var pred__31174 = cljs.core._EQ_;
var expr__31175 = t;
if(cljs.core.truth_((pred__31174.cljs$core$IFn$_invoke$arity$2 ? pred__31174.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.Vec2,expr__31175) : pred__31174.call(null,thi.ng.geom.vector.Vec2,expr__31175)))){
return thi.ng.geom.gl.core.into_float_buffer_vec2;
} else {
if(cljs.core.truth_((pred__31174.cljs$core$IFn$_invoke$arity$2 ? pred__31174.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.Vec3,expr__31175) : pred__31174.call(null,thi.ng.geom.vector.Vec3,expr__31175)))){
return thi.ng.geom.gl.core.into_float_buffer_vec3;
} else {
return thi.ng.dstruct.streams.into_float_buffer;
}
}
})();
var G__31177 = cljs.core.count(___$1);
switch (G__31177) {
case (2):
var G__31178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(1));
var G__31179 = buf;
var G__31180 = stride;
var G__31181 = (function (){var G__31182 = cljs.core.first(___$1);
var G__31183 = buf;
var G__31184 = stride;
var G__31185 = idx;
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31182,G__31183,G__31184,G__31185) : into_STAR_.call(null,G__31182,G__31183,G__31184,G__31185));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31178,G__31179,G__31180,G__31181) : into_STAR_.call(null,G__31178,G__31179,G__31180,G__31181));

break;
case (3):
var G__31186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(2));
var G__31187 = buf;
var G__31188 = stride;
var G__31189 = (function (){var G__31190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(1));
var G__31191 = buf;
var G__31192 = stride;
var G__31193 = (function (){var G__31194 = cljs.core.first(___$1);
var G__31195 = buf;
var G__31196 = stride;
var G__31197 = idx;
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31194,G__31195,G__31196,G__31197) : into_STAR_.call(null,G__31194,G__31195,G__31196,G__31197));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31190,G__31191,G__31192,G__31193) : into_STAR_.call(null,G__31190,G__31191,G__31192,G__31193));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31186,G__31187,G__31188,G__31189) : into_STAR_.call(null,G__31186,G__31187,G__31188,G__31189));

break;
case (4):
var G__31198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(3));
var G__31199 = buf;
var G__31200 = stride;
var G__31201 = (function (){var G__31202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(2));
var G__31203 = buf;
var G__31204 = stride;
var G__31205 = (function (){var G__31206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(1));
var G__31207 = buf;
var G__31208 = stride;
var G__31209 = (function (){var G__31210 = cljs.core.first(___$1);
var G__31211 = buf;
var G__31212 = stride;
var G__31213 = idx;
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31210,G__31211,G__31212,G__31213) : into_STAR_.call(null,G__31210,G__31211,G__31212,G__31213));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31206,G__31207,G__31208,G__31209) : into_STAR_.call(null,G__31206,G__31207,G__31208,G__31209));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31202,G__31203,G__31204,G__31205) : into_STAR_.call(null,G__31202,G__31203,G__31204,G__31205));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31198,G__31199,G__31200,G__31201) : into_STAR_.call(null,G__31198,G__31199,G__31200,G__31201));

break;
default:
var idx__$1 = idx;
var xs = ___$1;
while(true){
if(cljs.core.truth_(xs)){
var G__31387 = (function (){var G__31218 = cljs.core.first(xs);
var G__31219 = buf;
var G__31220 = stride;
var G__31221 = idx__$1;
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__31218,G__31219,G__31220,G__31221) : into_STAR_.call(null,G__31218,G__31219,G__31220,G__31221));
})();
var G__31388 = cljs.core.next(xs);
idx__$1 = G__31387;
xs = G__31388;
continue;
} else {
return idx__$1;
}
break;
}

}
}));
(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (p__31222,p__31223){
var map__31224 = p__31222;
var map__31224__$1 = (((((!((map__31224 == null))))?(((((map__31224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31224):map__31224);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31224__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__31225 = p__31223;
var map__31225__$1 = (((((!((map__31225 == null))))?(((((map__31225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31225):map__31225);
var spec = map__31225__$1;
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31225__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var map__31228 = this;
var map__31228__$1 = (((((!((map__31228 == null))))?(((((map__31228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31228):map__31228);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31228__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var numv = cljs.core.count(points__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((numv * stride)),points__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.line_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),numv], null),spec);
}));
(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (p__31230,p__31231){
var map__31232 = p__31230;
var map__31232__$1 = (((((!((map__31232 == null))))?(((((map__31232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31232):map__31232);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31232__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__31233 = p__31231;
var map__31233__$1 = (((((!((map__31233 == null))))?(((((map__31233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31233):map__31233);
var spec = map__31233__$1;
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31233__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var map__31236 = this;
var map__31236__$1 = (((((!((map__31236 == null))))?(((((map__31236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31236):map__31236);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31236__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var numv = cljs.core.count(points__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((numv * stride)),points__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.line_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),numv], null),spec);
}));
(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (r,p__31238){
var map__31239 = p__31238;
var map__31239__$1 = (((((!((map__31239 == null))))?(((((map__31239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31239):map__31239);
var spec = map__31239__$1;
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31239__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var r__$1 = this;
var vec__31242 = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(r__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31242,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31242,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31242,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31242,(3),null);
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32(((4) * stride)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,c], null),stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangle_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),(4)], null),(cljs.core.truth_(normals)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463),thi.ng.geom.vector.V3Z),new cljs.core.Keyword(null,"normals","normals",-1508109067)):spec));
}));
(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__31245){
var map__31246 = p__31245;
var map__31246__$1 = (((((!((map__31246 == null))))?(((((map__31246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31246):map__31246);
var spec = map__31246__$1;
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31246__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067),true);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31246__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31246__$1,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.gl.webgl.constants.triangles,mode)){
var faces = thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1(___$1);
var num_faces = cljs.core.count(faces);
var num_verts = (num_faces * (3));
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),(cljs.core.truth_(normals)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463),thi.ng.geom.vector.V3Z),new cljs.core.Keyword(null,"normals","normals",-1508109067)):spec));
} else {
var verts = thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(___$1);
var verts__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(verts,cljs.core.first(verts));
var num_verts = cljs.core.count(verts__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((num_verts * stride)),verts__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"normals","normals",-1508109067)));
}
}));
(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__31251){
var map__31252 = p__31251;
var map__31252__$1 = (((((!((map__31252 == null))))?(((((map__31252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31252):map__31252);
var spec = map__31252__$1;
var fnormals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31252__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),true);
var tessellate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31252__$1,new cljs.core.Keyword(null,"tessellate","tessellate",950164340),true);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31252__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var ___$1 = this;
var m = (cljs.core.truth_(tessellate)?thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1(___$1):___$1);
var faces = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31250_SHARP_){
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(p1__31250_SHARP_,m);
}),thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(m));
var num_faces = cljs.core.count(faces);
var num_verts = (num_faces * (3));
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer_faces(thi.ng.geom.gl.core.into_float_buffer_vec3,thi.ng.typedarrays.core.float32((num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"normals","normals",-1508109067),(cljs.core.truth_(fnormals)?thi.ng.geom.gl.core.mesh_face_normals_buffer(m):null)));
}));
(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__31257){
var map__31258 = p__31257;
var map__31258__$1 = (((((!((map__31258 == null))))?(((((map__31258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31258):map__31258);
var spec = map__31258__$1;
var vnormals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31258__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var fnormals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31258__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),true);
var tessellate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31258__$1,new cljs.core.Keyword(null,"tessellate","tessellate",950164340),true);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31258__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var ___$1 = this;
var m = (cljs.core.truth_(tessellate)?thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1(___$1):___$1);
var faces = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31255_SHARP_){
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2(p1__31255_SHARP_,m);
}),thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1(m));
var num_faces = cljs.core.count(faces);
var num_verts = (num_faces * (3));
var normals = (cljs.core.truth_(vnormals)?thi.ng.geom.gl.core.mesh_vertex_normals_buffer(m):(cljs.core.truth_(fnormals)?thi.ng.geom.gl.core.mesh_face_normals_buffer(m):null
));
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer_faces(thi.ng.geom.gl.core.into_float_buffer_vec3,thi.ng.typedarrays.core.float32((num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"normals","normals",-1508109067),normals));
}));
thi.ng.geom.gl.core.context_default_attribs = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),true,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"depth","depth",1768663640),true,new cljs.core.Keyword(null,"fail-if-major-performance-caveat","fail-if-major-performance-caveat",333849513),false,new cljs.core.Keyword(null,"prefer-low-power-to-high-performance","prefer-low-power-to-high-performance",173664672),false,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636),true,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663),false,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),false], null);
thi.ng.geom.gl.core.gl_context = (function thi$ng$geom$gl$core$gl_context(var_args){
var G__31262 = arguments.length;
switch (G__31262) {
case 1:
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$1 = (function (canvas){
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2(canvas,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2 = (function (canvas,attribs){
var canvas__$1 = ((typeof canvas === 'string')?document.getElementById(canvas):canvas);
var attribs__$1 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thi.ng.geom.gl.core.context_default_attribs,attribs], 0)));
var getctx = (function (p1__31260_SHARP_){
try{var ctx = canvas__$1.getContext(p1__31260_SHARP_,attribs__$1);
(canvas__$1.onselectstart = cljs.core.constantly(false));

return ctx;
}catch (e31263){if((e31263 instanceof Error)){
var e = e31263;
return null;
} else {
throw e31263;

}
}});
var ctx = (function (){var ids = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webgl","experimental-webgl","webkit-3d","moz-webgl"], null);
while(true){
if(cljs.core.truth_(ids)){
var temp__5733__auto__ = getctx(cljs.core.first(ids));
if(cljs.core.truth_(temp__5733__auto__)){
var ctx = temp__5733__auto__;
return ctx;
} else {
var G__31410 = cljs.core.next(ids);
ids = G__31410;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ctx;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1("WebGL not available");
}
}));

(thi.ng.geom.gl.core.gl_context.cljs$lang$maxFixedArity = 2);

thi.ng.geom.gl.core.clear_color_buffer = (function thi$ng$geom$gl$core$clear_color_buffer(var_args){
var G__31266 = arguments.length;
switch (G__31266) {
case 2:
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$2 = (function (gl,col){
var c = thi.ng.color.core.as_rgba(col);
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5(gl,c.r,c.g,c.b,c.a);
}));

(thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5 = (function (gl,r,g,b,a){
var G__31268 = gl;
G__31268.clearColor(r,g,b,a);

G__31268.clear(thi.ng.geom.gl.webgl.constants.color_buffer_bit);

return G__31268;
}));

(thi.ng.geom.gl.core.clear_color_buffer.cljs$lang$maxFixedArity = 5);

thi.ng.geom.gl.core.clear_depth_buffer = (function thi$ng$geom$gl$core$clear_depth_buffer(gl,d){
var G__31269 = gl;
G__31269.clearDepth(d);

G__31269.clear(thi.ng.geom.gl.webgl.constants.depth_buffer_bit);

return G__31269;
});
thi.ng.geom.gl.core.clear_color_and_depth_buffer = (function thi$ng$geom$gl$core$clear_color_and_depth_buffer(var_args){
var G__31271 = arguments.length;
switch (G__31271) {
case 3:
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$3 = (function (gl,col,d){
var c = thi.ng.color.core.as_rgba(col);
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6(gl,c.r,c.g,c.b,c.a,d);
}));

(thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6 = (function (gl,r,g,b,a,d){
var G__31273 = gl;
G__31273.clearColor(r,g,b,a);

G__31273.clearDepth(d);

G__31273.clear((thi.ng.geom.gl.webgl.constants.depth_buffer_bit | thi.ng.geom.gl.webgl.constants.color_buffer_bit));

return G__31273;
}));

(thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$lang$maxFixedArity = 6);

thi.ng.geom.gl.core.disable = (function thi$ng$geom$gl$core$disable(gl,flag){
gl.disable(flag);

return gl;
});
thi.ng.geom.gl.core.enable = (function thi$ng$geom$gl$core$enable(gl,flag){
gl.enable(flag);

return gl;
});
thi.ng.geom.gl.core.scissor_test = (function thi$ng$geom$gl$core$scissor_test(var_args){
var G__31276 = arguments.length;
switch (G__31276) {
case 2:
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$2 = (function (gl,p__31277){
var map__31278 = p__31277;
var map__31278__$1 = (((((!((map__31278 == null))))?(((((map__31278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31278):map__31278);
var vec__31279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31278__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31279,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31279,(1),null);
var vec__31282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31278__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(1),null);
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5(gl,x,y,w,h);
}));

(thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5 = (function (gl,x,y,w,h){
var G__31286 = gl;
G__31286.enable(thi.ng.geom.gl.webgl.constants.scissor_test);

G__31286.scissor(x,y,w,h);

return G__31286;
}));

(thi.ng.geom.gl.core.scissor_test.cljs$lang$maxFixedArity = 5);

thi.ng.geom.gl.core.cull_faces = (function thi$ng$geom$gl$core$cull_faces(gl,side){
var G__31287 = gl;
G__31287.enable(thi.ng.geom.gl.webgl.constants.cull_face);

G__31287.cullFace(side);

return G__31287;
});
thi.ng.geom.gl.core.set_viewport = (function thi$ng$geom$gl$core$set_viewport(var_args){
var G__31289 = arguments.length;
switch (G__31289) {
case 2:
return thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$2 = (function (gl,p__31290){
var map__31291 = p__31290;
var map__31291__$1 = (((((!((map__31291 == null))))?(((((map__31291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31291):map__31291);
var vec__31292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31291__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31292,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31292,(1),null);
var vec__31295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31291__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31295,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31295,(1),null);
gl.viewport(x,y,w,h);

return gl;
}));

(thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$5 = (function (gl,x,y,w,h){
gl.viewport(x,y,w,h);

return gl;
}));

(thi.ng.geom.gl.core.set_viewport.cljs$lang$maxFixedArity = 5);

thi.ng.geom.gl.core.get_viewport_rect = (function thi$ng$geom$gl$core$get_viewport_rect(gl){
var b = gl.getParameter(thi.ng.geom.gl.webgl.constants.viewport);
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((b[(0)]),(b[(1)]),(b[(2)]),(b[(3)]));
});
thi.ng.geom.gl.core.perspective = thi.ng.geom.matrix.perspective;
thi.ng.geom.gl.core.ortho = thi.ng.geom.matrix.ortho;
thi.ng.geom.gl.core.float_ext_ids = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_color_buffer_float","EXT_color_buffer_half_float"], null);
thi.ng.geom.gl.core.get_extension = (function thi$ng$geom$gl$core$get_extension(gl,ext){
return gl.getExtension(ext);
});
thi.ng.geom.gl.core.get_float_extension = (function thi$ng$geom$gl$core$get_float_extension(gl,spec){
var vec__31302 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31300_SHARP_){
return gl.getExtension(p1__31300_SHARP_);
}),thi.ng.geom.gl.core.float_ext_ids);
var s_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(0),null);
var h_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(1),null);
var s_lin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(2),null);
var h_lin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(3),null);
var s_fbo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(4),null);
var h_fbo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31302,(5),null);
var ext = vec__31302;
return cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (pref,score){
if(cljs.core.truth_((c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(pref) : c.call(null,pref)))){
return score;
} else {
return (0);
}
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"prefer","prefer",1694203909)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(64),(32),(16),(8),(4),(2),(1)], null))));
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,c){
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"texture","texture",-266291651));
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.every_QMARK_(c,cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"require","require",-468001333)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,c);
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"texture","texture",-266291651),s_tex,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),s_lin,new cljs.core.Keyword(null,"renderable","renderable",-1247325782),s_fbo,new cljs.core.Keyword(null,"type","type",1174270348),thi.ng.geom.gl.webgl.constants.float$,new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.Keyword(null,"single","single",1551466437),new cljs.core.Keyword(null,"single","single",1551466437),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"texture","texture",-266291651),h_tex,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),h_lin,new cljs.core.Keyword(null,"renderable","renderable",-1247325782),h_fbo,new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(h_tex)?h_tex.HALF_FLOAT_OES:null),new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.Keyword(null,"half","half",741990005),new cljs.core.Keyword(null,"half","half",741990005),true], null)], null)))));
});
thi.ng.geom.gl.core.get_supported_extensions = (function thi$ng$geom$gl$core$get_supported_extensions(gl){
return gl.getSupportedExtensions();
});
thi.ng.geom.gl.core.make_array_buffer = (function thi$ng$geom$gl$core$make_array_buffer(gl,target,mode,data){
var buffer = gl.createBuffer();
gl.bindBuffer(target,buffer);

gl.bufferData(target,data,mode);

return buffer;
});
thi.ng.geom.gl.core.make_attribute_buffers = (function thi$ng$geom$gl$core$make_attribute_buffers(gl,mode,attribs){
return cljs.core.reduce_kv((function (attribs__$1,id,p__31305){
var map__31306 = p__31305;
var map__31306__$1 = (((((!((map__31306 == null))))?(((((map__31306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31306):map__31306);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31306__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31306__$1,new cljs.core.Keyword(null,"target","target",253001721),thi.ng.geom.gl.webgl.constants.array_buffer);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(attribs__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer","buffer",617295198),thi.ng.geom.gl.core.make_array_buffer(gl,target,mode,data),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764),mode], null));
}),attribs,attribs);
});
thi.ng.geom.gl.core.make_buffers_in_spec = (function thi$ng$geom$gl$core$make_buffers_in_spec(spec,gl,mode){
var spec__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (p1__31308_SHARP_){
return thi.ng.geom.gl.core.make_attribute_buffers(gl,mode,p1__31308_SHARP_);
}));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343),(function (p1__31309_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__31309_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",617295198),thi.ng.geom.gl.core.make_array_buffer(gl,thi.ng.geom.gl.webgl.constants.element_array_buffer,mode,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__31309_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377))),new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764),mode], null)], 0));
}));
} else {
return spec__$1;
}
});
thi.ng.geom.gl.core.update_buffer_in_spec = (function thi$ng$geom$gl$core$update_buffer_in_spec(gl,spec,id,coll){
var map__31310 = (function (){var G__31311 = new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(spec);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__31311) : id.call(null,G__31311));
})();
var map__31310__$1 = (((((!((map__31310 == null))))?(((((map__31310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31310):map__31310);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31310__$1,new cljs.core.Keyword(null,"target","target",253001721));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31310__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31310__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var buffer_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31310__$1,new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31310__$1,new cljs.core.Keyword(null,"size","size",1098693007));
thi.ng.geom.gl.core.fill_vertex_buffer(data,coll,size);

gl.bindBuffer(target,buffer);

gl.bufferData(target,data,buffer_mode);

return gl;
});
thi.ng.geom.gl.core.begin_shader = (function thi$ng$geom$gl$core$begin_shader(gl,shader,uniforms,attribs,indices){
gl.useProgram(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.Keyword(null,"program","program",781564284)));

thi.ng.geom.gl.shaders.apply_default_uniforms(shader,uniforms);

cljs.core.reduce_kv((function (p1__31315_SHARP_,p2__31313_SHARP_,p3__31314_SHARP_){
return thi.ng.geom.gl.shaders.set_uniform(shader,uniforms,p2__31313_SHARP_,p3__31314_SHARP_);
}),null,uniforms);

cljs.core.reduce_kv((function (p1__31318_SHARP_,p2__31316_SHARP_,p3__31317_SHARP_){
return thi.ng.geom.gl.shaders.set_attribute(gl,shader,p2__31316_SHARP_,p3__31317_SHARP_);
}),null,attribs);

if(cljs.core.truth_(indices)){
return gl.bindBuffer(thi.ng.geom.gl.webgl.constants.element_array_buffer,cljs.core.get.cljs$core$IFn$_invoke$arity$2(indices,new cljs.core.Keyword(null,"buffer","buffer",617295198)));
} else {
return null;
}
});
thi.ng.geom.gl.core.end_shader = (function thi$ng$geom$gl$core$end_shader(gl,shader){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__31320_SHARP_,p2__31319_SHARP_){
return thi.ng.geom.gl.shaders.disable_attribute(gl,shader,cljs.core.key(p2__31319_SHARP_));
}),null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.Keyword(null,"attribs","attribs",-137878093)));
});
thi.ng.geom.gl.core.bind_sequentially = (function thi$ng$geom$gl$core$bind_sequentially(coll){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
var temp__5735__auto___31438 = cljs.core.first(coll__$1);
if(cljs.core.truth_(temp__5735__auto___31438)){
var x_31439 = temp__5735__auto___31438;
thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$2(x_31439,i);
} else {
}

var G__31440 = (i + (1));
var G__31441 = cljs.core.next(coll__$1);
i = G__31440;
coll__$1 = G__31441;
continue;
} else {
return null;
}
break;
}
});
/**
 * Takes a GL context and shader spec, sets GL render flags stored
 *   under :state key (only if :state is present).
 */
thi.ng.geom.gl.core.prepare_render_state = (function thi$ng$geom$gl$core$prepare_render_state(gl,p__31321){
var map__31322 = p__31321;
var map__31322__$1 = (((((!((map__31322 == null))))?(((((map__31322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31322):map__31322);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31322__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.truth_(state)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),true))){
thi.ng.geom.gl.core.enable(gl,thi.ng.geom.gl.webgl.constants.depth_test);
} else {
thi.ng.geom.gl.core.disable(gl,thi.ng.geom.gl.webgl.constants.depth_test);
}

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"blend","blend",249565561)))){
var vec__31324_31442 = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"blend-fn","blend-fn",-1294135525));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.src_alpha,thi.ng.geom.gl.webgl.constants.one], null);
}
})();
var src_31443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31324_31442,(0),null);
var dest_31444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31324_31442,(1),null);
var eq_31445 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"blend-eq","blend-eq",1223359361),thi.ng.geom.gl.webgl.constants.func_add);
var G__31327_31450 = gl;
thi.ng.geom.gl.core.enable(G__31327_31450,thi.ng.geom.gl.webgl.constants.blend);

G__31327_31450.blendFunc(src_31443,dest_31444);

G__31327_31450.blendEquation(eq_31445);

} else {
thi.ng.geom.gl.core.disable(gl,thi.ng.geom.gl.webgl.constants.blend);
}

var temp__5735__auto___31451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"tex","tex",1307057959));
if(cljs.core.truth_(temp__5735__auto___31451)){
var tex_31452 = temp__5735__auto___31451;
if(cljs.core.sequential_QMARK_(tex_31452)){
thi.ng.geom.gl.core.bind_sequentially(tex_31452);
} else {
thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$2(tex_31452,(0));
}
} else {
}
} else {
}

return gl;
});
thi.ng.geom.gl.core.compute_normal_matrix = (function thi$ng$geom$gl$core$compute_normal_matrix(m,v){
return thi.ng.math.core.transpose(thi.ng.math.core.invert(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2(v,m)));
});
thi.ng.geom.gl.core.auto_normal_matrix = (function thi$ng$geom$gl$core$auto_normal_matrix(model_id,view_id){
return (function (shader,uniforms){
return thi.ng.geom.gl.core.compute_normal_matrix((function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uniforms,model_id);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),model_id,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})(),(function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uniforms,view_id);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),view_id,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})());
});
});
thi.ng.geom.gl.core.inject_normal_matrix = (function thi$ng$geom$gl$core$inject_normal_matrix(spec,model_mat,view_mat,normal_mat_id){
var model_mat__$1 = (((model_mat instanceof cljs.core.Keyword))?model_mat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(spec)):model_mat);
var view_mat__$1 = (((view_mat instanceof cljs.core.Keyword))?view_mat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(spec)):view_mat);
return cljs.core.assoc_in(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),normal_mat_id], null),thi.ng.geom.gl.core.compute_normal_matrix(model_mat__$1,view_mat__$1));
});
thi.ng.geom.gl.core.draw = (function thi$ng$geom$gl$core$draw(gl,spec){
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"indices","indices",-1218138343)))){
gl.drawElements(mode,cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"num-items","num-items",-887909266)),thi.ng.geom.gl.webgl.constants.unsigned_short,(0));
} else {
gl.drawArrays(mode,(0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051)));
}

return gl;
});
thi.ng.geom.gl.core.draw_with_shader = (function thi$ng$geom$gl$core$draw_with_shader(gl,p__31328){
var map__31329 = p__31328;
var map__31329__$1 = (((((!((map__31329 == null))))?(((((map__31329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31329):map__31329);
var spec = map__31329__$1;
var shader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31329__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
thi.ng.geom.gl.core.prepare_render_state(gl,shader);

thi.ng.geom.gl.core.begin_shader(gl,shader,cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"indices","indices",-1218138343)));

thi.ng.geom.gl.core.draw(gl,spec);

thi.ng.geom.gl.core.end_shader(gl,shader);

return gl;
});

//# sourceMappingURL=thi.ng.geom.gl.core.js.map
