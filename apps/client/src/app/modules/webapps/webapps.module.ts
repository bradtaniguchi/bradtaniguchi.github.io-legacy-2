import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { WebappsRoutingModule } from './webapps-routing.module';
import { WebappsComponent } from './webapps.component';

@NgModule({
  declarations: [WebappsComponent],
  imports: [CommonModule, WebappsRoutingModule, ScullyLibModule],
})
export class WebappsModule {}
