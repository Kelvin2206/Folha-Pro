import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovembroPage } from './novembro.page';

const routes: Routes = [
  {
    path: '',
    component: NovembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovembroPageRoutingModule {}
