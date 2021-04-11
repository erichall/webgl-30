(ns webgl-30.lessons.perspective-3d-0
  (:require [reagent.core :as r]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.core :as c]
            [webgl-30.component :refer [webgl-canvas slider]]))

(def initial-state {:gl   nil
                    :rect {:translation  [140 150 0]
                           :rotation     [0 1 1]
                           :scale        [1 1 1]
                           :fudge-factor 1
                           :width        100
                           :height       30
                           :color        [0.3 0.3 0.3 1]}})
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
  uniform float u_fudgeFactor;

  varying vec4 v_color;

  void main() {
       // Multiply the position by the matrix.
       vec4 position = u_matrix * a_position;

       // Adjust the z to divide by
       float zToDivideBy = 1.0 + position.z * u_fudgeFactor;

       // Divide x and y by z.
       gl_Position = vec4(position.xy / zToDivideBy, position.zw);

       // Pass the color to the fragment shader.
       v_color = a_color;
  }")

(defn multiply-matrices
  [{:keys [rect gl]}]
  (let [{:keys [translation scale rotation]} rect
        projection-matrix (m/projection-3d-matrix (webgl/get-canvas-width gl) (webgl/get-canvas-height gl) 400)
        translation-matrix (m/translation-3d-matrix translation)
        rotation-matrix-x (m/rotation-3d-x-matrix (nth rotation 0))
        rotation-matrix-y (m/rotation-3d-y-matrix (nth rotation 1))
        rotation-matrix-z (m/rotation-3d-z-matrix (nth rotation 2))
        scale-matrix (m/scaling-3d-matrix scale)]
    (-> (m/matrix-multiply-3d projection-matrix translation-matrix)
        (m/matrix-multiply-3d rotation-matrix-x)
        (m/matrix-multiply-3d rotation-matrix-y)
        (m/matrix-multiply-3d rotation-matrix-z)
        (m/matrix-multiply-3d scale-matrix))))

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn draw!
  [timestamp]
  (let [{:keys [rect] :as state} @state-atom]
    (-> (assoc-in state [:objects-to-draw :my-f :uniforms :u_matrix :values] (multiply-matrices state))
        (assoc-in [:objects-to-draw :my-f :uniforms :u_fudgeFactor :values] [(:fudge-factor rect)])
        webgl/draw-scene!)))

(defn slider-component
  [{:keys [on-change label value id min max step display-value] :or {step 1}}]
  [:div {:style {:display        "flex"
                 :flex-direction "row"}}
   [:span {:style {:color        "white"
                   :white-space  "nowrap"
                   :margin-right "10px"}} label]
   [slider {:on-change on-change
            :value     value
            :min       min
            :step      step
            :max       max
            :id        id}]
   [:span {:style {:color        "white"
                   :margin-right "10px"}} (or display-value value)]])

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl rect] :as state}]
                          (let [program (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})]
                            (->
                              (assoc state :clear-depth? true)
                              (assoc :objects-to-draw
                                     {:my-f {:program    program
                                             :features   [(.-CULL_FACE gl) (.-DEPTH_TEST gl)]
                                             :attributes {:a_position (webgl/attribute gl program {:name "a_position"
                                                                                                   :size 3
                                                                                                   :data (js/Float32Array. shapes/f-shape-3d)})
                                                          :a_color    (webgl/attribute gl program {:name      "a_color"
                                                                                                   :size      3
                                                                                                   :type      (.-UNSIGNED_BYTE gl)
                                                                                                   :normalize true
                                                                                                   :data      (js/Uint8Array. shapes/f-shape-3d-color)})}
                                             :uniforms   {:u_resolution  {:name   "u_resolution"
                                                                          :type   "uniform2f"
                                                                          :values [(aget gl "canvas" "width") (aget gl "canvas" "height")]}
                                                          :u_matrix      {:name      "u_matrix"
                                                                          :type      "uniformMatrix4fv"
                                                                          :transpose false
                                                                          :values    (multiply-matrices state)}
                                                          :u_fudgeFactor {:name   "u_fudgeFactor"
                                                                          :type   "uniform1f"
                                                                          :values [1]}}
                                             :element    {:draw-type (.-TRIANGLES gl)
                                                          :offset    0
                                                          :count     (* 16 6)}}})))))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL 3D Perspective"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Perspective - 0"]])
   :source          (c/get-filename #'state-atom)
   :tutorial-source "webgl-3d-perspective.html"
   :start           (fn []
                      (let [canvas-id "perspective"
                            state @state-atom
                            {:keys [translation scale rotation fudge-factor]} (:rect state)]
                        [:div {:style {:display        "flex"
                                       :flex-direction "row"}}
                         [webgl-canvas {:height   400
                                        :width    400
                                        :id       canvas-id
                                        :on-mount (fn []
                                                    (do
                                                      (swap! state-atom assoc :gl (webgl/get-context canvas-id))
                                                      (setup!)
                                                      (js/requestAnimationFrame draw!)))}]
                         [:div {:style {:margin-left "30px"}}
                          ;; trans
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :translation] (assoc translation 0 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (first translation) :id :translate-x :min 0 :max 400 :label "x"}]
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :translation] (assoc translation 1 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth translation 1) :id :translate-y :min 0 :max 400 :label "y"}]
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :translation] (assoc translation 2 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth translation 2) :id :translate-z :min 0 :max 400 :label "z"}]

                          ;; scale
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :scale] (assoc scale 0 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth scale 0) :id :scale-x :min -5 :max 5 :label "x-scale" :step 0.1}]
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :scale] (assoc scale 1 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth scale 1) :id :scale-y :min -5 :max 5 :label "y-scale" :step 0.1}]
                          [slider-component {:on-change (fn [val]
                                                          (swap! state-atom assoc-in [:rect :scale] (assoc scale 2 val))
                                                          (js/requestAnimationFrame draw!))
                                             :value     (nth scale 2) :id :scale-z :min -5 :max 5 :label "z-scale" :step 0.1}]
                          ;; rotation
                          [slider-component {:on-change     (fn [val]
                                                              (swap! state-atom assoc-in [:rect :rotation 0] (m/deg->rad val))
                                                              (js/requestAnimationFrame draw!))
                                             :value         (m/rad->deg (nth rotation 0)) :id :rotate-x :min 0 :max 365 :label "x-rotation"
                                             :display-value (->> (get-in @state-atom [:rect :rotation 0])
                                                                 m/rad->deg
                                                                 (format "~1f"))}]
                          [slider-component {:on-change     (fn [val]
                                                              (swap! state-atom assoc-in [:rect :rotation 1] (m/deg->rad val))
                                                              (js/requestAnimationFrame draw!))
                                             :value         (m/rad->deg (nth rotation 1)) :id :rotate-y :min 0 :max 365 :label "y-rotation"
                                             :display-value (->> (get-in @state-atom [:rect :rotation 1])
                                                                 m/rad->deg
                                                                 (format "~1f"))}]
                          [slider-component {:on-change     (fn [val]
                                                              (swap! state-atom assoc-in [:rect :rotation 2] (m/deg->rad val))
                                                              (js/requestAnimationFrame draw!))
                                             :value         (m/rad->deg (nth rotation 2)) :id :rotate-z :min 0 :max 365 :label "z-rotation"
                                             :display-value (->> (get-in @state-atom [:rect :rotation 2])
                                                                 m/rad->deg
                                                                 (format "~1f"))}]
                          ;; fudge
                          [slider-component {:on-change     (fn [val]
                                                              (swap! state-atom assoc-in [:rect :fudge-factor] val)
                                                              (js/requestAnimationFrame draw!))
                                             :value         fudge-factor :id :fudge :min 0 :max 2 :step 0.001 :label "fudge-factor"
                                             :display-value (->> fudge-factor
                                                                 (format "~3f"))}]
                          ]]))})
