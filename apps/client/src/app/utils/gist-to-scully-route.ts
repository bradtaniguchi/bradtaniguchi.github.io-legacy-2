import { RestEndpointMethodTypes } from '@octokit/rest';
import { ScullyRoute } from '@scullyio/ng-lib';

type GetGithubGist =
  RestEndpointMethodTypes['gists']['get']['response']['data'];
/**
 * Funtion that takes in a gist object from github's api, and creates
 * a scully-route replacement, which can then be passed into
 * re-usable components.
 */
export const gistToScullyRoute = (gist: GetGithubGist): ScullyRoute => ({
  route: `/snippets/${gist?.id}`,
  title: gist?.description || '',
  description: '',
  published: true,
});
