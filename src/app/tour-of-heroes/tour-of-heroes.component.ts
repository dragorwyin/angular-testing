import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tour-of-heroes',
  templateUrl: './tour-of-heroes.component.pug',
  styleUrls: ['./tour-of-heroes.component.scss']
})
export class TourOfHeroesComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
