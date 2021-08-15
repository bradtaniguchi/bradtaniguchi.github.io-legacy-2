import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentWrapperModule } from '../../core/content-wrapper/content-wrapper.module';
import { ListCommonModule } from '../../shared/list-common/list-common.module';
import { BlogListRoutingModule } from './blog-list-routing.module';
import { BlogListComponent } from './blog-list.component';

@NgModule({
  declarations: [BlogListComponent],
  imports: [
    CommonModule,
    BlogListRoutingModule,
    // child components
    ContentWrapperModule,
    ListCommonModule,
  ],
})
export class BlogListModule {}
