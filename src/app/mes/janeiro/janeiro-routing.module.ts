// janeiro-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JaneiroPage } from './janeiro.page';

const routes: Routes = [
  {
    path: '',
    component: JaneiroPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JaneiroPageRoutingModule {}
