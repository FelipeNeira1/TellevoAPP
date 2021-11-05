import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { APIClientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-comp-cuenta',
  templateUrl: './comp-cuenta.component.html',
  styleUrls: ['./comp-cuenta.component.scss'],
})
export class CompCuentaComponent implements OnInit {
  data: any;
  viaje = {
    id:null,
    viajeId: null,
    hora : '',
    precio : '',
    origen: '',
    destino: ''
  };
  viajes: any;
  cant: any;

  constructor(private api: APIClientService, private router: Router,
    public alertController: AlertController,public navCtrl: NavController) {

  }

  ngOnInit() {}

  ionViewWillEnter(){
    this.getViajes();
  };

  getViajes(){
    this.api.getViajes().subscribe(
      (dato)=>{

      this.viajes= dato;
      this.cant = this.viajes.length;

      console.log(this.viajes.id);

    }, (error)=>{
      console.log(error);
    });
  }


  createViaje(){
      if(this.viaje.hora===undefined){
        this.presentAlert('Seleccione una hora');
        return;
      }
      if (this.viaje.hora!="" && this.viaje.precio!="" && this.viaje.origen!="" && this.viaje.destino!="") {
        this.viaje.viajeId = this.cant + 1;
        this.viaje.id = this.cant + 1;
        this.api.createViaje(this.viaje).subscribe(
          ()=>{
            this.presentAlert('Viaje agendado');

          },
          error=>{
            console.log('Error '+error);
          }
        );
      }else{
        this.presentAlert('Faltan campos por llenar');
      }
    }


    limpiar(){
      for(var[key,value] of Object.entries(this.viaje)){
        Object.defineProperty(this.viaje, key,{value:''});
      }
    }

      mostrar(){
        if (this.viaje.viajeId!=0 && this.viaje.hora!="") {
          this.presentAlert('Viaje agendado',);
        }else{
          this.presentAlert('Viaje no guardado');
        }
      }

    async presentAlert(titulo: string){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: titulo,
        buttons: ['OK']
      });
      await alert.present();
    }

}

