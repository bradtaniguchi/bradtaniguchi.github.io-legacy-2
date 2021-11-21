import { ScullyRoute } from '@scullyio/ng-lib';

/**
 * Utility function that will return if the given snippet is a ScullyRoute parsed
 * route, **or** if its a "json-loaded" one, currently used just for snippets
 */
export const isScullyRoute = (route: ScullyRoute): route is ScullyRoute =>
  !!(route.slugs || route.slug);
