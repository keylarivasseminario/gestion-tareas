import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MantenimientoFormComponent } from './mantenimiento-form.component';
import { MantenimientoFormContainer } from './mantenimiento-form.container';

@NgModule({
  declarations: [MantenimientoFormComponent, MantenimientoFormContainer],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MantenimientoFormContainer],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, // Establece el locale, por ejemplo, español
  ],
})
export class MantenimientoFormModule {}
