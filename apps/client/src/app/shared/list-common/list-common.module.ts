import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OcticonModule } from '../../core/octicon/octicon.module';
import { ListCommonProviderDirective } from './list-common-provider.directive';
import { ListCommonComponent } from './list-common.component';

@NgModule({
  declarations: [ListCommonComponent, ListCommonProviderDirective],
  imports: [CommonModule, FormsModule, RouterModule, OcticonModule],
  exports: [ListCommonComponent, ListCommonProviderDirective],
})
export class ListCommonModule {}
