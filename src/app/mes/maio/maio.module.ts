import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaioPageRoutingModule } from './maio-routing.module';

import { MaioPage } from './maio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaioPageRoutingModule
  ],
  declarations: [MaioPage]
})
export class MaioPageModule {}
