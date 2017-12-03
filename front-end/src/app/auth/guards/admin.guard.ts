import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../core/services/auth/index';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAdmin) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
