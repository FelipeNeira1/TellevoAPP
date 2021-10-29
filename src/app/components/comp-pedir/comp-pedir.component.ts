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
  ionViewVillEnter(){
    this.getViajes();
  }
  getViajes(){
    this.api.getViajes().subscribe((data)=>{
      this.viajes= data;
      this.viajes.reverse();
    }
    );}
    deleteViajes(id){
      this.api.deleteViajes(id).subscribe(()=>{
        this.getViajes();
      }
      );}
  ngOnInit() {}

}
