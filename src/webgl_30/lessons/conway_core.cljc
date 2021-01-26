(ns webgl-30.lessons.conway-core)

(defn wrap
  [a size]
  (mod (+ a size) size))

(def dx [-1 0 1])
(def dy [-1 0 1])

(defn neighbours
  "Find the 8 members of a given x,y coordinates.
   The grid is considered to be a toroidal so edges wraps around.

   XXX
   X.X
   XXX

   "
  [size toroidal? [x y]]
  (for [dx dx
        dy dy
        :when (not (= [0 0] [dx dy]))]
    (do
      (if toroidal?
        [(wrap (+ dx x) size) (wrap (+ dy y) size)]
        [(+ dx x) (+ dy y)]))))

(defn tick
  [{:keys [cells grid-size toroidal?]}]
  (let [neighbours (fn [cell] (neighbours grid-size toroidal? cell))]
    (-> (for [[cell n-neighbours] (->> (mapcat neighbours cells)
                                       frequencies)
              :when (or (= n-neighbours 3)                  ;; bring back to life
                        (and (= n-neighbours 2) (cells cell)))] ;; it's alive with 2 bros
          cell)
        set)))

(defn rect
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

(defn cell-lookup-map
  [grid-size cell-size]
  (->> (for [x (range 0 grid-size)
             y (range 0 grid-size)]
         [x y])
       (reduce (fn [lookup cell]
                 (assoc lookup cell (rect {:x     (* cell-size (first cell))
                                           :y     (* cell-size (last cell))
                                           :width cell-size :height cell-size}))) {})))

(defn lookup->data
  [lookup cells]
  (-> lookup
      (select-keys cells)
      vals
      flatten))

(defn cells->rects
  [cells cell-size]
  (reduce (fn [acc [x y]]
            (concat acc (rect {:x      (* cell-size x)
                               :y      (* cell-size y)
                               :width  cell-size
                               :height cell-size}))) [] cells))

(comment

  (-> (cell-lookup-map 3 10)
      (select-keys #{[0 0] [2 2]})
      vals
      flatten
      )

  (select-keys (cell-lookup-map 400 10)
               [[0 0] [2 2]])

  )


