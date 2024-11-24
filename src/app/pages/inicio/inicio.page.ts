import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  // Array de productos
  productos = [
    { nombre: 'Moda Damas', imagen: 'assets/img/mujer.png' },
    { nombre: 'Moda Caballeros', imagen: 'assets/img/hombre.jpg' },
    { nombre: 'Moda Niños', imagen: 'assets/img/niño.jpg' },
    { nombre: 'DecoHogar', imagen: 'assets/img/hogar.jpg' },
    { nombre: 'Electro', imagen: 'assets/img/electros.jpg' }
  ];

  email: string = '';
  password: string = '';
  username: string = '';
  bienvenidos: string = 'Bienvenid@';

  constructor(
    private route: ActivatedRoute,
    private menu: MenuController,
    private router: Router // Importación del Router
  ) {}

  ngOnInit() {
    this.menu.close("mainMenu");
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.password = params['password'];  
      this.username = localStorage.getItem('username') || 'Invitado';
    });
  }

  // Método para redirigir a la página de productos
  navegarAProductos() {
    this.router.navigate(['/productos']); // Redirige a la página "productos"
  }

}
