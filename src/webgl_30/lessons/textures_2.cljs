(ns webgl-30.lessons.textures-2
  (:require [reagent.core :as r]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl   nil
                    :rect {:translation    [250 200 0]
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
        scale-factor 2.5
        t-size (* 80 scale-factor)
        x (- (/ (webgl/get-canvas-width gl) 2) (/ t-size 2))
        y (- (webgl/get-canvas-height gl) t-size 60)
        orthographic-matrix (m/orthographic-matrix 0 (webgl/get-canvas-width gl) (webgl/get-canvas-height gl) 0 -1 1)
        translation-matrix (m/translation-3d-matrix [x y 0])
        translate-matrix-two (m/translation-3d-matrix [0.5 0.5 0])
        scale-matrix (m/scaling-3d-matrix [t-size t-size 1])]
    (-> (m/matrix-multiply-3d orthographic-matrix translation-matrix)
        (m/matrix-multiply-3d scale-matrix)
        (m/matrix-multiply-3d translate-matrix-two))))

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn draw!
  [timestamp state]
  (-> (assoc-in state [:objects-to-draw :my-f :uniforms :u_matrix :values] (multiply-matrices state))
      webgl/draw-scene!))

(defn raf-draw!
  [state]
  (js/requestAnimationFrame (fn [t] (draw! t state))))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl] :as state}]
                          (let [program (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})]
                            (-> (assoc state :clear-depth? true)
                                (assoc :objects-to-draw
                                       {:my-f {:program    program
                                               :features   [(.-CULL_FACE gl) (.-DEPTH_TEST gl)]
                                               ;; first create a blue placeholder texture, then load the img async
                                               :textures   {:f-texture {:texture (->> [(.-TEXTURE_2D gl) 0 (.-RGBA gl) 1 1 0 (.-RGBA gl) (.-UNSIGNED_BYTE gl) (js/Uint8Array. [0 0 255 255])]
                                                                                      (webgl/create-texture! gl)
                                                                                      (webgl/create-texture-from-img gl "images/f-texture.png" (fn [texture]
                                                                                                                                                 (-> (swap! state-atom assoc-in [:objects-to-draw :my-f :textures :f-texture :texture] texture)
                                                                                                                                                     raf-draw!))))
                                                                        :type    (.-TEXTURE_2D gl)
                                                                        :params  {:min-filter ["texParameteri" (.-TEXTURE_2D gl) (.-TEXTURE_MIN_FILTER gl) (.-NEAREST gl)]
                                                                                  :wrap-s     ["texParameteri" (.-TEXTURE_2D gl) (.-TEXTURE_WRAP_S gl) (aget gl "CLAMP_TO_EDGE")]
                                                                                  :wrap-t     ["texParameteri" (.-TEXTURE_2D gl) (.-TEXTURE_WRAP_T gl) (aget gl "REPEAT")]}}}
                                               :attributes {:a_position (webgl/attribute gl program {:name "a_position"
                                                                                                     :size 3
                                                                                                     :data (js/Float32Array. [-0.5, 0.5, 0.5,
                                                                                                                              0.5, 0.5, 0.5,
                                                                                                                              -0.5, -0.5, 0.5,
                                                                                                                              -0.5, -0.5, 0.5,
                                                                                                                              0.5, 0.5, 0.5,
                                                                                                                              0.5, -0.5, 0.5])})
                                                            :a_texcoord (webgl/attribute gl program {:name "a_texcoord"
                                                                                                     :size 2
                                                                                                     :data (js/Float32Array. [-3, -1,
                                                                                                                              2, -1,
                                                                                                                              -3, 4,
                                                                                                                              -3, 4,
                                                                                                                              2, -1,
                                                                                                                              2, 4])})}
                                               :uniforms   {:u_matrix  {:name      "u_matrix"
                                                                        :type      "uniformMatrix4fv"
                                                                        :transpose false
                                                                        :values    (multiply-matrices state)}
                                                            :u_texture {:name   "u_texture"
                                                                        :type   "uniform1i"
                                                                        :values [0]}}
                                               :element    {:draw-type (.-TRIANGLES gl)
                                                            :offset    0
                                                            :count     (* 1 6)}}})))))))

(defn set-texture-param!
  [type val-str]
  (let [{:keys [gl]} @state-atom]
    (swap! state-atom update-in [:objects-to-draw :my-f :textures :f-texture :params type] (fn [p] (c/set-last p (aget gl val-str))))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL Textures"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Textureeee!"]])
   :source          (c/get-filename #'state-atom)           ;; TODO broken
   :tutorial-source "webgl-3d-textures.html"
   :start           (fn []
                      (let [canvas-id (c/ns-str ::x)]
                        [:div {:style {:display        "flex"
                                       :flex-direction "row"}}
                         [webgl-canvas {:height   400
                                        :width    400
                                        :id       canvas-id
                                        :on-mount (fn []
                                                    (do
                                                      (swap! state-atom assoc :gl (webgl/get-context canvas-id))
                                                      (setup!)
                                                      (js/requestAnimationFrame (fn [t] (draw! t @state-atom)))))}]
                         [:form {:style  {:margin-left "30px"}
                                 :action ""}
                          [:p {:style {:margin-bottom "0px"}} "TEXTURE_WRAP_S"]
                          [:input {:type            "radio"
                                   :name            :texture-wrap-s
                                   :default-checked "checked"
                                   :id              :repeat
                                   :on-click        (fn [] (-> (set-texture-param! :wrap-s "REPEAT") raf-draw!))
                                   :style           {:color "white"}}]
                          [:label {:for :repeat} "REPEAT"]
                          [:br]
                          [:input {:type     "radio"
                                   :name     :texture-wrap-s
                                   :id       :clamp-to-edge
                                   :on-click (fn [] (-> (set-texture-param! :wrap-s "CLAMP_TO_EDGE") raf-draw!))
                                   :style    {:color "white"}}]
                          [:label {:for :clamp-to-edge} "CLAMP_TO_EDGE"]
                          [:br]
                          [:input {:type     "radio"
                                   :name     :texture-wrap-s
                                   :id       :mir
                                   :on-click (fn [] (-> (set-texture-param! :wrap-s "MIRRORED_REPEAT") raf-draw!))
                                   :style    {:color "white"}}]
                          [:label {:for :mir} "MIRRORED_REPEAT"]

                          [:p {:style {:margin-bottom "0px"}} "TEXTURE_WRAP_T"]
                          [:input {:type            "radio"
                                   :name            :texture-wrap-t
                                   :default-checked "checked"
                                   :id              :r
                                   :on-click        (fn [] (-> (set-texture-param! :wrap-t "REPEAT") raf-draw!))
                                   :style           {:color "white"}}]
                          [:label {:for :r} "REPEAT"]
                          [:br]
                          [:input {:type     "radio"
                                   :name     :texture-wrap-t
                                   :id       :c
                                   :on-click (fn [] (-> (set-texture-param! :wrap-t "CLAMP_TO_EDGE") raf-draw!))
                                   :style    {:color "white"}}]
                          [:label {:for :c} "CLAMP_TO_EDGE"]
                          [:br]
                          [:input {:type     "radio"
                                   :name     :texture-wrap-t
                                   :id       :m
                                   :on-click (fn [] (-> (set-texture-param! :wrap-t "MIRRORED_REPEAT") raf-draw!))
                                   :style    {:color "white"}}]
                          [:label {:for :m} "MIRRORED_REPEAT"]
                          [:br]]]))})
