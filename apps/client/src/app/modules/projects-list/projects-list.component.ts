import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StaticService } from '../../core/static.service';
import { ListCommonStoreService } from '../../shared/list-common/list-common-store.service';

@Component({
  selector: 'bt-projects-list',
  templateUrl: './projects-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {
  constructor(
    private staticService: StaticService,
    private store: ListCommonStoreService
  ) {
    this.store.init(this.staticService.availableProjectRoutes$);
  }
}
