import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogListComponent} from './blog/blog-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: BlogListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
