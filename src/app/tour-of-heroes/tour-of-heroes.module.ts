import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOfHeroesComponent } from './tour-of-heroes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TourOfHeroesComponent],
  exports: [
    TourOfHeroesComponent
  ]
})
export class TourOfHeroesModule { }
