import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobeGlComponent } from './globe-gl/globe-gl.component';
import { HeaderComponent } from './header/header.component';
import { SetGlobeStyleDirective } from './globe-gl/set-globe-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    GlobeGlComponent,
    HeaderComponent,
    SetGlobeStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobeGlComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
