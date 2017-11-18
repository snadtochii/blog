import { AuthService } from './../../shared/services/auth';
import { Component, OnInit } from '@angular/core';
import { ThemingService } from './../../shared/services/common';
import { Credentials } from '../../shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Credentials;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(formValue) {
    this.user = new Credentials(formValue.email, formValue.password);

  }
}
