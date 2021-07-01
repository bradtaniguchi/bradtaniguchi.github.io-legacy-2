---
title: clojure-queue-example
description: 'This was example clojure code given to me'
published: true
date: 2021-05-29T00:00:00.000Z
slugs:
  - clojure-queue-example
snippet: true
---


Discord link:
https://discord.com/channels/692816967895220344/718214639669870683/859562470506889246

This was example clojure code given in a public chat, I will one day understand.... on day.

```clojure
(defn flat [m]
  (let [enqueue (fn [q vs path] (apply conj q (for [v vs] (conj v path))))
        queue (enqueue clojure.lang.PersistentQueue/EMPTY m "")]
    (loop [flattened {}
           queue queue]
      (if (empty? queue)
        flattened
        (let [[key value path] (peek queue)
              next-queue (pop queue)
              next-path (str path
                             (if-not (empty? path) "." "")
                             (name key))]
          (if (map? value)
            (recur flattened
                   (enqueue next-queue value next-path))
            (recur (assoc flattened next-path value)
                   next-queue)))))))
```
