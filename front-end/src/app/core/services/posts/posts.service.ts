import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { PostModel } from '../../../shared/models';
import { ResponseModel } from '../../../shared/models';

@Injectable()
export class PostsService {
  private postUrl = environment.api.posts.posts;
  private get authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  constructor(private http: HttpClient) { }

  getPosts(query): Observable<any> {

    const headers = new HttpHeaders().set('Authorization', this.authHeader);
    return this.http.get(this.postUrl, {headers: headers});
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
