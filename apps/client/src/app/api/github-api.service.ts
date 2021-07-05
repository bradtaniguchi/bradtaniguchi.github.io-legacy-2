import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestEndpointMethodTypes } from '@octokit/rest';
import { TransferStateService } from '@scullyio/ng-lib';

export type ListForUserResponse = RestEndpointMethodTypes['gists']['listForUser']['response'];

export type GetByUsernameResponse = RestEndpointMethodTypes['users']['getByUsername']['response'];

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  constructor(
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  /**
   * Returns the public gists for the given user
   *
   * @see https://docs.github.com/en/rest/reference/gists#list-gists-for-a-user
   */
  public getPublicGists(user: string) {
    return this.transferState.useScullyTransferState(
      'githubGists',
      this.http.get<ListForUserResponse>(
        `https://api.github.com/users/${user}/gists`
      )
    );
  }

  /**
   * Returns the public user information for the given username
   *
   * @see https://docs.github.com/en/rest/reference/users#get-a-user
   */
  public getUser(user: string) {
    return this.transferState.useScullyTransferState(
      'githubUser',
      this.http.get<GetByUsernameResponse>(
        `https://api.github.com/users/${user}`
      )
    );
  }
}
