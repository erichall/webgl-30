goog.provide('webgl_30.lessons.translation_2d');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('webgl_30.webgl');
goog.require('webgl_30.math');
goog.require('webgl_30.component');
webgl_30.lessons.translation_2d.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.3,0.3,0.3,(1)], null)], null)], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.translation_2d !== 'undefined') && (typeof webgl_30.lessons.translation_2d.state_atom !== 'undefined')){
} else {
webgl_30.lessons.translation_2d.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.translation_2d.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.translation_2d.state_atom,webgl_30.lessons.translation_2d.initial_state);
} else {
}
webgl_30.lessons.translation_2d.fragment_shader = "precision mediump float;\n   uniform vec4 u_color;\n   void main() {\n       gl_FragColor = u_color;\n   }";
webgl_30.lessons.translation_2d.vertex_shader = "attribute vec2 a_position;\n\n  uniform vec2 u_resolution;\n\n  void main() {\n       // convert the position from pixels to 0.0 to 1.0\n       vec2 zeroToOne = a_position / u_resolution;\n\n       // convert from 0->1 to 0->2\n       vec2 zeroToTwo = zeroToOne * 2.0;\n\n       // convert from 0->2 to -1->+1 (clip space)\n       vec2 clipSpace = zeroToTwo - 1.0;\n\n       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1); // * vec(1, -1) flips y so it's top-left corner.\n  }";
webgl_30.lessons.translation_2d.draw_BANG_ = (function webgl_30$lessons$translation_2d$draw_BANG_(timestamp){
var map__54627 = cljs.core.deref(webgl_30.lessons.translation_2d.state_atom);
var map__54627__$1 = (((((!((map__54627 == null))))?(((((map__54627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54627):map__54627);
var state = map__54627__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var objects_to_draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54627__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
webgl_30.webgl.draw_scene_BANG_(state);

var seq__54629 = cljs.core.seq(objects_to_draw);
var chunk__54630 = null;
var count__54631 = (0);
var i__54632 = (0);
while(true){
if((i__54632 < count__54631)){
var map__54637 = chunk__54630.cljs$core$IIndexed$_nth$arity$2(null,i__54632);
var map__54637__$1 = (((((!((map__54637 == null))))?(((((map__54637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54637):map__54637);
var buffer_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54637__$1,new cljs.core.Keyword(null,"buffer-info","buffer-info",-1909771526));
webgl_30.webgl.buffer_data(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(buffer_info),new cljs.core.Keyword(null,"src-data","src-data",1911227934),(new Float32Array(webgl_30.webgl.get_rectangle(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect)], null)))),new cljs.core.Keyword(null,"usage","usage",-1583752910),new cljs.core.Keyword(null,"usage","usage",-1583752910).cljs$core$IFn$_invoke$arity$1(buffer_info)], null));


var G__54648 = seq__54629;
var G__54649 = chunk__54630;
var G__54650 = count__54631;
var G__54651 = (i__54632 + (1));
seq__54629 = G__54648;
chunk__54630 = G__54649;
count__54631 = G__54650;
i__54632 = G__54651;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54629);
if(temp__5735__auto__){
var seq__54629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54629__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__54629__$1);
var G__54655 = cljs.core.chunk_rest(seq__54629__$1);
var G__54656 = c__4609__auto__;
var G__54657 = cljs.core.count(c__4609__auto__);
var G__54658 = (0);
seq__54629 = G__54655;
chunk__54630 = G__54656;
count__54631 = G__54657;
i__54632 = G__54658;
continue;
} else {
var map__54639 = cljs.core.first(seq__54629__$1);
var map__54639__$1 = (((((!((map__54639 == null))))?(((((map__54639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54639):map__54639);
var buffer_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54639__$1,new cljs.core.Keyword(null,"buffer-info","buffer-info",-1909771526));
webgl_30.webgl.buffer_data(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(buffer_info),new cljs.core.Keyword(null,"src-data","src-data",1911227934),(new Float32Array(webgl_30.webgl.get_rectangle(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect)], null)))),new cljs.core.Keyword(null,"usage","usage",-1583752910),new cljs.core.Keyword(null,"usage","usage",-1583752910).cljs$core$IFn$_invoke$arity$1(buffer_info)], null));


var G__54659 = cljs.core.next(seq__54629__$1);
var G__54660 = null;
var G__54661 = (0);
var G__54662 = (0);
seq__54629 = G__54659;
chunk__54630 = G__54660;
count__54631 = G__54661;
i__54632 = G__54662;
continue;
}
} else {
return null;
}
}
break;
}
});
webgl_30.lessons.translation_2d.setup_BANG_ = (function webgl_30$lessons$translation_2d$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.translation_2d.state_atom,(function (p__54641){
var map__54642 = p__54641;
var map__54642__$1 = (((((!((map__54642 == null))))?(((((map__54642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54642):map__54642);
var state = map__54642__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54642__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54642__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
var program = webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.translation_2d.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.translation_2d.vertex_shader], null));
var buffer_info = webgl_30.webgl.create_buffer(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(webgl_30.webgl.get_rectangle(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect)], null)))),new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.STATIC_DRAW,new cljs.core.Keyword(null,"target","target",253001721),gl.ARRAY_BUFFER], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"buffer-info","buffer-info",-1909771526),buffer_info,new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"location","location",1815599388),gl.getAttribLocation(program,"a_position"),new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false,new cljs.core.Keyword(null,"stride","stride",-1172818435),(0),new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"buffer-info","buffer-info",-1909771526),buffer_info], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"location","location",1815599388),webgl_30.webgl.get_uniform_location(gl,program,"u_resolution"),new cljs.core.Keyword(null,"type","type",1174270348),"uniform2f",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gl["canvas"]["width"]),(gl["canvas"]["height"])], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"location","location",1815599388),webgl_30.webgl.get_uniform_location(gl,program,"u_color"),new cljs.core.Keyword(null,"type","type",1174270348),"uniform4f",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(rect)], null)], null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),(6)], null)], null)], null));
}));
});
webgl_30.lessons.translation_2d.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - WebGL Fundamentals"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Translating a rect"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),"https://github.com/erichall/webgl-30/blob/master/src/webgl_30/lessons/translation_2d.cljs",new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"https://webglfundamentals.org/webgl/lessons/webgl-2d-translation.html",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "translation";
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.translation_2d.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

webgl_30.lessons.translation_2d.setup_BANG_();

return requestAnimationFrame(webgl_30.lessons.translation_2d.draw_BANG_);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"30px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),"x"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.translation_2d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185)], null),val);

return requestAnimationFrame(webgl_30.lessons.translation_2d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.translation_2d.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185)], null)),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"id","id",-1388402092),"x-slider"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.translation_2d.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),"y"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.translation_2d.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"y","y",-1757859776)], null),val);

return requestAnimationFrame(webgl_30.lessons.translation_2d.draw_BANG_);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.translation_2d.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"y","y",-1757859776)], null)),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(400),new cljs.core.Keyword(null,"id","id",-1388402092),"y-slider"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.translation_2d.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"y","y",-1757859776)], null))], null)], null)], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.translation_2d.lesson', webgl_30.lessons.translation_2d.lesson);

//# sourceMappingURL=webgl_30.lessons.translation_2d.js.map
