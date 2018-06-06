import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import Prices from './prices';
import { cent } from './shared/decorators/cent';

///////// ----------------------------------------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  url = environment.url;

  centsMethod = 0;

  @cent
  centsProperty = 300;

  ngOnInit(): void {
    const prices = new Prices();
    this.centsMethod = prices.sum(3000, 5000);
  }
}

