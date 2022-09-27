import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'solucionesEmpresariales';
  screen: string = 'home';
  page: string = 'dashboard';
  sendEmail: boolean = false;
  showLoader: boolean = false;

  constructor() { }

  changeScreen(screen: string) {
    this.screen = screen;
  }

  login() {
    this.showLoader = true;
  }

  register() {
    this.showLoader = true;
  }
}
