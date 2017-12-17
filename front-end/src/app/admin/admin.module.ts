import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MdModule } from '../shared/md.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { NewCategoryDialogComponent } from './create-post/new-category-dialog/new-category-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MdModule,
  ],
  entryComponents: [
    NewCategoryDialogComponent
  ],
  declarations: [
    CreatePostComponent,
    NewCategoryDialogComponent,
  ],
  providers: []
})
export class AdminModule { }
