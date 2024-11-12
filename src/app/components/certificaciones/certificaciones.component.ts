import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss'],
})
export class CertificacionesComponent {
  nombreCertificado: string = '';
  fechaObtencion: string = '';
  certificadoVence: boolean = false;
  fechaVencimiento: string = '';

  onSubmit() {
    console.log({
      nombreCertificado: this.nombreCertificado,
      fechaObtencion: this.fechaObtencion,
      certificadoVence: this.certificadoVence,
      fechaVencimiento: this.certificadoVence ? this.fechaVencimiento : null
    });
  }
}
