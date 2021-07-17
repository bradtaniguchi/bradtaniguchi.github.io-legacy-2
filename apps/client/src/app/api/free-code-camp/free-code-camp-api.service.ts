import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { FREE_CODE_CAMP_USER_INJECTION_TOKEN } from './free-code-camp-user.injection-token';
import { FreeCodeCampUserResponse } from './free-code-camp-user.response';

@Injectable({
  providedIn: 'root',
})
export class FreeCodeCampApiService {
  constructor(
    @Inject(FREE_CODE_CAMP_USER_INJECTION_TOKEN)
    private freeCodeCampUser: string,
    private http: HttpClient,
    private transferState: TransferStateService
  ) {}

  /**
   * Returns the public user information for the given
   * freeCodeCamp username.
   */
  public getUser() {
    return this.transferState.useScullyTransferState(
      'githubUser',
      this.http.get<FreeCodeCampUserResponse>(
        `https://api.github.com/users/${this.freeCodeCampUser}`
      )
    );
  }
}
