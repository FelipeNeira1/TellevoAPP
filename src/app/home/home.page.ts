import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  HomeForm: FormGroup;
  newUser={
    newUsuario:"",
    newPass:""
  };

  get user() {
    return this.HomeForm.get('user');
  }

  get password() {
    return this.HomeForm.get('password');
  }

  //----
  constructor(private form: FormBuilder ,private router: Router) {}
    //onint
  ngOnInit(){
    this.HomeForm = this.form.group({
      user: ['',[Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  public ingresar() {
    console.log(this.HomeForm.value);

    let navigationExtras: NavigationExtras = {
      state: {
        newUser: this.newUser
      }
    };
    this.router.navigate(['/principal'], navigationExtras);
  }
  siguiente2(){
    //dg
    this.router.navigate(['/clave']);
  }

}
