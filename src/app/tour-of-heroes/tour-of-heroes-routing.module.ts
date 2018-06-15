import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TourOfHeroesComponent } from './tour-of-heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: 'tour-of-heroes',
    redirectTo: 'tour-of-heroes/dashboard',
  }, {
    path: 'tour-of-heroes',
    component: TourOfHeroesComponent,
    children: [
      {
        path: 'heroes',
        component: HeroesComponent,
      }, {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'details/:id',
        component: HeroDetailComponent
      }
    ],
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class TourOfHeroesRoutingModule { }
