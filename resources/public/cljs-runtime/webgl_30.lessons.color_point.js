goog.provide('webgl_30.lessons.color_point');
goog.require('cljs.core');
goog.require('webgl_30.webgl_id2');
goog.require('webgl_30.core');
goog.require('webgl_30.input');
goog.require('webgl_30.component');
webgl_30.lessons.color_point.initial_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"point-size","point-size",-2123819651),(20),new cljs.core.Keyword(null,"clicks","clicks",673274951),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.PersistentVector.EMPTY], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.color_point !== 'undefined') && (typeof webgl_30.lessons.color_point.state_atom !== 'undefined')){
} else {
webgl_30.lessons.color_point.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.color_point.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.color_point.state_atom,webgl_30.lessons.color_point.initial_state);
} else {
}
webgl_30.lessons.color_point.vertex_shader = "\n  attribute float a_pointsize;\n  attribute vec4 a_position;\n\n  void main() {\n       gl_Position = a_position;\n       gl_PointSize = a_pointsize;\n  }";
webgl_30.lessons.color_point.fragment_shader = "\n  precision mediump float;\n  uniform vec4 u_fragcolor;\n  void main() {\n       gl_FragColor = u_fragcolor;\n   }";
webgl_30.lessons.color_point.draw_BANG_ = (function webgl_30$lessons$color_point$draw_BANG_(_,p__26674){
var map__26677 = p__26674;
var map__26677__$1 = (((((!((map__26677 == null))))?(((((map__26677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26677):map__26677);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26677__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var clicks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26677__$1,new cljs.core.Keyword(null,"clicks","clicks",673274951));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26677__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var point_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26677__$1,new cljs.core.Keyword(null,"point-size","point-size",-2123819651));
var objects_to_draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26677__$1,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717));
var program = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.Keyword(null,"program","program",781564284)], null));
var frag_color_location = webgl_30.webgl_id2.get_uniform_location(gl,program,"u_fragcolor");
webgl_30.webgl_id2.vertex_attrib_1f.cljs$core$IFn$_invoke$arity$variadic(gl,webgl_30.webgl_id2.get_attribute_location(gl,program,"a_pointsize"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([point_size], 0));

var G__26686_26799 = gl;
webgl_30.webgl_id2.clear_color_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26686_26799,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([0.0,0.0,0.0,1.0], 0));

webgl_30.webgl_id2.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26686_26799,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.COLOR_BUFFER_BIT], 0));


var seq__26692 = cljs.core.seq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,colors,clicks));
var chunk__26693 = null;
var count__26694 = (0);
var i__26695 = (0);
while(true){
if((i__26695 < count__26694)){
var vec__26732 = chunk__26693.cljs$core$IIndexed$_nth$arity$2(null,i__26695);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(0),null);
var vec__26735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26732,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26735,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26735,(1),null);
webgl_30.webgl_id2.vertex_attrib_3f.cljs$core$IFn$_invoke$arity$variadic(gl,webgl_30.webgl_id2.get_attribute_location(gl,program,"a_position"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,0.0], 0));

cljs.core.apply.cljs$core$IFn$_invoke$arity$4(webgl_30.webgl_id2.uniform4f,gl,frag_color_location,color);

webgl_30.webgl_id2.draw_arrays_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.POINTS,(0),(1)], 0));


var G__26800 = seq__26692;
var G__26801 = chunk__26693;
var G__26802 = count__26694;
var G__26803 = (i__26695 + (1));
seq__26692 = G__26800;
chunk__26693 = G__26801;
count__26694 = G__26802;
i__26695 = G__26803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26692);
if(temp__5735__auto__){
var seq__26692__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26692__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__26692__$1);
var G__26812 = cljs.core.chunk_rest(seq__26692__$1);
var G__26813 = c__4609__auto__;
var G__26814 = cljs.core.count(c__4609__auto__);
var G__26815 = (0);
seq__26692 = G__26812;
chunk__26693 = G__26813;
count__26694 = G__26814;
i__26695 = G__26815;
continue;
} else {
var vec__26742 = cljs.core.first(seq__26692__$1);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26742,(0),null);
var vec__26745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26742,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26745,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26745,(1),null);
webgl_30.webgl_id2.vertex_attrib_3f.cljs$core$IFn$_invoke$arity$variadic(gl,webgl_30.webgl_id2.get_attribute_location(gl,program,"a_position"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y,0.0], 0));

cljs.core.apply.cljs$core$IFn$_invoke$arity$4(webgl_30.webgl_id2.uniform4f,gl,frag_color_location,color);

webgl_30.webgl_id2.draw_arrays_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.POINTS,(0),(1)], 0));


var G__26820 = cljs.core.next(seq__26692__$1);
var G__26821 = null;
var G__26822 = (0);
var G__26823 = (0);
seq__26692 = G__26820;
chunk__26693 = G__26821;
count__26694 = G__26822;
i__26695 = G__26823;
continue;
}
} else {
return null;
}
}
break;
}
});
webgl_30.lessons.color_point.setup_BANG_ = (function webgl_30$lessons$color_point$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.color_point.state_atom,(function (p__26753){
var map__26754 = p__26753;
var map__26754__$1 = (((((!((map__26754 == null))))?(((((map__26754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26754):map__26754);
var state = map__26754__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26754__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = webgl_30.webgl_id2.init_shaders(gl,webgl_30.lessons.color_point.vertex_shader,webgl_30.lessons.color_point.fragment_shader);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"program","program",781564284),program], null)], null));
}));
});
webgl_30.lessons.color_point.raf_draw_BANG_ = (function webgl_30$lessons$color_point$raf_draw_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.color_point.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"raf-id","raf-id",2001486474),requestAnimationFrame((function (t){
return webgl_30.lessons.color_point.draw_BANG_(t,state);
})));
});
webgl_30.lessons.color_point.get_color = (function webgl_30$lessons$color_point$get_color(p__26762){
var vec__26764 = p__26762;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26764,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26764,(1),null);
if((((x >= (0))) && ((y >= (0))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0,0.0,1.0], null);
} else {
if((((x < (0))) && ((y < (0))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0,0.0,1.0], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,1.0,1.0], null);

}
}
});
webgl_30.lessons.color_point.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"This is chapter 3 from WebGL Programming Guide Interactive 3D Graphics Programming with WebGL"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"color point by WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea."], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.color_point.state_atom;},new cljs.core.Symbol("webgl-30.lessons.color-point","state-atom","webgl-30.lessons.color-point/state-atom",-1594076670,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.color-point","webgl-30.lessons.color-point",-1201595264,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/color_point.cljs",20,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.color_point.state_atom)?webgl_30.lessons.color_point.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"WebGL Programming Guide Interactive 3D Graphics Programming with WebGL by Kouichi Matsuda, Rodger Lea.",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "fundamentals";
var w = (400);
var h = (400);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
var gl = webgl_30.webgl_id2.get_context(canvas_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.color_point.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),gl);

webgl_30.input.mousedown(webgl_30.webgl_id2.get_canvas(gl),(function (e){
var x = (e["clientX"]);
var y = (e["clientY"]);
var rect = (e["target"]).getBoundingClientRect();
var l = (rect["left"]);
var t = (rect["top"]);
var c_x = (((x - l) - (h / (2))) / (h / (2)));
var c_y = (((w / (2)) - (y - t)) / (w / (2)));
return webgl_30.lessons.color_point.raf_draw_BANG_(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.color_point.state_atom,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"clicks","clicks",673274951),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_x,c_y], null)),new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.conj,webgl_30.lessons.color_point.get_color(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_x,c_y], null)));
})));
}));

webgl_30.lessons.color_point.setup_BANG_();

return webgl_30.lessons.color_point.raf_draw_BANG_(cljs.core.deref(webgl_30.lessons.color_point.state_atom));
})], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.color_point.lesson', webgl_30.lessons.color_point.lesson);

//# sourceMappingURL=webgl_30.lessons.color_point.js.map
