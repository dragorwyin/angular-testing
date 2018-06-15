import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TourOfHeroesComponent } from './tour-of-heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
      },
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
