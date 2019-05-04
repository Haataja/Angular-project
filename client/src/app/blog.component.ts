import {Component, OnInit} from '@angular/core';
import {Blog, BlogService} from './blog.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  template: `<div *ngIf="isDefined">
        <h1>{{blog.title}}</h1>
        <span>Posted on {{blog.creationDate | date}} by {{blog.author}}</span>
        <p>{{blog.post}}</p>
      </div>
   `,
  styles: [``]
})
export class BlogComponent implements OnInit {
  isDefined = false;
  blog: Blog;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: BlogService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      this.service.blog(id, jsonObject => {
        console.log(jsonObject);
        this.blog = jsonObject;
        this.isDefined = true;
      });
    });
  }
}
