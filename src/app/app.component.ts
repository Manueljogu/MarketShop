import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Productos', url: 'productos', icon: 'bag' },
    { title: 'Datos Personales', url: 'registrar', icon: 'reader' },
    { title: 'Perfil', url: 'perfil', icon: 'person' },
    { title: 'Clientes', url: 'clientes', icon: 'people' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'lock-closed' },
  ];
 
  constructor() {}
}
