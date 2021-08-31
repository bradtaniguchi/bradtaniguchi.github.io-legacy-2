import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'bt-article-wrapper',
  templateUrl: './article-wrapper.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleWrapperComponent {
  /**
   * The article we are to display, from
   * the scully route.
   *
   */
  @Input() route?: ScullyRoute;
}
