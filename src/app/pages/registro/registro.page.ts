import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AlertController, AnimationController,Animation, ToastController } from '@ionic/angular';
import { BdLocaLService } from '../../services/bd-loca-l.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements AfterViewInit,OnInit {
  dato: string;
  nombre: string;
  nro: string;
  anim: Animation;
  constructor(private form: FormBuilder ,private router: Router,public alertController: AlertController,
    public toast: ToastController,public animationCtrl: AnimationController,private bdLocal: BdLocaLService) {}
    ///stor
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
    this.router.navigate(['/home']);
  }
}
