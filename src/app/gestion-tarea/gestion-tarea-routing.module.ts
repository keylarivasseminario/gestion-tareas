import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionTareaComponent } from './gestion-tarea.component';

const routes: Routes = [
  {
    path: '',
    component: GestionTareaComponent,
    children: [
      {
        path: 'listado',
        loadChildren: () =>
          import('./listado-tareas/listado-tareas.module').then(
            (m) => m.ListadoTareasModule
          ),
      },
      {
        path: 'creacion',
        loadChildren: () =>
          import(
            './mantenimiento-tarea/mantenimiento-creacion/mantenimiento-creacion.module'
          ).then((m) => m.MantenimientoCreacionModule),
      },
      {
        path: 'edicion/:id',
        loadChildren: () =>
          import('./mantenimiento-tarea/mantenimiento-edicion/mantenimiento-edicion.module').then(
            (m) => m.MantenimientoEdicionModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/tarea/listado' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionTareaRoutingModule {}
