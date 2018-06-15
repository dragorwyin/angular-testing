import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TourOfHeroesComponent } from './tour-of-heroes.component';

const routes: Routes = [
  {
    path: 'tour-of-heroes',
    redirectTo: 'tour-of-heroes/heroes',
  }, {
    path: 'tour-of-heroes',
    component: TourOfHeroesComponent,
    children: [
      {
        path: 'heroes',
        component: HeroesComponent,
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
