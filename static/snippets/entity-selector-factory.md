---
title: entity-selector-factory
description: 'ngrx helper function sippet'
published: true
date: 2021-07-09T00:00:00.000Z
slugs:
  - entity-selector-factory
---

Below is a copy-paste example from another project. This `entitiySelectorFactory` can be used to create
a base set of selector functions in an ngrx based app.


```typescript
import {
  DbDocument,
  filterDbDocuments,
  getId,
  QueryUtil,
  SearchQuery,
  sortDbDocuments
} from '@common';
import { EntityState } from '@ngrx/entity';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { LoadingState } from './loading-state';
import { SearchQueryState } from './search-query-state';

/**
 * Factory function used to generate a number of useful
 * selectors for an entity+loading state.
 */
export const entitySelectorsFactory = <
  T,
  V extends DbDocument,
  U extends EntityState<V> & LoadingState
>({
  featureSelector
}: {
  featureSelector: MemoizedSelector<T, U>;
}) => {
  const queryUtil = new QueryUtil<V>();
  const entitiesSelector = createSelector(
    featureSelector,
    (state) => state.entities
  );
  const entitiesArraySelector = createSelector(entitiesSelector, (entities) =>
    Object.values(entities || {})
  );
  return {
    /**
     * The feature selector... for this feature
     */
    featureSelector,
    /**
     * Selector that returns the ids
     */
    idsSelector: createSelector(featureSelector, (state) => state.ids),
    /**
     * Selector that returns all the entities in the state
     */
    entitiesSelector,
    /**
     * Selector that returns if entities are loading in the state
     */
    loadingSelector: createSelector(featureSelector, (state) => state.loading),
    /**
     * Selector that returns all entities as an array.
     * Useful for filtering/resorting
     */
    entitiesArraySelector,
    /**
     * Selector that returns a selector factory that can be used to
     * get a single entity by its _id from the state
     */
    entitySelectorFactory: (entity: V | string) =>
      createSelector(entitiesSelector, (entities) => entities[getId(entity)]),
    /**
     * Selector factory that takes a search query, and returns a selector
     * from the entity-state from the given search-query.
     *
     * @returns returns a list of entities from the search-query.
     */
    entitySearchQueryFactory: (search: SearchQuery<V>) =>
      createSelector(entitiesArraySelector, (entities) =>
        queryUtil.filter({
          entities,
          search
        })
      ),
    /**
     * Selector factory that takes in a selector, that is applied with
     * the entitiesArray selector. Should be used with a selector that returns
     * a "search-query-state" interface. Otherwise use the `entitySearchQueryFactory`
     *
     * @param searchSelector the selector for the search state. This could
     * be different than the current feature state, or the same one.
     * @returns returns the list of entities from the applied search
     */
    entitySearchFactory: (
      searchSelector: MemoizedSelector<SearchQueryState<V>, SearchQuery<V>>
    ) =>
      createSelector(
        searchSelector,
        entitiesArraySelector,
        (search, entities) =>
          queryUtil.filter({
            entities,
            search
          })
      )
  };
};

```
