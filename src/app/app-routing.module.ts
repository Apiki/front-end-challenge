import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
  path:'',
  component: TemplateComponent,
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),  //se Path Vazio, carrega o template.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
