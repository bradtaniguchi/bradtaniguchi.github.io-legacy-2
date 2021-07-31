import { ScullyRoute } from '@scullyio/ng-lib';

export interface ListCommonState {
  /**
   * If we are loading the data for this route, this
   * would only really happen when there is no data initially,
   * and when we are searching which could take a short moment.
   */
  loading?: boolean;
  /**
   * The list of route items we are to provided thru DI.
   */
  routeItems?: ScullyRoute[];
}
