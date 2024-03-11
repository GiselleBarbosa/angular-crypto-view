import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () => import('./routes').then(rotas => rotas.homeRoute),
  },

  {
    path: '',
    loadChildren: () => import('./routes').then(rotas => rotas.criptoRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./routes').then(rotas => rotas.newsletterRoutes),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
