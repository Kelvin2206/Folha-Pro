import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DezembroPage } from './dezembro.page';

const routes: Routes = [
  {
    path: '',
    component: DezembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DezembroPageRoutingModule {}
