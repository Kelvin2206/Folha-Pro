import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JunhoPageRoutingModule } from './junho-routing.module';

import { JunhoPage } from './junho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JunhoPageRoutingModule
  ],
  declarations: [JunhoPage]
})
export class JunhoPageModule {}
