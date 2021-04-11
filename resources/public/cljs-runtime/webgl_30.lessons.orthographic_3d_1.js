goog.provide('webgl_30.lessons.orthographic_3d_1');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('webgl_30.math');
goog.require('webgl_30.webgl');
goog.require('webgl_30.shapes');
goog.require('webgl_30.core');
goog.require('webgl_30.component');
webgl_30.lessons.orthographic_3d_1.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"translation","translation",-701621547),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(140),(150),(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,0.3,0.3,(1)], null)], null)], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.orthographic_3d_1 !== 'undefined') && (typeof webgl_30.lessons.orthographic_3d_1.state_atom !== 'undefined')){
} else {
webgl_30.lessons.orthographic_3d_1.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.orthographic_3d_1.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.orthographic_3d_1.state_atom,webgl_30.lessons.orthographic_3d_1.initial_state);
} else {
}
webgl_30.lessons.orthographic_3d_1.fragment_shader = "precision mediump float;\n\n   // we got this from the vertex shader!\n   varying vec4 v_color;\n\n   void main() {\n       gl_FragColor = v_color;\n   }";
webgl_30.lessons.orthographic_3d_1.vertex_shader = "attribute vec4 a_position;\n   attribute vec4 a_color;\n\n  uniform mat4 u_matrix;\n  varying vec4 v_color;\n\n  void main() {\n    //gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);\n    gl_Position = u_matrix * a_position;\n\n    // this can be passed to the fragment shader\n    v_color = a_color;\n  }";
webgl_30.lessons.orthographic_3d_1.multiply_matrices = (function webgl_30$lessons$orthographic_3d_1$multiply_matrices(p__26150){
var map__26151 = p__26150;
var map__26151__$1 = (((((!((map__26151 == null))))?(((((map__26151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26151):map__26151);
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26151__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26151__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var map__26155 = rect;
var map__26155__$1 = (((((!((map__26155 == null))))?(((((map__26155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26155):map__26155);
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26155__$1,new cljs.core.Keyword(null,"translation","translation",-701621547));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26155__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26155__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var projection_matrix = webgl_30.math.projection_3d_matrix(webgl_30.webgl.get_canvas_width(gl),webgl_30.webgl.get_canvas_height(gl),(400));
var orthographic_matrix = webgl_30.math.orthographic_matrix((0),webgl_30.webgl.get_canvas_width(gl),webgl_30.webgl.get_canvas_height(gl),(0),(400),(-400));
var translation_matrix = webgl_30.math.translation_3d_matrix(translation);
var rotation_matrix_x = webgl_30.math.rotation_3d_x_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(0)));
var rotation_matrix_y = webgl_30.math.rotation_3d_y_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(1)));
var rotation_matrix_z = webgl_30.math.rotation_3d_z_matrix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(2)));
var scale_matrix = webgl_30.math.scaling_3d_matrix(scale);
return webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(webgl_30.math.matrix_multiply_3d(orthographic_matrix,translation_matrix),rotation_matrix_x),rotation_matrix_y),rotation_matrix_z),scale_matrix);
});
webgl_30.lessons.orthographic_3d_1.format = (function webgl_30$lessons$orthographic_3d_1$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26267 = arguments.length;
var i__4790__auto___26268 = (0);
while(true){
if((i__4790__auto___26268 < len__4789__auto___26267)){
args__4795__auto__.push((arguments[i__4790__auto___26268]));

var G__26272 = (i__4790__auto___26268 + (1));
i__4790__auto___26268 = G__26272;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.lessons.orthographic_3d_1.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.lessons.orthographic_3d_1.format.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.pprint.cl_format,null,f,xs);
}));

(webgl_30.lessons.orthographic_3d_1.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.lessons.orthographic_3d_1.format.cljs$lang$applyTo = (function (seq26162){
var G__26163 = cljs.core.first(seq26162);
var seq26162__$1 = cljs.core.next(seq26162);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26163,seq26162__$1);
}));

webgl_30.lessons.orthographic_3d_1.draw_BANG_ = (function webgl_30$lessons$orthographic_3d_1$draw_BANG_(timestamp){
var map__26172 = cljs.core.deref(webgl_30.lessons.orthographic_3d_1.state_atom);
var map__26172__$1 = (((((!((map__26172 == null))))?(((((map__26172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26172):map__26172);
var state = map__26172__$1;
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26172__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
return webgl_30.webgl.draw_scene_BANG_(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.Keyword(null,"values","values",372645556)], null),webgl_30.lessons.orthographic_3d_1.multiply_matrices(state)));
});
webgl_30.lessons.orthographic_3d_1.slider_component = (function webgl_30$lessons$orthographic_3d_1$slider_component(p__26178){
var map__26179 = p__26178;
var map__26179__$1 = (((((!((map__26179 == null))))?(((((map__26179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26179):map__26179);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"max","max",61366548));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26179__$1,new cljs.core.Keyword(null,"step","step",1288888124),(1));
var display_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26179__$1,new cljs.core.Keyword(null,"display-value","display-value",-784620136));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.slider,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),(function (){var or__4185__auto__ = display_value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return value;
}
})()], null)], null);
});
webgl_30.lessons.orthographic_3d_1.setup_BANG_ = (function webgl_30$lessons$orthographic_3d_1$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.orthographic_3d_1.state_atom,(function (p__26195){
var map__26198 = p__26195;
var map__26198__$1 = (((((!((map__26198 == null))))?(((((map__26198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26198):map__26198);
var state = map__26198__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26198__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26198__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var program = webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.orthographic_3d_1.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.orthographic_3d_1.vertex_shader], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"clear-depth?","clear-depth?",-2095035190),true),new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.CULL_FACE,gl.DEPTH_TEST], null),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(webgl_30.shapes.f_shape_3d))], null)),new cljs.core.Keyword(null,"a_color","a_color",625113709),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"a_color",new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"type","type",1174270348),gl.UNSIGNED_BYTE,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"data","data",-232669377),(new Uint8Array(webgl_30.shapes.f_shape_3d_color))], null))], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u_resolution","u_resolution",-2041817604),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_resolution",new cljs.core.Keyword(null,"type","type",1174270348),"uniform2f",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gl["canvas"]["width"]),(gl["canvas"]["height"])], null)], null),new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"u_matrix",new cljs.core.Keyword(null,"type","type",1174270348),"uniformMatrix4fv",new cljs.core.Keyword(null,"transpose","transpose",-474726680),false,new cljs.core.Keyword(null,"values","values",372645556),webgl_30.lessons.orthographic_3d_1.multiply_matrices(state)], null)], null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),((16) * (6))], null)], null)], null));
}));
});
webgl_30.lessons.orthographic_3d_1.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - Orthographic 3D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Matrix.....?"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.orthographic_3d_1.state_atom;},new cljs.core.Symbol("webgl-30.lessons.orthographic_3d_1","state-atom","webgl-30.lessons.orthographic_3d_1/state-atom",963426358,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.orthographic_3d_1","webgl-30.lessons.orthographic_3d_1",-1643138461,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/orthographic_3d_1.cljs",20,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.orthographic_3d_1.state_atom)?webgl_30.lessons.orthographic_3d_1.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"webgl-3d-orthographic.html",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "translation";
var state = cljs.core.deref(webgl_30.lessons.orthographic_3d_1.state_atom);
var map__26220 = new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(state);
var map__26220__$1 = (((((!((map__26220 == null))))?(((((map__26220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26220):map__26220);
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26220__$1,new cljs.core.Keyword(null,"translation","translation",-701621547));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26220__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26220__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

webgl_30.lessons.orthographic_3d_1.setup_BANG_();

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
})], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"30px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d_1.slider_component,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"translation","translation",-701621547)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(translation,(0),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first(translation),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"translate-x","translate-x",970754667),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"label","label",1718410804),"x"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d_1.slider_component,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"translation","translation",-701621547)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(translation,(1),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(translation,(1)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"translate-y","translate-y",-450479444),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"label","label",1718410804),"y"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d_1.slider_component,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"translation","translation",-701621547)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(translation,(2),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(translation,(2)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"translate-z","translate-z",-1882966602),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"label","label",1718410804),"z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d_1.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scale,(0),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scale,(0)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),new cljs.core.Keyword(null,"min","min",444991522),(-5),new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"label","label",1718410804),"x-scale",new cljs.core.Keyword(null,"step","step",1288888124),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d_1.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scale,(1),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scale,(1)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),new cljs.core.Keyword(null,"min","min",444991522),(-5),new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"label","label",1718410804),"y-scale",new cljs.core.Keyword(null,"step","step",1288888124),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d_1.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scale,(2),val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scale,(2)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"scale-z","scale-z",141944258),new cljs.core.Keyword(null,"min","min",444991522),(-5),new cljs.core.Keyword(null,"max","max",61366548),(5),new cljs.core.Keyword(null,"label","label",1718410804),"z-scale",new cljs.core.Keyword(null,"step","step",1288888124),0.1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d_1.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null),webgl_30.math.deg__GT_rad(val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),webgl_30.math.rad__GT_deg(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(0))),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rotate-x","rotate-x",662700473),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(365),new cljs.core.Keyword(null,"label","label",1718410804),"x-rotation",new cljs.core.Keyword(null,"display-value","display-value",-784620136),webgl_30.lessons.orthographic_3d_1.format.cljs$core$IFn$_invoke$arity$variadic("~1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([webgl_30.math.rad__GT_deg(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.orthographic_3d_1.state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)))], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d_1.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(1)], null),webgl_30.math.deg__GT_rad(val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),webgl_30.math.rad__GT_deg(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(1))),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rotate-y","rotate-y",-463882110),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(365),new cljs.core.Keyword(null,"label","label",1718410804),"y-rotation",new cljs.core.Keyword(null,"display-value","display-value",-784620136),webgl_30.lessons.orthographic_3d_1.format.cljs$core$IFn$_invoke$arity$variadic("~1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([webgl_30.math.rad__GT_deg(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.orthographic_3d_1.state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(1)], null)))], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.orthographic_3d_1.slider_component,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.orthographic_3d_1.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(2)], null),webgl_30.math.deg__GT_rad(val));

return requestAnimationFrame(webgl_30.lessons.orthographic_3d_1.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),webgl_30.math.rad__GT_deg(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rotation,(2))),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"rotate-z","rotate-z",-1639598055),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(365),new cljs.core.Keyword(null,"label","label",1718410804),"z-rotation",new cljs.core.Keyword(null,"display-value","display-value",-784620136),webgl_30.lessons.orthographic_3d_1.format.cljs$core$IFn$_invoke$arity$variadic("~1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([webgl_30.math.rad__GT_deg(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.orthographic_3d_1.state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(2)], null)))], 0))], null)], null)], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.orthographic_3d_1.lesson', webgl_30.lessons.orthographic_3d_1.lesson);

//# sourceMappingURL=webgl_30.lessons.orthographic_3d_1.js.map
