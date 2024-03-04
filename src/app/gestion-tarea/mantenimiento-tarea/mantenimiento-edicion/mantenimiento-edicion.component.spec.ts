import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoCreacionComponent } from './mantenimiento-edicion.component';

describe('MantenimientoCreacionComponent', () => {
  let component: MantenimientoCreacionComponent;
  let fixture: ComponentFixture<MantenimientoCreacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoCreacionComponent]
    });
    fixture = TestBed.createComponent(MantenimientoCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
