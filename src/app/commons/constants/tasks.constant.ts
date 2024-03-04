import { OrderBy, TaskPriority, TaskStatus } from '../enums/tasks.enum';

export const StatusList = [
  { value: TaskStatus.PENDING, viewValue: 'Pendiente' },
  { value: TaskStatus.COMPLETED, viewValue: 'Completado' },
];

export const PriorityList = [
  { value: TaskPriority.HEIGH, viewValue: 'Alto' },
  { value: TaskPriority.MEDIUM, viewValue: 'Medio' },
  { value: TaskPriority.LOW, viewValue: 'Bajo' },
];

export const OrderByList = [
  { value: OrderBy.EXPIRATIONDATA, viewValue: 'Fecha de vencimiento' },
  { value: OrderBy.PRIORITY, viewValue: 'Prioridad' },
 
];

