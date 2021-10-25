import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AnimationController, Animation, ModalController } from '@ionic/angular';
import * as Bounce from 'bounce.js';
import { BdLocaLService } from '../../services/bd-loca-l.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements AfterViewInit,OnInit {
  nombre: string;
  nro: string;
  anim: Animation;
  ///
  //@ViewChild('square', { static:false }) square: ElementRef;
  //isPlaying = false;
  constructor(private bdLocal: BdLocaLService,private router: Router, public alertController: AlertController,public modalController: ModalController,
    public animationCtrl: AnimationController) {}
  ///
  guardar(){
    this.bdLocal.guardarContactos(this.nombre,this.nro);
  }
ngAfterViewInit(){
  this.anim = this.animationCtrl.create('myanim');
  this.anim
  //.addElement(this.square.nativeElement)
  .duration(1500)
  .easing('ease-out')
  .iterations(Infinity)
  .fromTo('trasfrom','traslateX(0px)','traslateX(300px)')
  .fromTo('opacity',1,0.2);
}
  ngOnInit() {
  }
  cerrar(){
    //dg
    this.presentAlert();
    this.router.navigate(['/home']);
  }
  alerta(){
    this.presentAlert2();
  }
  alerta2(){
    this.presentAlert3();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cerrar sesion',
      message: 'Se acaba de cerrar la sesion con exito',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Pedir trasporte',
      message: '¿Esta segur@?',
      buttons: ['OK','CANCELAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentAlert3() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'realizar trasporte',
      message: '¿Esta segur@?',
      buttons: ['OK','CANCELAR']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  @ViewChild('bouncebtn', { read: ElementRef })bouncebtn: ElementRef;
bounce() {
  var bounce = new Bounce();
  bounce
  .translate({
    from: { x: -300, y: 0 },
    to: { x: 0, y: 0 },
    duration: 600,
    stiffness: 4
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 0.1, y: 2.3 },
    easing: 'sway',
    duration: 800,
    delay: 65,
    stiffness: 2
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 5, y: 1 },
    easing: 'sway',
    duration: 300,
    delay: 30,
  })
    .applyTo(this.bouncebtn.nativeElement);
}

}


