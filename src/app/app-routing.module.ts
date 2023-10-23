import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'usuario-form',
    pathMatch: 'full'
  },
  {
    path: 'usuario-form',
    loadChildren: () => import('./usuario/usuario-form/usuario-form.module').then( m => m.UsuarioFormPageModule)
  },
  {
    path: 'folha-pagamento',
    loadChildren: () => import('./folha-pagamento/folha-pagamento.module').then( m => m.FolhaPagamentoPageModule)
  },
  {
    path: 'holerite-page',
    loadChildren: () => import('./holerite-page/holerite-page.module').then( m => m.HoleritePagePageModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./resultado/resultado.module').then( m => m.ResultadoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
