import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StaticService } from '../../core/static.service';

@Component({
  selector: 'bt-blog-list',
  templateUrl: './blog-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListComponent {
  public availableBlogRoutes$ = this.staticService.availableBlogRoutes$;
  constructor(private staticService: StaticService) {}
}
