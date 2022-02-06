import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { InternalPostComponent } from './internal-post/internal-post.component';

const routes: Routes = [{
  path:'',
  component: InitialComponent,
},
{
  path:'internal-post',
  component: InternalPostComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
