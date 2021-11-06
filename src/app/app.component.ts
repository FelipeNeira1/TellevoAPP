import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'gmaps';
  position ={
    lat: -34.681,
    lng: -58.371
  };
  label ={
    color: 'red',
    tect: 'marcador'
  };
  constructor() {}
}
