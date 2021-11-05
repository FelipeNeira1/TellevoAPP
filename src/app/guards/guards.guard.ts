import { Injectable } from '@angular/core';
import {BdLocaLService} from 'src/app/services/bd-loca-l.service';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(private auth: BdLocaLService,private router: Router,private navCtrl: NavController){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem ('ingresado')){
      this.navCtrl.navigateRoot('eleguir');
      return false;
    }else{
      return true;
    }

  }

}
