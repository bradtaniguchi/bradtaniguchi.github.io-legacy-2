---
title: clojure-notes
description:
published: true
date: 2021-08-31T00:00:00.000Z
slugs:
  - clojure-notes
---

# clojure-notes

The following are unstructured basic notes I took quickly while going through the basics of learning clojure.
Unlike the last time I tried to learn clojure, I taking a different approach where I learn from different resources
at the same time, rather than try to dive head first into one resource. So far the process has worked. I feel like
I understand the concepts better. However I'm still only getting started and haven't even gotten to deep into
logic operators!

Anyways below are some of the notes I've taken so far. I may create another snippet, or just update this one
over time.

---

Here's more or less where I am in the "learn" page of clojure docs:
https://clojure.org/guides/learn/syntax#_exploring_at_the_repl

---

Here's a snippet to add:

---

_"In addition, there is a namespace clojure.repl that is included in the standard Clojure library that provides a number of helpful functions. To load that library and make its functions available in our current context, call:"_

```clojure
(require '[clojure.repl :refer :all])
```

---

I'll update this issue as I got through with more snippets I can add all together.

---

To find a doc use:

```clojure
(find-doc "trim")
```

---

Language collection type reference:

```clojure
'(1 2 3)     ; list
[1 2 3]      ; vector
#{1 2 3}     ; set
{:a 1, :b 2} ; map
```

Clojure has docs on "weird characters. Should be super useful when starting out:
https://clojure.org/guides/weird_characters

---

Web servers with clojure to checkout:

- ring
- jetty
- compojure (check this one out as a starter as its very simple)
- luminus (this is a good alt)

---

Basic control flow operator reminder:

- if
  - do
- when

---

Quote about using internal data structures:

```
It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures.
-Alan Perlis
```

---

```
[...], you learned that function calls are expressions that have a function expression as the operator. The two other kinds of expressions are macro calls and special forms. You’ve already seen a couple of special forms: definitions and if expressions.
```

**anonymous functions notes**

The anonymous functions can be declared multiple ways:
(both using `map` and a custom `inc`-like function

```clojure
(map (fn [n] (+ n 1)) [1 2 3])
;; (2 3 4)
```

```clojure
(map #(+ % 1 ) [1 2 3])
;; (2 3 4)
```

More docs on shorter anonymous function syntax
https://clojure.org/guides/learn/functions#_anonymous_function_syntax

---

gotcha:

```clojure
;; DO NOT DO THIS
#([%])
```

will turn into:

```clojure
(fn [x] ([x]))
```

do this instead:

```clojure
;; Instead do this:
#(vector %)

;; or this:
(fn [x] [x])

;; or most simply just the vector function itself:
vector
```
