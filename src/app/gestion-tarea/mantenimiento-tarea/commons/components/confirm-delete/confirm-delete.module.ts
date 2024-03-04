import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDeleteComponent } from './confirm-delete.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ConfirmDeleteComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [ConfirmDeleteComponent],
})
export class ConfirmDeleteModule {}
