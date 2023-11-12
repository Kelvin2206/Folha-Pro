import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaioPage } from './maio.page';

const routes: Routes = [
  {
    path: '',
    component: MaioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaioPageRoutingModule {}
