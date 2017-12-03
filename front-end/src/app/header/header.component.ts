import { Component, OnInit } from '@angular/core';
import { ThemingService } from '../core/services/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  themes;
  selectedTheme;

  constructor(private themingService: ThemingService) { }

  ngOnInit() {

    this.themingService.getThemes().subscribe(themes => this.themes = themes);
    this.themingService.theme$.subscribe(theme => this.selectedTheme = theme);
  }
  changeTheme() {
    this.themingService.setTheme(this.selectedTheme);
  }
}
