import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { forkJoin, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { GithubApiService } from '../api/github/github-api.service';
import { getGistIdFromRoute } from '../utils/get-gist-id-from-route';
import { gistToScullyRoute } from '../utils/gist-to-scully-route';
import { isScullyRoute, isSnippetRoute } from '../utils/is-scully-route';
import { ClientLoggerService } from './client-logger/client-logger.service';

/**
 * The static service is used to manage static files provided through
 * the static folder, it provides an interface to all the
 * static files, but automatically filtered.
 */
@Injectable({
  providedIn: 'root',
})
export class StaticService {
  public availableBlogRoutes$ = this.routes.available$.pipe(
    map((routes) =>
      routes.filter(
        (route) => route.published && route.route.startsWith('/blog')
      )
    )
  );

  public availableProjectRoutes$ = this.routes.available$.pipe(
    map((routes) =>
      routes.filter(
        (route) => route.published && route.route.startsWith('/projects')
      )
    )
  );

  public availableSnippetsRoutes$ = this.routes.available$.pipe(
    tap((routes) => this.logger.log('all routes', routes)),
    map((routes) =>
      routes.filter((route) =>
        isScullyRoute(route)
          ? route.published && route.route.startsWith('/snippets')
          : true
      )
    ),
    tap((vals) =>
      this.logger.log('test with available-snippets-route 1', vals)
    ),
    mergeMap((snippetRoutes) =>
      forkJoin(
        snippetRoutes
          .map((route) =>
            isScullyRoute(route)
              ? of(route)
              : isSnippetRoute(route)
              ? this.githubApi.getGithubGist(getGistIdFromRoute(route)).pipe(
                  map((gist) => {
                    this.logger.log('test with gist from api', gist);
                    return gistToScullyRoute(gist);
                  })
                )
              : undefined
          )
          .filter((_) => !!_)
      )
    ),
    tap((vals) => this.logger.log('test with available-snippets-route 2', vals))
  );

  public availableWebappRoutes$ = this.routes.available$.pipe(
    map((routes) =>
      routes.filter(
        // **note** this is different than the other routes, and is made simpler.
        (route) => route.published && route.route.startsWith('/apps')
      )
    )
  );
  constructor(
    private githubApi: GithubApiService,
    private routes: ScullyRoutesService,
    private logger: ClientLoggerService
  ) {}
}
