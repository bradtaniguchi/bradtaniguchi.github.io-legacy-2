import { ScullyRoute } from '@scullyio/ng-lib';

/**
 * A Scully Tag is a branded-type used for strings provided from
 * different scully routes.
 */
export type ScullyTag = string & { readonly brand: unique symbol };

export const ScullyTag = (scullyTag: string): ScullyTag =>
  scullyTag as ScullyTag;

/**
 * Returns tags for the route, if there are any
 */
export const getScullyTags = (route: ScullyRoute): ScullyTag[] =>
  (route.tags || []).map(ScullyTag);
