(ns webgl-30.lessons.fundamentals-2
  (:require [webgl-30.webgl :as webgl]
            [webgl-30.math :as math]
            [webgl-30.component :refer [webgl-canvas]]))

(def initial-state {:gl nil})
(defonce state-atom (atom nil))
(when (nil? @state-atom)
  (reset! state-atom initial-state))

(def fragment-shader
  "precision mediump float;
   uniform vec4 u_color;
   void main() {
       gl_FragColor = u_color;
   }")

(def vertex-shader
  "attribute vec2 a_position;

  uniform vec2 u_resolution;

  void main() {
       // convert the position from pixels to 0.0 to 1.0
       vec2 zeroToOne = a_position / u_resolution;

       // convert from 0->1 to 0->2
       vec2 zeroToTwo = zeroToOne * 2.0;

       // convert from 0->2 to -1->+1 (clip space)
       vec2 clipSpace = zeroToTwo - 1.0;

       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1); // * vec(1, -1) flips y so it's top-left corner.
  }")

(defn get-rectangle
  [{:keys [x y width height]}]
  (let [x1 x
        x2 (+ x width)
        y1 y
        y2 (+ y height)]
    [x1 y1
     x2 y1
     x1 y2
     x1 y2
     x2 y1
     x2 y2]))

(defn draw!
  [timestamp]

  (webgl/draw-scene! @state-atom)

  (let [{:keys [gl program attributes] :as state} @state-atom
        rects (doall (mapv (fn [_]
                             {:src-data  (js/Float32Array. (get-rectangle {:x      (math/random-int 300)
                                                                           :y      (math/random-int 300)
                                                                           :width  (math/random-int 300)
                                                                           :height (math/random-int 300)}))
                              :target    (.-ARRAY_BUFFER gl)
                              :usage     (.-STATIC_DRAW gl)
                              :draw-type (.-TRIANGLES gl)
                              :offset    0
                              :count     6}
                             ) (range 10)))
        ]
    ;(doseq [r rects]
    ;  (webgl/buffer-data gl r)
    ;(webgl/set-uniform gl program {:name   "u_color"
    ;                               :type   "uniform4f"
    ;                               :values [(js/Math.random)
    ;                                        (js/Math.random)
    ;                                        (js/Math.random)
    ;                                        1]})
    ;(webgl/draw-arrays gl {:draw-type (.-TRIANGLES gl)
    ;                       :offset    0
    ;                       :count     6})

    ;)
    )
  )

(defn setup!
  []
  (-> (swap! state-atom (fn [{:keys [gl] :as state}]
                          ;; AT INIT TIME
                          ;;  create shaders, program and locations
                          ;;  create buffers and call bufferData to upload vertex data
                          ;; AT RENDER TIME
                          ;;  clear stuff
                          ;;  use object program
                          ;;  for each thing to draw, setup attributes ;; WHAT DOES SETUP attributes mean??
                          ;;        and for each attribute, call bindBuffer, vertexAttribPointer, enableVertexAttribArray
                          ;;  for each thing to draw, setup uniforms
                          ;;        call gl.uniformXXX for each thing
                          ;;  then call drawArrays for each thing, or with an arg to all of them
                          (assoc state :objects-to-draw (mapv (fn [_]
                                                                (let [program (webgl/link-shaders! gl {:fs fragment-shader :vs vertex-shader})
                                                                      buffer-info (webgl/create-buffer gl
                                                                                                       {:data   (js/Float32Array. (get-rectangle {:x      (math/random-int 300)
                                                                                                                                                  :y      (math/random-int 300)
                                                                                                                                                  :width  (math/random-int 300)
                                                                                                                                                  :height (math/random-int 300)}))
                                                                                                        :usage  (.-STATIC_DRAW gl)
                                                                                                        :target (.-ARRAY-BUFFER gl)})]
                                                                  {:program    program
                                                                   :attributes [{:location    (.getAttribLocation gl program "a_position")
                                                                                 :size        2
                                                                                 :type        (.-FLOAT gl)
                                                                                 :normalize   false
                                                                                 :stride      0
                                                                                 :offset      0
                                                                                 :buffer-info buffer-info}]
                                                                   :uniforms   [{:location (webgl/get-uniform-location gl program "u_resolution")
                                                                                 :type     "uniform2f"
                                                                                 :values   [(aget gl "canvas" "width") (aget gl "canvas" "height")]}
                                                                                {:location (webgl/get-uniform-location gl program "u_color")
                                                                                 :type     "uniform4f"
                                                                                 :values   [(js/Math.random)
                                                                                            (js/Math.random)
                                                                                            (js/Math.random)
                                                                                            1]}]
                                                                   :element    {:draw-type (.-TRIANGLES gl)
                                                                                :offset    0
                                                                                :count     6}})) (range 10)))))))

(def ^:export lesson
  {:title           (fn []
                      [:div
                       [:h1 {:style {:font-family "monospace"}}
                        "Lesson - WebGL Fundamentals"]
                       [:h4 {:style {:font-family "monospace"}}
                        "Lots of random boxes"]])
   :source          "https://github.com/erichall/webgl-30/blob/master/src/webgl_30/lessons/fundamentals_1.cljs"
   :tutorial-source "https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html"
   :start           (fn []
                      (let [canvas-id "fundamentals"]
                        [webgl-canvas {:height   400
                                       :width    400
                                       :id       canvas-id
                                       :on-mount (fn []
                                                   (do
                                                     (swap! state-atom assoc :gl (webgl/get-context canvas-id))
                                                     (setup!)
                                                     (js/requestAnimationFrame draw!)))}]))})