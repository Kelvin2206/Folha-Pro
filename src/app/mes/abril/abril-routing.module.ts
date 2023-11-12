import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbrilPage } from './abril.page';

const routes: Routes = [
  {
    path: '',
    component: AbrilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbrilPageRoutingModule {}
