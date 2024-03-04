import { FormGroup, FormControl, Validators } from '@angular/forms';

const baseForm = () => ({
  status: new FormControl(null),
  expirationDate: new FormControl(null),
  priority: new FormControl(null),
});

export const BasicDataForm = (): FormGroup => new FormGroup(baseForm());
