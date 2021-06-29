import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

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
  public availableBlogRoutes$ = this.routes.available$.pipe(
    map((routes) => routes.filter((route) => route.blog))
  );
  constructor(private routes: ScullyRoutesService) {}
}
