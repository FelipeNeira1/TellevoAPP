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
    this.router.navigate(['eleguir/uno']);

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.newUser;
        console.log(this.data);
      } else {this.router.navigate([''])}
    });
  }

segmentChanged($event){
  console.log($event);
  let direccion= $event.detail.value;
  this.router.navigate(['eleguir/'+direccion]);

}
  ngAfterViewInit(){
  }
  cerrar(){
    //dg
    this.router.navigate(['/home']);
  }
}