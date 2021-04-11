goog.provide('webgl_30.lessons.hello_point_2');
goog.require('cljs.core');
goog.require('webgl_30.webgl_id2');
goog.require('webgl_30.core');
goog.require('webgl_30.component');
webgl_30.lessons.hello_point_2.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gl","gl",-246422634),null], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.hello_point_2 !== 'undefined') && (typeof webgl_30.lessons.hello_point_2.state_atom !== 'undefined')){
} else {
webgl_30.lessons.hello_point_2.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.hello_point_2.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.hello_point_2.state_atom,webgl_30.lessons.hello_point_2.initial_state);
} else {
}
webgl_30.lessons.hello_point_2.vertex_shader = "\n  attribute vec4 a_position;\n  attribute float a_pointsize;\n  void main() {\n       gl_Position = a_position;\n       gl_PointSize = a_pointsize;\n  }";
webgl_30.lessons.hello_point_2.fragment_shader = "void main() {\n       gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n   }";
webgl_30.lessons.hello_point_2.draw_BANG_ = (function webgl_30$lessons$hello_point_2$draw_BANG_(_,p__26665){
var map__26666 = p__26665;
var map__26666__$1 = (((((!((map__26666 == null))))?(((((map__26666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26666):map__26666);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26666__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var objects_to_draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26666__$1,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717));
var program_26756 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.Keyword(null,"program","program",781564284)], null));
webgl_30.webgl_id2.vertex_attrib_3f.cljs$core$IFn$_invoke$arity$variadic(gl,webgl_30.webgl_id2.get_attribute_location(gl,program_26756,"a_position"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([0.9,0.0,0.0], 0));

webgl_30.webgl_id2.vertex_attrib_1f.cljs$core$IFn$_invoke$arity$variadic(gl,webgl_30.webgl_id2.get_attribute_location(gl,program_26756,"a_pointsize"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([5.0], 0));

var G__26681 = gl;
webgl_30.webgl_id2.clear_color_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26681,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([0.0,0.0,0.0,1.0], 0));

webgl_30.webgl_id2.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26681,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.COLOR_BUFFER_BIT], 0));

webgl_30.webgl_id2.draw_arrays_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26681,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.POINTS,(0),(1)], 0));

return G__26681;
});
webgl_30.lessons.hello_point_2.setup_BANG_ = (function webgl_30$lessons$hello_point_2$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.hello_point_2.state_atom,(function (p__26705){
var map__26707 = p__26705;
var map__26707__$1 = (((((!((map__26707 == null))))?(((((map__26707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26707):map__26707);
var state = map__26707__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26707__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = webgl_30.webgl_id2.init_shaders(gl,webgl_30.lessons.hello_point_2.vertex_shader,webgl_30.lessons.hello_point_2.fragment_shader);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"program","program",781564284),program], null)], null));
}));
});
webgl_30.lessons.hello_point_2.raf_draw_BANG_ = (function webgl_30$lessons$hello_point_2$raf_draw_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.hello_point_2.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"raf-id","raf-id",2001486474),requestAnimationFrame((function (t){
return webgl_30.lessons.hello_point_2.draw_BANG_(t,state);
})));
});
webgl_30.lessons.hello_point_2.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"This is chapter 3 from WebGL Programming Guide Interactive 3D Graphics Programming with WebGL"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"HelloPoint - 2 by WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea."], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.hello_point_2.state_atom;},new cljs.core.Symbol("webgl-30.lessons.hello_point_2","state-atom","webgl-30.lessons.hello_point_2/state-atom",-661846446,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.hello_point_2","webgl-30.lessons.hello_point_2",262853437,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/hello_point_2.cljs",20,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.hello_point_2.state_atom)?webgl_30.lessons.hello_point_2.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea.",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "fundamentals";
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.hello_point_2.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl_id2.get_context(canvas_id));

webgl_30.lessons.hello_point_2.setup_BANG_();

return webgl_30.lessons.hello_point_2.raf_draw_BANG_(cljs.core.deref(webgl_30.lessons.hello_point_2.state_atom));
})], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.hello_point_2.lesson', webgl_30.lessons.hello_point_2.lesson);

//# sourceMappingURL=webgl_30.lessons.hello_point_2.js.map
