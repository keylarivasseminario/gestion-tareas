import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoEdicionContainer } from './mantenimiento-edicion.container';

const routes: Routes = [
  { path: '', component: MantenimientoEdicionContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoEdicionRoutingModule {}
