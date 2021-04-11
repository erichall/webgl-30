goog.provide('webgl_30.math');
goog.require('cljs.core');
webgl_30.math.deg__GT_rad = (function webgl_30$math$deg__GT_rad(a){
return (a * (Math.PI / (180)));
});
webgl_30.math.rad__GT_deg = (function webgl_30$math$rad__GT_deg(a){
return (a * ((180) / Math.PI));
});
webgl_30.math.xy_radians = (function webgl_30$math$xy_radians(angle){
var radians = ((angle * Math.PI) / (180));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin(radians),Math.cos(radians)], null);
});
webgl_30.math.cos_sin = (function webgl_30$math$cos_sin(angle){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(angle),Math.sin(angle)], null);
});
webgl_30.math.random_int = (function webgl_30$math$random_int(range){
var G__25966 = (range * Math.random());
return Math.floor(G__25966);
});
webgl_30.math.matrix_multiply_3d = (function webgl_30$math$matrix_multiply_3d(a,b){
var a00 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((0) * (4)) + (0)));
var a01 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((0) * (4)) + (1)));
var a02 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((0) * (4)) + (2)));
var a03 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((0) * (4)) + (3)));
var a10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((1) * (4)) + (0)));
var a11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((1) * (4)) + (1)));
var a12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((1) * (4)) + (2)));
var a13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((1) * (4)) + (3)));
var a20 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((2) * (4)) + (0)));
var a21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((2) * (4)) + (1)));
var a22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((2) * (4)) + (2)));
var a23 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((2) * (4)) + (3)));
var a30 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((3) * (4)) + (0)));
var a31 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((3) * (4)) + (1)));
var a32 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((3) * (4)) + (2)));
var a33 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((3) * (4)) + (3)));
var b00 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((0) * (4)) + (0)));
var b01 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((0) * (4)) + (1)));
var b02 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((0) * (4)) + (2)));
var b03 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((0) * (4)) + (3)));
var b10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((1) * (4)) + (0)));
var b11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((1) * (4)) + (1)));
var b12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((1) * (4)) + (2)));
var b13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((1) * (4)) + (3)));
var b20 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((2) * (4)) + (0)));
var b21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((2) * (4)) + (1)));
var b22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((2) * (4)) + (2)));
var b23 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((2) * (4)) + (3)));
var b30 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((3) * (4)) + (0)));
var b31 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((3) * (4)) + (1)));
var b32 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((3) * (4)) + (2)));
var b33 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((3) * (4)) + (3)));
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((b00 * a00) + (b01 * a10)) + (b02 * a20)) + (b03 * a30)),((((b00 * a01) + (b01 * a11)) + (b02 * a21)) + (b03 * a31)),((((b00 * a02) + (b01 * a12)) + (b02 * a22)) + (b03 * a32)),((((b00 * a03) + (b01 * a13)) + (b02 * a23)) + (b03 * a33)),((((b10 * a00) + (b11 * a10)) + (b12 * a20)) + (b13 * a30)),((((b10 * a01) + (b11 * a11)) + (b12 * a21)) + (b13 * a31)),((((b10 * a02) + (b11 * a12)) + (b12 * a22)) + (b13 * a32)),((((b10 * a03) + (b11 * a13)) + (b12 * a23)) + (b13 * a33)),((((b20 * a00) + (b21 * a10)) + (b22 * a20)) + (b23 * a30)),((((b20 * a01) + (b21 * a11)) + (b22 * a21)) + (b23 * a31)),((((b20 * a02) + (b21 * a12)) + (b22 * a22)) + (b23 * a32)),((((b20 * a03) + (b21 * a13)) + (b22 * a23)) + (b23 * a33)),((((b30 * a00) + (b31 * a10)) + (b32 * a20)) + (b33 * a30)),((((b30 * a01) + (b31 * a11)) + (b32 * a21)) + (b33 * a31)),((((b30 * a02) + (b31 * a12)) + (b32 * a22)) + (b33 * a32)),((((b30 * a03) + (b31 * a13)) + (b32 * a23)) + (b33 * a33))], null);
});
webgl_30.math.matrix_multiply_2d = (function webgl_30$math$matrix_multiply_2d(a,b){
var a00 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((0) * (3)) + (0)));
var a01 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((0) * (3)) + (1)));
var a02 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((0) * (3)) + (2)));
var a10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((1) * (3)) + (0)));
var a11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((1) * (3)) + (1)));
var a12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((1) * (3)) + (2)));
var a20 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((2) * (3)) + (0)));
var a21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((2) * (3)) + (1)));
var a22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(((2) * (3)) + (2)));
var b00 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((0) * (3)) + (0)));
var b01 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((0) * (3)) + (1)));
var b02 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((0) * (3)) + (2)));
var b10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((1) * (3)) + (0)));
var b11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((1) * (3)) + (1)));
var b12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((1) * (3)) + (2)));
var b20 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((2) * (3)) + (0)));
var b21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((2) * (3)) + (1)));
var b22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(((2) * (3)) + (2)));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((b00 * a00) + (b01 * a10)) + (b02 * a20)),(((b00 * a01) + (b01 * a11)) + (b02 * a21)),(((b00 * a02) + (b01 * a12)) + (b02 * a22)),(((b10 * a00) + (b11 * a10)) + (b12 * a20)),(((b10 * a01) + (b11 * a11)) + (b12 * a21)),(((b10 * a02) + (b11 * a12)) + (b12 * a22)),(((b20 * a00) + (b21 * a10)) + (b22 * a20)),(((b20 * a01) + (b21 * a11)) + (b22 * a21)),(((b20 * a02) + (b21 * a12)) + (b22 * a22))], null);
});
webgl_30.math.perspective_3d_matrix = (function webgl_30$math$perspective_3d_matrix(field_of_view_in_radians,aspect,near,far){
var f = (function (){var G__25985 = ((Math.PI * 0.5) - (0.5 * field_of_view_in_radians));
return Math.tan(G__25985);
})();
var range_in_view = (1.0 / (near - far));
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f / aspect),(0),(0),(0),(0),f,(0),(0),(0),(0),(range_in_view * (near + far)),(- (1)),(0),(0),(((near * far) * range_in_view) * (2)),(0)], null);
});
webgl_30.math.rotation_3d_y_matrix = (function webgl_30$math$rotation_3d_y_matrix(angle_radians){
var vec__25986 = webgl_30.math.cos_sin(angle_radians);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25986,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25986,(1),null);
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(0),(- s),(0),(0),(1),(0),(0),s,(0),c,(0),(0),(0),(0),(1)], null);
});
webgl_30.math.rotation_3d_x_matrix = (function webgl_30$math$rotation_3d_x_matrix(angle_radians){
var vec__25989 = webgl_30.math.cos_sin(angle_radians);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25989,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25989,(1),null);
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),c,s,(0),(0),(- s),c,(0),(0),(0),(0),(1)], null);
});
webgl_30.math.translation_3d_matrix = (function webgl_30$math$translation_3d_matrix(p__25992){
var vec__25993 = p__25992;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25993,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25993,(1),null);
var tz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25993,(2),null);
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),(0),tx,ty,tz,(1)], null);
});
webgl_30.math.invert_4x4 = (function webgl_30$math$invert_4x4(m){
var m00 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((0) * (4)) + (0)));
var m01 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((0) * (4)) + (1)));
var m02 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((0) * (4)) + (2)));
var m03 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((0) * (4)) + (3)));
var m10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((1) * (4)) + (0)));
var m11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((1) * (4)) + (1)));
var m12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((1) * (4)) + (2)));
var m13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((1) * (4)) + (3)));
var m20 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((2) * (4)) + (0)));
var m21 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((2) * (4)) + (1)));
var m22 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((2) * (4)) + (2)));
var m23 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((2) * (4)) + (3)));
var m30 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((3) * (4)) + (0)));
var m31 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((3) * (4)) + (1)));
var m32 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((3) * (4)) + (2)));
var m33 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(((3) * (4)) + (3)));
var tmp_0 = (m22 * m33);
var tmp_1 = (m32 * m23);
var tmp_2 = (m12 * m33);
var tmp_3 = (m32 * m13);
var tmp_4 = (m12 * m23);
var tmp_5 = (m22 * m13);
var tmp_6 = (m02 * m33);
var tmp_7 = (m32 * m03);
var tmp_8 = (m02 * m23);
var tmp_9 = (m22 * m03);
var tmp_10 = (m02 * m13);
var tmp_11 = (m12 * m03);
var tmp_12 = (m20 * m31);
var tmp_13 = (m30 * m21);
var tmp_14 = (m10 * m31);
var tmp_15 = (m30 * m11);
var tmp_16 = (m10 * m21);
var tmp_17 = (m20 * m11);
var tmp_18 = (m00 * m31);
var tmp_19 = (m30 * m01);
var tmp_20 = (m00 * m21);
var tmp_21 = (m20 * m01);
var tmp_22 = (m00 * m11);
var tmp_23 = (m10 * m01);
var t0 = ((((tmp_0 * m11) + (tmp_3 * m21)) + (tmp_4 * m31)) - (((tmp_1 * m11) + (tmp_2 * m21)) + (tmp_5 * m31)));
var t1 = ((((tmp_1 * m01) + (tmp_6 * m21)) + (tmp_9 * m31)) - (((tmp_0 * m01) + (tmp_7 * m21)) + (tmp_8 * m31)));
var t2 = ((((tmp_2 * m01) + (tmp_7 * m11)) + (tmp_10 * m31)) - (((tmp_3 * m01) + (tmp_6 * m11)) + (tmp_11 * m31)));
var t3 = ((((tmp_5 * m01) + (tmp_8 * m11)) + (tmp_11 * m21)) - (((tmp_4 * m01) + (tmp_9 * m11)) + (tmp_10 * m21)));
var det = (1.0 / ((((m00 * t0) + (m10 * t1)) + (m20 * t2)) + (m30 * t3)));
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(det * t0),(det * t1),(det * t2),(det * t3),(det * ((((tmp_1 * m10) + (tmp_2 * m20)) + (tmp_5 * m30)) - (((tmp_0 * m10) + (tmp_3 * m20)) + (tmp_4 * m30)))),(det * ((((tmp_0 * m00) + (tmp_7 * m20)) + (tmp_8 * m30)) - (((tmp_1 * m00) + (tmp_6 * m20)) + (tmp_9 * m30)))),(det * ((((tmp_3 * m00) + (tmp_6 * m10)) + (tmp_11 * m30)) - (((tmp_2 * m00) + (tmp_7 * m10)) + (tmp_10 * m30)))),(det * ((((tmp_4 * m00) + (tmp_9 * m10)) + (tmp_10 * m20)) - (((tmp_5 * m00) + (tmp_8 * m10)) + (tmp_11 * m20)))),(det * ((((tmp_12 * m13) + (tmp_15 * m23)) + (tmp_16 * m33)) - (((tmp_13 * m13) + (tmp_14 * m23)) + (tmp_17 * m33)))),(det * ((((tmp_13 * m03) + (tmp_18 * m23)) + (tmp_21 * m33)) - (((tmp_12 * m03) + (tmp_19 * m23)) + (tmp_20 * m33)))),(det * ((((tmp_14 * m03) + (tmp_19 * m13)) + (tmp_22 * m33)) - (((tmp_15 * m03) + (tmp_18 * m13)) + (tmp_23 * m33)))),(det * ((((tmp_17 * m03) + (tmp_20 * m13)) + (tmp_23 * m23)) - (((tmp_16 * m03) + (tmp_21 * m13)) + (tmp_22 * m23)))),(det * ((((tmp_14 * m22) + (tmp_17 * m32)) + (tmp_13 * m12)) - (((tmp_16 * m32) + (tmp_12 * m12)) + (tmp_15 * m22)))),(det * ((((tmp_20 * m22) + (tmp_12 * m02)) + (tmp_19 * m22)) - (((tmp_18 * m22) + (tmp_21 * m32)) + (tmp_13 * m02)))),(det * ((((tmp_18 * m12) + (tmp_23 * m32)) + (tmp_15 * m02)) - (((tmp_22 * m32) + (tmp_14 * m02)) + (tmp_19 * m12)))),(det * ((((tmp_22 * m22) + (tmp_16 * m02)) + (tmp_21 * m12)) - (((tmp_20 * m12) + (tmp_23 * m22)) + (tmp_17 * m02))))], null);
});
webgl_30.math.cross_product = (function webgl_30$math$cross_product(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1)) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2))) - (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(2)) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1)))),((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(2)) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0))) - (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0)) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2)))),((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0)) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1))) - (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1)) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0))))], null);
});
webgl_30.math.subtract_vec = (function webgl_30$math$subtract_vec(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(0))),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1))),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(2)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2)))], null);
});
webgl_30.math.normalize = (function webgl_30$math$normalize(v){
var l = (function (){var G__26028 = (((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0)) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0))) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)))) + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2))));
return Math.sqrt(G__26028);
})();
if((l > 1.0E-5)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26027_SHARP_){
return (p1__26027_SHARP_ / l);
}),v);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}
});
webgl_30.math.look_at_matrix = (function webgl_30$math$look_at_matrix(camera_position,target,up){
var z_axis = webgl_30.math.normalize(webgl_30.math.subtract_vec(camera_position,target));
var x_axis = webgl_30.math.normalize(webgl_30.math.cross_product(up,z_axis));
var y_axis = webgl_30.math.normalize(webgl_30.math.cross_product(z_axis,x_axis));
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x_axis,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x_axis,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x_axis,(2)),(0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y_axis,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y_axis,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(y_axis,(2)),(0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(z_axis,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(z_axis,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(z_axis,(2)),(0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(camera_position,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(camera_position,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(camera_position,(2)),(1)], null);
});
webgl_30.math.translation_2d_matrix = (function webgl_30$math$translation_2d_matrix(p__26029){
var vec__26030 = p__26029;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),tx,ty,(1)], null);
});
webgl_30.math.rotation_2d_matrix = (function webgl_30$math$rotation_2d_matrix(radians){
var c = Math.cos(radians);
var s = Math.sin(radians);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(- s),(0),s,c,(0),(0),(0),(1)], null);
});
webgl_30.math.scaling_2d_matrix = (function webgl_30$math$scaling_2d_matrix(p__26037){
var vec__26038 = p__26037;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,(0),(0),(0),sy,(0),(0),(0),(1)], null);
});
webgl_30.math.projection_2d_matrix = (function webgl_30$math$projection_2d_matrix(width,height){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) / width),(0),(0),(0),((- (2)) / height),(0),(-1),(1),(1)], null);
});
webgl_30.math.identity_2d_matrix = (function webgl_30$math$identity_2d_matrix(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1)], null);
});
webgl_30.math.rotation_3d_z_matrix = (function webgl_30$math$rotation_3d_z_matrix(angle_radians){
var vec__26041 = webgl_30.math.cos_sin(angle_radians);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26041,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26041,(1),null);
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,s,(0),(0),(- s),c,(0),(0),(0),(0),(1),(0),(0),(0),(0),(1)], null);
});
webgl_30.math.scaling_3d_matrix = (function webgl_30$math$scaling_3d_matrix(p__26044){
var vec__26045 = p__26044;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(2),null);
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,(0),(0),(0),(0),sy,(0),(0),(0),(0),sz,(0),(0),(0),(0),(1)], null);
});
webgl_30.math.z__GT_w_matrix = (function webgl_30$math$z__GT_w_matrix(fudge_factor){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(0),(1),(0),(0),(0),(0),(1),fudge_factor,(0),(0),(0),(0),(1)], null);
});
webgl_30.math.projection_3d_matrix = (function webgl_30$math$projection_3d_matrix(width,height,depth){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) / width),(0),(0),(0),(0),((- (2)) / height),(0),(0),(0),(0),((2) / depth),(0),(-1),(1),(0),(1)], null);
});
webgl_30.math.orthographic_matrix = (function webgl_30$math$orthographic_matrix(left,right,bottom,top,near,far){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) / (right - left)),(0),(0),(0),(0),((2) / (top - bottom)),(0),(0),(0),(0),((2) / (near - far)),(0),((left + right) / (left - right)),((bottom + top) / (bottom - top)),((near + far) / (near - far)),(1)], null);
});

//# sourceMappingURL=webgl_30.math.js.map
