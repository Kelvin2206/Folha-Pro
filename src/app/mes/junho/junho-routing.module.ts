import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JunhoPage } from './junho.page';

const routes: Routes = [
  {
    path: '',
    component: JunhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JunhoPageRoutingModule {}
