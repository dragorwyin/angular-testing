import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOfHeroesComponent } from './tour-of-heroes.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [TourOfHeroesComponent, HeroesComponent],
  exports: [
    TourOfHeroesComponent
  ]
})
export class TourOfHeroesModule { }
