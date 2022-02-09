import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './pages/initial/initial.component';
import { InternalPostComponent } from './pages/internal-post/internal-post.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
