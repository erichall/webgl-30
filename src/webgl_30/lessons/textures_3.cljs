(ns webgl-30.lessons.textures-3
  (:require [reagent.core :as r]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl                  nil
                    :running?            false
                    :allocate-FB-texture false
                    :rect                {:field-of-view-radians (m/deg->rad 60)}})
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

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))


(defn draw!
  [timestamp {:keys [gl viewport-height viewport-width] :as state}]

  (when (:allocate-FB-texture state)
    (swap! state-atom (fn [state] (-> (assoc state :allocate-FB-texture false))))

    ;(let [t (get-in state [:objects-to-draw :my-f :textures :fb-texture])]
    ;  (webgl/allocate-texture gl (.-TEXTURE_2D gl) (:texture t) (.-TEXTURE_2D gl) 0 (.-RGBA gl) viewport-width viewport-height 0 (.-RGBA gl) (.-UNSIGNED_BYTE gl) nil)))
    )

  (webgl/bind-framebuffer! gl (get-in state [:objects-to-draw :my-f :framebuffers :fb :framebuffer]))

  (webgl/draw-scene! state)

  (let [{:keys [gl settings]} @state-atom
        {:keys [field-of-view-radians]} (:rect state)
        x-spacing 1.2
        y-spacing 0.7
        sec (* 0.001 timestamp)
        aspect (webgl/get-aspect gl)
        z-near 1
        z-far 2000
        projection-matrix (m/perspective-3d-matrix field-of-view-radians aspect z-near z-far)]
    (loop [settings settings]
      (when-not (empty? settings)
        (let [setting (first settings)
              state @state-atom
              z (+ (- 5) (:z setting))
              r (* (Math/abs z) (Math/sin (* field-of-view-radians 0.5)))
              x (* r (Math/sin (* sec 0.2)))
              y (* r 0.5 (Math/cos (* sec 0.2)))
              r2 (+ (* r 0.2) 1)
              {:keys [params type]} (get-in state [:objects-to-draw :my-f :textures :fb-texture])
              min-fil-params (:min-fil params)
              translation-matrix (m/translation-3d-matrix [(+ x (* (:x setting) x-spacing r2)) (+ y (* (:y setting) y-spacing r2)) z])
              matrix (m/matrix-multiply-3d projection-matrix translation-matrix)]

          (webgl/set-texture-params! gl (get-in state [:objects-to-draw :my-f :textures :f-texture :texture]) type (vals (assoc params :min-fil (c/set-last min-fil-params (:filter setting)))))

          (swap! state-atom assoc-in [:objects-to-draw :my-f :uniforms :u_matrix :values] matrix)
          (webgl/set-uniforms! (:gl @state-atom) @state-atom)
          (webgl/draw-arrays! (:gl @state-atom) (get-in @state-atom [:objects-to-draw :my-f :element]))

          (recur (rest settings)))))

    (webgl/bind-framebuffer! gl nil)
    (webgl/set-gl-viewport! gl)

    (let [{:keys [texture type]} (get-in @state-atom [:objects-to-draw :my-f :textures :fb-texture])
          program (get-in @state-atom [:objects-to-draw :my-f :program])]
      (webgl/bind-texture! gl type texture)
      (swap! state-atom assoc-in [:objects-to-draw :my-f :uniforms :u_matrix :values] [2, 0, 0, 0,
                                                                                       0, 2, 0, 0,
                                                                                       0, 0, 1, 0,
                                                                                       0, 0, 0, 1])

      (webgl/set-uniforms! gl program [(get-in @state-atom [:objects-to-draw :my-f :uniforms :u_matrix])])

      (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
      (webgl/draw-arrays! (:gl @state-atom) (get-in @state-atom [:objects-to-draw :my-f :element]))
      )

    (js/requestAnimationFrame (fn [t] (draw! t @state-atom)))
    ))


(defn raf-draw!
  [state]
  (js/requestAnimationFrame (fn [t] (draw! t state))))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl] :as state}]
                          (let [fb-texture-params {:wrap-s  ["texParameteri" (.-TEXTURE_2D gl) (.-TEXTURE_WRAP_S gl) (.-CLAMP_TO_EDGE gl)]
                                                   :wrap-t  ["texParameteri" (.-TEXTURE_2D gl) (.-TEXTURE_WRAP_T gl) (.-CLAMP_TO_EDGE gl)]
                                                   :min-fil ["texParameteri" (.-TEXTURE_2D gl) (.-TEXTURE_MIN_FILTER gl) (.-NEAREST gl)]
                                                   :mag-fil ["texParameteri" (.-TEXTURE_2D gl) (.-TEXTURE_MAG_FILTER gl) (.-NEAREST gl)]}
                                framebuffer-width (/ (webgl/get-canvas-width gl) 4)
                                framebuffer-height (/ (webgl/get-canvas-height gl) 4)
                                fb-texture (webgl/create-a-texture gl)
                                framebuffer (webgl/create-framebuffer gl)
                                _ (-> (webgl/set-texture-params! gl fb-texture (.-TEXTURE_2D gl) (vals fb-texture-params))
                                      (webgl/attach-texture-to-framebuffer framebuffer (.-FRAMEBUFFER gl) (.-COLOR_ATTACHMENT0 gl) (.-TEXTURE_2D gl) fb-texture 0))
                                program (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
                                ]
                            (-> (assoc state :clear-depth? true)
                                (assoc :clear-color [0 0 0 1])
                                (assoc :viewport-height framebuffer-height)
                                (assoc :viewport-width framebuffer-width)
                                (assoc :settings [
                                                  {:x -1 :y -3 :z -30 :filter (.-NEAREST gl)}
                                                  {:x 0 :y -3 :z -30 :filter (.-LINEAR gl)}
                                                  {:x 1 :y -3 :z -30 :filter (.-NEAREST_MIPMAP_LINEAR gl)}
                                                  {:x -1 :y -1 :z -10 :filter (.-NEAREST gl)}
                                                  {:x 0 :y -1 :z -10 :filter (.-LINEAR gl)}
                                                  {:x 1 :y -1 :z -10 :filter (.-NEAREST_MIPMAP_LINEAR gl)}
                                                  {:x -1 :y 1 :z 0 :filter (.-NEAREST gl)}
                                                  {:x 0 :y 1 :z 0 :filter (.-LINEAR gl)}
                                                  {:x 1 :y 1 :z 0 :filter (.-LINEAR_MIPMAP_NEAREST gl)}
                                                  ])
                                (assoc :objects-to-draw
                                       {:my-f {:program      program
                                               :features     [(.-CULL_FACE gl) (.-DEPTH_TEST gl)]
                                               ;; first create a blue placeholder texture, then load the img async
                                               :textures     {:fb-texture {:texture fb-texture
                                                                           :params  fb-texture-params
                                                                           :type    (.-TEXTURE_2D gl)}
                                                              :f-texture  {:texture (->>
                                                                                      [(.-TEXTURE_2D gl) 0 (.-RGBA gl) 1 1 0 (.-RGBA gl) (.-UNSIGNED_BYTE gl) (js/Uint8Array. [0 0 255 255])]
                                                                                      (webgl/create-texture! gl)
                                                                                      (webgl/create-texture-from-img gl
                                                                                                                     "images/mip-low-res-example.png"
                                                                                                                     (fn [texture]
                                                                                                                       (swap! state-atom (fn [state] (-> (assoc state :allocate-FB-texture true)
                                                                                                                                                         (assoc-in [:objects-to-draw :my-f :textures :f-texture :texture] texture))))
                                                                                                                       (raf-draw! @state-atom)
                                                                                                                       )))
                                                                           :type    (.-TEXTURE_2D gl)}}
                                               :framebuffers {:fb {:framebuffer framebuffer}}
                                               :attributes   {:a_position (webgl/attribute gl program {:name "a_position"
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
                                               :uniforms     {:u_matrix  {:name      "u_matrix"
                                                                          :type      "uniformMatrix4fv"
                                                                          :transpose false
                                                                          :values    [2 0 0 0
                                                                                      0 2 0 0
                                                                                      0 0 2 0
                                                                                      0 0 0 2]}
                                                              :u_texture {:name   "u_texture"
                                                                          :type   "uniform1i"
                                                                          :values [0]}}
                                               :element      {:draw-type (.-TRIANGLES gl)
                                                              :offset    0
                                                              :count     (* 1 6)}}})))))))

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
                                                      ;(js/requestAnimationFrame (fn [t] (draw! t @state-atom)))
                                                      ))}]
                         ]))})
