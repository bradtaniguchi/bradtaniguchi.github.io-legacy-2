import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { ScullyRoute } from '@scullyio/ng-lib';
import { filter, map } from 'rxjs/operators';
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
  public routeItems$ = this.select((state) => state.routeItems || []);

  // route-based selectors
  public selectedTags = this.route.queryParams.pipe(
    map((queryParamMap) => queryParamMap.get('selectedTags'))
  );
  public sortBy$ = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('sortBy'))
  );

  public sortDir$ = this.route.queryParams.pipe(
    map((queryParamMap) => queryParamMap.get('sortDir')),
    filter((sortDir) => ['asc', 'des'].includes(sortDir))
  );

  public search$ = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('search'))
  );

  // calculated selectors
  public availableTags$ = this.routeItems$.pipe(
    map((routeItems) =>
      (routeItems || [])
        .reduce((set, scullyRoute) => {
          ((scullyRoute.tags || []) as ScullyTag[]).forEach(set.add);
          return set;
        }, new Set<ScullyTag>())
        .values()
    )
  );

  public readonly init = this.updater((state, routeItems: ScullyRoute[]) => ({
    ...state,
    routeItems,
  }));

  // TODO: add other methods
  constructor(
    private route: ActivatedRoute,
    private logger: ClientLoggerService
  ) {
    super({ loading: true });
    // sanity testing, to make sure we get query params!
    this.route.queryParams.subscribe(this.logger.log);
  }
}
