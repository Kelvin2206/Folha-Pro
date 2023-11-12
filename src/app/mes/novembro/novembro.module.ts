import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovembroPageRoutingModule } from './novembro-routing.module';

import { NovembroPage } from './novembro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovembroPageRoutingModule
  ],
  declarations: [NovembroPage]
})
export class NovembroPageModule {}
