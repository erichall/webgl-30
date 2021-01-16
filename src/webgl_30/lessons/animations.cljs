(ns webgl-30.lessons.animations
  (:require [reagent.core :as r]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
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

   // we got this from the vertex shader!
   varying vec4 v_color;

   void main() {
       gl_FragColor = v_color;
   }")

(def vertex-shader
  "attribute vec4 a_position;
   attribute vec4 a_color;

  uniform mat4 u_matrix;
  varying vec4 v_color;

  void main() {
    gl_Position = u_matrix * a_position;

    // this can be passed to the fragment shader
    v_color = a_color;
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

(defn draw!
  [timestamp state]
  (let [{:keys [rect] :as s} state
        now (* timestamp 0.001)
        delta-time (- now (:then rect))
        state (assoc-in s [:rect :rotation 1] (+ (get-in rect [:rotation 1]) (* (:rotation-speed rect) delta-time)))]
    (-> (assoc-in state [:objects-to-draw :my-f :uniforms :u_matrix :values] (multiply-matrices state))
        webgl/draw-scene!)
    (js/requestAnimationFrame (fn [t] (draw! t (assoc-in state [:rect :then] now))))))

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl rect] :as state}]
                          (->
                            (assoc state :clear-depth? true)
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
                                                                                                       {:data   (js/Float32Array. shapes/f-shape-3d)
                                                                                                        :usage  (.-STATIC_DRAW gl)
                                                                                                        :target (.-ARRAY-BUFFER gl)})}
                                                        :a_color    {:name        "a_color"
                                                                     :size        3
                                                                     :type        (.-UNSIGNED_BYTE gl)
                                                                     :normalize   true
                                                                     :stride      0
                                                                     :offset      0
                                                                     :buffer-info (webgl/create-buffer gl
                                                                                                       {:data   (js/Uint8Array. shapes/f-shape-3d-color)
                                                                                                        :usage  (.-STATIC_DRAW gl)
                                                                                                        :target (.-ARRAY-BUFFER gl)})}}
                                           :uniforms   {:u_resolution {:name   "u_resolution"
                                                                       :type   "uniform2f"
                                                                       :values [(aget gl "canvas" "width") (aget gl "canvas" "height")]}
                                                        :u_matrix     {:name      "u_matrix"
                                                                       :type      "uniformMatrix4fv"
                                                                       :transpose false
                                                                       :values    (multiply-matrices state)}}
                                           :element    {:draw-type (.-TRIANGLES gl)
                                                        :offset    0
                                                        :count     (* 16 6)}}}))))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - Orthographic 3D"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Matrix"]])
   :source          "https://github.com/erichall/webgl-30/blob/master/src/webgl_30/lessons/orthographic_3d_0.cljs"
   :tutorial-source "https://webglfundamentals.org/webgl/lessons/webgl-3d-orthographic.html"
   :start           (fn []
                      (let [canvas-id "translation"
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
