import { Directive } from '@angular/core';
import { ListCommonStoreService } from './list-common-store.service';

/**
 * This directive is used as an interface with the common state service, and
 * provide the calculated logic. Generally this directive wraps
 * the data being provided from the list-common.store.
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'listProvider',
  exportAs: 'listProvider',
})
export class ListCommonProviderDirective {
  constructor(public store: ListCommonStoreService) {}
}
