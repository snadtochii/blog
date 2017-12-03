import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { ThemeModel } from '../../../shared/models';

@Injectable()
export class ThemingService {

  themes: ThemeModel[];
  theme: ThemeModel;
  private themeSub: BehaviorSubject<ThemeModel> = new BehaviorSubject<ThemeModel>(null);
  theme$ = this.themeSub.asObservable();

  constructor() {
    this.themes = environment.themes;
    this.getLocalTheme();
  }

  setTheme(theme) {
    this.themeSub.next(theme);
    this.saveLocalTheme(theme);
  }

  getLocalTheme() {
    this.theme = JSON.parse(localStorage.getItem('theme'));
    if (this.theme) {
      this.themeSub.next(this.theme);
    }
  }

  private saveLocalTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  getThemes(): Observable<ThemeModel[]> {
    return Observable.of(this.themes);
  }
}
