import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './authguard/authguard.guard'

const routes: Routes = [

  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'sign-in', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule), canActivate: [AuthguardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
