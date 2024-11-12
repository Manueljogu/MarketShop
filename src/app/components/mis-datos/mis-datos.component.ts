import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss'],
})
export class MisDatosComponent {
  user = {
    firstName: '',
    lastName: '',
    educationLevel: '',
    birthDate: ''
  };


  showInfo() {
    console.log('User Info:', this.user);
  }
}
