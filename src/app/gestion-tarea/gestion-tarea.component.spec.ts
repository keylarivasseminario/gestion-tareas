import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTareaComponent } from './gestion-tarea.component';

describe('GestionTareaComponent', () => {
  let component: GestionTareaComponent;
  let fixture: ComponentFixture<GestionTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionTareaComponent]
    });
    fixture = TestBed.createComponent(GestionTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
