import {AfterViewInit, Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-eleguir',
  templateUrl: './eleguir.page.html',
  styleUrls: ['./eleguir.page.scss'],
})
export class EleguirPage implements AfterViewInit {
  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router, public alertController: AlertController) {
  }

segmentChanged($event){
  console.log($event);
  const direccion= $event.detail.value;
  this.router.navigate(['eleguir/'+direccion]);

}
  ngAfterViewInit(){
  }
  cerrar(){
    //dg
    this.router.navigate(['/home']);
  }
}
