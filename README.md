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

##### Conclusions
We managed to make some refactorings today, maybe not much for the actual WebGL stuff 
but at least we have something to build upon when we continue the tutorials.

---



