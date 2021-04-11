goog.provide('webgl_30.input');
goog.require('cljs.core');
goog.require('cljs.core.async');
webgl_30.input.setup_listener_BANG_ = (function webgl_30$input$setup_listener_BANG_(var_args){
var G__513077 = arguments.length;
switch (G__513077) {
case 4:
return webgl_30.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return webgl_30.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return webgl_30.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webgl_30.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (obj,event_type,callback,args){
return obj.addEventListener(event_type,callback,args);
}));

(webgl_30.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (obj,event_type,callback){
return obj.addEventListener(event_type,callback);
}));

(webgl_30.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (event_type,callback){
return window.addEventListener(event_type,callback);
}));

(webgl_30.input.setup_listener_BANG_.cljs$lang$maxFixedArity = 4);

webgl_30.input.listen = (function webgl_30$input$listen(var_args){
var G__513079 = arguments.length;
switch (G__513079) {
case 3:
return webgl_30.input.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return webgl_30.input.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webgl_30.input.listen.cljs$core$IFn$_invoke$arity$3 = (function (element,type,prevent_default_QMARK_){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
webgl_30.input.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3(element,type,(function (evt){
if(cljs.core.truth_(prevent_default_QMARK_)){
evt.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,evt);
}));

return out;
}));

(webgl_30.input.listen.cljs$core$IFn$_invoke$arity$2 = (function (element,type){
return webgl_30.input.listen.cljs$core$IFn$_invoke$arity$3(element,type,false);
}));

(webgl_30.input.listen.cljs$lang$maxFixedArity = 3);

webgl_30.input.mousedown = (function webgl_30$input$mousedown(canvas,on_click){
var c = webgl_30.input.listen.cljs$core$IFn$_invoke$arity$2(canvas,"mousedown");
var c__25675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25676__auto__ = (function (){var switch__25637__auto__ = (function (state_513088){
var state_val_513089 = (state_513088[(1)]);
if((state_val_513089 === (1))){
var state_513088__$1 = state_513088;
var statearr_513090_513099 = state_513088__$1;
(statearr_513090_513099[(2)] = null);

(statearr_513090_513099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_513089 === (2))){
var state_513088__$1 = state_513088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_513088__$1,(4),c);
} else {
if((state_val_513089 === (3))){
var inst_513086 = (state_513088[(2)]);
var state_513088__$1 = state_513088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_513088__$1,inst_513086);
} else {
if((state_val_513089 === (4))){
var inst_513082 = (state_513088[(2)]);
var inst_513083 = (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(inst_513082) : on_click.call(null,inst_513082));
var state_513088__$1 = (function (){var statearr_513091 = state_513088;
(statearr_513091[(7)] = inst_513083);

return statearr_513091;
})();
var statearr_513092_513100 = state_513088__$1;
(statearr_513092_513100[(2)] = null);

(statearr_513092_513100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var webgl_30$input$mousedown_$_state_machine__25638__auto__ = null;
var webgl_30$input$mousedown_$_state_machine__25638__auto____0 = (function (){
var statearr_513093 = [null,null,null,null,null,null,null,null];
(statearr_513093[(0)] = webgl_30$input$mousedown_$_state_machine__25638__auto__);

(statearr_513093[(1)] = (1));

return statearr_513093;
});
var webgl_30$input$mousedown_$_state_machine__25638__auto____1 = (function (state_513088){
while(true){
var ret_value__25639__auto__ = (function (){try{while(true){
var result__25640__auto__ = switch__25637__auto__(state_513088);
if(cljs.core.keyword_identical_QMARK_(result__25640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25640__auto__;
}
break;
}
}catch (e513094){if((e513094 instanceof Object)){
var ex__25641__auto__ = e513094;
var statearr_513095_513101 = state_513088;
(statearr_513095_513101[(5)] = ex__25641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_513088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e513094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__513102 = state_513088;
state_513088 = G__513102;
continue;
} else {
return ret_value__25639__auto__;
}
break;
}
});
webgl_30$input$mousedown_$_state_machine__25638__auto__ = function(state_513088){
switch(arguments.length){
case 0:
return webgl_30$input$mousedown_$_state_machine__25638__auto____0.call(this);
case 1:
return webgl_30$input$mousedown_$_state_machine__25638__auto____1.call(this,state_513088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webgl_30$input$mousedown_$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$0 = webgl_30$input$mousedown_$_state_machine__25638__auto____0;
webgl_30$input$mousedown_$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$1 = webgl_30$input$mousedown_$_state_machine__25638__auto____1;
return webgl_30$input$mousedown_$_state_machine__25638__auto__;
})()
})();
var state__25677__auto__ = (function (){var statearr_513096 = (f__25676__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25676__auto__.cljs$core$IFn$_invoke$arity$0() : f__25676__auto__.call(null));
(statearr_513096[(6)] = c__25675__auto__);

return statearr_513096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25677__auto__);
}));

return c__25675__auto__;
});

//# sourceMappingURL=webgl_30.input.js.map
