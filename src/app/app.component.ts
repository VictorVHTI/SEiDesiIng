import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'solucionesEmpresariales';
  screen: string = 'home';
  //page: string = 'dashboard';
  page: string = 'login';
  sendEmail: boolean = false;
  showLoader: boolean = false;
  email: string = '';
  password: string = '';
  error: boolean = false;

  constructor() { }

  changeScreen(screen: string) {
    this.screen = screen;
  }

  login() {
    if (!this.email || !this.password) {
      this.error = true;
    } else {
      this.showLoader = true;
    }
  }

  register() {
    this.showLoader = true;
  }
}
