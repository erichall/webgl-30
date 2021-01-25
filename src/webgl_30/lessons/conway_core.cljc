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

