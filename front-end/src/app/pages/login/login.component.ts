import { AuthService } from './../../core/services/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemingService } from './../../core/services/common';
import { Credentials } from '../../shared/models';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  user: Credentials;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

  login() {
    this.authService.login();
  }
}
