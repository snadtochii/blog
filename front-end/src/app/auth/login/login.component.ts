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
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }
}
