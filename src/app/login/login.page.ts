import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
    if (this.user.username.length >= 3 && this.user.username.length <= 20 && this.user.password.length === 4) {
      this.router.navigate(['/home'], { state: { user: this.user } });
    } else {
      alert('Por favor, ingrese un usuario y una contraseña válidos.');
    }
  }
}
