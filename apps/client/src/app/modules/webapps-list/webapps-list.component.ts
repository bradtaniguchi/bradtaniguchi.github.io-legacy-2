import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bt-webapps-list',
  templateUrl: './webapps-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebappsListComponent {
  /**
   * List of scully routes available
   */
  public availableWebappRoutes$ = this.routes.available$.pipe(
    map((routes) => routes.filter((route) => route.webapp))
  );
  constructor(private routes: ScullyRoutesService) {}
}
