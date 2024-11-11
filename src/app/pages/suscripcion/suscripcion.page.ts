import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MyserviceService } from 'src/app/services/myservice.service';



@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.page.html',
  styleUrls: ['./suscripcion.page.scss'],
})
export class SuscripcionPage implements OnInit {

  
  
    nombre: any='';
    apellido: any='';
    email: any='';
    password: any='';
    educationLevel: any='';
    birthDate: any='';
 

  registroStatus: string = '';

  constructor(private router: Router, private alertController: AlertController , private myservice: MyserviceService) {

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
    if (!this.nombre || this.nombre.length < 3 || this.nombre.length > 20) {
      alert('Por Favor, Ingrese un Nombre.');
      return;
    }
  
    // Validación de apellido: entre 3 y 20 caracteres
    if (!this.apellido || this.apellido.length < 3 || this.apellido.length > 20) {
      alert('Por Favor, Ingrese un Apellido.');
      return;
    }
  
    // Validación de email: entre 3 y 20 caracteres, y debe contener '@'
    const emailPattern = /^[a-zA-Z0-9._%+-]{3,20}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.email || !emailPattern.test(this.email)) {
      alert('Por Favor, Ingrese un Email.');
      return;
    }
  
    // Validación de contraseña: entre 3 y 20 caracteres alfanuméricos
    const passwordPattern = /^[a-zA-Z0-9]{3,20}$/;
    if (!this.password || !passwordPattern.test(this.password)) {
      alert('Por Favor, Ingrese una Contraseña.');
      return;
    }

      // Validación de nivel de educación (obligatorio)
  if (!this.educationLevel) {
    alert('Por Favor, Seleccione un Nivel de Educación.');
    return;
  }

  // Validación de fecha de nacimiento (obligatorio)
  if (!this.birthDate) {
    alert('Por Favor, Ingrese su Fecha de Nacimiento.');
    return;
  }
  
    // Si todas las validaciones pasan, continúa con el registro
    console.log("Usuario Registrado Correctamente:");
    this.register() 
  }

  cancel() {
    // Redirige a la página de login
    this.router.navigate(['/login']);
  }

  async register() {
    const success = await this.myservice.registerUser(
      this.nombre,
      this.apellido,
      this.email,
      this.password,
      this.educationLevel,
      this.birthDate
    );
    this.registroStatus = success ? 'Registro exitoso' : 'Error al registrar';
    this.presentAlert(this.registroStatus);

  }


}


