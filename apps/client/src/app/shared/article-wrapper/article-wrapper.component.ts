import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'bt-article-wrapper',
  templateUrl: './article-wrapper.component.html',
  styles: [
    `
      @import '@primer/css/box/index.scss';
      @import '@primer/css/labels/index.scss';
      @import '@primer/css/utilities/layout.scss';
    `,
  ],
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
