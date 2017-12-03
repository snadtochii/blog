import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemingService } from './services/common';
import { AuthService } from './services/auth';
import { CategoryService } from './services/posts';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ThemingService, AuthService, CategoryService, AuthGuard, AdminGuard]
})
export class CoreModule { }
