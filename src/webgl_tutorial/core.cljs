(ns webgl-tutorial.core
  (:require
    [thi.ng.geom.gl.core :as gl]
    [thi.ng.geom.matrix :as mat]
    [thi.ng.geom.triangle :as tri]
    [thi.ng.geom.core :as geom]
    [thi.ng.geom.gl.glmesh :as glmesh]
    [thi.ng.geom.gl.camera :as cam]
    [thi.ng.geom.gl.shaders :as shaders]
    [thi.ng.geom.gl.webgl.constants :as glc]
    [thi.ng.geom.gl.webgl.animator :as anim]
    [reagent.core :as r]
    [reagent.dom :as rd]
    ))

(enable-console-print!)
(defn init! [] nil)
(defn reload! [] nil)

(defonce app-state (atom {:red 0}))
(defonce gl-ctx (gl/gl-context "main"))

;(def shader-spec
;  {:vs       "void main() {
;                gl_Position = proj * view * vec4(position, 1.0);
;              }"
;   :fs       "void main() {
;                gl_FragColor = vec4(0.5, 0.5, 1.0, 1.0);
;              }"
;   :uniforms {:view :mat4
;              :proj :mat4}
;   :attribs  {:position :vec3}})

(def shader-spec
  {:vs       "
  void main() {
    gl_Position = proj * view * vec4(position, 1.0);
  }"
   :fs       "
   void main() {
      gl_FragColor = vec4(1.0 1.0 1.0, 1.7);
   }
   "
   ;:version  330
   :uniforms {:view :mat4
              :proj :mat4}
   :attribs  {:position :vec3}})


;; model
(def triangle (geom/as-mesh (tri/triangle3 [[1 0 0] [0 1 0] [0 0 1]])
                            {:mesh (glmesh/gl-mesh 3)}))
;; viewport
(defonce camera (cam/perspective-camera {}))

(defn combine-model-shader-camera
  [model spec camera]
  (-> model
      (gl/as-gl-buffer-spec {})
      (assoc :shader (shaders/make-shader-from-spec gl-ctx shader-spec))
      (gl/make-buffers-in-spec gl-ctx glc/static-draw)
      (cam/apply camera)))

(defn draw-frame!
  [t]
  (doto gl-ctx
    (gl/clear-color-and-depth-buffer 0 0 0 1 1)
    (gl/draw-with-shader (combine-model-shader-camera triangle shader-spec camera))
    ))

(defonce running
         (anim/animate (fn [t] (draw-frame! t) true)))

