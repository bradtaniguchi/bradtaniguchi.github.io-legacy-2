import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StaticService } from '../../core/static.service';

@Component({
  selector: 'bt-projects-list',
  templateUrl: './projects-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {
  public availableProjectsRoutes$ = this.staticService.availableProjectRoutes$;
  constructor(private staticService: StaticService) {}
}
