import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITask } from 'src/app/interfaces/stepper.type';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-mantenimiento-creacion-container',
  templateUrl: './mantenimiento-creacion.container.html',
  styleUrls: ['./mantenimiento-creacion.container.scss'],
})
export class MantenimientoCreacionContainer {
  constructor(private stepperService: StepperService, private router: Router) {}

  /**
   * @description Guarda la tarea y navega al listado general
   * @params task es el objeto de tarea a guardar
   */
  onSaveTask(task: ITask) {
    let taskToSave = task as ITask;
    this.stepperService.saveTask(taskToSave);
    this.router.navigate(['tarea/listado']);
  }
}
