import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './producto/listar/listar.component';
import { AddComponent } from './producto/add/add.component';
import { DeleteComponent } from './producto/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { BuscarIdComponent } from './producto/buscar-id/buscar-id.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    DeleteComponent,
    BuscarIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
