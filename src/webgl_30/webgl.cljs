(ns webgl-30.webgl)

(defn not-nil?
  [x]
  (not (nil? x)))

(defn power-of-two?
  [x]
  (and (= (bit-and x (- x)) x) (> x 0)))

(defn get-aspect
  [gl]
  {:post [(float? %)]}
  (let [w (aget gl "canvas" "clientWidth")
        h (aget gl "canvas" "clientHeight")
        a (/ w h)]
    (if (js/isNaN a)
      1
      a)))

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

(defn resize-canvas-to-display-size?
  [gl]
  (let [canvas (.-canvas gl)
        css-to-real-pixels 1
        d-width (Math/floor (* (.-clientWidth canvas) css-to-real-pixels))
        d-height (Math/floor (* (.-clientHeight canvas) css-to-real-pixels))]
    (not (or (= (.-width canvas) d-width)
             (= (.-height canvas) d-height)))))

(defn resize-canvas-to-display-size
  [gl]
  (let [canvas (.-canvas gl)
        css-to-real-pixels 1                                ;(or (.-devicePixelRatio js/window) 1)
        d-width (Math/floor (* (.-clientWidth canvas) css-to-real-pixels))
        d-height (Math/floor (* (.-clientHeight canvas) css-to-real-pixels))]
    (when-not (or (= (.-width canvas) d-width)
                  (= (.-height canvas) d-height))
      (set! (.-height canvas) d-height)
      (set! (.-width canvas) d-width))
    gl))

(defn get-canvas-height
  [gl]
  (aget gl "canvas" "height"))

(defn get-canvas-width
  [gl]
  (aget gl "canvas" "width"))



(defn set-gl-viewport!
  ([gl]
   (let [width (get-canvas-width gl)
         height (get-canvas-height gl)]
     (.viewport gl 0 0 width height)
     gl))
  ([gl width height]
   (if (and (some? width) (some? height))
     (do (.viewport gl 0 0 width height) gl)
     (set-gl-viewport! gl))))

(defn clear-canvas!
  ([gl]
   (clear-canvas! gl false [0 0 0 0]))
  ([gl clear-depth?] (clear-canvas! gl clear-depth? [0 0 0 0]))
  ([gl clear-depth? color]
   (apply js-invoke gl "clearColor" (or color [0 0 0 0]))
   (if clear-depth?
     (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))
     (.clear gl (.-COLOR_BUFFER_BIT gl)))
   gl))

(defn bind-buffer
  [^js gl buffer target]
  (.bindBuffer gl target buffer)
  gl)

(defn buffer-data
  "bufferData copies the `src-data` to the GPU."
  [^js gl {:keys [target src-data usage]}]
  {:pre  [(some? gl)]
   :post [(= gl %)]}
  (.bufferData gl target src-data usage)
  gl)

(defn create-buffer
  [gl {:keys [target data usage]}]
  (let [buffer (.createBuffer gl)]
    (-> (bind-buffer gl buffer target)
        (buffer-data {:target   target
                      :src-data data
                      :usage    usage}))
    {:buffer buffer
     :target target
     :data   data
     :usage  usage}))

(defn set-attribute!
  [gl program {:keys [name size type normalize stride offset buffer-info]}]
  (let [location (.getAttribLocation gl program name)]

    (bind-buffer gl (:buffer buffer-info) (:target buffer-info))

    ;; Describe how to take the data from our buffer and give it to our shader.
    (.vertexAttribPointer gl location size type normalize stride offset)

    ;; Turn the variable on inside our GLSL VS program above.
    (.enableVertexAttribArray gl location)
    gl))

(defn set-attributes!
  [gl program attributes]
  (doseq [attribute attributes]
    (set-attribute! gl program attribute))
  gl)

(defn get-uniform-location
  [gl program name]
  (.getUniformLocation gl program name))

(defn set-uniform!
  [^js gl program {:keys [type values transpose name]}]
  (let [location (get-uniform-location gl program name)
        values (if (some? transpose) (cons transpose [values]) values)]
    (if (clojure.string/ends-with? type "v")
      (if (vector? values)
        (js-invoke gl type location values)
        (apply js-invoke gl type location values))
      (.apply (aget gl type) gl (into-array (cons location values))))
    gl))

(defn set-uniforms!
  ([gl state]
   (let [objs (vals (get-in state [:objects-to-draw]))]
     (doseq [obj objs
             :let [[uniforms program] ((juxt :uniforms :program) obj)]]
       (doseq [uniform (vals uniforms)]
         (set-uniform! gl program uniform))))
   gl)
  ([gl program uniforms]
   {:pre  [(some? gl) (some? program)]
    :post [(= gl %)]}
   (doseq [uniform uniforms]
     (set-uniform! gl program uniform))
   gl))

(defn get-context
  [canvas-id]
  (->
    (str "#" canvas-id)
    js/document.querySelector
    (.getContext "webgl")))

;; funny error
;; :GL_INVALID_OPERATION : glDrawArrays: attempt to access out of range vertices in attribute 0
;; wrong size on the attribute.... 3 instead of 2....
;; another one
;;  INVALID_VALUE: enableVertexAttribArray: index out of range
;;  INVALID_VALUE: vertexAttribPointer: index out of range
;;    SOL => wrong name on attribute :)

(defn draw-arrays!
  [gl {:keys [draw-type offset count]}]
  (.drawArrays gl draw-type offset count)
  gl)

(defn prepare-canvas!
  [gl {:keys [clear-depth? clear-color width height]}]
  (-> (resize-canvas-to-display-size gl)
      (set-gl-viewport! width height)
      (clear-canvas! clear-depth? clear-color))
  gl)

(defn use-program!
  [gl program]
  (.useProgram gl program)
  gl)

(defn enable-features!
  [gl features]
  (doseq [f (or features [])]
    (.enable gl f))
  gl)

(defn set-texture-param!
  [gl param]
  (let [f (first param)]
    (apply js-invoke gl f (rest param)))
  gl)

(defn bind-texture!
  [gl type texture]
  (.bindTexture gl type texture)
  gl)

(defn set-texture-params!
  [gl texture type params]

  (bind-texture! gl type texture)

  (doseq [p params]
    (set-texture-param! gl p))
  gl)

(defn set-textures!
  [gl textures]
  (doseq [{:keys [params type texture]} textures]
    (set-texture-params! gl texture type (vals params)))
  gl)

(defn draw-scene!
  [{:keys [gl objects-to-draw clear-depth? clear-color viewport-width viewport-height]}]

  (prepare-canvas! gl {:clear-depth? clear-depth?
                       :clear-color  clear-color
                       :width        viewport-width
                       :height       viewport-height})

  (doseq [{:keys [program attributes uniforms element features textures]} (vals objects-to-draw)]
    (-> (use-program! gl program)
        (enable-features! features)
        (set-uniforms! program (vals uniforms))
        ;(set-textures! (vals textures))
        ;(set-attributes! program (vals attributes))
        (draw-arrays! element)))
  gl)

(defn link-shaders!
  "Create a WebGL Program with a Vertex shader and a Fragment shader."
  [gl {:keys [vs fs]}]
  (let [vs (create-shader gl (.-VERTEX_SHADER gl) vs)
        fs (create-shader gl (.-FRAGMENT_SHADER gl) fs)
        program (create-program gl vs fs)]
    program))

(defn get-attribute
  [{:keys [attributes]} attribute-name]
  (-> (filter (fn [{:keys [name]}] (= name attribute-name)) attributes)
      first))

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

(defn create-a-texture
  [gl]
  (.createTexture gl))

(defn img?
  [maybe-img]
  (= (aget maybe-img "nodeName") "IMG"))

(defn create-texture!
  ([gl texture-data] (create-texture! gl nil texture-data))
  ([gl texture texture-data]
   (let [texture (if (some? texture) texture (create-a-texture gl))]

     (bind-texture! gl (first texture-data) texture)
     ;; hmm can this be the error?
     ;; https://stackoverflow.com/questions/63127867/html-2d-canvas-as-texture-on-webgl-canvas
     ;; from gman
     (apply js-invoke gl "texImage2D" texture-data)

     (when-let [img (-> texture-data last img?)]
       (if (and (power-of-two? (aget (last texture-data) "height")) (power-of-two? (aget (last texture-data) "width")))
         (.generateMipmap gl (.-TEXTURE_2D gl))
         (do
           (.texParameteri gl (.-TEXTURE_2D gl) (.-TEXTURE_WRAP_S gl) (.-CLAMP_TO_EDGE gl))
           (.texParameteri gl (.-TEXTURE_2D gl) (.-TEXTURE_WRAP_T gl) (.-CLAMP_TO_EDGE gl))
           (.texParameteri gl (.-TEXTURE_2D gl) (.-TEXTURE_MIN_FILTER gl) (.-LINEAR gl)))))
     texture)))

(defn create-texture-with-mipmap
  ([gl texture-data] (create-texture-with-mipmap gl nil texture-data))
  ([gl texture texture-data]
   (let [texture (create-texture! gl texture texture-data)]
     (.generateMipmap gl (first texture-data))
     texture)))


;; TOOD is there some async function naming convention in clojure??
(defn create-texture-from-img
  ([gl img-name on-load] (create-texture-from-img gl img-name on-load nil))
  ([gl img-name on-load texture]
   (let [img (js/Image.)]
     (aset img "src" img-name)
     (.addEventListener img
                        "load"
                        (fn []
                          (let [texture (if (some? texture) texture (create-a-texture gl))]
                            (-> (create-texture! gl
                                                 texture
                                                 [(.-TEXTURE_2D gl)
                                                  0
                                                  (.-RGBA gl)
                                                  (.-RGBA gl)
                                                  (.-UNSIGNED_BYTE gl)
                                                  img])
                                on-load))))
     texture)))

(defn initialize-texture-from-img
  [img-name on-load]
  (let [img (js/Image.)]
    (aset img "src" img-name)
    (.addEventListener img "load" (fn [] (on-load img)))))

(defn create-framebuffer
  [gl]
  (.createFramebuffer gl))

(defn bind-framebuffer!
  [gl framebuffer]
  (.bindFramebuffer gl (.-FRAMEBUFFER gl) framebuffer)
  gl)

(defn attach-texture-to-framebuffer
  [gl framebuffer & texture-data]
  (bind-framebuffer! gl framebuffer)
  (apply js-invoke gl "framebufferTexture2D" texture-data)
  gl)

(defn- gl-invoke
  [gl fn args]
  (apply js-invoke gl fn args)
  gl)

(defn vertex-attrib-pointer
  [gl & args]
  (gl-invoke gl "vertexAttribPointer" args))

(defn enable-vertex-attrib-array
  [gl & args]
  (gl-invoke gl "enableVertexAttribArray" args))

(defn attribute
  [gl program {:keys [name size type normalize stride offset data usage target] :as attribute}]
  (let [buffer (.createBuffer gl)
        location (.getAttribLocation gl program name)]
    (-> (bind-buffer gl buffer (or target (.-ARRAY-BUFFER gl)))
        (buffer-data {:target   (or target (.-ARRAY-BUFFER gl))
                      :src-data data
                      :usage    (or usage (.-STATIC_DRAW gl))})
        (vertex-attrib-pointer location size (or type (.-FLOAT gl)) (or normalize false) (or stride 0) (or offset 0))
        (enable-vertex-attrib-array location))

    (-> (assoc attribute :buffer buffer)
        (assoc :location location)
        (assoc :target (or target (.-ARRAY-BUFFER gl)))
        (assoc :usage (or usage (.-STATIC_DRAW gl)))
        (assoc :type (or type (.-FLOAT gl)))
        (assoc :normalize (or normalize false))
        (assoc :stride (or stride 0))
        (assoc :offset (or offset 0)))))

(defn framebuffer-complete?
  [gl]
  (= (.checkFramebufferStatus gl (.-FRAMEBUFFER gl)) (.-FRAMEBUFFER_COMPLETE gl)))

(defn pixels->object
  "assign an pixels to a texture object"
  [gl texture & texture-data]
  (-> (bind-texture! gl (.-TEXTURE_2D gl) texture)
      (gl-invoke "texImage2D" texture-data))
  gl)

(defn img-pow-2?
  [img]
  (let [w (aget img "width")
        h (aget img "height")]
    (and (power-of-two? w) (power-of-two? h))))

(defn generate-mipmap!
  [gl]
  (.generateMipmap gl (.-TEXTURE_2D gl))
  gl)

(defn set-tex-parameteri!
  [gl {:keys [target p-name param]}]
  (.texParameteri gl (or target (.-TEXTURE_2D gl)) p-name param)
  gl)

(defn texture-pixels
  [gl {:keys [pixels params-i target width height border level internalformat format type dont-allocate?] :as data}]
  (let [texture (create-a-texture gl)
        target (or target (.-TEXTURE_2D gl))
        level (or level 0)
        internalformat (or internalformat (.-RGBA gl))
        format (or format (.-RGBA gl))
        type (or type (.-UNSIGNED_BYTE gl))
        dont-allocate? (or dont-allocate? false)]

    (if-not dont-allocate?
      (pixels->object gl texture target level internalformat width height border format type pixels) ;; assign the img to a texture obj
      (bind-texture! gl (.-TEXTURE_2D gl) texture))

    (doseq [param-i (vals params-i)]
      (set-tex-parameteri! gl param-i))

    (-> (assoc data :target target)
        (assoc :texture-obj texture)
        (assoc :level level)
        (assoc :internalformat internalformat)
        (assoc :format format)
        (assoc :type type))))

(defn texture-img
  "we need to:
    pre to this, create buffer and call bufferData on them for both texture data and object data

    1) init texture -----> load the img, and when onload is done, goto next step
    2) gl.createTexture
       gl.getUniformLocation(gl.program, 'u_sampler')
       activate and bind texture, set text params, call uniformi0, then we can draw.
    "
  [gl {:keys [pixels params-i mipmap? target level internalformat format type] :as data}]
  (let [texture (create-a-texture gl)
        target (or target (.-TEXTURE_2D gl))
        level (or level 0)
        internalformat (or internalformat (.-RGBA gl))
        format (or format (.-RGBA gl))
        type (or type (.-UNSIGNED_BYTE gl))]

    ;; assign the img to a texture obj
    (pixels->object gl texture target level internalformat format type pixels)

    (when mipmap?
      (if (img-pow-2? pixels)
        (generate-mipmap! gl)
        (println "Img not power of two...")))

    (doseq [param-i (vals params-i)]
      (set-tex-parameteri! gl param-i))

    (-> (assoc data :target target)
        (assoc :texture-obj texture)
        (assoc :level level)
        (assoc :internalformat internalformat)
        (assoc :format format)
        (assoc :type type))))

(defn framebuffer-texture-2D
  [gl & args]
  (gl-invoke gl "framebufferTexture2D" args))

(defn texture->framebuffer
  "Attach a texture object specified by texture to the framebuffer object bound by target."
  [gl {:keys [framebuffer attachment textarget texture level]}]
  (let [attachment (or attachment (.-COLOR_ATTACHMENT0 gl))
        textarget (or textarget (.-TEXTURE_2D gl))
        level (or level 0)]
    (-> (bind-framebuffer! gl framebuffer)
        (framebuffer-texture-2D (.-FRAMEBUFFER gl) attachment textarget texture level))
    gl))

(defn framebuffer
  [gl {:keys [texture]}]
  (let [fb (.createFramebuffer gl)]
    (texture->framebuffer gl {:framebuffer fb
                              :texture     texture})
    fb))

(defn clear-color
  [gl & colors]
  (gl-invoke gl "clearColor" colors))

(defn clear
  ([gl]
   (.clear gl (bit-or (.-COLOR_BUFFER_BIT gl) (.-DEPTH_BUFFER_BIT gl)))))




