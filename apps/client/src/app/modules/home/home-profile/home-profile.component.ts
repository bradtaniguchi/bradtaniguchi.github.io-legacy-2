import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubUserLoaderService } from '../../../core/github-user-loader.service';

@Component({
  selector: 'bt-home-profile',
  templateUrl: './home-profile.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProfileComponent {
  /**
   * The user loaded from the static assets git-info json
   */
  public user$ = this.githubUserLoader.getUser();

  constructor(private githubUserLoader: GithubUserLoaderService) {}
}
