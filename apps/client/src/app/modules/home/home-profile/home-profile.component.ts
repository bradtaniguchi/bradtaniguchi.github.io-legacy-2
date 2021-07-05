import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  GithubUser,
  GithubUserLoaderService,
} from '../../../core/github-user-loader.service';

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
  public user$: Promise<GithubUser> = this.githubUserLoader.getUser();

  constructor(private githubUserLoader: GithubUserLoaderService) {}
}
