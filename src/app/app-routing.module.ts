import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tarea',
    loadChildren: () =>
      import('./gestion-tarea/gestion-tarea.module').then(
        (m) => m.GestionTareaModule
      ),
  },
  { path: '**', redirectTo: '/tarea/listado' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
