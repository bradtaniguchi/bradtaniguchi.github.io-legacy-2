import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommonComponent } from './list-common.component';

@NgModule({
  declarations: [ListCommonComponent],
  imports: [CommonModule],
  exports: [ListCommonComponent],
})
export class ListCommonModule {}
