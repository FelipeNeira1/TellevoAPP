import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AlertController, AnimationController,Animation, ToastController } from '@ionic/angular';
import { BdLocaLService } from '../../services/bd-loca-l.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements AfterViewInit,OnInit {
  dato: string;
  usuario: string;
  contraseña: string;
  anim: Animation;
  constructor(private form: FormBuilder ,private router: Router,public alertController: AlertController,
    public toast: ToastController,public animationCtrl: AnimationController,private bdLocal: BdLocaLService) {}
    ///stor

ngAfterViewInit(){
  this.anim = this.animationCtrl.create('myanim');
  this.anim

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

    this.router.navigate(['/home']);
  }
}