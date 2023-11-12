import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DezembroPageRoutingModule } from './dezembro-routing.module';

import { DezembroPage } from './dezembro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DezembroPageRoutingModule
  ],
  declarations: [DezembroPage]
})
export class DezembroPageModule {}
