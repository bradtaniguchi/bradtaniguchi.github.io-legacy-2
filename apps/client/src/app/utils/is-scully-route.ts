import { ScullyRoute } from '@scullyio/ng-lib';
import { getGistIdFromRoute } from './get-gist-id-from-route';

/**
 * Utility function that will return if the given snippet is a ScullyRoute parsed
 * route, **or** if its a "json-loaded" one, currently used just for snippets
 */
export const isScullyRoute = (route: ScullyRoute): route is ScullyRoute =>
  !!(route.slugs || route.slug);

/**
 * Alternate varient of the `isScullyRoute`, used to type-check against
 * just "snippet" routes
 *
 */
export const isSnippetRoute = (
  route: ScullyRoute
): route is { route: string } =>
  !!route.route &&
  Object.values(route.route) &&
  route.route.includes('snippets') &&
  !!getGistIdFromRoute(route);
