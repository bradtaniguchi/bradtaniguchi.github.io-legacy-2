import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StaticService } from '../../core/static.service';

@Component({
  selector: 'bt-snippets-list',
  templateUrl: './snippets-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetsListComponent {
  public availableSnippetRoutes$ = this.staticService.availableSnippetsRoutes$;
  constructor(private staticService: StaticService) {}
}
