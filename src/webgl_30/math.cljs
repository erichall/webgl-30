(ns webgl-30.math)

(defn deg->rad
  [a]
  (* a (/ Math/PI 180)))

(defn rad->deg
  [a]
  (* a (/ 180 Math/PI)))

(defn xy-radians
  [angle]
  (let [radians (/ (* angle Math/PI) 180)]
    [(Math/sin radians) (Math/cos radians)]))

(defn cos-sin
  [angle]
  [(Math/cos angle) (Math/sin angle)])

(defn random-int
  [range]
  (Math/floor (* range (Math/random))))

(defn matrix-multiply-3d
  [a b]
  (let [a00 (nth a (+ (* 0 4) 0))
        a01 (nth a (+ (* 0 4) 1))
        a02 (nth a (+ (* 0 4) 2))
        a03 (nth a (+ (* 0 4) 3))

        a10 (nth a (+ (* 1 4) 0))
        a11 (nth a (+ (* 1 4) 1))
        a12 (nth a (+ (* 1 4) 2))
        a13 (nth a (+ (* 1 4) 3))

        a20 (nth a (+ (* 2 4) 0))
        a21 (nth a (+ (* 2 4) 1))
        a22 (nth a (+ (* 2 4) 2))
        a23 (nth a (+ (* 2 4) 3))

        a30 (nth a (+ (* 3 4) 0))
        a31 (nth a (+ (* 3 4) 1))
        a32 (nth a (+ (* 3 4) 2))
        a33 (nth a (+ (* 3 4) 3))

        b00 (nth b (+ (* 0 4) 0))
        b01 (nth b (+ (* 0 4) 1))
        b02 (nth b (+ (* 0 4) 2))
        b03 (nth b (+ (* 0 4) 3))

        b10 (nth b (+ (* 1 4) 0))
        b11 (nth b (+ (* 1 4) 1))
        b12 (nth b (+ (* 1 4) 2))
        b13 (nth b (+ (* 1 4) 3))

        b20 (nth b (+ (* 2 4) 0))
        b21 (nth b (+ (* 2 4) 1))
        b22 (nth b (+ (* 2 4) 2))
        b23 (nth b (+ (* 2 4) 3))

        b30 (nth b (+ (* 3 4) 0))
        b31 (nth b (+ (* 3 4) 1))
        b32 (nth b (+ (* 3 4) 2))
        b33 (nth b (+ (* 3 4) 3))
        ]

    [(+ (* b00 a00) (* b01 a10) (* b02 a20) (* b03 a30))
     (+ (* b00 a01) (* b01 a11) (* b02 a21) (* b03 a31))
     (+ (* b00 a02) (* b01 a12) (* b02 a22) (* b03 a32))
     (+ (* b00 a03) (* b01 a13) (* b02 a23) (* b03 a33))

     (+ (* b10 a00) (* b11 a10) (* b12 a20) (* b13 a30))
     (+ (* b10 a01) (* b11 a11) (* b12 a21) (* b13 a31))
     (+ (* b10 a02) (* b11 a12) (* b12 a22) (* b13 a32))
     (+ (* b10 a03) (* b11 a13) (* b12 a23) (* b13 a33))

     (+ (* b20 a00) (* b21 a10) (* b22 a20) (* b23 a30))
     (+ (* b20 a01) (* b21 a11) (* b22 a21) (* b23 a31))
     (+ (* b20 a02) (* b21 a12) (* b22 a22) (* b23 a32))
     (+ (* b20 a03) (* b21 a13) (* b22 a23) (* b23 a33))

     (+ (* b30 a00) (* b31 a10) (* b32 a20) (* b33 a30))
     (+ (* b30 a01) (* b31 a11) (* b32 a21) (* b33 a31))
     (+ (* b30 a02) (* b31 a12) (* b32 a22) (* b33 a32))
     (+ (* b30 a03) (* b31 a13) (* b32 a23) (* b33 a33))
     ]))

(defn matrix-multiply-2d
  [a b]
  (let [a00 (nth a (+ (* 0 3) 0))
        a01 (nth a (+ (* 0 3) 1))
        a02 (nth a (+ (* 0 3) 2))

        a10 (nth a (+ (* 1 3) 0))
        a11 (nth a (+ (* 1 3) 1))
        a12 (nth a (+ (* 1 3) 2))

        a20 (nth a (+ (* 2 3) 0))
        a21 (nth a (+ (* 2 3) 1))
        a22 (nth a (+ (* 2 3) 2))

        b00 (nth b (+ (* 0 3) 0))
        b01 (nth b (+ (* 0 3) 1))
        b02 (nth b (+ (* 0 3) 2))

        b10 (nth b (+ (* 1 3) 0))
        b11 (nth b (+ (* 1 3) 1))
        b12 (nth b (+ (* 1 3) 2))

        b20 (nth b (+ (* 2 3) 0))
        b21 (nth b (+ (* 2 3) 1))
        b22 (nth b (+ (* 2 3) 2))]
    [(+ (* b00 a00) (* b01 a10) (* b02 a20))
     (+ (* b00 a01) (* b01 a11) (* b02 a21))
     (+ (* b00 a02) (* b01 a12) (* b02 a22))
     (+ (* b10 a00) (* b11 a10) (* b12 a20))
     (+ (* b10 a01) (* b11 a11) (* b12 a21))
     (+ (* b10 a02) (* b11 a12) (* b12 a22))
     (+ (* b20 a00) (* b21 a10) (* b22 a20))
     (+ (* b20 a01) (* b21 a11) (* b22 a21))
     (+ (* b20 a02) (* b21 a12) (* b22 a22))]))

(defn perspective-matrix
  [field-of-view-in-radians aspect near far]
  (let [f (Math/tan (- (* Math/PI 0.5)
                       (* 0.5 field-of-view-in-radians)))
        range-in-view (/ 1.0 (- near far))]
    [(/ f aspect) 0 0 0
     0 f 0 0
     0 0 (* range-in-view (+ near far)) (- 1)
     0 0 (* near far range-in-view 2) 0]))

(defn rotation-3d-y
  [angle-radians]
  (let [[c s] (cos-sin angle-radians)]
    [c 0 (- s) 0
     0 1 0 0
     s 0 c 0
     0 0 0 1]))

(defn translate-3d
  [tx ty tz]
  [1 0 0 0
   0 1 0 0
   0 0 1 0
   tx ty tz 1])