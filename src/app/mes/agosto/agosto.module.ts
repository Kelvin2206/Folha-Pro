import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgostoPageRoutingModule } from './agosto-routing.module';

import { AgostoPage } from './agosto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgostoPageRoutingModule
  ],
  declarations: [AgostoPage]
})
export class AgostoPageModule {}
