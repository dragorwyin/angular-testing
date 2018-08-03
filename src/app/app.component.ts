import { Component, OnInit, Inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular APP';

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  setLanguage() {
    document.querySelector('html').setAttribute('lang', this.locale);
  }

  ngOnInit(): void {
    this.setLanguage();
  }
}
