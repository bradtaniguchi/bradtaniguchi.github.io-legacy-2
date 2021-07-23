import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { ScullyTag } from './scully-tag';

@Component({
  selector: 'bt-list-common',
  templateUrl: './list-common.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCommonComponent<
  RouteItem extends ScullyRoute & { date: string }
> {
  /**
   * The list of route-items we can search and sort through.
   */
  @Input() routeItems?: RouteItem[];
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
  @Input() selectedTags?: ScullyTag[];
  /**
   * The list of tags that are available to select, should
   * be compiled from the list of routeItems.
   */
  @Input() availableTags?: ScullyTag[];
  /**
   * The key to sort by, defaults to `date`
   */
  @Input() sortBy: keyof RouteItem = 'date';
  /**
   * The direction to sort by, defaults to `asc`
   * **note** might change default
   */
  @Input() sortDir: 'asc' | 'des' = 'asc';
}
