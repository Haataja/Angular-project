import {Component, OnInit} from '@angular/core';
import {Blog, BlogService} from './blog.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  template: `
    <div *ngIf="isDefined">
      <h1>{{blog.title}}</h1>
      <span>Posted on {{blog.creationDate | date}} by {{blog.author}}</span>
      <div><span *ngFor="let para of paragraphs">{{para}} <br/></span></div>

      <div *ngIf="blog.commentList.length !== 0">
        <comment-list (deleteClicked)="this.refresh()" [id]="blog.id" [comments]="blog.commentList"></comment-list>
      </div>
      <div *ngIf="blog.commentList.length === 0">
        <mat-divider></mat-divider>
        <span>Be first to comment</span>
      </div>
      <app-comment [blogID]="blog.id" (sendClicked)="this.refresh()"></app-comment>
    </div>
  `,
  styles: [``]
})
export class BlogComponent implements OnInit {
  isDefined = false;
  blog: Blog;
  id: number;
  paragraphs: string[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: BlogService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      // console.log(id);
      this.service.blog(this.id, jsonObject => {
        // console.log(jsonObject);
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
}
