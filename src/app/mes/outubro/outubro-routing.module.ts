import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutubroPage } from './outubro.page';

const routes: Routes = [
  {
    path: '',
    component: OutubroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutubroPageRoutingModule {}
