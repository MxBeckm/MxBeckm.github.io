import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobeGlComponent } from './globe-gl/globe-gl.component';
import { HeaderComponent } from './header/header.component';
import { SetGlobeStyleDirective } from './globe-gl/set-globe-style.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { Breakpoints } from '@angular/cdk/layout';
import { ThemeDirective } from './theme/theme.directive';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [
    AppComponent,
    GlobeGlComponent,
    HeaderComponent,
    SetGlobeStyleDirective,
    ThemeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxTypedJsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    
  ],
  providers: [GlobeGlComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
