import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AdminAreaModule } from './admin-area/admin-area.module';


import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';

const routes: Routes = [
  {
    path:'filmes', component: ListaFilmesComponent
  }
  ,

    {
      path: '',redirectTo : 'filmes',pathMatch :'full'
    },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
