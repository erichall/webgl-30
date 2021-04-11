goog.provide('webgl_30.lessons.fundamentals');
goog.require('cljs.core');
goog.require('webgl_30.webgl');
goog.require('webgl_30.component');
webgl_30.lessons.fundamentals.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gl","gl",-246422634),null], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.fundamentals !== 'undefined') && (typeof webgl_30.lessons.fundamentals.state_atom !== 'undefined')){
} else {
webgl_30.lessons.fundamentals.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.fundamentals.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.fundamentals.state_atom,webgl_30.lessons.fundamentals.initial_state);
} else {
}
webgl_30.lessons.fundamentals.fragment_shader = "precision mediump float;\n   void main() {\n       gl_FragColor = vec4(1, 0, 0.5, 1);\n   }";
webgl_30.lessons.fundamentals.vertex_shader = "// an attribute will receive data from a buffer\n  attribute vec4 a_position;\n  void main() {\n       gl_Position = a_position;\n  }";
webgl_30.lessons.fundamentals.draw_BANG_ = (function webgl_30$lessons$fundamentals$draw_BANG_(timestamp,continue_fn){
return webgl_30.webgl.draw_scene_BANG_(cljs.core.deref(webgl_30.lessons.fundamentals.state_atom));
});
webgl_30.lessons.fundamentals.setup_BANG_ = (function webgl_30$lessons$fundamentals$setup_BANG_(){
return webgl_30.webgl.set_elements_BANG_(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.fundamentals.state_atom,(function (p__40344){
var map__40345 = p__40344;
var map__40345__$1 = (((((!((map__40345 == null))))?(((((map__40345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40345):map__40345);
var state = map__40345__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40345__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.fundamentals.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.fundamentals.vertex_shader], null));
var position_buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",617295198),webgl_30.webgl.create_buffer(gl),new cljs.core.Keyword(null,"target","target",253001721),gl.ARRAY_BUFFER], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"program","program",781564284),program),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"stride","stride",-1172818435),(0),new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"buffer","buffer",617295198),position_buffer], null)], null)),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"src-data","src-data",1911227934),(new Float32Array(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),0.5,0.7,(0)], null))),new cljs.core.Keyword(null,"target","target",253001721),gl.ARRAY_BUFFER,new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.STATIC_DRAW,new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"buffer","buffer",617295198),position_buffer,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),(3)], null)], null));
})));
});
webgl_30.lessons.fundamentals.lesson = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - WebGL Fundamentals"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"A simple triangle"], null)], null);
}),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "fundamentals";
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.fundamentals.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

webgl_30.lessons.fundamentals.setup_BANG_();

return webgl_30.lessons.fundamentals.draw_BANG_((0),null);
})], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.fundamentals.lesson', webgl_30.lessons.fundamentals.lesson);

//# sourceMappingURL=webgl_30.lessons.fundamentals.js.map
