import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOfHeroesComponent } from './tour-of-heroes.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule,
  ],
  declarations: [
    TourOfHeroesComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  exports: [
    TourOfHeroesComponent,
  ],
  providers: [
    HeroService
  ]
})
export class TourOfHeroesModule { }
