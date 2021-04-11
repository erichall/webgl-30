goog.provide('webgl_tutorial.bare_bone');
goog.require('cljs.core');
webgl_tutorial.bare_bone.init_BANG_ = (function webgl_tutorial$bare_bone$init_BANG_(){
return null;
});
webgl_tutorial.bare_bone.reload_BANG_ = (function webgl_tutorial$bare_bone$reload_BANG_(){
return null;
});
webgl_tutorial.bare_bone.canvas = document.querySelector("#main");
webgl_tutorial.bare_bone.gl = webgl_tutorial.bare_bone.canvas.getContext("webgl");
webgl_tutorial.bare_bone.shaders = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vs","vs",-2022097090),"\n   attribute vec2 a_position;\n   uniform vec2 u_resolution;\n\n    void main() {\n      vec2 zeroToOne = a_position / u_resolution;\n      vec2 zeroToTwo = zeroToOne * 2.0;\n      vec2 clipSpace = zeroToTwo - 1.0;\n\n      gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n    }\n   ",new cljs.core.Keyword(null,"fs","fs",-2122926244),"precision mediump float;\n     uniform vec4 u_color;\n     void main() {\n       gl_FragColor = u_color;\n     }\n   "], null);
webgl_tutorial.bare_bone.create_shader = (function webgl_tutorial$bare_bone$create_shader(gl,type,source){
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
webgl_tutorial.bare_bone.create_program = (function webgl_tutorial$bare_bone$create_program(gl,vertex_shader,fragment_shader){
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
webgl_tutorial.bare_bone.resize_canvas_to_display_size = (function webgl_tutorial$bare_bone$resize_canvas_to_display_size(gl){
var canvas = gl.canvas;
var css_to_real_pixels = (function (){var or__4185__auto__ = window.devicePixelRatio;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})();
var d_width = (function (){var G__30572 = (canvas.clientWidth * css_to_real_pixels);
return Math.floor(G__30572);
})();
var d_height = (function (){var G__30573 = (canvas.clientHeight * css_to_real_pixels);
return Math.floor(G__30573);
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.width,d_width)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(canvas.height,d_height)))){
return null;
} else {
(canvas.height = d_height);

return (canvas.width = d_width);
}
});
webgl_tutorial.bare_bone.set_gl_viewport_BANG_ = (function webgl_tutorial$bare_bone$set_gl_viewport_BANG_(gl){
var width = (gl["canvas"]["width"]);
var height = (gl["canvas"]["height"]);
return gl.viewport((0),(0),width,height);
});
webgl_tutorial.bare_bone.clear_canvas_BANG_ = (function webgl_tutorial$bare_bone$clear_canvas_BANG_(gl){
gl.clearColor((0),(0),(0),(0));

return gl.clear(gl.COLOR_BUFFER_BIT);
});
webgl_tutorial.bare_bone.set_rectangle_BANG_ = (function webgl_tutorial$bare_bone$set_rectangle_BANG_(gl,x,y,width,height){
var x1 = x;
var x2 = (x + width);
var y1 = y;
var y2 = (y + height);
return gl.bufferData(gl.ARRAY_BUFFER,(new Float32Array(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1,x2,y1,x1,y2,x1,y2,x2,y1,x2,y2], null))),gl.STATIC_DRAW);
});
webgl_tutorial.bare_bone.random_int = (function webgl_tutorial$bare_bone$random_int(range){
var G__30574 = (range * Math.random());
return Math.floor(G__30574);
});
webgl_tutorial.bare_bone.initialize_gl_BANG_ = (function webgl_tutorial$bare_bone$initialize_gl_BANG_(gl){
var vs = webgl_tutorial.bare_bone.create_shader(gl,gl.VERTEX_SHADER,new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(webgl_tutorial.bare_bone.shaders));
var fs = webgl_tutorial.bare_bone.create_shader(gl,gl.FRAGMENT_SHADER,new cljs.core.Keyword(null,"fs","fs",-2122926244).cljs$core$IFn$_invoke$arity$1(webgl_tutorial.bare_bone.shaders));
var program = webgl_tutorial.bare_bone.create_program(gl,vs,fs);
return program;
});
webgl_tutorial.bare_bone.draw_scene_BANG_ = (function webgl_tutorial$bare_bone$draw_scene_BANG_(gl,program){
var position_attribute_location = gl.getAttribLocation(program,"a_position");
var uniform_location = gl.getUniformLocation(program,"u_resolution");
var position_buffer = gl.createBuffer();
webgl_tutorial.bare_bone.resize_canvas_to_display_size(gl);

webgl_tutorial.bare_bone.set_gl_viewport_BANG_(gl);

webgl_tutorial.bare_bone.clear_canvas_BANG_(gl);

gl.useProgram(program);

gl.enableVertexAttribArray(position_attribute_location);

gl.bindBuffer(gl.ARRAY_BUFFER,position_buffer);

gl.uniform2f(uniform_location,(gl["canvas"]["width"]),(gl["canvas"]["height"]));

gl.bindBuffer(gl.ARRAY_BUFFER,position_buffer);

var size_30579 = (2);
var type_30580 = gl.FLOAT;
var normalize_30581 = false;
var stride_30582 = (0);
var offset_30583 = (0);
gl.vertexAttribPointer(position_attribute_location,size_30579,type_30580,normalize_30581,stride_30582,offset_30583);

var uniform_color_location = gl.getUniformLocation(program,"u_color");
var seq__30575 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(10)));
var chunk__30576 = null;
var count__30577 = (0);
var i__30578 = (0);
while(true){
if((i__30578 < count__30577)){
var ii = chunk__30576.cljs$core$IIndexed$_nth$arity$2(null,i__30578);
webgl_tutorial.bare_bone.set_rectangle_BANG_(gl,webgl_tutorial.bare_bone.random_int((300)),webgl_tutorial.bare_bone.random_int((300)),webgl_tutorial.bare_bone.random_int((300)),webgl_tutorial.bare_bone.random_int((300)));

gl.uniform4f(uniform_color_location,Math.random(),Math.random(),Math.random(),(1));

gl.drawArrays(gl.TRIANGLES,(0),(6));


var G__30584 = seq__30575;
var G__30585 = chunk__30576;
var G__30586 = count__30577;
var G__30587 = (i__30578 + (1));
seq__30575 = G__30584;
chunk__30576 = G__30585;
count__30577 = G__30586;
i__30578 = G__30587;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30575);
if(temp__5735__auto__){
var seq__30575__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30575__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__30575__$1);
var G__30588 = cljs.core.chunk_rest(seq__30575__$1);
var G__30589 = c__4609__auto__;
var G__30590 = cljs.core.count(c__4609__auto__);
var G__30591 = (0);
seq__30575 = G__30588;
chunk__30576 = G__30589;
count__30577 = G__30590;
i__30578 = G__30591;
continue;
} else {
var ii = cljs.core.first(seq__30575__$1);
webgl_tutorial.bare_bone.set_rectangle_BANG_(gl,webgl_tutorial.bare_bone.random_int((300)),webgl_tutorial.bare_bone.random_int((300)),webgl_tutorial.bare_bone.random_int((300)),webgl_tutorial.bare_bone.random_int((300)));

gl.uniform4f(uniform_color_location,Math.random(),Math.random(),Math.random(),(1));

gl.drawArrays(gl.TRIANGLES,(0),(6));


var G__30592 = cljs.core.next(seq__30575__$1);
var G__30593 = null;
var G__30594 = (0);
var G__30595 = (0);
seq__30575 = G__30592;
chunk__30576 = G__30593;
count__30577 = G__30594;
i__30578 = G__30595;
continue;
}
} else {
return null;
}
}
break;
}
});
var program_30596 = webgl_tutorial.bare_bone.initialize_gl_BANG_(webgl_tutorial.bare_bone.gl);
webgl_tutorial.bare_bone.draw_scene_BANG_(webgl_tutorial.bare_bone.gl,program_30596);

//# sourceMappingURL=webgl_tutorial.bare_bone.js.map
