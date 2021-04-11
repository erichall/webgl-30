goog.provide('webgl_30.lessons.cameras_0');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('webgl_30.core');
goog.require('webgl_30.math');
goog.require('webgl_30.webgl');
goog.require('webgl_30.shapes');
goog.require('webgl_30.component');
webgl_30.lessons.cameras_0.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"translation","translation",-701621547),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-150),(0),(-360)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(webgl_30.math.deg__GT_rad,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(190),(40),(320)], null)),new cljs.core.Keyword(null,"camera-angle-rad","camera-angle-rad",662764572),(0),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"field-of-view","field-of-view",1693592674),webgl_30.math.deg__GT_rad((60)),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,0.3,0.3,(1)], null)], null)], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.cameras_0 !== 'undefined') && (typeof webgl_30.lessons.cameras_0.state_atom !== 'undefined')){
} else {
webgl_30.lessons.cameras_0.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.cameras_0.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.cameras_0.state_atom,webgl_30.lessons.cameras_0.initial_state);
} else {
}
webgl_30.lessons.cameras_0.fragment_shader = "precision mediump float;\n\n   // we got this from the vertex shader!\n   varying vec4 v_color;\n\n   void main() {\n       gl_FragColor = v_color;\n   }";
webgl_30.lessons.cameras_0.vertex_shader = "attribute vec4 a_position;\n   attribute vec4 a_color;\n\n  uniform mat4 u_matrix;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_Position = u_matrix * a_position;\n\n    // this can be passed to the fragment shader\n    v_color = a_color;\n  }";
webgl_30.lessons.cameras_0.multiply_matrices = (function webgl_30$lessons$cameras_0$multiply_matrices(p__26183){
var map__26184 = p__26183;
var map__26184__$1 = (((((!((map__26184 == null))))?(((((map__26184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26184):map__26184);
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26184__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26184__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var map__26188 = rect;
var map__26188__$1 = (((((!((map__26188 == null))))?(((((map__26188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26188):map__26188);
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26188__$1,new cljs.core.Keyword(null,"translation","translation",-701621547));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26188__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26188__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var fudge_factor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26188__$1,new cljs.core.Keyword(null,"fudge-factor","fudge-factor",2073624418));
var field_of_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26188__$1,new cljs.core.Keyword(null,"field-of-view","field-of-view",1693592674));
var aspect = webgl_30.webgl.get_aspect(gl);
var z_near = (1);
var z_far = (2000);
var perspective_matrix = webgl_30.math.perspective_3d_matrix(field_of_view,aspect,z_near,z_far);
var translation_matrix = webgl_30.math.translation_3d_matrix(translation);
var rotation_matrix_x = webgl_30.math.rotation_3d_x_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(0)));
var rotation_matrix_y = webgl_30.math.rotation_3d_y_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(1)));
var rotation_matrix_z = webgl_30.math.rotation_3d_z_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(2)));
var scale_matrix = webgl_30.math.scaling_3d_matrix(scale);
return webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(perspective_matrix,translation_matrix),rotation_matrix_x),rotation_matrix_y),rotation_matrix_z),scale_matrix);
});
webgl_30.lessons.cameras_0.format = (function webgl_30$lessons$cameras_0$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26326 = arguments.length;
var i__4790__auto___26327 = (0);
while(true){
if((i__4790__auto___26327 < len__4789__auto___26326)){
args__4795__auto__.push((arguments[i__4790__auto___26327]));

var G__26330 = (i__4790__auto___26327 + (1));
i__4790__auto___26327 = G__26330;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.lessons.cameras_0.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.lessons.cameras_0.format.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.pprint.cl_format,null,f,xs);
}));

(webgl_30.lessons.cameras_0.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.lessons.cameras_0.format.cljs$lang$applyTo = (function (seq26201){
var G__26202 = cljs.core.first(seq26201);
var seq26201__$1 = cljs.core.next(seq26201);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26202,seq26201__$1);
}));

webgl_30.lessons.cameras_0.draw_BANG_ = (function webgl_30$lessons$cameras_0$draw_BANG_(timestamp){
var map__26209 = cljs.core.deref(webgl_30.lessons.cameras_0.state_atom);
var map__26209__$1 = (((((!((map__26209 == null))))?(((((map__26209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26209):map__26209);
var state = map__26209__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26209__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26209__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var clear_depth_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26209__$1,new cljs.core.Keyword(null,"clear-depth?","clear-depth?",-2095035190));
var map__26210 = rect;
var map__26210__$1 = (((((!((map__26210 == null))))?(((((map__26210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26210):map__26210);
var field_of_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210__$1,new cljs.core.Keyword(null,"field-of-view","field-of-view",1693592674));
var camera_angle_rad = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26210__$1,new cljs.core.Keyword(null,"camera-angle-rad","camera-angle-rad",662764572));
var n_fs = (5);
var radius = (200);
var aspect = webgl_30.webgl.get_aspect(gl);
var z_near = (1);
var z_far = (2000);
var projection_matrix = webgl_30.math.perspective_3d_matrix(field_of_view,aspect,z_near,z_far);
var camera_matrix = webgl_30.math.matrix_multiply_3d(webgl_30.math.rotation_3d_y_matrix(camera_angle_rad),webgl_30.math.translation_3d_matrix(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(radius * 1.5)], null)));
var view_matrix = webgl_30.math.invert_4x4(camera_matrix);
var view_projection_matrix = webgl_30.math.matrix_multiply_3d(projection_matrix,view_matrix);
var map__26211 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989)], null));
var map__26211__$1 = (((((!((map__26211 == null))))?(((((map__26211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26211):map__26211);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26211__$1,new cljs.core.Keyword(null,"program","program",781564284));
var features = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26211__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var uniforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26211__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26211__$1,new cljs.core.Keyword(null,"element","element",1974019749));
webgl_30.webgl.enable_features_BANG_(webgl_30.webgl.use_program_BANG_(webgl_30.webgl.prepare_canvas_BANG_(gl,clear_depth_QMARK_),program),features);

var seq__26226 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_fs));
var chunk__26228 = null;
var count__26229 = (0);
var i__26230 = (0);
while(true){
if((i__26230 < count__26229)){
var ii = chunk__26228.cljs$core$IIndexed$_nth$arity$2(null,i__26230);
var angle_26350 = (((ii * Math.PI) * (2)) / n_fs);
var x_26351 = (radius * Math.cos(angle_26350));
var y_26352 = (radius * Math.sin(angle_26350));
var translation_matrix_26353 = webgl_30.math.translation_3d_matrix(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26351,(0),y_26352], null));
webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$3(gl,program,cljs.core.vals(cljs.core.assoc_in(uniforms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.Keyword(null,"values","values",372645556)], null),webgl_30.math.matrix_multiply_3d(view_projection_matrix,translation_matrix_26353))));

webgl_30.webgl.draw_arrays_BANG_(gl,element);


var G__26354 = seq__26226;
var G__26355 = chunk__26228;
var G__26356 = count__26229;
var G__26357 = (i__26230 + (1));
seq__26226 = G__26354;
chunk__26228 = G__26355;
count__26229 = G__26356;
i__26230 = G__26357;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26226);
if(temp__5735__auto__){
var seq__26226__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26226__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26226__$1);
var G__26359 = cljs.core.chunk_rest(seq__26226__$1);
var G__26360 = c__4609__auto__;
var G__26361 = cljs.core.count(c__4609__auto__);
var G__26362 = (0);
seq__26226 = G__26359;
chunk__26228 = G__26360;
count__26229 = G__26361;
i__26230 = G__26362;
continue;
} else {
var ii = cljs.core.first(seq__26226__$1);
var angle_26365 = (((ii * Math.PI) * (2)) / n_fs);
var x_26366 = (radius * Math.cos(angle_26365));
var y_26367 = (radius * Math.sin(angle_26365));
var translation_matrix_26368 = webgl_30.math.translation_3d_matrix(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_26366,(0),y_26367], null));
webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$3(gl,program,cljs.core.vals(cljs.core.assoc_in(uniforms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.Keyword(null,"values","values",372645556)], null),webgl_30.math.matrix_multiply_3d(view_projection_matrix,translation_matrix_26368))));

webgl_30.webgl.draw_arrays_BANG_(gl,element);


var G__26375 = cljs.core.next(seq__26226__$1);
var G__26376 = null;
var G__26377 = (0);
var G__26378 = (0);
seq__26226 = G__26375;
chunk__26228 = G__26376;
count__26229 = G__26377;
i__26230 = G__26378;
continue;
}
} else {
return null;
}
}
break;
}
});
webgl_30.lessons.cameras_0.setup_BANG_ = (function webgl_30$lessons$cameras_0$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.cameras_0.state_atom,(function (p__26257){
var map__26258 = p__26257;
var map__26258__$1 = (((((!((map__26258 == null))))?(((((map__26258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26258):map__26258);
var state = map__26258__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26258__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26258__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var program = webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.cameras_0.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.cameras_0.vertex_shader], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"clear-depth?","clear-depth?",-2095035190),true),new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.CULL_FACE,gl.DEPTH_TEST], null),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT,new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(webgl_30.shapes.f_shape_3d))], null)),new cljs.core.Keyword(null,"a_color","a_color",625113709),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"a_color",new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"type","type",1174270348),gl.UNSIGNED_BYTE,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"data","data",-232669377),(new Uint8Array(webgl_30.shapes.f_shape_3d_color))], null))], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"u_resolution","u_resolution",-2041817604),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_resolution",new cljs.core.Keyword(null,"type","type",1174270348),"uniform2f",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gl["canvas"]["width"]),(gl["canvas"]["height"])], null)], null),new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"u_matrix",new cljs.core.Keyword(null,"type","type",1174270348),"uniformMatrix4fv",new cljs.core.Keyword(null,"transpose","transpose",-474726680),false,new cljs.core.Keyword(null,"values","values",372645556),webgl_30.lessons.cameras_0.multiply_matrices(state)], null),new cljs.core.Keyword(null,"u_fudgeFactor","u_fudgeFactor",-2122614749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_fudgeFactor",new cljs.core.Keyword(null,"type","type",1174270348),"uniform1f",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null)], null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),((16) * (6))], null)], null)], null));
}));
});
webgl_30.lessons.cameras_0.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - Camera"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Camera"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.cameras_0.state_atom;},new cljs.core.Symbol("webgl-30.lessons.cameras-0","state-atom","webgl-30.lessons.cameras-0/state-atom",65062249,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.cameras-0","webgl-30.lessons.cameras-0",-1592197717,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/cameras_0.cljs",20,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.cameras_0.state_atom)?webgl_30.lessons.cameras_0.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"webgl-3d-camera.html",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "translation";
var state = cljs.core.deref(webgl_30.lessons.cameras_0.state_atom);
var map__26271 = new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(state);
var map__26271__$1 = (((((!((map__26271 == null))))?(((((map__26271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26271):map__26271);
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26271__$1,new cljs.core.Keyword(null,"translation","translation",-701621547));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26271__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26271__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var field_of_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26271__$1,new cljs.core.Keyword(null,"field-of-view","field-of-view",1693592674));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.cameras_0.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

webgl_30.lessons.cameras_0.setup_BANG_();

return requestAnimationFrame(webgl_30.lessons.cameras_0.draw_BANG_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"30px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.unit_circle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"radius","radius",-2073122258),(120),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p__26279){
var map__26280 = p__26279;
var map__26280__$1 = (((((!((map__26280 == null))))?(((((map__26280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26280):map__26280);
var angle_rad = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26280__$1,new cljs.core.Keyword(null,"angle-rad","angle-rad",870892504));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.cameras_0.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"camera-angle-rad","camera-angle-rad",662764572)], null),angle_rad);

return requestAnimationFrame(webgl_30.lessons.cameras_0.draw_BANG_);
})], null)], null)], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.cameras_0.lesson', webgl_30.lessons.cameras_0.lesson);

//# sourceMappingURL=webgl_30.lessons.cameras_0.js.map
