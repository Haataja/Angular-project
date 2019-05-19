import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface Blog {
  id: number;
  creationDate: string;
  post: string;
  title: string;
  author: string;
  likes: number;
  url?: number;
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
  API_URL = 'http://localhost:8080';
  API_BLOG_URL = this.API_URL + '/posts';
  API_COMMENT_URL = this.API_URL + '/comment';
  public authenticated = false;

  constructor(private http: HttpClient) {
  }

  getPosts(callback: (json: Blog[]) => void) {
    // console.log(this.API_BLOG_URL);
    this.http.get<Blog[]>(this.API_BLOG_URL).subscribe(json => callback(json));
  }

  blog(id: number, callback: (jsonObject) => void) {
    // console.log(this.API_BLOG_URL + '/' + id);
    this.http.get<Blog>(this.API_BLOG_URL + '/' + id).subscribe(json => callback(json));
  }

  sendComment(blogID: number, userInput: { nickname: string; comment: string }, callback: () => void) {
    // console.log(this.API_COMMENT_URL + '/add/' + blogID);
    this.http.post(this.API_COMMENT_URL + '/add/' + blogID,
      {commentField: userInput.comment, nickname: userInput.nickname},
      {observe: 'response'}).subscribe(response => {
      if (response.status === 200) {
        callback();
      }
    });
  }

  authenticate(credentials: { username, password }, callback) {
    // console.log(credentials);
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' +
        btoa(credentials.username + ':' + credentials.password)
    } : {});
    // console.log(headers);
    this.http.get(this.API_URL + '/user', {headers, observe: 'response'}).subscribe(response => {
      // console.log(response);
      this.authenticated = response.status === 200;
    });

  }

  logout() {
    // console.log(this.API_URL + '/logout');

    this.http.post(this.API_URL + '/logout', {});
    this.authenticated = false;
  }

  deleteBlog(id: number, callback: () => void) {
    // console.log(this.API_BLOG_URL + '/' + id);
    this.http.delete(this.API_BLOG_URL + '/delete/' + id).subscribe((json) => callback());
  }

  deleteComment(id: number, commentId: number, callback: () => void) {
    // console.log(this.API_COMMENT_URL + '/delete/' + id + '?commentId=' + commentId);
    this.http.delete(this.API_COMMENT_URL + '/delete/' + id + '?commentId=' + commentId).subscribe(callback);
  }

  sendBlog(userInput: { title: string, author: string, post: string, url?: string }, callback: (json) => void) {
    // console.log(this.API_BLOG_URL + '/add');
    if (userInput.url !== undefined) {
      const body = {author: userInput.author, title: userInput.title, post: userInput.post, url: userInput.url};
      this.http.post(this.API_BLOG_URL + '/add', body,
        {observe: 'response'}).subscribe(response => {
        if (response.status === 201) {
          callback(response);
        }
      });
    } else {
      const body = {author: userInput.author, title: userInput.title, post: userInput.post};
      this.http.post(this.API_BLOG_URL + '/add', body,
        {observe: 'response'}).subscribe(response => {
        if (response.status === 201) {
          callback(response);
        }
      });
    }
  }


  modifyBlog(userInput: { title: string, author: string, post: string, url?: string }, blogID, callback: () => void) {
    // console.log(this.API_BLOG_URL + '/posts/modify/' + blogID);
    // console.log(userInput);
    if (userInput.url !== undefined) {
      const body = {author: userInput.author, title: userInput.title, post: userInput.post, url: userInput.url};
      this.http.post(this.API_BLOG_URL + '/modify/' + blogID, body,
        {observe: 'response'}).subscribe(response => {
        if (response.status === 200) {
          callback();
        }
      });
    } else {
      const body = {author: userInput.author, title: userInput.title, post: userInput.post};
      this.http.post(this.API_BLOG_URL + '/modify/' + blogID, body,
        {observe: 'response'}).subscribe(response => {
        if (response.status === 200) {
          callback();
        }
      });
    }
  }

  like(blogID: number, callback: () => void) {
    this.http.get(this.API_BLOG_URL + '/like/' + blogID, {observe: 'response'}).subscribe(response => {
      if (response.status === 200) {
        callback();
      }
    });
  }

  unlike(blogID: number, callback: () => void) {
    this.http.get(this.API_BLOG_URL + '/unlike/' + blogID, {observe: 'response'}).subscribe(response => {
      if (response.status === 200) {
        callback();
      }
    });
  }
}
