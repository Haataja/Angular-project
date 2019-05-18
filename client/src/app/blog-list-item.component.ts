import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Blog, BlogService} from './blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-list-item',
  template: `
    <li>
      <h2>{{blog.title}}</h2>
      <h3>Posted on {{blog.creationDate}} by {{blog.author}}</h3>
      <div *ngIf="blog.url !== null">
        <img src="{{blog.url}}" alt="image to the post"/>
      </div>
      <p>{{blog.post.substr(0,125)}}...</p>
      <button mat-raised-button (click)="toDetails()">Read more</button>
      <button mat-raised-button color="warn" *ngIf="this.blogService.authenticated" (click)="deleteBlog()">Delete</button>
      <mat-divider></mat-divider>
    </li>`,
  styles: [`h2, h3 {text-align: center} button {margin-left: 20px; margin-bottom: 10px} img{max-width: 25%}
            li {text-align: center}`]
})
export class BlogListItemComponent {
  @Input() blog: Blog;
  @Output() deleteClicked = new EventEmitter<string>();

  constructor(private router: Router, private blogService: BlogService) {
  }

  toDetails() {
    this.router.navigate(['', this.blog.id]);
  }

  deleteBlog() {
    this.blogService.deleteBlog(this.blog.id, () => {
      this.deleteClicked.emit('update');
    });
  }
}
