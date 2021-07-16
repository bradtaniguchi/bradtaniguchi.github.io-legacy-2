import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubApiService } from '../../../api/github-api.service';

@Component({
  selector: 'bt-home-profile',
  templateUrl: './home-profile.component.html',
  styles: [
    `
      .avatar {
        width: 100%;
        max-width: 260px;
        height: auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProfileComponent {
  /**
   * The user loaded from the static assets git-info json
   */
  public user$ = this.githubApi.getUser();

  constructor(private githubApi: GithubApiService) {}
}
