import { Component, ViewChild, ElementRef } from '@angular/core';
import { ThemingService } from './shared/services/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private elRef: ElementRef,
    private themingService: ThemingService) {

    this.themingService.theme$.subscribe(theme => {
      if (theme) {
        this.elRef.nativeElement.className = theme.class;
      }
    });
    
  }
}

