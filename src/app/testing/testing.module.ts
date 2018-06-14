import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing.component';
import { BrowserModule } from '@angular/platform-browser';
import { MixinTestComponent } from './mixin-test/mixin-test.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    TestingComponent,
    MixinTestComponent
  ],
  exports: [
    TestingComponent,
    MixinTestComponent
  ]
})
export class TestingModule { }
