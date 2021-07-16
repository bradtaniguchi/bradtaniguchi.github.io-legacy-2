import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RestEndpointMethodTypes } from '@octokit/rest';
import { TransferStateService } from '@scullyio/ng-lib';
import { GITHUB_API_USER_INJECTION_TOKEN } from './github-api-user-injection-token';

export type ListForUserResponse = RestEndpointMethodTypes['gists']['listForUser']['response']['data'];

export type GetByUsernameResponse = RestEndpointMethodTypes['users']['getByUsername']['response']['data'];

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  constructor(
    @Inject(GITHUB_API_USER_INJECTION_TOKEN) private githubUser: string,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  /**
   * Returns the public gists for the given user
   *
   * @see https://docs.github.com/en/rest/reference/gists#list-gists-for-a-user
   */
  public getPublicGists() {
    return this.transferState.useScullyTransferState(
      'githubGists',
      this.http.get<ListForUserResponse>(
        `https://api.github.com/users/${this.githubUser}/gists`
      )
    );
  }

  /**
   * Returns the public user information for the given username
   *
   * @see https://docs.github.com/en/rest/reference/users#get-a-user
   */
  public getUser() {
    return this.transferState.useScullyTransferState(
      'githubUser',
      this.http.get<GetByUsernameResponse>(
        `https://api.github.com/users/${this.githubUser}`
      )
    );
  }
}
