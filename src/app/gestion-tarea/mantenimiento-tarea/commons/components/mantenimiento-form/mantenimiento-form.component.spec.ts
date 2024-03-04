import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoTareaComponent } from './mantenimiento-form.component';

describe('MantenimientoTareaComponent', () => {
  let component: MantenimientoTareaComponent;
  let fixture: ComponentFixture<MantenimientoTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoTareaComponent]
    });
    fixture = TestBed.createComponent(MantenimientoTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
