import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dato: string;
  //validar
  public user ={
  gmail:'',
  password:''
  };
  //----
  public fGroup: FormGroup;
  //----
  constructor(public toastController: ToastController,alertController: AlertController,private router: Router,fbuilder: FormBuilder) {}
    //onint
  ngOnInit(){}
    //onint
  siguiente(){
    //dg
    this.presentToast('<ion-label><img src="assets/img/1.png"></ion-label> <br>!Bienvenid@¡ '+this.dato);
    this.router.navigate(['/principal']);
  }
  siguiente2(){
    //dg
    this.router.navigate(['/clave']);
  }
  async presentToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  submitForm(){
    console.log('Sudmit!');
  }
}
