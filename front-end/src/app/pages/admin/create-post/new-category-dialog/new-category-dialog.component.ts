import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../../../core/services/posts';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { CategoryModel } from '../../../../shared/models/category.model';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-new-category-dialog',
  templateUrl: './new-category-dialog.component.html',
  styleUrls: ['./new-category-dialog.component.css']
})
export class NewCategoryDialogComponent {
  private unsubscribe$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  categoryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createCategory(formValue: CategoryModel) {
    console.log(formValue);
    this.categoryService.createCategory(formValue).takeUntil(this.unsubscribe$).subscribe(console.log);
  }
}
