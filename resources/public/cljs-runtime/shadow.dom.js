goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32338 = coll;
var G__32339 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32338,G__32339) : shadow.dom.lazy_native_coll_seq.call(null,G__32338,G__32339));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32398 = arguments.length;
switch (G__32398) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32404 = arguments.length;
switch (G__32404) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32415 = arguments.length;
switch (G__32415) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32420 = arguments.length;
switch (G__32420) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32433 = arguments.length;
switch (G__32433) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32441 = document;
var G__32442 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32441,G__32442);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32450 = shadow.dom.dom_node(parent);
var G__32451 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32450,G__32451);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32462 = shadow.dom.dom_node(el);
var G__32463 = cls;
return goog.dom.classlist.add(G__32462,G__32463);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32488 = shadow.dom.dom_node(el);
var G__32489 = cls;
return goog.dom.classlist.remove(G__32488,G__32489);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32492 = arguments.length;
switch (G__32492) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32494 = shadow.dom.dom_node(el);
var G__32495 = cls;
return goog.dom.classlist.toggle(G__32494,G__32495);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32508){if((e32508 instanceof Object)){
var e = e32508;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32508;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32529 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32530 = null;
var count__32531 = (0);
var i__32532 = (0);
while(true){
if((i__32532 < count__32531)){
var el = chunk__32530.cljs$core$IIndexed$_nth$arity$2(null,i__32532);
var handler_33949__$1 = ((function (seq__32529,chunk__32530,count__32531,i__32532,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32529,chunk__32530,count__32531,i__32532,el))
;
var G__32543_33951 = el;
var G__32544_33952 = cljs.core.name(ev);
var G__32545_33953 = handler_33949__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32543_33951,G__32544_33952,G__32545_33953) : shadow.dom.dom_listen.call(null,G__32543_33951,G__32544_33952,G__32545_33953));


var G__33955 = seq__32529;
var G__33956 = chunk__32530;
var G__33957 = count__32531;
var G__33958 = (i__32532 + (1));
seq__32529 = G__33955;
chunk__32530 = G__33956;
count__32531 = G__33957;
i__32532 = G__33958;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32529);
if(temp__5735__auto__){
var seq__32529__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32529__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32529__$1);
var G__33961 = cljs.core.chunk_rest(seq__32529__$1);
var G__33962 = c__4609__auto__;
var G__33963 = cljs.core.count(c__4609__auto__);
var G__33964 = (0);
seq__32529 = G__33961;
chunk__32530 = G__33962;
count__32531 = G__33963;
i__32532 = G__33964;
continue;
} else {
var el = cljs.core.first(seq__32529__$1);
var handler_33967__$1 = ((function (seq__32529,chunk__32530,count__32531,i__32532,el,seq__32529__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32529,chunk__32530,count__32531,i__32532,el,seq__32529__$1,temp__5735__auto__))
;
var G__32548_33968 = el;
var G__32549_33969 = cljs.core.name(ev);
var G__32550_33970 = handler_33967__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32548_33968,G__32549_33969,G__32550_33970) : shadow.dom.dom_listen.call(null,G__32548_33968,G__32549_33969,G__32550_33970));


var G__33971 = cljs.core.next(seq__32529__$1);
var G__33972 = null;
var G__33973 = (0);
var G__33974 = (0);
seq__32529 = G__33971;
chunk__32530 = G__33972;
count__32531 = G__33973;
i__32532 = G__33974;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32554 = arguments.length;
switch (G__32554) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32566 = shadow.dom.dom_node(el);
var G__32567 = cljs.core.name(ev);
var G__32568 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32566,G__32567,G__32568) : shadow.dom.dom_listen.call(null,G__32566,G__32567,G__32568));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32573 = shadow.dom.dom_node(el);
var G__32574 = cljs.core.name(ev);
var G__32575 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32573,G__32574,G__32575) : shadow.dom.dom_listen_remove.call(null,G__32573,G__32574,G__32575));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32581 = cljs.core.seq(events);
var chunk__32582 = null;
var count__32583 = (0);
var i__32584 = (0);
while(true){
if((i__32584 < count__32583)){
var vec__32603 = chunk__32582.cljs$core$IIndexed$_nth$arity$2(null,i__32584);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32603,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32603,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33987 = seq__32581;
var G__33988 = chunk__32582;
var G__33989 = count__32583;
var G__33990 = (i__32584 + (1));
seq__32581 = G__33987;
chunk__32582 = G__33988;
count__32583 = G__33989;
i__32584 = G__33990;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32581);
if(temp__5735__auto__){
var seq__32581__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32581__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32581__$1);
var G__33991 = cljs.core.chunk_rest(seq__32581__$1);
var G__33992 = c__4609__auto__;
var G__33993 = cljs.core.count(c__4609__auto__);
var G__33994 = (0);
seq__32581 = G__33991;
chunk__32582 = G__33992;
count__32583 = G__33993;
i__32584 = G__33994;
continue;
} else {
var vec__32612 = cljs.core.first(seq__32581__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32612,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33996 = cljs.core.next(seq__32581__$1);
var G__33997 = null;
var G__33998 = (0);
var G__33999 = (0);
seq__32581 = G__33996;
chunk__32582 = G__33997;
count__32583 = G__33998;
i__32584 = G__33999;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32621 = cljs.core.seq(styles);
var chunk__32622 = null;
var count__32623 = (0);
var i__32624 = (0);
while(true){
if((i__32624 < count__32623)){
var vec__32645 = chunk__32622.cljs$core$IIndexed$_nth$arity$2(null,i__32624);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32645,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32645,(1),null);
var G__32649_34008 = dom;
var G__32650_34009 = cljs.core.name(k);
var G__32651_34010 = (((v == null))?"":v);
goog.style.setStyle(G__32649_34008,G__32650_34009,G__32651_34010);


var G__34011 = seq__32621;
var G__34012 = chunk__32622;
var G__34013 = count__32623;
var G__34014 = (i__32624 + (1));
seq__32621 = G__34011;
chunk__32622 = G__34012;
count__32623 = G__34013;
i__32624 = G__34014;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32621);
if(temp__5735__auto__){
var seq__32621__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32621__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32621__$1);
var G__34015 = cljs.core.chunk_rest(seq__32621__$1);
var G__34016 = c__4609__auto__;
var G__34017 = cljs.core.count(c__4609__auto__);
var G__34018 = (0);
seq__32621 = G__34015;
chunk__32622 = G__34016;
count__32623 = G__34017;
i__32624 = G__34018;
continue;
} else {
var vec__32659 = cljs.core.first(seq__32621__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32659,(1),null);
var G__32671_34020 = dom;
var G__32672_34021 = cljs.core.name(k);
var G__32673_34022 = (((v == null))?"":v);
goog.style.setStyle(G__32671_34020,G__32672_34021,G__32673_34022);


var G__34023 = cljs.core.next(seq__32621__$1);
var G__34024 = null;
var G__34025 = (0);
var G__34026 = (0);
seq__32621 = G__34023;
chunk__32622 = G__34024;
count__32623 = G__34025;
i__32624 = G__34026;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32690_34028 = key;
var G__32690_34029__$1 = (((G__32690_34028 instanceof cljs.core.Keyword))?G__32690_34028.fqn:null);
switch (G__32690_34029__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34038 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_34038,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_34038,"aria-");
}
})())){
el.setAttribute(ks_34038,value);
} else {
(el[ks_34038] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32726 = shadow.dom.dom_node(el);
var G__32727 = cls;
return goog.dom.classlist.contains(G__32726,G__32727);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32739){
var map__32742 = p__32739;
var map__32742__$1 = (((((!((map__32742 == null))))?(((((map__32742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32742):map__32742);
var props = map__32742__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32742__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32746 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32746,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32746,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32746,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32749 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32749,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32749;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32758 = arguments.length;
switch (G__32758) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32766){
var vec__32769 = p__32766;
var seq__32770 = cljs.core.seq(vec__32769);
var first__32771 = cljs.core.first(seq__32770);
var seq__32770__$1 = cljs.core.next(seq__32770);
var nn = first__32771;
var first__32771__$1 = cljs.core.first(seq__32770__$1);
var seq__32770__$2 = cljs.core.next(seq__32770__$1);
var np = first__32771__$1;
var nc = seq__32770__$2;
var node = vec__32769;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32774 = nn;
var G__32775 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32774,G__32775) : create_fn.call(null,G__32774,G__32775));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32778 = nn;
var G__32779 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32778,G__32779) : create_fn.call(null,G__32778,G__32779));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32783 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(1),null);
var seq__32789_34086 = cljs.core.seq(node_children);
var chunk__32790_34087 = null;
var count__32791_34088 = (0);
var i__32792_34089 = (0);
while(true){
if((i__32792_34089 < count__32791_34088)){
var child_struct_34091 = chunk__32790_34087.cljs$core$IIndexed$_nth$arity$2(null,i__32792_34089);
var children_34092 = shadow.dom.dom_node(child_struct_34091);
if(cljs.core.seq_QMARK_(children_34092)){
var seq__32853_34093 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34092));
var chunk__32855_34094 = null;
var count__32856_34095 = (0);
var i__32857_34096 = (0);
while(true){
if((i__32857_34096 < count__32856_34095)){
var child_34097 = chunk__32855_34094.cljs$core$IIndexed$_nth$arity$2(null,i__32857_34096);
if(cljs.core.truth_(child_34097)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34097);


var G__34098 = seq__32853_34093;
var G__34099 = chunk__32855_34094;
var G__34100 = count__32856_34095;
var G__34101 = (i__32857_34096 + (1));
seq__32853_34093 = G__34098;
chunk__32855_34094 = G__34099;
count__32856_34095 = G__34100;
i__32857_34096 = G__34101;
continue;
} else {
var G__34102 = seq__32853_34093;
var G__34103 = chunk__32855_34094;
var G__34104 = count__32856_34095;
var G__34105 = (i__32857_34096 + (1));
seq__32853_34093 = G__34102;
chunk__32855_34094 = G__34103;
count__32856_34095 = G__34104;
i__32857_34096 = G__34105;
continue;
}
} else {
var temp__5735__auto___34106 = cljs.core.seq(seq__32853_34093);
if(temp__5735__auto___34106){
var seq__32853_34107__$1 = temp__5735__auto___34106;
if(cljs.core.chunked_seq_QMARK_(seq__32853_34107__$1)){
var c__4609__auto___34108 = cljs.core.chunk_first(seq__32853_34107__$1);
var G__34109 = cljs.core.chunk_rest(seq__32853_34107__$1);
var G__34110 = c__4609__auto___34108;
var G__34111 = cljs.core.count(c__4609__auto___34108);
var G__34112 = (0);
seq__32853_34093 = G__34109;
chunk__32855_34094 = G__34110;
count__32856_34095 = G__34111;
i__32857_34096 = G__34112;
continue;
} else {
var child_34119 = cljs.core.first(seq__32853_34107__$1);
if(cljs.core.truth_(child_34119)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34119);


var G__34120 = cljs.core.next(seq__32853_34107__$1);
var G__34121 = null;
var G__34122 = (0);
var G__34123 = (0);
seq__32853_34093 = G__34120;
chunk__32855_34094 = G__34121;
count__32856_34095 = G__34122;
i__32857_34096 = G__34123;
continue;
} else {
var G__34124 = cljs.core.next(seq__32853_34107__$1);
var G__34125 = null;
var G__34126 = (0);
var G__34127 = (0);
seq__32853_34093 = G__34124;
chunk__32855_34094 = G__34125;
count__32856_34095 = G__34126;
i__32857_34096 = G__34127;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34092);
}


var G__34128 = seq__32789_34086;
var G__34129 = chunk__32790_34087;
var G__34130 = count__32791_34088;
var G__34131 = (i__32792_34089 + (1));
seq__32789_34086 = G__34128;
chunk__32790_34087 = G__34129;
count__32791_34088 = G__34130;
i__32792_34089 = G__34131;
continue;
} else {
var temp__5735__auto___34135 = cljs.core.seq(seq__32789_34086);
if(temp__5735__auto___34135){
var seq__32789_34136__$1 = temp__5735__auto___34135;
if(cljs.core.chunked_seq_QMARK_(seq__32789_34136__$1)){
var c__4609__auto___34137 = cljs.core.chunk_first(seq__32789_34136__$1);
var G__34138 = cljs.core.chunk_rest(seq__32789_34136__$1);
var G__34139 = c__4609__auto___34137;
var G__34140 = cljs.core.count(c__4609__auto___34137);
var G__34141 = (0);
seq__32789_34086 = G__34138;
chunk__32790_34087 = G__34139;
count__32791_34088 = G__34140;
i__32792_34089 = G__34141;
continue;
} else {
var child_struct_34145 = cljs.core.first(seq__32789_34136__$1);
var children_34146 = shadow.dom.dom_node(child_struct_34145);
if(cljs.core.seq_QMARK_(children_34146)){
var seq__32864_34147 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34146));
var chunk__32869_34148 = null;
var count__32870_34149 = (0);
var i__32871_34150 = (0);
while(true){
if((i__32871_34150 < count__32870_34149)){
var child_34152 = chunk__32869_34148.cljs$core$IIndexed$_nth$arity$2(null,i__32871_34150);
if(cljs.core.truth_(child_34152)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34152);


var G__34156 = seq__32864_34147;
var G__34157 = chunk__32869_34148;
var G__34158 = count__32870_34149;
var G__34159 = (i__32871_34150 + (1));
seq__32864_34147 = G__34156;
chunk__32869_34148 = G__34157;
count__32870_34149 = G__34158;
i__32871_34150 = G__34159;
continue;
} else {
var G__34161 = seq__32864_34147;
var G__34162 = chunk__32869_34148;
var G__34163 = count__32870_34149;
var G__34164 = (i__32871_34150 + (1));
seq__32864_34147 = G__34161;
chunk__32869_34148 = G__34162;
count__32870_34149 = G__34163;
i__32871_34150 = G__34164;
continue;
}
} else {
var temp__5735__auto___34169__$1 = cljs.core.seq(seq__32864_34147);
if(temp__5735__auto___34169__$1){
var seq__32864_34170__$1 = temp__5735__auto___34169__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32864_34170__$1)){
var c__4609__auto___34171 = cljs.core.chunk_first(seq__32864_34170__$1);
var G__34172 = cljs.core.chunk_rest(seq__32864_34170__$1);
var G__34173 = c__4609__auto___34171;
var G__34174 = cljs.core.count(c__4609__auto___34171);
var G__34175 = (0);
seq__32864_34147 = G__34172;
chunk__32869_34148 = G__34173;
count__32870_34149 = G__34174;
i__32871_34150 = G__34175;
continue;
} else {
var child_34176 = cljs.core.first(seq__32864_34170__$1);
if(cljs.core.truth_(child_34176)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34176);


var G__34177 = cljs.core.next(seq__32864_34170__$1);
var G__34178 = null;
var G__34179 = (0);
var G__34180 = (0);
seq__32864_34147 = G__34177;
chunk__32869_34148 = G__34178;
count__32870_34149 = G__34179;
i__32871_34150 = G__34180;
continue;
} else {
var G__34187 = cljs.core.next(seq__32864_34170__$1);
var G__34188 = null;
var G__34189 = (0);
var G__34190 = (0);
seq__32864_34147 = G__34187;
chunk__32869_34148 = G__34188;
count__32870_34149 = G__34189;
i__32871_34150 = G__34190;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34146);
}


var G__34191 = cljs.core.next(seq__32789_34136__$1);
var G__34192 = null;
var G__34193 = (0);
var G__34194 = (0);
seq__32789_34086 = G__34191;
chunk__32790_34087 = G__34192;
count__32791_34088 = G__34193;
i__32792_34089 = G__34194;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__32891 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32891);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32893 = cljs.core.seq(node);
var chunk__32894 = null;
var count__32895 = (0);
var i__32896 = (0);
while(true){
if((i__32896 < count__32895)){
var n = chunk__32894.cljs$core$IIndexed$_nth$arity$2(null,i__32896);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34202 = seq__32893;
var G__34203 = chunk__32894;
var G__34204 = count__32895;
var G__34205 = (i__32896 + (1));
seq__32893 = G__34202;
chunk__32894 = G__34203;
count__32895 = G__34204;
i__32896 = G__34205;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32893);
if(temp__5735__auto__){
var seq__32893__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32893__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32893__$1);
var G__34214 = cljs.core.chunk_rest(seq__32893__$1);
var G__34215 = c__4609__auto__;
var G__34216 = cljs.core.count(c__4609__auto__);
var G__34217 = (0);
seq__32893 = G__34214;
chunk__32894 = G__34215;
count__32895 = G__34216;
i__32896 = G__34217;
continue;
} else {
var n = cljs.core.first(seq__32893__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34228 = cljs.core.next(seq__32893__$1);
var G__34229 = null;
var G__34230 = (0);
var G__34231 = (0);
seq__32893 = G__34228;
chunk__32894 = G__34229;
count__32895 = G__34230;
i__32896 = G__34231;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__32912 = shadow.dom.dom_node(new$);
var G__32913 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32912,G__32913);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32921 = arguments.length;
switch (G__32921) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32929 = arguments.length;
switch (G__32929) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32955 = arguments.length;
switch (G__32955) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34262 = arguments.length;
var i__4790__auto___34263 = (0);
while(true){
if((i__4790__auto___34263 < len__4789__auto___34262)){
args__4795__auto__.push((arguments[i__4790__auto___34263]));

var G__34265 = (i__4790__auto___34263 + (1));
i__4790__auto___34263 = G__34265;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32974_34269 = cljs.core.seq(nodes);
var chunk__32975_34270 = null;
var count__32976_34271 = (0);
var i__32977_34272 = (0);
while(true){
if((i__32977_34272 < count__32976_34271)){
var node_34276 = chunk__32975_34270.cljs$core$IIndexed$_nth$arity$2(null,i__32977_34272);
fragment.appendChild(shadow.dom._to_dom(node_34276));


var G__34277 = seq__32974_34269;
var G__34278 = chunk__32975_34270;
var G__34279 = count__32976_34271;
var G__34280 = (i__32977_34272 + (1));
seq__32974_34269 = G__34277;
chunk__32975_34270 = G__34278;
count__32976_34271 = G__34279;
i__32977_34272 = G__34280;
continue;
} else {
var temp__5735__auto___34286 = cljs.core.seq(seq__32974_34269);
if(temp__5735__auto___34286){
var seq__32974_34287__$1 = temp__5735__auto___34286;
if(cljs.core.chunked_seq_QMARK_(seq__32974_34287__$1)){
var c__4609__auto___34288 = cljs.core.chunk_first(seq__32974_34287__$1);
var G__34289 = cljs.core.chunk_rest(seq__32974_34287__$1);
var G__34290 = c__4609__auto___34288;
var G__34291 = cljs.core.count(c__4609__auto___34288);
var G__34292 = (0);
seq__32974_34269 = G__34289;
chunk__32975_34270 = G__34290;
count__32976_34271 = G__34291;
i__32977_34272 = G__34292;
continue;
} else {
var node_34295 = cljs.core.first(seq__32974_34287__$1);
fragment.appendChild(shadow.dom._to_dom(node_34295));


var G__34297 = cljs.core.next(seq__32974_34287__$1);
var G__34298 = null;
var G__34299 = (0);
var G__34300 = (0);
seq__32974_34269 = G__34297;
chunk__32975_34270 = G__34298;
count__32976_34271 = G__34299;
i__32977_34272 = G__34300;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32968){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32968));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32998_34301 = cljs.core.seq(scripts);
var chunk__32999_34302 = null;
var count__33000_34303 = (0);
var i__33001_34304 = (0);
while(true){
if((i__33001_34304 < count__33000_34303)){
var vec__33021_34305 = chunk__32999_34302.cljs$core$IIndexed$_nth$arity$2(null,i__33001_34304);
var script_tag_34306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33021_34305,(0),null);
var script_body_34307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33021_34305,(1),null);
eval(script_body_34307);


var G__34310 = seq__32998_34301;
var G__34311 = chunk__32999_34302;
var G__34312 = count__33000_34303;
var G__34313 = (i__33001_34304 + (1));
seq__32998_34301 = G__34310;
chunk__32999_34302 = G__34311;
count__33000_34303 = G__34312;
i__33001_34304 = G__34313;
continue;
} else {
var temp__5735__auto___34315 = cljs.core.seq(seq__32998_34301);
if(temp__5735__auto___34315){
var seq__32998_34316__$1 = temp__5735__auto___34315;
if(cljs.core.chunked_seq_QMARK_(seq__32998_34316__$1)){
var c__4609__auto___34317 = cljs.core.chunk_first(seq__32998_34316__$1);
var G__34318 = cljs.core.chunk_rest(seq__32998_34316__$1);
var G__34319 = c__4609__auto___34317;
var G__34320 = cljs.core.count(c__4609__auto___34317);
var G__34321 = (0);
seq__32998_34301 = G__34318;
chunk__32999_34302 = G__34319;
count__33000_34303 = G__34320;
i__33001_34304 = G__34321;
continue;
} else {
var vec__33027_34322 = cljs.core.first(seq__32998_34316__$1);
var script_tag_34323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33027_34322,(0),null);
var script_body_34324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33027_34322,(1),null);
eval(script_body_34324);


var G__34328 = cljs.core.next(seq__32998_34316__$1);
var G__34329 = null;
var G__34330 = (0);
var G__34331 = (0);
seq__32998_34301 = G__34328;
chunk__32999_34302 = G__34329;
count__33000_34303 = G__34330;
i__33001_34304 = G__34331;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33034){
var vec__33035 = p__33034;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33035,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33035,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33055 = shadow.dom.dom_node(el);
var G__33056 = cls;
return goog.dom.getAncestorByClass(G__33055,G__33056);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33061 = arguments.length;
switch (G__33061) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33063 = shadow.dom.dom_node(el);
var G__33064 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33063,G__33064);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33066 = shadow.dom.dom_node(el);
var G__33067 = cljs.core.name(tag);
var G__33068 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33066,G__33067,G__33068);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33069 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33069);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33080 = shadow.dom.dom_node(dom);
var G__33081 = value;
return goog.dom.forms.setValue(G__33080,G__33081);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33127 = cljs.core.seq(style_keys);
var chunk__33128 = null;
var count__33129 = (0);
var i__33130 = (0);
while(true){
if((i__33130 < count__33129)){
var it = chunk__33128.cljs$core$IIndexed$_nth$arity$2(null,i__33130);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34359 = seq__33127;
var G__34360 = chunk__33128;
var G__34361 = count__33129;
var G__34362 = (i__33130 + (1));
seq__33127 = G__34359;
chunk__33128 = G__34360;
count__33129 = G__34361;
i__33130 = G__34362;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33127);
if(temp__5735__auto__){
var seq__33127__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33127__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33127__$1);
var G__34363 = cljs.core.chunk_rest(seq__33127__$1);
var G__34364 = c__4609__auto__;
var G__34365 = cljs.core.count(c__4609__auto__);
var G__34366 = (0);
seq__33127 = G__34363;
chunk__33128 = G__34364;
count__33129 = G__34365;
i__33130 = G__34366;
continue;
} else {
var it = cljs.core.first(seq__33127__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34369 = cljs.core.next(seq__33127__$1);
var G__34370 = null;
var G__34371 = (0);
var G__34372 = (0);
seq__33127 = G__34369;
chunk__33128 = G__34370;
count__33129 = G__34371;
i__33130 = G__34372;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33146,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33166 = k33146;
var G__33166__$1 = (((G__33166 instanceof cljs.core.Keyword))?G__33166.fqn:null);
switch (G__33166__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33146,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33171){
var vec__33172 = p__33171;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33172,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33172,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33145){
var self__ = this;
var G__33145__$1 = this;
return (new cljs.core.RecordIter((0),G__33145__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__33194 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__33194(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33147,other33148){
var self__ = this;
var this33147__$1 = this;
return (((!((other33148 == null)))) && ((this33147__$1.constructor === other33148.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33147__$1.x,other33148.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33147__$1.y,other33148.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33147__$1.__extmap,other33148.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33145){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33211 = cljs.core.keyword_identical_QMARK_;
var expr__33212 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33216 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33217 = expr__33212;
return (pred__33211.cljs$core$IFn$_invoke$arity$2 ? pred__33211.cljs$core$IFn$_invoke$arity$2(G__33216,G__33217) : pred__33211.call(null,G__33216,G__33217));
})())){
return (new shadow.dom.Coordinate(G__33145,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33218 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33219 = expr__33212;
return (pred__33211.cljs$core$IFn$_invoke$arity$2 ? pred__33211.cljs$core$IFn$_invoke$arity$2(G__33218,G__33219) : pred__33211.call(null,G__33218,G__33219));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33145,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33145),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33145){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33145,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33154){
var extmap__4478__auto__ = (function (){var G__33241 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33154,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33154)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33241);
} else {
return G__33241;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33154),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33154),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33256 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33256);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33260 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33260);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33270 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33270);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33276,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33291 = k33276;
var G__33291__$1 = (((G__33291 instanceof cljs.core.Keyword))?G__33291.fqn:null);
switch (G__33291__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33276,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33298){
var vec__33303 = p__33298;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33275){
var self__ = this;
var G__33275__$1 = this;
return (new cljs.core.RecordIter((0),G__33275__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__33320 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__33320(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33277,other33278){
var self__ = this;
var this33277__$1 = this;
return (((!((other33278 == null)))) && ((this33277__$1.constructor === other33278.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33277__$1.w,other33278.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33277__$1.h,other33278.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33277__$1.__extmap,other33278.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33275){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33335 = cljs.core.keyword_identical_QMARK_;
var expr__33336 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__33339 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33340 = expr__33336;
return (pred__33335.cljs$core$IFn$_invoke$arity$2 ? pred__33335.cljs$core$IFn$_invoke$arity$2(G__33339,G__33340) : pred__33335.call(null,G__33339,G__33340));
})())){
return (new shadow.dom.Size(G__33275,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33344 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33345 = expr__33336;
return (pred__33335.cljs$core$IFn$_invoke$arity$2 ? pred__33335.cljs$core$IFn$_invoke$arity$2(G__33344,G__33345) : pred__33335.call(null,G__33344,G__33345));
})())){
return (new shadow.dom.Size(self__.w,G__33275,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33275),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33275){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33275,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33284){
var extmap__4478__auto__ = (function (){var G__33383 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33284,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33284)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33383);
} else {
return G__33383;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33284),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33284),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33403 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33403);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__34415 = (i + (1));
var G__34416 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34415;
ret = G__34416;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33435){
var vec__33436 = p__33435;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33436,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33436,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33450 = arguments.length;
switch (G__33450) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33487_34425 = new_node;
var G__33488_34426 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33487_34425,G__33488_34426);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33500_34429 = new_node;
var G__33501_34430 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33500_34429,G__33501_34430);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34434 = ps;
var G__34435 = (i + (1));
el__$1 = G__34434;
i = G__34435;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33548 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33548);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33559 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33559);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33566 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33566);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33574 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33579_34443 = cljs.core.seq(props);
var chunk__33580_34444 = null;
var count__33581_34445 = (0);
var i__33582_34446 = (0);
while(true){
if((i__33582_34446 < count__33581_34445)){
var vec__33611_34447 = chunk__33580_34444.cljs$core$IIndexed$_nth$arity$2(null,i__33582_34446);
var k_34448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611_34447,(0),null);
var v_34449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611_34447,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34448);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34448),v_34449);


var G__34450 = seq__33579_34443;
var G__34451 = chunk__33580_34444;
var G__34452 = count__33581_34445;
var G__34453 = (i__33582_34446 + (1));
seq__33579_34443 = G__34450;
chunk__33580_34444 = G__34451;
count__33581_34445 = G__34452;
i__33582_34446 = G__34453;
continue;
} else {
var temp__5735__auto___34458 = cljs.core.seq(seq__33579_34443);
if(temp__5735__auto___34458){
var seq__33579_34459__$1 = temp__5735__auto___34458;
if(cljs.core.chunked_seq_QMARK_(seq__33579_34459__$1)){
var c__4609__auto___34460 = cljs.core.chunk_first(seq__33579_34459__$1);
var G__34461 = cljs.core.chunk_rest(seq__33579_34459__$1);
var G__34462 = c__4609__auto___34460;
var G__34463 = cljs.core.count(c__4609__auto___34460);
var G__34464 = (0);
seq__33579_34443 = G__34461;
chunk__33580_34444 = G__34462;
count__33581_34445 = G__34463;
i__33582_34446 = G__34464;
continue;
} else {
var vec__33623_34465 = cljs.core.first(seq__33579_34459__$1);
var k_34466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33623_34465,(0),null);
var v_34467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33623_34465,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34466);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34466),v_34467);


var G__34468 = cljs.core.next(seq__33579_34459__$1);
var G__34469 = null;
var G__34470 = (0);
var G__34471 = (0);
seq__33579_34443 = G__34468;
chunk__33580_34444 = G__34469;
count__33581_34445 = G__34470;
i__33582_34446 = G__34471;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33661 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33661,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33661,(1),null);
var seq__33666_34473 = cljs.core.seq(node_children);
var chunk__33668_34474 = null;
var count__33669_34475 = (0);
var i__33670_34476 = (0);
while(true){
if((i__33670_34476 < count__33669_34475)){
var child_struct_34478 = chunk__33668_34474.cljs$core$IIndexed$_nth$arity$2(null,i__33670_34476);
if((!((child_struct_34478 == null)))){
if(typeof child_struct_34478 === 'string'){
var text_34479 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34479),child_struct_34478].join(''));
} else {
var children_34480 = shadow.dom.svg_node(child_struct_34478);
if(cljs.core.seq_QMARK_(children_34480)){
var seq__33736_34481 = cljs.core.seq(children_34480);
var chunk__33738_34482 = null;
var count__33739_34483 = (0);
var i__33740_34484 = (0);
while(true){
if((i__33740_34484 < count__33739_34483)){
var child_34486 = chunk__33738_34482.cljs$core$IIndexed$_nth$arity$2(null,i__33740_34484);
if(cljs.core.truth_(child_34486)){
node.appendChild(child_34486);


var G__34487 = seq__33736_34481;
var G__34488 = chunk__33738_34482;
var G__34489 = count__33739_34483;
var G__34490 = (i__33740_34484 + (1));
seq__33736_34481 = G__34487;
chunk__33738_34482 = G__34488;
count__33739_34483 = G__34489;
i__33740_34484 = G__34490;
continue;
} else {
var G__34491 = seq__33736_34481;
var G__34492 = chunk__33738_34482;
var G__34493 = count__33739_34483;
var G__34494 = (i__33740_34484 + (1));
seq__33736_34481 = G__34491;
chunk__33738_34482 = G__34492;
count__33739_34483 = G__34493;
i__33740_34484 = G__34494;
continue;
}
} else {
var temp__5735__auto___34496 = cljs.core.seq(seq__33736_34481);
if(temp__5735__auto___34496){
var seq__33736_34497__$1 = temp__5735__auto___34496;
if(cljs.core.chunked_seq_QMARK_(seq__33736_34497__$1)){
var c__4609__auto___34498 = cljs.core.chunk_first(seq__33736_34497__$1);
var G__34499 = cljs.core.chunk_rest(seq__33736_34497__$1);
var G__34500 = c__4609__auto___34498;
var G__34501 = cljs.core.count(c__4609__auto___34498);
var G__34502 = (0);
seq__33736_34481 = G__34499;
chunk__33738_34482 = G__34500;
count__33739_34483 = G__34501;
i__33740_34484 = G__34502;
continue;
} else {
var child_34503 = cljs.core.first(seq__33736_34497__$1);
if(cljs.core.truth_(child_34503)){
node.appendChild(child_34503);


var G__34504 = cljs.core.next(seq__33736_34497__$1);
var G__34505 = null;
var G__34506 = (0);
var G__34507 = (0);
seq__33736_34481 = G__34504;
chunk__33738_34482 = G__34505;
count__33739_34483 = G__34506;
i__33740_34484 = G__34507;
continue;
} else {
var G__34508 = cljs.core.next(seq__33736_34497__$1);
var G__34509 = null;
var G__34510 = (0);
var G__34511 = (0);
seq__33736_34481 = G__34508;
chunk__33738_34482 = G__34509;
count__33739_34483 = G__34510;
i__33740_34484 = G__34511;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34480);
}
}


var G__34512 = seq__33666_34473;
var G__34513 = chunk__33668_34474;
var G__34514 = count__33669_34475;
var G__34515 = (i__33670_34476 + (1));
seq__33666_34473 = G__34512;
chunk__33668_34474 = G__34513;
count__33669_34475 = G__34514;
i__33670_34476 = G__34515;
continue;
} else {
var G__34516 = seq__33666_34473;
var G__34517 = chunk__33668_34474;
var G__34518 = count__33669_34475;
var G__34519 = (i__33670_34476 + (1));
seq__33666_34473 = G__34516;
chunk__33668_34474 = G__34517;
count__33669_34475 = G__34518;
i__33670_34476 = G__34519;
continue;
}
} else {
var temp__5735__auto___34521 = cljs.core.seq(seq__33666_34473);
if(temp__5735__auto___34521){
var seq__33666_34522__$1 = temp__5735__auto___34521;
if(cljs.core.chunked_seq_QMARK_(seq__33666_34522__$1)){
var c__4609__auto___34523 = cljs.core.chunk_first(seq__33666_34522__$1);
var G__34524 = cljs.core.chunk_rest(seq__33666_34522__$1);
var G__34525 = c__4609__auto___34523;
var G__34526 = cljs.core.count(c__4609__auto___34523);
var G__34527 = (0);
seq__33666_34473 = G__34524;
chunk__33668_34474 = G__34525;
count__33669_34475 = G__34526;
i__33670_34476 = G__34527;
continue;
} else {
var child_struct_34528 = cljs.core.first(seq__33666_34522__$1);
if((!((child_struct_34528 == null)))){
if(typeof child_struct_34528 === 'string'){
var text_34529 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34529),child_struct_34528].join(''));
} else {
var children_34530 = shadow.dom.svg_node(child_struct_34528);
if(cljs.core.seq_QMARK_(children_34530)){
var seq__33763_34531 = cljs.core.seq(children_34530);
var chunk__33765_34532 = null;
var count__33766_34533 = (0);
var i__33767_34534 = (0);
while(true){
if((i__33767_34534 < count__33766_34533)){
var child_34535 = chunk__33765_34532.cljs$core$IIndexed$_nth$arity$2(null,i__33767_34534);
if(cljs.core.truth_(child_34535)){
node.appendChild(child_34535);


var G__34537 = seq__33763_34531;
var G__34538 = chunk__33765_34532;
var G__34539 = count__33766_34533;
var G__34540 = (i__33767_34534 + (1));
seq__33763_34531 = G__34537;
chunk__33765_34532 = G__34538;
count__33766_34533 = G__34539;
i__33767_34534 = G__34540;
continue;
} else {
var G__34544 = seq__33763_34531;
var G__34545 = chunk__33765_34532;
var G__34546 = count__33766_34533;
var G__34547 = (i__33767_34534 + (1));
seq__33763_34531 = G__34544;
chunk__33765_34532 = G__34545;
count__33766_34533 = G__34546;
i__33767_34534 = G__34547;
continue;
}
} else {
var temp__5735__auto___34550__$1 = cljs.core.seq(seq__33763_34531);
if(temp__5735__auto___34550__$1){
var seq__33763_34551__$1 = temp__5735__auto___34550__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33763_34551__$1)){
var c__4609__auto___34554 = cljs.core.chunk_first(seq__33763_34551__$1);
var G__34555 = cljs.core.chunk_rest(seq__33763_34551__$1);
var G__34556 = c__4609__auto___34554;
var G__34557 = cljs.core.count(c__4609__auto___34554);
var G__34558 = (0);
seq__33763_34531 = G__34555;
chunk__33765_34532 = G__34556;
count__33766_34533 = G__34557;
i__33767_34534 = G__34558;
continue;
} else {
var child_34560 = cljs.core.first(seq__33763_34551__$1);
if(cljs.core.truth_(child_34560)){
node.appendChild(child_34560);


var G__34565 = cljs.core.next(seq__33763_34551__$1);
var G__34566 = null;
var G__34567 = (0);
var G__34568 = (0);
seq__33763_34531 = G__34565;
chunk__33765_34532 = G__34566;
count__33766_34533 = G__34567;
i__33767_34534 = G__34568;
continue;
} else {
var G__34569 = cljs.core.next(seq__33763_34551__$1);
var G__34570 = null;
var G__34571 = (0);
var G__34572 = (0);
seq__33763_34531 = G__34569;
chunk__33765_34532 = G__34570;
count__33766_34533 = G__34571;
i__33767_34534 = G__34572;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34530);
}
}


var G__34573 = cljs.core.next(seq__33666_34522__$1);
var G__34574 = null;
var G__34575 = (0);
var G__34576 = (0);
seq__33666_34473 = G__34573;
chunk__33668_34474 = G__34574;
count__33669_34475 = G__34575;
i__33670_34476 = G__34576;
continue;
} else {
var G__34577 = cljs.core.next(seq__33666_34522__$1);
var G__34578 = null;
var G__34579 = (0);
var G__34580 = (0);
seq__33666_34473 = G__34577;
chunk__33668_34474 = G__34578;
count__33669_34475 = G__34579;
i__33670_34476 = G__34580;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33781_34582 = shadow.dom._to_svg;
var G__33782_34583 = "string";
var G__33783_34584 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33781_34582,G__33782_34583,G__33783_34584);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33795_34589 = shadow.dom._to_svg;
var G__33796_34590 = "null";
var G__33797_34591 = (function (_){
return null;
});
goog.object.set(G__33795_34589,G__33796_34590,G__33797_34591);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34592 = arguments.length;
var i__4790__auto___34593 = (0);
while(true){
if((i__4790__auto___34593 < len__4789__auto___34592)){
args__4795__auto__.push((arguments[i__4790__auto___34593]));

var G__34594 = (i__4790__auto___34593 + (1));
i__4790__auto___34593 = G__34594;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33799){
var G__33800 = cljs.core.first(seq33799);
var seq33799__$1 = cljs.core.next(seq33799);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33800,seq33799__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33809 = arguments.length;
switch (G__33809) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__33825_34604 = shadow.dom.dom_node(el);
var G__33826_34605 = cljs.core.name(event);
var G__33827_34606 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33825_34604,G__33826_34605,G__33827_34606) : shadow.dom.dom_listen.call(null,G__33825_34604,G__33826_34605,G__33827_34606));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__28795__auto___34608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28796__auto__ = (function (){var switch__28437__auto__ = (function (state_33838){
var state_val_33839 = (state_33838[(1)]);
if((state_val_33839 === (1))){
var state_33838__$1 = state_33838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33838__$1,(2),once_or_cleanup);
} else {
if((state_val_33839 === (2))){
var inst_33835 = (state_33838[(2)]);
var inst_33836 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33838__$1 = (function (){var statearr_33851 = state_33838;
(statearr_33851[(7)] = inst_33835);

return statearr_33851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33838__$1,inst_33836);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28438__auto__ = null;
var shadow$dom$state_machine__28438__auto____0 = (function (){
var statearr_33858 = [null,null,null,null,null,null,null,null];
(statearr_33858[(0)] = shadow$dom$state_machine__28438__auto__);

(statearr_33858[(1)] = (1));

return statearr_33858;
});
var shadow$dom$state_machine__28438__auto____1 = (function (state_33838){
while(true){
var ret_value__28439__auto__ = (function (){try{while(true){
var result__28440__auto__ = switch__28437__auto__(state_33838);
if(cljs.core.keyword_identical_QMARK_(result__28440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28440__auto__;
}
break;
}
}catch (e33863){if((e33863 instanceof Object)){
var ex__28441__auto__ = e33863;
var statearr_33869_34610 = state_33838;
(statearr_33869_34610[(5)] = ex__28441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34614 = state_33838;
state_33838 = G__34614;
continue;
} else {
return ret_value__28439__auto__;
}
break;
}
});
shadow$dom$state_machine__28438__auto__ = function(state_33838){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28438__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28438__auto____1.call(this,state_33838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28438__auto____0;
shadow$dom$state_machine__28438__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28438__auto____1;
return shadow$dom$state_machine__28438__auto__;
})()
})();
var state__28797__auto__ = (function (){var statearr_33874 = (f__28796__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28796__auto__.cljs$core$IFn$_invoke$arity$0() : f__28796__auto__.call(null));
(statearr_33874[(6)] = c__28795__auto___34608);

return statearr_33874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28797__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
