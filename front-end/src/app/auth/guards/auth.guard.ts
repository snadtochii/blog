import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../core/services/auth';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService) {
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.tokenValid) {
        return true;
      } else {
        this.authService.login(route.path);
        return false;
      }
  }
}
