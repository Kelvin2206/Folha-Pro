import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetembroPageRoutingModule } from './setembro-routing.module';

import { SetembroPage } from './setembro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetembroPageRoutingModule
  ],
  declarations: [SetembroPage]
})
export class SetembroPageModule {}
