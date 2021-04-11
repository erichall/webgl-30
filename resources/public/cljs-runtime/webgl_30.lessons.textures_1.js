goog.provide('webgl_30.lessons.textures_1');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('webgl_30.math');
goog.require('webgl_30.webgl');
goog.require('webgl_30.shapes');
goog.require('webgl_30.core');
goog.require('webgl_30.component');
webgl_30.lessons.textures_1.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"translation","translation",-701621547),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(170),(100)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(webgl_30.math.deg__GT_rad,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(190),(40),(320)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"rotation-speed","rotation-speed",-637058511),1.2,new cljs.core.Keyword(null,"then","then",460598070),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,0.3,0.3,(1)], null)], null)], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.textures_1 !== 'undefined') && (typeof webgl_30.lessons.textures_1.state_atom !== 'undefined')){
} else {
webgl_30.lessons.textures_1.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.textures_1.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.textures_1.state_atom,webgl_30.lessons.textures_1.initial_state);
} else {
}
webgl_30.lessons.textures_1.fragment_shader = "precision mediump float;\n\n   varying vec2 v_texcoord;\n\n   // The texture\n   uniform sampler2D u_texture;\n\n   void main() {\n       gl_FragColor = texture2D(u_texture, v_texcoord);\n   }";
webgl_30.lessons.textures_1.vertex_shader = "attribute vec4 a_position;\n   attribute vec2 a_texcoord;\n\n  uniform mat4 u_matrix;\n\n  varying vec2 v_texcoord;\n\n  void main() {\n    gl_Position = u_matrix * a_position;\n\n    // this can be passed to the fragment shader\n    v_texcoord = a_texcoord;\n  }";
webgl_30.lessons.textures_1.multiply_matrices = (function webgl_30$lessons$textures_1$multiply_matrices(p__26290){
var map__26291 = p__26290;
var map__26291__$1 = (((((!((map__26291 == null))))?(((((map__26291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26291):map__26291);
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26291__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26291__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var map__26294 = rect;
var map__26294__$1 = (((((!((map__26294 == null))))?(((((map__26294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26294):map__26294);
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26294__$1,new cljs.core.Keyword(null,"translation","translation",-701621547));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26294__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26294__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var projection_matrix = webgl_30.math.projection_3d_matrix(webgl_30.webgl.get_canvas_width(gl),webgl_30.webgl.get_canvas_height(gl),(400));
var orthographic_matrix = webgl_30.math.orthographic_matrix((0),webgl_30.webgl.get_canvas_width(gl),webgl_30.webgl.get_canvas_height(gl),(0),(400),(-400));
var translation_matrix = webgl_30.math.translation_3d_matrix(translation);
var rotation_matrix_x = webgl_30.math.rotation_3d_x_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(0)));
var rotation_matrix_y = webgl_30.math.rotation_3d_y_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(1)));
var rotation_matrix_z = webgl_30.math.rotation_3d_z_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(2)));
var scale_matrix = webgl_30.math.scaling_3d_matrix(scale);
return webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(orthographic_matrix,translation_matrix),rotation_matrix_x),rotation_matrix_y),rotation_matrix_z),scale_matrix);
});
webgl_30.lessons.textures_1.format = (function webgl_30$lessons$textures_1$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26435 = arguments.length;
var i__4790__auto___26436 = (0);
while(true){
if((i__4790__auto___26436 < len__4789__auto___26435)){
args__4795__auto__.push((arguments[i__4790__auto___26436]));

var G__26437 = (i__4790__auto___26436 + (1));
i__4790__auto___26436 = G__26437;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.lessons.textures_1.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.lessons.textures_1.format.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.pprint.cl_format,null,f,xs);
}));

(webgl_30.lessons.textures_1.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.lessons.textures_1.format.cljs$lang$applyTo = (function (seq26302){
var G__26303 = cljs.core.first(seq26302);
var seq26302__$1 = cljs.core.next(seq26302);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26303,seq26302__$1);
}));

webgl_30.lessons.textures_1.draw_BANG_ = (function webgl_30$lessons$textures_1$draw_BANG_(timestamp,state){
var map__26316 = state;
var map__26316__$1 = (((((!((map__26316 == null))))?(((((map__26316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26316):map__26316);
var s = map__26316__$1;
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26316__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var now = (timestamp * 0.001);
var delta_time = (now - new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(rect));
var dt = (new cljs.core.Keyword(null,"rotation-speed","rotation-speed",-637058511).cljs$core$IFn$_invoke$arity$1(rect) * delta_time);
var state__$1 = cljs.core.assoc_in(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(1)], null),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(1)], null)) + dt)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)) + dt));
webgl_30.webgl.draw_scene_BANG_(cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.Keyword(null,"values","values",372645556)], null),webgl_30.lessons.textures_1.multiply_matrices(state__$1)));

return requestAnimationFrame((function (t){
var G__26328 = t;
var G__26329 = cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"then","then",460598070)], null),now);
return (webgl_30.lessons.textures_1.draw_BANG_.cljs$core$IFn$_invoke$arity$2 ? webgl_30.lessons.textures_1.draw_BANG_.cljs$core$IFn$_invoke$arity$2(G__26328,G__26329) : webgl_30.lessons.textures_1.draw_BANG_.call(null,G__26328,G__26329));
}));
});
webgl_30.lessons.textures_1.raf_draw_BANG_ = (function webgl_30$lessons$textures_1$raf_draw_BANG_(state){
return requestAnimationFrame((function (t){
return webgl_30.lessons.textures_1.draw_BANG_(t,state);
}));
});
webgl_30.lessons.textures_1.setup_BANG_ = (function webgl_30$lessons$textures_1$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.textures_1.state_atom,(function (p__26335){
var map__26336 = p__26335;
var map__26336__$1 = (((((!((map__26336 == null))))?(((((map__26336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26336):map__26336);
var state = map__26336__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26336__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.textures_1.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.textures_1.vertex_shader], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"clear-depth?","clear-depth?",-2095035190),true),new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.CULL_FACE,gl.DEPTH_TEST], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f-texture","f-texture",-2147180556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"texture","texture",-266291651),webgl_30.webgl.create_texture_from_img.cljs$core$IFn$_invoke$arity$4(gl,"images/f-texture.png",(function (texture){
return webgl_30.lessons.textures_1.raf_draw_BANG_(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"f-texture","f-texture",-2147180556),new cljs.core.Keyword(null,"texture","texture",-266291651)], null),texture));
}),webgl_30.webgl.create_texture_BANG_.cljs$core$IFn$_invoke$arity$2(gl,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_2D,(0),gl.RGBA,(1),(1),(0),gl.RGBA,gl.UNSIGNED_BYTE,(new Uint8Array(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255),(255)], null)))], null))),new cljs.core.Keyword(null,"type","type",1174270348),gl.TEXTURE_2D], null)], null),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(webgl_30.shapes.f_shape_3d))], null)),new cljs.core.Keyword(null,"a_texcoord","a_texcoord",-1587223074),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a_texcoord",new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(webgl_30.shapes.f_texture_coordinates_selective))], null))], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"u_matrix",new cljs.core.Keyword(null,"type","type",1174270348),"uniformMatrix4fv",new cljs.core.Keyword(null,"transpose","transpose",-474726680),false,new cljs.core.Keyword(null,"values","values",372645556),webgl_30.lessons.textures_1.multiply_matrices(state)], null),new cljs.core.Keyword(null,"u_texture","u_texture",1365102185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_texture",new cljs.core.Keyword(null,"type","type",1174270348),"uniform1i",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null)], null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),((16) * (6))], null)], null)], null));
}));
});
webgl_30.lessons.textures_1.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - WebGL Textures"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Texture"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.textures_1.state_atom;},new cljs.core.Symbol("webgl-30.lessons.textures-1","state-atom","webgl-30.lessons.textures-1/state-atom",-626992580,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.textures-1","webgl-30.lessons.textures-1",279362738,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/textures_1.cljs",20,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.textures_1.state_atom)?webgl_30.lessons.textures_1.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"webgl-3d-textures.html",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "texture-1";
var state = cljs.core.deref(webgl_30.lessons.textures_1.state_atom);
var map__26409 = new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(state);
var map__26409__$1 = (((((!((map__26409 == null))))?(((((map__26409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26409):map__26409);
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409__$1,new cljs.core.Keyword(null,"translation","translation",-701621547));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_1.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

webgl_30.lessons.textures_1.setup_BANG_();

return requestAnimationFrame((function (t){
return webgl_30.lessons.textures_1.draw_BANG_(t,cljs.core.deref(webgl_30.lessons.textures_1.state_atom));
}));
})], null)], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.textures_1.lesson', webgl_30.lessons.textures_1.lesson);

//# sourceMappingURL=webgl_30.lessons.textures_1.js.map
