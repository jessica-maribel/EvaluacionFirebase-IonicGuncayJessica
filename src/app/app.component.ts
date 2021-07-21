import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listado Locales', url: '/locales/listado', icon: 'list-circle' },
    { title: 'Acerca de', url: '/acerca', icon: 'information' },
    
  ];
  public labels = ['Odontologia', 'Farmacia', 'Hoteles', 'Tiendas', 'Viajes'];
  constructor() {}
}
