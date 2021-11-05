import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-comp-cuenta',
  templateUrl: './comp-cuenta.component.html',
  styleUrls: ['./comp-cuenta.component.scss'],
})
export class CompCuentaComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, private router: Router,
    public alertController: AlertController,public navCtrl: NavController) {

  }

  ngOnInit() {}

  cerrar(){
    //dg
    this.router.navigate(['/home']);
  }
  async salir(){
    const alert = await this.alertController.create({
    header: 'Cerrar sesion',
    message: 'Seguro que quieres Cerrar sesion ',
    buttons:[
      {
        text:'Si',
        handler:()=>{
          localStorage.removeItem('ingresado');
          this.navCtrl.navigateRoot('home');
        }
      },
      {
        text:'No',
      }
    ]
    });
    await alert.present();
  }

}
