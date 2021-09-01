import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StaticService } from '../../core/static.service';
import { ListCommonStoreService } from '../../shared/list-common/list-common-store.service';

@Component({
  selector: 'bt-webapps-list',
  templateUrl: './webapps-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ListCommonStoreService],
})
export class WebappsListComponent {
  constructor(
    private staticService: StaticService,
    private store: ListCommonStoreService
  ) {
    this.store.init(this.staticService.availableWebappRoutes$);
  }
}
