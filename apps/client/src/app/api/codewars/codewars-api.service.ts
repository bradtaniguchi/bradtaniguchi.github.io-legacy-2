import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import {
  CompletedChallengeResponse,
  User as CodwarsUser,
} from 'codewars-node-api';
import { CODEWARS_API_USER_INJECTION_TOKEN } from './codewars-api-user-injection-token';

@Injectable({
  providedIn: 'root',
})
export class CodewarsApiService {
  constructor(
    @Inject(CODEWARS_API_USER_INJECTION_TOKEN) private codwarsUser: string,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  /**
   * Returns the list of completed challenges completed by the given user.
   *
   * @see https://dev.codewars.com/#list-completed-challenges
   */
  public getCompletedChallenges() {
    return this.transferState.useScullyTransferState(
      'codwarsCompletedChallenges',
      this.http.get<CompletedChallengeResponse>(
        `/api/v1/users/${this.codwarsUser}/completed-challenges`
      )
    );
  }

  /**
   * Returns the user for the given username
   *
   * @see https://dev.codewars.com/#get-user
   */
  public getUser() {
    return this.transferState.useScullyTransferState(
      'codewarsUser',
      this.http.get<CodwarsUser>(`/api/v1/users/${this.codwarsUser}`)
    );
  }
}
