import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingComponent } from '../testing/testing.component';
import { TourOfHeroesComponent } from '../tour-of-heroes/tour-of-heroes.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'tour-of-heroes', component: TourOfHeroesComponent },
  { path: 'testing', component: TestingComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class CoreRoutingModule { }
