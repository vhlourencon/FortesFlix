import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {  ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { CoreModule } from './core/core.module';


import { HttpClientModule } from "@angular/common/http";
import { AdminAreaModule } from './admin-area/admin-area.module';




@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,
    CoreModule,
    HttpClientModule, AdminAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
