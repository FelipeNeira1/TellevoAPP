/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController, AnimationController,Animation, ToastController } from '@ionic/angular';
import { BdLocaLService } from '../../services/bd-loca-l.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,AfterViewInit {
//
HomeForm: FormGroup;
newUser={
newUsuario:'',
};
dato: string;
nro: string;
nombre: string;
contra: string;
anim: Animation;
auth: any;
usus: any;
  usuario: any;
  data: any;


  get user() {
    return this.HomeForm.get('user');
  }

  get password() {
    return this.HomeForm.get('password');
  }

  //----
  constructor(private form: FormBuilder ,private router: Router
    ,public alertController: AlertController,
    public toastController: ToastController,public animationCtrl: AnimationController
    ,private bdLocal: BdLocaLService,private activeroute: ActivatedRoute) {
      this.router.navigate(['eleguir/uno']);
      this.activeroute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.nombre = this.router.getCurrentNavigation().extras.state.newUser;
          console.log(this.nombre);
        } else {this.router.navigate(['/home']);}
      });
    }
    guardar(){
      this.bdLocal.guardarUsuarios(this.nombre,this.contra);
    }
ionViewWillEnter(){
  this.bdLocal.cargarUsuarios();
}
ngAfterViewInit(){
  this.anim = this.animationCtrl.create('myanim');
  this.anim
  .duration(1500)
  .easing('ease-out')
  .iterations(Infinity)
  .fromTo('trasfrom','traslateX(0px)','traslateX(300px)')
  .fromTo('opacity',1,0.2);
}//

    ///

  ngOnInit(){
    this.HomeForm = this.form.group({
      user: ['',[Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  public ingresar() {
    console.log(this.HomeForm.value);

    const navigationExtras: NavigationExtras = {
      state: {
        newUser: this.newUser
      }
    };
    this.router.navigate(['/eleguir'], navigationExtras);
  }

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
  //contraseña
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
  //contraseña2
  async mostrarToast2() {
    await this.toastController.create({
      message: 'la cuenta fue creada',
      duration: 4000,
      position: 'bottom'
    }).then(res => res.present());
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      message: 'Para crear  una cuenta porfavor rellena este formulario.',
      backdropDismiss: false,
      inputs: [
        {
          type: 'text',
          name: 'user',
          label: 'Usuario',
          placeholder: 'usuario',
        },
        {
          type: 'text',
          name: 'user',
          label: 'contraseña',
          placeholder: 'contraseña',
        }
      ],
      buttons: [
        {
          text: 'Enviar',
          role: 'submit',
          handler: (formData: { user: string }) => {
            if (formData.user && this.validarUsuario(formData.user).isValid) {
              this.mostrarToast2();
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
  cerrar1(){
    this.router.navigate(['/registro']);
  }
  segmentChanged($event){
    let direccion=$event.detail.value;
    this.router.navigate(['home/'+direccion]);
  }
//
lohome(){
  const i = this.usus.findindex(e => e.usuario === this.usuario);
  if(i >= 0) {
    if (this.usuario === this.usus[i].usuario && this.password === this.usus[i].contraseña){
      console.log('El usuario y contraseha existe');
      this.auth.logueado = true;
      this.anination();
    }else {
      console.log('no existen');
      this.auth.logueado = false;
      this.presentToast('Usuario y/o Contraseña Inválidos');
    }
  }else{
    console.log('no existen ');
    this.auth.logueada = false;
    this.presentToast('Usuario y/o Contraseña Inválidos');
  }
  setTimeout (()=>{
  const navigationExtras: NavigationExtras = {
    state: {usuario: this.usuario }
  };
    this.router.navigate(['/eleguir'], navigationExtras);
  }, 1000);
}
  anination() {
    throw new Error('Method not implemented.');
  }
  async presentToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 4000
    });
    toast.present();
  }
}
