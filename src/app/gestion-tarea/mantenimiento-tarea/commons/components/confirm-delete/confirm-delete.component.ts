import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss'],
})
export class ConfirmDeleteComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmDeleteComponent>) {}

  /**
   * @description Cierra el modal de confirmación
   */
  onAccept(): void {
    this.dialogRef.close(true);
  }

  /**
   * @description Apertura el modal de confirmación
   */
  onCancel(): void {
    this.dialogRef.close(false);
  }
}
