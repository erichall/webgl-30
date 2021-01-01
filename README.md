# 30 Days of WebGL with Clojure
Can we learn something?

## Overview
This is my attempt to tackle the seemingly complex API - WebGL. I will do this with Clojure, primary Clojurescript.
It seems that WebGL is about binding stuff to some global scope and then mutating it, so we will see how this sings with Clojure.

---

### 1/30
##### What the heck did we do yesterday?
Concluded that there really are no good libs for WebGL and Clojure. 
The most prominent one seems to be thi-ng/geom but without any documentation or learning 
materials. I'm kinda in the dark there. 

So I guess the path forward is to do some interop with the standard WebGL lib through JS 
and maybe try to abstract away some parts and make it more Clojure-like.

Yesterday was consumed by [webglfundamentals.org](https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html). 
An awesome site with tons of great information on how WebGL works. 
All examples and code are written in JS which I'm translating to CLJS. 
After the first tutorial we actually managed to draw a triangle and lots of random boxes!

Another lesson is that WebGL is built on a kinda "simple" idea that everything 
is a `vertex` and the only thing you need 
to provide to WebGL is two functions; a Vertex 
Shader and a Fragment Shader. Unfortunate, these are written in yet 
another language called GLSL. 

The Vertex and Fragment Shader together makes up for a WebGL `Program`. 
The meat seems to be contained in these two shaders, while everything 
else is just setting up a state for the to work.

[webglfundamentals](https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html) showed 
how to create these shaders, here is the translation to CLJS:

```clojure
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
```

This is an example of a `Vertec Shader` that convert the coordinate space to have the origin 
like a normal 2d canvas in the top left corner.
```clojure
(def shaders {
:ws "attribute vec2 a_position;
     uniform vec2 u_resolution;

     void main() {
        vec2 zeroToOne = a_position / u_resolution;
        vec2 zeroToTwo = zeroToOne * 2.0;
        vec2 clipSpace = zeroToTwo - 1.0;

        gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
     }
"
}
```

So we can create a shader with this line
```clojure
(create-shader gl (.-VERTEX_SHADER gl) (:vs shaders))
``` 

##### What did we do today?
Today was a continutation on [2d-translations](https://webglfundamentals.org/webgl/lessons/webgl-2d-translation.html).

Not much progress on the material though, most of the time went on to refactorings and 
setting up a dynamic canvas element instead of specifying it in index.html.

I also learned that matrices, at latest 2d matrices differs from math matrices 
in the way they are written.

##### Moving forward?
Tomorrow we will continue with the translation part of the great tutorials from 
webglfundamentals.

##### Conclusion
We managed to make some refactorings today, maybe not much for the actual WebGL stuff 
but at least we have something to build upon when we continue the tutorials.

---
### 2/30

##### What the heck did we do yesterday?
Spent yesterday with refactoring stuff and didn't really have time for doing more WebGL stuff. 

The best thing we did I guess was to refactor how the canvas element is handled. 

Before we had the canvas element inside `index.html` 
```html
  <body>
    <div id="app">
      <canvas id="main" height="400px" width="400px"></canvas>
    </div>
    <script src="main.js" type="text/javascript"></script>
  </body>
```
This felt kinda awkward since you couldn't really control it apart from doing `querySelector` on it and mutating it.
And it was messy when we wanted to add other reagent components.

The solution was to use some lovley hiccup and create it with cljs like this
```clojure
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
                                           :style  {:border "1px dashed green"}
                                           :id     (:canvas-id state)}])
     :component-did-mount (fn [] (trigger-event :canvas-did-mount))}))
```
inside our handle-event fn we simply take the context
```clojure
  :canvas-ref (swap! state-atom assoc :gl (.getContext data "webgl"))
```

Two things might be wrong here, to have the gl-context inside the state-atom, might not be optimal.
The second strange thing is the ref and shadow-cljs hot reloading, it seems to be nil when hot reloading kicks in.


##### What did we do today?
2d translations by following [webglfundamentals](https://webglfundamentals.org/webgl/lessons/webgl-2d-translation.html). 

The initial translation was done through setting the direct x and y values on the object like this
```clojure
(defn set-rectangle!
  "Create a rectangle by using two triangles"
  [gl {:keys [x y width height]}]
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
```
whilst it looks kinda cumbersome for this simple rectangle, it is doable to set it up like this. 
However, there is a much better way to do it as we learned from the tutorial. 

The preferred way is to use the `Vertex shader`
```
   attribute vec2 a_position;

   uniform vec2 u_resolution;
   uniform vec2 u_translation; // <-- this 

    void main() {
      vec2 position = a_position + u_translation; // <-- this
      vec2 zeroToOne = position / u_resolution; // <-- this
      vec2 zeroToTwo = zeroToOne * 2.0;
      vec2 clipSpace = zeroToTwo - 1.0;

      gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    }
```
With this, we just need to direct the shader on how do use this variable, inside the draw-scene! function we added this
```clojure
translation-location (.getUniformLocation gl program "u_translation")
...
   (.uniform2fv gl translation-location [(get-in state [:translation-rect :x])
                                          (get-in state [:translation-rect :y])])
```

##### Moving forward?
Next up is some 2d rotating: [https://webglfundamentals.org/webgl/lessons/webgl-2d-rotation.html](https://webglfundamentals.org/webgl/lessons/webgl-2d-rotation.html)

##### Conclusion
I guess the overall architecture is moving in the right direction, but I'm not completely happy with it. 
As it is now, almost everything has been moved inside the `state-atom`, even the `gl` context object. 
I guess this is the thing that kinda bothers me, all the WebGL functions is mutating the `gl` context object on the canvas 
without returning anything.

---

### 3/30

##### What the heck did we do yesterday?
Complete setup with a efficient way of handling translations of objects in 2d space. Instead of 
setting a new shape on each render, we applied some math in our vertex shader to control the position 
of the object. 

##### What did we do today?
The 2d rotating chapter from [webglfundamentals.org](https://webglfundamentals.org/webgl/lessons/webgl-2d-rotation.html). 

So far, both color, translation and rotating has been done by adding a uniform variable in our vertex shader and
doing some math on it. The vertex shader now looks like this:
```
   attribute vec2 a_position;

   uniform vec2 u_resolution;
   uniform vec2 u_translation;
   uniform vec2 u_rotation; // <-- this

    void main() {
      vec2 rotatedPosition = vec2(                                  // <-- this
        a_position.x * u_rotation.y + a_position.y * u_rotation.x,  // <-- this
        a_position.y * u_rotation.y - a_position.x * u_rotation.x   // <-- this
      );
      vec2 position = rotatedPosition + u_translation;              // <-- this
      vec2 zeroToOne = position / u_resolution;
      vec2 zeroToTwo = zeroToOne * 2.0;
      vec2 clipSpace = zeroToTwo - 1.0;

      gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
```
then 'binding' it or what you would like to call it when we draw later on. I did some 
refactoring to our uniform variables since they started to grow.

They are now initialized when our canvas has been mounted, I guess maybe you don't want to add more
uniform variables after the initial setup, or that would require changes in the shaders too. 

We create the uniform variables like this now
```clojure
 (assoc state :uniforms (conj uniforms
                       {:type   :uniform2fv
                        :name   "u_resolution"
                        :values [(aget gl "canvas" "width")
                                 (aget gl "canvas" "height")]}
                       {:type   :uniform2fv
                        :name   "u_translation"
                        :values [(get-in state [:translation-rect :x])
                                 (get-in state [:translation-rect :y])]}
                       {:type   :uniform4fv
                        :name   "u_color"
                        :values [0.3 0.8 0 1]}
                       {:type   :uniform2fv
                        :name   "u_rotation"
                        :values [0 1]}))
```

When rendering we can just do
```clojure
 (doseq [uniform uniforms]
    (set-uniform gl program uniform))
```
where `set-uniform` is defined as
```clojure
(defn set-uniform
  [^js gl program {:keys [type name values]}]
  (let [location (.getUniformLocation gl program name)]
    (condp = type
      :uniform2fv (.uniform2fv gl location values)
      :uniform4fv (.uniform4fv gl location values))))
```

Not really sure what is going on with the `uniformXXX` functions and cljs.
there are two functions, one is called `uniform2f` and the other one is called `uniform2fv`, with a `v` in the end,
but they seem to be doing the same thing, the latter one works with a list as argument...
I spent, 40 min trying to partially apply the function because of the variable arguments but
without any success.. 
like, why doesn't this work
```clojurue
(apply (partial (.-uniform2f gl) location) [1 2 3]) ;; => Uncaught TypeError: Illegal invocation....
```
##### Moving forward?
Next up is 2d scaling!

##### Conclusion
I think we start to get in the WebGL mojo by now. At least in the 2d space :) however, Yesterday I complained about the 
hidden `gl` state which all functions seem to mutate, but I guess that is the exact thing we are trying to do in clojure, other than 
you can't really see the state inside the gl variable, or maybe there is a way to see it somehow?

I guess it's still kinda awkward to deal with one of your "local" state in a atom, and then inside this state atom, I've put the
gl context which is being mutated on.

---

### 4/30

##### What the heck did we do yesterday?
Full on rotation! Had lots of struggle with `uniform4f` and how to apply a list of arguments. It seems that the difference between 
these functions are just the argument?
```
gl.uniform4f (vec4UniformLoc,  v0, v1, v2, v4);    // for vec4
gl.uniform4fv(vec4UniformLoc,  [v0, v1, v2, v4]);  // for vec4 or vec4 array
``` 
Well, with some help from cljs-slack I finally got a working variadic argument js function call together, like this: 
```clojure
(.apply gl.uniform2f gl (into-array (cons location values)))
```
but if the `2f` and `2fv` is the same function it is way easier to just use the `2fv` variant I guess, but alteast we got 
an example on how to do interop with js and apply a variadic set of arguments to a function.

##### What did we do today?
Scaling. A straight forward method after doing the translation part. Yet again, we added another uniform variable to our
vertex shader 
```vec2 scaledPosition = a_position * u_scale;```
`scaledPosition` is not used instead of a_position. Since scaling is done in both x and y, `u_scale` is a 2d vector.

I also finally managed to make multi arity function work with interop with JS from CLJS. The solution looks like this:
```clojure
(.apply gl.uniform2f gl (into-array (cons location values)))
```
The `set-uniform` function has now been morphed into it's current form - 
```clojure
(defn set-uniform
  [^js gl program {:keys [type name values]}]
  (let [location (.getUniformLocation gl program name)]
    (if (clojure.string/ends-with? type "v")
      (js-invoke gl type location values)
      (.apply (aget gl type) gl (into-array (cons location values))))))
```

##### Moving forward?
Next step is to take it forward with matrices instead of using tons of variables.

##### Conclusion
I guess we have the fundamentals set now for 2d WebGL, I believe the last step is to start using matrices. 

I'm also not really sure if WebGL is the way to go. I mean, it is on such a low level, and most of the juicy stuff is done in the shaders. 
Do we really want to write GLSL code in string format. Not sure... I think the other way to go is to use threeJS which I believe have
abstracted away the GLSL part. 

---

### 5/30

##### What the heck did we do yesterday?
Scaling. By expanding our vertex shader with yet another variable. 

##### What did we do today?
We converted our Vertex shader from using tons of variables to matrices. While doing it, It's so awesome that people way way way 
smarter than me has been able to come up with this, it's just genius! 

Going from a `Vertex shader` that looks like this:
```
   attribute vec2 a_position;

   uniform vec2 u_resolution;
   uniform mat3 u_matrix;

    void main() {
      vec2 position = (u_matrix * vec3(a_position, 1)).xy;

      // convert position to [0, 1]
      vec2 zeroToOne = position / u_resolution;

      // convert [0,1] -> [0,2]
      vec2 zeroToTwo = zeroToOne * 2.0;

      // to clip-space [0,2] -> [-1,1]
      vec2 clipSpace = zeroToTwo - 1.0;

      gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    }
```

to one almost one line:
```
   attribute vec2 a_position;

   uniform mat3 u_matrix;

    void main() {
      gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
    }
```
with the help from some glorious math! 

##### Moving forward?
Next up is [drawing-fn](https://webglfundamentals.org/webgl/lessons/webgl-2d-drawimage.html)

##### Conclusion
Math and linear algebra is just awesome.

---





