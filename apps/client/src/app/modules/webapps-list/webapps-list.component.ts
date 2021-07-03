import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StaticService } from '../../core/static.service';

@Component({
  selector: 'bt-webapps-list',
  templateUrl: './webapps-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebappsListComponent {
  public availableWebappRoutes$ = this.staticService.availableWebappRoutes$;
  constructor(private staticService: StaticService) {}
}
