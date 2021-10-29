/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from '../interfaces/Usuario';
@Injectable({
  providedIn: 'root'
})
export class BdLocaLService {

  usuarios: Usuario[]=[];

  private _storage: Storage | null = null;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  registrado: boolean;
  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    this.cargarUsuarios();
  }

  async init(){
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage =storage;
  }

  guardarUsuarios(usuario: string ,contraseña: string){

      this.usuarios.unshift({usuario: usuario,contraseña:contraseña});
      // eslint-disable-next-line no-underscore-dangle
      this._storage.set('usuario',this.usuarios);
      this.presentToast('contacto guardado con exito');
    }

    async cargarUsuarios() {
      const registro= await this.storage.get('usuarios');
      if  (registro){
        this.usuarios = registro;
      }console.log(this.usuarios);
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
