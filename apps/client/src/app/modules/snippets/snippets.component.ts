import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'bt-snippets',
  templateUrl: './snippets.component.html',
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetsComponent {
  public current$ = this.routes.getCurrent();
  constructor(private routes: ScullyRoutesService) {}
}
