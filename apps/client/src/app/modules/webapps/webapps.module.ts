import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ContentWrapperModule } from '../../core/content-wrapper/content-wrapper.module';
import { ArticleWrapperModule } from '../../shared/article-wrapper/article-wrapper.module';
import { WebappsRoutingModule } from './webapps-routing.module';
import { WebappsComponent } from './webapps.component';

@NgModule({
  declarations: [WebappsComponent],
  imports: [
    CommonModule,
    WebappsRoutingModule,
    ScullyLibModule,
    ContentWrapperModule,
    ArticleWrapperModule,
  ],
})
export class WebappsModule {}
