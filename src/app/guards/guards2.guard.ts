import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
//ingresado
@Injectable({
  providedIn: 'root'
})
export class Guards2Guard implements CanActivate {
  constructor(private navCtrl: NavController){}
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('ingresado')){
      return true;
    }else{
      this.navCtrl.navigateRoot('home');
      return false;
    }
  }

}
