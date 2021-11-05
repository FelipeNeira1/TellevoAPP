import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-comp-cuenta',
  templateUrl: './comp-cuenta.component.html',
  styleUrls: ['./comp-cuenta.component.scss'],
})
export class CompCuentaComponent implements OnInit {
  data: any;
  alertController: any;
  navCtrl: any;

  constructor(private activeroute: ActivatedRoute, private router: Router,
    alertController: AlertController,navCtrl: NavController) {
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
  async salir(){
    const alert = await this.alertController.create({
    header: 'salir',
    message: 'Seguro que quieres cerrar ',
    buttons:[
      {
        text:'no mejor no',
        handler:()=>{
          localStorage.removeItem('ingresado');
          this.navCtrl.navigateRoot('login');
        }
      }
    ]
    });
    await alert.present();
  }

}
