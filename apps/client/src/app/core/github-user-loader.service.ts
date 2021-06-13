import { Injectable } from '@angular/core';
import { RestEndpointMethodTypes } from '@octokit/rest';

/**
 * The data returned
 */
export type GithubUser = RestEndpointMethodTypes['users']['getByUsername']['response']['data'];

/**
 * Service that abstracts away the default import call information
 * for the at-build-time asset loading.
 */
@Injectable({
  providedIn: 'root',
})
export class GithubUserLoaderService {
  private json$ = import('../../assets/github-user.json');
  /**
   * Returns the user-data saved by the get-githubuser script.
   * Should be saved within /assets/github-user.json
   */
  public getUser(): Promise<
    RestEndpointMethodTypes['users']['getByUsername']['response']['data']
  > {
    return this.json$;
  }
}
