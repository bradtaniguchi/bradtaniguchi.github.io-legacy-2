---
title: rxjs-retry-on-condition
description: 'rxjs retry operator'
published: true
date: 2021-07-20T00:00:00.000Z
slugs:
  - rxjs-retry-on-condition
---
Below is an rxjs operator function example I was given.  I might want to use it in the future.

```typescript
export const retryOnCondition =
  <T>(
    predicate: (val: T) => boolean,
    maxRetryAttempts: number,
    delayDuration: number,
    defaultValIfEmpty: T,
  ): MonoTypeOperatorFunction<T> =>
  (source$) =>
    source$.pipe(
      map((val) => {
        if (predicate(val)) throw val;

        return val;
      }),
      retryWhen((error$) => error$.pipe(take(maxRetryAttempts + 1), delay(delayDuration))),
      defaultIfEmpty(defaultValIfEmpty),
    );


const fetchEntityByPolling = (id: string) =>
  fetchEntity(id).pipe(retryOnCondition<Entity[]>(entityDoesNotMatchDesiredCriteria, 10, 5000, []));
```
