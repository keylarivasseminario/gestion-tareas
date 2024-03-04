import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskStatus } from 'src/app/commons/enums/tasks.enum';

const baseForm = (isUpdating: boolean) => ({
  title: new FormControl(null, [Validators.required]),
  status: new FormControl(isUpdating ? null : TaskStatus.PENDING, [
    Validators.required,
  ]),
  description: new FormControl(null, [Validators.required]),
  expirationDate: new FormControl(null, [Validators.required]),
  priority: new FormControl(null, [Validators.required]),
  tags: new FormControl([]),
});

export const BasicDataForm = (isUpdating: boolean): FormGroup =>
  new FormGroup(baseForm(isUpdating));
export const TagsDataForm = (): FormGroup =>
  new FormGroup({
    tag: new FormControl(null, [Validators.required]),
  });
