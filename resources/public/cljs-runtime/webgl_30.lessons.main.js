goog.provide('webgl_30.lessons.main');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
goog.require('webgl_30.lessons.fundamentals_0');
goog.require('webgl_30.lessons.fundamentals_1');
goog.require('webgl_30.lessons.fundamentals_2');
goog.require('webgl_30.lessons.translation_2d_0');
goog.require('webgl_30.lessons.translation_2d_1');
goog.require('webgl_30.lessons.rotation_2d_0');
goog.require('webgl_30.lessons.scale_2d');
goog.require('webgl_30.lessons.matrices_2d_0');
goog.require('webgl_30.lessons.matrices_2d_1');
goog.require('webgl_30.lessons.matrices_2d_2');
goog.require('webgl_30.lessons.orthographic_3d_0');
goog.require('webgl_30.lessons.orthographic_3d_1');
goog.require('webgl_30.lessons.perspective_3d_0');
goog.require('webgl_30.lessons.perspective_3d_1');
goog.require('webgl_30.lessons.cameras_0');
goog.require('webgl_30.lessons.cameras_1');
goog.require('webgl_30.lessons.animations');
goog.require('webgl_30.lessons.textures_0');
goog.require('webgl_30.lessons.textures_1');
goog.require('webgl_30.lessons.textures_2');
goog.require('webgl_30.lessons.textures_3');
goog.require('webgl_30.lessons.textures_3_revised');
goog.require('webgl_30.lessons.hello_point_1');
goog.require('webgl_30.lessons.hello_point_2');
goog.require('webgl_30.lessons.click_point');
goog.require('webgl_30.lessons.color_point');
goog.require('webgl_30.lessons.multipoint');
goog.require('webgl_30.lessons.conway');
webgl_30.lessons.main.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-page-index","active-page-index",2056746743),(0),new cljs.core.Keyword(null,"lessons","lessons",1419621080),new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.fundamentals_0.lesson,webgl_30.lessons.fundamentals_1.lesson,webgl_30.lessons.fundamentals_2.lesson,webgl_30.lessons.translation_2d_0.lesson,webgl_30.lessons.translation_2d_1.lesson,webgl_30.lessons.rotation_2d_0.lesson,webgl_30.lessons.scale_2d.lesson,webgl_30.lessons.matrices_2d_0.lesson,webgl_30.lessons.matrices_2d_1.lesson,webgl_30.lessons.matrices_2d_2.lesson,webgl_30.lessons.orthographic_3d_0.lesson,webgl_30.lessons.orthographic_3d_1.lesson,webgl_30.lessons.perspective_3d_0.lesson,webgl_30.lessons.perspective_3d_1.lesson,webgl_30.lessons.cameras_0.lesson,webgl_30.lessons.cameras_1.lesson,webgl_30.lessons.animations.lesson,webgl_30.lessons.textures_0.lesson,webgl_30.lessons.textures_1.lesson,webgl_30.lessons.textures_2.lesson,webgl_30.lessons.textures_3.lesson,webgl_30.lessons.textures_3_revised.lesson,webgl_30.lessons.hello_point_1.lesson,webgl_30.lessons.hello_point_2.lesson,webgl_30.lessons.click_point.lesson,webgl_30.lessons.color_point.lesson,webgl_30.lessons.multipoint.lesson], null)], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.main !== 'undefined') && (typeof webgl_30.lessons.main.state_atom !== 'undefined')){
} else {
webgl_30.lessons.main.state_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.main.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.main.state_atom,webgl_30.lessons.main.initial_state);

cljs.core.add_watch(webgl_30.lessons.main.state_atom,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (_,___$1,___$2,___$3){
var G__26853 = cljs.core.deref(webgl_30.lessons.main.state_atom);
return (webgl_30.lessons.main.render_component.cljs$core$IFn$_invoke$arity$1 ? webgl_30.lessons.main.render_component.cljs$core$IFn$_invoke$arity$1(G__26853) : webgl_30.lessons.main.render_component.call(null,G__26853));
}));
} else {
}
webgl_30.lessons.main.arrow = (function webgl_30$lessons$main$arrow(){
var click_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (p__26854){
var map__26855 = p__26854;
var map__26855__$1 = (((((!((map__26855 == null))))?(((((map__26855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26855):map__26855);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (){
cljs.core.reset_BANG_(click_atom,true);

return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
return cljs.core.reset_BANG_(click_atom,false);
}),new cljs.core.Keyword(null,"viewport","viewport",443342715),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(angle),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((width / (2))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((height / (2))),")"].join(''),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref(click_atom))?0.8:(1)),new cljs.core.Keyword(null,"filter","filter",-948537934),"drop-shadow( 4px 4px 3px rgba(0, 0, 0, .7))"], null),new cljs.core.Keyword(null,"points","points",-1486596883),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((width / (2))),",0 0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)].join('')], null)], null)], null);
});
});
webgl_30.lessons.main.navigation = (function webgl_30$lessons$main$navigation(p__26857){
var map__26858 = p__26857;
var map__26858__$1 = (((((!((map__26858 == null))))?(((((map__26858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26858):map__26858);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var on_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858__$1,new cljs.core.Keyword(null,"on-left","on-left",-140519861));
var on_right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858__$1,new cljs.core.Keyword(null,"on-right","on-right",2022790062));
var show_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858__$1,new cljs.core.Keyword(null,"show-left","show-left",1181806507));
var show_right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858__$1,new cljs.core.Keyword(null,"show-right","show-right",1802881665));
var arrow_width = (36);
var arrow_height = (36);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),style], 0))], null),(cljs.core.truth_(show_left)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.main.arrow,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),arrow_height,new cljs.core.Keyword(null,"width","width",-384071477),arrow_width,new cljs.core.Keyword(null,"angle","angle",1622094254),(270),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_left,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null)], null):null),(cljs.core.truth_(show_right)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.main.arrow,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),arrow_height,new cljs.core.Keyword(null,"width","width",-384071477),arrow_width,new cljs.core.Keyword(null,"angle","angle",1622094254),(90),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_right], null)], null):null)], null);
});
webgl_30.lessons.main.app = (function webgl_30$lessons$main$app(p__26860){
var map__26861 = p__26860;
var map__26861__$1 = (((((!((map__26861 == null))))?(((((map__26861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26861):map__26861);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26861__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__26863 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lessons","lessons",1419621080),new cljs.core.Keyword(null,"active-page-index","active-page-index",2056746743).cljs$core$IFn$_invoke$arity$1(state)], null));
var map__26863__$1 = (((((!((map__26863 == null))))?(((((map__26863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26863):map__26863);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26863__$1,new cljs.core.Keyword(null,"title","title",636505583));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26863__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26863__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var tutorial_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26863__$1,new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.main.navigation,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"show-left","show-left",1181806507),(new cljs.core.Keyword(null,"active-page-index","active-page-index",2056746743).cljs$core$IFn$_invoke$arity$1(state) > (0)),new cljs.core.Keyword(null,"show-right","show-right",1802881665),(new cljs.core.Keyword(null,"active-page-index","active-page-index",2056746743).cljs$core$IFn$_invoke$arity$1(state) < (cljs.core.count(new cljs.core.Keyword(null,"lessons","lessons",1419621080).cljs$core$IFn$_invoke$arity$1(state)) - (1))),new cljs.core.Keyword(null,"on-left","on-left",-140519861),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.main.state_atom,(function (p__26865){
var map__26866 = p__26865;
var map__26866__$1 = (((((!((map__26866 == null))))?(((((map__26866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26866):map__26866);
var state__$1 = map__26866__$1;
var active_page_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26866__$1,new cljs.core.Keyword(null,"active-page-index","active-page-index",2056746743));
if((active_page_index === (0))){
return state__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"active-page-index","active-page-index",2056746743),(active_page_index - (1)));
}
}));
}),new cljs.core.Keyword(null,"on-right","on-right",2022790062),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.main.state_atom,(function (p__26868){
var map__26869 = p__26868;
var map__26869__$1 = (((((!((map__26869 == null))))?(((((map__26869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26869):map__26869);
var state__$1 = map__26869__$1;
var lessons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26869__$1,new cljs.core.Keyword(null,"lessons","lessons",1419621080));
var active_page_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26869__$1,new cljs.core.Keyword(null,"active-page-index","active-page-index",2056746743));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(lessons) - (1)),active_page_index)){
return state__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"active-page-index","active-page-index",2056746743),(active_page_index + (1)));
}
}));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),"Clojure implementation of ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["https://webglfundamentals.org/webgl/lessons/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tutorial_source)].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(0, 181, 255, 1)",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),tutorial_source], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Github: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["https://github.com/erichall/webgl-30/blob/master/src/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source)].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(0, 181, 255, 1)",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"[source]"], null)], null)], null)], null);
});
webgl_30.lessons.main.render_component = (function webgl_30$lessons$main$render_component(state){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.main.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null)], null),document.getElementById("app"));
});
webgl_30.lessons.main.init_BANG_ = (function webgl_30$lessons$main$init_BANG_(){
return webgl_30.lessons.main.render_component(cljs.core.deref(webgl_30.lessons.main.state_atom));
});
webgl_30.lessons.main.reload_BANG_ = (function webgl_30$lessons$main$reload_BANG_(){
return webgl_30.lessons.main.render_component(cljs.core.deref(webgl_30.lessons.main.state_atom));
});

//# sourceMappingURL=webgl_30.lessons.main.js.map
