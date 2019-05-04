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
import {MatGridListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BlogComponent} from './blog.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    BlogListComponent,
    BlogListItemComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
