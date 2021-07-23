import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListCommonComponent } from './list-common.component';

@NgModule({
  declarations: [ListCommonComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListCommonComponent],
})
export class ListCommonModule {}
