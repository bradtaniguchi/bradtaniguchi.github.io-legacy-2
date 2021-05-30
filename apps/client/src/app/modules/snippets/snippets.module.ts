import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsComponent } from './snippets.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [SnippetsComponent],
  imports: [CommonModule, SnippetsRoutingModule, ScullyLibModule],
})
export class SnippetsModule {}
