import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Blog, BlogService, Comments} from './blog.service';

@Component({
  selector: 'comment-list',
  template: `<ul>
    <div *ngFor="let comment of comments">
      <h4>{{comment.nickname}}</h4>
      <span>{{comment.dateTime | date}}</span>
      <p>{{comment.commentField}}</p>
      <button mat-raised-button color="warn" *ngIf="this.blogService.authenticated" (click)="deleteComment(comment.id)">Delete</button>
      <mat-divider></mat-divider>
    </div>
  </ul>`,
  styles: [`ul{list-style-type: none}`]
})
export class CommentListComponent {
  @Input() comments: Comments[];
  @Input() id: number;
  @Output() deleteClicked = new EventEmitter<string>();

  constructor(private blogService: BlogService) {
  }

  deleteComment(commentID: number) {
    this.blogService.deleteComment(this.id, commentID, () => {
      this.deleteClicked.emit('update');
    });
  }
}
