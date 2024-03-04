import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  PriorityList,
  StatusList,
} from 'src/app/commons/constants/tasks.constant';
import { BasicDataForm } from './filter.presenter';
import { IFilter } from '../../interfaces/filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() filter = new EventEmitter<IFilter>();

  priorityList = PriorityList;
  statusList = StatusList;
  form: FormGroup = BasicDataForm();

  onFilter() {
    this.filter.emit(this.form.value);
  }

  onCleanFilter() {
    this.form.reset();
    this.onFilter();
  }
}
