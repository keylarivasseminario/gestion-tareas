import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { ITask } from 'src/app/interfaces/stepper.type';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-mantenimiento-edicion-container',
  templateUrl: './mantenimiento-edicion.container.html',
  styleUrls: ['./mantenimiento-edicion.container.scss'],
})
export class MantenimientoEdicionContainer {
  taskID!: number;
  task!: ITask;

  constructor(
    private route: ActivatedRoute,
    private stepperService: StepperService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.taskID = params['id'];
      this.getTaskToEdit();
    });
  }

  /**
   * @description Obtiene la tarea que se editará
   */
  private getTaskToEdit(): void {
    this.stepperService
      .tasksList$()
      .pipe(
        tap((tasks) => {
          let task = { ...tasks[this.getTaskId()] };

          task.expirationDate = new Date(task.expirationDate);
          this.task = task;
        })
      )
      .subscribe();
  }

  /**
   * @description Actualiza la tarea y redirecciona al listado de tareas
   * @params task Es el objeto de tarea para actualizar
   */
  onSaveTask(task: ITask) {
    const taskToSave = task as ITask;

    this.stepperService.updateTask(taskToSave, this.getTaskId());
    this.router.navigate(['tarea/listado']);
  }

  /**
   * @description Obtiene el id de la tarea a editar
   */
  getTaskId() {
    return this.taskID - 1;
  }
}
