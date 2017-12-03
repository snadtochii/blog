import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CategoryModel } from '../../../shared/models/category.model';

@Injectable()
export class CategoryService {

  private categoryUrl = environment.api.posts.categories;

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get(this.categoryUrl);
  }

  getCategoryById(id) {
    return this.http.get(this.categoryUrl + '/' + id);
  }

  createCategory(category: CategoryModel) {
    return this.http.post(this.categoryUrl, category);
  }

  deleteCategory(id) {
    return this.http.delete(this.categoryUrl + '/' + id);
  }

}
