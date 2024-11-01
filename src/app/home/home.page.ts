import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  user: any = {
    username: '',
    firstName: '',
    lastName: '',
    educationLevel: '',
    birthDate: ''
  };

  @ViewChild('firstNameInput', { static: false }) firstNameInput?: ElementRef;
  @ViewChild('lastNameInput', { static: false }) lastNameInput?: ElementRef;
   data: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.user.username = navigation.extras.state['user'].username;
    }
  }

  clearInputs() {
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.educationLevel = '';
    this.user.birthDate = '';
    

    if (this.firstNameInput) {
      this.animateInput(this.firstNameInput);
    }

    if (this.lastNameInput) {
      this.animateInput(this.lastNameInput);
    }
  }

  animateInput(input: ElementRef) {
    input.nativeElement.style.transition = 'transform 1s';
    input.nativeElement.style.transform = 'translateX(100px)';
    setTimeout(() => {
      input.nativeElement.style.transform = 'translateX(0px)';
    }, 1000);
  }

  showInfo() {
    alert(`Nombre: ${this.user.firstName} Apellido: ${this.user.lastName}`);
  }
}