import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FevereiroPageRoutingModule } from './fevereiro-routing.module';

import { FevereiroPage } from './fevereiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FevereiroPageRoutingModule
  ],
  declarations: [FevereiroPage]
})
export class FevereiroPageModule {}
