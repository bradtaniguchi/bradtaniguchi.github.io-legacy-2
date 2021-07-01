import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ContentWrapperModule } from '../../core/content-wrapper/content-wrapper.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ScullyLibModule,
    ContentWrapperModule,
  ],
})
export class ProjectsModule {}
