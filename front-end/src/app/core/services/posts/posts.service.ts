import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PostModel } from '../../../shared/models';
import { ResponseModel } from '../../../shared/models';

@Injectable()
export class PostsService {
  private postUrl = environment.api.posts.posts;

  constructor(private http: HttpClient) { }

  getPosts(query): Observable<any> {
    return this.http.get(this.postUrl);
  }

  getPost(id): Observable<any> {
    const params = new HttpParams().set('id', id);

    return this.http.get(this.postUrl, { params: params });
  }

  createPost(post): Observable<any> {
    return this.http.post(this.postUrl, post);
  }

  editPost(post): Observable<any> {
    return this.http.put(this.postUrl, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(this.postUrl + '/' + id);
  }
}
