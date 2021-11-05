/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController, AnimationController,Animation, ToastController, NavController } from '@ionic/angular';
import { BdLocaLService } from '../../services/bd-loca-l.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,AfterViewInit {
//


//Nombre: string;
//password: string;
anim: Animation;
  //----
  formulariologin: FormGroup;
  constructor(private fb: FormBuilder ,private router: Router
    ,public alertController: AlertController,
    public toastController: ToastController,public animationCtrl: AnimationController
    ,private bdLocal: BdLocaLService,private activeroute: ActivatedRoute,public navCtrl: NavController) {


      this.formulariologin =this.fb.group({
        // eslint-disable-next-line quote-props
        'nombre': new FormControl('',[Validators.required, Validators.minLength(3)]),
        // eslint-disable-next-line quote-props
        'passwor': new FormControl('',[Validators.required, Validators.minLength(3)])
      });

}
  async ingresar1(){

    // eslint-disable-next-line no-var
    var f =  this.formulariologin.value;

    // eslint-disable-next-line no-var
    var usuario = JSON.parse(localStorage.getItem('usuario'));

      if(usuario.nombre === f.nombre && usuario.password === f.password){
        console.log('ingresado');
        localStorage.setItem('ingresado','true');
        this.navCtrl.navigateRoot('/eleguir');
      }else{
        const alert = await this.alertController.create({
          header:'datos incorrectos',
          message: 'Los datos que ingresaste son incorectos ',
          buttons: [ 'aceptar' ]
        });

        await alert.present();
      }
    }


    cerrar1(){
      this.router.navigate(['/registro']);
    }

    guardar(){
   //   this.bdLocal.guardarContactos(this.Nombre,this.password);
    }
ionViewWillEnter(){
  //this.bdLocal.cargarContectos();
}

ngAfterViewInit(){
 // this.anim = this.animationCtrl.create('myanim');
 // this.anim
 // .duration(1500)
 // .easing('ease-out')
 // .iterations(Infinity)
 // .fromTo('trasfrom','traslateX(0px)','traslateX(300px)')
 // .fromTo('opacity',1,0.2);
}
//validacion
  ngOnInit(){}






 //contraseña
  validarUsuario(user: string) {
    if(user.length >=4){
      return {
        isValid: true,
        message: ''
      };
    } else {
        return {
          isValid: false,
          message: 'El nombre de usuario no es válido.'
        };
    }
  }

  async mostrarToast() {
    await this.toastController.create({
      message: 'Un correo se te fue enviado para recuperar la contraseña o cambiarla ',
      duration: 4000,
      position: 'bottom'
    }).then(res => res.present());
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Para recuperar tu contraseña o cambiarla se te enviara un correo luego del ingresar su usuario .',
      backdropDismiss: false,
      inputs: [
        {
          type: 'text',
          name: 'user',
          label: 'Usuario',
          placeholder: 'usuario',
        }
      ],
      buttons: [
        {
          text: 'Enviar',
          role: 'submit',
          handler: (formData: { user: string }) => {
            if (formData.user && this.validarUsuario(formData.user).isValid) {
              this.mostrarToast();
              return formData;
            } else {
              if (!alert.getElementsByClassName('mensaje-error').length) {
                const input = alert.getElementsByTagName('input')[0];
                const validationErrors = document.createElement('div');
                validationErrors.className = 'mensaje-error';
                const errorMessage = document.createElement('small');
                errorMessage.classList.add('mensaje-error');
                errorMessage.textContent = 'El nombre de usuario no es válido.';
                validationErrors.appendChild(errorMessage);
                input.insertAdjacentElement('afterend', validationErrors);
              }
              return false;
            }
          }
        },
      {
        text: 'Cancelar',
        role: 'cancel',
      }
      ]
    });
    await alert.present();
  }


}
