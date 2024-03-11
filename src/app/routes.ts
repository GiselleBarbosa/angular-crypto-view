import { Routes } from '@angular/router';
import { AddCryptoComponent } from './components/add-crypto/add-crypto.component';
import { ListCryptoComponent } from './components/list-crypto/list-crypto.component';
import { HomeComponent } from './components/home/home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

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
];

export const newsletterRoutes: Routes = [
  {
    path: 'novidades',
    component: NewsletterComponent,
    title: 'Novidades',
  },
];
