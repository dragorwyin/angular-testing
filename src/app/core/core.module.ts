import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingModule } from '../testing/testing.module';
import { CoreComponent } from './core.component';
import { TourOfHeroesModule } from '../tour-of-heroes/tour-of-heroes.module';
import { HeaderComponent } from './header/header.component';
import { CoreRoutingModule } from './/core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestingModule,
    TourOfHeroesModule,
    CoreRoutingModule,
  ],
  declarations: [
    CoreComponent,
    HeaderComponent
  ],
  exports: [
    CoreComponent,
  ]
})
export class CoreModule { }
