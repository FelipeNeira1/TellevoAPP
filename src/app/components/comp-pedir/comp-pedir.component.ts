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


  constructor(private api: APIClientService,
    private toast: ToastController) { }
    ngOnInit(){}

  ionViewWillEnter(){
    this.getViajes();
  }

  getViajes(){
    this.api.getViajes().subscribe(
      (dato)=>{
      console.log('Lista viajes');
      console.log(dato);

      this.viajes=dato;
    }, (error)=>{
      console.log(error);
    });
  }
    deleteViaje(id){
      this.api.deleteViaje(id).subscribe(()=>{
        this.getViajes();
      }
      );}


}
