import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
  user: any = {
    username: '',
  };

  activeComponent: string = 'experienciaLaboral';


  constructor() {}

  ngOnInit() {
    // Puedes inicializar el usuario aquí o usar un servicio para obtener el nombre de usuario.
  }
}