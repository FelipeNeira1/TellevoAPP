import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-comp-cuenta',
  templateUrl: './comp-cuenta.component.html',
  styleUrls: ['./comp-cuenta.component.scss'],
})
export class CompCuentaComponent implements OnInit {
  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.newUser;
        console.log(this.data);
      }
    });
  }

  ngOnInit() {}

  cerrar(){
    //dg
    this.router.navigate(['/home']);
  }
}
