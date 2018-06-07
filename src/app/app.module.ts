import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MixinTestComponent } from './mixin-test/mixin-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MixinTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
