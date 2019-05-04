import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Blog {
  id: number;
  creationDate: string;
  post: string;
  title: string;
  author: string;
  likes: number;
  commentList: Comments[];
}

export interface Comments {
  id: number;
  commentField: string;
  commentTitle: string;
  nickname: string;
}

@Injectable()
export class BlogService {
  API_URL = 'http://localhost:8080/posts';
  constructor(private http: HttpClient) {
  }

  getPosts(callback: (json) => void ) {
    console.log(this.API_URL);
    this.http.get<Blog>(this.API_URL).subscribe(json => callback(json));
  }

  blog(id: number, callback: (jsonObject) => void) {
    this.http.get<Blog>(this.API_URL + '/' + id).subscribe(json => callback(json));
  }
}
