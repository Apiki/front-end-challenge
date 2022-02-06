import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateComponent } from './template/template.component';

import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
