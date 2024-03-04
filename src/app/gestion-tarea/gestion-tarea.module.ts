import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionTareaRoutingModule } from './gestion-tarea-routing.module';
import { GestionTareaComponent } from './gestion-tarea.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GestionTareaComponent],
  imports: [
    GestionTareaRoutingModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
})
export class GestionTareaModule {}
