import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProvidersViewProvidersModule } from './providers-view-providers/providers-view-providers.module';
import { ResolutionModifiersModule } from './resolution-modifiers/resolution-modifiers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ ProvidersViewProvidersModule, ResolutionModifiersModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
  }
}
