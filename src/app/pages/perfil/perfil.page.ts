import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  NombreRecibido        : string = "";
  apellidoRecibido      : string = "";
  emailRecibido         : string = "";
  telefonoRecibido      : string = "";
  generoRecibido        : string = "";
  direccionRecibido     : string = "";
  paisRecibido          : string = "";
  ciudadRecibido        : string = "";

  constructor(private activerouter : ActivatedRoute, private router : Router) {
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        console.log("Construccion Data Recibe");
        console.log(this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado']);
        this.NombreRecibido = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
        this.apellidoRecibido = this.router.getCurrentNavigation()?.extras?.state?.['apellidoEnviado'];
        this.emailRecibido = this.router.getCurrentNavigation()?.extras?.state?.['emailEnviado'];
        this.telefonoRecibido = this.router.getCurrentNavigation()?.extras?.state?.['telefonoEnviado'];
        this.generoRecibido = this.router.getCurrentNavigation()?.extras?.state?.['generoEnviado'];
        this.direccionRecibido = this.router.getCurrentNavigation()?.extras?.state?.['direccionEnviado'];
        this.paisRecibido = this.router.getCurrentNavigation()?.extras?.state?.['paisEnviado'];
        this.ciudadRecibido = this.router.getCurrentNavigation()?.extras?.state?.['ciudadEnviado'];


      }
      
    })
  }
  ngOnInit() {
  }

}

