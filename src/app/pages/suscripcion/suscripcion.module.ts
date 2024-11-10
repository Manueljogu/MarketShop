import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuscripcionPageRoutingModule } from './suscripcion-routing.module';

import { SuscripcionPage } from './suscripcion.page';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuscripcionPageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule 

  ],
  declarations: [SuscripcionPage]
})
export class SuscripcionPageModule {}
