goog.provide('webgl_30.lessons.fundamentals_0');
goog.require('cljs.core');
goog.require('webgl_30.webgl');
goog.require('webgl_30.core');
goog.require('webgl_30.component');
webgl_30.lessons.fundamentals_0.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gl","gl",-246422634),null], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.fundamentals_0 !== 'undefined') && (typeof webgl_30.lessons.fundamentals_0.state_atom !== 'undefined')){
} else {
webgl_30.lessons.fundamentals_0.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.fundamentals_0.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.fundamentals_0.state_atom,webgl_30.lessons.fundamentals_0.initial_state);
} else {
}
webgl_30.lessons.fundamentals_0.fragment_shader = "precision mediump float;\n   void main() {\n       gl_FragColor = vec4(1, 0, 0.5, 1);\n   }";
webgl_30.lessons.fundamentals_0.vertex_shader = "// an attribute will receive data from a buffer\n  attribute vec4 a_position;\n  void main() {\n       gl_Position = a_position;\n  }";
webgl_30.lessons.fundamentals_0.draw_BANG_ = (function webgl_30$lessons$fundamentals_0$draw_BANG_(timestamp){
return webgl_30.webgl.draw_scene_BANG_(cljs.core.deref(webgl_30.lessons.fundamentals_0.state_atom));
});
webgl_30.lessons.fundamentals_0.setup_BANG_ = (function webgl_30$lessons$fundamentals_0$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.fundamentals_0.state_atom,(function (p__26072){
var map__26076 = p__26072;
var map__26076__$1 = (((((!((map__26076 == null))))?(((((map__26076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26076):map__26076);
var state = map__26076__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26076__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.fundamentals_0.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.fundamentals_0.vertex_shader], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"too","too",-1323727127),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.fundamentals_0.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.fundamentals_0.vertex_shader], null)),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT,new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),0.5,0.7,(0)], null)))], null))], null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),(3)], null)], null)], null));
}));
});
webgl_30.lessons.fundamentals_0.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - WebGL Fundamentals"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"A simple triangle"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.fundamentals_0.state_atom;},new cljs.core.Symbol("webgl-30.lessons.fundamentals-0","state-atom","webgl-30.lessons.fundamentals-0/state-atom",2089492649,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.fundamentals-0","webgl-30.lessons.fundamentals-0",-1296940854,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/fundamentals_0.cljs",20,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.fundamentals_0.state_atom)?webgl_30.lessons.fundamentals_0.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"webgl-fundamentals.html",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = "fundamentals";
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.fundamentals_0.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

webgl_30.lessons.fundamentals_0.setup_BANG_();

return requestAnimationFrame(webgl_30.lessons.fundamentals_0.draw_BANG_);
})], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.fundamentals_0.lesson', webgl_30.lessons.fundamentals_0.lesson);

//# sourceMappingURL=webgl_30.lessons.fundamentals_0.js.map
