import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  items: any[];
  activeItem: any;


  constructor() {
    this.items = [
      {
        label: 'inicio', icon: 'pi pi-home', routerLink: ['']
      },
      { label: 'Clientes', icon: 'pi pi-user', items: [
        {
          label: 'lista de clientes',
          icon: 'pi pi-align-left',
          routerLink: ['/clientes/clientes']
        },
        {
          label: 'cliente nuevo',
          icon: 'pi pi-user-plus',
          routerLink: ['/clientes/nuevo']
        },
      ] },
      { label: 'Contacto', icon: 'pi pi-envelope', routerLink: ['/contact'] },
      { label: 'Ingresar', icon: 'pi pi-sign-in', routerLink: ['/login'] },
      { label: 'Registrarse', icon: 'pi pi-sign-in', routerLink: ['/registrarse']},
    ];
    this.activeItem = this.items[0];

  }
}
