import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MantenimientoCreacionContainer } from './mantenimiento-creacion.container';
import { MantenimientoFormModule } from '../commons/components/mantenimiento-form/mantenimiento-form.module';
import { MantenimientoCreacionComponent } from './mantenimiento-creacion.component';
import { MantenimientoCreacionRoutingModule } from './mantenimiento-creacion-routing.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MantenimientoCreacionComponent,
    MantenimientoCreacionContainer,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MantenimientoCreacionRoutingModule, MantenimientoFormModule],
  providers: [DatePipe],
})
export class MantenimientoCreacionModule {}
