import { Routes } from '@angular/router';
import { AddCryptoComponent } from './components/add-crypto/add-crypto.component';
import { ListCryptoComponent } from './components/list-crypto/list-crypto.component';
import { HomeComponent } from './components/home/home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { EditCryptoComponent } from './components/edit-crypto/edit-crypto.component';

export const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página Inícial',
  },
];

export const criptoRoutes: Routes = [
  {
    path: 'listar-criptomoedas',
    component: ListCryptoComponent,
    title: 'Lista de criptomoedas',
  },

  {
    path: 'cadastrar-criptomoeda',
    component: AddCryptoComponent,
    title: 'Cadastrar criptomoedas',
  },

  {
    path: 'editar-criptomoedas/:id',
    component: EditCryptoComponent,
    title: 'Editar criptomoedas',
  },
];

export const newsletterRoutes: Routes = [
  {
    path: 'novidades',
    component: NewsletterComponent,
    title: 'Novidades',
  },
];
