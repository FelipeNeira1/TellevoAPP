import { Injectable } from '@angular/core';
import {BdLocaLService} from 'src/app/services/bd-loca-l.service';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(private auth: BdLocaLService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.registrado === false){
      this.router.navigate(['/eleguir']);
    }
    return this.auth.registrado;
  }

}
