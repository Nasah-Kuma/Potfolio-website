import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostDetailComponent } from './components/blog-post-detail/blog-post-detail.component';
import { BlogPostSummaryComponent } from './components/blog-post-summary/blog-post-summary.component';
import { BlogMainComponent } from './pages/blog-main/blog-main.component';


@NgModule({
  declarations: [
    BlogPostDetailComponent,
    BlogPostSummaryComponent,
    BlogMainComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
