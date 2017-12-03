import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewCategoryDialogComponent } from './new-category-dialog/new-category-dialog.component';
import { CategoryService } from '../../../core/services/posts/index';
import { CategoryModel } from '../../../shared/models/category.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  private unsubscribe$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  postForm: FormGroup;
  categories: CategoryModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategories();
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategories().takeUntil(this.unsubscribe$).subscribe((res: any) => {
      console.log(res);

      if (res.success) {
        this.categories = <CategoryModel[]>res.data.categories;
      } else {
        console.log(res);
      }
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(NewCategoryDialogComponent, {
      width: '400px',
      data: { name: 'Додати нову категорію' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
