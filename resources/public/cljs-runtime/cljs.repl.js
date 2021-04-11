goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34732){
var map__34733 = p__34732;
var map__34733__$1 = (((((!((map__34733 == null))))?(((((map__34733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34733):map__34733);
var m = map__34733__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34743_35029 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34744_35030 = null;
var count__34745_35031 = (0);
var i__34746_35032 = (0);
while(true){
if((i__34746_35032 < count__34745_35031)){
var f_35033 = chunk__34744_35030.cljs$core$IIndexed$_nth$arity$2(null,i__34746_35032);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35033], 0));


var G__35034 = seq__34743_35029;
var G__35035 = chunk__34744_35030;
var G__35036 = count__34745_35031;
var G__35037 = (i__34746_35032 + (1));
seq__34743_35029 = G__35034;
chunk__34744_35030 = G__35035;
count__34745_35031 = G__35036;
i__34746_35032 = G__35037;
continue;
} else {
var temp__5735__auto___35038 = cljs.core.seq(seq__34743_35029);
if(temp__5735__auto___35038){
var seq__34743_35039__$1 = temp__5735__auto___35038;
if(cljs.core.chunked_seq_QMARK_(seq__34743_35039__$1)){
var c__4609__auto___35042 = cljs.core.chunk_first(seq__34743_35039__$1);
var G__35043 = cljs.core.chunk_rest(seq__34743_35039__$1);
var G__35044 = c__4609__auto___35042;
var G__35045 = cljs.core.count(c__4609__auto___35042);
var G__35046 = (0);
seq__34743_35029 = G__35043;
chunk__34744_35030 = G__35044;
count__34745_35031 = G__35045;
i__34746_35032 = G__35046;
continue;
} else {
var f_35049 = cljs.core.first(seq__34743_35039__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35049], 0));


var G__35050 = cljs.core.next(seq__34743_35039__$1);
var G__35051 = null;
var G__35052 = (0);
var G__35053 = (0);
seq__34743_35029 = G__35050;
chunk__34744_35030 = G__35051;
count__34745_35031 = G__35052;
i__34746_35032 = G__35053;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35055 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35055], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35055)))?cljs.core.second(arglists_35055):arglists_35055)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34757_35066 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34758_35067 = null;
var count__34759_35068 = (0);
var i__34760_35069 = (0);
while(true){
if((i__34760_35069 < count__34759_35068)){
var vec__34779_35070 = chunk__34758_35067.cljs$core$IIndexed$_nth$arity$2(null,i__34760_35069);
var name_35071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34779_35070,(0),null);
var map__34782_35072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34779_35070,(1),null);
var map__34782_35073__$1 = (((((!((map__34782_35072 == null))))?(((((map__34782_35072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34782_35072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34782_35072):map__34782_35072);
var doc_35074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34782_35073__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34782_35073__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35071], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35075], 0));

if(cljs.core.truth_(doc_35074)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35074], 0));
} else {
}


var G__35087 = seq__34757_35066;
var G__35088 = chunk__34758_35067;
var G__35089 = count__34759_35068;
var G__35090 = (i__34760_35069 + (1));
seq__34757_35066 = G__35087;
chunk__34758_35067 = G__35088;
count__34759_35068 = G__35089;
i__34760_35069 = G__35090;
continue;
} else {
var temp__5735__auto___35091 = cljs.core.seq(seq__34757_35066);
if(temp__5735__auto___35091){
var seq__34757_35095__$1 = temp__5735__auto___35091;
if(cljs.core.chunked_seq_QMARK_(seq__34757_35095__$1)){
var c__4609__auto___35096 = cljs.core.chunk_first(seq__34757_35095__$1);
var G__35097 = cljs.core.chunk_rest(seq__34757_35095__$1);
var G__35098 = c__4609__auto___35096;
var G__35099 = cljs.core.count(c__4609__auto___35096);
var G__35100 = (0);
seq__34757_35066 = G__35097;
chunk__34758_35067 = G__35098;
count__34759_35068 = G__35099;
i__34760_35069 = G__35100;
continue;
} else {
var vec__34786_35101 = cljs.core.first(seq__34757_35095__$1);
var name_35102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786_35101,(0),null);
var map__34789_35103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786_35101,(1),null);
var map__34789_35104__$1 = (((((!((map__34789_35103 == null))))?(((((map__34789_35103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34789_35103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34789_35103):map__34789_35103);
var doc_35105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34789_35104__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34789_35104__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35102], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35106], 0));

if(cljs.core.truth_(doc_35105)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35105], 0));
} else {
}


var G__35118 = cljs.core.next(seq__34757_35095__$1);
var G__35119 = null;
var G__35120 = (0);
var G__35121 = (0);
seq__34757_35066 = G__35118;
chunk__34758_35067 = G__35119;
count__34759_35068 = G__35120;
i__34760_35069 = G__35121;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34793 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34794 = null;
var count__34795 = (0);
var i__34796 = (0);
while(true){
if((i__34796 < count__34795)){
var role = chunk__34794.cljs$core$IIndexed$_nth$arity$2(null,i__34796);
var temp__5735__auto___35127__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35127__$1)){
var spec_35129 = temp__5735__auto___35127__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35129)], 0));
} else {
}


var G__35134 = seq__34793;
var G__35135 = chunk__34794;
var G__35136 = count__34795;
var G__35137 = (i__34796 + (1));
seq__34793 = G__35134;
chunk__34794 = G__35135;
count__34795 = G__35136;
i__34796 = G__35137;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34793);
if(temp__5735__auto____$1){
var seq__34793__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34793__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34793__$1);
var G__35143 = cljs.core.chunk_rest(seq__34793__$1);
var G__35144 = c__4609__auto__;
var G__35145 = cljs.core.count(c__4609__auto__);
var G__35146 = (0);
seq__34793 = G__35143;
chunk__34794 = G__35144;
count__34795 = G__35145;
i__34796 = G__35146;
continue;
} else {
var role = cljs.core.first(seq__34793__$1);
var temp__5735__auto___35149__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35149__$2)){
var spec_35150 = temp__5735__auto___35149__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35150)], 0));
} else {
}


var G__35151 = cljs.core.next(seq__34793__$1);
var G__35152 = null;
var G__35153 = (0);
var G__35154 = (0);
seq__34793 = G__35151;
chunk__34794 = G__35152;
count__34795 = G__35153;
i__34796 = G__35154;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35172 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35173 = cljs.core.ex_cause(t);
via = G__35172;
t = G__35173;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34868 = datafied_throwable;
var map__34868__$1 = (((((!((map__34868 == null))))?(((((map__34868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34868):map__34868);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34868__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34868__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34868__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34878 = cljs.core.last(via);
var map__34878__$1 = (((((!((map__34878 == null))))?(((((map__34878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34878):map__34878);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34878__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34878__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34878__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34879 = data;
var map__34879__$1 = (((((!((map__34879 == null))))?(((((map__34879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34879):map__34879);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34879__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34879__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34879__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34880 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34880__$1 = (((((!((map__34880 == null))))?(((((map__34880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34880):map__34880);
var top_data = map__34880__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34880__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34893 = phase;
var G__34893__$1 = (((G__34893 instanceof cljs.core.Keyword))?G__34893.fqn:null);
switch (G__34893__$1) {
case "read-source":
var map__34897 = data;
var map__34897__$1 = (((((!((map__34897 == null))))?(((((map__34897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34897):map__34897);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34897__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34897__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34917 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34917__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34917,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34917);
var G__34917__$2 = (cljs.core.truth_((function (){var fexpr__34918 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34918.cljs$core$IFn$_invoke$arity$1 ? fexpr__34918.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34918.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34917__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34917__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34917__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34917__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34919 = top_data;
var G__34919__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34919,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34919);
var G__34919__$2 = (cljs.core.truth_((function (){var fexpr__34928 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34928.cljs$core$IFn$_invoke$arity$1 ? fexpr__34928.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34928.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34919__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34919__$1);
var G__34919__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34919__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34919__$2);
var G__34919__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34919__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34919__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34919__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34919__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34929 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34929,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34929,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34929,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34929,(3),null);
var G__34936 = top_data;
var G__34936__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34936,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34936);
var G__34936__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34936__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34936__$1);
var G__34936__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34936__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34936__$2);
var G__34936__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34936__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34936__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34936__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34936__$4;
}

break;
case "execution":
var vec__34937 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34851_SHARP_){
var or__4185__auto__ = (p1__34851_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__34942 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34942.cljs$core$IFn$_invoke$arity$1 ? fexpr__34942.cljs$core$IFn$_invoke$arity$1(p1__34851_SHARP_) : fexpr__34942.call(null,p1__34851_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__34947 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34947__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34947,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34947);
var G__34947__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34947__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34947__$1);
var G__34947__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34947__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34947__$2);
var G__34947__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34947__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34947__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34947__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34947__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34893__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34973){
var map__34974 = p__34973;
var map__34974__$1 = (((((!((map__34974 == null))))?(((((map__34974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34974):map__34974);
var triage_data = map__34974__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34988 = phase;
var G__34988__$1 = (((G__34988 instanceof cljs.core.Keyword))?G__34988.fqn:null);
switch (G__34988__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34989 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34990 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34991 = loc;
var G__34992 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34993_35308 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34994_35309 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34995_35310 = true;
var _STAR_print_fn_STAR__temp_val__34996_35311 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34995_35310);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34996_35311);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34967_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34967_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34994_35309);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34993_35308);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34989,G__34990,G__34991,G__34992) : format.call(null,G__34989,G__34990,G__34991,G__34992));

break;
case "macroexpansion":
var G__34998 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34999 = cause_type;
var G__35000 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35001 = loc;
var G__35002 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34998,G__34999,G__35000,G__35001,G__35002) : format.call(null,G__34998,G__34999,G__35000,G__35001,G__35002));

break;
case "compile-syntax-check":
var G__35003 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35004 = cause_type;
var G__35005 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35006 = loc;
var G__35007 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35003,G__35004,G__35005,G__35006,G__35007) : format.call(null,G__35003,G__35004,G__35005,G__35006,G__35007));

break;
case "compilation":
var G__35008 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35009 = cause_type;
var G__35010 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35011 = loc;
var G__35012 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35008,G__35009,G__35010,G__35011,G__35012) : format.call(null,G__35008,G__35009,G__35010,G__35011,G__35012));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35013 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35014 = symbol;
var G__35015 = loc;
var G__35016 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35017_35354 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35018_35355 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35019_35356 = true;
var _STAR_print_fn_STAR__temp_val__35020_35357 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35019_35356);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35020_35357);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34968_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34968_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35018_35355);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35017_35354);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35013,G__35014,G__35015,G__35016) : format.call(null,G__35013,G__35014,G__35015,G__35016));
} else {
var G__35022 = "Execution error%s at %s(%s).\n%s\n";
var G__35023 = cause_type;
var G__35024 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35025 = loc;
var G__35026 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35022,G__35023,G__35024,G__35025,G__35026) : format.call(null,G__35022,G__35023,G__35024,G__35025,G__35026));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34988__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
