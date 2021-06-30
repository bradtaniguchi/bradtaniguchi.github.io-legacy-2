import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentWrapperModule } from '../../core/content-wrapper/content-wrapper.module';
import { WebappsListRoutingModule } from './webapps-list-routing.module';
import { WebappsListComponent } from './webapps-list.component';

@NgModule({
  declarations: [WebappsListComponent],
  imports: [CommonModule, WebappsListRoutingModule, ContentWrapperModule],
})
export class WebappsListModule {}
