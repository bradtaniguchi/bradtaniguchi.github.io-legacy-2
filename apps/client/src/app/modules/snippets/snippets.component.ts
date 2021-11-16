import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { GithubApiService } from '../../api/github/github-api.service';
import { ClientLoggerService } from '../../core/client-logger/client-logger.service';

@Component({
  selector: 'bt-snippets',
  templateUrl: './snippets.component.html',
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetsComponent {
  /**
   * The current snippet, could be a traditional scully-route, or a
   * JSON object with just the `/snippet/:id`.
   */
  public current$ = this.routes
    .getCurrent()
    .pipe(tap((val) => this.logger.log('test with snippet', val)));

  /**
   * If the current route is a "locally-defined one",
   * if it isn't, then we are actually loading a public gist.
   *
   * We currently just use the existence of a route slug as an indicator, otherwise
   * the only element is `id` within the route config.
   */
  public isLocal$ = this.current$.pipe(
    filter((_) => !!_),
    map(({ slugs }) => slugs)
  );

  /**
   * Returns the gist id from the string `/snippets/<gist-id>`
   * **note** this is somewhat dangerous, if there are query-params.
   * Maybe find a better more reliable way to parse the url?
   */
  public gistId$ = this.current$.pipe(
    filter((_) => !!_),
    map(({ route }) => route.split('/')),
    map((parts) => parts[parts.length - 1])
  );

  /**
   * The actual gist data.
   */
  public gist$ = this.gistId$.pipe(
    mergeMap((gistId) => this.githubApi.getGithubGist(gistId)),
    tap((vals) => this.logger.log('test with gist', vals))
  );
  constructor(
    private routes: ScullyRoutesService,
    private logger: ClientLoggerService,
    private githubApi: GithubApiService
  ) {}
}
