---
title: Dogfight-game-remake-and-updates
description:
published: true
date: 2022-03-05T00:00:00.000Z
slugs:
  - Dogfight-game-remake-and-updates
tags:
  - angular
  - nx
  - storybook
---

# Dogfight-game-remake-and-updates

The last few weeks I've been focused primarily on 2 projects.

1. A [Dogfight game remake](https://github.com/bradtaniguchi/intercept-game) - a fun board-game remake that is based on the Milton Bradley Game Dogfight.
2. [nx-workspace-template](https://github.com/bradtaniguchi/nx-workspace-template) - a project that is for a github template that integrates most of common tooling I usually use.

## Dogfight game remake

I've been focusing on this project as its one of the few project where the scope is already defined, which should help keep scope creep down and hopefully let me finish this project. I'd compare it to my "bomb-defuse-utils" project, which I is one of the few truly "finished" projects.

I've been trying out a few more techniques with Nx, Storybook and TS to help build this project. For example, I've been using "branded types" essentially everywhere and seeing how far/useful it is to take such a concept. I've also been taking a TDD + functional approach to help "build-up" the codebase to handle the general game logic.

I'm just about to start on the actual rendering of the UI, so I can actually play something. I've been debating how to handle the actual rendering with Angular and think I have a
sensible rxjs/ngrx based solution that should scale well. I'll be aiming to getting the actual board rendering + drag and drop down before applying the actual logic I've already written.

## nx-workspace-template

For a project that is nothing more than setting up existing tooling, this project has taken up a large amount of my development free-time. I've been primarily tweaking
github-page support along with trying to integrate a "global storybook" build which would be deployed as part of an "internal-tools" deployment. So far its close, but storybook
as usually is being a huge pain.

# Whats next?

I've been trying to update the `nx-workspace-template` with the hope of getting it to a point where tools I don't always use like Storybook, all features of nx, and github-actions are all leveraged well enough to be flexible for future projects. I'm close, but I still am fiddling with it all the time.

However, I **really** need to get back to the flash-card-app I've languished over for **years** now and actually get it finished. Its possible I carry over some of the core logic to a new repo that uses the `nx-workspace-template`, or I just trudge on with what I have with it before. The plan being is to use that project as a refresher on using firebase for the intercept-game project, which will use Firebase for non-local multiplayer in the future (If I get that far that is!).

Finally, I hope to update this portfolio/blog site more. I'm hoping in the past few months Scully docs/capabilities have been improved to hopefully help with my development workflow.
As right now its somewhat annoying debugging a lot of features I thought would work, but just are a huge pain to deal with. I also might update the UI to move away from primer
to use either the usual Angular Material, or even maybe tailwindcss.

**Book Update**

I re-read ["The Phoenix Project"](https://www.amazon.com/dp/B078Y98RG8/) by Gene Kim. I read this book a few years back, and wanted to re-read it on my kindle so I can highlight anything I missed when I read it last time.

Reading the book a second time allowed me to focus on a few key parts that I wasn't to focus on the first time. Such as the "Three Ways" the eccentric character Erik brings up. I knew this was important the first time I read the book, but didn't focus on it as well.

Here's a quote I found explaining the three ways:

> The First Way helps us understand how to create fast flow of work as it moves from Development into IT Operations, because that’s what’s between the business and the customer. The Second Way shows us how to shorten and amplify feedback loops, so we can fix quality at the source and avoid rework. And the Third Way shows us how to create a culture that simultaneously fosters experimentation, learning from failure, and understanding that repetition and practice are the prerequisites to mastery

The other physical book I've started to at least skim is "A philosophy of Software Design" by John Outserhout. I've heard this was a good book that can replace/be-compared to the classic "Clean Code" by Robert C. Martin. I've been picking it up in my spare time to get my eyes of the screen every now and then. Its been an interesting read so far, but I've been taking it slow and steady.
