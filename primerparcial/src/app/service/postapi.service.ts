import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
@Injectable()
export class PostapiService {

  private api: string;
  constructor(private http: HttpClient) {
// tslint:disable-next-line:whitespace
    this.api='https://jsonplaceholder.typicode.com/posts';
  }
  getLista(): Observable<Post[]> {

    return this.http.get<Post[]>(this.api);
  }
}
