(ns webgl-30.core)

(defn current-namespace
  [s]
  (name (apply str (drop-last 2 (str s)))))

(defn format
  [f & xs]
  (apply cljs.pprint/cl-format nil f xs))

(defn ns-str
  "Get current ns without only chars in."
  [ns-const]
  (-> (current-namespace ns-const)
      (clojure.string/replace-all #"[\W_]+" "")))

(defn get-filename
  "ns-symbol is in the form #'::x"
  [ns-symbol]
  (-> (meta ns-symbol)
      :file))

(defn set-last
  "Replace last item in a vector, throws if it's empty........!"
  [v a]
  (assoc v (dec (count v)) a))

