goog.provide('webgl_30.lessons.textures_3');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('webgl_30.math');
goog.require('webgl_30.webgl');
goog.require('webgl_30.shapes');
goog.require('webgl_30.core');
goog.require('webgl_30.component');
webgl_30.lessons.textures_3.initial_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"running?","running?",-257884763),false,new cljs.core.Keyword(null,"allocate-FB-texture","allocate-FB-texture",1791665141),false,new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field-of-view-radians","field-of-view-radians",874906122),webgl_30.math.deg__GT_rad((60))], null)], null);
if((typeof webgl_30 !== 'undefined') && (typeof webgl_30.lessons !== 'undefined') && (typeof webgl_30.lessons.textures_3 !== 'undefined') && (typeof webgl_30.lessons.textures_3.state_atom !== 'undefined')){
} else {
webgl_30.lessons.textures_3.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((cljs.core.deref(webgl_30.lessons.textures_3.state_atom) == null)){
cljs.core.reset_BANG_(webgl_30.lessons.textures_3.state_atom,webgl_30.lessons.textures_3.initial_state);
} else {
}
webgl_30.lessons.textures_3.fragment_shader = "precision mediump float;\n\n   varying vec2 v_texcoord;\n\n   // The texture\n   uniform sampler2D u_texture;\n\n   void main() {\n       gl_FragColor = texture2D(u_texture, v_texcoord);\n   }";
webgl_30.lessons.textures_3.vertex_shader = "attribute vec4 a_position;\n   attribute vec2 a_texcoord;\n\n  uniform mat4 u_matrix;\n\n  varying vec2 v_texcoord;\n\n  void main() {\n    gl_Position = u_matrix * a_position;\n\n    // this can be passed to the fragment shader\n    v_texcoord = a_texcoord;\n  }";
webgl_30.lessons.textures_3.format = (function webgl_30$lessons$textures_3$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26467 = arguments.length;
var i__4790__auto___26468 = (0);
while(true){
if((i__4790__auto___26468 < len__4789__auto___26467)){
args__4795__auto__.push((arguments[i__4790__auto___26468]));

var G__26469 = (i__4790__auto___26468 + (1));
i__4790__auto___26468 = G__26469;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return webgl_30.lessons.textures_3.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(webgl_30.lessons.textures_3.format.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.pprint.cl_format,null,f,xs);
}));

(webgl_30.lessons.textures_3.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webgl_30.lessons.textures_3.format.cljs$lang$applyTo = (function (seq26342){
var G__26343 = cljs.core.first(seq26342);
var seq26342__$1 = cljs.core.next(seq26342);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26343,seq26342__$1);
}));

webgl_30.lessons.textures_3.draw_BANG_ = (function webgl_30$lessons$textures_3$draw_BANG_(timestamp,p__26358){
var map__26363 = p__26358;
var map__26363__$1 = (((((!((map__26363 == null))))?(((((map__26363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26363):map__26363);
var state = map__26363__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26363__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26363__$1,new cljs.core.Keyword(null,"viewport-height","viewport-height",1948518883));
var viewport_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26363__$1,new cljs.core.Keyword(null,"viewport-width","viewport-width",-1146235948));
if(cljs.core.truth_(new cljs.core.Keyword(null,"allocate-FB-texture","allocate-FB-texture",1791665141).cljs$core$IFn$_invoke$arity$1(state))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.textures_3.state_atom,(function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"allocate-FB-texture","allocate-FB-texture",1791665141),false);
}));
} else {
}

webgl_30.webgl.bind_framebuffer_BANG_(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"framebuffers","framebuffers",-874456281),new cljs.core.Keyword(null,"fb","fb",-1331669322),new cljs.core.Keyword(null,"framebuffer","framebuffer",-1339031455)], null)));

webgl_30.webgl.draw_scene_BANG_(state);

var map__26382 = cljs.core.deref(webgl_30.lessons.textures_3.state_atom);
var map__26382__$1 = (((((!((map__26382 == null))))?(((((map__26382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26382):map__26382);
var gl__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26382__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26382__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var map__26383 = new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(state);
var map__26383__$1 = (((((!((map__26383 == null))))?(((((map__26383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26383):map__26383);
var field_of_view_radians = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26383__$1,new cljs.core.Keyword(null,"field-of-view-radians","field-of-view-radians",874906122));
var x_spacing = 1.2;
var y_spacing = 0.7;
var sec = (0.001 * timestamp);
var aspect = webgl_30.webgl.get_aspect(gl__$1);
var z_near = (1);
var z_far = (2000);
var projection_matrix = webgl_30.math.perspective_3d_matrix(field_of_view_radians,aspect,z_near,z_far);
var settings_26479__$1 = settings;
while(true){
if(cljs.core.empty_QMARK_(settings_26479__$1)){
} else {
var setting_26480 = cljs.core.first(settings_26479__$1);
var state_26481__$1 = cljs.core.deref(webgl_30.lessons.textures_3.state_atom);
var z_26482 = ((- (5)) + new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(setting_26480));
var r_26483 = (Math.abs(z_26482) * (function (){var G__26412 = (field_of_view_radians * 0.5);
return Math.sin(G__26412);
})());
var x_26484 = (r_26483 * (function (){var G__26415 = (sec * 0.2);
return Math.sin(G__26415);
})());
var y_26485 = ((r_26483 * 0.5) * (function (){var G__26417 = (sec * 0.2);
return Math.cos(G__26417);
})());
var r2_26486 = ((r_26483 * 0.2) + (1));
var map__26411_26487 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_26481__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"fb-texture","fb-texture",-655005182)], null));
var map__26411_26488__$1 = (((((!((map__26411_26487 == null))))?(((((map__26411_26487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26411_26487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26411_26487):map__26411_26487);
var params_26489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26411_26488__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type_26490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26411_26488__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var min_fil_params_26491 = new cljs.core.Keyword(null,"min-fil","min-fil",159955394).cljs$core$IFn$_invoke$arity$1(params_26489);
var translation_matrix_26492 = webgl_30.math.translation_3d_matrix(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_26484 + ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(setting_26480) * x_spacing) * r2_26486)),(y_26485 + ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(setting_26480) * y_spacing) * r2_26486)),z_26482], null));
var matrix_26493 = webgl_30.math.matrix_multiply_3d(projection_matrix,translation_matrix_26492);
webgl_30.webgl.set_texture_params_BANG_(gl__$1,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state_26481__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"f-texture","f-texture",-2147180556),new cljs.core.Keyword(null,"texture","texture",-266291651)], null)),type_26490,cljs.core.vals(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params_26489,new cljs.core.Keyword(null,"min-fil","min-fil",159955394),webgl_30.core.set_last(min_fil_params_26491,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(setting_26480)))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_3.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.Keyword(null,"values","values",372645556)], null),matrix_26493);

webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.textures_3.state_atom)),cljs.core.deref(webgl_30.lessons.textures_3.state_atom));

webgl_30.webgl.draw_arrays_BANG_(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.textures_3.state_atom)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.textures_3.state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"element","element",1974019749)], null)));

var G__26494 = cljs.core.rest(settings_26479__$1);
settings_26479__$1 = G__26494;
continue;
}
break;
}

webgl_30.webgl.bind_framebuffer_BANG_(gl__$1,null);

webgl_30.webgl.set_gl_viewport_BANG_.cljs$core$IFn$_invoke$arity$1(gl__$1);

var map__26421_26495 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.textures_3.state_atom),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"fb-texture","fb-texture",-655005182)], null));
var map__26421_26496__$1 = (((((!((map__26421_26495 == null))))?(((((map__26421_26495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26421_26495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26421_26495):map__26421_26495);
var texture_26497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26421_26496__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var type_26498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26421_26496__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var program_26499 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.textures_3.state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"program","program",781564284)], null));
webgl_30.webgl.bind_texture_BANG_(gl__$1,type_26498,texture_26497);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_3.state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.Keyword(null,"values","values",372645556)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0),(0),(2),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1)], null));

webgl_30.webgl.set_uniforms_BANG_.cljs$core$IFn$_invoke$arity$3(gl__$1,program_26499,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.textures_3.state_atom),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410)], null))], null));

gl__$1.clear((gl__$1.COLOR_BUFFER_BIT | gl__$1.DEPTH_BUFFER_BIT));

webgl_30.webgl.draw_arrays_BANG_(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(webgl_30.lessons.textures_3.state_atom)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgl_30.lessons.textures_3.state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"element","element",1974019749)], null)));

return requestAnimationFrame((function (t){
var G__26425 = t;
var G__26426 = cljs.core.deref(webgl_30.lessons.textures_3.state_atom);
return (webgl_30.lessons.textures_3.draw_BANG_.cljs$core$IFn$_invoke$arity$2 ? webgl_30.lessons.textures_3.draw_BANG_.cljs$core$IFn$_invoke$arity$2(G__26425,G__26426) : webgl_30.lessons.textures_3.draw_BANG_.call(null,G__26425,G__26426));
}));
});
webgl_30.lessons.textures_3.raf_draw_BANG_ = (function webgl_30$lessons$textures_3$raf_draw_BANG_(state){
return requestAnimationFrame((function (t){
return webgl_30.lessons.textures_3.draw_BANG_(t,state);
}));
});
webgl_30.lessons.textures_3.setup_BANG_ = (function webgl_30$lessons$textures_3$setup_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.textures_3.state_atom,(function (p__26455){
var map__26456 = p__26455;
var map__26456__$1 = (((((!((map__26456 == null))))?(((((map__26456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26456):map__26456);
var state = map__26456__$1;
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26456__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var fb_texture_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"wrap-s","wrap-s",-1146997745),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["texParameteri",gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE], null),new cljs.core.Keyword(null,"wrap-t","wrap-t",1585420759),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["texParameteri",gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE], null),new cljs.core.Keyword(null,"min-fil","min-fil",159955394),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["texParameteri",gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST], null),new cljs.core.Keyword(null,"mag-fil","mag-fil",-1409308682),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["texParameteri",gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST], null)], null);
var framebuffer_width = (webgl_30.webgl.get_canvas_width(gl) / (4));
var framebuffer_height = (webgl_30.webgl.get_canvas_height(gl) / (4));
var fb_texture = webgl_30.webgl.create_a_texture(gl);
var framebuffer = webgl_30.webgl.create_framebuffer(gl);
var _ = webgl_30.webgl.attach_texture_to_framebuffer.cljs$core$IFn$_invoke$arity$variadic(webgl_30.webgl.set_texture_params_BANG_(gl,fb_texture,gl.TEXTURE_2D,cljs.core.vals(fb_texture_params)),framebuffer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,fb_texture,(0)], 0));
var program = webgl_30.webgl.link_shaders_BANG_(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fs","fs",-2122926244),webgl_30.lessons.textures_3.fragment_shader,new cljs.core.Keyword(null,"vs","vs",-2022097090),webgl_30.lessons.textures_3.vertex_shader], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"clear-depth?","clear-depth?",-2095035190),true),new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null)),new cljs.core.Keyword(null,"viewport-height","viewport-height",1948518883),framebuffer_height),new cljs.core.Keyword(null,"viewport-width","viewport-width",-1146235948),framebuffer_width),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-3),new cljs.core.Keyword(null,"z","z",-789527183),(-30),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-3),new cljs.core.Keyword(null,"z","z",-789527183),(-30),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(-3),new cljs.core.Keyword(null,"z","z",-789527183),(-30),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST_MIPMAP_LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"z","z",-789527183),(-10),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"z","z",-789527183),(-10),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(-1),new cljs.core.Keyword(null,"z","z",-789527183),(-10),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST_MIPMAP_LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(-1),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.NEAREST], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.LINEAR], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"filter","filter",-948537934),gl.LINEAR_MIPMAP_NEAREST], null)], null)),new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.CULL_FACE,gl.DEPTH_TEST], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fb-texture","fb-texture",-655005182),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"texture","texture",-266291651),fb_texture,new cljs.core.Keyword(null,"params","params",710516235),fb_texture_params,new cljs.core.Keyword(null,"type","type",1174270348),gl.TEXTURE_2D], null),new cljs.core.Keyword(null,"f-texture","f-texture",-2147180556),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"texture","texture",-266291651),webgl_30.webgl.create_texture_from_img.cljs$core$IFn$_invoke$arity$4(gl,"images/mip-low-res-example.png",(function (texture){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webgl_30.lessons.textures_3.state_atom,(function (state__$1){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"allocate-FB-texture","allocate-FB-texture",1791665141),true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects-to-draw","objects-to-draw",1949509717),new cljs.core.Keyword(null,"my-f","my-f",1191307989),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.Keyword(null,"f-texture","f-texture",-2147180556),new cljs.core.Keyword(null,"texture","texture",-266291651)], null),texture);
}));

return webgl_30.lessons.textures_3.raf_draw_BANG_(cljs.core.deref(webgl_30.lessons.textures_3.state_atom));
}),webgl_30.webgl.create_texture_BANG_.cljs$core$IFn$_invoke$arity$2(gl,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_2D,(0),gl.RGBA,(1),(1),(0),gl.RGBA,gl.UNSIGNED_BYTE,(new Uint8Array(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255),(255)], null)))], null))),new cljs.core.Keyword(null,"type","type",1174270348),gl.TEXTURE_2D], null)], null),new cljs.core.Keyword(null,"framebuffers","framebuffers",-874456281),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fb","fb",-1331669322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"framebuffer","framebuffer",-1339031455),framebuffer], null)], null),new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a_position","a_position",-1834353287),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a_position",new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5], null)))], null)),new cljs.core.Keyword(null,"a_texcoord","a_texcoord",-1587223074),webgl_30.webgl.attribute(gl,program,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a_texcoord",new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"data","data",-232669377),(new Float32Array(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(-1),(2),(-1),(-3),(4),(-3),(4),(2),(-1),(2),(4)], null)))], null))], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u_matrix","u_matrix",1852377410),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"u_matrix",new cljs.core.Keyword(null,"type","type",1174270348),"uniformMatrix4fv",new cljs.core.Keyword(null,"transpose","transpose",-474726680),false,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0),(0),(2),(0),(0),(0),(0),(2),(0),(0),(0),(0),(2)], null)], null),new cljs.core.Keyword(null,"u_texture","u_texture",1365102185),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"u_texture",new cljs.core.Keyword(null,"type","type",1174270348),"uniform1i",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)], null)], null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-type","draw-type",788303055),gl.TRIANGLES,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"count","count",2139924085),((1) * (6))], null)], null)], null));
}));
});
webgl_30.lessons.textures_3.lesson = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Lesson - WebGL Textures"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),"Textureeee!"], null)], null);
}),new cljs.core.Keyword(null,"source","source",-433931539),webgl_30.core.get_filename(new cljs.core.Var(function(){return webgl_30.lessons.textures_3.state_atom;},new cljs.core.Symbol("webgl-30.lessons.textures-3","state-atom","webgl-30.lessons.textures-3/state-atom",-626992582,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webgl-30.lessons.textures-3","webgl-30.lessons.textures-3",-559105232,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),"webgl_30/lessons/textures_3.cljs",20,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(webgl_30.lessons.textures_3.state_atom)?webgl_30.lessons.textures_3.state_atom.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"tutorial-source","tutorial-source",-1194415340),"webgl-3d-textures.html",new cljs.core.Keyword(null,"start","start",-355208981),(function (){
var canvas_id = webgl_30.core.ns_str(new cljs.core.Keyword("webgl-30.lessons.textures-3","x","webgl-30.lessons.textures-3/x",1808599471));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.component.webgl_canvas,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"id","id",-1388402092),canvas_id,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webgl_30.lessons.textures_3.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),webgl_30.webgl.get_context(canvas_id));

return webgl_30.lessons.textures_3.setup_BANG_();
})], null)], null)], null);
})], null);
goog.exportSymbol('webgl_30.lessons.textures_3.lesson', webgl_30.lessons.textures_3.lesson);

//# sourceMappingURL=webgl_30.lessons.textures_3.js.map
