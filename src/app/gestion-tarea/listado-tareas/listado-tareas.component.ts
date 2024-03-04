import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import {
  OrderByList,
  PriorityList,
  StatusList,
} from 'src/app/commons/constants/tasks.constant';
import { OrderBy, TaskStatus } from 'src/app/commons/enums/tasks.enum';
import { ITask } from 'src/app/interfaces/stepper.type';
import { IFilter } from './commons/interfaces/filter.interface';
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  color: string;
}

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.scss'],
})
export class ListadoTareasComponent {
  @Input() set tasks(tasks: Array<ITask>) {
    this.setDataSource(tasks);
  }
  @Output() changeOrderBy = new EventEmitter<OrderBy>();
  @Output() filter = new EventEmitter<IFilter>();
  @Output() removeTask = new EventEmitter<number>();

  public displayedColumns: string[] = [
    'title',
    'priority',
    'status',
    'expirationDate',
    'actions',
  ];

  public dataSource = new MatTableDataSource<ITask>();
  public orderBy = OrderByList;
  public priorityList = PriorityList;
  public statusList = StatusList;

  constructor(private datePipe: DatePipe) {}

  /**
   * @description Asigna el listado de tareas al datasource de la tabla angular material
   */
  setDataSource(tasks: Array<ITask>) {
    let tasksCopy = JSON.parse(JSON.stringify(tasks));
    tasksCopy = tasksCopy.map((task: ITask) => {
      task.expirationDate = this.datePipe.transform(
        task.expirationDate,
        'dd/MM/yyyy'
      ) as string;
      return task;
    });
    this.dataSource.data = tasksCopy;
  }

  /**
   * @description Asignar color al elemento segun el estado de la tarea
   * @param element es el elemento evaluado para asignarle un color
   * @returns string retorna el color asignado
   */
  public getStatusColor(element: ITask): string {
    let bgColor: string;

    switch (element.status) {
      case 'PENDING':
        bgColor = 'warn';
        break;

      default:
        bgColor = 'primary';
        break;
    }

    return bgColor;
  }

  /**
   * @description emite el valor por el cual se ordenará la tabla
   */
  public onSelectChange(orderby: MatSelectChange): void {
    this.changeOrderBy.emit(orderby.value);
  }

  /**
   * @description emite los valores usados para filtrar en la tabla
   */
  public onFilter(data: IFilter): void {
    this.filter.emit(data);
  }

  /**
   * @description emite el index de la tarea a eliminar
   */
  public onRemoveTask(index: number) {
    this.removeTask.emit(index);
  }

  /**
   * @description Asigna el label al componente status de la tabla
   * @param status es el status de la tarea evaluada
   * @returns string es el label a mostrar
   */
  public getStatusLabel(status: string): string {
    let statusLabel: string;
    switch (status) {
      case TaskStatus.COMPLETED:
        statusLabel = 'Completada';
        break;

      case TaskStatus.PENDING:
        statusLabel = 'Pendiente';
        break;

      default:
        statusLabel = '-';

        break;
    }
    return statusLabel;
  }
}
