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


  Nombre: string;
  password: string;
  correo: string;
  anim: Animation;

  constructor(private router: Router,public alertController: AlertController,
    public toast: ToastController,public animationCtrl: AnimationController,private bdLocal: BdLocaLService) {}
    ///stor
    guardar(){
      this.bdLocal.guardarContactos(this.Nombre,this.password,this.correo);
    }
ionViewWillEnter(){
  this.bdLocal.cargarContectos();
}

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
    this.router.navigate(['/home']);
  }
}
