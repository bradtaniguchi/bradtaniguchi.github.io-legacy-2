import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map, tap } from 'rxjs/operators';
import { ClientLoggerService } from '../../core/client-logger/client-logger.service';

@Component({
  selector: 'bt-projects-list',
  templateUrl: './projects-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {
  /**
   * List of scully routes available
   */
  public availableProjectsRoutes$ = this.routes.available$.pipe(
    tap((val) => this.clientLogger.log(val)),
    map((routes) => routes.filter((route) => route.project))
  );
  constructor(
    private routes: ScullyRoutesService,
    private clientLogger: ClientLoggerService
  ) {}
}
