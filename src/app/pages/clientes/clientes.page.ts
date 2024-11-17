import { Component, OnInit } from '@angular/core';
import { MiapiService } from 'src/app/services/miapi.service';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

interface Usuario {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  users: Usuario[] = [];
  nuevoUsuario: Usuario = { id: 0, name: '', email: '' };

  constructor(
    private miapiService: MiapiService, 
    private menu: MenuController, 
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.menu.close('mainMenu');
    this.miapiService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        this.mostrarAlerta('Error al obtener los usuarios');
      }
    );
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  agregarUsuario() {
    if (!this.nuevoUsuario.name || !this.nuevoUsuario.email) {
      this.mostrarAlerta('Por favor complete todos los campos');
      return;
    }
    this.miapiService.addUser(this.nuevoUsuario).subscribe(
      (response) => {
        this.mostrarAlerta('Usuario agregado: ' + response);
        this.users.push(response);
        this.nuevoUsuario = { id: 0, name: '', email: '' };
      },
      (error) => {
        this.mostrarAlerta('Error al agregar el usuario: ' + error);
      }
    );
  }
  eliminarUsuario(id: number) {
    this.miapiService.deleteUser(id).subscribe(
      (response) => {
        // Aquí actualizas la lista de usuarios tras eliminar
        this.users = this.users.filter(user => user.id !== id);
        this.mostrarAlerta('Usuario eliminado');
      },
      (error) => {
        this.mostrarAlerta('Error al eliminar el usuario');
      }
    );
  }
}

