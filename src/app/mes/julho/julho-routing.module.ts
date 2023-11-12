import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JulhoPage } from './julho.page';

const routes: Routes = [
  {
    path: '',
    component: JulhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JulhoPageRoutingModule {}
