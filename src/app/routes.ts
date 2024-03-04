import { Routes } from '@angular/router';
import { AddCryptoComponent } from './components/add-crypto/add-crypto.component';

export const homeRoute: Routes = [
  {
    path: '',
    component: AddCryptoComponent,
    title: 'Adicionar criptomoeda',
  },
];
