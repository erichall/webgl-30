(ns webgl-30.lessons.cameras-1
  (:require [reagent.core :as r]
            [webgl-30.math :as m]
            [webgl-30.webgl :as webgl]
            [webgl-30.shapes :as shapes]
            [webgl-30.component :refer [webgl-canvas unit-circle]]))

(def initial-state {:gl   nil
                    :rect {:translation      [-150 0 -360]
                           :rotation         (mapv m/deg->rad [190 40 320])
                           :camera-angle-rad 0
                           :scale            [1 1 1]
                           :field-of-view    (m/deg->rad 60)
                           :width            100
                           :height           30
                           :color            [0.3 0.3 0.3 1]}})
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
  (let [{:keys [translation scale rotation fudge-factor field-of-view]} rect
        aspect (webgl/get-aspect gl)
        z-near 1
        z-far 2000
        perspective-matrix (m/perspective-3d-matrix field-of-view aspect z-near z-far)
        translation-matrix (m/translation-3d-matrix translation)
        rotation-matrix-x (m/rotation-3d-x-matrix (nth rotation 0))
        rotation-matrix-y (m/rotation-3d-y-matrix (nth rotation 1))
        rotation-matrix-z (m/rotation-3d-z-matrix (nth rotation 2))
        scale-matrix (m/scaling-3d-matrix scale)]
    (-> (m/matrix-multiply-3d perspective-matrix translation-matrix)
        (m/matrix-multiply-3d rotation-matrix-x)
        (m/matrix-multiply-3d rotation-matrix-y)
        (m/matrix-multiply-3d rotation-matrix-z)
        (m/matrix-multiply-3d scale-matrix))))

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn draw!
  [timestamp]
  (let [{:keys [gl rect clear-depth?] :as state} @state-atom
        {:keys [field-of-view camera-angle-rad]} rect
        n-fs 5
        radius 200
        aspect (webgl/get-aspect gl)
        z-near 1
        z-far 2000
        f-position [radius 0 0]
        projection-matrix (m/perspective-3d-matrix field-of-view aspect z-near z-far)
        camera-matrix (-> (m/rotation-3d-y-matrix camera-angle-rad)
                          (m/matrix-multiply-3d (m/translation-3d-matrix [0 0 (* radius 1.5)])))
        camera-position [(nth camera-matrix 12) (nth camera-matrix 13) (nth camera-matrix 14)]
        up [0 1 0]
        look-at-matrix (m/look-at-matrix camera-position f-position up)
        view-matrix (m/invert-4x4 look-at-matrix)
        view-projection-matrix (m/matrix-multiply-3d projection-matrix view-matrix)
        {:keys [program features attributes uniforms element]} (get-in state [:objects-to-draw :my-f])]

    (-> (webgl/prepare-canvas! gl clear-depth?)
        (webgl/use-program! program)
        (webgl/enable-features! features)
        (webgl/set-attributes! program (vals attributes)))


    (doseq [ii (range n-fs)
            :let [angle (/ (* ii Math/PI 2) n-fs)
                  x (* radius (Math/cos angle))
                  y (* radius (Math/sin angle))
                  translation-matrix (m/translation-3d-matrix [x 0 y])]]

      (->> (assoc-in uniforms [:u_matrix :values] (m/matrix-multiply-3d view-projection-matrix translation-matrix))
           vals
           (webgl/set-uniforms! gl program))

      (webgl/draw-arrays! gl element)
      )
    ))

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
                                           :uniforms   {:u_resolution  {:name   "u_resolution"
                                                                        :type   "uniform2f"
                                                                        :values [(aget gl "canvas" "width") (aget gl "canvas" "height")]}
                                                        :u_matrix      {:name      "u_matrix"
                                                                        :type      "uniformMatrix4fv"
                                                                        :transpose false
                                                                        :values    (multiply-matrices state)}
                                                        :u_fudgeFactor {:name   "u_fudgeFactor"
                                                                        :type   "uniform1f"
                                                                        :values [1]}
                                                        }
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
   :source          "https://github.com/erichall/webgl-30/blob/master/src/webgl_30/lessons/perspective_3d_0.cljs"
   :tutorial-source "https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html"
   :start           (fn []
                      (let [canvas-id "translation"
                            state @state-atom
                            {:keys [translation scale rotation field-of-view]} (:rect state)]
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

                          [unit-circle {:height    300
                                        :width     300
                                        :radius    120
                                        :on-change (fn [{:keys [angle-rad]}]
                                                     (swap! state-atom assoc-in [:rect :camera-angle-rad] angle-rad)
                                                     (js/requestAnimationFrame draw!))}]
                          ]]))})
