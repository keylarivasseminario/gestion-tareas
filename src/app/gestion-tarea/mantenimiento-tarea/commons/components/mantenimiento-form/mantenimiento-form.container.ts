import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/interfaces/stepper.type';
import { Router } from '@angular/router';
import { MantenainceAction } from 'src/app/commons/enums/tasks.enum';

@Component({
  selector: 'app-mantenimiento-form-container',
  templateUrl: './mantenimiento-form.container.html',
  styleUrls: ['./mantenimiento-form.container.scss'],
})
export class MantenimientoFormContainer {
  @Input() action!: MantenainceAction;
  @Input() dataForm!: ITask;
  @Output() saveTask = new EventEmitter<ITask>();

  constructor(private router: Router) {}

  /**
   * @description Emite la tarea a guardar
   */
  onSaveTask(task: ITask) {
    this.saveTask.emit(task);
  }

  /**
   * @description Cancela la acción y navega al listado de tareas
   */
  onCancelar() {
    this.router.navigate(['tarea/listado']);
  }
}
