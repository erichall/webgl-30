goog.provide('webgl_30.lessons.multipoint');
goog.require('cljs.core');
goog.require('webgl_30.webgl_id2');
goog.require('webgl_30.core');
goog.require('webgl_30.input');
goog.require('webgl_30.component');
webgl_30.lessons.multipoint.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"point-size","point-size",-2123819651),(20)], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.multipoint !== 'undefined') && (typeof webgl_30.lessons.multipoint.state_atom !== 'undefined')){
} else {
webgl_30.lessons.multipoint.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.multipoint.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.multipoint.state_atom,webgl_30.lessons.multipoint.initial_state);
} else {
}
webgl_30.lessons.multipoint.vertex_shader = "\n  attribute float a_pointsize;\n  attribute vec4 a_position;\n\n  void main() {\n       gl_Position = a_position;\n       gl_PointSize = a_pointsize;\n  }";
webgl_30.lessons.multipoint.fragment_shader = "\n  precision mediump float;\n  uniform vec4 u_fragcolor;\n  void main() {\n       gl_FragColor = u_fragcolor;\n   }";
webgl_30.lessons.multipoint.draw_BANG_ = (function webgl_30$lessons$multipoint$draw_BANG_(_,p__26669){
var map__26671 = p__26669;
var map__26671__$1 = (((((!((map__26671 == null))))?(((((map__26671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26671):map__26671);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26671__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var point_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26671__$1,new cljs.core.Keyword(null,"point-size","point-size",-2123819651));
var objects_to_draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26671__$1,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717));
var program = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.Keyword(null,"program","program",781564284)], null));
webgl_30.webgl_id2.vertex_attrib_1f.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"a-pointsize","a-pointsize",610244790),new cljs.core.Keyword(null,"location","location",1815599388)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([point_size], 0));

cljs.core.apply.cljs$core$IFn$_invoke$arity$4(webgl_30.webgl_id2.uniform4f,gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"u-fragcolor","u-fragcolor",-1555956861),new cljs.core.Keyword(null,"location","location",1815599388)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0,0.0,1.0], null));

var G__26687 = gl;
webgl_30.webgl_id2.clear_color_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26687,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([0.0,0.0,0.0,1.0], 0));

webgl_30.webgl_id2.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26687,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.COLOR_BUFFER_BIT], 0));

webgl_30.webgl_id2.draw_arrays_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26687,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.POINTS,(0),(4)], 0));

return G__26687;
});
webgl_30.lessons.multipoint.setup_BANG_ = (function webgl_30$lessons$multipoint$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.multipoint.state_atom,(function (p__26713){
var map__26721 = p__26713;
var map__26721__$1 = (((((!((map__26721 == null))))?(((((map__26721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26721):map__26721);
var state = map__26721__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26721__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = webgl_30.webgl_id2.init_shaders(gl,webgl_30.lessons.multipoint.vertex_shader,webgl_30.lessons.multipoint.fragment_shader);
var a_position_attribute = webgl_30.webgl_id2.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(2)], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"u-fragcolor","u-fragcolor",-1555956861),webgl_30.webgl_id2.uniform(gl,program,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"u_fragcolor"], null))], null),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a-position","a-position",1345370691),a_position_attribute,new cljs.core.Keyword(null,"a-pointsize","a-pointsize",610244790),webgl_30.webgl_id2.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"a_pointsize"], null))], null),new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a-position-buffer","a-position-buffer",-1491792233),webgl_30.webgl_id2.initialize_vertex_buffer_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.5,-0.5,-0.5,0.5,-0.5], null))),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_position_attribute], null))], null)], null)], null));
}));
});
webgl_30.lessons.multipoint.raf_draw_BANG_ = (function webgl_30$lessons$multipoint$raf_draw_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.multipoint.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"raf-id","raf-id",2001486474),requestAnimationFrame((function (t){
return webgl_30.lessons.multipoint.draw_BANG_(t,state);
})));
});
webgl_30.lessons.multipoint.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"This is chapter 3 from WebGL Programming Guide Interactive 3D Graphics Programming with WebGL"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"multipoint by WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea."], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.multipoint.state_atom;},new cljs.core.Symbol("webgl-30.lessons.multipoint","state-atom","webgl-30.lessons.multipoint/state-atom",961252563,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.multipoint","webgl-30.lessons.multipoint",1012400875,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/multipoint.cljs",20,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.multipoint.state_atom)?webgl_30.lessons.multipoint.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea.",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "fundamentals";
var w = (400);
var h = (400);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
var gl = webgl_30.webgl_id2.get_context(canvas_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.multipoint.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl);

webgl_30.lessons.multipoint.setup_BANG_();

return webgl_30.lessons.multipoint.raf_draw_BANG_(cljs.core.deref(webgl_30.lessons.multipoint.state_atom));
})], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.multipoint.lesson', webgl_30.lessons.multipoint.lesson);

//# sourceMappingURL=webgl_30.lessons.multipoint.js.map
