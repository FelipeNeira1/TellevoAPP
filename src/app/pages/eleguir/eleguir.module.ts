import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleguirPageRoutingModule } from './eleguir-routing.module';

import { EleguirPage } from './eleguir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleguirPageRoutingModule
  ],
  declarations: [EleguirPage]
})
export class EleguirPageModule {}
