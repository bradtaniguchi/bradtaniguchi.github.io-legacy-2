import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

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
    map((routes) => routes.filter((route) => route.project))
  );
  constructor(private routes: ScullyRoutesService) {}
}
