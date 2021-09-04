import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'bt-webapps',
  templateUrl: './webapps.component.html',
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebappsComponent {
  public current$ = this.routes.getCurrent();
  constructor(private routes: ScullyRoutesService) {}
}
