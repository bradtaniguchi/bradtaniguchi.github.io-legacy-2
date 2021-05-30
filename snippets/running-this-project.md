---
title: running-this-project
description: 'CLI commands to run this project locally using Scully'
published: true
date: 2021-05-30T00:00:00.000Z
slugs:
  - running-this-project
tags:
  - ops
---

Running this project using scully requires at least 2 terminal instances, and the following two commands:

**starting the Angular build process**

```bash
npm run build -- --watch
```

```bash
npm run scully -- --watch
```

**note** it is also recommended to run `npm run clean` **before** any of this, to prevent any extra cached files from being used.

At this point 2 servers should be running, the main client, and the static client. Here are the localhost urls available:

angular - http://localhost:4200

scully - http://localhost:4201

**note** running this project in github codespaces will result in the client not automatically reloading. To fix this use:

```bash
npm run start -- --host=0.0.0.0 --disable-host-check
```
