import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITask } from '../interfaces/stepper.type';

@Injectable({
  providedIn: 'root',
})
export class TaskState {
  private tasks$ = new BehaviorSubject<Array<ITask>>(this.getListTasks());

  constructor() {}

  /**
   * @description Obtiene el listado de tareas como observer
   */
  tasksList$(): Observable<Array<ITask>> {
    return this.tasks$.asObservable();
  }

  /**
   * @description Guarda la tarea
   * @params task Es el objeto tarea a Guarda
   */
  saveTask(task: ITask): void {
    let savedTasks = this.getListTasks();

    savedTasks.push(task);

    let datosJSON = JSON.stringify(savedTasks);

    localStorage.setItem('tasks', datosJSON);

    this.tasks$.next(savedTasks);
  }

  /**
   * @description Actualiza la tarea
   * @params task Es el objeto tarea a actualiza
   */
  updateTask(task: ITask, id: number): void {
    let savedTasks = this.getListTasks();

    savedTasks[id] = task;

    let datosJSON = JSON.stringify(savedTasks);

    localStorage.setItem('tasks', datosJSON);

    this.tasks$.next(savedTasks);
  }

  /**
   * @description Obtiene el listado de tareas del storage
   */
  getListTasks(): Array<ITask> {
    const storedTasks = localStorage.getItem('tasks');
    return JSON.parse(storedTasks as string) || [];
  }

  /**
   * @description Remueve una tarea por id
   * @params id Es el ID de la tarea a remover
   */
  removeTask(id: number) {
    let savedTasks = this.getListTasks();

    savedTasks.splice(id, 1);

    let datosJSON = JSON.stringify(savedTasks);

    localStorage.setItem('tasks', datosJSON);

    this.tasks$.next(savedTasks);
  }
}
