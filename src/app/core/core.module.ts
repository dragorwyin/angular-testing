import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingModule } from '../testing/testing.module';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    TestingModule,
  ],
  declarations: [
    CoreComponent
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
