import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutubroPageRoutingModule } from './outubro-routing.module';

import { OutubroPage } from './outubro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutubroPageRoutingModule
  ],
  declarations: [OutubroPage]
})
export class OutubroPageModule {}
