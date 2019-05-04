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
  dateTime: string;
  nickname: string;
}

@Injectable()
export class BlogService {
  API_URL = 'http://localhost:8080/posts';
  API_COMMENT_URL = 'http://localhost:8080/comment';

  constructor(private http: HttpClient) {
  }

  getPosts(callback: (json) => void) {
    console.log(this.API_URL);
    this.http.get<Blog>(this.API_URL).subscribe(json => callback(json));
  }

  blog(id: number, callback: (jsonObject) => void) {
    this.http.get<Blog>(this.API_URL + '/' + id).subscribe(json => callback(json));
  }

  sendComment(blogID: number, userInput: { nickname: string; comment: string }, callback: () => void) {
    this.http.post(this.API_COMMENT_URL + '/' + blogID,
      {commentField: userInput.comment, nickname: userInput.nickname},
      {observe: 'response'}).subscribe(response => {
      if (response.status === 200) {
        callback();
      }
    });
  }
}
