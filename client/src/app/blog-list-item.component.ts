import {Component, Input, OnInit} from '@angular/core';
import {Blog, BlogService} from './blog.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-list-item',
  template: `
    <li>
      <h2>{{blog.title}}</h2>
      <h3>Posted on {{blog.creationDate}} by {{blog.author}}</h3>
      <p>{{blog.post.substr(0,125)}}...</p>
      <button mat-raised-button (click)="toDetails()">Read more</button>
    </li>`,
  styles: [``]
})
export class BlogListItemComponent {
  @Input() blog: Blog;


  constructor(private router: Router) {
  }

  toDetails() {
    this.router.navigate(['', this.blog.id]);
  }
}
