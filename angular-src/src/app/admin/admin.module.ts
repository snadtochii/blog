import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MdModule } from '../shared/md.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,    
    MdModule
  ],
  declarations: [LoginComponent, CreatePostComponent, AddCategoryComponent]
})
export class AdminModule { }
