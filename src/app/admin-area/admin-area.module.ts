import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminAreaFilmesComponent } from '../admin-area-filmes/admin-area-filmes.component';
import { AdminAreaComponent } from './admin-area.component';
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { CadastroFilmesComponent } from '../cadastro-filmes/cadastro-filmes.component';



@NgModule({


    declarations: [
        AdminAreaFilmesComponent,
        AdminAreaComponent,
        CadastroFilmesComponent
    ],


    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        CoreModule,
        RouterModule.forRoot([
            {
                path: 'admin', component: AdminAreaComponent ,
                children: [
                   
                    
                    {
                         path: 'info/:id', component: CadastroFilmesComponent,  outlet: 'sub',   
                    } ,
                    {
                        path: 'filmes', component: AdminAreaFilmesComponent, outlet: 'sub', 
                    }              
                ]
            }, 
        ]),
    ],
    exports: [RouterModule]

})
export class AdminAreaModule {

}