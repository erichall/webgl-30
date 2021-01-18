(ns webgl-30.lessons.textures-0
  (:require [reagent.core :as r]
            [shadow.resource :as rc]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl   nil
                    :rect {:translation    [200 170 100]
                           :rotation       (mapv m/deg->rad [190 40 320])
                           :scale          [1 1 1]
                           :rotation-speed 1.2
                           :then           0
                           :width          100
                           :height         30
                           :color          [0.3 0.3 0.3 1]}})
(defonce state-atom (r/atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(def fragment-shader
  "precision mediump float;

   varying vec2 v_texcoord;

   // The texture
   uniform sampler2D u_texture;

   void main() {
       gl_FragColor = texture2D(u_texture, v_texcoord);
   }")

(def vertex-shader
  "attribute vec4 a_position;
   attribute vec2 a_texcoord;

  uniform mat4 u_matrix;

  varying vec2 v_texcoord;

  void main() {
    gl_Position = u_matrix * a_position;

    // this can be passed to the fragment shader
    v_texcoord = a_texcoord;
  }")

(defn multiply-matrices
  [{:keys [rect gl]}]
  (let [{:keys [translation scale rotation]} rect
        projection-matrix (m/projection-3d-matrix (webgl/get-canvas-width gl) (webgl/get-canvas-height gl) 400)
        orthographic-matrix (m/orthographic-matrix 0 (webgl/get-canvas-width gl) (webgl/get-canvas-height gl) 0 400 -400)
        translation-matrix (m/translation-3d-matrix translation)
        rotation-matrix-x (m/rotation-3d-x-matrix (nth rotation 0))
        rotation-matrix-y (m/rotation-3d-y-matrix (nth rotation 1))
        rotation-matrix-z (m/rotation-3d-z-matrix (nth rotation 2))
        scale-matrix (m/scaling-3d-matrix scale)]
    (-> (m/matrix-multiply-3d orthographic-matrix translation-matrix)
        (m/matrix-multiply-3d rotation-matrix-x)
        (m/matrix-multiply-3d rotation-matrix-y)
        (m/matrix-multiply-3d rotation-matrix-z)
        (m/matrix-multiply-3d scale-matrix))))

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn draw!
  [timestamp state]
  (let [{:keys [rect] :as s} state
        now (* timestamp 0.001)
        delta-time (- now (:then rect))
        state (assoc-in s [:rect :rotation 1] (+ (get-in rect [:rotation 1]) (* (:rotation-speed rect) delta-time)))]
    (-> (assoc-in state [:objects-to-draw :my-f :uniforms :u_matrix :values] (multiply-matrices state))
        webgl/draw-scene!)
    (js/requestAnimationFrame (fn [t] (draw! t (assoc-in state [:rect :then] now))))))

(defn raf-draw!
  [state]
  (js/requestAnimationFrame (fn [t] (draw! t state))))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl rect] :as state}]
                          (-> (assoc state :clear-depth? true)
                              (assoc :objects-to-draw
                                     {:my-f {:program    (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
                                             :features   [(.-CULL_FACE gl) (.-DEPTH_TEST gl)]
                                             :textures   {:f-texture {:texture (->> (webgl/create-texture! gl [(.-TEXTURE_2D gl) 0 (.-RGBA gl) 1 1 0 (.-RGBA gl) (.-UNSIGNED_BYTE gl) (js/Uint8Array. [0 0 255 255])])
                                                                                    (webgl/create-texture-from-img gl "images/f-texture.png" (fn [texture]
                                                                                                                                               (-> (swap! state-atom assoc-in [:objects-to-draw :my-f :textures :f-texture :texture] texture)
                                                                                                                                                   raf-draw!))))
                                                                      :type    (.-TEXTURE_2D gl)}}
                                             :attributes {:a_position {:name        "a_position"
                                                                       :size        3
                                                                       :type        (.-FLOAT gl)
                                                                       :normalize   false
                                                                       :stride      0
                                                                       :offset      0
                                                                       :buffer-info (webgl/create-buffer gl
                                                                                                         {:data   (js/Float32Array. shapes/f-shape-3d)
                                                                                                          :usage  (.-STATIC_DRAW gl)
                                                                                                          :target (.-ARRAY-BUFFER gl)})}
                                                          :a_texcoord {:name        "a_texcoord"
                                                                       :size        2
                                                                       :type        (.-FLOAT gl)
                                                                       :normalize   false
                                                                       :stride      0
                                                                       :offset      0
                                                                       :buffer-info (webgl/create-buffer gl
                                                                                                         {:data   (js/Float32Array. shapes/f-texture-coordinates)
                                                                                                          :usage  (.-STATIC_DRAW gl)
                                                                                                          :target (.-ARRAY-BUFFER gl)})}
                                                          }
                                             :uniforms   {:u_matrix  {:name      "u_matrix"
                                                                      :type      "uniformMatrix4fv"
                                                                      :transpose false
                                                                      :values    (multiply-matrices state)}
                                                          :u_texture {:name   "u_texture"
                                                                      :type   "uniform1i"
                                                                      :values [0]}}
                                             :element    {:draw-type (.-TRIANGLES gl)
                                                          :offset    0
                                                          :count     (* 16 6)}}}))))))
(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL Textures"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Texture"]])
   :source          (c/get-filename #'state-atom)
   :tutorial-source "webgl-3d-textures.html"
   :start           (fn []
                      (let [canvas-id "texture-0"
                            state @state-atom
                            {:keys [translation scale rotation]} (:rect state)]
                        [:div {:style {:display        "flex"
                                       :flex-direction "row"}}
                         [webgl-canvas {:height   400
                                        :width    400
                                        :id       canvas-id
                                        :on-mount (fn []
                                                    (do
                                                      (swap! state-atom assoc :gl (webgl/get-context canvas-id))
                                                      (setup!)
                                                      (js/requestAnimationFrame (fn [t] (draw! t @state-atom)))))}]]))})
