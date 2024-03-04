import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoCreacionContainer } from './mantenimiento-creacion.container';

const routes: Routes = [
  { path: '', component: MantenimientoCreacionContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoCreacionRoutingModule {}
