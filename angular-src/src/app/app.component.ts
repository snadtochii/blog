import { Component, ViewChild, ElementRef } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  themeClass

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.className = 'indigo-theme';
  }
}

