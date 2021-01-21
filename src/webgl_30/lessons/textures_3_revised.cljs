(ns webgl-30.lessons.textures-3-revised
  (:require [reagent.core :as r]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl                  nil
                    :raf-id              nil
                    :running?            false
                    :allocate-FB-texture true
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

(defn draw!
  [timestamp {:keys [gl allocate-FB-texture objects-to-draw settings rect] :as state}]

  (println "ddude?"
           (webgl/framebuffer-complete? gl)
           )
  (when (webgl/framebuffer-complete? gl)

    (when (and allocate-FB-texture (webgl/framebuffer-complete? gl))
      (let [{:keys [texture-obj target level internalformat format type pixels] :as s} (get-in objects-to-draw [:my-f :textures :fb-texture])]
        (webgl/pixels->object gl texture-obj target level internalformat 100 100 0 format type pixels) ;; assign the img to a texture obj
        (swap! state-atom assoc :allocate-FB-texture false)
        ))

    (webgl/bind-framebuffer! gl (get-in objects-to-draw [:my-f :framebuffers :framebuffer]))
    (webgl/set-gl-viewport! gl 100 100)
    (webgl/clear-color gl 0 0 0 1)
    (webgl/clear gl)


    (let [{:keys [program attributes features]} (get-in objects-to-draw [:my-f])]
      (webgl/use-program! gl program)
      (webgl/enable-features! gl features)
      (webgl/set-attributes! gl program (vals attributes)))


    (let [aspect (webgl/get-aspect gl)
          z-near 1
          z-far 2000
          x-spacing 1.2
          y-spacing 0.7
          sec (* timestamp 0.001)
          projection-matrix (m/perspective-3d-matrix (:field-of-view-radians rect) aspect z-near z-far)
          program (get-in objects-to-draw [:my-f :program])]

      (doseq [s settings]
        (let [z (+ (- 5) (:z s))
              r (* (Math/abs z) (Math/sin (* (:field-of-view-radians rect) 0.5)))
              x (* r (Math/sin (* sec 0.2)))
              y (* r 0.5 (Math/cos (* sec 0.2)))
              r2 (+ (* r 0.2) 1)
              {:keys [texture-obj params-i]} (get-in objects-to-draw [:textures :texture])
              params-i (assoc-in params-i [:min-filter :param] (:filter s))
              translation-matrix (m/translation-3d-matrix [(+ x (* (:x s) x-spacing r2)) (+ y (* (:y s) y-spacing r2)) z])]

          (webgl/bind-texture! gl (.-TEXTURE_2D gl) texture-obj)
          (doseq [p (vals params-i)]
            (webgl/set-tex-parameteri! gl p))

          (webgl/set-uniform! gl program {:name      "u_matrix"
                                          :type      "uniformMatrix4fv"
                                          :transpose false
                                          :values    (m/matrix-multiply-3d translation-matrix projection-matrix)})

          (webgl/set-uniform! gl program {:name   "u_texture"
                                          :type   "uniform1i"
                                          :values [0]})

          (webgl/draw-arrays! gl {:draw-type (.-TRIANGLES gl)
                                  :offset    0
                                  :count     (* 1 6)})))

      (webgl/bind-framebuffer! gl nil)
      (webgl/set-gl-viewport! gl)
      (webgl/bind-texture! gl (.-TEXTURE_2D gl) (get-in objects-to-draw [:my-f :textures :fb-texture :texture-obj]))

      (webgl/set-uniform! gl program {:name      "u_matrix"
                                      :type      "uniformMatrix4fv"
                                      :transpose false
                                      :values    [2 0 0 0
                                                  0 2 0 0
                                                  0 0 1 0
                                                  0 0 0 1]})

      (webgl/clear gl)
      (webgl/draw-arrays! gl {:draw-type (.-TRIANGLES gl)
                              :offset    0
                              :count     (* 1 6)})))

  (swap! state-atom assoc :raf-id (js/requestAnimationFrame (fn [t] (draw! t @state-atom))))
  )


(defn raf-draw!
  [state]
  (swap! state-atom assoc :raf-id (js/requestAnimationFrame (fn [t] (draw! t state)))))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl] :as state}]
                          (let [program (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
                                fb-texture (webgl/texture-pixels gl {:pixels         (js/Uint8Array. [0 0 255 255])
                                                                     :width          100
                                                                     :height         100
                                                                     :border         0
                                                                     :dont-allocate? true
                                                                     :params-i       {:clamp-s    {:p-name (.-TEXTURE_WRAP_S gl)
                                                                                                   :param  (.-CLAMP_TO_EDGE gl)}
                                                                                      :clamp-t    {:p-name (.-TEXTURE_WRAP_T gl)
                                                                                                   :param  (.-CLAMP_TO_EDGE gl)}
                                                                                      :min-filter {:p-name (.-TEXTURE_MIN_FILTER gl)
                                                                                                   :param  (.-NEAREST gl)}
                                                                                      :mag-filter {:p-name (.-TEXTURE_MAG_FILTER gl)
                                                                                                   :param  (.-NEAREST gl)}}})
                                _ (webgl/initialize-texture-from-img
                                    "images/mip-low-res-example.png"
                                    (fn [img]
                                      (swap! state-atom assoc-in [:objects-to-draw :my-f :textures :texture]
                                             (webgl/texture-img gl {:pixels   img
                                                                    :mipmap?  true
                                                                    :params-i {:clamp-s    {:p-name (.-TEXTURE_WRAP_S gl)
                                                                                            :param  (.-CLAMP_TO_EDGE gl)}
                                                                               :clamp-t    {:p-name (.-TEXTURE_WRAP_T gl)
                                                                                            :param  (.-CLAMP_TO_EDGE gl)}
                                                                               :min-filter {:p-name (.-TEXTURE_MIN_FILTER gl)
                                                                                            :param  (.-NEAREST gl)}
                                                                               :mag-filter {:p-name (.-TEXTURE_MAG_FILTER gl)
                                                                                            :param  (.-LINEAR gl)}}}))

                                      (js/requestAnimationFrame (fn [t] (draw! t @state-atom)))
                                      ))]
                            (-> (assoc state :clear-depth? true)
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
                                               :textures     {:fb-texture fb-texture
                                                              :texture    nil
                                                              }
                                               :framebuffers {:framebuffer (webgl/framebuffer gl {:texture (-> fb-texture :texture-obj)})}
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
                        "Can we make this work ?!"]])
   :source          (c/get-filename #'state-atom)           ;; TODO broken
   :tutorial-source "webgl-3d-textures.html"
   :start           (fn []
                      (let [canvas-id (c/ns-str ::x)]
                        [:div {:style {:display        "flex"
                                       :flex-direction "row"}}
                         [webgl-canvas {:height     400
                                        :width      400
                                        :id         canvas-id
                                        :on-unmount (fn []
                                                      (js/cancelAnimationFrame (:raf-id @state-atom))
                                                      )
                                        :on-mount   (fn []
                                                      (do
                                                        (swap! state-atom assoc :gl (webgl/get-context canvas-id))
                                                        (setup!)
                                                        ;(js/requestAnimationFrame (fn [t] (draw! t @state-atom)))
                                                        ))}]
                         ]))})
