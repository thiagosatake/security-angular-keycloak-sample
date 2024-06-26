import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] }
  ];
