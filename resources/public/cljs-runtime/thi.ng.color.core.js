goog.provide('thi.ng.color.core');
goog.require('cljs.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.strf.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.typedarrays.core');







thi.ng.color.core.hex6 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",(thi.ng.strf.core.hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.hex.cljs$core$IFn$_invoke$arity$1((6)) : thi.ng.strf.core.hex.call(null,(6)))], null);
thi.ng.color.core.ns_prefix = "#thi.ng.color.core.";

/**
 * @interface
 */
thi.ng.color.core.IRGBConvert = function(){};

thi.ng.color.core.as_rgba = (function thi$ng$color$core$as_rgba(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 == null)))))){
return _.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.as_rgba[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.as_rgba["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IRGBConvert.as-rgba",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSVConvert = function(){};

thi.ng.color.core.as_hsva = (function thi$ng$color$core$as_hsva(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 == null)))))){
return _.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.as_hsva[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.as_hsva["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHSVConvert.as-hsva",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSLConvert = function(){};

thi.ng.color.core.as_hsla = (function thi$ng$color$core$as_hsla(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 == null)))))){
return _.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.as_hsla[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.as_hsla["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHSLConvert.as-hsla",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.ICMYKConvert = function(){};

thi.ng.color.core.as_cmyka = (function thi$ng$color$core$as_cmyka(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 == null)))))){
return _.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.as_cmyka[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.as_cmyka["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICMYKConvert.as-cmyka",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.ICSSConvert = function(){};

thi.ng.color.core.as_css = (function thi$ng$color$core$as_css(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$ICSSConvert$as_css$arity$1 == null)))))){
return _.thi$ng$color$core$ICSSConvert$as_css$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.as_css[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.as_css["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICSSConvert.as-css",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IIntConvert = function(){};

thi.ng.color.core.as_int24 = (function thi$ng$color$core$as_int24(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IIntConvert$as_int24$arity$1 == null)))))){
return _.thi$ng$color$core$IIntConvert$as_int24$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.as_int24[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.as_int24["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IIntConvert.as-int24",_);
}
}
}
});

thi.ng.color.core.as_int32 = (function thi$ng$color$core$as_int32(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IIntConvert$as_int32$arity$1 == null)))))){
return _.thi$ng$color$core$IIntConvert$as_int32$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.as_int32[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.as_int32["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IIntConvert.as-int32",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorComponents = function(){};

thi.ng.color.core.red = (function thi$ng$color$core$red(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$red$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$red$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.red[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.red["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.red",_);
}
}
}
});

thi.ng.color.core.green = (function thi$ng$color$core$green(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$green$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$green$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.green[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.green["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.green",_);
}
}
}
});

thi.ng.color.core.blue = (function thi$ng$color$core$blue(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$blue$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$blue$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.blue[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.blue["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.blue",_);
}
}
}
});

thi.ng.color.core.alpha = (function thi$ng$color$core$alpha(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$alpha$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$alpha$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.alpha[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.alpha["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.alpha",_);
}
}
}
});

thi.ng.color.core.hue = (function thi$ng$color$core$hue(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$hue$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$hue$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.hue[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.hue["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.hue",_);
}
}
}
});

thi.ng.color.core.saturation = (function thi$ng$color$core$saturation(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$saturation$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$saturation$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.saturation[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.saturation["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.saturation",_);
}
}
}
});

thi.ng.color.core.brightness = (function thi$ng$color$core$brightness(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$brightness$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$brightness$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.brightness[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.brightness["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.brightness",_);
}
}
}
});

thi.ng.color.core.luminance = (function thi$ng$color$core$luminance(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$luminance$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$luminance$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.luminance[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.luminance["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.luminance",_);
}
}
}
});

thi.ng.color.core.cyan = (function thi$ng$color$core$cyan(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$cyan$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$cyan$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.cyan[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.cyan["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.cyan",_);
}
}
}
});

thi.ng.color.core.magenta = (function thi$ng$color$core$magenta(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$magenta$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$magenta$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.magenta[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.magenta["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.magenta",_);
}
}
}
});

thi.ng.color.core.yellow = (function thi$ng$color$core$yellow(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$yellow$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$yellow$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.yellow[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.yellow["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.yellow",_);
}
}
}
});

thi.ng.color.core.black = (function thi$ng$color$core$black(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$black$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$black$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.black[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (thi.ng.color.core.black["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.black",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorOps = function(){};

/**
 * Rotate hue by radians.
 */
thi.ng.color.core.rotate_hue = (function thi$ng$color$core$rotate_hue(_,theta){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$rotate_hue$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$rotate_hue$arity$2(_,theta);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.rotate_hue[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,theta) : m__4488__auto__.call(null,_,theta));
} else {
var m__4485__auto__ = (thi.ng.color.core.rotate_hue["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,theta) : m__4485__auto__.call(null,_,theta));
} else {
throw cljs.core.missing_protocol("IColorOps.rotate-hue",_);
}
}
}
});

/**
 * Adjust saturation up or down, clamping result to 0.0-1.0
 */
thi.ng.color.core.adjust_saturation = (function thi$ng$color$core$adjust_saturation(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_saturation$arity$2(_,offset);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.adjust_saturation[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4488__auto__.call(null,_,offset));
} else {
var m__4485__auto__ = (thi.ng.color.core.adjust_saturation["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4485__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-saturation",_);
}
}
}
});

/**
 * Adjust brightness (per HSV norms) up or down, clamping result to 0.0-1.0
 */
thi.ng.color.core.adjust_brightness = (function thi$ng$color$core$adjust_brightness(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_brightness$arity$2(_,offset);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.adjust_brightness[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4488__auto__.call(null,_,offset));
} else {
var m__4485__auto__ = (thi.ng.color.core.adjust_brightness["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4485__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-brightness",_);
}
}
}
});

/**
 * Adjust lightness (per HSL) up or down, clamping result to 0.0-1.0
 */
thi.ng.color.core.adjust_luminance = (function thi$ng$color$core$adjust_luminance(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_luminance$arity$2(_,offset);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.adjust_luminance[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4488__auto__.call(null,_,offset));
} else {
var m__4485__auto__ = (thi.ng.color.core.adjust_luminance["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4485__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-luminance",_);
}
}
}
});

/**
 * Adjust alpha up or down, clamping result to 0.0-1.0
 */
thi.ng.color.core.adjust_alpha = (function thi$ng$color$core$adjust_alpha(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_alpha$arity$2(_,offset);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (thi.ng.color.core.adjust_alpha[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4488__auto__.call(null,_,offset));
} else {
var m__4485__auto__ = (thi.ng.color.core.adjust_alpha["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4485__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-alpha",_);
}
}
}
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.RGBA = (function (r,g,b,a,__meta,__extmap,__hash){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k29724,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__29752 = k29724;
var G__29752__$1 = (((G__29752 instanceof cljs.core.Keyword))?G__29752.fqn:null);
switch (G__29752__$1) {
case "r":
return self__.r;

break;
case "g":
return self__.g;

break;
case "b":
return self__.b;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29724,else__4442__auto__);

}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__29758){
var vec__29759 = p__29758;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29759,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29759,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__29765 = ((((((thi.ng.math.core.clamp01(self__.r) * (255)) + 0.5) | (0)) << (16)) | ((((thi.ng.math.core.clamp01(self__.g) * (255)) + 0.5) | (0)) << (8))) | (((thi.ng.math.core.clamp01(self__.b) * (255)) + 0.5) | (0)));
return (thi.ng.color.core.int24.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int24.cljs$core$IFn$_invoke$arity$1(G__29765) : thi.ng.color.core.int24.call(null,G__29765));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__29772 = (((((((thi.ng.math.core.clamp01(self__.r) * (255)) + 0.5) | (0)) << (16)) | ((((thi.ng.math.core.clamp01(self__.g) * (255)) + 0.5) | (0)) << (8))) | (((thi.ng.math.core.clamp01(self__.b) * (255)) + 0.5) | (0))) | ((((thi.ng.math.core.clamp01(self__.a) * (255)) + 0.5) | (0)) << (24)));
return (thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(G__29772) : thi.ng.color.core.int32.call(null,G__29772));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#thi.ng.color.core.RGBA{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"g","g",1738089905),self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29723){
var self__ = this;
var G__29723__$1 = this;
return (new cljs.core.RecordIter((0),G__29723__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - self__.r),(1.0 - self__.g),(1.0 - self__.b),self__.a,null,null,null));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__29784 = (function (coll__4436__auto__){
return (171696367 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__29784(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29725,other29726){
var self__ = this;
var this29725__$1 = this;
return (((!((other29726 == null)))) && ((this29725__$1.constructor === other29726.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.r,other29726.r)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.g,other29726.g)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.b,other29726.b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.a,other29726.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.__extmap,other29726.__extmap)));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.r);

(dest[(idx + (1))] = self__.g);

(dest[(idx + (2))] = self__.b);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,thi.ng.math.core.clamp01((self__.a + offset)),null,null,null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.a < 1.0)){
var r__$1 = ((255) * thi.ng.math.core.clamp01(self__.r));
var g__$1 = ((255) * thi.ng.math.core.clamp01(self__.g));
var b__$1 = ((255) * thi.ng.math.core.clamp01(self__.b));
var G__29796 = ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((r__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((g__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((b__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4273__auto__ = 0.0;
var y__4274__auto__ = self__.a;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})()),")"].join('');
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__29796) : thi.ng.color.core.css.call(null,G__29796));
} else {
return thi.ng.color.core.as_css(___$1.thi$ng$color$core$IIntConvert$as_int24$arity$1(null));
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__4273__auto__ = (function (){var x__4273__auto__ = self__.r;
var y__4274__auto__ = self__.g;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var y__4274__auto__ = self__.b;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,v))){
return 0.0;
} else {
return ((v - (function (){var x__4276__auto__ = (function (){var x__4276__auto__ = self__.r;
var y__4277__auto__ = self__.g;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = self__.b;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})()) / v);
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__4273__auto__ = (function (){var x__4273__auto__ = self__.r;
var y__4274__auto__ = self__.g;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var y__4274__auto__ = self__.b;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((0.299 * self__.r) + (0.587 * self__.g)) + (0.114 * self__.b));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.r;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.b;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_rgba(dest);
return (new thi.ng.color.core.RGBA((function (){var a__25938__auto__ = self__.r;
return (((dest__$1.r - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.g;
return (((dest__$1.g - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.b;
return (((dest__$1.b - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.a;
return (((dest__$1.a - a__25938__auto__) * t) + a__25938__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__29723){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__29820 = cljs.core.keyword_identical_QMARK_;
var expr__29821 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__29824 = new cljs.core.Keyword(null,"r","r",-471384190);
var G__29825 = expr__29821;
return (pred__29820.cljs$core$IFn$_invoke$arity$2 ? pred__29820.cljs$core$IFn$_invoke$arity$2(G__29824,G__29825) : pred__29820.call(null,G__29824,G__29825));
})())){
return (new thi.ng.color.core.RGBA(G__29723,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29826 = new cljs.core.Keyword(null,"g","g",1738089905);
var G__29827 = expr__29821;
return (pred__29820.cljs$core$IFn$_invoke$arity$2 ? pred__29820.cljs$core$IFn$_invoke$arity$2(G__29826,G__29827) : pred__29820.call(null,G__29826,G__29827));
})())){
return (new thi.ng.color.core.RGBA(self__.r,G__29723,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29828 = new cljs.core.Keyword(null,"b","b",1482224470);
var G__29829 = expr__29821;
return (pred__29820.cljs$core$IFn$_invoke$arity$2 ? pred__29820.cljs$core$IFn$_invoke$arity$2(G__29828,G__29829) : pred__29820.call(null,G__29828,G__29829));
})())){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,G__29723,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29830 = new cljs.core.Keyword(null,"a","a",-2123407586);
var G__29831 = expr__29821;
return (pred__29820.cljs$core$IFn$_invoke$arity$2 ? pred__29820.cljs$core$IFn$_invoke$arity$2(G__29830,G__29831) : pred__29820.call(null,G__29830,G__29831));
})())){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,G__29723,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__29723),null));
}
}
}
}
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"r","r",-471384190),self__.r,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"g","g",1738089905),self__.g,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"b","b",1482224470),self__.b,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r__$1 = thi.ng.math.core.clamp01(self__.r);
var g__$1 = thi.ng.math.core.clamp01(self__.g);
var b__$1 = thi.ng.math.core.clamp01(self__.b);
var v = (function (){var x__4273__auto__ = (function (){var x__4273__auto__ = r__$1;
var y__4274__auto__ = g__$1;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var y__4274__auto__ = b__$1;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var d = (v - (function (){var x__4276__auto__ = (function (){var x__4276__auto__ = r__$1;
var y__4277__auto__ = g__$1;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = b__$1;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})());
var s = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,v))?0.0:(d / v));
var h = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,s))?0.0:(function (){var pred__29833 = cljs.core._EQ__EQ_;
var expr__29834 = v;
if(cljs.core.truth_((pred__29833.cljs$core$IFn$_invoke$arity$2 ? pred__29833.cljs$core$IFn$_invoke$arity$2(r__$1,expr__29834) : pred__29833.call(null,r__$1,expr__29834)))){
return ((g__$1 - b__$1) / d);
} else {
if(cljs.core.truth_((pred__29833.cljs$core$IFn$_invoke$arity$2 ? pred__29833.cljs$core$IFn$_invoke$arity$2(g__$1,expr__29834) : pred__29833.call(null,g__$1,expr__29834)))){
return (2.0 + ((b__$1 - r__$1) / d));
} else {
return (4.0 + ((r__$1 - g__$1) / d));
}
}
})());
var h__$1 = (h / 6.0);
var G__29836 = (((h__$1 < (0)))?(h__$1 + (1)):h__$1);
var G__29837 = s;
var G__29838 = v;
var G__29839 = thi.ng.math.core.clamp01(self__.a);
return (thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4(G__29836,G__29837,G__29838,G__29839) : thi.ng.color.core.hsva.call(null,G__29836,G__29837,G__29838,G__29839));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__29723){
var self__ = this;
var this__4438__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,G__29723,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (1.0 - thi.ng.math.core.clamp01(self__.r));
var m = (1.0 - thi.ng.math.core.clamp01(self__.g));
var y = (1.0 - thi.ng.math.core.clamp01(self__.b));
var k = (function (){var x__4276__auto__ = (function (){var x__4276__auto__ = c;
var y__4277__auto__ = m;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = y;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var G__29840 = (function (){var x__4273__auto__ = (c - k);
var y__4274__auto__ = 0.0;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var G__29841 = (function (){var x__4273__auto__ = (m - k);
var y__4274__auto__ = 0.0;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var G__29842 = (function (){var x__4273__auto__ = (y - k);
var y__4274__auto__ = 0.0;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var G__29843 = (function (){var x__4273__auto__ = k;
var y__4274__auto__ = 0.0;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var G__29844 = thi.ng.math.core.clamp01(self__.a);
return (thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 ? thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5(G__29840,G__29841,G__29842,G__29843,G__29844) : thi.ng.color.core.cmyka.call(null,G__29840,G__29841,G__29842,G__29843,G__29844));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r__$1 = thi.ng.math.core.clamp01(self__.r);
var g__$1 = thi.ng.math.core.clamp01(self__.g);
var b__$1 = thi.ng.math.core.clamp01(self__.b);
var a__$1 = thi.ng.math.core.clamp01(self__.a);
var f1 = (function (){var x__4276__auto__ = (function (){var x__4276__auto__ = r__$1;
var y__4277__auto__ = g__$1;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = b__$1;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var f2 = (function (){var x__4273__auto__ = (function (){var x__4273__auto__ = r__$1;
var y__4274__auto__ = g__$1;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var y__4274__auto__ = b__$1;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var l = ((f1 + f2) * 0.5);
var d = (f2 - f1);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,d))){
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(0.0,0.0,l,a__$1) : thi.ng.color.core.hsla.call(null,0.0,0.0,l,a__$1));
} else {
var s = (((l < 0.5))?(d / (f1 + f2)):(d / ((2.0 - f2) - f1)));
var d2 = (0.5 * d);
var dr = ((((f2 - r__$1) * thi.ng.math.core.SIXTH) + d2) / d);
var dg = ((((f2 - g__$1) * thi.ng.math.core.SIXTH) + d2) / d);
var db = ((((f2 - b__$1) * thi.ng.math.core.SIXTH) + d2) / d);
var h = (function (){var pred__29855 = cljs.core._EQ__EQ_;
var expr__29856 = f2;
if(cljs.core.truth_((pred__29855.cljs$core$IFn$_invoke$arity$2 ? pred__29855.cljs$core$IFn$_invoke$arity$2(r__$1,expr__29856) : pred__29855.call(null,r__$1,expr__29856)))){
return (db - dg);
} else {
if(cljs.core.truth_((pred__29855.cljs$core$IFn$_invoke$arity$2 ? pred__29855.cljs$core$IFn$_invoke$arity$2(g__$1,expr__29856) : pred__29855.call(null,g__$1,expr__29856)))){
return ((thi.ng.math.core.THIRD + dr) - db);
} else {
return ((thi.ng.math.core.TWO_THIRD + dg) - dr);
}
}
})();
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(h__$1,s,l,a__$1) : thi.ng.color.core.hsla.call(null,h__$1,s,l,a__$1));
}
}));

(thi.ng.color.core.RGBA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.RGBA.cljs$lang$type = true);

(thi.ng.color.core.RGBA.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/RGBA",null,(1),null));
}));

(thi.ng.color.core.RGBA.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"thi.ng.color.core/RGBA");
}));

/**
 * Positional factory function for thi.ng.color.core/RGBA.
 */
thi.ng.color.core.__GT_RGBA = (function thi$ng$color$core$__GT_RGBA(r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/RGBA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_RGBA = (function thi$ng$color$core$map__GT_RGBA(G__29734){
var extmap__4478__auto__ = (function (){var G__29868 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29734,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__29734)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29868);
} else {
return G__29868;
}
})();
return (new thi.ng.color.core.RGBA(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__29734),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(G__29734),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(G__29734),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__29734),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int24 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k29872,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__29876 = k29872;
var G__29876__$1 = (((G__29876 instanceof cljs.core.Keyword))?G__29876.fqn:null);
switch (G__29876__$1) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29872,else__4442__auto__);

}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__29883){
var vec__29885 = p__29883;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29885,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29885,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__29893 = (self__.col | (4278190080));
return (thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(G__29893) : thi.ng.color.core.int32.call(null,G__29893));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#thi.ng.color.core.Int24{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29871){
var self__ = this;
var G__29871__$1 = this;
return (new cljs.core.RecordIter((0),G__29871__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col ^ (16777215)),null,null,null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__29900 = (function (coll__4436__auto__){
return (-586101510 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__29900(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29873,other29874){
var self__ = this;
var this29873__$1 = this;
return (((!((other29874 == null)))) && ((this29873__$1.constructor === other29874.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29873__$1.col,other29874.col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29873__$1.__extmap,other29874.__extmap)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.adjust_alpha(___$1.thi$ng$color$core$IIntConvert$as_int32$arity$1(null),offset);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__29923 = thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(thi.ng.color.core.hex6,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(self__.col & (16777215))], 0));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__29923) : thi.ng.color.core.css.call(null,G__29923));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),1.0,null,null,null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var dest__$1 = thi.ng.color.core.as_rgba(dest);
return (new thi.ng.color.core.Int24((((((0.5 + (function (){var a__25938__auto__ = r;
return ((((dest__$1.r * (255)) - a__25938__auto__) * t) + a__25938__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__25938__auto__ = g;
return ((((dest__$1.g * (255)) - a__25938__auto__) * t) + a__25938__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__25938__auto__ = b;
return ((((dest__$1.b * (255)) - a__25938__auto__) * t) + a__25938__auto__);
})()) | (0))),null,null,null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__29871){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__29957 = cljs.core.keyword_identical_QMARK_;
var expr__29958 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__29960 = new cljs.core.Keyword(null,"col","col",-1959363084);
var G__29961 = expr__29958;
return (pred__29957.cljs$core$IFn$_invoke$arity$2 ? pred__29957.cljs$core$IFn$_invoke$arity$2(G__29960,G__29961) : pred__29957.call(null,G__29960,G__29961));
})())){
return (new thi.ng.color.core.Int24(G__29871,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__29871),null));
}
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__29871){
var self__ = this;
var this__4438__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,G__29871,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(thi.ng.color.core.Int24.cljs$lang$type = true);

(thi.ng.color.core.Int24.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/Int24",null,(1),null));
}));

(thi.ng.color.core.Int24.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"thi.ng.color.core/Int24");
}));

/**
 * Positional factory function for thi.ng.color.core/Int24.
 */
thi.ng.color.core.__GT_Int24 = (function thi$ng$color$core$__GT_Int24(col){
return (new thi.ng.color.core.Int24(col,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/Int24, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_Int24 = (function thi$ng$color$core$map__GT_Int24(G__29875){
var extmap__4478__auto__ = (function (){var G__29988 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29875,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_(G__29875)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29988);
} else {
return G__29988;
}
})();
return (new thi.ng.color.core.Int24(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__29875),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int32 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k30001,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__30022 = k30001;
var G__30022__$1 = (((G__30022 instanceof cljs.core.Keyword))?G__30022.fqn:null);
switch (G__30022__$1) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30001,else__4442__auto__);

}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__30028){
var vec__30029 = p__30028;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30029,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30029,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col & (16777215)),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#thi.ng.color.core.Int32{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30000){
var self__ = this;
var G__30000__$1 = this;
return (new cljs.core.RecordIter((0),G__30000__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int32((self__.col ^ (16777215)),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__30048 = (function (coll__4436__auto__){
return (958597195 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__30048(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30002,other30003){
var self__ = this;
var this30002__$1 = this;
return (((!((other30003 == null)))) && ((this30002__$1.constructor === other30003.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30002__$1.col,other30003.col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30002__$1.__extmap,other30003.__extmap)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var a = (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
var a__$1 = (((255) * thi.ng.math.core.clamp01((a + offset))) | (0));
return (new thi.ng.color.core.Int32(((self__.col & (16777215)) | (a__$1 << (24))),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((4278190080) === (self__.col & (4278190080)))){
var G__30060 = thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(thi.ng.color.core.hex6,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(self__.col & (16777215))], 0));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__30060) : thi.ng.color.core.css.call(null,G__30060));
} else {
return thi.ng.color.core.as_css(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255))),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var a = (self__.col >>> (24));
var dest__$1 = thi.ng.color.core.as_rgba(dest);
return (new thi.ng.color.core.Int32(((((((0.5 + (function (){var a__25938__auto__ = r;
return ((((dest__$1.r * (255)) - a__25938__auto__) * t) + a__25938__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__25938__auto__ = g;
return ((((dest__$1.g * (255)) - a__25938__auto__) * t) + a__25938__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__25938__auto__ = b;
return ((((dest__$1.b * (255)) - a__25938__auto__) * t) + a__25938__auto__);
})()) | (0))) | (((0.5 + (function (){var a__25938__auto__ = a;
return ((((dest__$1.a * (255)) - a__25938__auto__) * t) + a__25938__auto__);
})()) | (0)) << (24))),null,null,null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__30000){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__30077 = cljs.core.keyword_identical_QMARK_;
var expr__30078 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__30080 = new cljs.core.Keyword(null,"col","col",-1959363084);
var G__30081 = expr__30078;
return (pred__30077.cljs$core$IFn$_invoke$arity$2 ? pred__30077.cljs$core$IFn$_invoke$arity$2(G__30080,G__30081) : pred__30077.call(null,G__30080,G__30081));
})())){
return (new thi.ng.color.core.Int32(G__30000,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__30000),null));
}
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__30000){
var self__ = this;
var this__4438__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,G__30000,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(thi.ng.color.core.Int32.cljs$lang$type = true);

(thi.ng.color.core.Int32.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/Int32",null,(1),null));
}));

(thi.ng.color.core.Int32.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"thi.ng.color.core/Int32");
}));

/**
 * Positional factory function for thi.ng.color.core/Int32.
 */
thi.ng.color.core.__GT_Int32 = (function thi$ng$color$core$__GT_Int32(col){
return (new thi.ng.color.core.Int32(col,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/Int32, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_Int32 = (function thi$ng$color$core$map__GT_Int32(G__30008){
var extmap__4478__auto__ = (function (){var G__30104 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30008,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_(G__30008)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30104);
} else {
return G__30104;
}
})();
return (new thi.ng.color.core.Int32(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__30008),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSVA = (function (h,s,v,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.v = v;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k30116,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__30149 = k30116;
var G__30149__$1 = (((G__30149 instanceof cljs.core.Keyword))?G__30149.fqn:null);
switch (G__30149__$1) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30116,else__4442__auto__);

}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__30155){
var vec__30156 = p__30155;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#thi.ng.color.core.HSVA{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30115){
var self__ = this;
var G__30115__$1 = this;
return (new cljs.core.RecordIter((0),G__30115__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(cljs.core.mod((0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.v),self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__30183 = (function (coll__4436__auto__){
return (-1912636902 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__30183(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30117,other30118){
var self__ = this;
var this30117__$1 = this;
return (((!((other30118 == null)))) && ((this30117__$1.constructor === other30118.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30117__$1.h,other30118.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30117__$1.s,other30118.s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30117__$1.v,other30118.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30117__$1.a,other30118.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30117__$1.__extmap,other30118.__extmap)));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.v);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem(theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSVA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.v,self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,thi.ng.math.core.clamp01((offset + self__.s)),self__.v,self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,thi.ng.math.core.clamp01((offset + self__.v)),self__.a,null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,thi.ng.math.core.clamp01((offset + self__.a)),null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.v,self__.v,self__.v,self__.a,null,null,null));
} else {
var h__$1 = cljs.core.rem((self__.h * 6.0),6.0);
var i = (h__$1 | (0));
var f = (h__$1 - i);
var p = (self__.v * (1.0 - self__.s));
var q = (self__.v * (1.0 - (self__.s * f)));
var t = (self__.v * (1.0 - ((1.0 - f) * self__.s)));
var G__30211 = i;
switch (G__30211) {
case (0):
return (new thi.ng.color.core.RGBA(self__.v,t,p,self__.a,null,null,null));

break;
case (1):
return (new thi.ng.color.core.RGBA(q,self__.v,p,self__.a,null,null,null));

break;
case (2):
return (new thi.ng.color.core.RGBA(p,self__.v,t,self__.a,null,null,null));

break;
case (3):
return (new thi.ng.color.core.RGBA(p,q,self__.v,self__.a,null,null,null));

break;
case (4):
return (new thi.ng.color.core.RGBA(t,p,self__.v,self__.a,null,null,null));

break;
default:
return (new thi.ng.color.core.RGBA(self__.v,p,q,self__.a,null,null,null));

}
}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsva(dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff(self__.h,h2);
return (new thi.ng.color.core.HSVA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem((function (){var a__25938__auto__ = (self__.h + (1));
return (((h2 - a__25938__auto__) * t) + a__25938__auto__);
})(),1.0):cljs.core.rem((function (){var a__25938__auto__ = self__.h;
return ((((h2 + (1)) - a__25938__auto__) * t) + a__25938__auto__);
})(),1.0)):(function (){var a__25938__auto__ = self__.h;
return (((h2 - a__25938__auto__) * t) + a__25938__auto__);
})()),(function (){var a__25938__auto__ = self__.s;
return (((dest__$1.s - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.v;
return (((dest__$1.v - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.a;
return (((dest__$1.a - a__25938__auto__) * t) + a__25938__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__30115){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__30213 = cljs.core.keyword_identical_QMARK_;
var expr__30214 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__30216 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__30217 = expr__30214;
return (pred__30213.cljs$core$IFn$_invoke$arity$2 ? pred__30213.cljs$core$IFn$_invoke$arity$2(G__30216,G__30217) : pred__30213.call(null,G__30216,G__30217));
})())){
return (new thi.ng.color.core.HSVA(G__30115,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30218 = new cljs.core.Keyword(null,"s","s",1705939918);
var G__30219 = expr__30214;
return (pred__30213.cljs$core$IFn$_invoke$arity$2 ? pred__30213.cljs$core$IFn$_invoke$arity$2(G__30218,G__30219) : pred__30213.call(null,G__30218,G__30219));
})())){
return (new thi.ng.color.core.HSVA(self__.h,G__30115,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30220 = new cljs.core.Keyword(null,"v","v",21465059);
var G__30221 = expr__30214;
return (pred__30213.cljs$core$IFn$_invoke$arity$2 ? pred__30213.cljs$core$IFn$_invoke$arity$2(G__30220,G__30221) : pred__30213.call(null,G__30220,G__30221));
})())){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,G__30115,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30222 = new cljs.core.Keyword(null,"a","a",-2123407586);
var G__30223 = expr__30214;
return (pred__30213.cljs$core$IFn$_invoke$arity$2 ? pred__30213.cljs$core$IFn$_invoke$arity$2(G__30222,G__30223) : pred__30213.call(null,G__30222,G__30223));
})())){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,G__30115,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__30115),null));
}
}
}
}
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__30115){
var self__ = this;
var this__4438__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,G__30115,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l = (((2) - self__.s) * (self__.v * 0.5));
var s_SINGLEQUOTE_ = (((l === (0)))?0.0:((self__.s * self__.v) / ((1) - (function (){var G__30224 = (((2) * l) - (1));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__30224) : thi.ng.math.core.abs_STAR_.call(null,G__30224));
})())));
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(self__.h,s_SINGLEQUOTE_,l,self__.a) : thi.ng.color.core.hsla.call(null,self__.h,s_SINGLEQUOTE_,l,self__.a));
}));

(thi.ng.color.core.HSVA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.HSVA.cljs$lang$type = true);

(thi.ng.color.core.HSVA.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/HSVA",null,(1),null));
}));

(thi.ng.color.core.HSVA.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"thi.ng.color.core/HSVA");
}));

/**
 * Positional factory function for thi.ng.color.core/HSVA.
 */
thi.ng.color.core.__GT_HSVA = (function thi$ng$color$core$__GT_HSVA(h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/HSVA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_HSVA = (function thi$ng$color$core$map__GT_HSVA(G__30124){
var extmap__4478__auto__ = (function (){var G__30227 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30124,new cljs.core.Keyword(null,"h","h",1109658740),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__30124)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30227);
} else {
return G__30227;
}
})();
return (new thi.ng.color.core.HSVA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30124),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__30124),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__30124),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__30124),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSLA = (function (h,s,l,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.l = l;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k30229,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__30242 = k30229;
var G__30242__$1 = (((G__30242 instanceof cljs.core.Keyword))?G__30242.fqn:null);
switch (G__30242__$1) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "l":
return self__.l;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30229,else__4442__auto__);

}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__30251){
var vec__30253 = p__30251;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30253,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30253,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#thi.ng.color.core.HSLA{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30228){
var self__ = this;
var G__30228__$1 = this;
return (new cljs.core.RecordIter((0),G__30228__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(cljs.core.mod((0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.l),self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__30290 = (function (coll__4436__auto__){
return (1684519653 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__30290(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30230,other30231){
var self__ = this;
var this30230__$1 = this;
return (((!((other30231 == null)))) && ((this30230__$1.constructor === other30231.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30230__$1.h,other30231.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30230__$1.s,other30231.s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30230__$1.l,other30231.l)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30230__$1.a,other30231.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30230__$1.__extmap,other30231.__extmap)));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.l);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem(theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSLA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.l,self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,thi.ng.math.core.clamp01((offset + self__.s)),self__.l,self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,thi.ng.math.core.clamp01((offset + self__.l)),self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,thi.ng.math.core.clamp01((offset + self__.a)),null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var h__$1 = (function (){var G__30297 = (self__.h * 360.0);
return Math.round(G__30297);
})();
var s__$1 = (function (){var G__30298 = (self__.s * 100.0);
return Math.round(G__30298);
})();
var l__$1 = (function (){var G__30305 = (self__.l * 100.0);
return Math.round(G__30305);
})();
var G__30306 = (((self__.a < (1)))?["hsla(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a),")"].join(''):["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l__$1),"%)"].join(''));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__30306) : thi.ng.color.core.css.call(null,G__30306));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.l;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.l,self__.l,self__.l,self__.a,null,null,null));
} else {
var f2 = (((self__.l < 0.5))?(self__.l * (self__.s + (1))):((self__.l + self__.s) - (self__.l * self__.s)));
var f1 = ((2.0 * self__.l) - f2);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp01((function (){var G__30312 = f1;
var G__30313 = f2;
var G__30314 = (self__.h + thi.ng.math.core.THIRD);
return (thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(G__30312,G__30313,G__30314) : thi.ng.color.core.hsl_hue.call(null,G__30312,G__30313,G__30314));
})()),thi.ng.math.core.clamp01((thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(f1,f2,self__.h) : thi.ng.color.core.hsl_hue.call(null,f1,f2,self__.h))),thi.ng.math.core.clamp01((function (){var G__30315 = f1;
var G__30316 = f2;
var G__30317 = (self__.h - thi.ng.math.core.THIRD);
return (thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(G__30315,G__30316,G__30317) : thi.ng.color.core.hsl_hue.call(null,G__30315,G__30316,G__30317));
})()),self__.a,null,null,null));
}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsla(dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff(self__.h,h2);
return (new thi.ng.color.core.HSLA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem((function (){var a__25938__auto__ = (self__.h + (1));
return (((h2 - a__25938__auto__) * t) + a__25938__auto__);
})(),1.0):cljs.core.rem((function (){var a__25938__auto__ = self__.h;
return ((((h2 + (1)) - a__25938__auto__) * t) + a__25938__auto__);
})(),1.0)):(function (){var a__25938__auto__ = self__.h;
return (((h2 - a__25938__auto__) * t) + a__25938__auto__);
})()),(function (){var a__25938__auto__ = self__.s;
return (((dest__$1.s - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.l;
return (((dest__$1.l - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.a;
return (((dest__$1.a - a__25938__auto__) * t) + a__25938__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__30228){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__30327 = cljs.core.keyword_identical_QMARK_;
var expr__30328 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__30330 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__30331 = expr__30328;
return (pred__30327.cljs$core$IFn$_invoke$arity$2 ? pred__30327.cljs$core$IFn$_invoke$arity$2(G__30330,G__30331) : pred__30327.call(null,G__30330,G__30331));
})())){
return (new thi.ng.color.core.HSLA(G__30228,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30332 = new cljs.core.Keyword(null,"s","s",1705939918);
var G__30333 = expr__30328;
return (pred__30327.cljs$core$IFn$_invoke$arity$2 ? pred__30327.cljs$core$IFn$_invoke$arity$2(G__30332,G__30333) : pred__30327.call(null,G__30332,G__30333));
})())){
return (new thi.ng.color.core.HSLA(self__.h,G__30228,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30334 = new cljs.core.Keyword(null,"l","l",1395893423);
var G__30335 = expr__30328;
return (pred__30327.cljs$core$IFn$_invoke$arity$2 ? pred__30327.cljs$core$IFn$_invoke$arity$2(G__30334,G__30335) : pred__30327.call(null,G__30334,G__30335));
})())){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,G__30228,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30336 = new cljs.core.Keyword(null,"a","a",-2123407586);
var G__30337 = expr__30328;
return (pred__30327.cljs$core$IFn$_invoke$arity$2 ? pred__30327.cljs$core$IFn$_invoke$arity$2(G__30336,G__30337) : pred__30327.call(null,G__30336,G__30337));
})())){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,G__30228,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__30228),null));
}
}
}
}
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"l","l",1395893423),self__.l,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l2 = ((2) * self__.l);
var v = ((l2 + (self__.s * ((1) - (function (){var G__30347 = (l2 - (1));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__30347) : thi.ng.math.core.abs_STAR_.call(null,G__30347));
})()))) / (2));
var s_SINGLEQUOTE_ = (((v === (0)))?0.0:(((2) * (v - self__.l)) / v));
return (new thi.ng.color.core.HSVA(self__.h,s_SINGLEQUOTE_,v,self__.a,null,null,null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__30228){
var self__ = this;
var this__4438__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,G__30228,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.HSLA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.HSLA.cljs$lang$type = true);

(thi.ng.color.core.HSLA.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/HSLA",null,(1),null));
}));

(thi.ng.color.core.HSLA.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"thi.ng.color.core/HSLA");
}));

/**
 * Positional factory function for thi.ng.color.core/HSLA.
 */
thi.ng.color.core.__GT_HSLA = (function thi$ng$color$core$__GT_HSLA(h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/HSLA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_HSLA = (function thi$ng$color$core$map__GT_HSLA(G__30233){
var extmap__4478__auto__ = (function (){var G__30362 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30233,new cljs.core.Keyword(null,"h","h",1109658740),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__30233)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30362);
} else {
return G__30362;
}
})();
return (new thi.ng.color.core.HSLA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30233),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__30233),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(G__30233),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__30233),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CMYKA = (function (c,m,y,k,a,__meta,__extmap,__hash){
this.c = c;
this.m = m;
this.y = y;
this.k = k;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k30370,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__30389 = k30370;
var G__30389__$1 = (((G__30389 instanceof cljs.core.Keyword))?G__30389.fqn:null);
switch (G__30389__$1) {
case "c":
return self__.c;

break;
case "m":
return self__.m;

break;
case "y":
return self__.y;

break;
case "k":
return self__.k;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30370,else__4442__auto__);

}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__30390){
var vec__30391 = p__30390;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30391,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30391,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#thi.ng.color.core.CMYKA{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"c","c",-1763192079),self__.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m","m",1632677161),self__.m],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30369){
var self__ = this;
var G__30369__$1 = this;
return (new cljs.core.RecordIter((0),G__30369__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA((1.0 - self__.c),(1.0 - self__.m),(1.0 - self__.y),(1.0 - self__.k),self__.a,null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__30408 = (function (coll__4436__auto__){
return (495080490 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__30408(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30371,other30372){
var self__ = this;
var this30371__$1 = this;
return (((!((other30372 == null)))) && ((this30371__$1.constructor === other30372.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30371__$1.c,other30372.c)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30371__$1.m,other30372.m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30371__$1.y,other30372.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30371__$1.k,other30372.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30371__$1.a,other30372.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30371__$1.__extmap,other30372.__extmap)));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,thi.ng.math.core.clamp01((offset + self__.a)),null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.k;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.y;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - (function (){var x__4276__auto__ = 1.0;
var y__4277__auto__ = (self__.c + self__.k);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})()),(1.0 - (function (){var x__4276__auto__ = 1.0;
var y__4277__auto__ = (self__.m + self__.k);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})()),(1.0 - (function (){var x__4276__auto__ = 1.0;
var y__4277__auto__ = (self__.y + self__.k);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})()),self__.a,null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"m","m",1632677161),null,new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_cmyka(dest);
return (new thi.ng.color.core.CMYKA((function (){var a__25938__auto__ = self__.c;
return (((dest__$1.c - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.m;
return (((dest__$1.m - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.y;
return (((dest__$1.y - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.k;
return (((dest__$1.k - a__25938__auto__) * t) + a__25938__auto__);
})(),(function (){var a__25938__auto__ = self__.a;
return (((dest__$1.a - a__25938__auto__) * t) + a__25938__auto__);
})(),null,null,null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__30369){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__30415 = cljs.core.keyword_identical_QMARK_;
var expr__30416 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__30418 = new cljs.core.Keyword(null,"c","c",-1763192079);
var G__30419 = expr__30416;
return (pred__30415.cljs$core$IFn$_invoke$arity$2 ? pred__30415.cljs$core$IFn$_invoke$arity$2(G__30418,G__30419) : pred__30415.call(null,G__30418,G__30419));
})())){
return (new thi.ng.color.core.CMYKA(G__30369,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30423 = new cljs.core.Keyword(null,"m","m",1632677161);
var G__30424 = expr__30416;
return (pred__30415.cljs$core$IFn$_invoke$arity$2 ? pred__30415.cljs$core$IFn$_invoke$arity$2(G__30423,G__30424) : pred__30415.call(null,G__30423,G__30424));
})())){
return (new thi.ng.color.core.CMYKA(self__.c,G__30369,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30425 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__30426 = expr__30416;
return (pred__30415.cljs$core$IFn$_invoke$arity$2 ? pred__30415.cljs$core$IFn$_invoke$arity$2(G__30425,G__30426) : pred__30415.call(null,G__30425,G__30426));
})())){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,G__30369,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30427 = new cljs.core.Keyword(null,"k","k",-2146297393);
var G__30428 = expr__30416;
return (pred__30415.cljs$core$IFn$_invoke$arity$2 ? pred__30415.cljs$core$IFn$_invoke$arity$2(G__30427,G__30428) : pred__30415.call(null,G__30427,G__30428));
})())){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,G__30369,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30430 = new cljs.core.Keyword(null,"a","a",-2123407586);
var G__30431 = expr__30416;
return (pred__30415.cljs$core$IFn$_invoke$arity$2 ? pred__30415.cljs$core$IFn$_invoke$arity$2(G__30430,G__30431) : pred__30415.call(null,G__30430,G__30431));
})())){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,G__30369,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__30369),null));
}
}
}
}
}
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"c","c",-1763192079),self__.c,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"m","m",1632677161),self__.m,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"a","a",-2123407586),self__.a,null))], null),self__.__extmap));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__30369){
var self__ = this;
var this__4438__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,G__30369,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c,self__.m,self__.y,self__.k,self__.a], null);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.CMYKA.cljs$lang$type = true);

(thi.ng.color.core.CMYKA.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/CMYKA",null,(1),null));
}));

(thi.ng.color.core.CMYKA.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"thi.ng.color.core/CMYKA");
}));

/**
 * Positional factory function for thi.ng.color.core/CMYKA.
 */
thi.ng.color.core.__GT_CMYKA = (function thi$ng$color$core$__GT_CMYKA(c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/CMYKA, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_CMYKA = (function thi$ng$color$core$map__GT_CMYKA(G__30376){
var extmap__4478__auto__ = (function (){var G__30449 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30376,new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586)], 0));
if(cljs.core.record_QMARK_(G__30376)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30449);
} else {
return G__30449;
}
})();
return (new thi.ng.color.core.CMYKA(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(G__30376),new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(G__30376),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30376),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__30376),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__30376),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CSS = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k30452,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__30459 = k30452;
var G__30459__$1 = (((G__30459 instanceof cljs.core.Keyword))?G__30459.fqn:null);
switch (G__30459__$1) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30452,else__4442__auto__);

}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__30460){
var vec__30461 = p__30460;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30461,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30461,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.Int24)){
return c;
} else {
return thi.ng.color.core.as_int24(c);
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.Int32)){
return c;
} else {
return thi.ng.color.core.as_int32(c);
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#thi.ng.color.core.CSS{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30451){
var self__ = this;
var G__30451__$1 = this;
return (new cljs.core.RecordIter((0),G__30451__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.math.core.invert(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__30479 = (function (coll__4436__auto__){
return (272537508 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__30479(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30453,other30454){
var self__ = this;
var this30453__$1 = this;
return (((!((other30454 == null)))) && ((this30453__$1.constructor === other30454.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30453__$1.col,other30454.col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30453__$1.__extmap,other30454.__extmap)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,stride,idx);
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_alpha(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.RGBA)){
return c;
} else {
return thi.ng.color.core.as_rgba(c);
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,t));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__30451){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__30498 = cljs.core.keyword_identical_QMARK_;
var expr__30499 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__30501 = new cljs.core.Keyword(null,"col","col",-1959363084);
var G__30502 = expr__30499;
return (pred__30498.cljs$core$IFn$_invoke$arity$2 ? pred__30498.cljs$core$IFn$_invoke$arity$2(G__30501,G__30502) : pred__30498.call(null,G__30501,G__30502));
})())){
return (new thi.ng.color.core.CSS(G__30451,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__30451),null));
}
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__30451){
var self__ = this;
var this__4438__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,G__30451,self__.__extmap,self__.__hash));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.HSLA)){
return c;
} else {
return thi.ng.color.core.as_hsla(c);
}
}));

(thi.ng.color.core.CSS.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null))], null);
}));

(thi.ng.color.core.CSS.cljs$lang$type = true);

(thi.ng.color.core.CSS.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"thi.ng.color.core/CSS",null,(1),null));
}));

(thi.ng.color.core.CSS.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"thi.ng.color.core/CSS");
}));

/**
 * Positional factory function for thi.ng.color.core/CSS.
 */
thi.ng.color.core.__GT_CSS = (function thi$ng$color$core$__GT_CSS(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});

/**
 * Factory function for thi.ng.color.core/CSS, taking a map of keywords to field values.
 */
thi.ng.color.core.map__GT_CSS = (function thi$ng$color$core$map__GT_CSS(G__30455){
var extmap__4478__auto__ = (function (){var G__30514 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30455,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.record_QMARK_(G__30455)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30514);
} else {
return G__30514;
}
})();
return (new thi.ng.color.core.CSS(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__30455),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

thi.ng.color.core.proxied_color_type = (function thi$ng$color$core$proxied_color_type(to_rgba,from_rgba){
return (function thi$ng$color$core$proxied_color_type_$_ctor(col){
if((typeof thi !== 'undefined') && (typeof thi.ng !== 'undefined') && (typeof thi.ng.color !== 'undefined') && (typeof thi.ng.color.core !== 'undefined') && (typeof thi.ng.color.core.t_thi$ng$color$core30520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.t_thi$ng$color$core30520 = (function (to_rgba,from_rgba,ctor,col,meta30521){
this.to_rgba = to_rgba;
this.from_rgba = from_rgba;
this.ctor = ctor;
this.col = col;
this.meta30521 = meta30521;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.col], 0));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__30549 = (function (){var G__30550 = thi.ng.math.core.invert((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__30550) : self__.from_rgba.call(null,G__30550));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__30549) : self__.ctor.call(null,G__30549));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),dest,stride,idx);
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var G__30551 = (function (){var G__30552 = thi.ng.color.core.rotate_hue((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),theta);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__30552) : self__.from_rgba.call(null,G__30552));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__30551) : self__.ctor.call(null,G__30551));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__30553 = (function (){var G__30554 = thi.ng.color.core.adjust_saturation((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__30554) : self__.from_rgba.call(null,G__30554));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__30553) : self__.ctor.call(null,G__30553));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__30558 = (function (){var G__30559 = thi.ng.color.core.adjust_brightness((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__30559) : self__.from_rgba.call(null,G__30559));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__30558) : self__.ctor.call(null,G__30558));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorOps$adjust_luminance$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__30563 = (function (){var G__30564 = thi.ng.color.core.adjust_luminance((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__30564) : self__.from_rgba.call(null,G__30564));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__30563) : self__.ctor.call(null,G__30563));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30522){
var self__ = this;
var _30522__$1 = this;
return self__.meta30521;
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IInterpolate$mix$arity$3(null,dest,0.5);
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var G__30569 = (function (){var G__30570 = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),dest,t);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__30570) : self__.from_rgba.call(null,G__30570));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__30569) : self__.ctor.call(null,G__30569));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30522,meta30521__$1){
var self__ = this;
var _30522__$1 = this;
return (new thi.ng.color.core.t_thi$ng$color$core30520(self__.to_rgba,self__.from_rgba,self__.ctor,self__.col,meta30521__$1));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core30520.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core30520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to-rgba","to-rgba",-145176828,null),new cljs.core.Symbol(null,"from-rgba","from-rgba",2048003927,null),new cljs.core.Symbol(null,"ctor","ctor",-903570967,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"meta30521","meta30521",-324920850,null)], null);
}));

(thi.ng.color.core.t_thi$ng$color$core30520.cljs$lang$type = true);

(thi.ng.color.core.t_thi$ng$color$core30520.cljs$lang$ctorStr = "thi.ng.color.core/t_thi$ng$color$core30520");

(thi.ng.color.core.t_thi$ng$color$core30520.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"thi.ng.color.core/t_thi$ng$color$core30520");
}));

/**
 * Positional factory function for thi.ng.color.core/t_thi$ng$color$core30520.
 */
thi.ng.color.core.__GT_t_thi$ng$color$core30520 = (function thi$ng$color$core$proxied_color_type_$_ctor_$___GT_t_thi$ng$color$core30520(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta30521){
return (new thi.ng.color.core.t_thi$ng$color$core30520(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta30521));
});

}

return (new thi.ng.color.core.t_thi$ng$color$core30520(to_rgba,from_rgba,thi$ng$color$core$proxied_color_type_$_ctor,col,cljs.core.PersistentArrayMap.EMPTY));
});
});
thi.ng.color.core.rgba = (function thi$ng$color$core$rgba(var_args){
var G__30572 = arguments.length;
switch (G__30572) {
case 1:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__30573){
var vec__30574 = p__30573;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30574,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30574,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30574,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30574,(3),null);
return (new thi.ng.color.core.RGBA(r,g,b,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new thi.ng.color.core.RGBA(r,g,b,1.0,null,null,null));
}));

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
}));

(thi.ng.color.core.rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.int24 = (function thi$ng$color$core$int24(col){
return (new thi.ng.color.core.Int24((col & (16777215)),null,null,null));
});
thi.ng.color.core.int32 = (function thi$ng$color$core$int32(var_args){
var G__30578 = arguments.length;
switch (G__30578) {
case 1:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 = (function (col){
return (new thi.ng.color.core.Int32(col,null,null,null));
}));

(thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2 = (function (col,alpha){
var a = (((255) * thi.ng.math.core.clamp01(alpha)) | (0));
return (new thi.ng.color.core.Int32(((col & (16777215)) | (a << (24))),null,null,null));
}));

(thi.ng.color.core.int32.cljs$lang$maxFixedArity = 2);

thi.ng.color.core.hsva = (function thi$ng$color$core$hsva(var_args){
var G__30581 = arguments.length;
switch (G__30581) {
case 1:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1 = (function (p__30583){
var vec__30584 = p__30583;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30584,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30584,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30584,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30584,(3),null);
return (new thi.ng.color.core.HSVA(h,s,v,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3 = (function (h,s,v){
return (new thi.ng.color.core.HSVA(h,s,v,1.0,null,null,null));
}));

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 = (function (h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
}));

(thi.ng.color.core.hsva.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.hsla = (function thi$ng$color$core$hsla(var_args){
var G__30588 = arguments.length;
switch (G__30588) {
case 1:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__30589){
var vec__30590 = p__30589;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30590,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30590,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30590,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30590,(3),null);
return (new thi.ng.color.core.HSLA(h,s,l,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return (new thi.ng.color.core.HSLA(h,s,l,1.0,null,null,null));
}));

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
}));

(thi.ng.color.core.hsla.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.cmyka = (function thi$ng$color$core$cmyka(var_args){
var G__30594 = arguments.length;
switch (G__30594) {
case 1:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1 = (function (p__30595){
var vec__30596 = p__30595;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(3),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30596,(4),null);
return (new thi.ng.color.core.CMYKA(c,m,y,k,(cljs.core.truth_(a)?a:1.0),null,null,null));
}));

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4 = (function (c,m,y,k){
return (new thi.ng.color.core.CMYKA(c,m,y,k,1.0,null,null,null));
}));

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 = (function (c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
}));

(thi.ng.color.core.cmyka.cljs$lang$maxFixedArity = 5);

thi.ng.color.core.css = (function thi$ng$color$core$css(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});
/**
 * Returns a random RGBA color with 100% alpha
 */
thi.ng.color.core.random_rgb = (function thi$ng$color$core$random_rgb(){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),1.0,null,null,null));
});
thi.ng.color.core.RED = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(0),(0),(1));
thi.ng.color.core.GREEN = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(1),(0),(1));
thi.ng.color.core.BLUE = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(0),(1),(1));
thi.ng.color.core.CYAN = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(1),(1),(1));
thi.ng.color.core.MAGENTA = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(0),(1),(1));
thi.ng.color.core.YELLOW = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(1),(0),(1));
thi.ng.color.core.BLACK = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1));
thi.ng.color.core.WHITE = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(1),(1),(1));
thi.ng.color.core.GRAY = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4(0.5,0.5,0.5,(1));
thi.ng.color.core.hsl_hue = (function thi$ng$color$core$hsl_hue(f1,f2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
if((h__$1 < thi.ng.math.core.SIXTH)){
var a__25938__auto__ = f1;
return (((f2 - a__25938__auto__) * (6.0 * h__$1)) + a__25938__auto__);
} else {
if((h__$1 < 0.5)){
return f2;
} else {
if((h__$1 < thi.ng.math.core.TWO_THIRD)){
var a__25938__auto__ = f1;
return (((f2 - a__25938__auto__) * ((thi.ng.math.core.TWO_THIRD - h__$1) * 6.0)) + a__25938__auto__);
} else {
return f1;

}
}
}
});
thi.ng.color.core.hue__GT_rgb = (function thi$ng$color$core$hue__GT_rgb(h){
var h__$1 = cljs.core.mod((6.0 * h),6.0);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp01(((function (){var G__30599 = (h__$1 - 3.0);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__30599) : thi.ng.math.core.abs_STAR_.call(null,G__30599));
})() - (1))),thi.ng.math.core.clamp01((2.0 - (function (){var G__30600 = (h__$1 - 2.0);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__30600) : thi.ng.math.core.abs_STAR_.call(null,G__30600));
})())),thi.ng.math.core.clamp01((2.0 - (function (){var G__30601 = (h__$1 - 4.0);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__30601) : thi.ng.math.core.abs_STAR_.call(null,G__30601));
})()))], null);
});
thi.ng.color.core.rgba__GT_hcva = (function thi$ng$color$core$rgba__GT_hcva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
var vec__30602 = (((g < b))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g,-1.0,thi.ng.math.core.TWO_THIRD], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,b,0.0,(- thi.ng.math.core.THIRD)], null));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30602,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30602,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30602,(2),null);
var pw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30602,(3),null);
var vec__30605 = (((r < px))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py,pw,r], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,py,pz,px], null));
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30605,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30605,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30605,(2),null);
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30605,(3),null);
var c = (qx - (function (){var x__4276__auto__ = qw;
var y__4277__auto__ = qy;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})());
var h = (function (){var G__30608 = (((qw - qy) / ((6.0 * c) + 1.0E-10)) + qz);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__30608) : thi.ng.math.core.abs_STAR_.call(null,G__30608));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp01(h),thi.ng.math.core.clamp01(c),thi.ng.math.core.clamp01(qx),a], null);
});
thi.ng.color.core.rgba__GT_hcya = (function thi$ng$color$core$rgba__GT_hcya(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var vec__30609 = thi.ng.color.core.rgba__GT_hcva(rgba);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30609,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30609,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30609,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30609,(3),null);
var y = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,c))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,c,y,a], null);
} else {
var vec__30612 = thi.ng.color.core.hue__GT_rgb(h);
var r_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30612,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30612,(1),null);
var b_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30612,(2),null);
var z = (((0.299 * r_SINGLEQUOTE_) + (0.587 * g_SINGLEQUOTE_)) + (0.114 * b_SINGLEQUOTE_));
if(((y - z) > 1.0E-5)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp01((c * ((1.0 - z) / (1.0 - y)))),y,a], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp01((c * (z / y))),y,a], null);
}
}
});
thi.ng.color.core.hcya__GT_rgba = (function thi$ng$color$core$hcya__GT_rgba(var_args){
var G__30616 = arguments.length;
switch (G__30616) {
case 1:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (hcya){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.hcya__GT_rgba,hcya);
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (h,c,y){
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4(h,c,y,1.0);
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (h,c,y,a){
var vec__30617 = thi.ng.color.core.hue__GT_rgb(h);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30617,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30617,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30617,(2),null);
var z = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
var c_SINGLEQUOTE_ = (((y < z))?(c * (y / z)):(((z < 1.0))?(c * ((1.0 - y) / (1.0 - z))):c));
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp01((((r - z) * c_SINGLEQUOTE_) + y)),thi.ng.math.core.clamp01((((g - z) * c_SINGLEQUOTE_) + y)),thi.ng.math.core.clamp01((((b - z) * c_SINGLEQUOTE_) + y)),a,null,null,null));
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.ycbcra__GT_rgba = (function thi$ng$color$core$ycbcra__GT_rgba(var_args){
var G__30621 = arguments.length;
switch (G__30621) {
case 1:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (ycbcra){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.ycbcra__GT_rgba,ycbcra);
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,cb,cr){
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4(y,cb,cr,1.0);
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,cb,cr,a){
var cb_SINGLEQUOTE_ = (cb - 0.5);
var cr_SINGLEQUOTE_ = (cr - 0.5);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp01(((cr_SINGLEQUOTE_ * 1.402) + y)),thi.ng.math.core.clamp01((y - ((cb_SINGLEQUOTE_ * 0.34414) + (cr_SINGLEQUOTE_ * 0.71414)))),thi.ng.math.core.clamp01(((cb_SINGLEQUOTE_ * 1.772) + y)),a,null,null,null));
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.rgba__GT_ycbcra = (function thi$ng$color$core$rgba__GT_ycbcra(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp01((((0.299 * r) + (0.587 * g)) + (0.114 * b))),thi.ng.math.core.clamp01((((0.5 - (0.16874 * r)) - (0.33126 * g)) + (0.5 * b))),thi.ng.math.core.clamp01((((0.5 + (0.5 * r)) - (0.418688 * g)) - (0.081312 * b)))], null);
});
thi.ng.color.core.rgba__GT_yuva = (function thi$ng$color$core$rgba__GT_yuva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((0.299 * r) + (0.587 * g)) + (0.114 * b)),(((-0.1473 * r) + (-0.28886 * g)) + (0.436 * b)),(((0.615 * r) + (-0.51499 * g)) + (-0.10001 * b)),a], null);
});
thi.ng.color.core.yuva__GT_rgba = (function thi$ng$color$core$yuva__GT_rgba(var_args){
var G__30623 = arguments.length;
switch (G__30623) {
case 1:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (yuva){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.yuva__GT_rgba,yuva);
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,u,v){
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4(y,u,v,1.0);
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,u,v,a){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp01(((1.13983 * v) + y)),thi.ng.math.core.clamp01((y - ((0.39465 * u) + (0.5806 * v)))),thi.ng.math.core.clamp01(((2.03211 * u) + y)),a,null,null,null));
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.cie1931_gamma_correct = (function thi$ng$color$core$cie1931_gamma_correct(x){
return thi.ng.math.core.clamp01((((x < 0.0031308))?(12.92 * x):((1.055 * (function (){var G__30624 = x;
var G__30625 = ((1) / 2.4);
return Math.pow(G__30624,G__30625);
})()) - 0.055)));
});
thi.ng.color.core.cie1931__GT_rgba = (function thi$ng$color$core$cie1931__GT_rgba(var_args){
var G__30627 = arguments.length;
switch (G__30627) {
case 1:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (xyz){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.cie1931__GT_rgba,xyz);
}));

(thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4(x,y,z,1.0);
}));

(thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,a){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.cie1931_gamma_correct((((3.2406 * x) + (-1.5372 * y)) + (-0.4986 * z))),thi.ng.color.core.cie1931_gamma_correct((((-0.9689 * x) + (1.8758 * y)) + (0.0415 * z))),thi.ng.color.core.cie1931_gamma_correct((((0.0557 * x) + (-0.204 * y)) + (1.057 * z))),a,null,null,null));
}));

(thi.ng.color.core.cie1931__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.hex__GT_int = (function thi$ng$color$core$hex__GT_int(hex){
var hex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(hex)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex,(1)):hex);
var len = cljs.core.count(hex__$1);
if(((3) === len)){
var vec__30628 = hex__$1;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30628,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30628,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30628,(2),null);
return thi.ng.color.core.int24(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),(16),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
} else {
if((len < (7))){
return thi.ng.color.core.int24(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(hex__$1,(16),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
} else {
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(hex__$1,(16),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
}
}
});
thi.ng.color.core.parse_channel_val = (function thi$ng$color$core$parse_channel_val(c){
if((c.indexOf("%") > (0))){
return (0.01 * thi.ng.strf.core.parse_float(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(c,(0),(cljs.core.count(c) - (1)))));
} else {
return (thi.ng.math.core.INV8BIT * thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(c,(10),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
}
});
thi.ng.color.core.parse_css = (function thi$ng$color$core$parse_css(col){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(col))){
return thi.ng.color.core.hex__GT_int(col);
} else {
var vec__30631 = cljs.core.re_seq(/(rgb|hsl)a?\((\d+%?),(\d+%?),(\d+%?),?([0-9\.]+)?\)/,col);
var vec__30634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30631,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30634,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30634,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30634,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30634,(3),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30634,(4),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30634,(5),null);
if(cljs.core.truth_(mode)){
if(cljs.core.truth_((function (){var fexpr__30637 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["rgba",null,"rgb",null], null), null);
return (fexpr__30637.cljs$core$IFn$_invoke$arity$1 ? fexpr__30637.cljs$core$IFn$_invoke$arity$1(mode) : fexpr__30637.call(null,mode));
})())){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.parse_channel_val(a),thi.ng.color.core.parse_channel_val(b),thi.ng.color.core.parse_channel_val(c),thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([1.0], 0)),null,null,null));
} else {
return (new thi.ng.color.core.HSLA((thi.ng.strf.core.parse_float(a) / 360.0),thi.ng.color.core.parse_channel_val(b),thi.ng.color.core.parse_channel_val(c),thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([1.0], 0)),null,null,null)).thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null);
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(col);
}
}
});
thi.ng.color.core.hcya = thi.ng.color.core.proxied_color_type(thi.ng.color.core.hcya__GT_rgba,thi.ng.color.core.rgba__GT_hcya);
thi.ng.color.core.yuva = thi.ng.color.core.proxied_color_type(thi.ng.color.core.yuva__GT_rgba,thi.ng.color.core.rgba__GT_yuva);
thi.ng.color.core.ycbcra = thi.ng.color.core.proxied_color_type(thi.ng.color.core.ycbcra__GT_rgba,thi.ng.color.core.rgba__GT_ycbcra);
thi.ng.color.core.cie1931 = thi.ng.color.core.proxied_color_type(thi.ng.color.core.cie1931__GT_rgba,thi.ng.xerror.core.unsupported_BANG_);
thi.ng.color.core.hues = cljs.core.zipmap(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30638_SHARP_){
return (p1__30638_SHARP_ / 360.0);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),(30))));
thi.ng.color.core.primary_hues = cljs.core.select_keys(thi.ng.color.core.hues,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null));
/**
 * Takes a color and map of hues (e.g. thi.ng.color.core.primary-hues),
 *   returns key of closest hue.
 */
thi.ng.color.core.closest_hue = (function thi$ng$color$core$closest_hue(var_args){
var G__30640 = arguments.length;
switch (G__30640) {
case 1:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1 = (function (col){
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2(col,thi.ng.color.core.hues);
}));

(thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2 = (function (col,hues){
var h = thi.ng.color.core.hue(col);
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__30641,p__30642){
var vec__30643 = p__30641;
var h_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30643,(0),null);
var d_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30643,(1),null);
var vec__30646 = p__30642;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30646,(1),null);
var d = (function (){var x__4276__auto__ = thi.ng.math.core.abs_diff(h,v);
var y__4277__auto__ = thi.ng.math.core.abs_diff((h - (1)),v);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
if((d < d_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_SINGLEQUOTE_,d_SINGLEQUOTE_], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1000000.0], null),hues));
}));

(thi.ng.color.core.closest_hue.cljs$lang$maxFixedArity = 2);

/**
 * Returns gamma corrected version of color as RGBA
 */
thi.ng.color.core.gamma_correct = (function thi$ng$color$core$gamma_correct(col,gamma){
var col__$1 = thi.ng.color.core.as_rgba(col);
return (new thi.ng.color.core.RGBA((function (){var G__30649 = col__$1.r;
var G__30650 = gamma;
return Math.pow(G__30649,G__30650);
})(),(function (){var G__30651 = col__$1.g;
var G__30652 = gamma;
return Math.pow(G__30651,G__30652);
})(),(function (){var G__30653 = col__$1.b;
var G__30654 = gamma;
return Math.pow(G__30653,G__30654);
})(),col__$1.a,null,null,null));
});
/**
 * Returns new color of same type with its hue rotated by 180 degrees.
 */
thi.ng.color.core.complementary = (function thi$ng$color$core$complementary(col){
return thi.ng.color.core.rotate_hue(col,thi.ng.math.core.PI);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness.
 */
thi.ng.color.core.analog = (function thi$ng$color$core$analog(col,theta,sat,bright){
return thi.ng.color.core.adjust_brightness(thi.ng.color.core.adjust_saturation(thi.ng.color.core.rotate_hue(col,theta),sat),bright);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness within given tolerances (+/-).
 */
thi.ng.color.core.random_analog = (function thi$ng$color$core$random_analog(var_args){
var G__30656 = arguments.length;
switch (G__30656) {
case 2:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2 = (function (col,delta){
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4(col,delta,delta,delta);
}));

(thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4 = (function (col,theta,sat,bright){
return thi.ng.color.core.analog(col,(thi.ng.math.core.randnorm() * theta),(thi.ng.math.core.randnorm() * sat),(thi.ng.math.core.randnorm() * bright));
}));

(thi.ng.color.core.random_analog.cljs$lang$maxFixedArity = 4);

/**
 * Returns RGB distance of any two colors
 */
thi.ng.color.core.dist_rgb = (function thi$ng$color$core$dist_rgb(a,b){
var vec__30657 = cljs.core.deref(thi.ng.color.core.as_rgba(a));
var ra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(0),null);
var ga = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(1),null);
var ba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(2),null);
var vec__30660 = cljs.core.deref(thi.ng.color.core.as_rgba(b));
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(0),null);
var gb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(1),null);
var bb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(2),null);
var dr = (ra - rb);
var dg = (ga - gb);
var db = (ba - bb);
var G__30663 = (((dr * dr) + (dg * dg)) + (db * db));
return Math.sqrt(G__30663);
});
/**
 * Returns HSV distance of any two colors (in cartesian space).
 */
thi.ng.color.core.dist_hsv = (function thi$ng$color$core$dist_hsv(a,b){
var vec__30664 = cljs.core.deref(thi.ng.color.core.as_hsva(a));
var ha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30664,(0),null);
var sa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30664,(1),null);
var va = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30664,(2),null);
var vec__30667 = cljs.core.deref(thi.ng.color.core.as_hsva(b));
var hb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30667,(0),null);
var sb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30667,(1),null);
var vb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30667,(2),null);
var ha__$1 = (thi.ng.math.core.TWO_PI * ha);
var hb__$1 = (thi.ng.math.core.TWO_PI * hb);
var dh = ((sa * Math.cos(ha__$1)) - (sb * Math.cos(hb__$1)));
var ds = ((sa * Math.sin(ha__$1)) - (sb * Math.sin(hb__$1)));
var dv = (va - vb);
var G__30670 = (((dh * dh) + (ds * ds)) + (dv * dv));
return Math.sqrt(G__30670);
});

//# sourceMappingURL=thi.ng.color.core.js.map
