import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingModule } from '../testing/testing.module';
import { CoreComponent } from './core.component';
import { TourOfHeroesModule } from '../tour-of-heroes/tour-of-heroes.module';
import { HeaderComponent } from './header/header.component';

import { RouterModule, Routes } from '@angular/router';
import { routes } from '../tour-of-heroes/routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestingModule,
    TourOfHeroesModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    CoreComponent,
    HeaderComponent
  ],
  exports: [
    CoreComponent,
    RouterModule,
  ]
})
export class CoreModule { }
