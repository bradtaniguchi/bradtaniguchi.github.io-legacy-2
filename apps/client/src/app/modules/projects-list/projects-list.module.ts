import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentWrapperModule } from '../../core/content-wrapper/content-wrapper.module';
import { ProjectsListRoutingModule } from './projects-list-routing.module';
import { ProjectsListComponent } from './projects-list.component';

@NgModule({
  declarations: [ProjectsListComponent],
  imports: [CommonModule, ProjectsListRoutingModule, ContentWrapperModule],
})
export class ProjectsListModule {}
