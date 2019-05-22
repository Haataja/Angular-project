import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavBarComponent} from './nav-bar.component';
import {AboutComponent} from './about.component';
import {BlogService} from './blog/blog.service';
import {HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule, MatGridListModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginDialogComponent} from './login.dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {SearchComponent} from './search.component';
import {BlogModule} from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    LoginDialogComponent,
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
    ReactiveFormsModule,
    BlogModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {
}
