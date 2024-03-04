import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskState } from '../state/stepper.state';
import { ITask } from '../interfaces/stepper.type';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  constructor(private taskState: TaskState) {}

  /**
   * @description Obtiene el listado de tareas
   */
  tasksList$(): Observable<Array<ITask>> {
    return this.taskState.tasksList$();
  }

  /**
   * @description Guarda la tarea
   * @params task Es el objeto tarea a guardar
   */
  saveTask(task: ITask): void {
    return this.taskState.saveTask(task);
  }

  /**
   * @description Actualiza la tarea
   * @params task Es el objeto tarea a actualiza
   */
  updateTask(task: ITask, id: number): void {
    return this.taskState.updateTask(task, id);
  }

  /**
   * @description Remueve una tarea por id
   * @params id Es el ID de la tarea a remover
   */
  removeTask(id: number): void {
    return this.taskState.removeTask(id);
  }
}
