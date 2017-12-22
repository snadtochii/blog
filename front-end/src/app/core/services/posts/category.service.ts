import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { CategoryModel } from '../../../shared/models/category.model';
import { ResponseModel } from '../../../shared/models';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { AuthService } from '../auth';

@Injectable()
export class CategoryService {

  private categoryUrl = environment.api.posts.categories;
  private get authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllCategories(): Observable<ResponseModel<CategoryModel[]>> {
    const headers = new HttpHeaders().set('Authorization', this.authHeader);
    return <Observable<ResponseModel<CategoryModel[]>>>this.http.get(this.categoryUrl, { headers: headers });
  }

  getCategoryById(id): Observable<ResponseModel<CategoryModel>> {
    const headers = new HttpHeaders().set('Authorization', this.authHeader);
    return <Observable<ResponseModel<CategoryModel>>>this.http.get(this.categoryUrl + '/' + id, { headers: headers });
  }

  createCategory(category: CategoryModel): Observable<ResponseModel<any>> {
    const headers = new HttpHeaders().set('Authorization', this.authHeader);
    return <Observable<ResponseModel<any>>>this.http.post(this.categoryUrl, category, { headers: headers });
  }

  deleteCategory(id): Observable<ResponseModel<any>> {
    const headers = new HttpHeaders().set('Authorization', this.authHeader);
    return <Observable<ResponseModel<any>>>this.http.delete(this.categoryUrl + '/' + id, { headers: headers });
  }
  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.authService.login();
    }
    return Observable.throw(errorMsg);
  }
}
