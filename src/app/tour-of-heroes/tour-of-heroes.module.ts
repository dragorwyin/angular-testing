import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOfHeroesComponent } from './tour-of-heroes.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [TourOfHeroesComponent, HeroesComponent, HeroDetailComponent, MessagesComponent],
  exports: [
    TourOfHeroesComponent
  ],
  providers: [
    HeroService
  ]
})
export class TourOfHeroesModule { }
