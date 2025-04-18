import { Routes } from '@angular/router';
import {SomaComponent} from './pages/soma/soma.component';

export const routes: Routes = [
  {
    path: 'soma',
    loadComponent: () => import('./pages/soma/soma.component').then(m => m.SomaComponent)
  },
  {
    path: 'subtracao',
    loadComponent: () => import('./pages/subtracao/subtracao.component').then(m => m.SubtracaoComponent)
  },
  {
    path: 'multiplicacao',
    loadComponent: () => import('./pages/multiplicacao/multiplicacao.component').then(m => m.MultiplicacaoComponent)
  },
  {
    path: 'divisao',
    loadComponent: () => import('./pages/divisao/divisao.component').then(m => m.DivisaoComponent)
  }
];
