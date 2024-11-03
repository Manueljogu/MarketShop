import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.page.html',
  styleUrls: ['./suscripcion.page.scss'],
})
export class SuscripcionPage implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.user.username.length >= 3 && this.user.username.length <= 20 && this.user.password.length === 4) {
      this.router.navigate(['/login'], { state: { user: this.user } } );
    } else {
      alert('Por favor, ingrese un usuario entre 3-20 Caracteres Alfanumericos y una Contraseña de 4 Digitos Numericos.');
    console.log("Login button clicked");
  }

}

}
