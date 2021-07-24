import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentWrapperModule } from '../../core/content-wrapper/content-wrapper.module';
import { ListCommonModule } from '../../shared/list-common/list-common.module';
import { ProjectsListRoutingModule } from './projects-list-routing.module';
import { ProjectsListComponent } from './projects-list.component';

@NgModule({
  declarations: [ProjectsListComponent],
  imports: [
    CommonModule,
    ProjectsListRoutingModule,
    ContentWrapperModule,
    ListCommonModule,
  ],
})
export class ProjectsListModule {}
