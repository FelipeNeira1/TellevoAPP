import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-cuenta',
  templateUrl: './comp-cuenta.component.html',
  styleUrls: ['./comp-cuenta.component.scss'],
})
export class CompCuentaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  cerrar(){
    //dg
    this.router.navigate(['/home']);
  }
}
