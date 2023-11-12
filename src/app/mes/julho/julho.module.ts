import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JulhoPageRoutingModule } from './julho-routing.module';

import { JulhoPage } from './julho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JulhoPageRoutingModule
  ],
  declarations: [JulhoPage]
})
export class JulhoPageModule {}
