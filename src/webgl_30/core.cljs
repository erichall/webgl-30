(ns webgl-30.core
  (:require [webgl-30.component :refer [slider slider-component]]
            [reagent.core :as r]
            [reagent.dom :as rd]))

(defonce state-atom (atom nil))
(def initial-state
  {:x         0
   :y         0
   :canvas-id "main-canvas"
   :canvas    nil
   :gl        nil})

(when (nil? @state-atom)
  (reset! state-atom initial-state))

(def shaders
  {
   :vs "
   attribute vec2 a_position;
   uniform vec2 u_resolution;

    void main() {
      vec2 zeroToOne = a_position / u_resolution;
      vec2 zeroToTwo = zeroToOne * 2.0;
      vec2 clipSpace = zeroToTwo - 1.0;

      gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    }
   "
   :fs "precision mediump float;
     uniform vec4 u_color;
     void main() {
       gl_FragColor = u_color;
     }
   "
   })

(defn create-shader
  [gl type source]
  (let [shader (.createShader gl type)]
    (.shaderSource gl shader source)
    (.compileShader gl shader)
    (let [success (.getShaderParameter gl shader (.-COMPILE_STATUS gl))]
      (if success
        shader
        (do
          (js/console.log (.getShaderInfoLog gl shader))
          (.deleteShader gl shader))))))

(defn create-program
  [gl vertex-shader fragment-shader]
  (let [program (.createProgram gl)]
    (.attachShader gl program vertex-shader)
    (.attachShader gl program fragment-shader)
    (.linkProgram gl program)
    (let [success (.getProgramParameter gl program (.-LINK_STATUS gl))]
      (if success
        program
        (do
          (js/console.log (.getProgramInfoLog gl program))
          (.deleteProgram gl program))))))

(defn resize-canvas-to-display-size
  [gl]
  (let [canvas (.-canvas gl)
        css-to-real-pixels (or (.-devicePixelRatio js/window) 1)
        d-width (Math/floor (* (.-clientWidth canvas) css-to-real-pixels))
        d-height (Math/floor (* (.-clientHeight canvas) css-to-real-pixels))]
    (when-not (or (= (.-width canvas) d-width)
                  (= (.-height canvas) d-height))
      (set! (.-height canvas) d-height)
      (set! (.-width canvas) d-width))))

(defn set-gl-viewport!
  [gl]
  (let [width (aget gl "canvas" "width")
        height (aget gl "canvas" "height")]
    (.viewport gl 0 0 width height)))

(defn clear-canvas!
  [gl]
  (.clearColor gl 0 0 0 0)
  (.clear gl (.-COLOR_BUFFER_BIT gl)))

(defn bind-buffer
  "Create and initialize a WebGL buffer that can store data.
    bindBuffer binds the gl object to the specified buffer.
    bufferData copies the `src-data` to the GPU.
    "
  [gl buffer-type]
  (let [buffer (.createBuffer gl)]
    (.bindBuffer gl buffer-type buffer)
    buffer))

(defn buffer-data
  "bufferData copies the `src-data` to the GPU."
  [gl {:keys [target src-data usage]}]
  (.bufferData gl target src-data usage))

(defn set-rectangle!
  "Create a rectangle by using two triangles"
  [gl x y width height]
  (let [x1 x
        x2 (+ x width)
        y1 y
        y2 (+ y height)]
    (buffer-data gl {:target   (.-ARRAY-BUFFER gl)
                     :src-data (js/Float32Array. [x1, y1,
                                                  x2, y1,
                                                  x1, y2,
                                                  x1, y2,
                                                  x2, y1,
                                                  x2, y2])
                     :usage    (.-STATIC_DRAW gl)})))

(defn set-triangle!
  [gl]
  (.bufferData gl (.-ARRAY_BUFFER gl) (js/Float32Array. [0 -100
                                                         150 125
                                                         -175 100
                                                         ]) (.-STATIC_DRAW gl)))

(defn random-int
  [range]
  (Math/floor (* range (Math/random))))

(defn initialize-gl!
  "Create a WebGL Program with a Vertex shader and a Fragment shader."
  [gl {:keys [vs fs]}]
  (let [vs (create-shader gl (.-VERTEX_SHADER gl) vs)
        fs (create-shader gl (.-FRAGMENT_SHADER gl) fs)]
    (create-program gl vs fs)))

(defn draw-scene!
  [gl program attributes]
  (let [uniform-location (.getUniformLocation gl program "u_resolution")
        buffer (bind-buffer gl (.-ARRAY_BUFFER gl))]

    (resize-canvas-to-display-size gl)
    (set-gl-viewport! gl)
    (clear-canvas! gl)

    ;; the program contains our two shaders, vertex and fragment shader. tell WebGL that we want to run them!
    (.useProgram gl program)

    ;; set the resolution
    (.uniform2f gl uniform-location (aget gl "canvas" "width") (aget gl "canvas" "height"))

    (doseq [{:keys [location size type normalize stride offset]} attributes]
      ;; Turn the variablel on inside our GSLS VS program above.
      (.enableVertexAttribArray gl location)
      ;; Describe how to take the data from our buffer and give it to our shader.
      (.vertexAttribPointer gl location size type normalize stride offset))

    (let [uniform-color-location (.getUniformLocation gl program "u_color")]
      (set-rectangle! gl 0 0 200 50)
      (.uniform4f gl uniform-color-location (Math/random) (Math/random) (Math/random) 1)
      (.drawArrays gl (.-TRIANGLES gl) 0 6)
      )
    )
  )

(defn handle-event!
  [name data]
  (condp = name
    :x-change (swap! state-atom assoc :x data)
    :y-change (swap! state-atom assoc :y data)

    :canvas-ref (swap! state-atom (fn [state]
                                    (-> (assoc state :canvas data)
                                        (assoc :gl (.getContext data "webgl")))))
    :canvas-did-mount (let [gl (:gl @state-atom)
                            program (initialize-gl! gl shaders)
                            position-attribute-location (.getAttribLocation gl program "a_position")]

                        ;(let [primitive-type (.-TRIANGLES gl)
                        ;      offset 0
                        ;      count 6
                        ;      ]
                        ;  (.drawArrays gl primitive-type offset count))

                        (draw-scene! gl program [{:location  position-attribute-location
                                                  :size      2
                                                  :type      (.-FLOAT gl)
                                                  :normalize false
                                                  :stride    0
                                                  :offset    0}]))

    nil))

(defn webgl-canvas
  [{:keys [state trigger-event]}]
  (r/create-class
    {:display-name        "webgl-canvas"
     :reagent-render      (fn [] [:canvas {:ref    (fn [el]
                                                     ;; hot reloading seems to give is nil here?!?!
                                                     (when el
                                                       (trigger-event :canvas-ref el)))
                                           :width  "400px"
                                           :height "400px"
                                           :id     (:canvas-id state)}])
     :component-did-mount (fn [] (trigger-event :canvas-did-mount))}))

(defn app
  [{:keys [state trigger-event]}]
  [:div
   [slider-component {:trigger-event trigger-event
                      :state         state}]
   [webgl-canvas {:trigger-event trigger-event :state state}]])

(defn render-component
  [state]
  (rd/render [app {:state         state
                   :trigger-event handle-event!}]
             (. js/document (getElementById "app"))))

(defn init! []
  (render-component @state-atom))
(defn reload! []
  (render-component @state-atom))

