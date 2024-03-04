import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasicDataForm, TagsDataForm } from './mantenimiento-form.presenter';
import { FormGroup } from '@angular/forms';
import { ITask } from 'src/app/interfaces/stepper.type';
import {
  PriorityList,
  StatusList,
} from 'src/app/commons/constants/tasks.constant';
import { MantenainceAction } from 'src/app/commons/enums/tasks.enum';

@Component({
  selector: 'app-mantenimiento-form',
  templateUrl: './mantenimiento-form.component.html',
  styleUrls: ['./mantenimiento-form.component.scss'],
})
export class MantenimientoFormComponent implements OnInit {
  @Output() saveTask = new EventEmitter<ITask>();
  @Output() cancelar = new EventEmitter();
  @Input() action!: MantenainceAction;
  @Input() dataForm!: ITask;

  statusList = StatusList;

  priorityList = PriorityList;

  form: FormGroup = BasicDataForm(this.isUpdating());
  tagsForm: FormGroup = TagsDataForm();

  constructor() {}

  ngOnInit(): void {
    if (this.isUpdating()) {
      this.form.patchValue(this.dataForm);
    }
  }

  /**
   * @description Evalua si el usuario esta actualizando
   * @returns boolean la accion que realiza el usuario es actualizar
   */
  public isUpdating(): boolean {
    return this.action === MantenainceAction.UPDATE;
  }

  /**
   * @description Emite un evento para guardar la data ya se edicion o creacion
   */
  public saveData() {
    this.saveTask.emit(this.form.value);
  }

  /**
   * @description Gestiona la inserción de tags a la tarea
   */
  public addTag() {
    let tags = this.getListTags();
    tags.push(this.tagsForm.value.tag);
    this.form.patchValue({ tags });
    this.tagsForm.reset();
  }

  /**
   * @description Obtiene el listado de tags
   * @returns Listado de tags asociados a la tarea
   */
  public getListTags(): Array<string> {
    return this.form.value.tags || [];
  }

  /**
   * @description Remueve el tag especifico de la tarea
   * @params index es el index del tag para remover
   */
  public removeTag(index: number) {
    let tags = this.getListTags();
    tags.splice(index, 1);
  }

  /**
   * @description Cancela la accion no actualiza ni crea
   */
  public Cancelar() {
    this.cancelar.emit();
  }
}
