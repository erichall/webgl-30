goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__27219 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27220 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27220);

try{var G__27221 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__27222 = container;
var G__27223 = (function (){
var _STAR_always_update_STAR__orig_val__27226 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27227 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27227);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27226);
}});
return module$node_modules$react_dom$index.render(G__27221,G__27222,G__27223);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27219);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__27237 = arguments.length;
switch (G__27237) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__27247 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__27258_27286 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__27259_27287 = null;
var count__27260_27288 = (0);
var i__27261_27289 = (0);
while(true){
if((i__27261_27289 < count__27260_27288)){
var vec__27272_27291 = chunk__27259_27287.cljs$core$IIndexed$_nth$arity$2(null,i__27261_27289);
var container_27292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27272_27291,(0),null);
var comp_27293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27272_27291,(1),null);
reagent.dom.re_render_component(comp_27293,container_27292);


var G__27294 = seq__27258_27286;
var G__27295 = chunk__27259_27287;
var G__27296 = count__27260_27288;
var G__27297 = (i__27261_27289 + (1));
seq__27258_27286 = G__27294;
chunk__27259_27287 = G__27295;
count__27260_27288 = G__27296;
i__27261_27289 = G__27297;
continue;
} else {
var temp__5735__auto___27298 = cljs.core.seq(seq__27258_27286);
if(temp__5735__auto___27298){
var seq__27258_27299__$1 = temp__5735__auto___27298;
if(cljs.core.chunked_seq_QMARK_(seq__27258_27299__$1)){
var c__4609__auto___27300 = cljs.core.chunk_first(seq__27258_27299__$1);
var G__27301 = cljs.core.chunk_rest(seq__27258_27299__$1);
var G__27302 = c__4609__auto___27300;
var G__27303 = cljs.core.count(c__4609__auto___27300);
var G__27304 = (0);
seq__27258_27286 = G__27301;
chunk__27259_27287 = G__27302;
count__27260_27288 = G__27303;
i__27261_27289 = G__27304;
continue;
} else {
var vec__27275_27305 = cljs.core.first(seq__27258_27299__$1);
var container_27306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27275_27305,(0),null);
var comp_27307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27275_27305,(1),null);
reagent.dom.re_render_component(comp_27307,container_27306);


var G__27308 = cljs.core.next(seq__27258_27299__$1);
var G__27309 = null;
var G__27310 = (0);
var G__27311 = (0);
seq__27258_27286 = G__27308;
chunk__27259_27287 = G__27309;
count__27260_27288 = G__27310;
i__27261_27289 = G__27311;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
