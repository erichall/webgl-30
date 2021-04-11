goog.provide('webgl_30.lessons.conway');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('webgl_30.webgl_id2');
goog.require('webgl_30.core');
goog.require('webgl_30.input');
goog.require('webgl_30.lessons.conway_core');
goog.require('webgl_30.component');
webgl_30.lessons.conway.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"toroidal?","toroidal?",2099414314),new cljs.core.Keyword(null,"raf-id","raf-id",2001486474),new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584),new cljs.core.Keyword(null,"cells","cells",-985166822)],[(4),false,true,null,(1024),null,null,(0),cljs.core.set((function (){var iter__4582__auto__ = (function webgl_30$lessons$conway$iter__26709(s__26710){
return (new cljs.core.LazySeq(null,(function (){
var s__26710__$1 = s__26710;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26710__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__26710__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function webgl_30$lessons$conway$iter__26709_$_iter__26714(s__26715){
return (new cljs.core.LazySeq(null,((function (s__26710__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__26715__$1 = s__26715;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__26715__$1);
if(temp__5735__auto____$1){
var s__26715__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26715__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__26715__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__26717 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__26716 = (0);
while(true){
if((i__26716 < size__4581__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__26716);
cljs.core.chunk_append(b__26717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__26831 = (i__26716 + (1));
i__26716 = G__26831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26717),webgl_30$lessons$conway$iter__26709_$_iter__26714(cljs.core.chunk_rest(s__26715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26717),null);
}
} else {
var y = cljs.core.first(s__26715__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),webgl_30$lessons$conway$iter__26709_$_iter__26714(cljs.core.rest(s__26715__$2)));
}
} else {
return null;
}
break;
}
});})(s__26710__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__26710__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(150))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,webgl_30$lessons$conway$iter__26709(cljs.core.rest(s__26710__$1)));
} else {
var G__26832 = cljs.core.rest(s__26710__$1);
s__26710__$1 = G__26832;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(150)));
})())]);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.conway !== 'undefined') && (typeof webgl_30.lessons.conway.cell__GT_rect_lookup_atom !== 'undefined')){
} else {
webgl_30.lessons.conway.cell__GT_rect_lookup_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.conway !== 'undefined') && (typeof webgl_30.lessons.conway.state_atom !== 'undefined')){
} else {
webgl_30.lessons.conway.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.conway.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.conway.state_atom,webgl_30.lessons.conway.initial_state);
} else {
}
webgl_30.lessons.conway.vertex_shader = "attribute vec2 a_position;\n\n   uniform vec2 u_resolution;\n\n   void main() {\n       // convert the position from pixels to [0.0,1.0]\n       vec2 zeroToOne = a_position / u_resolution;\n\n       // convert from 0->1 to 0->2\n       vec2 zeroToTwo = zeroToOne * 2.0;\n\n       // convert from 0->2 to -1->+1 (clip space)\n       vec2 clipSpace = zeroToTwo - 1.0;\n\n       // * vec(1, -1) flips y so it's top-left corner.\n       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n   }";
webgl_30.lessons.conway.fragment_shader = "\n  precision mediump float;\n  uniform vec4 u_fragcolor;\n  void main() {\n       gl_FragColor = u_fragcolor;\n   }";
webgl_30.lessons.conway.raf_draw_BANG_ = (function webgl_30$lessons$conway$raf_draw_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.conway.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"raf-id","raf-id",2001486474),requestAnimationFrame((function (t){
return (webgl_30.lessons.conway.draw_BANG_.cljs$core$IFn$_invoke$arity$2 ? webgl_30.lessons.conway.draw_BANG_.cljs$core$IFn$_invoke$arity$2(t,state) : webgl_30.lessons.conway.draw_BANG_.call(null,t,state));
})));
});
webgl_30.lessons.conway.draw_BANG_ = (function webgl_30$lessons$conway$draw_BANG_(timestamp,p__26767){
var map__26768 = p__26767;
var map__26768__$1 = (((((!((map__26768 == null))))?(((((map__26768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26768):map__26768);
var state = map__26768__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26768__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26768__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var objects_to_draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26768__$1,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26768__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var a_position_buffer = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.Keyword(null,"a-position-buffer","a-position-buffer",-1491792233)], null)),new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(webgl_30.lessons.conway_core.lookup__GT_data(cljs.core.deref(webgl_30.lessons.conway.cell__GT_rect_lookup_atom),cells))));
var n = (cljs.core.count(cells) * (12));
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(webgl_30.webgl_id2.uniform4f,gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"u-fragcolor","u-fragcolor",-1555956861),new cljs.core.Keyword(null,"location","location",1815599388)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,1.0,0.0,1.0], null));

var G__26773_26833 = gl;
webgl_30.webgl_id2.set_viewport_BANG_.cljs$core$IFn$_invoke$arity$3(G__26773_26833,(gl["canvas"]["width"]),(gl["canvas"]["height"]));

webgl_30.webgl_id2.refresh_vertex_buffer_BANG_(G__26773_26833,a_position_buffer);

webgl_30.webgl_id2.clear_color_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26773_26833,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([0.0,0.0,0.0,1.0], 0));

webgl_30.webgl_id2.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26773_26833,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.COLOR_BUFFER_BIT], 0));

webgl_30.webgl_id2.draw_arrays_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26773_26833,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.TRIANGLES,(0),(n / (2))], 0));


var state__$1 = cljs.core.deref(webgl_30.lessons.conway.state_atom);
var seconds_passed = ((timestamp - new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584).cljs$core$IFn$_invoke$arity$1(state__$1)) / (1000));
if(cljs.core.truth_(new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(state__$1))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.conway.state_atom,(function (state__$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$2,new cljs.core.Keyword(null,"cells","cells",-985166822),webgl_30.lessons.conway_core.tick(state__$2)),new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584),timestamp),new cljs.core.Keyword(null,"fps","fps",683533296),(function (){var G__26775 = ((1) / seconds_passed);
return Math.round(G__26775);
})());
}));
} else {
return null;
}
});
webgl_30.lessons.conway.setup_BANG_ = (function webgl_30$lessons$conway$setup_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.conway.state_atom,(function (p__26783){
var map__26784 = p__26783;
var map__26784__$1 = (((((!((map__26784 == null))))?(((((map__26784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26784):map__26784);
var state = map__26784__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26784__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = webgl_30.webgl_id2.init_shaders(gl,webgl_30.lessons.conway.vertex_shader,webgl_30.lessons.conway.fragment_shader);
var a_position_attribute = webgl_30.webgl_id2.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(2)], null));
gl.bindAttribLocation(program,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_position_attribute),"a_position");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u-fragcolor","u-fragcolor",-1555956861),webgl_30.webgl_id2.uniform(gl,program,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"u_fragcolor"], null)),new cljs.core.Keyword(null,"u-resolution","u-resolution",-864522090),webgl_30.webgl_id2.uniform(gl,program,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"u_resolution"], null))], null),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a-position","a-position",1345370691),a_position_attribute], null),new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a-position-buffer","a-position-buffer",-1491792233),webgl_30.webgl_id2.initialize_vertex_buffer_BANG_(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.DYNAMIC_DRAW,new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_position_attribute], null))], null)], null)], null));
}));

var map__26797 = cljs.core.deref(webgl_30.lessons.conway.state_atom);
var map__26797__$1 = (((((!((map__26797 == null))))?(((((map__26797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26797):map__26797);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26797__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var objects_to_draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26797__$1,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717));
return webgl_30.webgl_id2.uniform2f.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-object","the-object",1206576873),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"u-resolution","u-resolution",-864522090),new cljs.core.Keyword(null,"location","location",1815599388)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(gl["canvas"]["width"]),(gl["canvas"]["height"])], 0));
});
webgl_30.lessons.conway.float32_conj = (function webgl_30$lessons$conway$float32_conj(a,data){
var length = a.length;
var new_arr = (new Float32Array((length + cljs.core.count(data))));
new_arr.set(a);

new_arr.set(data,length);

return new_arr;
});
webgl_30.lessons.conway.on_grid_click_BANG_ = (function webgl_30$lessons$conway$on_grid_click_BANG_(evt){
var svg = document.getElementById("2d-grid");
var pt = svg.createSVGPoint();
var _ = (pt["x"] = (evt["clientX"]));
var ___$1 = (pt["y"] = (evt["clientY"]));
var svg_p = pt.matrixTransform(svg.getScreenCTM().inverse());
var x = (svg_p["x"]);
var y = (svg_p["y"]);
var cell_size = new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.conway.state_atom));
var cx = (function (){var G__26816 = (x / cell_size);
return Math.floor(G__26816);
})();
var cy = (function (){var G__26817 = (y / cell_size);
return Math.floor(G__26817);
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(webgl_30.lessons.conway.state_atom,cljs.core.update,new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)], 0));
});
webgl_30.lessons.conway.grid_2d = (function webgl_30$lessons$conway$grid_2d(p__26819){
var map__26824 = p__26819;
var map__26824__$1 = (((((!((map__26824 == null))))?(((((map__26824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26824):map__26824);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cell_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var stroke_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435));
var grid_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,new cljs.core.Keyword(null,"grid-color","grid-color",1621475545));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),webgl_30.core.format.cljs$core$IFn$_invoke$arity$variadic("0 0 ~a ~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([width,height], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"2d-grid",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),webgl_30.lessons.conway.on_grid_click_BANG_], null),(function (){var iter__4582__auto__ = (function webgl_30$lessons$conway$grid_2d_$_iter__26826(s__26827){
return (new cljs.core.LazySeq(null,(function (){
var s__26827__$1 = s__26827;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26827__$1);
if(temp__5735__auto__){
var s__26827__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26827__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__26827__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__26829 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__26828 = (0);
while(true){
if((i__26828 < size__4581__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__26828);
cljs.core.chunk_append(b__26829,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),s,new cljs.core.Keyword(null,"x2","x2",-1362513475),width,new cljs.core.Keyword(null,"y2","y2",-718691301),s,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (){var or__4185__auto__ = grid_color;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "gray";
}
})(),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),s,new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),s,new cljs.core.Keyword(null,"y2","y2",-718691301),height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (){var or__4185__auto__ = grid_color;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "gray";
}
})(),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width], null)], null)], null)], null));

var G__26845 = (i__26828 + (1));
i__26828 = G__26845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26829),webgl_30$lessons$conway$grid_2d_$_iter__26826(cljs.core.chunk_rest(s__26827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26829),null);
}
} else {
var s = cljs.core.first(s__26827__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),s,new cljs.core.Keyword(null,"x2","x2",-1362513475),width,new cljs.core.Keyword(null,"y2","y2",-718691301),s,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (){var or__4185__auto__ = grid_color;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "gray";
}
})(),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),s,new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),s,new cljs.core.Keyword(null,"y2","y2",-718691301),height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (){var or__4185__auto__ = grid_color;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "gray";
}
})(),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width], null)], null)], null)], null),webgl_30$lessons$conway$grid_2d_$_iter__26826(cljs.core.rest(s__26827__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3(cell_size,width,cell_size));
})()], null);
});
webgl_30.lessons.conway.start = (function webgl_30$lessons$conway$start(canvas_id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.conway.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl_id2.get_context(canvas_id));

webgl_30.lessons.conway.setup_BANG_();

webgl_30.lessons.conway.raf_draw_BANG_(cljs.core.deref(webgl_30.lessons.conway.state_atom));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.conway.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"running?","running?",-257884763),true);
});
webgl_30.lessons.conway.step = (function webgl_30$lessons$conway$step(){
return webgl_30.lessons.conway.raf_draw_BANG_(cljs.core.deref(webgl_30.lessons.conway.state_atom));
});
webgl_30.lessons.conway.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Conway!"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.conway.state_atom;},new cljs.core.Symbol("webgl-30.lessons.conway","state-atom","webgl-30.lessons.conway/state-atom",267292397,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.conway","webgl-30.lessons.conway",-868379276,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/conway.cljs",20,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.conway.state_atom)?webgl_30.lessons.conway.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "fundamentals";
var w = new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.conway.state_atom));
var h = new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.conway.state_atom));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.conway.state_atom))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webgl_30.lessons.conway.start(canvas_id);
})], null),"Run"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),webgl_30.lessons.conway.step], null),"Step"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(1),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(1),new cljs.core.Keyword(null,"border","border",1444987323),"none"], null),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
var gl = webgl_30.webgl_id2.get_context(canvas_id);
if((cljs.core.deref(webgl_30.lessons.conway.cell__GT_rect_lookup_atom) == null)){
return cljs.core.reset_BANG_(webgl_30.lessons.conway.cell__GT_rect_lookup_atom,webgl_30.lessons.conway_core.cell_lookup_map(new cljs.core.Keyword(null,"grid-size","grid-size",2138480144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.conway.state_atom)),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.conway.state_atom))));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.conway.grid_2d,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.conway.state_atom)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.5,new cljs.core.Keyword(null,"grid-color","grid-color",1621475545),"blue",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(1),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(1),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null)], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.conway.lesson', webgl_30.lessons.conway.lesson);

//# sourceMappingURL=webgl_30.lessons.conway.js.map
