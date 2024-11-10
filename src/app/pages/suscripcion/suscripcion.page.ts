import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MyserviceService } from 'src/app/services/myservice.service';

interface User {

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
  
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    educationLevel: '',
    birthDate: ''
  };

  registroStatus: string = '';

  constructor(private router: Router, private alertController: AlertController , private myservice: MyserviceService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.user.firstName = navigation.extras.state['user'].username;
    }
  }

  ngOnInit(): void {
    
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Registro',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  guardar() {
    // Validación de nombre: entre 3 y 20 caracteres
    if (!this.user.firstName || this.user.firstName.length < 3 || this.user.firstName.length > 20) {
      alert('Por Favor, Ingrese un Nombre.');
      return;
    }
  
    // Validación de apellido: entre 3 y 20 caracteres
    if (!this.user.lastName || this.user.lastName.length < 3 || this.user.lastName.length > 20) {
      alert('Por Favor, Ingrese un Apellido.');
      return;
    }
  
    // Validación de email: entre 3 y 20 caracteres, y debe contener '@'
    const emailPattern = /^[a-zA-Z0-9._%+-]{3,20}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.user.email || !emailPattern.test(this.user.email)) {
      alert('Por Favor, Ingrese un Email.');
      return;
    }
  
    // Validación de contraseña: entre 3 y 20 caracteres alfanuméricos
    const passwordPattern = /^[a-zA-Z0-9]{3,20}$/;
    if (!this.user.password || !passwordPattern.test(this.user.password)) {
      alert('Por Favor, Ingrese una Contraseña.');
      return;
    }


      // Validación de nivel de educación (obligatorio)
  if (!this.user.educationLevel) {
    alert('Por Favor, Seleccione un Nivel de Educación.');
    return;
  }

  // Validación de fecha de nacimiento (obligatorio)
  if (!this.user.birthDate) {
    alert('Por Favor, Ingrese su Fecha de Nacimiento.');
    return;
  }
  
    // Si todas las validaciones pasan, continúa con el registro
    console.log("Usuario Registrado Correctamente:", this.user);
    this.router.navigate(['/login']); 
  }

  cancel() {
    // Redirige a la página de login
    this.router.navigate(['/login']);
  }

  async register() {
    const success = await this.myservice.registerUser(
      this.user.firstName,
      this.user.lastName,
      this.user.email,
      this.user.password,
      this.user.educationLevel,
      this.user.birthDate
    );
    this.registroStatus = success ? 'Registro exitoso' : 'Error al registrar';
    this.presentAlert(this.registroStatus);

  }
  

  clearInputs() {
    this.user = {
      
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


