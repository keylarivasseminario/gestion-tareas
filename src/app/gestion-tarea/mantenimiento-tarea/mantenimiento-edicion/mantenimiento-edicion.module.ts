import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MantenimientoFormModule } from '../commons/components/mantenimiento-form/mantenimiento-form.module';
import { MantenimientoEdicionRoutingModule } from './mantenimiento-edicion-routing.module';
import { MantenimientoEdicionComponent } from './mantenimiento-edicion.component';
import { MantenimientoEdicionContainer } from './mantenimiento-edicion.container';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [MantenimientoEdicionComponent, MantenimientoEdicionContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MantenimientoEdicionRoutingModule, MantenimientoFormModule],
  providers: [DatePipe],
})
export class MantenimientoEdicionModule {}
