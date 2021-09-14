---
title: max-stack-call
description: 'javascript function to print out max-stack limit'
published: true
date: 2021-09-08T00:00:00.000Z
slugs:
  - max-stack-call
tags:
  - typescript
  - angular
  - ngrx
---

Below is a snippet taken from:
https://stackoverflow.com/questions/7826992/browser-javascript-stack-size-limit

This version only works on es6 supporting runtimes, and is smaller, it also might be off by 1.


Can be useful to know recursion limitations.

```javascript
let i = 0;
const inc = () => i++ && inc();
try {
  inc();
} catch(e) {
    console.log(i);
}
```