import { Component, ViewChild, ElementRef } from '@angular/core';
import { ThemingService } from './core/services/common';
import { AuthService } from './core/services/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private elRef: ElementRef,
    private themingService: ThemingService,
    private authService: AuthService) {

    authService.handleAuth();

    this.themingService.theme$.subscribe(theme => {
      if (theme) {
        this.elRef.nativeElement.className = theme.class;
      }
    });
  }
}

