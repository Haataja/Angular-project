import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BlogListComponent} from './blog-list.component';
import {LikeComponent} from './like.component';
import {BlogListItemComponent} from './blog-list-item.component';
import {BlogComponent} from './blog.component';
import {BlogAddDialogComponent} from './blog.add.dialog.component';
import {CommentListComponent} from './comment-list.component';
import {CommentComponent} from './comment.component';
import {BlogService} from './blog.service';
import {BlogRoutingModule} from './blog-routing.module';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogListItemComponent,
    BlogComponent,
    LikeComponent,
    BlogAddDialogComponent,
    CommentListComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    BlogRoutingModule
  ],
  providers: [BlogService],
  entryComponents: [BlogAddDialogComponent]
})
export class BlogModule {
}
