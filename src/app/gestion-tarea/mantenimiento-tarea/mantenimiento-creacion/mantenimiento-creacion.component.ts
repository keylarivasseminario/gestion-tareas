import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MantenainceAction } from 'src/app/commons/enums/tasks.enum';
import { ITask } from 'src/app/interfaces/stepper.type';

@Component({
  selector: 'app-mantenimiento-creacion',
  templateUrl: './mantenimiento-creacion.component.html',
  styleUrls: ['./mantenimiento-creacion.component.scss'],
})
export class MantenimientoCreacionComponent {
  @Input() task!: ITask;
  action: MantenainceAction;
  @Output() saveTask = new EventEmitter<ITask>();

  constructor() {
    this.action = MantenainceAction.CREATE;
  }

  /**
   * @description Emite la tarea a guardar
   * @params task es el objeto de tarea a guardar
   */
  onSaveTask(task: ITask) {
    this.saveTask.emit(task);
  }
}
