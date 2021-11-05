import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {GuardsGuard} from 'src/app/guards/guards.guard';
import { Guards2Guard } from './guards/guards2.guard';
const routes: Routes = [
  {
    path: 'home',
    canActivate:[GuardsGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    //canActivate:[GuardsGuard],
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'eleguir',
    canActivate:[Guards2Guard],
    loadChildren: () => import('./pages/eleguir/eleguir.module').then( m => m.EleguirPageModule)
  },
  {
    path: 'registro',
    canActivate:[GuardsGuard],
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
