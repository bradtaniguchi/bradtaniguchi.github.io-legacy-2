import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { GithubApiService } from '../../api/github/github-api.service';

@Component({
  selector: 'bt-about',
  templateUrl: './about.component.html',
  styles: [
    `
      @import '@primer/css/box/index.scss';
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  /**
   * Observable json for build stats
   */
  public buildStats$ = this.githubApi.getLatestRepoCommit().pipe(
    map((lastCommit) => ({
      // limit how much we show so its not info overflow
      shortSha: lastCommit.sha.slice(0, 7),
      url: lastCommit.html_url,
      date: lastCommit.commit.author?.date,
    }))
  );

  constructor(private githubApi: GithubApiService) {}
}
