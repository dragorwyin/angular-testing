import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingModule } from '../testing/testing.module';
import { CoreComponent } from './core.component';
import { TourOfHeroesModule } from '../tour-of-heroes/tour-of-heroes.module';

@NgModule({
  imports: [
    CommonModule,
    TestingModule,
    TourOfHeroesModule
  ],
  declarations: [
    CoreComponent
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
