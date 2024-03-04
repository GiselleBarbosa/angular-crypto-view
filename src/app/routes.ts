import { Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';

export const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página inicial',
  },
];
