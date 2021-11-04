import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { APIClientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-comp-pedir',
  templateUrl: './comp-pedir.component.html',
  styleUrls: ['./comp-pedir.component.scss'],
})
export class CompPedirComponent implements OnInit {
  viajes: any;
  viaje: any={
    id: null,
    inicio:'',
    destino: '',
    tarifa: '',
    userId: null
  };
  constructor(private api: APIClientService,
    private toast: ToastController) { }
    ngOnInit(){}

    ionViewWillEnter(){
      this.getViajes();
    }
    getViajes(){
      this.api.getViajes().subscribe((dato)=>{
        console.log('Lista viajes');
        console.log(dato);
        this.viajes=dato;
      });
    }
    deleteViaje(id){
      this.api.deleteViaje(id).subscribe(()=>{
        this.getViajes();
      }
      );}


}
