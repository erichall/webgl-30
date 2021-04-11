goog.provide('webgl_30.webgl_id2');
goog.require('cljs.core');
webgl_30.webgl_id2.gl_invoke = (function webgl_30$webgl_id2$gl_invoke(gl,fn,args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,gl,fn,args);
if(cljs.core.truth_(res)){
return res;
} else {
return gl;
}
});
webgl_30.webgl_id2.get_context = (function webgl_30$webgl_id2$get_context(canvas_id){
return document.getElementById(canvas_id).getContext("webgl");
});
webgl_30.webgl_id2.get_canvas = (function webgl_30$webgl_id2$get_canvas(gl){
return (gl["canvas"]);
});
webgl_30.webgl_id2.canvas_height = (function webgl_30$webgl_id2$canvas_height(gl){
return (gl["canvas"]["height"]);
});
webgl_30.webgl_id2.canvas_width = (function webgl_30$webgl_id2$canvas_width(gl){
return (gl["canvas"]["width"]);
});
webgl_30.webgl_id2.shader_source = (function webgl_30$webgl_id2$shader_source(gl,shader,source){
gl.shaderSource(shader,source);

return gl;
});
webgl_30.webgl_id2.compile_shader = (function webgl_30$webgl_id2$compile_shader(gl,shader){
return gl.compileShader(shader);
});
webgl_30.webgl_id2.get_shader_parameter = (function webgl_30$webgl_id2$get_shader_parameter(gl,shader,param){
return gl.getShaderParameter(shader,param);
});
webgl_30.webgl_id2.get_shader_info_log = (function webgl_30$webgl_id2$get_shader_info_log(gl,shader){
return gl.getShaderInfoLog(shader);
});
/**
 * Create a WebGL shader object
 */
webgl_30.webgl_id2.load_shader = (function webgl_30$webgl_id2$load_shader(gl,type,source){
var shader = gl.createShader(type);
var G__26505_26657 = gl;
webgl_30.webgl_id2.shader_source(G__26505_26657,shader,source);

webgl_30.webgl_id2.compile_shader(G__26505_26657,shader);


if(cljs.core.not(webgl_30.webgl_id2.get_shader_parameter(gl,shader,gl.COMPILE_STATUS))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed to compile shader: ",webgl_30.webgl_id2.get_shader_info_log(gl,shader)], 0));
} else {
return shader;
}
});
webgl_30.webgl_id2.cp = (function webgl_30$webgl_id2$cp(gl){
return gl.createProgram();
});
webgl_30.webgl_id2.link_program = (function webgl_30$webgl_id2$link_program(gl,program){
return gl.linkProgram(program);
});
webgl_30.webgl_id2.attach_shader = (function webgl_30$webgl_id2$attach_shader(gl,program,s){
return gl.attachShader(program,s);
});
webgl_30.webgl_id2.get_program_parameter = (function webgl_30$webgl_id2$get_program_parameter(gl,program,param){
return gl.getProgramParameter(program,param);
});
webgl_30.webgl_id2.get_program_info_log = (function webgl_30$webgl_id2$get_program_info_log(gl,program){
return gl.getProgramInfoLog(program);
});
webgl_30.webgl_id2.create_program = (function webgl_30$webgl_id2$create_program(gl,vertex_shader,fragment_shader){
var vs = webgl_30.webgl_id2.load_shader(gl,gl.VERTEX_SHADER,vertex_shader);
var fs = webgl_30.webgl_id2.load_shader(gl,gl.FRAGMENT_SHADER,fragment_shader);
if(cljs.core.truth_((function (){var or__4185__auto__ = fs;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return vs;
}
})())){
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to load shaders..."], 0));
}

var program = webgl_30.webgl_id2.cp(gl);
if(cljs.core.truth_(program)){
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to create program..."], 0));
}

var G__26506_26658 = gl;
webgl_30.webgl_id2.attach_shader(G__26506_26658,program,vs);

webgl_30.webgl_id2.attach_shader(G__26506_26658,program,fs);

webgl_30.webgl_id2.link_program(G__26506_26658,program);


if(cljs.core.not(webgl_30.webgl_id2.get_program_parameter(gl,program,gl.LINK_STATUS))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to link program...",webgl_30.webgl_id2.get_program_info_log(gl,program)], 0));
} else {
return program;
}
});
webgl_30.webgl_id2.use_program = (function webgl_30$webgl_id2$use_program(gl,program){
return gl.useProgram(program);
});
/**
 * Create a program with the given shaders and make it current.
 *   Returns the program
 */
webgl_30.webgl_id2.init_shaders = (function webgl_30$webgl_id2$init_shaders(gl,vs,fs){
var program = webgl_30.webgl_id2.create_program(gl,vs,fs);
webgl_30.webgl_id2.use_program(gl,program);

return program;
});
webgl_30.webgl_id2.clear_color_BANG_ = (function webgl_30$webgl_id2$clear_color_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26659 = arguments.length;
var i__4790__auto___26660 = (0);
while(true){
if((i__4790__auto___26660 < len__4789__auto___26659)){
args__4795__auto__.push((arguments[i__4790__auto___26660]));

var G__26661 = (i__4790__auto___26660 + (1));
i__4790__auto___26660 = G__26661;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl_id2.clear_color_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl_id2.clear_color_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,colors){
return webgl_30.webgl_id2.gl_invoke(gl,"clearColor",colors);
}));

(webgl_30.webgl_id2.clear_color_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl_id2.clear_color_BANG_.cljs$lang$applyTo = (function (seq26507){
var G__26508 = cljs.core.first(seq26507);
var seq26507__$1 = cljs.core.next(seq26507);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26508,seq26507__$1);
}));

webgl_30.webgl_id2.clear_BANG_ = (function webgl_30$webgl_id2$clear_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26670 = arguments.length;
var i__4790__auto___26673 = (0);
while(true){
if((i__4790__auto___26673 < len__4789__auto___26670)){
args__4795__auto__.push((arguments[i__4790__auto___26673]));

var G__26680 = (i__4790__auto___26673 + (1));
i__4790__auto___26673 = G__26680;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl_id2.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl_id2.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,bits){
return webgl_30.webgl_id2.gl_invoke(gl,"clear",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_or,bits)], null));
}));

(webgl_30.webgl_id2.clear_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl_id2.clear_BANG_.cljs$lang$applyTo = (function (seq26518){
var G__26519 = cljs.core.first(seq26518);
var seq26518__$1 = cljs.core.next(seq26518);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26519,seq26518__$1);
}));

webgl_30.webgl_id2.draw_arrays_BANG_ = (function webgl_30$webgl_id2$draw_arrays_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26706 = arguments.length;
var i__4790__auto___26708 = (0);
while(true){
if((i__4790__auto___26708 < len__4789__auto___26706)){
args__4795__auto__.push((arguments[i__4790__auto___26708]));

var G__26712 = (i__4790__auto___26708 + (1));
i__4790__auto___26708 = G__26712;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl_id2.draw_arrays_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl_id2.draw_arrays_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,args){
return webgl_30.webgl_id2.gl_invoke(gl,"drawArrays",args);
}));

(webgl_30.webgl_id2.draw_arrays_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl_id2.draw_arrays_BANG_.cljs$lang$applyTo = (function (seq26533){
var G__26534 = cljs.core.first(seq26533);
var seq26533__$1 = cljs.core.next(seq26533);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26534,seq26533__$1);
}));

webgl_30.webgl_id2.get_location = (function webgl_30$webgl_id2$get_location(gl,program,type,name){
var loc = webgl_30.webgl_id2.gl_invoke(gl,type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [program,name], null));
if((loc < (0))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed to get location of ",name," of type ",type], 0));
} else {
return loc;
}
});
webgl_30.webgl_id2.get_attribute_location = (function webgl_30$webgl_id2$get_attribute_location(gl,program,name){
return webgl_30.webgl_id2.get_location(gl,program,"getAttribLocation",name);
});
webgl_30.webgl_id2.get_uniform_location = (function webgl_30$webgl_id2$get_uniform_location(gl,program,name){
return webgl_30.webgl_id2.get_location(gl,program,"getUniformLocation",name);
});
webgl_30.webgl_id2.vertex_attrib_invoke = (function webgl_30$webgl_id2$vertex_attrib_invoke(gl,attrib,location,args){
if((!((location == null)))){
} else {
throw (new Error("Assert failed: (some? location)"));
}

return webgl_30.webgl_id2.gl_invoke(gl,["vertexAttrib",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib)].join(''),cljs.core.cons(location,args));
});
webgl_30.webgl_id2.vertex_attrib_3f = (function webgl_30$webgl_id2$vertex_attrib_3f(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26741 = arguments.length;
var i__4790__auto___26748 = (0);
while(true){
if((i__4790__auto___26748 < len__4789__auto___26741)){
args__4795__auto__.push((arguments[i__4790__auto___26748]));

var G__26750 = (i__4790__auto___26748 + (1));
i__4790__auto___26748 = G__26750;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return webgl_30.webgl_id2.vertex_attrib_3f.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(webgl_30.webgl_id2.vertex_attrib_3f.cljs$core$IFn$_invoke$arity$variadic = (function (gl,location,args){
return webgl_30.webgl_id2.vertex_attrib_invoke(gl,"3f",location,args);
}));

(webgl_30.webgl_id2.vertex_attrib_3f.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(webgl_30.webgl_id2.vertex_attrib_3f.cljs$lang$applyTo = (function (seq26572){
var G__26573 = cljs.core.first(seq26572);
var seq26572__$1 = cljs.core.next(seq26572);
var G__26574 = cljs.core.first(seq26572__$1);
var seq26572__$2 = cljs.core.next(seq26572__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26573,G__26574,seq26572__$2);
}));

webgl_30.webgl_id2.vertex_attrib_1f = (function webgl_30$webgl_id2$vertex_attrib_1f(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26757 = arguments.length;
var i__4790__auto___26758 = (0);
while(true){
if((i__4790__auto___26758 < len__4789__auto___26757)){
args__4795__auto__.push((arguments[i__4790__auto___26758]));

var G__26759 = (i__4790__auto___26758 + (1));
i__4790__auto___26758 = G__26759;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return webgl_30.webgl_id2.vertex_attrib_1f.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(webgl_30.webgl_id2.vertex_attrib_1f.cljs$core$IFn$_invoke$arity$variadic = (function (gl,location,args){
return webgl_30.webgl_id2.vertex_attrib_invoke(gl,"1f",location,args);
}));

(webgl_30.webgl_id2.vertex_attrib_1f.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(webgl_30.webgl_id2.vertex_attrib_1f.cljs$lang$applyTo = (function (seq26598){
var G__26599 = cljs.core.first(seq26598);
var seq26598__$1 = cljs.core.next(seq26598);
var G__26600 = cljs.core.first(seq26598__$1);
var seq26598__$2 = cljs.core.next(seq26598__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26599,G__26600,seq26598__$2);
}));

webgl_30.webgl_id2.uniform4f = (function webgl_30$webgl_id2$uniform4f(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26760 = arguments.length;
var i__4790__auto___26761 = (0);
while(true){
if((i__4790__auto___26761 < len__4789__auto___26760)){
args__4795__auto__.push((arguments[i__4790__auto___26761]));

var G__26763 = (i__4790__auto___26761 + (1));
i__4790__auto___26761 = G__26763;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return webgl_30.webgl_id2.uniform4f.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(webgl_30.webgl_id2.uniform4f.cljs$core$IFn$_invoke$arity$variadic = (function (gl,location,args){
return webgl_30.webgl_id2.gl_invoke(gl,"uniform4f",cljs.core.cons(location,args));
}));

(webgl_30.webgl_id2.uniform4f.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(webgl_30.webgl_id2.uniform4f.cljs$lang$applyTo = (function (seq26610){
var G__26611 = cljs.core.first(seq26610);
var seq26610__$1 = cljs.core.next(seq26610);
var G__26612 = cljs.core.first(seq26610__$1);
var seq26610__$2 = cljs.core.next(seq26610__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26611,G__26612,seq26610__$2);
}));

webgl_30.webgl_id2.uniform2f = (function webgl_30$webgl_id2$uniform2f(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26770 = arguments.length;
var i__4790__auto___26771 = (0);
while(true){
if((i__4790__auto___26771 < len__4789__auto___26770)){
args__4795__auto__.push((arguments[i__4790__auto___26771]));

var G__26772 = (i__4790__auto___26771 + (1));
i__4790__auto___26771 = G__26772;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return webgl_30.webgl_id2.uniform2f.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(webgl_30.webgl_id2.uniform2f.cljs$core$IFn$_invoke$arity$variadic = (function (gl,location,args){
return webgl_30.webgl_id2.gl_invoke(gl,"uniform2f",cljs.core.cons(location,args));
}));

(webgl_30.webgl_id2.uniform2f.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(webgl_30.webgl_id2.uniform2f.cljs$lang$applyTo = (function (seq26629){
var G__26630 = cljs.core.first(seq26629);
var seq26629__$1 = cljs.core.next(seq26629);
var G__26631 = cljs.core.first(seq26629__$1);
var seq26629__$2 = cljs.core.next(seq26629__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26630,G__26631,seq26629__$2);
}));

webgl_30.webgl_id2.create_buffer = (function webgl_30$webgl_id2$create_buffer(gl){
return gl.createBuffer();
});
webgl_30.webgl_id2.bind_buffer_BANG_ = (function webgl_30$webgl_id2$bind_buffer_BANG_(gl,target,buffer){
return gl.bindBuffer(target,buffer);
});
/**
 * Allocate storage and write the data specified by data to the buffer object bound to target.
 */
webgl_30.webgl_id2.buffer_data_BANG_ = (function webgl_30$webgl_id2$buffer_data_BANG_(gl,target,data,usage){
return gl.bufferData(target,data,usage);
});
webgl_30.webgl_id2.vertex_attrib_pointer = (function webgl_30$webgl_id2$vertex_attrib_pointer(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26776 = arguments.length;
var i__4790__auto___26777 = (0);
while(true){
if((i__4790__auto___26777 < len__4789__auto___26776)){
args__4795__auto__.push((arguments[i__4790__auto___26777]));

var G__26778 = (i__4790__auto___26777 + (1));
i__4790__auto___26777 = G__26778;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl_id2.vertex_attrib_pointer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl_id2.vertex_attrib_pointer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,args){
return webgl_30.webgl_id2.gl_invoke(gl,"vertexAttribPointer",args);
}));

(webgl_30.webgl_id2.vertex_attrib_pointer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl_id2.vertex_attrib_pointer.cljs$lang$applyTo = (function (seq26632){
var G__26633 = cljs.core.first(seq26632);
var seq26632__$1 = cljs.core.next(seq26632);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26633,seq26632__$1);
}));

webgl_30.webgl_id2.enable_vertex_attrib_array_BANG_ = (function webgl_30$webgl_id2$enable_vertex_attrib_array_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26790 = arguments.length;
var i__4790__auto___26791 = (0);
while(true){
if((i__4790__auto___26791 < len__4789__auto___26790)){
args__4795__auto__.push((arguments[i__4790__auto___26791]));

var G__26796 = (i__4790__auto___26791 + (1));
i__4790__auto___26791 = G__26796;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.webgl_id2.enable_vertex_attrib_array_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.webgl_id2.enable_vertex_attrib_array_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,location){
return webgl_30.webgl_id2.gl_invoke(gl,"enableVertexAttribArray",location);
}));

(webgl_30.webgl_id2.enable_vertex_attrib_array_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.webgl_id2.enable_vertex_attrib_array_BANG_.cljs$lang$applyTo = (function (seq26634){
var G__26635 = cljs.core.first(seq26634);
var seq26634__$1 = cljs.core.next(seq26634);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26635,seq26634__$1);
}));

/**
 * Five steps to pass data to a vertex shader
 *  1) Create a buffer.
 *  2) Bind that buffer.
 *  3) Write data to that buffer.
 *  4) Assign the buffer to an attribute.
 *  5) Enable the assignment.
 */
webgl_30.webgl_id2.initialize_vertex_buffer_BANG_ = (function webgl_30$webgl_id2$initialize_vertex_buffer_BANG_(gl,p__26636){
var map__26637 = p__26636;
var map__26637__$1 = (((((!((map__26637 == null))))?(((((map__26637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26637):map__26637);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26637__$1,new cljs.core.Keyword(null,"target","target",253001721));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26637__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26637__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26637__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
var buffer = webgl_30.webgl_id2.create_buffer(gl);
var target__$1 = (function (){var or__4185__auto__ = target;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.ARRAY_BUFFER;
}
})();
var usage__$1 = (function (){var or__4185__auto__ = usage;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.STATIC_DRAW;
}
})();
if(cljs.core.truth_(buffer)){
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failed to create a buffer object"], 0));
}

webgl_30.webgl_id2.bind_buffer_BANG_(gl,target__$1,buffer);

if((data.length > (0))){
webgl_30.webgl_id2.buffer_data_BANG_(gl,target__$1,data,usage__$1);
} else {
}

var map__26639_26804 = attribute;
var map__26639_26805__$1 = (((((!((map__26639_26804 == null))))?(((((map__26639_26804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26639_26804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26639_26804):map__26639_26804);
var location_26806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26639_26805__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var size_26807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26639_26805__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var type_26808 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26639_26805__$1,new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT);
var normalized_26809 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26639_26805__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),false);
var stride_26810 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26639_26805__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(0));
var offset_26811 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26639_26805__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var G__26641_26818 = gl;
webgl_30.webgl_id2.vertex_attrib_pointer.cljs$core$IFn$_invoke$arity$variadic(G__26641_26818,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location_26806,size_26807,type_26808,normalized_26809,stride_26810,offset_26811], 0));

webgl_30.webgl_id2.enable_vertex_attrib_array_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26641_26818,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location_26806], 0));


return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),buffer,new cljs.core.Keyword(null,"target","target",253001721),target__$1,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"usage","usage",-1583752910),usage__$1], null);
});
webgl_30.webgl_id2.refresh_vertex_buffer_BANG_ = (function webgl_30$webgl_id2$refresh_vertex_buffer_BANG_(gl,p__26642){
var map__26643 = p__26642;
var map__26643__$1 = (((((!((map__26643 == null))))?(((((map__26643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26643):map__26643);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26643__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26643__$1,new cljs.core.Keyword(null,"target","target",253001721));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26643__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26643__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
var G__26645 = gl;
webgl_30.webgl_id2.bind_buffer_BANG_(G__26645,target,buffer);

webgl_30.webgl_id2.buffer_data_BANG_(G__26645,target,data,usage);

return G__26645;
});
webgl_30.webgl_id2.attribute = (function webgl_30$webgl_id2$attribute(gl,program,p__26646){
var map__26647 = p__26646;
var map__26647__$1 = (((((!((map__26647 == null))))?(((((map__26647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26647):map__26647);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26647__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"location","location",1815599388),webgl_30.webgl_id2.get_attribute_location(gl,program,name),new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__4185__auto__ = type;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return gl.FLOAT;
}
})(),new cljs.core.Keyword(null,"normalized","normalized",-1887621663),(function (){var or__4185__auto__ = normalized;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"stride","stride",-1172818435),(function (){var or__4185__auto__ = stride;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"offset","offset",296498311),(function (){var or__4185__auto__ = offset;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})()], null);
});
webgl_30.webgl_id2.uniform = (function webgl_30$webgl_id2$uniform(gl,program,p__26649){
var map__26650 = p__26649;
var map__26650__$1 = (((((!((map__26650 == null))))?(((((map__26650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26650):map__26650);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26650__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),webgl_30.webgl_id2.get_uniform_location(gl,program,name)], null);
});
webgl_30.webgl_id2.set_viewport_BANG_ = (function webgl_30$webgl_id2$set_viewport_BANG_(var_args){
var G__26653 = arguments.length;
switch (G__26653) {
case 1:
return webgl_30.webgl_id2.set_viewport_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return webgl_30.webgl_id2.set_viewport_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webgl_30.webgl_id2.set_viewport_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (gl){
var width = webgl_30.webgl_id2.canvas_width(gl);
var height = webgl_30.webgl_id2.canvas_height(gl);
gl.viewport((0),(0),width,height);

return gl;
}));

(webgl_30.webgl_id2.set_viewport_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (gl,width,height){
if((((!((width == null)))) && ((!((height == null)))))){
gl.viewport((0),(0),width,height);

return gl;
} else {
return webgl_30.webgl_id2.set_viewport_BANG_.cljs$core$IFn$_invoke$arity$1(gl);
}
}));

(webgl_30.webgl_id2.set_viewport_BANG_.cljs$lang$maxFixedArity = 3);

webgl_30.webgl_id2.rect = (function webgl_30$webgl_id2$rect(p__26654){
var map__26655 = p__26654;
var map__26655__$1 = (((((!((map__26655 == null))))?(((((map__26655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26655):map__26655);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26655__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26655__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26655__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26655__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x1 = x;
var x2 = (x + width);
var y1 = y;
var y2 = (y + height);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1,x2,y1,x1,y2,x1,y2,x2,y1,x2,y2], null);
});

//# sourceMappingURL=webgl_30.webgl_id2.js.map
