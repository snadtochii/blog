import { CreatePostComponent } from './create-post/create-post.component';
import { LoginComponent } from '../login/login.component';
import { CallbackComponent } from '../callback/callback.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { AdminGuard } from '../../auth/guards/admin.guard';

const routes: Routes = [
<<<<<<< HEAD:front-end/src/app/pages/admin/admin-routing.module.ts
  { path: 'create-post', component: CreatePostComponent }
=======
  { path: 'login', component: LoginComponent },
  { path: 'create-post', component: CreatePostComponent,}
  // canActivate: [AuthGuard]
>>>>>>> b1af95ce74b9b97d6f8b9f761074f42bb91a4c11:front-end/src/app/admin/admin-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
