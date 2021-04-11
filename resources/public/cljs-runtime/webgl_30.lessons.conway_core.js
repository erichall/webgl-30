goog.provide('webgl_30.lessons.conway_core');
goog.require('cljs.core');
webgl_30.lessons.conway_core.wrap = (function webgl_30$lessons$conway_core$wrap(a,size){
return cljs.core.mod((a + size),size);
});
webgl_30.lessons.conway_core.dx = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null);
webgl_30.lessons.conway_core.dy = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null);
/**
 * Find the 8 members of a given x,y coordinates.
 * The grid is considered to be a toroidal so edges wraps around.
 * 
 * XXX
 * X.X
 * XXX
 * 
 * 
 */
webgl_30.lessons.conway_core.neighbours = (function webgl_30$lessons$conway_core$neighbours(size,toroidal_QMARK_,p__563344){
var vec__563345 = p__563344;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__563345,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__563345,(1),null);
var iter__4582__auto__ = (function webgl_30$lessons$conway_core$neighbours_$_iter__563348(s__563349){
return (new cljs.core.LazySeq(null,(function (){
var s__563349__$1 = s__563349;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__563349__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var dx = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__563349__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__563345,x,y){
return (function webgl_30$lessons$conway_core$neighbours_$_iter__563348_$_iter__563350(s__563351){
return (new cljs.core.LazySeq(null,((function (s__563349__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__563345,x,y){
return (function (){
var s__563351__$1 = s__563351;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__563351__$1);
if(temp__5735__auto____$1){
var s__563351__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__563351__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__563351__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__563353 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__563352 = (0);
while(true){
if((i__563352 < size__4581__auto__)){
var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__563352);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))))){
cljs.core.chunk_append(b__563353,(cljs.core.truth_(toroidal_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.conway_core.wrap((dx + x),size),webgl_30.lessons.conway_core.wrap((dy + y),size)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null)));

var G__563386 = (i__563352 + (1));
i__563352 = G__563386;
continue;
} else {
var G__563387 = (i__563352 + (1));
i__563352 = G__563387;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__563353),webgl_30$lessons$conway_core$neighbours_$_iter__563348_$_iter__563350(cljs.core.chunk_rest(s__563351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__563353),null);
}
} else {
var dy = cljs.core.first(s__563351__$2);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null))))){
return cljs.core.cons((cljs.core.truth_(toroidal_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webgl_30.lessons.conway_core.wrap((dx + x),size),webgl_30.lessons.conway_core.wrap((dy + y),size)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx + x),(dy + y)], null)),webgl_30$lessons$conway_core$neighbours_$_iter__563348_$_iter__563350(cljs.core.rest(s__563351__$2)));
} else {
var G__563388 = cljs.core.rest(s__563351__$2);
s__563351__$1 = G__563388;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__563349__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__563345,x,y))
,null,null));
});})(s__563349__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__563345,x,y))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(webgl_30.lessons.conway_core.dy));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,webgl_30$lessons$conway_core$neighbours_$_iter__563348(cljs.core.rest(s__563349__$1)));
} else {
var G__563389 = cljs.core.rest(s__563349__$1);
s__563349__$1 = G__563389;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(webgl_30.lessons.conway_core.dx);
});
webgl_30.lessons.conway_core.tick = (function webgl_30$lessons$conway_core$tick(p__563354){
var map__563355 = p__563354;
var map__563355__$1 = (((((!((map__563355 == null))))?(((((map__563355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__563355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__563355):map__563355);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__563355__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var grid_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__563355__$1,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144));
var toroidal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__563355__$1,new cljs.core.Keyword(null,"toroidal?","toroidal?",2099414314));
var neighbours = (function (cell){
return webgl_30.lessons.conway_core.neighbours(grid_size,toroidal_QMARK_,cell);
});
return cljs.core.set((function (){var iter__4582__auto__ = (function webgl_30$lessons$conway_core$tick_$_iter__563357(s__563358){
return (new cljs.core.LazySeq(null,(function (){
var s__563358__$1 = s__563358;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__563358__$1);
if(temp__5735__auto__){
var s__563358__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__563358__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__563358__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__563360 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__563359 = (0);
while(true){
if((i__563359 < size__4581__auto__)){
var vec__563361 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__563359);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__563361,(0),null);
var n_neighbours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__563361,(1),null);
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_neighbours,(3));
if(or__4185__auto__){
return or__4185__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_neighbours,(2))){
return (cells.cljs$core$IFn$_invoke$arity$1 ? cells.cljs$core$IFn$_invoke$arity$1(cell) : cells.call(null,cell));
} else {
return false;
}
}
})())){
cljs.core.chunk_append(b__563360,cell);

var G__563390 = (i__563359 + (1));
i__563359 = G__563390;
continue;
} else {
var G__563391 = (i__563359 + (1));
i__563359 = G__563391;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__563360),webgl_30$lessons$conway_core$tick_$_iter__563357(cljs.core.chunk_rest(s__563358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__563360),null);
}
} else {
var vec__563364 = cljs.core.first(s__563358__$2);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__563364,(0),null);
var n_neighbours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__563364,(1),null);
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_neighbours,(3));
if(or__4185__auto__){
return or__4185__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_neighbours,(2))){
return (cells.cljs$core$IFn$_invoke$arity$1 ? cells.cljs$core$IFn$_invoke$arity$1(cell) : cells.call(null,cell));
} else {
return false;
}
}
})())){
return cljs.core.cons(cell,webgl_30$lessons$conway_core$tick_$_iter__563357(cljs.core.rest(s__563358__$2)));
} else {
var G__563395 = cljs.core.rest(s__563358__$2);
s__563358__$1 = G__563395;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(neighbours,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cells], 0))));
})());
});
webgl_30.lessons.conway_core.rect = (function webgl_30$lessons$conway_core$rect(p__563367){
var map__563368 = p__563367;
var map__563368__$1 = (((((!((map__563368 == null))))?(((((map__563368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__563368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__563368):map__563368);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__563368__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__563368__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__563368__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__563368__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x1 = x;
var x2 = (x + width);
var y1 = y;
var y2 = (y + height);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1,x2,y1,x1,y2,x1,y2,x2,y1,x2,y2], null);
});
webgl_30.lessons.conway_core.cell_lookup_map = (function webgl_30$lessons$conway_core$cell_lookup_map(grid_size,cell_size){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (lookup,cell){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lookup,cell,webgl_30.lessons.conway_core.rect(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(cell_size * cljs.core.first(cell)),new cljs.core.Keyword(null,"y","y",-1757859776),(cell_size * cljs.core.last(cell)),new cljs.core.Keyword(null,"width","width",-384071477),cell_size,new cljs.core.Keyword(null,"height","height",1025178622),cell_size], null)));
}),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function webgl_30$lessons$conway_core$cell_lookup_map_$_iter__563370(s__563371){
return (new cljs.core.LazySeq(null,(function (){
var s__563371__$1 = s__563371;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__563371__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__563371__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function webgl_30$lessons$conway_core$cell_lookup_map_$_iter__563370_$_iter__563372(s__563373){
return (new cljs.core.LazySeq(null,((function (s__563371__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__563373__$1 = s__563373;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__563373__$1);
if(temp__5735__auto____$1){
var s__563373__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__563373__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__563373__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__563375 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__563374 = (0);
while(true){
if((i__563374 < size__4581__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__563374);
cljs.core.chunk_append(b__563375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__563401 = (i__563374 + (1));
i__563374 = G__563401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__563375),webgl_30$lessons$conway_core$cell_lookup_map_$_iter__563370_$_iter__563372(cljs.core.chunk_rest(s__563373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__563375),null);
}
} else {
var y = cljs.core.first(s__563373__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),webgl_30$lessons$conway_core$cell_lookup_map_$_iter__563370_$_iter__563372(cljs.core.rest(s__563373__$2)));
}
} else {
return null;
}
break;
}
});})(s__563371__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__563371__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),grid_size)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,webgl_30$lessons$conway_core$cell_lookup_map_$_iter__563370(cljs.core.rest(s__563371__$1)));
} else {
var G__563404 = cljs.core.rest(s__563371__$1);
s__563371__$1 = G__563404;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),grid_size));
})());
});
webgl_30.lessons.conway_core.lookup__GT_data = (function webgl_30$lessons$conway_core$lookup__GT_data(lookup,cells){
return cljs.core.flatten(cljs.core.vals(cljs.core.select_keys(lookup,cells)));
});
webgl_30.lessons.conway_core.cells__GT_rects = (function webgl_30$lessons$conway_core$cells__GT_rects(cells,cell_size){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__563376){
var vec__563377 = p__563376;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__563377,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__563377,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,webgl_30.lessons.conway_core.rect(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(cell_size * x),new cljs.core.Keyword(null,"y","y",-1757859776),(cell_size * y),new cljs.core.Keyword(null,"width","width",-384071477),cell_size,new cljs.core.Keyword(null,"height","height",1025178622),cell_size], null)));
}),cljs.core.PersistentVector.EMPTY,cells);
});

//# sourceMappingURL=webgl_30.lessons.conway_core.js.map
