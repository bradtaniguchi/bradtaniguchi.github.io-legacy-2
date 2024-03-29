import { Injectable } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

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
        (route) => route.published && route.route.startsWith('/project')
      )
    )
  );

  public availableSnippetsRoutes$ = this.routes.available$.pipe(
    map((routes) =>
      routes.filter(
        (route) => route.published && route.route.startsWith('/snippet')
      )
    )
  );

  public availableWebappRoutes$ = this.routes.available$.pipe(
    map((routes) =>
      routes.filter(
        // **note** this is different than the other routes, and is made simpler.
        (route) => route.published && route.route.startsWith('/apps')
      )
    )
  );
  constructor(private routes: ScullyRoutesService) {}
}
