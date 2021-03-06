import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AnimationController, Animation, ModalController, ToastController } from '@ionic/angular';
import * as Bounce from 'bounce.js';
import { APIClientService } from 'src/app/services/apiclient.service';
import { BdLocaLService } from '../../services/bd-loca-l.service';
//import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-comp-viaje',
  templateUrl: './comp-viaje.component.html',
  styleUrls: ['./comp-viaje.component.scss'],
})
export class CompViajeComponent implements OnInit {
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
  ///
  //@ViewChild('square', { static:false }) square: ElementRef;
  //isPlaying = false;
  constructor(private bdLocal: BdLocaLService,private router: Router,
    public alertController: AlertController,public modalController: ModalController,
    public animationCtrl: AnimationController,private api: APIClientService,
    private toastController: ToastController) {}
    ngOnInit() {}
    //geolocationNative(){

    //this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
    //console.log(geoposition);
     // });
    //}
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

    createViaje() {
      if (this.viaje.hora === undefined) {
        this.presentAlert('Seleccione una hora');
        return;
      }
      if (
        this.viaje.hora !== '' &&
        this.viaje.precio !== '' &&
        this.viaje.origen !== '' &&
        this.viaje.destino !== ''
      ) {
        this.viaje.viajeId = this.cant + 1;
        this.viaje.id = this.cant + 1;
        this.api.createViaje(this.viaje).subscribe(
          () => {
            this.presentAlert('Viaje agendado');
            // this.getViajes();
          },
          (error) => {
            console.log('Error ' + error);
          }
        );
      } else {
        this.presentAlert('Faltan campos por llenar');
      }
    }

      limpiar(){
        for (let [key, value] of Object.entries(this.viaje)) {
          Object.defineProperty(this.viaje, key, { value: '' });
        }
      }

        mostrar(){
          if (this.viaje.viajeId!=0 && this.viaje.hora!='') {
            this.presentAlert('Viaje agendado');
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


  //animacion
  @ViewChild('bouncebtn', { read: ElementRef })bouncebtn: ElementRef;
bounce() {
  const bounce = new Bounce();
  bounce
  .translate({
    from: { x: -300, y: 0 },
    to: { x: 0, y: 0 },
    duration: 600,
    stiffness: 4
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 0.1, y: 2.3 },
    easing: 'sway',
    duration: 800,
    delay: 65,
    stiffness: 2
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 5, y: 1 },
    easing: 'sway',
    duration: 300,
    delay: 30,
  })
    .applyTo(this.bouncebtn.nativeElement);
}
//loadMap() {

  //  const mapEle: HTMLElement = document.getElementById('map');

   // const myLatLng = { lat: -33.04487773980582, lng: -71.43802134098559 };

   // this.map = new google.maps.Map(mapEle, {
    //  center: myLatLng,
     // zoom: 12,
     // zoomControl: true,
     // mapTypeControl: false,
     //// scaleControl: false,
     // streetViewControl: false,
     // rotateControl: false,
     // fullscreenControl: true,
  // });

   // google.maps.event.addListenerOnce(this.map, 'idle', () => {
   //   // this.renderMarkers();
    //  mapEle.classList.add('show-map');
    //  const marker = {
     //   position: {
     //    lat: -33.04487773980582,
      //    lng: -71.43802134098559,
      //  },
      //  title: 'Lugar uno',
    // };
     // this.addMarker(marker);
   // });
 // }

 // addMarker(marker: Marker) {
  //  return new google.maps.Marker({
   //   position: marker.position,
   //   map: this.map,
   //   title: marker.title,
   // });

//}
}
