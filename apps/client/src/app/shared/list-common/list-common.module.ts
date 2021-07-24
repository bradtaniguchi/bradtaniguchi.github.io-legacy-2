import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OcticonModule } from '../../core/octicon/octicon.module';
import { ListCommonComponent } from './list-common.component';

@NgModule({
  declarations: [ListCommonComponent],
  imports: [CommonModule, FormsModule, RouterModule, OcticonModule],
  exports: [ListCommonComponent],
})
export class ListCommonModule {}
