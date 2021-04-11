goog.provide('webgl_30.webgl');
goog.require('cljs.core');
webgl_30.webgl.not_nil_QMARK_ = (function webgl_30$webgl$not_nil_QMARK_(x){
return (!((x == null)));
});
webgl_30.webgl.power_of_two_QMARK_ = (function webgl_30$webgl$power_of_two_QMARK_(x){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((x & (- x)),x)) && ((x > (0))));
});
webgl_30.webgl.get_aspect = (function webgl_30$webgl$get_aspect(gl){
var _PERCENT_ = (function (){var w = (gl["canvas"]["clientWidth"]);
var h = (gl["canvas"]["clientHeight"]);
var a = (w / h);
if(cljs.core.truth_(isNaN(a))){
return (1);
} else {
return a;
}
})();
if(cljs.core.float_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (float? %)"));
}

return _PERCENT_;
});
webgl_30.webgl.create_shader = (function webgl_30$webgl$create_shader(gl,type,source){
var shader = gl.createShader(type);
gl.shaderSource(shader,source);

gl.compileShader(shader);

var success = gl.getShaderParameter(shader,gl.COMPILE_STATUS);
if(cljs.core.truth_(success)){
return shader;
} else {
console.log(gl.getShaderInfoLog(shader));

return gl.deleteShader(shader);
}
});
webgl_30.webgl.create_program = (function webgl_30$webgl$create_program(gl,vertex_shader,fragment_shader){
var program = gl.createProgram();
gl.attachShader(program,vertex_shader);

gl.attachShader(program,fragment_shader);

gl.linkProgram(program);

var success = gl.getProgramParameter(program,gl.LINK_STATUS);
if(cljs.core.truth_(success)){
return program;
} else {
console.log(gl.getProgramInfoLog(program));

return gl.deleteProgram(program);
}
});
webgl_30.webgl.resize_canvas_to_display_size_QMARK_ = (function webgl_30$webgl$resize_canvas_to_display_size_QMARK_(gl){
var canvas = gl.canvas;
var css_to_real_pixels = (1);
var d_width = (function (){var G__547075 = (canvas.clientWidth * css_to_real_pixels);
return Math.floor(G__547075);
})();
var d_height = (function (){var G__547076 = (canvas.clientHeight * css_to_real_pixels);
return Math.floor(G__547076);
})();
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.width,d_width)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.height,d_height)))));
});
webgl_30.webgl.resize_canvas_to_display_size = (function webgl_30$webgl$resize_canvas_to_display_size(gl){
var canvas = gl.canvas;
var css_to_real_pixels = (1);
var d_width = (function (){var G__547077 = (canvas.clientWidth * css_to_real_pixels);
return Math.floor(G__547077);
})();
var d_height = (function (){var G__547078 = (canvas.clientHeight * css_to_real_pixels);
return Math.floor(G__547078);
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.width,d_width)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.height,d_height)))){
} else {
(canvas.height = d_height);

(canvas.width = d_width);
}

return gl;
});
webgl_30.webgl.get_canvas_height = (function webgl_30$webgl$get_canvas_height(gl){
return (gl["canvas"]["height"]);
});
webgl_30.webgl.get_canvas_width = (function webgl_30$webgl$get_canvas_width(gl){
return (gl["canvas"]["width"]);
});
webgl_30.webgl.set_gl_viewport_BANG_ = (function webgl_30$webgl$set_gl_viewport_BANG_(var_args){
var G__547080 = arguments.length;
switch (G__547080) {
case 1:
return webgl_30.webgl.set_gl_viewport_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return webgl_30.webgl.set_gl_viewport_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webgl_30.webgl.set_gl_viewport_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (gl){
var width = webgl_30.webgl.get_canvas_width(gl);
var height = webgl_30.webgl.get_canvas_height(gl);
gl.viewport((0),(0),width,height);

return gl;
}));

(webgl_30.webgl.set_gl_viewport_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (gl,width,height){
if((((!((width == null)))) && ((!((height == null)))))){
gl.viewport((0),(0),width,height);

return gl;
} else {
return webgl_30.webgl.set_gl_viewport_BANG_.cljs$core$IFn$_invoke$arity$1(gl);
}
}));

(webgl_30.webgl.set_gl_viewport_BANG_.cljs$lang$maxFixedArity = 3);

webgl_30.webgl.clear_canvas_BANG_ = (function webgl_30$webgl$clear_canvas_BANG_(var_args){
var G__547082 = arguments.length;
switch (G__547082) {
case 1:
return webgl_30.webgl.clear_canvas_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return webgl_30.webgl.clear_canvas_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return webgl_30.webgl.clear_canvas_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webgl_30.webgl.clear_canvas_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (gl){
return webgl_30.webgl.clear_canvas_BANG_.cljs$core$IFn$_invoke$arity$3(gl,false,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
}));

(webgl_30.webgl.clear_canvas_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (gl,clear_depth_QMARK_){
return webgl_30.webgl.clear_canvas_BANG_.cljs$core$IFn$_invoke$arity$3(gl,clear_depth_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
}));

(webgl_30.webgl.clear_canvas_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (gl,clear_depth_QMARK_,color){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,gl,"clearColor",(function (){var or__4185__auto__ = color;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null);
}
})());

if(cljs.core.truth_(clear_depth_QMARK_)){
gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));
} else {
gl.clear(gl.COLOR_BUFFER_BIT);
}

return gl;
}));

(webgl_30.webgl.clear_canvas_BANG_.cljs$lang$maxFixedArity = 3);

webgl_30.webgl.bind_buffer = (function webgl_30$webgl$bind_buffer(gl,buffer,target){
gl.bindBuffer(target,buffer);

return gl;
});
/**
 * bufferData copies the `src-data` to the GPU.
 */
webgl_30.webgl.buffer_data = (function webgl_30$webgl$buffer_data(gl,p__547083){
var map__547084 = p__547083;
var map__547084__$1 = (((((!((map__547084 == null))))?(((((map__547084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547084):map__547084);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547084__$1,new cljs.core.Keyword(null,"target","target",253001721));
var src_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547084__$1,new cljs.core.Keyword(null,"src-data","src-data",1911227934));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547084__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
if((!((gl == null)))){
} else {
throw (new Error("Assert failed: (some? gl)"));
}

var _PERCENT_ = (function (){
gl.bufferData(target,src_data,usage);

return gl;
})()
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gl,_PERCENT_)){
} else {
throw (new Error("Assert failed: (= gl %)"));
}

return _PERCENT_;
});
webgl_30.webgl.create_buffer = (function webgl_30$webgl$create_buffer(gl,p__547086){
var map__547087 = p__547086;
var map__547087__$1 = (((((!((map__547087 == null))))?(((((map__547087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547087):map__547087);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547087__$1,new cljs.core.Keyword(null,"target","target",253001721));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547087__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547087__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
var buffer = gl.createBuffer();
webgl_30.webgl.buffer_data(webgl_30.webgl.bind_buffer(gl,buffer,target),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"src-data","src-data",1911227934),data,new cljs.core.Keyword(null,"usage","usage",-1583752910),usage], null));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"usage","usage",-1583752910),usage], null);
});
webgl_30.webgl.set_attribute_BANG_ = (function webgl_30$webgl$set_attribute_BANG_(gl,program,p__547089){
var map__547090 = p__547089;
var map__547090__$1 = (((((!((map__547090 == null))))?(((((map__547090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547090):map__547090);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547090__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547090__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547090__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547090__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547090__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547090__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547090__$1,new cljs.core.Keyword(null,"target","target",253001721));
var location = gl.getAttribLocation(program,name);
webgl_30.webgl.bind_buffer(gl,buffer,target);

gl.vertexAttribPointer(location,size,type,normalize,stride,offset);

gl.enableVertexAttribArray(location);

return gl;
});
webgl_30.webgl.set_attributes_BANG_ = (function webgl_30$webgl$set_attributes_BANG_(gl,program,attributes){
var seq__547092_547328 = cljs.core.seq(attributes);
var chunk__547093_547329 = null;
var count__547094_547330 = (0);
var i__547095_547331 = (0);
while(true){
if((i__547095_547331 < count__547094_547330)){
var attribute_547334 = chunk__547093_547329.cljs$core$IIndexed$_nth$arity$2(null,i__547095_547331);
webgl_30.webgl.set_attribute_BANG_(gl,program,attribute_547334);


var G__547335 = seq__547092_547328;
var G__547336 = chunk__547093_547329;
var G__547337 = count__547094_547330;
var G__547338 = (i__547095_547331 + (1));
seq__547092_547328 = G__547335;
chunk__547093_547329 = G__547336;
count__547094_547330 = G__547337;
i__547095_547331 = G__547338;
continue;
} else {
var temp__5735__auto___547339 = cljs.core.seq(seq__547092_547328);
if(temp__5735__auto___547339){
var seq__547092_547340__$1 = temp__5735__auto___547339;
if(cljs.core.chunked_seq_QMARK_(seq__547092_547340__$1)){
var c__4609__auto___547341 = cljs.core.chunk_first(seq__547092_547340__$1);
var G__547342 = cljs.core.chunk_rest(seq__547092_547340__$1);
var G__547343 = c__4609__auto___547341;
var G__547344 = cljs.core.count(c__4609__auto___547341);
var G__547345 = (0);
seq__547092_547328 = G__547342;
chunk__547093_547329 = G__547343;
count__547094_547330 = G__547344;
i__547095_547331 = G__547345;
continue;
} else {
var attribute_547346 = cljs.core.first(seq__547092_547340__$1);
webgl_30.webgl.set_attribute_BANG_(gl,program,attribute_547346);


var G__547350 = cljs.core.next(seq__547092_547340__$1);
var G__547351 = null;
var G__547352 = (0);
var G__547353 = (0);
seq__547092_547328 = G__547350;
chunk__547093_547329 = G__547351;
count__547094_547330 = G__547352;
i__547095_547331 = G__547353;
continue;
}
} else {
}
}
break;
}

return gl;
});
webgl_30.webgl.get_uniform_location = (function webgl_30$webgl$get_uniform_location(gl,program,name){
return gl.getUniformLocation(program,name);
});
webgl_30.webgl.set_uniform_BANG_ = (function webgl_30$webgl$set_uniform_BANG_(gl,program,p__547096){
var map__547097 = p__547096;
var map__547097__$1 = (((((!((map__547097 == null))))?(((((map__547097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547097):map__547097);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547097__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547097__$1,new cljs.core.Keyword(null,"values","values",372645556));
var transpose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547097__$1,new cljs.core.Keyword(null,"transpose","transpose",-474726680));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547097__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var location = webgl_30.webgl.get_uniform_location(gl,program,name);
var values__$1 = (((!((transpose == null))))?cljs.core.cons(transpose,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [values], null)):values);
if(clojure.string.ends_with_QMARK_(type,"v")){
if(cljs.core.vector_QMARK_(values__$1)){
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(gl,type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location,values__$1], 0));
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.js_invoke,gl,type,location,values__$1);
}
} else {
(gl[type]).apply(gl,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(location,values__$1)));
}

return gl;
});
webgl_30.webgl.set_uniforms_BANG_ = (function webgl_30$webgl$set_uniforms_BANG_(var_args){
var G__547100 = arguments.length;
switch (G__547100) {
case 2:
return webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (gl,state){
var objs_547358 = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717)], null)));
var seq__547101_547359 = cljs.core.seq(objs_547358);
var chunk__547103_547360 = null;
var count__547104_547361 = (0);
var i__547105_547362 = (0);
while(true){
if((i__547105_547362 < count__547104_547361)){
var obj_547363 = chunk__547103_547360.cljs$core$IIndexed$_nth$arity$2(null,i__547105_547362);
var vec__547123_547364 = (function (){var fexpr__547126 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"program","program",781564284));
return (fexpr__547126.cljs$core$IFn$_invoke$arity$1 ? fexpr__547126.cljs$core$IFn$_invoke$arity$1(obj_547363) : fexpr__547126.call(null,obj_547363));
})();
var uniforms_547365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__547123_547364,(0),null);
var program_547366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__547123_547364,(1),null);
var seq__547127_547369 = cljs.core.seq(cljs.core.vals(uniforms_547365));
var chunk__547128_547370 = null;
var count__547129_547371 = (0);
var i__547130_547372 = (0);
while(true){
if((i__547130_547372 < count__547129_547371)){
var uniform_547373 = chunk__547128_547370.cljs$core$IIndexed$_nth$arity$2(null,i__547130_547372);
webgl_30.webgl.set_uniform_BANG_(gl,program_547366,uniform_547373);


var G__547374 = seq__547127_547369;
var G__547375 = chunk__547128_547370;
var G__547376 = count__547129_547371;
var G__547377 = (i__547130_547372 + (1));
seq__547127_547369 = G__547374;
chunk__547128_547370 = G__547375;
count__547129_547371 = G__547376;
i__547130_547372 = G__547377;
continue;
} else {
var temp__5735__auto___547380 = cljs.core.seq(seq__547127_547369);
if(temp__5735__auto___547380){
var seq__547127_547381__$1 = temp__5735__auto___547380;
if(cljs.core.chunked_seq_QMARK_(seq__547127_547381__$1)){
var c__4609__auto___547383 = cljs.core.chunk_first(seq__547127_547381__$1);
var G__547384 = cljs.core.chunk_rest(seq__547127_547381__$1);
var G__547385 = c__4609__auto___547383;
var G__547386 = cljs.core.count(c__4609__auto___547383);
var G__547387 = (0);
seq__547127_547369 = G__547384;
chunk__547128_547370 = G__547385;
count__547129_547371 = G__547386;
i__547130_547372 = G__547387;
continue;
} else {
var uniform_547388 = cljs.core.first(seq__547127_547381__$1);
webgl_30.webgl.set_uniform_BANG_(gl,program_547366,uniform_547388);


var G__547389 = cljs.core.next(seq__547127_547381__$1);
var G__547390 = null;
var G__547391 = (0);
var G__547392 = (0);
seq__547127_547369 = G__547389;
chunk__547128_547370 = G__547390;
count__547129_547371 = G__547391;
i__547130_547372 = G__547392;
continue;
}
} else {
}
}
break;
}


var G__547393 = seq__547101_547359;
var G__547394 = chunk__547103_547360;
var G__547395 = count__547104_547361;
var G__547396 = (i__547105_547362 + (1));
seq__547101_547359 = G__547393;
chunk__547103_547360 = G__547394;
count__547104_547361 = G__547395;
i__547105_547362 = G__547396;
continue;
} else {
var temp__5735__auto___547397 = cljs.core.seq(seq__547101_547359);
if(temp__5735__auto___547397){
var seq__547101_547398__$1 = temp__5735__auto___547397;
if(cljs.core.chunked_seq_QMARK_(seq__547101_547398__$1)){
var c__4609__auto___547399 = cljs.core.chunk_first(seq__547101_547398__$1);
var G__547400 = cljs.core.chunk_rest(seq__547101_547398__$1);
var G__547401 = c__4609__auto___547399;
var G__547402 = cljs.core.count(c__4609__auto___547399);
var G__547403 = (0);
seq__547101_547359 = G__547400;
chunk__547103_547360 = G__547401;
count__547104_547361 = G__547402;
i__547105_547362 = G__547403;
continue;
} else {
var obj_547404 = cljs.core.first(seq__547101_547398__$1);
var vec__547131_547405 = (function (){var fexpr__547134 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"program","program",781564284));
return (fexpr__547134.cljs$core$IFn$_invoke$arity$1 ? fexpr__547134.cljs$core$IFn$_invoke$arity$1(obj_547404) : fexpr__547134.call(null,obj_547404));
})();
var uniforms_547406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__547131_547405,(0),null);
var program_547407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__547131_547405,(1),null);
var seq__547135_547408 = cljs.core.seq(cljs.core.vals(uniforms_547406));
var chunk__547136_547409 = null;
var count__547137_547410 = (0);
var i__547138_547411 = (0);
while(true){
if((i__547138_547411 < count__547137_547410)){
var uniform_547412 = chunk__547136_547409.cljs$core$IIndexed$_nth$arity$2(null,i__547138_547411);
webgl_30.webgl.set_uniform_BANG_(gl,program_547407,uniform_547412);


var G__547413 = seq__547135_547408;
var G__547414 = chunk__547136_547409;
var G__547415 = count__547137_547410;
var G__547416 = (i__547138_547411 + (1));
seq__547135_547408 = G__547413;
chunk__547136_547409 = G__547414;
count__547137_547410 = G__547415;
i__547138_547411 = G__547416;
continue;
} else {
var temp__5735__auto___547417__$1 = cljs.core.seq(seq__547135_547408);
if(temp__5735__auto___547417__$1){
var seq__547135_547418__$1 = temp__5735__auto___547417__$1;
if(cljs.core.chunked_seq_QMARK_(seq__547135_547418__$1)){
var c__4609__auto___547419 = cljs.core.chunk_first(seq__547135_547418__$1);
var G__547420 = cljs.core.chunk_rest(seq__547135_547418__$1);
var G__547421 = c__4609__auto___547419;
var G__547422 = cljs.core.count(c__4609__auto___547419);
var G__547423 = (0);
seq__547135_547408 = G__547420;
chunk__547136_547409 = G__547421;
count__547137_547410 = G__547422;
i__547138_547411 = G__547423;
continue;
} else {
var uniform_547424 = cljs.core.first(seq__547135_547418__$1);
webgl_30.webgl.set_uniform_BANG_(gl,program_547407,uniform_547424);


var G__547425 = cljs.core.next(seq__547135_547418__$1);
var G__547426 = null;
var G__547427 = (0);
var G__547428 = (0);
seq__547135_547408 = G__547425;
chunk__547136_547409 = G__547426;
count__547137_547410 = G__547427;
i__547138_547411 = G__547428;
continue;
}
} else {
}
}
break;
}


var G__547429 = cljs.core.next(seq__547101_547398__$1);
var G__547430 = null;
var G__547431 = (0);
var G__547432 = (0);
seq__547101_547359 = G__547429;
chunk__547103_547360 = G__547430;
count__547104_547361 = G__547431;
i__547105_547362 = G__547432;
continue;
}
} else {
}
}
break;
}

return gl;
}));

(webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (gl,program,uniforms){
if((!((gl == null)))){
} else {
throw (new Error("Assert failed: (some? gl)"));
}

if((!((program == null)))){
} else {
throw (new Error("Assert failed: (some? program)"));
}

var _PERCENT_ = (function (){
var seq__547139_547433 = cljs.core.seq(uniforms);
var chunk__547140_547434 = null;
var count__547141_547435 = (0);
var i__547142_547436 = (0);
while(true){
if((i__547142_547436 < count__547141_547435)){
var uniform_547439 = chunk__547140_547434.cljs$core$IIndexed$_nth$arity$2(null,i__547142_547436);
webgl_30.webgl.set_uniform_BANG_(gl,program,uniform_547439);


var G__547441 = seq__547139_547433;
var G__547442 = chunk__547140_547434;
var G__547443 = count__547141_547435;
var G__547444 = (i__547142_547436 + (1));
seq__547139_547433 = G__547441;
chunk__547140_547434 = G__547442;
count__547141_547435 = G__547443;
i__547142_547436 = G__547444;
continue;
} else {
var temp__5735__auto___547445 = cljs.core.seq(seq__547139_547433);
if(temp__5735__auto___547445){
var seq__547139_547446__$1 = temp__5735__auto___547445;
if(cljs.core.chunked_seq_QMARK_(seq__547139_547446__$1)){
var c__4609__auto___547447 = cljs.core.chunk_first(seq__547139_547446__$1);
var G__547448 = cljs.core.chunk_rest(seq__547139_547446__$1);
var G__547449 = c__4609__auto___547447;
var G__547450 = cljs.core.count(c__4609__auto___547447);
var G__547451 = (0);
seq__547139_547433 = G__547448;
chunk__547140_547434 = G__547449;
count__547141_547435 = G__547450;
i__547142_547436 = G__547451;
continue;
} else {
var uniform_547452 = cljs.core.first(seq__547139_547446__$1);
webgl_30.webgl.set_uniform_BANG_(gl,program,uniform_547452);


var G__547453 = cljs.core.next(seq__547139_547446__$1);
var G__547454 = null;
var G__547455 = (0);
var G__547456 = (0);
seq__547139_547433 = G__547453;
chunk__547140_547434 = G__547454;
count__547141_547435 = G__547455;
i__547142_547436 = G__547456;
continue;
}
} else {
}
}
break;
}

return gl;
})()
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gl,_PERCENT_)){
} else {
throw (new Error("Assert failed: (= gl %)"));
}

return _PERCENT_;
}));

(webgl_30.webgl.set_uniforms_BANG_.cljs$lang$maxFixedArity = 3);

webgl_30.webgl.get_context = (function webgl_30$webgl$get_context(canvas_id){
return document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(canvas_id)].join('')).getContext("webgl");
});
webgl_30.webgl.draw_arrays_BANG_ = (function webgl_30$webgl$draw_arrays_BANG_(gl,p__547143){
var map__547144 = p__547143;
var map__547144__$1 = (((((!((map__547144 == null))))?(((((map__547144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547144):map__547144);
var draw_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547144__$1,new cljs.core.Keyword(null,"draw-type","draw-type",788303055));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547144__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547144__$1,new cljs.core.Keyword(null,"count","count",2139924085));
gl.drawArrays(draw_type,offset,count);

return gl;
});
webgl_30.webgl.prepare_canvas_BANG_ = (function webgl_30$webgl$prepare_canvas_BANG_(gl,p__547146){
var map__547147 = p__547146;
var map__547147__$1 = (((((!((map__547147 == null))))?(((((map__547147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547147):map__547147);
var clear_depth_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547147__$1,new cljs.core.Keyword(null,"clear-depth?","clear-depth?",-2095035190));
var clear_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547147__$1,new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547147__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547147__$1,new cljs.core.Keyword(null,"height","height",1025178622));
webgl_30.webgl.clear_canvas_BANG_.cljs$core$IFn$_invoke$arity$3(webgl_30.webgl.set_gl_viewport_BANG_.cljs$core$IFn$_invoke$arity$3(webgl_30.webgl.resize_canvas_to_display_size(gl),width,height),clear_depth_QMARK_,clear_color);

return gl;
});
webgl_30.webgl.use_program_BANG_ = (function webgl_30$webgl$use_program_BANG_(gl,program){
gl.useProgram(program);

return gl;
});
webgl_30.webgl.enable_features_BANG_ = (function webgl_30$webgl$enable_features_BANG_(gl,features){
var seq__547149_547465 = cljs.core.seq((function (){var or__4185__auto__ = features;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var chunk__547150_547466 = null;
var count__547151_547467 = (0);
var i__547152_547468 = (0);
while(true){
if((i__547152_547468 < count__547151_547467)){
var f_547470 = chunk__547150_547466.cljs$core$IIndexed$_nth$arity$2(null,i__547152_547468);
gl.enable(f_547470);


var G__547471 = seq__547149_547465;
var G__547472 = chunk__547150_547466;
var G__547473 = count__547151_547467;
var G__547474 = (i__547152_547468 + (1));
seq__547149_547465 = G__547471;
chunk__547150_547466 = G__547472;
count__547151_547467 = G__547473;
i__547152_547468 = G__547474;
continue;
} else {
var temp__5735__auto___547475 = cljs.core.seq(seq__547149_547465);
if(temp__5735__auto___547475){
var seq__547149_547476__$1 = temp__5735__auto___547475;
if(cljs.core.chunked_seq_QMARK_(seq__547149_547476__$1)){
var c__4609__auto___547477 = cljs.core.chunk_first(seq__547149_547476__$1);
var G__547478 = cljs.core.chunk_rest(seq__547149_547476__$1);
var G__547479 = c__4609__auto___547477;
var G__547480 = cljs.core.count(c__4609__auto___547477);
var G__547481 = (0);
seq__547149_547465 = G__547478;
chunk__547150_547466 = G__547479;
count__547151_547467 = G__547480;
i__547152_547468 = G__547481;
continue;
} else {
var f_547482 = cljs.core.first(seq__547149_547476__$1);
gl.enable(f_547482);


var G__547483 = cljs.core.next(seq__547149_547476__$1);
var G__547484 = null;
var G__547485 = (0);
var G__547486 = (0);
seq__547149_547465 = G__547483;
chunk__547150_547466 = G__547484;
count__547151_547467 = G__547485;
i__547152_547468 = G__547486;
continue;
}
} else {
}
}
break;
}

return gl;
});
webgl_30.webgl.set_texture_param_BANG_ = (function webgl_30$webgl$set_texture_param_BANG_(gl,param){
var f_547487 = cljs.core.first(param);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,gl,f_547487,cljs.core.rest(param));

return gl;
});
webgl_30.webgl.bind_texture_BANG_ = (function webgl_30$webgl$bind_texture_BANG_(gl,type,texture){
gl.bindTexture(type,texture);

return gl;
});
webgl_30.webgl.set_texture_params_BANG_ = (function webgl_30$webgl$set_texture_params_BANG_(gl,texture,type,params){
webgl_30.webgl.bind_texture_BANG_(gl,type,texture);

var seq__547153_547488 = cljs.core.seq(params);
var chunk__547154_547489 = null;
var count__547155_547490 = (0);
var i__547156_547491 = (0);
while(true){
if((i__547156_547491 < count__547155_547490)){
var p_547492 = chunk__547154_547489.cljs$core$IIndexed$_nth$arity$2(null,i__547156_547491);
webgl_30.webgl.set_texture_param_BANG_(gl,p_547492);


var G__547493 = seq__547153_547488;
var G__547494 = chunk__547154_547489;
var G__547495 = count__547155_547490;
var G__547496 = (i__547156_547491 + (1));
seq__547153_547488 = G__547493;
chunk__547154_547489 = G__547494;
count__547155_547490 = G__547495;
i__547156_547491 = G__547496;
continue;
} else {
var temp__5735__auto___547499 = cljs.core.seq(seq__547153_547488);
if(temp__5735__auto___547499){
var seq__547153_547500__$1 = temp__5735__auto___547499;
if(cljs.core.chunked_seq_QMARK_(seq__547153_547500__$1)){
var c__4609__auto___547501 = cljs.core.chunk_first(seq__547153_547500__$1);
var G__547502 = cljs.core.chunk_rest(seq__547153_547500__$1);
var G__547503 = c__4609__auto___547501;
var G__547504 = cljs.core.count(c__4609__auto___547501);
var G__547505 = (0);
seq__547153_547488 = G__547502;
chunk__547154_547489 = G__547503;
count__547155_547490 = G__547504;
i__547156_547491 = G__547505;
continue;
} else {
var p_547506 = cljs.core.first(seq__547153_547500__$1);
webgl_30.webgl.set_texture_param_BANG_(gl,p_547506);


var G__547507 = cljs.core.next(seq__547153_547500__$1);
var G__547508 = null;
var G__547509 = (0);
var G__547510 = (0);
seq__547153_547488 = G__547507;
chunk__547154_547489 = G__547508;
count__547155_547490 = G__547509;
i__547156_547491 = G__547510;
continue;
}
} else {
}
}
break;
}

return gl;
});
webgl_30.webgl.set_textures_BANG_ = (function webgl_30$webgl$set_textures_BANG_(gl,textures){
var seq__547157_547511 = cljs.core.seq(textures);
var chunk__547158_547512 = null;
var count__547159_547513 = (0);
var i__547160_547514 = (0);
while(true){
if((i__547160_547514 < count__547159_547513)){
var map__547165_547515 = chunk__547158_547512.cljs$core$IIndexed$_nth$arity$2(null,i__547160_547514);
var map__547165_547516__$1 = (((((!((map__547165_547515 == null))))?(((((map__547165_547515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547165_547515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547165_547515):map__547165_547515);
var params_547517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547165_547516__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type_547518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547165_547516__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var texture_547519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547165_547516__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
webgl_30.webgl.set_texture_params_BANG_(gl,texture_547519,type_547518,cljs.core.vals(params_547517));


var G__547520 = seq__547157_547511;
var G__547521 = chunk__547158_547512;
var G__547522 = count__547159_547513;
var G__547523 = (i__547160_547514 + (1));
seq__547157_547511 = G__547520;
chunk__547158_547512 = G__547521;
count__547159_547513 = G__547522;
i__547160_547514 = G__547523;
continue;
} else {
var temp__5735__auto___547524 = cljs.core.seq(seq__547157_547511);
if(temp__5735__auto___547524){
var seq__547157_547525__$1 = temp__5735__auto___547524;
if(cljs.core.chunked_seq_QMARK_(seq__547157_547525__$1)){
var c__4609__auto___547526 = cljs.core.chunk_first(seq__547157_547525__$1);
var G__547527 = cljs.core.chunk_rest(seq__547157_547525__$1);
var G__547528 = c__4609__auto___547526;
var G__547529 = cljs.core.count(c__4609__auto___547526);
var G__547530 = (0);
seq__547157_547511 = G__547527;
chunk__547158_547512 = G__547528;
count__547159_547513 = G__547529;
i__547160_547514 = G__547530;
continue;
} else {
var map__547167_547531 = cljs.core.first(seq__547157_547525__$1);
var map__547167_547532__$1 = (((((!((map__547167_547531 == null))))?(((((map__547167_547531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547167_547531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547167_547531):map__547167_547531);
var params_547533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547167_547532__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type_547534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547167_547532__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var texture_547535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547167_547532__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
webgl_30.webgl.set_texture_params_BANG_(gl,texture_547535,type_547534,cljs.core.vals(params_547533));


var G__547536 = cljs.core.next(seq__547157_547525__$1);
var G__547537 = null;
var G__547538 = (0);
var G__547539 = (0);
seq__547157_547511 = G__547536;
chunk__547158_547512 = G__547537;
count__547159_547513 = G__547538;
i__547160_547514 = G__547539;
continue;
}
} else {
}
}
break;
}

return gl;
});
webgl_30.webgl.draw_scene_BANG_ = (function webgl_30$webgl$draw_scene_BANG_(p__547169){
var map__547170 = p__547169;
var map__547170__$1 = (((((!((map__547170 == null))))?(((((map__547170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547170):map__547170);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547170__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var objects_to_draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547170__$1,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717));
var clear_depth_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547170__$1,new cljs.core.Keyword(null,"clear-depth?","clear-depth?",-2095035190));
var clear_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547170__$1,new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274));
var viewport_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547170__$1,new cljs.core.Keyword(null,"viewport-width","viewport-width",-1146235948));
var viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547170__$1,new cljs.core.Keyword(null,"viewport-height","viewport-height",1948518883));
webgl_30.webgl.prepare_canvas_BANG_(gl,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clear-depth?","clear-depth?",-2095035190),clear_depth_QMARK_,new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274),clear_color,new cljs.core.Keyword(null,"width","width",-384071477),viewport_width,new cljs.core.Keyword(null,"height","height",1025178622),viewport_height], null));

var seq__547172_547540 = cljs.core.seq(cljs.core.vals(objects_to_draw));
var chunk__547173_547541 = null;
var count__547174_547542 = (0);
var i__547175_547543 = (0);
while(true){
if((i__547175_547543 < count__547174_547542)){
var map__547180_547544 = chunk__547173_547541.cljs$core$IIndexed$_nth$arity$2(null,i__547175_547543);
var map__547180_547545__$1 = (((((!((map__547180_547544 == null))))?(((((map__547180_547544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547180_547544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547180_547544):map__547180_547544);
var program_547546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547180_547545__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attributes_547547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547180_547545__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var uniforms_547548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547180_547545__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var element_547549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547180_547545__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var features_547550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547180_547545__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var textures_547551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547180_547545__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
webgl_30.webgl.draw_arrays_BANG_(webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$3(webgl_30.webgl.enable_features_BANG_(webgl_30.webgl.use_program_BANG_(gl,program_547546),features_547550),program_547546,cljs.core.vals(uniforms_547548)),element_547549);


var G__547552 = seq__547172_547540;
var G__547553 = chunk__547173_547541;
var G__547554 = count__547174_547542;
var G__547555 = (i__547175_547543 + (1));
seq__547172_547540 = G__547552;
chunk__547173_547541 = G__547553;
count__547174_547542 = G__547554;
i__547175_547543 = G__547555;
continue;
} else {
var temp__5735__auto___547556 = cljs.core.seq(seq__547172_547540);
if(temp__5735__auto___547556){
var seq__547172_547557__$1 = temp__5735__auto___547556;
if(cljs.core.chunked_seq_QMARK_(seq__547172_547557__$1)){
var c__4609__auto___547558 = cljs.core.chunk_first(seq__547172_547557__$1);
var G__547559 = cljs.core.chunk_rest(seq__547172_547557__$1);
var G__547560 = c__4609__auto___547558;
var G__547561 = cljs.core.count(c__4609__auto___547558);
var G__547562 = (0);
seq__547172_547540 = G__547559;
chunk__547173_547541 = G__547560;
count__547174_547542 = G__547561;
i__547175_547543 = G__547562;
continue;
} else {
var map__547182_547563 = cljs.core.first(seq__547172_547557__$1);
var map__547182_547564__$1 = (((((!((map__547182_547563 == null))))?(((((map__547182_547563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547182_547563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547182_547563):map__547182_547563);
var program_547565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547182_547564__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attributes_547566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547182_547564__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var uniforms_547567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547182_547564__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var element_547568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547182_547564__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var features_547569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547182_547564__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var textures_547570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547182_547564__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
webgl_30.webgl.draw_arrays_BANG_(webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$3(webgl_30.webgl.enable_features_BANG_(webgl_30.webgl.use_program_BANG_(gl,program_547565),features_547569),program_547565,cljs.core.vals(uniforms_547567)),element_547568);


var G__547571 = cljs.core.next(seq__547172_547557__$1);
var G__547572 = null;
var G__547573 = (0);
var G__547574 = (0);
seq__547172_547540 = G__547571;
chunk__547173_547541 = G__547572;
count__547174_547542 = G__547573;
i__547175_547543 = G__547574;
continue;
}
} else {
}
}
break;
}

return gl;
});
/**
 * Create a WebGL Program with a Vertex shader and a Fragment shader.
 */
webgl_30.webgl.link_shaders_BANG_ = (function webgl_30$webgl$link_shaders_BANG_(gl,p__547184){
var map__547185 = p__547184;
var map__547185__$1 = (((((!((map__547185 == null))))?(((((map__547185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547185):map__547185);
var vs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547185__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var fs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547185__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244));
var vs__$1 = webgl_30.webgl.create_shader(gl,gl.VERTEX_SHADER,vs);
var fs__$1 = webgl_30.webgl.create_shader(gl,gl.FRAGMENT_SHADER,fs);
var program = webgl_30.webgl.create_program(gl,vs__$1,fs__$1);
return program;
});
webgl_30.webgl.get_attribute = (function webgl_30$webgl$get_attribute(p__547187,attribute_name){
var map__547188 = p__547187;
var map__547188__$1 = (((((!((map__547188 == null))))?(((((map__547188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547188):map__547188);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547188__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__547190){
var map__547191 = p__547190;
var map__547191__$1 = (((((!((map__547191 == null))))?(((((map__547191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547191):map__547191);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547191__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,attribute_name);
}),attributes));
});
webgl_30.webgl.get_rectangle = (function webgl_30$webgl$get_rectangle(p__547193){
var map__547194 = p__547193;
var map__547194__$1 = (((((!((map__547194 == null))))?(((((map__547194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547194):map__547194);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547194__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547194__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547194__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547194__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x1 = x;
var x2 = (x + width);
var y1 = y;
var y2 = (y + height);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1,x2,y1,x1,y2,x1,y2,x2,y1,x2,y2], null);
});
webgl_30.webgl.create_a_texture = (function webgl_30$webgl$create_a_texture(gl){
return gl.createTexture();
});
webgl_30.webgl.img_QMARK_ = (function webgl_30$webgl$img_QMARK_(maybe_img){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((maybe_img["nodeName"]),"IMG");
});
webgl_30.webgl.create_texture_BANG_ = (function webgl_30$webgl$create_texture_BANG_(var_args){
var G__547197 = arguments.length;
switch (G__547197) {
case 2:
return webgl_30.webgl.create_texture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return webgl_30.webgl.create_texture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webgl_30.webgl.create_texture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (gl,texture_data){
return webgl_30.webgl.create_texture_BANG_.cljs$core$IFn$_invoke$arity$3(gl,null,texture_data);
}));

(webgl_30.webgl.create_texture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (gl,texture,texture_data){
var texture__$1 = (((!((texture == null))))?texture:webgl_30.webgl.create_a_texture(gl));
webgl_30.webgl.bind_texture_BANG_(gl,cljs.core.first(texture_data),texture__$1);

cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,gl,"texImage2D",texture_data);

var temp__5735__auto___547593 = webgl_30.webgl.img_QMARK_(cljs.core.last(texture_data));
if(temp__5735__auto___547593){
var img_547596 = temp__5735__auto___547593;
if(((webgl_30.webgl.power_of_two_QMARK_((cljs.core.last(texture_data)["height"]))) && (webgl_30.webgl.power_of_two_QMARK_((cljs.core.last(texture_data)["width"]))))){
gl.generateMipmap(gl.TEXTURE_2D);
} else {
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
}
} else {
}

return texture__$1;
}));

(webgl_30.webgl.create_texture_BANG_.cljs$lang$maxFixedArity = 3);

webgl_30.webgl.create_texture_with_mipmap = (function webgl_30$webgl$create_texture_with_mipmap(var_args){
var G__547199 = arguments.length;
switch (G__547199) {
case 2:
return webgl_30.webgl.create_texture_with_mipmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return webgl_30.webgl.create_texture_with_mipmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webgl_30.webgl.create_texture_with_mipmap.cljs$core$IFn$_invoke$arity$2 = (function (gl,texture_data){
return webgl_30.webgl.create_texture_with_mipmap.cljs$core$IFn$_invoke$arity$3(gl,null,texture_data);
}));

(webgl_30.webgl.create_texture_with_mipmap.cljs$core$IFn$_invoke$arity$3 = (function (gl,texture,texture_data){
var texture__$1 = webgl_30.webgl.create_texture_BANG_.cljs$core$IFn$_invoke$arity$3(gl,texture,texture_data);
gl.generateMipmap(cljs.core.first(texture_data));

return texture__$1;
}));

(webgl_30.webgl.create_texture_with_mipmap.cljs$lang$maxFixedArity = 3);

webgl_30.webgl.create_texture_from_img = (function webgl_30$webgl$create_texture_from_img(var_args){
var G__547201 = arguments.length;
switch (G__547201) {
case 3:
return webgl_30.webgl.create_texture_from_img.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return webgl_30.webgl.create_texture_from_img.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webgl_30.webgl.create_texture_from_img.cljs$core$IFn$_invoke$arity$3 = (function (gl,img_name,on_load){
return webgl_30.webgl.create_texture_from_img.cljs$core$IFn$_invoke$arity$4(gl,img_name,on_load,null);
}));

(webgl_30.webgl.create_texture_from_img.cljs$core$IFn$_invoke$arity$4 = (function (gl,img_name,on_load,texture){
var img = (new Image());
(img["src"] = img_name);

img.addEventListener("load",(function (){
var texture__$1 = (((!((texture == null))))?texture:webgl_30.webgl.create_a_texture(gl));
var G__547202 = webgl_30.webgl.create_texture_BANG_.cljs$core$IFn$_invoke$arity$3(gl,texture__$1,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_2D,(0),gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img], null));
return (on_load.cljs$core$IFn$_invoke$arity$1 ? on_load.cljs$core$IFn$_invoke$arity$1(G__547202) : on_load.call(null,G__547202));
}));

return texture;
}));

(webgl_30.webgl.create_texture_from_img.cljs$lang$maxFixedArity = 4);

webgl_30.webgl.initialize_texture_from_img = (function webgl_30$webgl$initialize_texture_from_img(img_name,on_load){
var img = (new Image());
(img["src"] = img_name);

return img.addEventListener("load",(function (){
return (on_load.cljs$core$IFn$_invoke$arity$1 ? on_load.cljs$core$IFn$_invoke$arity$1(img) : on_load.call(null,img));
}));
});
webgl_30.webgl.create_framebuffer = (function webgl_30$webgl$create_framebuffer(gl){
return gl.createFramebuffer();
});
webgl_30.webgl.bind_framebuffer_BANG_ = (function webgl_30$webgl$bind_framebuffer_BANG_(gl,framebuffer){
gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);

return gl;
});
webgl_30.webgl.attach_texture_to_framebuffer = (function webgl_30$webgl$attach_texture_to_framebuffer(var_args){
var args__4795__auto__ = [];
var len__4789__auto___547613 = arguments.length;
var i__4790__auto___547614 = (0);
while(true){
if((i__4790__auto___547614 < len__4789__auto___547613)){
args__4795__auto__.push((arguments[i__4790__auto___547614]));

var G__547615 = (i__4790__auto___547614 + (1));
i__4790__auto___547614 = G__547615;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return webgl_30.webgl.attach_texture_to_framebuffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(webgl_30.webgl.attach_texture_to_framebuffer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,framebuffer,texture_data){
webgl_30.webgl.bind_framebuffer_BANG_(gl,framebuffer);

cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,gl,"framebufferTexture2D",texture_data);

return gl;
}));

(webgl_30.webgl.attach_texture_to_framebuffer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(webgl_30.webgl.attach_texture_to_framebuffer.cljs$lang$applyTo = (function (seq547203){
var G__547204 = cljs.core.first(seq547203);
var seq547203__$1 = cljs.core.next(seq547203);
var G__547205 = cljs.core.first(seq547203__$1);
var seq547203__$2 = cljs.core.next(seq547203__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__547204,G__547205,seq547203__$2);
}));

webgl_30.webgl.gl_invoke = (function webgl_30$webgl$gl_invoke(gl,fn,args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,gl,fn,args);

return gl;
});
webgl_30.webgl.vertex_attrib_pointer = (function webgl_30$webgl$vertex_attrib_pointer(var_args){
var args__4795__auto__ = [];
var len__4789__auto___547628 = arguments.length;
var i__4790__auto___547629 = (0);
while(true){
if((i__4790__auto___547629 < len__4789__auto___547628)){
args__4795__auto__.push((arguments[i__4790__auto___547629]));

var G__547630 = (i__4790__auto___547629 + (1));
i__4790__auto___547629 = G__547630;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl.vertex_attrib_pointer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl.vertex_attrib_pointer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,args){
return webgl_30.webgl.gl_invoke(gl,"vertexAttribPointer",args);
}));

(webgl_30.webgl.vertex_attrib_pointer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl.vertex_attrib_pointer.cljs$lang$applyTo = (function (seq547206){
var G__547207 = cljs.core.first(seq547206);
var seq547206__$1 = cljs.core.next(seq547206);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__547207,seq547206__$1);
}));

webgl_30.webgl.enable_vertex_attrib_array = (function webgl_30$webgl$enable_vertex_attrib_array(var_args){
var args__4795__auto__ = [];
var len__4789__auto___547638 = arguments.length;
var i__4790__auto___547640 = (0);
while(true){
if((i__4790__auto___547640 < len__4789__auto___547638)){
args__4795__auto__.push((arguments[i__4790__auto___547640]));

var G__547641 = (i__4790__auto___547640 + (1));
i__4790__auto___547640 = G__547641;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl.enable_vertex_attrib_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl.enable_vertex_attrib_array.cljs$core$IFn$_invoke$arity$variadic = (function (gl,args){
return webgl_30.webgl.gl_invoke(gl,"enableVertexAttribArray",args);
}));

(webgl_30.webgl.enable_vertex_attrib_array.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl.enable_vertex_attrib_array.cljs$lang$applyTo = (function (seq547208){
var G__547209 = cljs.core.first(seq547208);
var seq547208__$1 = cljs.core.next(seq547208);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__547209,seq547208__$1);
}));

webgl_30.webgl.attribute = (function webgl_30$webgl$attribute(gl,program,p__547210){
var map__547211 = p__547210;
var map__547211__$1 = (((((!((map__547211 == null))))?(((((map__547211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547211):map__547211);
var attribute = map__547211__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547211__$1,new cljs.core.Keyword(null,"target","target",253001721));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547211__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547211__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547211__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547211__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547211__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547211__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547211__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
var buffer = gl.createBuffer();
var location = gl.getAttribLocation(program,name);
webgl_30.webgl.enable_vertex_attrib_array.cljs$core$IFn$_invoke$arity$variadic(webgl_30.webgl.vertex_attrib_pointer.cljs$core$IFn$_invoke$arity$variadic(webgl_30.webgl.buffer_data(webgl_30.webgl.bind_buffer(gl,buffer,(function (){var or__4185__auto__ = target;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.ARRAY_BUFFER;
}
})()),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__4185__auto__ = target;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.ARRAY_BUFFER;
}
})(),new cljs.core.Keyword(null,"src-data","src-data",1911227934),data,new cljs.core.Keyword(null,"usage","usage",-1583752910),(function (){var or__4185__auto__ = usage;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.STATIC_DRAW;
}
})()], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location,size,(function (){var or__4185__auto__ = type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.FLOAT;
}
})(),(function (){var or__4185__auto__ = normalize;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return false;
}
})(),(function (){var or__4185__auto__ = stride;
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
})()], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribute,new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer),new cljs.core.Keyword(null,"location","location",1815599388),location),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__4185__auto__ = target;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.ARRAY_BUFFER;
}
})()),new cljs.core.Keyword(null,"usage","usage",-1583752910),(function (){var or__4185__auto__ = usage;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.STATIC_DRAW;
}
})()),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4185__auto__ = type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.FLOAT;
}
})()),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),(function (){var or__4185__auto__ = normalize;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return false;
}
})()),new cljs.core.Keyword(null,"stride","stride",-1172818435),(function (){var or__4185__auto__ = stride;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"offset","offset",296498311),(function (){var or__4185__auto__ = offset;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})());
});
webgl_30.webgl.framebuffer_complete_QMARK_ = (function webgl_30$webgl$framebuffer_complete_QMARK_(gl){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gl.checkFramebufferStatus(gl.FRAMEBUFFER),gl.FRAMEBUFFER_COMPLETE);
});
/**
 * assign an pixels to a texture object
 */
webgl_30.webgl.pixels__GT_object = (function webgl_30$webgl$pixels__GT_object(var_args){
var args__4795__auto__ = [];
var len__4789__auto___547685 = arguments.length;
var i__4790__auto___547686 = (0);
while(true){
if((i__4790__auto___547686 < len__4789__auto___547685)){
args__4795__auto__.push((arguments[i__4790__auto___547686]));

var G__547687 = (i__4790__auto___547686 + (1));
i__4790__auto___547686 = G__547687;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return webgl_30.webgl.pixels__GT_object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(webgl_30.webgl.pixels__GT_object.cljs$core$IFn$_invoke$arity$variadic = (function (gl,texture,texture_data){
webgl_30.webgl.gl_invoke(webgl_30.webgl.bind_texture_BANG_(gl,gl.TEXTURE_2D,texture),"texImage2D",texture_data);

return gl;
}));

(webgl_30.webgl.pixels__GT_object.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(webgl_30.webgl.pixels__GT_object.cljs$lang$applyTo = (function (seq547213){
var G__547214 = cljs.core.first(seq547213);
var seq547213__$1 = cljs.core.next(seq547213);
var G__547215 = cljs.core.first(seq547213__$1);
var seq547213__$2 = cljs.core.next(seq547213__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__547214,G__547215,seq547213__$2);
}));

webgl_30.webgl.img_pow_2_QMARK_ = (function webgl_30$webgl$img_pow_2_QMARK_(img){
var w = (img["width"]);
var h = (img["height"]);
return ((webgl_30.webgl.power_of_two_QMARK_(w)) && (webgl_30.webgl.power_of_two_QMARK_(h)));
});
webgl_30.webgl.generate_mipmap_BANG_ = (function webgl_30$webgl$generate_mipmap_BANG_(gl){
gl.generateMipmap(gl.TEXTURE_2D);

return gl;
});
webgl_30.webgl.set_tex_parameteri_BANG_ = (function webgl_30$webgl$set_tex_parameteri_BANG_(gl,p__547216){
var map__547217 = p__547216;
var map__547217__$1 = (((((!((map__547217 == null))))?(((((map__547217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547217):map__547217);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547217__$1,new cljs.core.Keyword(null,"target","target",253001721));
var p_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547217__$1,new cljs.core.Keyword(null,"p-name","p-name",-1046890264));
var param = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547217__$1,new cljs.core.Keyword(null,"param","param",2013631823));
gl.texParameteri((function (){var or__4185__auto__ = target;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.TEXTURE_2D;
}
})(),p_name,param);

return gl;
});
webgl_30.webgl.texture_pixels = (function webgl_30$webgl$texture_pixels(gl,p__547219){
var map__547220 = p__547219;
var map__547220__$1 = (((((!((map__547220 == null))))?(((((map__547220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547220):map__547220);
var data = map__547220__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"target","target",253001721));
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"border","border",1444987323));
var pixels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"pixels","pixels",-40523077));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dont_allocate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"dont-allocate?","dont-allocate?",1712109823));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params_i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"params-i","params-i",-1093656573));
var internalformat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"internalformat","internalformat",1241874311));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547220__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var texture = webgl_30.webgl.create_a_texture(gl);
var target__$1 = (function (){var or__4185__auto__ = target;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.TEXTURE_2D;
}
})();
var level__$1 = (function (){var or__4185__auto__ = level;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var internalformat__$1 = (function (){var or__4185__auto__ = internalformat;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.RGBA;
}
})();
var format__$1 = (function (){var or__4185__auto__ = format;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.RGBA;
}
})();
var type__$1 = (function (){var or__4185__auto__ = type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.UNSIGNED_BYTE;
}
})();
var dont_allocate_QMARK___$1 = (function (){var or__4185__auto__ = dont_allocate_QMARK_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return false;
}
})();
if(cljs.core.not(dont_allocate_QMARK___$1)){
webgl_30.webgl.pixels__GT_object.cljs$core$IFn$_invoke$arity$variadic(gl,texture,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target__$1,level__$1,internalformat__$1,width,height,border,format__$1,type__$1,pixels], 0));
} else {
webgl_30.webgl.bind_texture_BANG_(gl,gl.TEXTURE_2D,texture);
}

var seq__547222_547709 = cljs.core.seq(cljs.core.vals(params_i));
var chunk__547223_547710 = null;
var count__547224_547711 = (0);
var i__547225_547712 = (0);
while(true){
if((i__547225_547712 < count__547224_547711)){
var param_i_547715 = chunk__547223_547710.cljs$core$IIndexed$_nth$arity$2(null,i__547225_547712);
webgl_30.webgl.set_tex_parameteri_BANG_(gl,param_i_547715);


var G__547717 = seq__547222_547709;
var G__547718 = chunk__547223_547710;
var G__547719 = count__547224_547711;
var G__547720 = (i__547225_547712 + (1));
seq__547222_547709 = G__547717;
chunk__547223_547710 = G__547718;
count__547224_547711 = G__547719;
i__547225_547712 = G__547720;
continue;
} else {
var temp__5735__auto___547721 = cljs.core.seq(seq__547222_547709);
if(temp__5735__auto___547721){
var seq__547222_547723__$1 = temp__5735__auto___547721;
if(cljs.core.chunked_seq_QMARK_(seq__547222_547723__$1)){
var c__4609__auto___547725 = cljs.core.chunk_first(seq__547222_547723__$1);
var G__547726 = cljs.core.chunk_rest(seq__547222_547723__$1);
var G__547727 = c__4609__auto___547725;
var G__547728 = cljs.core.count(c__4609__auto___547725);
var G__547729 = (0);
seq__547222_547709 = G__547726;
chunk__547223_547710 = G__547727;
count__547224_547711 = G__547728;
i__547225_547712 = G__547729;
continue;
} else {
var param_i_547730 = cljs.core.first(seq__547222_547723__$1);
webgl_30.webgl.set_tex_parameteri_BANG_(gl,param_i_547730);


var G__547731 = cljs.core.next(seq__547222_547723__$1);
var G__547732 = null;
var G__547733 = (0);
var G__547734 = (0);
seq__547222_547709 = G__547731;
chunk__547223_547710 = G__547732;
count__547224_547711 = G__547733;
i__547225_547712 = G__547734;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"target","target",253001721),target__$1),new cljs.core.Keyword(null,"texture-obj","texture-obj",-1787109150),texture),new cljs.core.Keyword(null,"level","level",1290497552),level__$1),new cljs.core.Keyword(null,"internalformat","internalformat",1241874311),internalformat__$1),new cljs.core.Keyword(null,"format","format",-1306924766),format__$1),new cljs.core.Keyword(null,"type","type",1174270348),type__$1);
});
/**
 * we need to:
 *  pre to this, create buffer and call bufferData on them for both texture data and object data
 * 
 *  1) init texture -----> load the img, and when onload is done, goto next step
 *  2) gl.createTexture
 *     gl.getUniformLocation(gl.program, 'u_sampler')
 *     activate and bind texture, set text params, call uniformi0, then we can draw.
 *  
 */
webgl_30.webgl.texture_img = (function webgl_30$webgl$texture_img(gl,p__547226){
var map__547227 = p__547226;
var map__547227__$1 = (((((!((map__547227 == null))))?(((((map__547227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547227):map__547227);
var data = map__547227__$1;
var pixels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547227__$1,new cljs.core.Keyword(null,"pixels","pixels",-40523077));
var params_i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547227__$1,new cljs.core.Keyword(null,"params-i","params-i",-1093656573));
var mipmap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547227__$1,new cljs.core.Keyword(null,"mipmap?","mipmap?",1352256811));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547227__$1,new cljs.core.Keyword(null,"target","target",253001721));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547227__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var internalformat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547227__$1,new cljs.core.Keyword(null,"internalformat","internalformat",1241874311));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547227__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547227__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var texture = webgl_30.webgl.create_a_texture(gl);
var target__$1 = (function (){var or__4185__auto__ = target;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.TEXTURE_2D;
}
})();
var level__$1 = (function (){var or__4185__auto__ = level;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var internalformat__$1 = (function (){var or__4185__auto__ = internalformat;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.RGBA;
}
})();
var format__$1 = (function (){var or__4185__auto__ = format;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.RGBA;
}
})();
var type__$1 = (function (){var or__4185__auto__ = type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.UNSIGNED_BYTE;
}
})();
webgl_30.webgl.pixels__GT_object.cljs$core$IFn$_invoke$arity$variadic(gl,texture,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target__$1,level__$1,internalformat__$1,format__$1,type__$1,pixels], 0));

if(cljs.core.truth_(mipmap_QMARK_)){
if(webgl_30.webgl.img_pow_2_QMARK_(pixels)){
webgl_30.webgl.generate_mipmap_BANG_(gl);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Img not power of two..."], 0));
}
} else {
}

var seq__547229_547755 = cljs.core.seq(cljs.core.vals(params_i));
var chunk__547230_547756 = null;
var count__547231_547757 = (0);
var i__547232_547758 = (0);
while(true){
if((i__547232_547758 < count__547231_547757)){
var param_i_547759 = chunk__547230_547756.cljs$core$IIndexed$_nth$arity$2(null,i__547232_547758);
webgl_30.webgl.set_tex_parameteri_BANG_(gl,param_i_547759);


var G__547760 = seq__547229_547755;
var G__547761 = chunk__547230_547756;
var G__547762 = count__547231_547757;
var G__547763 = (i__547232_547758 + (1));
seq__547229_547755 = G__547760;
chunk__547230_547756 = G__547761;
count__547231_547757 = G__547762;
i__547232_547758 = G__547763;
continue;
} else {
var temp__5735__auto___547764 = cljs.core.seq(seq__547229_547755);
if(temp__5735__auto___547764){
var seq__547229_547765__$1 = temp__5735__auto___547764;
if(cljs.core.chunked_seq_QMARK_(seq__547229_547765__$1)){
var c__4609__auto___547766 = cljs.core.chunk_first(seq__547229_547765__$1);
var G__547767 = cljs.core.chunk_rest(seq__547229_547765__$1);
var G__547768 = c__4609__auto___547766;
var G__547769 = cljs.core.count(c__4609__auto___547766);
var G__547770 = (0);
seq__547229_547755 = G__547767;
chunk__547230_547756 = G__547768;
count__547231_547757 = G__547769;
i__547232_547758 = G__547770;
continue;
} else {
var param_i_547772 = cljs.core.first(seq__547229_547765__$1);
webgl_30.webgl.set_tex_parameteri_BANG_(gl,param_i_547772);


var G__547774 = cljs.core.next(seq__547229_547765__$1);
var G__547775 = null;
var G__547776 = (0);
var G__547777 = (0);
seq__547229_547755 = G__547774;
chunk__547230_547756 = G__547775;
count__547231_547757 = G__547776;
i__547232_547758 = G__547777;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"target","target",253001721),target__$1),new cljs.core.Keyword(null,"texture-obj","texture-obj",-1787109150),texture),new cljs.core.Keyword(null,"level","level",1290497552),level__$1),new cljs.core.Keyword(null,"internalformat","internalformat",1241874311),internalformat__$1),new cljs.core.Keyword(null,"format","format",-1306924766),format__$1),new cljs.core.Keyword(null,"type","type",1174270348),type__$1);
});
webgl_30.webgl.framebuffer_texture_2D = (function webgl_30$webgl$framebuffer_texture_2D(var_args){
var args__4795__auto__ = [];
var len__4789__auto___547778 = arguments.length;
var i__4790__auto___547780 = (0);
while(true){
if((i__4790__auto___547780 < len__4789__auto___547778)){
args__4795__auto__.push((arguments[i__4790__auto___547780]));

var G__547781 = (i__4790__auto___547780 + (1));
i__4790__auto___547780 = G__547781;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl.framebuffer_texture_2D.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl.framebuffer_texture_2D.cljs$core$IFn$_invoke$arity$variadic = (function (gl,args){
return webgl_30.webgl.gl_invoke(gl,"framebufferTexture2D",args);
}));

(webgl_30.webgl.framebuffer_texture_2D.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl.framebuffer_texture_2D.cljs$lang$applyTo = (function (seq547233){
var G__547234 = cljs.core.first(seq547233);
var seq547233__$1 = cljs.core.next(seq547233);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__547234,seq547233__$1);
}));

/**
 * Attach a texture object specified by texture to the framebuffer object bound by target.
 */
webgl_30.webgl.texture__GT_framebuffer = (function webgl_30$webgl$texture__GT_framebuffer(gl,p__547235){
var map__547236 = p__547235;
var map__547236__$1 = (((((!((map__547236 == null))))?(((((map__547236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547236):map__547236);
var framebuffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547236__$1,new cljs.core.Keyword(null,"framebuffer","framebuffer",-1339031455));
var attachment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547236__$1,new cljs.core.Keyword(null,"attachment","attachment",-956025313));
var textarget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547236__$1,new cljs.core.Keyword(null,"textarget","textarget",-1211015724));
var texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547236__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547236__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var attachment__$1 = (function (){var or__4185__auto__ = attachment;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.COLOR_ATTACHMENT0;
}
})();
var textarget__$1 = (function (){var or__4185__auto__ = textarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.TEXTURE_2D;
}
})();
var level__$1 = (function (){var or__4185__auto__ = level;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
webgl_30.webgl.framebuffer_texture_2D.cljs$core$IFn$_invoke$arity$variadic(webgl_30.webgl.bind_framebuffer_BANG_(gl,framebuffer),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.FRAMEBUFFER,attachment__$1,textarget__$1,texture,level__$1], 0));

return gl;
});
webgl_30.webgl.framebuffer = (function webgl_30$webgl$framebuffer(gl,p__547238){
var map__547239 = p__547238;
var map__547239__$1 = (((((!((map__547239 == null))))?(((((map__547239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__547239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__547239):map__547239);
var texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__547239__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var fb = gl.createFramebuffer();
webgl_30.webgl.texture__GT_framebuffer(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"framebuffer","framebuffer",-1339031455),fb,new cljs.core.Keyword(null,"texture","texture",-266291651),texture], null));

return fb;
});
webgl_30.webgl.clear_color_BANG_ = (function webgl_30$webgl$clear_color_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___547796 = arguments.length;
var i__4790__auto___547797 = (0);
while(true){
if((i__4790__auto___547797 < len__4789__auto___547796)){
args__4795__auto__.push((arguments[i__4790__auto___547797]));

var G__547798 = (i__4790__auto___547797 + (1));
i__4790__auto___547797 = G__547798;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl.clear_color_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl.clear_color_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,colors){
return webgl_30.webgl.gl_invoke(gl,"clearColor",colors);
}));

(webgl_30.webgl.clear_color_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl.clear_color_BANG_.cljs$lang$applyTo = (function (seq547241){
var G__547242 = cljs.core.first(seq547241);
var seq547241__$1 = cljs.core.next(seq547241);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__547242,seq547241__$1);
}));

webgl_30.webgl.clear_BANG_ = (function webgl_30$webgl$clear_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___547803 = arguments.length;
var i__4790__auto___547804 = (0);
while(true){
if((i__4790__auto___547804 < len__4789__auto___547803)){
args__4795__auto__.push((arguments[i__4790__auto___547804]));

var G__547807 = (i__4790__auto___547804 + (1));
i__4790__auto___547804 = G__547807;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,bits){
var bit_colors_547812 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_or,bits);
gl.clear(bit_colors_547812);

return gl;
}));

(webgl_30.webgl.clear_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl.clear_BANG_.cljs$lang$applyTo = (function (seq547243){
var G__547244 = cljs.core.first(seq547243);
var seq547243__$1 = cljs.core.next(seq547243);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__547244,seq547243__$1);
}));


//# sourceMappingURL=webgl_30.webgl.js.map
