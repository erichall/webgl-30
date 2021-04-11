goog.provide('webgl_tutorial.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.gl.core');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.triangle');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.gl.glmesh');
goog.require('thi.ng.geom.gl.camera');
goog.require('thi.ng.geom.gl.shaders');
goog.require('thi.ng.geom.gl.webgl.constants');
goog.require('thi.ng.geom.gl.webgl.animator');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_();
webgl_tutorial.core.init_BANG_ = (function webgl_tutorial$core$init_BANG_(){
return null;
});
webgl_tutorial.core.reload_BANG_ = (function webgl_tutorial$core$reload_BANG_(){
return null;
});
if((typeof webgl_tutorial !== 'undefined') && (typeof webgl_tutorial.core !== 'undefined') && (typeof webgl_tutorial.core.app_state !== 'undefined')){
} else {
webgl_tutorial.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"red","red",-969428204),(0)], null));
}
if((typeof webgl_tutorial !== 'undefined') && (typeof webgl_tutorial.core !== 'undefined') && (typeof webgl_tutorial.core.gl_ctx !== 'undefined')){
} else {
webgl_tutorial.core.gl_ctx = thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$1("main");
}
webgl_tutorial.core.shader_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vs","vs",-2022097090),"\n  void main() {\n    gl_Position = proj * view * vec4(position, 1.0);\n  }",new cljs.core.Keyword(null,"fs","fs",-2122926244),"\n   void main() {\n      gl_FragColor = vec4(1.0 1.0 1.0, 1.7);\n   }\n   ",new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"proj","proj",1560823673),new cljs.core.Keyword(null,"mat4","mat4",-237531594)], null),new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"vec3","vec3",1116680488)], null)], null);
webgl_tutorial.core.triangle = thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.triangle.triangle3.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mesh","mesh",456320595),thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$1((3))], null));
if((typeof webgl_tutorial !== 'undefined') && (typeof webgl_tutorial.core !== 'undefined') && (typeof webgl_tutorial.core.camera !== 'undefined')){
} else {
webgl_tutorial.core.camera = thi.ng.geom.gl.camera.perspective_camera(cljs.core.PersistentArrayMap.EMPTY);
}
webgl_tutorial.core.combine_model_shader_camera = (function webgl_tutorial$core$combine_model_shader_camera(model,spec,camera){
return thi.ng.geom.gl.camera.apply(thi.ng.geom.gl.core.make_buffers_in_spec(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.gl.core.as_gl_buffer_spec(model,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"shader","shader",1492833021),thi.ng.geom.gl.shaders.make_shader_from_spec(webgl_tutorial.core.gl_ctx,webgl_tutorial.core.shader_spec)),webgl_tutorial.core.gl_ctx,thi.ng.geom.gl.webgl.constants.static_draw),camera);
});
webgl_tutorial.core.draw_frame_BANG_ = (function webgl_tutorial$core$draw_frame_BANG_(t){
var G__28068 = webgl_tutorial.core.gl_ctx;
thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6(G__28068,(0),(0),(0),(1),(1));

thi.ng.geom.gl.core.draw_with_shader(G__28068,webgl_tutorial.core.combine_model_shader_camera(webgl_tutorial.core.triangle,webgl_tutorial.core.shader_spec,webgl_tutorial.core.camera));

return G__28068;
});
if((typeof webgl_tutorial !== 'undefined') && (typeof webgl_tutorial.core !== 'undefined') && (typeof webgl_tutorial.core.running !== 'undefined')){
} else {
webgl_tutorial.core.running = thi.ng.geom.gl.webgl.animator.animate.cljs$core$IFn$_invoke$arity$1((function (t){
webgl_tutorial.core.draw_frame_BANG_(t);

return true;
}));
}

//# sourceMappingURL=webgl_tutorial.core.js.map
