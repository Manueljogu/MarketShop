import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent {
  empresa: string = '';
  anoInicio: string = '';
  trabajaActualmente: boolean = false;
  anoTermino: string = '';
  cargo: string = '';

  onSubmit() {
    console.log({
      empresa: this.empresa,
      anoInicio: this.anoInicio,
      trabajaActualmente: this.trabajaActualmente,
      anoTermino: this.trabajaActualmente ? null : this.anoTermino,
      cargo: this.cargo
    });
  }
}
