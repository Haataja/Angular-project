import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavBarComponent} from './nav-bar.component';
import {AboutComponent} from './about.component';
import {BlogService} from './blog.service';
import {HttpClientModule} from '@angular/common/http';
import {BlogListComponent} from './blog-list.component';
import {BlogListItemComponent} from './blog-list-item.component';
import {MatAutocompleteModule, MatGridListModule, MatIconModule, MatInputModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BlogComponent} from './blog.component';
import {MatButtonModule} from '@angular/material/button';
import {CommentListComponent} from './comment-list.component';
import {MatDividerModule} from '@angular/material/divider';
import {CommentComponent} from './comment.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginDialogComponent} from './login.dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BlogAddDialogComponent} from './blog.add.dialog.component';
import {LikeComponent} from './like.component';
import {SearchComponent} from "./search.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    BlogListComponent,
    BlogListItemComponent,
    BlogComponent,
    CommentListComponent,
    CommentComponent,
    LoginDialogComponent,
    BlogAddDialogComponent,
    LikeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
  entryComponents: [ LoginDialogComponent, BlogAddDialogComponent ]
})
export class AppModule { }
