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

(defn perspective-3d-matrix
  [field-of-view-in-radians aspect near far]
  ;{:pre [(number? field-of-view-in-radians) (number? aspect) (number? near) (number? far)]}
  (let [f (Math/tan (- (* Math/PI 0.5)
                       (* 0.5 field-of-view-in-radians)))
        range-in-view (/ 1.0 (- near far))]
    [(/ f aspect) 0 0 0
     0 f 0 0
     0 0 (* range-in-view (+ near far)) (- 1)
     0 0 (* near far range-in-view 2) 0]))

(defn rotation-3d-y-matrix
  [angle-radians]
  (let [[c s] (cos-sin angle-radians)]
    [c 0 (- s) 0
     0 1 0 0
     s 0 c 0
     0 0 0 1]))

(defn rotation-3d-x-matrix
  [angle-radians]
  (let [[c s] (cos-sin angle-radians)]
    [1 0 0 0
     0 c s 0
     0 (- s) c 0
     0 0 0 1]))

(defn translation-3d-matrix
  [[tx ty tz]]
  ;{:pre [(number? tx) (number? ty) (number? tz)]}
  [1 0 0 0
   0 1 0 0
   0 0 1 0
   tx ty tz 1])

(defn invert-4x4
  [m]
  (let [m00 (nth m (+ (* 0 4) 0))
        m01 (nth m (+ (* 0 4) 1))
        m02 (nth m (+ (* 0 4) 2))
        m03 (nth m (+ (* 0 4) 3))

        m10 (nth m (+ (* 1 4) 0))
        m11 (nth m (+ (* 1 4) 1))
        m12 (nth m (+ (* 1 4) 2))
        m13 (nth m (+ (* 1 4) 3))

        m20 (nth m (+ (* 2 4) 0))
        m21 (nth m (+ (* 2 4) 1))
        m22 (nth m (+ (* 2 4) 2))
        m23 (nth m (+ (* 2 4) 3))

        m30 (nth m (+ (* 3 4) 0))
        m31 (nth m (+ (* 3 4) 1))
        m32 (nth m (+ (* 3 4) 2))
        m33 (nth m (+ (* 3 4) 3))

        tmp-0 (* m22 m33)
        tmp-1 (* m32 m23)
        tmp-2 (* m12 m33)
        tmp-3 (* m32 m13)
        tmp-4 (* m12 m23)
        tmp-5 (* m22 m13)
        tmp-6 (* m02 m33)
        tmp-7 (* m32 m03)
        tmp-8 (* m02 m23)
        tmp-9 (* m22 m03)
        tmp-10 (* m02 m13)
        tmp-11 (* m12 m03)
        tmp-12 (* m20 m31)
        tmp-13 (* m30 m21)
        tmp-14 (* m10 m31)
        tmp-15 (* m30 m11)
        tmp-16 (* m10 m21)
        tmp-17 (* m20 m11)
        tmp-18 (* m00 m31)
        tmp-19 (* m30 m01)
        tmp-20 (* m00 m21)
        tmp-21 (* m20 m01)
        tmp-22 (* m00 m11)
        tmp-23 (* m10 m01)

        t0 (- (+ (* tmp-0 m11) (* tmp-3 m21) (* tmp-4 m31))
              (+ (* tmp-1 m11) (* tmp-2 m21) (* tmp-5 m31)))
        t1 (- (+ (* tmp-1 m01) (* tmp-6 m21) (* tmp-9 m31))
              (+ (* tmp-0 m01) (* tmp-7 m21) (* tmp-8 m31)))
        t2 (- (+ (* tmp-2 m01) (* tmp-7 m11) (* tmp-10 m31))
              (+ (* tmp-3 m01) (* tmp-6 m11) (* tmp-11 m31)))
        t3 (- (+ (* tmp-5 m01) (* tmp-8 m11) (* tmp-11 m21))
              (+ (* tmp-4 m01) (* tmp-9 m11) (* tmp-10 m21)))

        det (/ 1.0 (+ (* m00 t0) (* m10 t1) (* m20 t2) (* m30 t3)))]
    [(* det t0)
     (* det t1)
     (* det t2)
     (* det t3)
     (* det (- (+ (* tmp-1 m10) (* tmp-2 m20) (* tmp-5 m30))
               (+ (* tmp-0 m10) (* tmp-3 m20) (* tmp-4 m30))))

     (* det (- (+ (* tmp-0 m00) (* tmp-7 m20) (* tmp-8 m30))
               (+ (* tmp-1 m00) (* tmp-6 m20) (* tmp-9 m30))))

     (* det (- (+ (* tmp-3 m00) (* tmp-6 m10) (* tmp-11 m30))
               (+ (* tmp-2 m00) (* tmp-7 m10) (* tmp-10 m30))))

     (* det (- (+ (* tmp-4 m00) (* tmp-9 m10) (* tmp-10 m20))
               (+ (* tmp-5 m00) (* tmp-8 m10) (* tmp-11 m20))))

     (* det (- (+ (* tmp-12 m13) (* tmp-15 m23) (* tmp-16 m33))
               (+ (* tmp-13 m13) (* tmp-14 m23) (* tmp-17 m33))))

     (* det (- (+ (* tmp-13 m03) (* tmp-18 m23) (* tmp-21 m33))
               (+ (* tmp-12 m03) (* tmp-19 m23) (* tmp-20 m33))))

     (* det (- (+ (* tmp-14 m03) (* tmp-19 m13) (* tmp-22 m33))
               (+ (* tmp-15 m03) (* tmp-18 m13) (* tmp-23 m33))))
     (* det (- (+ (* tmp-17 m03) (* tmp-20 m13) (* tmp-23 m23))
               (+ (* tmp-16 m03) (* tmp-21 m13) (* tmp-22 m23))))

     (* det (- (+ (* tmp-14 m22) (* tmp-17 m32) (* tmp-13 m12))
               (+ (* tmp-16 m32) (* tmp-12 m12) (* tmp-15 m22))))

     (* det (- (+ (* tmp-20 m22) (* tmp-12 m02) (* tmp-19 m22))
               (+ (* tmp-18 m22) (* tmp-21 m32) (* tmp-13 m02))))

     (* det (- (+ (* tmp-18 m12) (* tmp-23 m32) (* tmp-15 m02))
               (+ (* tmp-22 m32) (* tmp-14 m02) (* tmp-19 m12))))

     (* det (- (+ (* tmp-22 m22) (* tmp-16 m02) (* tmp-21 m12))
               (+ (* tmp-20 m12) (* tmp-23 m22) (* tmp-17 m02))))]))

(defn cross-product
  [a b]
  [(- (* (nth a 1) (nth b 2)) (* (nth a 2) (nth b 1)))
   (- (* (nth a 2) (nth b 0)) (* (nth a 0) (nth b 2)))
   (- (* (nth a 0) (nth b 1)) (* (nth a 1) (nth b 0)))])

(defn subtract-vec
  [a b]
  [(- (nth a 0) (nth b 0))
   (- (nth a 1) (nth b 1))
   (- (nth a 2) (nth b 2))])

(defn normalize
  [v]
  (let [l (Math/sqrt (+ (* (nth v 0) (nth v 0))
                        (* (nth v 1) (nth v 1))
                        (* (nth v 2) (nth v 2))))]
    (if (> l 0.00001)
      (mapv #(/ % l) v)
      [0 0 0])))

(defn look-at-matrix
  [camera-position target up]
  (let [z-axis (-> (subtract-vec camera-position target)
                   normalize)
        x-axis (-> (cross-product up z-axis)
                   normalize)
        y-axis (-> (cross-product z-axis x-axis)
                   normalize)]
    [(nth x-axis 0) (nth x-axis 1) (nth x-axis 2) 0
     (nth y-axis 0) (nth y-axis 1) (nth y-axis 2) 0
     (nth z-axis 0) (nth z-axis 1) (nth z-axis 2) 0
     (nth camera-position 0) (nth camera-position 1) (nth camera-position 2) 1]))

(defn translation-2d-matrix
  [[tx ty]]
  [1 0 0
   0 1 0
   tx ty 1])

(defn rotation-2d-matrix
  [radians]
  (let [c (Math/cos radians)
        s (Math/sin radians)]
    [c (- s) 0
     s c 0
     0 0 1]))

(defn scaling-2d-matrix
  [[sx sy]]
  [sx 0 0
   0 sy 0
   0 0 1])

(defn projection-2d-matrix
  [width height]
  ; flip y-axis so 0 is at top
  [(/ 2 width) 0 0
   0 (/ (- 2) height) 0
   -1 1 1])

(defn identity-2d-matrix
  []
  [1 0 0
   0 1 0
   0 0 1])

(defn rotation-3d-z-matrix
  [angle-radians]
  (let [[c s] (cos-sin angle-radians)]
    [c s 0 0
     (- s) c 0 0
     0 0 1 0
     0 0 0 1]))

(defn scaling-3d-matrix
  [[sx sy sz]]
  [sx 0 0 0
   0 sy 0 0
   0 0 sz 0
   0 0 0 1])

(defn z->w-matrix
  [fudge-factor]
  [1 0 0 0
   0 1 0 0
   0 0 1 fudge-factor
   0 0 0 0 1])
(defn projection-3d-matrix
  [width height depth]
  ; flip y-axis so 0 is at top
  [(/ 2 width) 0 0 0
   0 (/ (- 2) height) 0 0
   0 0 (/ 2 depth) 0
   -1 1 0 1])

(defn orthographic-matrix
  [left right bottom top near far]
  [(/ 2 (- right left)) 0 0 0
   0 (/ 2 (- top bottom)) 0 0
   0 0 (/ 2 (- near far)) 0

   (/ (+ left right) (- left right))
   (/ (+ bottom top) (- bottom top))
   (/ (+ near far) (- near far))
   1])



