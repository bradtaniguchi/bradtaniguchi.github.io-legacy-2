import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bt-snippets-list',
  templateUrl: './snippets-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetsListComponent {
  /**
   * List of scully routes available
   */
  public availableSnippetRoutes$ = this.routes.available$.pipe(
    map((routes) => routes.filter((route) => route.snippet))
  );
  constructor(private routes: ScullyRoutesService) {}
}
