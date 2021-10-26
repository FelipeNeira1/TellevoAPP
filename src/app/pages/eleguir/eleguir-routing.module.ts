import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleguirPage } from './eleguir.page';
import { CompPedirComponent } from 'src/app/components/comp-pedir/comp-pedir.component';
import { CompViajeComponent } from 'src/app/components/comp-viaje/comp-viaje.component';
import { CompCuentaComponent } from 'src/app/components/comp-cuenta/comp-cuenta.component';

const routes: Routes = [
  {
    path: '',
    component: EleguirPage,
      children:[
        {
          path:'uno',
          component:CompPedirComponent
        },
        {
          path:'dos',
          component:CompViajeComponent
        },
        {
          path:'tres',
          component:CompCuentaComponent
        }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleguirPageRoutingModule {}
