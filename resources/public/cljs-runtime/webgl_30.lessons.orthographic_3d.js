goog.provide('webgl_30.lessons.orthographic_3d');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('webgl_30.math');
goog.require('webgl_30.webgl');
goog.require('webgl_30.shapes');
goog.require('webgl_30.component');
webgl_30.lessons.orthographic_3d.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"translation","translation",-701621547),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(140),(150),(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"angle-rad","angle-rad",870892504),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,0.3,0.3,(1)], null)], null)], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.orthographic_3d !== 'undefined') && (typeof webgl_30.lessons.orthographic_3d.state_atom !== 'undefined')){
} else {
webgl_30.lessons.orthographic_3d.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.orthographic_3d.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.orthographic_3d.state_atom,webgl_30.lessons.orthographic_3d.initial_state);
} else {
}
webgl_30.lessons.orthographic_3d.fragment_shader = "precision mediump float;\n   uniform vec4 u_color;\n   void main() {\n       gl_FragColor = u_color;\n   }";
webgl_30.lessons.orthographic_3d.vertex_shader = "// attribute vec2 a_position;\n   attribute vec4 a_position;\n\n  //uniform mat3 u_matrix;\n  uniform mat4 u_matrix;\n\n  void main() {\n    //gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);\n    gl_Position = u_matrix * a_position;\n  }";
webgl_30.lessons.orthographic_3d.multiply_matrices = (function webgl_30$lessons$orthographic_3d$multiply_matrices(p__81405){
var map__81406 = p__81405;
var map__81406__$1 = (((((!((map__81406 == null))))?(((((map__81406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81406):map__81406);
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81406__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81406__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var map__81408 = rect;
var map__81408__$1 = (((((!((map__81408 == null))))?(((((map__81408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81408):map__81408);
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81408__$1,new cljs.core.Keyword(null,"translation","translation",-701621547));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81408__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81408__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var projection_matrix = webgl_30.math.projection_3d_matrix(webgl_30.webgl.get_canvas_width(gl),webgl_30.webgl.get_canvas_height(gl),(400));
var translation_matrix = webgl_30.math.translation_3d_matrix(translation);
var rotation_matrix_x = webgl_30.math.rotation_3d_x_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(0)));
var rotation_matrix_y = webgl_30.math.rotation_3d_y_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(1)));
var rotation_matrix_z = webgl_30.math.rotation_3d_z_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(2)));
var scale_matrix = webgl_30.math.scaling_3d_matrix(scale);
return webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(projection_matrix,translation_matrix),rotation_matrix_x),rotation_matrix_y),rotation_matrix_z),scale_matrix);
});
webgl_30.lessons.orthographic_3d.format = (function webgl_30$lessons$orthographic_3d$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___81422 = arguments.length;
var i__4790__auto___81423 = (0);
while(true){
if((i__4790__auto___81423 < len__4789__auto___81422)){
args__4795__auto__.push((arguments[i__4790__auto___81423]));

var G__81424 = (i__4790__auto___81423 + (1));
i__4790__auto___81423 = G__81424;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.lessons.orthographic_3d.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.lessons.orthographic_3d.format.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.pprint.cl_format,null,f,xs);
}));

(webgl_30.lessons.orthographic_3d.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.lessons.orthographic_3d.format.cljs$lang$applyTo = (function (seq81410){
var G__81411 = cljs.core.first(seq81410);
var seq81410__$1 = cljs.core.next(seq81410);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81411,seq81410__$1);
}));

webgl_30.lessons.orthographic_3d.draw_BANG_ = (function webgl_30$lessons$orthographic_3d$draw_BANG_(timestamp){
var map__81412 = cljs.core.deref(webgl_30.lessons.orthographic_3d.state_atom);
var map__81412__$1 = (((((!((map__81412 == null))))?(((((map__81412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81412):map__81412);
var state = map__81412__$1;
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81412__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
return webgl_30.webgl.draw_scene_BANG_(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.Keyword(null,"values","values",372645556)], null),webgl_30.lessons.orthographic_3d.multiply_matrices(state)));
});
webgl_30.lessons.orthographic_3d.slider_component = (function webgl_30$lessons$orthographic_3d$slider_component(p__81414){
var map__81415 = p__81414;
var map__81415__$1 = (((((!((map__81415 == null))))?(((((map__81415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81415):map__81415);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81415__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81415__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81415__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81415__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81415__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81415__$1,new cljs.core.Keyword(null,"max","max",61366548));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81415__$1,new cljs.core.Keyword(null,"step","step",1288888124),(1));
var display_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81415__$1,new cljs.core.Keyword(null,"display-value","display-value",-784620136));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.slider,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),(function (){var or__4185__auto__ = display_value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return value;
}
})()], null)], null);
});
webgl_30.lessons.orthographic_3d.setup_BANG_ = (function webgl_30$lessons$orthographic_3d$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.orthographic_3d.state_atom,(function (p__81417){
var map__81418 = p__81417;
var map__81418__$1 = (((((!((map__81418 == null))))?(((((map__81418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81418):map__81418);
var state = map__81418__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81418__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81418__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"program","program",781564284),webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.orthographic_3d.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.orthographic_3d.vertex_shader], null)),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"stride","stride",-1172818435),(0),new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"buffer-info","buffer-info",-1909771526),webgl_30.webgl.create_buffer(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(webgl_30.shapes.f_shape_3d)),new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.STATIC_DRAW,new cljs.core.Keyword(null,"target","target",253001721),gl.ARRAY_BUFFER], null))], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"u_resolution","u_resolution",-2041817604),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_resolution",new cljs.core.Keyword(null,"type","type",1174270348),"uniform2f",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gl["canvas"]["width"]),(gl["canvas"]["height"])], null)], null),new cljs.core.Keyword(null,"u_color","u_color",1826690029),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_color",new cljs.core.Keyword(null,"type","type",1174270348),"uniform4fv",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(rect)], null),new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"u_matrix",new cljs.core.Keyword(null,"type","type",1174270348),"uniformMatrix4fv",new cljs.core.Keyword(null,"transpose","transpose",-474726680),false,new cljs.core.Keyword(null,"values","values",372645556),webgl_30.lessons.orthographic_3d.multiply_matrices(state)], null)], null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),(18)], null)], null)], null));
}));
});
webgl_30.lessons.orthographic_3d.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - Orthographic 3D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Matrix"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),"https://github.com/erichall/webgl-30/blob/master/src/webgl_30/lessons/orthographic_3d.cljs",new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"https://webglfundamentals.org/webgl/lessons/webgl-3d-orthographic.html",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "translation";
var state = cljs.core.deref(webgl_30.lessons.orthographic_3d.state_atom);
var map__81420 = new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(state);
var map__81420__$1 = (((((!((map__81420 == null))))?(((((map__81420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81420):map__81420);
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81420__$1,new cljs.core.Keyword(null,"translation","translation",-701621547));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81420__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81420__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

webgl_30.lessons.orthographic_3d.setup_BANG_();

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
})], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"30px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d.slider_component,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"translation","translation",-701621547)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(translation,(0),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first(translation),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"translate-x","translate-x",970754667),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"label","label",1718410804),"x"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d.slider_component,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"translation","translation",-701621547)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(translation,(1),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(translation,(1)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"translate-y","translate-y",-450479444),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"label","label",1718410804),"y"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d.slider_component,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"translation","translation",-701621547)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(translation,(2),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(translation,(1)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"translate-z","translate-z",-1882966602),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"label","label",1718410804),"z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scale,(0),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scale,(0)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),new cljs.core.Keyword(null,"min","min",444991522),(-5),new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"label","label",1718410804),"x-scale",new cljs.core.Keyword(null,"step","step",1288888124),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scale,(1),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scale,(1)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),new cljs.core.Keyword(null,"min","min",444991522),(-5),new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"label","label",1718410804),"y-scale",new cljs.core.Keyword(null,"step","step",1288888124),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scale,(2),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scale,(2)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"scale-z","scale-z",141944258),new cljs.core.Keyword(null,"min","min",444991522),(-5),new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"label","label",1718410804),"z-scale",new cljs.core.Keyword(null,"step","step",1288888124),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null),webgl_30.math.deg__GT_rad(val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),webgl_30.math.rad__GT_deg(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(0))),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rotate-x","rotate-x",662700473),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(365),new cljs.core.Keyword(null,"label","label",1718410804),"x-rotation",new cljs.core.Keyword(null,"display-value","display-value",-784620136),webgl_30.lessons.orthographic_3d.format.cljs$core$IFn$_invoke$arity$variadic("~1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([webgl_30.math.rad__GT_deg(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.orthographic_3d.state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)))], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(1)], null),webgl_30.math.deg__GT_rad(val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),webgl_30.math.rad__GT_deg(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(1))),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rotate-y","rotate-y",-463882110),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(365),new cljs.core.Keyword(null,"label","label",1718410804),"y-rotation",new cljs.core.Keyword(null,"display-value","display-value",-784620136),webgl_30.lessons.orthographic_3d.format.cljs$core$IFn$_invoke$arity$variadic("~1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([webgl_30.math.rad__GT_deg(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.orthographic_3d.state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(1)], null)))], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(2)], null),webgl_30.math.deg__GT_rad(val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),webgl_30.math.rad__GT_deg(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(2))),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rotate-z","rotate-z",-1639598055),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(365),new cljs.core.Keyword(null,"label","label",1718410804),"z-rotation",new cljs.core.Keyword(null,"display-value","display-value",-784620136),webgl_30.lessons.orthographic_3d.format.cljs$core$IFn$_invoke$arity$variadic("~1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([webgl_30.math.rad__GT_deg(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.orthographic_3d.state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(2)], null)))], 0))], null)], null)], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.orthographic_3d.lesson', webgl_30.lessons.orthographic_3d.lesson);

//# sourceMappingURL=webgl_30.lessons.orthographic_3d.js.map
