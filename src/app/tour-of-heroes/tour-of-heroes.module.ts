import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOfHeroesComponent } from './tour-of-heroes.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './services/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { TourOfHeroesRoutingModule } from './/tour-of-heroes-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TourOfHeroesRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  declarations: [
    TourOfHeroesComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  exports: [
    TourOfHeroesComponent,
  ],
  providers: [
    HeroService
  ]
})
export class TourOfHeroesModule { }
