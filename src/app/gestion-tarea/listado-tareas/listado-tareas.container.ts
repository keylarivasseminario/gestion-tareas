import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { OrderBy } from 'src/app/commons/enums/tasks.enum';
import { ITask } from 'src/app/interfaces/stepper.type';
import { StepperService } from 'src/app/services/stepper.service';
import { IFilter } from './commons/interfaces/filter.interface';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../mantenimiento-tarea/commons/components/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-listado-tareas-container',
  templateUrl: './listado-tareas.container.html',
  styleUrls: ['./listado-tareas.container.scss'],
})
export class ListadoTareasContainer implements OnDestroy {
  private destroy$ = new Subject<void>();
  tasks: Array<ITask> = [];
  officialTasks: Array<ITask> = [];
  constructor(
    private stepperService: StepperService,
    private datePipe: DatePipe,
    public dialog: MatDialog
  ) {
    this.getTasksListFromStorage();
  }

  /**
   * @description se encarga de ordernar el listado de tareas por fecha de expiracion o prioridad
   */
  onChangeOrderBy(orderby: OrderBy): void {
    switch (orderby) {
      case OrderBy.EXPIRATIONDATA:
        this.tasks = [
          ...this.tasks.sort(
            (a, b) =>
              new Date(a.expirationDate).getTime() -
              new Date(b.expirationDate).getTime()
          ),
        ];
        break;

      case OrderBy.PRIORITY:
        this.tasks = [
          ...this.tasks.sort((a, b) => a.priority.localeCompare(b.priority)),
        ];

        break;

      default:
        break;
    }
  }

  /**
   * @description Obtiene el listado de tareas guardado en el localstorage
   */
  getTasksListFromStorage(): void {
    this.stepperService
      .tasksList$()
      .pipe(
        takeUntil(this.destroy$),
        tap((tasks) => {
          this.tasks = tasks;
          this.officialTasks = tasks;
        })
      )
      .subscribe();
  }

  /**
   * @description filtra el listado de tareas segun los campos recibidos del formulario de filtro
   * @param filter son los campos del formulario de filtro
   */
  public onFilter(filter: IFilter): void {
    this.tasks = [...this.officialTasks];
    this.tasks = this.tasks.filter((dato) => {
      return (
        (!filter.expirationDate ||
          new Date(dato.expirationDate).getTime() ===
            new Date(filter.expirationDate).getTime()) &&
        (!filter.priority || dato.priority === filter.priority) &&
        (!filter.status || dato.status === filter.status)
      );
    });
  }

  /**
   * @description apertura el modal de confirmacion para eliminar la tarea
   * @param index es el indice de la tarea a eliminar
   */
  onRemoveTask(index: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.stepperService.removeTask(index);
      }
    });
  }

  /**
   * @description gestiona la destruccion del componente
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
