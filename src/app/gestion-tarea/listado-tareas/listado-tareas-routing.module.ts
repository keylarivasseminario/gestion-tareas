import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoTareasContainer } from './listado-tareas.container';

const routes: Routes = [{ path: '', component: ListadoTareasContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoTareasRoutingModule { }
