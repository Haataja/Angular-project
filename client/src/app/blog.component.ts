import {Component, OnInit} from '@angular/core';
import {Blog, BlogService} from './blog.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BlogAddDialogComponent} from './blog.add.dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-blog',
  template: `
    <button mat-raised-button *ngIf="this.service.authenticated" (click)="openModifyDialog()">Modify</button>
    <div *ngIf="isDefined">
      <div class="head">
        <h1>{{blog.title}}</h1>
        <span>Posted on {{blog.creationDate | date}} by {{blog.author}}</span>
        <div *ngIf="blog.url !== null"><img src="{{blog.url}}" alt="image to the post"/></div>
      </div>
      <div class="text">
        <span *ngFor="let para of paragraphs">{{para}} <br/></span>
      </div>
      <app-like-item [likes]="blog.likes" [blogID]="blog.id" (likeClicked)="this.refresh()"></app-like-item>
      <mat-divider></mat-divider>
      <div *ngIf="blog.commentList.length !== 0">
        <comment-list (deleteClicked)="this.refresh()" [id]="blog.id" [comments]="blog.commentList"></comment-list>
      </div>
      <div *ngIf="blog.commentList.length === 0" class="be-first">
        <span>Be first to comment</span>
      </div>
      <app-comment [blogID]="blog.id" (sendClicked)="this.refresh()"></app-comment>
    </div>
  `,
  styles: [`img {max-width: 100%} .head {text-align: center} .text {margin-left: 20px; margin-bottom: 30px} .be-first{text-align: right}`]
})
export class BlogComponent implements OnInit {
  isDefined = false;
  blog: Blog;
  id: number;
  paragraphs: string[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: BlogService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      // console.log(id);
      this.service.blog(this.id, jsonObject => {
        console.log(jsonObject);
        this.blog = jsonObject;
        this.paragraphs = this.blog.post.split('\n');
        this.isDefined = true;
      });
    });
  }

  refresh() {
    this.service.blog(this.id, jsonObject => {
      // console.log(jsonObject);
      this.blog = jsonObject;
      this.paragraphs = this.blog.post.split('\n');
      this.isDefined = true;
    });
  }

  openModifyDialog() {
    const dialogRef = this.dialog.open(BlogAddDialogComponent, {
      width: '500px',
      data: {title: this.blog.title, author: this.blog.author, post: this.blog.post, url: this.blog.url}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('The add dialog was closed');
        this.blog.author = result.author;
        this.blog.title = result.title;
        this.blog.post = result.post;
        if (result.url !== undefined) {
          this.blog.url = result.url;
        }
        this.service.modifyBlog(result, this.blog.id, () => this.refresh());
      }
    });
  }
}
