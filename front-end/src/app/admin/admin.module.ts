import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MdModule } from '../shared/md.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../shared/services/auth';
import { AuthGuard } from '../shared/guards/auth.guard';
import { NewCategoryDialogComponent } from './create-post/new-category-dialog/new-category-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MdModule,
  ],
  entryComponents: [
    NewCategoryDialogComponent
  ],
  declarations: [LoginComponent, CreatePostComponent, AddCategoryComponent, NewCategoryDialogComponent],
  providers: [AuthService, AuthGuard]
})
export class AdminModule { }
