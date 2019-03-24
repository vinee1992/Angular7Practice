import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBlogPostTileComponent } from './app-blog-post-tile/app-blog-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBlogPostTileComponent,
    BlogListComponent,
    PaginatorComponent,
    FormsDemoComponent,
    ReactiveFormsModule,
    NameEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
