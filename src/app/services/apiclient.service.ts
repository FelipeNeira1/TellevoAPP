import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { retry, catchError} from 'rxjs/operators';
import { Observable} from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {
  httpOptions = {
    headers: new HttpHeaders({
    ' Content-Type ': 'application/json',
    ' Access-Control-Allow-Origin ' :'*'
    })
  };

  // Se establece la base url del API a consumir
    apiURL = ' http://192.168.1.4:3000';

    // Se declara la variable http de tipo HttpClient
    constructor(private storage: Storage ,private http: HttpClient,private toastController: ToastController) {
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention


    //Obtener viajes
  getViajes(): Observable<any>{
    return this.http.get(this.apiURL+'/viajes').pipe(
      retry(3)
    );
  }
  //Obtener viaje
  getViaje(viajeId): Observable<any>{
    return this.http.get(this.apiURL+'/viajes/'+viajeId).pipe(
      retry(3));
  }
  //crear un viaje
  createViaje(viajeId): Observable<any>{
    return this.http.post(this.apiURL+'/viajes/',viajeId,this.httpOptions).pipe(
      retry(3));
    }
  //modificar un viaje
  updateViaje(viajeId): Observable<any>{
    return this.http.put(this.apiURL+'/viajes/'+viajeId,this.httpOptions).pipe(
      retry(3));
    }
  //borrar un viaje
  deleteViaje(viajeId): Observable<any>{
    return this.http.delete(this.apiURL+'/viajes/'+viajeId,this.httpOptions);
  }
}
