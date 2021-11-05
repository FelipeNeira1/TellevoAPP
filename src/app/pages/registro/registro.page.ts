import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AlertController, AnimationController,Animation, ToastController, NavController } from '@ionic/angular';
import { Button } from 'selenium-webdriver';
import { BdLocaLService } from '../../services/bd-loca-l.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements AfterViewInit,OnInit {


  // eslint-disable-next-line @typescript-eslint/naming-convention
  Nombre: string;
  password: string;
//  correo: string;
  anim: Animation;

  formularioRegistro: FormGroup;

  constructor(private router: Router,public alertController: AlertController,
    public toast: ToastController,public animationCtrl: AnimationController,
    private bdLocal: BdLocaLService,private fb: FormBuilder,public navCtrl: NavController, ) {


      this.formularioRegistro =this.fb.group({
        // eslint-disable-next-line quote-props
        'nombre': new FormControl('',[Validators.required, Validators.minLength(3)]),
        // eslint-disable-next-line quote-props
        'passwor': new FormControl('',[Validators.required, Validators.minLength(3)]),
        // eslint-disable-next-line quote-props
        'confirmacionPassword': new FormControl('', [Validators.required, Validators.minLength(3)])
      });
    }

    async guardar1(){
      // eslint-disable-next-line no-var
      var f =  this.formularioRegistro.value;

      if(this.formularioRegistro.invalid){

        const alert = await this.alertController.create({
          header:'datos incompletos',
          message: 'tienes que llenar todos los  campos ',
          buttons: [ 'aceptar'  ]

        });

        await alert.present();
        return;
      }
        const usuario = {
          nombre: f.nombre,
          passwor: f.passwor
        };

      localStorage.setItem('usuario',JSON.stringify(usuario));
      console.log('hola');

      this.router.navigate(['/home']);
    }
    ///stor
    guardar(){
      this.bdLocal.guardarContactos(this.Nombre,this.password);
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
  async presentToast(mensaje: string){
    const toast = await this.toast.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 4000
    });
    toast.present();
  }
}
