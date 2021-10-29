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
    this.cargarUsuarios();
  }

  async init(){
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage =storage;
  }

  guardarUsuarios(Nombre: string ,nro: string){
const existe=this.agenda.find(C=>C.strNumero === nro);
    if (!existe){
      this.agenda.unshift({strNombre: Nombre,strNumero:nro});
      this._storage.set('agenda',this.agenda);
      // eslint-disable-next-line no-underscore-dangle
      this.presentToast('usuario guardado con exito');
    }else {
      this.presentToast('usuario  no se pudo registrar ');
    };
  }
  async cargarUsuarios() {
    const miIAgenda= await this.storage.get('IAgenda');
    if  (miIAgenda){
      this.agenda = miIAgenda;
    }console.log(this.agenda);
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
