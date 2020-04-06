import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './producto/listar/listar.component';
import { AddComponent } from './producto/add/add.component';
import { DeleteComponent } from './producto/delete/delete.component';
import { BuscarIdComponent } from './producto/buscar-id/buscar-id.component';


const routes: Routes = [
  {path:"listar", component:ListarComponent},
  {path:"add", component:AddComponent},
  {path:"delete", component:DeleteComponent},
  {path:"buscar-id", component:BuscarIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
