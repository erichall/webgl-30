goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__26520__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26525__i = 0, G__26525__a = new Array(arguments.length -  0);
while (G__26525__i < G__26525__a.length) {G__26525__a[G__26525__i] = arguments[G__26525__i + 0]; ++G__26525__i;}
  args = new cljs.core.IndexedSeq(G__26525__a,0,null);
} 
return G__26520__delegate.call(this,args);};
G__26520.cljs$lang$maxFixedArity = 0;
G__26520.cljs$lang$applyTo = (function (arglist__26527){
var args = cljs.core.seq(arglist__26527);
return G__26520__delegate(args);
});
G__26520.cljs$core$IFn$_invoke$arity$variadic = G__26520__delegate;
return G__26520;
})()
);

(o.error = (function() { 
var G__26533__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26536__i = 0, G__26536__a = new Array(arguments.length -  0);
while (G__26536__i < G__26536__a.length) {G__26536__a[G__26536__i] = arguments[G__26536__i + 0]; ++G__26536__i;}
  args = new cljs.core.IndexedSeq(G__26536__a,0,null);
} 
return G__26533__delegate.call(this,args);};
G__26533.cljs$lang$maxFixedArity = 0;
G__26533.cljs$lang$applyTo = (function (arglist__26537){
var args = cljs.core.seq(arglist__26537);
return G__26533__delegate(args);
});
G__26533.cljs$core$IFn$_invoke$arity$variadic = G__26533__delegate;
return G__26533;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
