import {Component, OnInit} from '@angular/core';
import {Blog, BlogService} from './blog.service';

@Component({
  selector: 'app-blog-list',
  template: `<ul>
    <app-blog-list-item *ngFor="let item of blogs" [blog]="item" (deleteClicked)="this.refresh()"></app-blog-list-item>
  </ul>`,
  styles: [`ul{list-style-type: none}`]
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];

  constructor(private service: BlogService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.service.getPosts((j) => this.blogs = j);
  }
}
