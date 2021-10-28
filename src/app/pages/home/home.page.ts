/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AlertController, AnimationController,Animation, ToastController } from '@ionic/angular';
import { BdLocaLService } from '../../services/bd-loca-l.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
//
  HomeForm: FormGroup;
  newUser={
  newUsuario:'',
  };

  get user() {
    return this.HomeForm.get('user');
  }

  get password() {
    return this.HomeForm.get('password');
  }

  //----
  constructor(private form: FormBuilder ,private router: Router,public alertController: AlertController,
    public toast: ToastController,public animationCtrl: AnimationController,private bdLocal: BdLocaLService) {}
    ///stor
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
  //contraseña
  async mostrarToast() {
    await this.toast.create({
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
  cerrar1(){
    this.router.navigate(['/registro']);
  }
}
