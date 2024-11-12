import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CertificacionesComponent } from '../components/certificaciones/certificaciones.component';
import { ExperienciaLaboralComponent } from '../components/experiencia-laboral/experiencia-laboral.component';
import { MisDatosComponent } from '../components/mis-datos/mis-datos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  declarations: [HomePage, CertificacionesComponent,ExperienciaLaboralComponent,MisDatosComponent]
})
export class HomePageModule {}
