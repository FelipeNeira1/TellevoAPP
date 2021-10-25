import {AfterViewInit, Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-eleguir',
  templateUrl: './eleguir.page.html',
  styleUrls: ['./eleguir.page.scss'],
})
export class EleguirPage implements AfterViewInit {
  data:any;

  constructor(private activeroute: ActivatedRoute, private router: Router, public alertController: AlertController) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.newUser;
        console.log(this.data)
      }else{this.router.navigate(["/home"])}
    });
  }

  ngAfterViewInit(){
  }
  cerrar(){
    //dg
    this.router.navigate(['/home']);
  }
}