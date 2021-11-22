---
title: Struggles with scully
description:
published: true
date: 2021-11-22T00:00:00.000Z
slugs:
  - struggles-with-scully
---

# Struggles with scully

I spent a good few hours today bashing my head against a feature for this portfolio I just **couldn't** get working.
The basic idea was to leverage scully's `transferState` service to "save" github API data I load, so I could integrate
my github gist snippets into this app.

However, I ran into issues at every turn with minimal insight into what was going on.

1. Github's api is rate limited to 60 requests per hour. I would hit this and only get a small `403` error in my scully build.
   Furthermore, I couldn't get any further insight into the error beyond the code, so I can to manually add log statements in the library to get any idea
   that I was getting rate limited.

2. To workaround the rate limit, I got a personal access token and set it up for codespaces. This would of been ok, except
   I had a typo in my header, and ran into more vague errors.

3. After realizing my mistake, I started on the actual feature where I assumed I could use scully to get the raw data from the api,
   and then manage it within the app. Instead, I just got the `id` property and nothing else. **I should look back into this part, as I might of overlooked a feature
   of scully.** Regardless, because I just got the `id`, I thought I could use the `transferState` service to "save" the full data, **if** I make a direct call
   via `http` to the API, through it.

4. I updated my github api service to make the call, and only got `undefined` in return. After bashing my head against the service more, I realized
   the `transferState` was returning undefined because it was **getting an error**. By this point I stopped, as this is around the third time scully has
   directly hidden errors from me, which is a **huge** pain when the docs are missing so much.

Because of this, I might start looking for alternative static site generators for Angular (or just bite the bullet and not use Angular!).
Its one thing to lack features, but to spend so much time fighting the framework itself is just too annoying.

With this post, I think I'll start spending some time on my other side projects that don't rely on scully.
The first project will be the flash card app, which is connected to firebase, but doesn't have much UI.

The other project will be the chrome-neo app, which will be a new version of the chrome-neo chrome extension I made for college using angular.js.
This new version will probably also rely on firebase, and provide more features than the current version.

Keep learning, keep building :+1:
