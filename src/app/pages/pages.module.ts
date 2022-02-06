import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialComponent } from './initial/initial.component';
import { InternalPostComponent } from './internal-post/internal-post.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    InitialComponent,
    InternalPostComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,    
    
  ]
})
export class PagesModule { }
