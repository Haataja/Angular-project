import {Component, Input, OnInit} from '@angular/core';
import {Blog, BlogService} from './blog.service';

@Component({
  selector: 'comment-list',
  template: `<ul>
    <div *ngFor="let comment of comments">
      <mat-divider></mat-divider>
      <h4>{{comment.nickname}}</h4>
      <span>{{comment.dateTime | date}}</span>
      <p>{{comment.commentField}}</p>
    </div>
  </ul>`,
  styles: [`ul{list-style-type: none}`]
})
export class CommentListComponent {
  @Input() comments: Comment[];
}
