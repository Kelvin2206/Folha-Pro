import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JaneiroPageRoutingModule } from './janeiro-routing.module';

import { JaneiroPage } from './janeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JaneiroPageRoutingModule
  ],
  declarations: [JaneiroPage]
})
export class JaneiroPageModule {}
