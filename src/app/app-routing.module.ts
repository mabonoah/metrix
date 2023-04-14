import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components';
import { PageNotFoundComponent } from './shared/components';
import { canActivate } from './core/guards';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: "views",
    loadChildren: () => import('./modules/views/views.module').then(m => m.ViewsModule),
    canActivate: [canActivate]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
