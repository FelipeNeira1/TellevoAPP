import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clave',
  templateUrl: './clave.page.html',
  styleUrls: ['./clave.page.scss'],
})

export class ClavePage implements OnInit {
  dato: string;
  constructor(private router: Router, public alertController: AlertController) {}

  ngOnInit() {
  }
  siguiente(){
    //dg
    this.router.navigate(['/principal']);
  }
  siguiente2(){
    //dg
    this.router.navigate(['/clave']);
  }
  alerta(){
    this.presentAlert();
    this.router.navigate(['/home']);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Recuperar clave',
      message: '<img src="assets/img/1.png"> <br>Se envio un correo para la recuperacion o cambio de contraseña',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
