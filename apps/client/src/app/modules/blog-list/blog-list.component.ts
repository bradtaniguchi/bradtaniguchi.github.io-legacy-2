import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'bt-blog-list',
  templateUrl: './blog-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListComponent {
  /**
   * List of scully routes available
   */
  public routesAvailable$ = this.routes.available$;
  constructor(private routes: ScullyRoutesService) {}
}
