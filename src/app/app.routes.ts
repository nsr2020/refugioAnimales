import { Routes } from '@angular/router';
import { exitFormGuard } from './core/guards/exit-form.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'animals',
    loadComponent: () => import('./pages/our-animals/our-animals.component').then(m => m.OurAnimalsComponent)
  },
  {
    path: 'animals/:id',
    loadComponent: () => import('./pages/adoption-form/adoption-form.component').then(m => m.AdoptionFormComponent),
    canDeactivate: [exitFormGuard]
  }
];
