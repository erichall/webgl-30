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

(defn draw!
  [timestamp state]
  (webgl/draw-scene! state))


(defn raf-draw!
  [state]
  (swap! state-atom assoc :raf-id (js/requestAnimationFrame (fn [t] (draw! t state)))))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl] :as state}]
                          (let []
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
                                       {:my-f {:program    (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
                                               :features   [(.-CULL_FACE gl) (.-DEPTH_TEST gl)]
                                               :attributes {:a_position {:name        "a_position"
                                                                         :size        3
                                                                         :type        (.-FLOAT gl)
                                                                         :normalize   false
                                                                         :stride      0
                                                                         :offset      0
                                                                         :buffer-info (webgl/create-buffer gl
                                                                                                           {:data   (js/Float32Array. [-0.5, 0.5, 0.5,
                                                                                                                                       0.5, 0.5, 0.5,
                                                                                                                                       -0.5, -0.5, 0.5,
                                                                                                                                       -0.5, -0.5, 0.5,
                                                                                                                                       0.5, 0.5, 0.5,
                                                                                                                                       0.5, -0.5, 0.5,])
                                                                                                            :usage  (.-STATIC_DRAW gl)
                                                                                                            :target (.-ARRAY-BUFFER gl)})}
                                                            :a_texcoord {:name        "a_texcoord"
                                                                         :size        2
                                                                         :type        (.-FLOAT gl)
                                                                         :normalize   false
                                                                         :stride      0
                                                                         :offset      0
                                                                         :buffer-info (webgl/create-buffer gl
                                                                                                           {:data   (js/Float32Array. [0, 0,
                                                                                                                                       1, 0,
                                                                                                                                       0, 1,
                                                                                                                                       0, 1,
                                                                                                                                       1, 0,
                                                                                                                                       1, 1])
                                                                                                            :usage  (.-STATIC_DRAW gl)
                                                                                                            :target (.-ARRAY-BUFFER gl)})}}
                                               :uniforms   {:u_matrix  {:name      "u_matrix"
                                                                        :type      "uniformMatrix4fv"
                                                                        :transpose false
                                                                        :values    [2 0 0 0
                                                                                    0 2 0 0
                                                                                    0 0 2 0
                                                                                    0 0 0 2]}
                                                            :u_texture {:name   "u_texture"
                                                                        :type   "uniform1i"
                                                                        :values [0]}}
                                               :element    {:draw-type (.-TRIANGLES gl)
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
