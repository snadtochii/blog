import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MdModule } from '../shared/md.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../shared/services/auth';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
<<<<<<< HEAD:front-end/src/app/admin/admin.module.ts
    // FormsModule,
    SharedModule,
=======
    FormsModule,    
>>>>>>> 534ff1011e4c1ba5e394e46d83a8d5683e5dd275:angular-src/src/app/admin/admin.module.ts
    MdModule
  ],
  declarations: [LoginComponent, CreatePostComponent, AddCategoryComponent],
  providers: [AuthService]
})
export class AdminModule { }
