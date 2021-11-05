/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IAgenda } from '../interfaces/iagenda';
@Injectable({
  providedIn: 'root'
})
export class BdLocaLService {

  agenda: IAgenda[]=[];

  private _storage: Storage | null = null;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  registrado: boolean;
  constructor(private storage: Storage, public toastController: ToastController) {
    this.init();
    this.cargarContectos();
  }

  async init(){
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage =storage;
  }
  async cargarContectos() {
    const miAgenda= await this.storage.get('agenda');
    if (miAgenda){
      this.agenda=miAgenda;
    }
  }
  guardarContactos(Nombre: string,password: string){
    const existe= this.agenda.find(c=>c.strNombre===Nombre);
    if (!existe){
      this.agenda.unshift({strNombre:Nombre,strPassword:password});
      this._storage.set('agenda',this.agenda);
      this.presentToast('Su Usuario se ha registrado correctamente');

    }else{
      this.presentToast('Error: El usuario ya existe');
    }
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
