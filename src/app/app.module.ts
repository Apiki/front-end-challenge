import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { InitialComponent } from './pages/initial/initial.component';
import { InternalPostComponent } from './pages/internal-post/internal-post.component';



@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    InternalPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    
 
    
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
