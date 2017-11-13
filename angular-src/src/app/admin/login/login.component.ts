import { Component, OnInit } from '@angular/core';
import { ThemingService } from './../../shared/services/theming.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  themes;
  selectedTheme;

  constructor(private themingService: ThemingService) { }

  ngOnInit() {
    this.themingService.getThemes().subscribe(themes => this.themes = themes);
    this.themingService.theme$.subscribe(theme => {
      this.selectedTheme = theme;
    });
  }

  changeTheme() {
    console.log(this.selectedTheme, this.themes);
    
    this.themingService.setTheme(this.selectedTheme);
    console.log(this.selectedTheme, this.themes);
  }
}
