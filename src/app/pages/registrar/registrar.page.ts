import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private router: Router) { }


  
  nombre    : string = "";
  apellido  : string = "";
  email     : string = "";
  telefono  : string = "";
  genero    : string = "";
  direccion : string = "";
  ciudad    : string = "";
  pais      : string = "";

  ngOnInit() {
  }

  regitrar(){
    console.log("nombre",     this.nombre);
    console.log("Apellido:",  this.apellido);
    console.log("Email:",     this.email);
    console.log("Teléfono:",  this.telefono);
    console.log("Género:",    this.genero);
    console.log("Dirección:", this.direccion);
    console.log("Ciudad:",    this.ciudad);
    console.log("País:",      this.pais);
    this.enviarDatos();
    this.limpiarCampos();

  }

  limpiarCampos(){
    this.nombre     =  "";
    this.apellido   = "";
    this.email      = "";
    this.telefono   = "";
    this.genero     = "";
    this.direccion  = "";
    this.ciudad     = "";
    this.pais       = "";
    
   
  }


enviarDatos(){
  let navigationExtra : NavigationExtras = {

    state: {
      nombreEnviado   : this.nombre,
      apellidoEnviado : this.apellido,
      emailEnviado    : this.email,
      telefonoEnviado : this.telefono,
      generoEnviado   : this.genero,
      direccionEnviado: this.direccion,
      ciudadEnviado   : this.ciudad,
      paisEnviado     : this.pais
    }
  }

  this.router.navigate(['/perfil'], navigationExtra);
}

}
