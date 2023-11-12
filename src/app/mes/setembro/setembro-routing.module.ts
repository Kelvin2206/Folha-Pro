import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetembroPage } from './setembro.page';

const routes: Routes = [
  {
    path: '',
    component: SetembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetembroPageRoutingModule {}
