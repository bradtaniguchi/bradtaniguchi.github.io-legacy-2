import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { ListCommonConfig } from './list-common-config';
import { LIST_COMMON_CONFIG_INJECTION_TOKEN } from './list-common-config-injection-token';

@Component({
  selector: 'bt-list-common',
  templateUrl: './list-common.component.html',
  styles: [
    // TODO: add https://primer.style/css/components/labels
    `
      @import '@primer/css/forms/index.scss';
      @import '@primer/css/box/index.scss';
      @import '@primer/css/links/index.scss';
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCommonComponent {
  /**
   * The list of route-items we can search and sort through.
   */
  @Input() routeItems?: ScullyRoute[];
  /**
   * The title to show at the top of th elist of route items
   */
  @Input() title?: string;
  /**
   * The search value we are to set as the default, should be available
   * from the route.
   */
  @Input() search?: string;
  /**
   * The event emitted when search changes.
   */
  @Output() searchChange = new EventEmitter();
  /**
   * The list of tags that have already been selected
   */
  // @Input() selectedTags?: ScullyTag[];
  /**
   * The list of tags that are available to select, should
   * be compiled from the list of routeItems.
   */
  // @Input() availableTags?: ScullyTag[];
  /**
   * The key to sort by, defaults to `date`
   */
  @Input() sortBy: keyof ScullyRoute = 'date';
  /**
   * The direction to sort by, defaults to `asc`
   * **note** might change default
   */
  @Input() sortDir: 'asc' | 'des' = 'asc';
  /**
   * The configuration for the list-component, can be used to override properties
   */
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('config') localConfig?: ListCommonConfig;

  /**
   * The calculated config from the local and global configs
   */
  public get config(): ListCommonConfig {
    return {
      ...this.globalConfig,
      ...this.localConfig,
    };
  }
  constructor(
    @Inject(LIST_COMMON_CONFIG_INJECTION_TOKEN)
    @Optional()
    public globalConfig?: ListCommonConfig
  ) {}
}
