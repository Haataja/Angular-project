import {Component, Input, OnInit} from '@angular/core';
import {Blog, BlogService} from './blog.service';

@Component({
  selector: 'app-blog-list-item',
  template: `
    <li>
      <h2>{{blog.title}}</h2>
      <h3>Posted on {{blog.creationDate}} by {{blog.author}}</h3>
      <p>{{blog.post.substr(0,125)}}...</p>
      <a routerLink="blog/{{blog.id}}">Read more</a>
    </li>`,
  styles: [``]
})
export class BlogListItemComponent {
  @Input() blog: Blog;
}
