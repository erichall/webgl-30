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

### 6/30

##### What the heck did we do yesterday?
Refactoring into using matrices instead of multiple variables to handle scaling, transformation, projection and rotation.

##### What did we do today?
Started to work through the drawing-fn part of webglfundamentals. Lots of work left though.

##### Moving forward?
Continue with the [drawing-fn](https://webglfundamentals.org/webgl/lessons/webgl-2d-drawimage.html)

##### Conclusion
I'm still impressed of the refactoring to matrices, even though the actual matrix multiplication is super hardcoded. 

---

### 7/30

##### What the heck did we do yesterday?
Only some minor refactorings.

##### What did we do today?
Orthographic 3D. We turned our F into 3d. Tbh, after doing this part, It feels like going down the 3d path is...daunting.
I mean, I'm never going to write custom 3d stuff like this so, I'm not sure what to take from it. Other than that, it was really 
not that much different from 2d for this part, just adding a ton of more data due the z-dimension. Still fun to have done it though! 

##### Moving forward?
I stumbled upon the Orthographic 3D stuff just because it was a prerequisite for the draw-image part. Not sure what to take on next. 
if we keep going the 3d path, we will start with animations and cameras which is quite cool. I guess we keep going.

##### Conclusion
I wanted to abstract the matrix multiplication, but it seems that I failed at doing that, or there is an error somewhere, and I can't find it..!

---

### 8/30

##### What the heck did we do yesterday?
Ventured out in 3d space and got kinda scared. I guess this is something to conclude about WebGL; WebGL is not a 3d library. 
WebGL is more of an API that enables you to make 2d or 3d stuff. It gives you a toon of tools to help you do it but you still have
to provide all the jazz; you have to provide it with clip-space coordinates, do the interpolation, normalize your coordinates etc etc. 
WebGL just draws your vertices, and that's it. Comparing this to an actual 3d Library, like Three.js, where you can provide objects but
all the low level stuff are abstracted away from you. I guess this is what I came to realize after a couple of days following 
the excellent tutorials from [webglfundamentals.org](https://webglfundamentals.org/). It's fun an all but to venture out on a 
project on your own with WebGL as your primary tool is something I'm clearly not ready for. 

But I'm still torn between going low level and not. I really don't like to use libs but sometimes I guess it's unavoidable. 

Still though, let's keep at it with WebGL! the goal now is to move forward with [WebGL Implementing DrawImage](https://webglfundamentals.org/webgl/lessons/webgl-2d-drawimage.html)
but in order to do that we had to learn about [Orthographic 3D](https://webglfundamentals.org/webgl/lessons/webgl-3d-orthographic.html)
and [WebGL Textures](https://webglfundamentals.org/webgl/lessons/webgl-3d-textures.html). 

But in order to do Textures we need to know some more stuff, so when going down the rabbit hole, we end up with [WebGL 3D Perspective](https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html)
 

##### What did we do today?
I know more about 3d perspective now! or I think.... Went over fudgeFactor which made the z dimension scale up and down. Or it's 
not really the z-dimension, it is rather the 'w-dimension' which I'm not really sure of what it is, depth?? 
It is not, from stack-overflow: 'W is the fourth coordinate of a three-dimensional vertex; This vertex is called homogeneous vertex coordinate.'
The comment goes on saying that `w` is the dimension that divides the others, so when `w=1` the coordinate system is normalized.

Found out that we could go on reading this official OpenGL book: [red-book](http://glprogramming.com/red/).

We also did some refactoring and adding new namespaces. `shapes.cljs, webgl.cljs, math.cljs` I'm thinking of handling `webgl.cljs`
as a small lib that handle all WebGL shenanigans.

##### Moving forward?
To end up the 2d drawImage we need to know about cameras!

##### Conclusion
We added even more matrix multiplication. I mean, it's one thing to follow a tutorial, and it's another thing to twink it up
on your own. I guess I'm not really learning when doing the matrix calculations without any pen or paper, is it 3 years now since
I took the linear algebra and multi vector analysis course math?!

---

### 9/30

##### What the heck did we do yesterday?
Set aside the whining over 3D stuff is hard, we added a perspective to our lovely `F` by doing some glorious matrix multiplication.
Instead of projecting our world with this matrix:
```clojure
  :projection  (fn [width height depth]
                  ; flip y-axis so 0 is at top
                  [(/ 2 width) 0 0 0
                   0 (/ (- 2) height) 0 0
                   0 0 (/ 2 depth) 0
                   -1 1 0 1])
```
we now have a depth perspective by doing multiplication with this matrix
```clojure
   :perspective (fn [field-of-view-in-radians aspect near far]
                  (let [f (Math/tan (- (* Math/PI 0.5)
                                       (* 0.5 field-of-view-in-radians)))
                        range-in-view (/ 1.0 (- near far))]
                    [(/ f aspect) 0 0 0
                     0 f 0 0
                     0 0 (* range-in-view (+ near far)) (- 1)
                     0 0 (* near far range-in-view 2) 0]))
```

we did add something called frustum, or viewing frustum. I had no idea what that was before, but it's the region of where a 3d model appears on the screen.
When peeking on today's mission, I came to understand why the F is not visible if we not move it manually. The reason for this is that we 
have put the F right on top of you, at (0,0,0) and thats why you don't see it at first. I guess this is what cameras are for!

Found some OG tutorial for matrixes and viewing: (https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection)[https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection]


##### What did we do today?
Not much, dabbed into matrices, it sores my eye to have it hardcoded like this but I couldn't manage to neither install
`clojure.core.matrix` or come up with a better solution to the current impl, at least it's fast.

##### Moving forward?
Go on with cameras.

##### Conclusion
Sometimes, the tooling stuff around clojure can be quite frustrating.

---

### 10/30

##### What the heck did we do yesterday?
We added perspective and changed our projection matrices because we added frustum to our view. Frustum changes our view so objects appears
further away. We did this by some shenanigans matrix multiplication.

##### What did we do today?
Completed the camera tutorial. Spent half the night with a parenthesis mistake:
```clojure
(defn cross-product-spot-the-incorrect-()
  [a b]
  [(- (* (nth a 1) (nth b 2) (* (nth a 2) (nth b 1))))
   (- (* (nth a 2) (nth b 0) (* (nth a 0) (nth b 2))))
   (- (* (nth a 0) (nth b 1) (* (nth a 1) (nth b 0))))])
```

We also added a hugmongos hardcoded inverse 4x4 matrix operation. I remember doing inverted matrices with pen and paper... it was fun!
I tested to make a dynamic one but gave up after some time...

##### Moving forward?
Finally, at animations!

##### Conclusion
It is actually quite cool what we have accomplished with this raw stuff. I mean, there is no game engine or something behind this, 
we actually have a fully custom camera which we can lock at an object and rotate around it. In like 100 rows of code?!

---









