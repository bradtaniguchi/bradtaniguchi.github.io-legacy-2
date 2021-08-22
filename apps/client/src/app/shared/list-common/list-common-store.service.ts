import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { ScullyRoute } from '@scullyio/ng-lib';
import Fuse from 'fuse.js';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { ClientLoggerService } from '../../core/client-logger/client-logger.service';
import { ScullyTag } from '../../models/scully-tags';
import { ListCommonState } from './list-common.state';

/**
 * List common state service, used to manage the component level-state for the
 * list of scully generated items.
 *
 * This should be provided at the "container" level component.
 */
@Injectable()
export class ListCommonStoreService extends ComponentStore<ListCommonState> {
  // core selectors
  public loading$ = this.select((state) => !!state.loading);
  /**
   * The available route items
   *
   * **note** needs to be filtered from the below properties
   */
  public routeItems$ = this.select((state) => state.routeItems || []);

  // route-based selectors
  public selectedTags$ = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.getAll('selectedTags') as ScullyTag[])
  );
  public sortBy$ = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('sortBy'))
  );

  public sortDir$ = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('sortDir') || ''),
    filter((sortDir) => ['asc', 'des'].includes(sortDir))
  ) as Observable<'asc' | 'des'>;

  public search$ = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('search'))
  );

  // calculated selectors
  public availableTags$ = this.routeItems$.pipe(
    map((routeItems) =>
      Array.from(
        (routeItems || [])
          .reduce((set, scullyRoute) => {
            ((scullyRoute.tags || []) as ScullyTag[]).forEach((tag) =>
              set.add(tag)
            );
            return set;
          }, new Set<ScullyTag>())
          .values()
      )
    )
  );

  public readonly init = this.updater((state, routeItems: ScullyRoute[]) => ({
    ...state,
    routeItems,
    loading: false,
  }));

  /**
   * The list of filtered-items
   */
  public filteredItems$ = this.select(
    this.routeItems$,
    this.selectedTags$,
    this.sortBy$,
    this.sortDir$,
    this.search$,
    (items, tags, sortBy, sortDir, search) =>
      // TODO load fuse async
      new Fuse(
        tags && tags.length
          ? items.filter((item) =>
              tags.every((tag) => (item.tags || []).include(tag))
            )
          : items,
        {
          keys: ['title', 'description', 'slugs', 'tags'],
          sortFn: sortBy
            ? ({ item: a }, { item: b }) => {
                if (a[sortBy] < b[sortBy]) {
                  return sortDir === 'asc' ? 1 : -1;
                }
                if (a[sortBy] > b[sortBy]) {
                  return sortDir === 'asc' ? -1 : 1;
                }
                return 0;
              }
            : undefined,
        }
      )
        .search(search || '')
        .map(({ item }) => item)
  );

  // TODO: add other methods
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private logger: ClientLoggerService
  ) {
    super({ loading: true });
    // sanity testing, to make sure we get query params!
    this.route.queryParams.subscribe(this.logger.log);
  }

  public search(search: string) {
    return this.router.navigate(['./'], {
      queryParams: {
        search: search || undefined,
      },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }

  public selectedTags(tag: ScullyTag) {
    return this.selectedTags$.pipe(take(1)).subscribe((selectedTags) =>
      this.router.navigate(['./'], {
        queryParams: {
          selectedTags: selectedTags.includes(tag)
            ? selectedTags.filter((selectedTag) => selectedTag !== tag)
            : Array.from(new Set(selectedTags).add(tag).values()),
        },
        queryParamsHandling: 'merge',
        relativeTo: this.route,
      })
    );
  }

  public sortBy(sortBy: string | number) {
    return this.router.navigate(['./'], {
      queryParams: {
        sortBy,
      },
      queryParamsHandling: 'merge',
      relativeTo: this.route,
    });
  }
}
