import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { HttpClient } from '@angular/common/http';
import {
  CompletedChallengeResponse,
  User as CodwarsUser,
} from 'codewars-node-api';

@Injectable({
  providedIn: 'root',
})
export class CodewarsApiService {
  constructor(
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  /**
   * Returns the list of completed challenges completed by the given user.
   *
   * @see https://dev.codewars.com/#list-completed-challenges
   */
  public getCompletedChallenges(user: string) {
    return this.transferState.useScullyTransferState(
      'codwarsCompletedChallenges',
      this.http.get<CompletedChallengeResponse>(
        `/api/v1/users/${user}/completed-challenges`
      )
    );
  }

  /**
   * Returns the user for the given username
   *
   * @see https://dev.codewars.com/#get-user
   */
  public getUser(user: string) {
    return this.transferState.useScullyTransferState(
      'codewarsUser',
      this.http.get<CodwarsUser>(`/api/v1/users/${user}`)
    );
  }
}
