import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OcticonModule } from '../../core/octicon/octicon.module';
import { ArticleWrapperComponent } from './article-wrapper.component';

@NgModule({
  declarations: [ArticleWrapperComponent],
  imports: [CommonModule, RouterModule, OcticonModule],
  exports: [ArticleWrapperComponent],
})
export class ArticleWrapperModule {}
