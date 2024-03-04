import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MantenainceAction } from 'src/app/commons/enums/tasks.enum';
import { ITask } from 'src/app/interfaces/stepper.type';

@Component({
  selector: 'app-mantenimiento-edicion',
  templateUrl: './mantenimiento-edicion.component.html',
  styleUrls: ['./mantenimiento-edicion.component.scss'],
})
export class MantenimientoEdicionComponent {
  @Input() task!: ITask;
  action: MantenainceAction;
  @Output() saveTask = new EventEmitter<ITask>();

  constructor() {
    this.action = MantenainceAction.UPDATE;
  }

  /**
   * @description Emite un evento para actualizar la tarea
   * @params task es el objeto de tarea a guardar
   */
  onSaveTask(task: ITask) {
    this.saveTask.emit(task);
  }
}
