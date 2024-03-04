import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ListadoTareasComponent } from './listado-tareas.component';
import { ListadoTareasRoutingModule } from './listado-tareas-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ListadoTareasContainer } from './listado-tareas.container';
import { FilterModule } from './commons/components/filter/filter.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ConfirmDeleteModule } from '../mantenimiento-tarea/commons/components/confirm-delete/confirm-delete.module';

@NgModule({
  declarations: [ListadoTareasComponent, ListadoTareasContainer],
  imports: [
    ListadoTareasRoutingModule,
    CommonModule,
    MatTableModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    FormsModule,
    MatInputModule,
    FilterModule,
    MatDialogModule,
    MatCardModule,
    ConfirmDeleteModule
  ],
  providers: [DatePipe],
})
export class ListadoTareasModule {}
