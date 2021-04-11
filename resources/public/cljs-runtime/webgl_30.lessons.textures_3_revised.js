goog.provide('webgl_30.lessons.textures_3_revised');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('webgl_30.math');
goog.require('webgl_30.webgl');
goog.require('webgl_30.shapes');
goog.require('webgl_30.core');
goog.require('webgl_30.component');
webgl_30.lessons.textures_3_revised.initial_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"raf-id","raf-id",2001486474),null,new cljs.core.Keyword(null,"running?","running?",-257884763),false,new cljs.core.Keyword(null,"allocate-FB-texture","allocate-FB-texture",1791665141),true,new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field-of-view-radians","field-of-view-radians",874906122),webgl_30.math.deg__GT_rad((60))], null)], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.textures_3_revised !== 'undefined') && (typeof webgl_30.lessons.textures_3_revised.state_atom !== 'undefined')){
} else {
webgl_30.lessons.textures_3_revised.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.textures_3_revised.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.textures_3_revised.state_atom,webgl_30.lessons.textures_3_revised.initial_state);
} else {
}
webgl_30.lessons.textures_3_revised.fragment_shader = "precision mediump float;\n\n   varying vec2 v_texcoord;\n\n   // The texture\n   uniform sampler2D u_texture;\n\n   void main() {\n       gl_FragColor = texture2D(u_texture, v_texcoord);\n   }";
webgl_30.lessons.textures_3_revised.vertex_shader = "attribute vec4 a_position;\n   attribute vec2 a_texcoord;\n\n  uniform mat4 u_matrix;\n\n  varying vec2 v_texcoord;\n\n  void main() {\n    gl_Position = u_matrix * a_position;\n\n    // this can be passed to the fragment shader\n    v_texcoord = a_texcoord;\n  }";
webgl_30.lessons.textures_3_revised.draw_BANG_ = (function webgl_30$lessons$textures_3_revised$draw_BANG_(timestamp,p__26379){
var map__26380 = p__26379;
var map__26380__$1 = (((((!((map__26380 == null))))?(((((map__26380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26380):map__26380);
var state = map__26380__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26380__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var allocate_FB_texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26380__$1,new cljs.core.Keyword(null,"allocate-FB-texture","allocate-FB-texture",1791665141));
var objects_to_draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26380__$1,new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26380__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26380__$1,new cljs.core.Keyword(null,"rect","rect",-108902628));
if(cljs.core.truth_((function (){var and__4174__auto__ = allocate_FB_texture;
if(cljs.core.truth_(and__4174__auto__)){
return webgl_30.webgl.framebuffer_complete_QMARK_(gl);
} else {
return and__4174__auto__;
}
})())){
var map__26419_26509 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"fb-texture","fb-texture",-655005182)], null));
var map__26419_26510__$1 = (((((!((map__26419_26509 == null))))?(((((map__26419_26509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26419_26509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26419_26509):map__26419_26509);
var texture_obj_26511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26419_26510__$1,new cljs.core.Keyword(null,"texture-obj","texture-obj",-1787109150));
var target_26512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26419_26510__$1,new cljs.core.Keyword(null,"target","target",253001721));
var level_26513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26419_26510__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var internalformat_26514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26419_26510__$1,new cljs.core.Keyword(null,"internalformat","internalformat",1241874311));
var format_26515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26419_26510__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var type_26516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26419_26510__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pixels_26517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26419_26510__$1,new cljs.core.Keyword(null,"pixels","pixels",-40523077));
webgl_30.webgl.pixels__GT_object.cljs$core$IFn$_invoke$arity$variadic(gl,texture_obj_26511,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target_26512,level_26513,internalformat_26514,(100),(100),(0),format_26515,type_26516,null], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_3_revised.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"allocate-FB-texture","allocate-FB-texture",1791665141),false);
} else {
}

webgl_30.webgl.bind_framebuffer_BANG_(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"framebuffers","framebuffers",-874456281),new cljs.core.Keyword(null,"framebuffer","framebuffer",-1339031455)], null)));

webgl_30.webgl.set_gl_viewport_BANG_.cljs$core$IFn$_invoke$arity$3(gl,(100),(100));

webgl_30.webgl.clear_color_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(0),(0),(1)], 0));

webgl_30.webgl.clear_BANG_(gl);

var map__26423_26520 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-f","my-f",1191307989)], null));
var map__26423_26521__$1 = (((((!((map__26423_26520 == null))))?(((((map__26423_26520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26423_26520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26423_26520):map__26423_26520);
var program_26522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26423_26521__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attributes_26523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26423_26521__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var features_26524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26423_26521__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
webgl_30.webgl.use_program_BANG_(gl,program_26522);

webgl_30.webgl.enable_features_BANG_(gl,features_26524);

webgl_30.webgl.set_attributes_BANG_(gl,program_26522,cljs.core.vals(attributes_26523));

var aspect_26525 = webgl_30.webgl.get_aspect(gl);
var z_near_26526 = (1);
var z_far_26527 = (2000);
var x_spacing_26528 = 1.2;
var y_spacing_26529 = 0.7;
var sec_26530 = (timestamp * 0.001);
var projection_matrix_26531 = webgl_30.math.perspective_3d_matrix(new cljs.core.Keyword(null,"field-of-view-radians","field-of-view-radians",874906122).cljs$core$IFn$_invoke$arity$1(rect),aspect_26525,z_near_26526,z_far_26527);
var program_26532 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"program","program",781564284)], null));
var seq__26427_26535 = cljs.core.seq(settings);
var chunk__26428_26536 = null;
var count__26429_26537 = (0);
var i__26430_26538 = (0);
while(true){
if((i__26430_26538 < count__26429_26537)){
var s_26539 = chunk__26428_26536.cljs$core$IIndexed$_nth$arity$2(null,i__26430_26538);
var z_26540 = ((- (5)) + new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(s_26539));
var r_26541 = (Math.abs(z_26540) * (function (){var G__26459 = (new cljs.core.Keyword(null,"field-of-view-radians","field-of-view-radians",874906122).cljs$core$IFn$_invoke$arity$1(rect) * 0.5);
return Math.sin(G__26459);
})());
var x_26542 = (r_26541 * (function (){var G__26460 = (sec_26530 * 0.2);
return Math.sin(G__26460);
})());
var y_26543 = ((r_26541 * 0.5) * (function (){var G__26461 = (sec_26530 * 0.2);
return Math.cos(G__26461);
})());
var r2_26544 = ((r_26541 * 0.2) + (1));
var map__26458_26545 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"texture","texture",-266291651)], null));
var map__26458_26546__$1 = (((((!((map__26458_26545 == null))))?(((((map__26458_26545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26458_26545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26458_26545):map__26458_26545);
var texture_obj_26547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26458_26546__$1,new cljs.core.Keyword(null,"texture-obj","texture-obj",-1787109150));
var params_i_26548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26458_26546__$1,new cljs.core.Keyword(null,"params-i","params-i",-1093656573));
var params_i_26549__$1 = cljs.core.assoc_in(params_i_26548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-filter","min-filter",1035644374),new cljs.core.Keyword(null,"param","param",2013631823)], null),new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(s_26539));
var translation_matrix_26550 = webgl_30.math.translation_3d_matrix(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_26542 + ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(s_26539) * x_spacing_26528) * r2_26544)),(y_26543 + ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(s_26539) * y_spacing_26529) * r2_26544)),z_26540], null));
webgl_30.webgl.bind_texture_BANG_(gl,gl.TEXTURE_2D,texture_obj_26547);

var seq__26463_26551 = cljs.core.seq(cljs.core.vals(params_i_26549__$1));
var chunk__26464_26552 = null;
var count__26465_26553 = (0);
var i__26466_26554 = (0);
while(true){
if((i__26466_26554 < count__26465_26553)){
var p_26555 = chunk__26464_26552.cljs$core$IIndexed$_nth$arity$2(null,i__26466_26554);
webgl_30.webgl.set_tex_parameteri_BANG_(gl,p_26555);


var G__26556 = seq__26463_26551;
var G__26557 = chunk__26464_26552;
var G__26558 = count__26465_26553;
var G__26559 = (i__26466_26554 + (1));
seq__26463_26551 = G__26556;
chunk__26464_26552 = G__26557;
count__26465_26553 = G__26558;
i__26466_26554 = G__26559;
continue;
} else {
var temp__5735__auto___26560 = cljs.core.seq(seq__26463_26551);
if(temp__5735__auto___26560){
var seq__26463_26561__$1 = temp__5735__auto___26560;
if(cljs.core.chunked_seq_QMARK_(seq__26463_26561__$1)){
var c__4609__auto___26562 = cljs.core.chunk_first(seq__26463_26561__$1);
var G__26563 = cljs.core.chunk_rest(seq__26463_26561__$1);
var G__26564 = c__4609__auto___26562;
var G__26565 = cljs.core.count(c__4609__auto___26562);
var G__26566 = (0);
seq__26463_26551 = G__26563;
chunk__26464_26552 = G__26564;
count__26465_26553 = G__26565;
i__26466_26554 = G__26566;
continue;
} else {
var p_26567 = cljs.core.first(seq__26463_26561__$1);
webgl_30.webgl.set_tex_parameteri_BANG_(gl,p_26567);


var G__26568 = cljs.core.next(seq__26463_26561__$1);
var G__26569 = null;
var G__26570 = (0);
var G__26571 = (0);
seq__26463_26551 = G__26568;
chunk__26464_26552 = G__26569;
count__26465_26553 = G__26570;
i__26466_26554 = G__26571;
continue;
}
} else {
}
}
break;
}

webgl_30.webgl.set_uniform_BANG_(gl,program_26532,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"u_matrix",new cljs.core.Keyword(null,"type","type",1174270348),"uniformMatrix4fv",new cljs.core.Keyword(null,"transpose","transpose",-474726680),false,new cljs.core.Keyword(null,"values","values",372645556),webgl_30.math.matrix_multiply_3d(translation_matrix_26550,projection_matrix_26531)], null));

webgl_30.webgl.set_uniform_BANG_(gl,program_26532,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_texture",new cljs.core.Keyword(null,"type","type",1174270348),"uniform1i",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null));

webgl_30.webgl.draw_arrays_BANG_(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),((1) * (6))], null));


var G__26575 = seq__26427_26535;
var G__26576 = chunk__26428_26536;
var G__26577 = count__26429_26537;
var G__26578 = (i__26430_26538 + (1));
seq__26427_26535 = G__26575;
chunk__26428_26536 = G__26576;
count__26429_26537 = G__26577;
i__26430_26538 = G__26578;
continue;
} else {
var temp__5735__auto___26579 = cljs.core.seq(seq__26427_26535);
if(temp__5735__auto___26579){
var seq__26427_26580__$1 = temp__5735__auto___26579;
if(cljs.core.chunked_seq_QMARK_(seq__26427_26580__$1)){
var c__4609__auto___26581 = cljs.core.chunk_first(seq__26427_26580__$1);
var G__26582 = cljs.core.chunk_rest(seq__26427_26580__$1);
var G__26583 = c__4609__auto___26581;
var G__26584 = cljs.core.count(c__4609__auto___26581);
var G__26585 = (0);
seq__26427_26535 = G__26582;
chunk__26428_26536 = G__26583;
count__26429_26537 = G__26584;
i__26430_26538 = G__26585;
continue;
} else {
var s_26586 = cljs.core.first(seq__26427_26580__$1);
var z_26587 = ((- (5)) + new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(s_26586));
var r_26588 = (Math.abs(z_26587) * (function (){var G__26471 = (new cljs.core.Keyword(null,"field-of-view-radians","field-of-view-radians",874906122).cljs$core$IFn$_invoke$arity$1(rect) * 0.5);
return Math.sin(G__26471);
})());
var x_26589 = (r_26588 * (function (){var G__26472 = (sec_26530 * 0.2);
return Math.sin(G__26472);
})());
var y_26590 = ((r_26588 * 0.5) * (function (){var G__26473 = (sec_26530 * 0.2);
return Math.cos(G__26473);
})());
var r2_26591 = ((r_26588 * 0.2) + (1));
var map__26470_26592 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"texture","texture",-266291651)], null));
var map__26470_26593__$1 = (((((!((map__26470_26592 == null))))?(((((map__26470_26592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26470_26592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26470_26592):map__26470_26592);
var texture_obj_26594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26470_26593__$1,new cljs.core.Keyword(null,"texture-obj","texture-obj",-1787109150));
var params_i_26595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26470_26593__$1,new cljs.core.Keyword(null,"params-i","params-i",-1093656573));
var params_i_26596__$1 = cljs.core.assoc_in(params_i_26595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-filter","min-filter",1035644374),new cljs.core.Keyword(null,"param","param",2013631823)], null),new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(s_26586));
var translation_matrix_26597 = webgl_30.math.translation_3d_matrix(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_26589 + ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(s_26586) * x_spacing_26528) * r2_26591)),(y_26590 + ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(s_26586) * y_spacing_26529) * r2_26591)),z_26587], null));
webgl_30.webgl.bind_texture_BANG_(gl,gl.TEXTURE_2D,texture_obj_26594);

var seq__26475_26601 = cljs.core.seq(cljs.core.vals(params_i_26596__$1));
var chunk__26476_26602 = null;
var count__26477_26603 = (0);
var i__26478_26604 = (0);
while(true){
if((i__26478_26604 < count__26477_26603)){
var p_26605 = chunk__26476_26602.cljs$core$IIndexed$_nth$arity$2(null,i__26478_26604);
webgl_30.webgl.set_tex_parameteri_BANG_(gl,p_26605);


var G__26606 = seq__26475_26601;
var G__26607 = chunk__26476_26602;
var G__26608 = count__26477_26603;
var G__26609 = (i__26478_26604 + (1));
seq__26475_26601 = G__26606;
chunk__26476_26602 = G__26607;
count__26477_26603 = G__26608;
i__26478_26604 = G__26609;
continue;
} else {
var temp__5735__auto___26613__$1 = cljs.core.seq(seq__26475_26601);
if(temp__5735__auto___26613__$1){
var seq__26475_26614__$1 = temp__5735__auto___26613__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26475_26614__$1)){
var c__4609__auto___26615 = cljs.core.chunk_first(seq__26475_26614__$1);
var G__26616 = cljs.core.chunk_rest(seq__26475_26614__$1);
var G__26617 = c__4609__auto___26615;
var G__26618 = cljs.core.count(c__4609__auto___26615);
var G__26619 = (0);
seq__26475_26601 = G__26616;
chunk__26476_26602 = G__26617;
count__26477_26603 = G__26618;
i__26478_26604 = G__26619;
continue;
} else {
var p_26620 = cljs.core.first(seq__26475_26614__$1);
webgl_30.webgl.set_tex_parameteri_BANG_(gl,p_26620);


var G__26621 = cljs.core.next(seq__26475_26614__$1);
var G__26622 = null;
var G__26623 = (0);
var G__26624 = (0);
seq__26475_26601 = G__26621;
chunk__26476_26602 = G__26622;
count__26477_26603 = G__26623;
i__26478_26604 = G__26624;
continue;
}
} else {
}
}
break;
}

webgl_30.webgl.set_uniform_BANG_(gl,program_26532,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"u_matrix",new cljs.core.Keyword(null,"type","type",1174270348),"uniformMatrix4fv",new cljs.core.Keyword(null,"transpose","transpose",-474726680),false,new cljs.core.Keyword(null,"values","values",372645556),webgl_30.math.matrix_multiply_3d(translation_matrix_26597,projection_matrix_26531)], null));

webgl_30.webgl.set_uniform_BANG_(gl,program_26532,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_texture",new cljs.core.Keyword(null,"type","type",1174270348),"uniform1i",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null));

webgl_30.webgl.draw_arrays_BANG_(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),((1) * (6))], null));


var G__26625 = cljs.core.next(seq__26427_26580__$1);
var G__26626 = null;
var G__26627 = (0);
var G__26628 = (0);
seq__26427_26535 = G__26625;
chunk__26428_26536 = G__26626;
count__26429_26537 = G__26627;
i__26430_26538 = G__26628;
continue;
}
} else {
}
}
break;
}

webgl_30.webgl.bind_framebuffer_BANG_(gl,null);

webgl_30.webgl.set_gl_viewport_BANG_.cljs$core$IFn$_invoke$arity$1(gl);

webgl_30.webgl.bind_texture_BANG_(gl,gl.TEXTURE_2D,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects_to_draw,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"fb-texture","fb-texture",-655005182),new cljs.core.Keyword(null,"texture-obj","texture-obj",-1787109150)], null)));

webgl_30.webgl.set_uniform_BANG_(gl,program_26532,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"u_matrix",new cljs.core.Keyword(null,"type","type",1174270348),"uniformMatrix4fv",new cljs.core.Keyword(null,"transpose","transpose",-474726680),false,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0),(0),(2),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1)], null)], null));

webgl_30.webgl.clear_BANG_(gl);

webgl_30.webgl.draw_arrays_BANG_(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),((1) * (6))], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_3_revised.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"raf-id","raf-id",2001486474),requestAnimationFrame((function (t){
var G__26500 = t;
var G__26501 = cljs.core.deref(webgl_30.lessons.textures_3_revised.state_atom);
return (webgl_30.lessons.textures_3_revised.draw_BANG_.cljs$core$IFn$_invoke$arity$2 ? webgl_30.lessons.textures_3_revised.draw_BANG_.cljs$core$IFn$_invoke$arity$2(G__26500,G__26501) : webgl_30.lessons.textures_3_revised.draw_BANG_.call(null,G__26500,G__26501));
})));
});
webgl_30.lessons.textures_3_revised.raf_draw_BANG_ = (function webgl_30$lessons$textures_3_revised$raf_draw_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_3_revised.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"raf-id","raf-id",2001486474),requestAnimationFrame((function (t){
return webgl_30.lessons.textures_3_revised.draw_BANG_(t,state);
})));
});
webgl_30.lessons.textures_3_revised.setup_BANG_ = (function webgl_30$lessons$textures_3_revised$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.textures_3_revised.state_atom,(function (p__26502){
var map__26503 = p__26502;
var map__26503__$1 = (((((!((map__26503 == null))))?(((((map__26503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26503):map__26503);
var state = map__26503__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26503__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.textures_3_revised.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.textures_3_revised.vertex_shader], null));
var fb_texture = webgl_30.webgl.texture_pixels(gl,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pixels","pixels",-40523077),(new Uint8Array(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255),(255)], null))),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"dont-allocate?","dont-allocate?",1712109823),false,new cljs.core.Keyword(null,"params-i","params-i",-1093656573),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clamp-s","clamp-s",-1170385331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p-name","p-name",-1046890264),gl.TEXTURE_WRAP_S,new cljs.core.Keyword(null,"param","param",2013631823),gl.CLAMP_TO_EDGE], null),new cljs.core.Keyword(null,"clamp-t","clamp-t",1844922457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p-name","p-name",-1046890264),gl.TEXTURE_WRAP_T,new cljs.core.Keyword(null,"param","param",2013631823),gl.CLAMP_TO_EDGE], null),new cljs.core.Keyword(null,"min-filter","min-filter",1035644374),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p-name","p-name",-1046890264),gl.TEXTURE_MIN_FILTER,new cljs.core.Keyword(null,"param","param",2013631823),gl.NEAREST], null),new cljs.core.Keyword(null,"mag-filter","mag-filter",-1365841651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p-name","p-name",-1046890264),gl.TEXTURE_MAG_FILTER,new cljs.core.Keyword(null,"param","param",2013631823),gl.NEAREST], null)], null)], null));
var _ = webgl_30.webgl.initialize_texture_from_img("images/mip-low-res-example.png",(function (img){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_3_revised.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"texture","texture",-266291651)], null),webgl_30.webgl.texture_img(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pixels","pixels",-40523077),img,new cljs.core.Keyword(null,"mipmap?","mipmap?",1352256811),true,new cljs.core.Keyword(null,"params-i","params-i",-1093656573),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clamp-s","clamp-s",-1170385331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p-name","p-name",-1046890264),gl.TEXTURE_WRAP_S,new cljs.core.Keyword(null,"param","param",2013631823),gl.CLAMP_TO_EDGE], null),new cljs.core.Keyword(null,"clamp-t","clamp-t",1844922457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p-name","p-name",-1046890264),gl.TEXTURE_WRAP_T,new cljs.core.Keyword(null,"param","param",2013631823),gl.CLAMP_TO_EDGE], null),new cljs.core.Keyword(null,"min-filter","min-filter",1035644374),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p-name","p-name",-1046890264),gl.TEXTURE_MIN_FILTER,new cljs.core.Keyword(null,"param","param",2013631823),gl.NEAREST], null),new cljs.core.Keyword(null,"mag-filter","mag-filter",-1365841651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p-name","p-name",-1046890264),gl.TEXTURE_MAG_FILTER,new cljs.core.Keyword(null,"param","param",2013631823),gl.LINEAR], null)], null)], null)));

return requestAnimationFrame((function (t){
return webgl_30.lessons.textures_3_revised.draw_BANG_(t,cljs.core.deref(webgl_30.lessons.textures_3_revised.state_atom));
}));
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"clear-depth?","clear-depth?",-2095035190),true),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-3),new cljs.core.Keyword(null,"z","z",-789527183),(-30),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-3),new cljs.core.Keyword(null,"z","z",-789527183),(-30),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(-3),new cljs.core.Keyword(null,"z","z",-789527183),(-30),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST_MIPMAP_LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"z","z",-789527183),(-10),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"z","z",-789527183),(-10),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"z","z",-789527183),(-10),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST_MIPMAP_LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.LINEAR_MIPMAP_NEAREST], null)], null)),new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.CULL_FACE,gl.DEPTH_TEST], null),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5], null)))], null)),new cljs.core.Keyword(null,"a_texcoord","a_texcoord",-1587223074),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a_texcoord",new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-1),(2),(-1),(-3),(4),(-3),(4),(2),(-1),(2),(4)], null)))], null))], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fb-texture","fb-texture",-655005182),fb_texture,new cljs.core.Keyword(null,"texture","texture",-266291651),null], null),new cljs.core.Keyword(null,"framebuffers","framebuffers",-874456281),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"framebuffer","framebuffer",-1339031455),webgl_30.webgl.framebuffer(gl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"texture","texture",-266291651),new cljs.core.Keyword(null,"texture-obj","texture-obj",-1787109150).cljs$core$IFn$_invoke$arity$1(fb_texture)], null))], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"u_matrix",new cljs.core.Keyword(null,"type","type",1174270348),"uniformMatrix4fv",new cljs.core.Keyword(null,"transpose","transpose",-474726680),false,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0),(0),(2),(0),(0),(0),(0),(2),(0),(0),(0),(0),(2)], null)], null),new cljs.core.Keyword(null,"u_texture","u_texture",1365102185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_texture",new cljs.core.Keyword(null,"type","type",1174270348),"uniform1i",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null)], null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),((1) * (6))], null)], null)], null));
}));
});
webgl_30.lessons.textures_3_revised.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - WebGL Textures"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Can we make this work ?!"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.textures_3_revised.state_atom;},new cljs.core.Symbol("webgl-30.lessons.textures-3-revised","state-atom","webgl-30.lessons.textures-3-revised/state-atom",1608009437,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.textures-3-revised","webgl-30.lessons.textures-3-revised",-463693820,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/textures_3_revised.cljs",20,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.textures_3_revised.state_atom)?webgl_30.lessons.textures_3_revised.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"webgl-3d-textures.html",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = webgl_30.core.ns_str(new cljs.core.Keyword("webgl-30.lessons.textures-3-revised","x","webgl-30.lessons.textures-3-revised/x",-544936498));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),(function (){
return cancelAnimationFrame(new cljs.core.Keyword(null,"raf-id","raf-id",2001486474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.textures_3_revised.state_atom)));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_3_revised.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

return webgl_30.lessons.textures_3_revised.setup_BANG_();
})], null)], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.textures_3_revised.lesson', webgl_30.lessons.textures_3_revised.lesson);

//# sourceMappingURL=webgl_30.lessons.textures_3_revised.js.map
