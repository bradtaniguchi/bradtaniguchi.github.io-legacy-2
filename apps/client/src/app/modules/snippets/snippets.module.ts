import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ContentWrapperModule } from '../../core/content-wrapper/content-wrapper.module';
import { ArticleWrapperModule } from '../../shared/article-wrapper/article-wrapper.module';
import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsComponent } from './snippets.component';


@NgModule({
  declarations: [SnippetsComponent],
  imports: [CommonModule, SnippetsRoutingModule, ScullyLibModule,
  ContentWrapperModule,
  ArticleWrapperModule],
})
export class SnippetsModule {}
