import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  educationLevel: string;
  birthDate: string;
}

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.page.html',
  styleUrls: ['./suscripcion.page.scss'],
})
export class SuscripcionPage implements OnInit {

  user: User = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    educationLevel: '',
    birthDate: ''
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.user.username = navigation.extras.state['user'].username;
    }
  }

  ngOnInit(): void {
    // Puedes añadir lógica adicional aquí si es necesario
  }

  login() {
    // Validación de nombre: entre 3 y 20 caracteres
    if (!this.user.firstName || this.user.firstName.length < 3 || this.user.firstName.length > 20) {
      alert('El nombre debe tener entre 3 y 20 caracteres.');
      return;
    }
  
    // Validación de apellido: entre 3 y 20 caracteres
    if (!this.user.lastName || this.user.lastName.length < 3 || this.user.lastName.length > 20) {
      alert('El apellido debe tener entre 3 y 20 caracteres.');
      return;
    }
  
    // Validación de email: entre 3 y 20 caracteres, y debe contener '@'
    const emailPattern = /^[a-zA-Z0-9._%+-]{3,20}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.user.email || !emailPattern.test(this.user.email)) {
      alert('El email debe tener entre 3 y 20 caracteres alfanuméricos y contener el símbolo @.');
      return;
    }
  
    // Validación de contraseña: entre 3 y 20 caracteres alfanuméricos
    const passwordPattern = /^[a-zA-Z0-9]{3,20}$/;
    if (!this.user.password || !passwordPattern.test(this.user.password)) {
      alert('La contraseña debe tener entre 3 y 20 caracteres alfanuméricos.');
      return;
    }

      // Validación de que las contraseñas coincidan
  if (this.user.password !== this.user.confirmPassword) {
    alert('Las contraseñas no coinciden. Por favor, repítalas correctamente.');
    return;
  }

      // Validación de nivel de educación (obligatorio)
  if (!this.user.educationLevel) {
    alert('Por favor, seleccione un nivel de educación.');
    return;
  }

  // Validación de fecha de nacimiento (obligatorio)
  if (!this.user.birthDate) {
    alert('Por favor, ingrese su fecha de nacimiento.');
    return;
  }
  
    // Si todas las validaciones pasan, continúa con el registro
    console.log("Usuario registrado correctamente:", this.user);
    this.router.navigate(['/login']); // Cambia '/login' a la ruta deseada
  }

  cancel() {
    // Redirige a la página de login
    this.router.navigate(['/login']);
  }
  

  clearInputs() {
    this.user = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      educationLevel: '',
      birthDate: ''
    };
  }

}


