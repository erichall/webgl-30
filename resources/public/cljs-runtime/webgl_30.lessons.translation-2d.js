goog.provide('webgl_30.lessons.fundamentals_2');
goog.require('cljs.core');
goog.require('webgl_30.webgl');
goog.require('webgl_30.math');
goog.require('webgl_30.component');
webgl_30.lessons.fundamentals_2.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gl","gl",-246422634),null], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.fundamentals_2 !== 'undefined') && (typeof webgl_30.lessons.fundamentals_2.state_atom !== 'undefined')){
} else {
webgl_30.lessons.fundamentals_2.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.fundamentals_2.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.fundamentals_2.state_atom,webgl_30.lessons.fundamentals_2.initial_state);
} else {
}
webgl_30.lessons.fundamentals_2.fragment_shader = "precision mediump float;\n   uniform vec4 u_color;\n   void main() {\n       gl_FragColor = u_color;\n   }";
webgl_30.lessons.fundamentals_2.vertex_shader = "attribute vec2 a_position;\n\n  uniform vec2 u_resolution;\n\n  void main() {\n       // convert the position from pixels to 0.0 to 1.0\n       vec2 zeroToOne = a_position / u_resolution;\n\n       // convert from 0->1 to 0->2\n       vec2 zeroToTwo = zeroToOne * 2.0;\n\n       // convert from 0->2 to -1->+1 (clip space)\n       vec2 clipSpace = zeroToTwo - 1.0;\n\n       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1); // * vec(1, -1) flips y so it's top-left corner.\n  }";
webgl_30.lessons.fundamentals_2.get_rectangle = (function webgl_30$lessons$fundamentals_2$get_rectangle(p__52013){
var map__52014 = p__52013;
var map__52014__$1 = (((((!((map__52014 == null))))?(((((map__52014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52014):map__52014);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52014__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52014__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52014__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52014__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x1 = x;
var x2 = (x + width);
var y1 = y;
var y2 = (y + height);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1,x2,y1,x1,y2,x1,y2,x2,y1,x2,y2], null);
});
webgl_30.lessons.fundamentals_2.draw_BANG_ = (function webgl_30$lessons$fundamentals_2$draw_BANG_(timestamp){
webgl_30.webgl.draw_scene_BANG_(cljs.core.deref(webgl_30.lessons.fundamentals_2.state_atom));

var map__52016 = cljs.core.deref(webgl_30.lessons.fundamentals_2.state_atom);
var map__52016__$1 = (((((!((map__52016 == null))))?(((((map__52016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52016):map__52016);
var state = map__52016__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var rects = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (_){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"src-data","src-data",1911227934),(new Float32Array(webgl_30.lessons.fundamentals_2.get_rectangle(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),webgl_30.math.random_int((300)),new cljs.core.Keyword(null,"y","y",-1757859776),webgl_30.math.random_int((300)),new cljs.core.Keyword(null,"width","width",-384071477),webgl_30.math.random_int((300)),new cljs.core.Keyword(null,"height","height",1025178622),webgl_30.math.random_int((300))], null)))),new cljs.core.Keyword(null,"target","target",253001721),gl.ARRAY_BUFFER,new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.STATIC_DRAW,new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),(6)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))));
return null;
});
webgl_30.lessons.fundamentals_2.setup_BANG_ = (function webgl_30$lessons$fundamentals_2$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.fundamentals_2.state_atom,(function (p__52018){
var map__52019 = p__52018;
var map__52019__$1 = (((((!((map__52019 == null))))?(((((map__52019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52019):map__52019);
var state = map__52019__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52019__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (_){
var program = webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.fundamentals_2.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.fundamentals_2.vertex_shader], null));
var buffer_info = webgl_30.webgl.create_buffer(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(webgl_30.lessons.fundamentals_2.get_rectangle(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),webgl_30.math.random_int((300)),new cljs.core.Keyword(null,"y","y",-1757859776),webgl_30.math.random_int((300)),new cljs.core.Keyword(null,"width","width",-384071477),webgl_30.math.random_int((300)),new cljs.core.Keyword(null,"height","height",1025178622),webgl_30.math.random_int((300))], null)))),new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.STATIC_DRAW,new cljs.core.Keyword(null,"target","target",253001721),gl.ARRAY_BUFFER], null));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"location","location",1815599388),gl.getAttribLocation(program,"a_position"),new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"stride","stride",-1172818435),(0),new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"buffer-info","buffer-info",-1909771526),buffer_info], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"location","location",1815599388),webgl_30.webgl.get_uniform_location(gl,program,"u_resolution"),new cljs.core.Keyword(null,"type","type",1174270348),"uniform2f",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gl["canvas"]["width"]),(gl["canvas"]["height"])], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"location","location",1815599388),webgl_30.webgl.get_uniform_location(gl,program,"u_color"),new cljs.core.Keyword(null,"type","type",1174270348),"uniform4f",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.random(),Math.random(),Math.random(),(1)], null)], null)], null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),(6)], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((10))));
}));
});
webgl_30.lessons.fundamentals_2.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - WebGL Fundamentals"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lots of random boxes"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),"https://github.com/erichall/webgl-30/blob/master/src/webgl_30/lessons/fundamentals_1.cljs",new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "fundamentals";
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.fundamentals_2.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

webgl_30.lessons.fundamentals_2.setup_BANG_();

return requestAnimationFrame(webgl_30.lessons.fundamentals_2.draw_BANG_);
})], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.fundamentals_2.lesson', webgl_30.lessons.fundamentals_2.lesson);

//# sourceMappingURL=webgl_30.lessons.translation-2d.js.map
