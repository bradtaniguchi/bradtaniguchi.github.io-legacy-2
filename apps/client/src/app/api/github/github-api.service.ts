import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RestEndpointMethodTypes } from '@octokit/rest';
import { TransferStateService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { GITHUB_API_REPO_INJECTION_TOKEN } from './github-api-repo-injection-token';
import { GITHUB_API_USER_INJECTION_TOKEN } from './github-api-user-injection-token';

export type ListForUserResponse =
  RestEndpointMethodTypes['gists']['listForUser']['response']['data'];

export type GetByUsernameResponse =
  RestEndpointMethodTypes['users']['getByUsername']['response']['data'];

export type GetLatestCommitsResponse =
  RestEndpointMethodTypes['repos']['getCommit']['response']['data'][];

export type GetGithubGist =
  RestEndpointMethodTypes['gists']['get']['response']['data'];
@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  constructor(
    @Inject(GITHUB_API_USER_INJECTION_TOKEN) private githubUser: string,
    @Inject(GITHUB_API_REPO_INJECTION_TOKEN) private githubRepo: string,
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

  /**
   * Returns the last commit information for the current project, use "last" param to get just the last commit
   */
  public getRepoCommits() {
    return this.transferState.useScullyTransferState(
      'githubRepoCommits',
      this.http.get<GetLatestCommitsResponse>(
        `https://api.github.com/repos/${this.githubUser}/${this.githubRepo}/commits`,
        {
          // only get the last 5 commits, no need for more
          params: new HttpParams().append('per_page', 5),
        }
      )
    );
  }

  public getLatestRepoCommit() {
    return this.getRepoCommits().pipe(map(([commit]) => commit));
  }

  public getGithubGist(gistId: string) {
    return this.transferState.useScullyTransferState(
      `githubGists-${gistId}`,
      this.http.get<GetGithubGist>(
        `https://api.github.com/repos/${this.githubUser}/gists/${gistId}`,
        {
          headers: new HttpHeaders().set('User-Agent', 'request'),
        }
      )
    );
  }
}
