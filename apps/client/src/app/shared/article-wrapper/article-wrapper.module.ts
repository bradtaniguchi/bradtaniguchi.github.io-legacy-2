import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleWrapperComponent } from './article-wrapper.component';



@NgModule({
  declarations: [
    ArticleWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleWrapperComponent
  ]
})
export class ArticleWrapperModule { }
