import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth-guard.service';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
    { path: 'premium', loadChildren: () => import('./modules/premium/premium.module').then(m => m.PremiumModule), canActivate: [AuthGuard] },
    { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] }
  ];
