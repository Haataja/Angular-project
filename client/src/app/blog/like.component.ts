import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Blog, BlogService} from './blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-like-item',
  template: `
    <button *ngIf="!liked" mat-mini-fab (click)="like()">♡</button>
    <button *ngIf="liked" mat-mini-fab color="warn" (click)="like()">♡</button>
    <span>Like this post.</span>
    <span *ngIf="likes === 0"> Be first to like this post!</span>
    <span *ngIf="likes !== 0"> This post has {{likes}} likes.</span>`,
  styles: [`span {
    margin-bottom: 30px
  }

  button {
    margin: 20px
  }`]
})
export class LikeComponent {
  @Input() likes: number;
  @Input() blogID: number;
  @Output() likeClicked = new EventEmitter<string>();
  liked: boolean;

  constructor(private blogService: BlogService) {
    this.liked = false;
  }


  like() {
    if (this.liked) {
      this.blogService.unlike(this.blogID, () => {
        this.likeClicked.emit('refresh');
        this.liked = false;
      });
    } else {
      this.blogService.like(this.blogID, () => {
        this.likeClicked.emit('refresh');
        this.liked = true;
      });
    }
  }
}
