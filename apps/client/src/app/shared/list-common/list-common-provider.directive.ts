import { Directive } from '@angular/core';

/**
 * This directive is used as an interface with the common state service, and
 * provide the calculated logic. Generally this directive wraps
 * the data being provided from the list-common.store.
 */
@Directive({
  selector: '[btListCommonProvider]',
})
export class ListCommonProviderDirective {}
