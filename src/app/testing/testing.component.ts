import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { cent } from '../shared/decorators/cent';
import Prices from '../prices';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  url = environment.url;

  centsMethod = 0;

  @cent
  centsProperty = 300;

  constructor() { }

  ngOnInit() {
    const prices = new Prices();
    this.centsMethod = prices.sum(3000, 5000);
  }

}
