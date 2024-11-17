import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  
    email: string = '';
 

  activeComponent: string = 'experienciaLaboral';


  constructor(private route: ActivatedRoute) {}

  username: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.username = localStorage.getItem('username') || 'Invitado';
    });
  }
}