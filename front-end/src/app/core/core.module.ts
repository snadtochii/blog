import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemingService } from './services/common';
import { AuthService } from './services/auth';
import { CategoryService } from './services/posts';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { PostsService } from './services/posts';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ThemingService, AuthService, CategoryService, PostsService, AuthGuard, AdminGuard]
})
export class CoreModule { }
