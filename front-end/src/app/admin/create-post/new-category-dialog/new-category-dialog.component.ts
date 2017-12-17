import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../../../core/services/posts';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { CategoryModel, ResponseModel } from '../../../shared/models';
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

  createCategory(form: FormGroup) {
    this.categoryService.createCategory(form.value).takeUntil(this.unsubscribe$).subscribe((res: ResponseModel<any>) => {
      console.log(res);
      if (res.success) {
        form.reset();
      }
    });
  }
}
