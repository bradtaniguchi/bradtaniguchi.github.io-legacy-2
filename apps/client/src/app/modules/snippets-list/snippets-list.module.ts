import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentWrapperModule } from '../../core/content-wrapper/content-wrapper.module';
import { ListCommonModule } from '../../shared/list-common/list-common.module';
import { SnippetsListRoutingModule } from './snippets-list-routing.module';
import { SnippetsListComponent } from './snippets-list.component';

@NgModule({
  declarations: [SnippetsListComponent],
  imports: [
    CommonModule,
    SnippetsListRoutingModule,
    ContentWrapperModule,
    ListCommonModule,
  ],
})
export class SnippetsListModule {}
