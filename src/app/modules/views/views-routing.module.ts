import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddObjectComponent, AddObjectTypeComponent } from './pages';

const routes: Routes = [
  { path: '', redirectTo: '/views/add-object', pathMatch: 'full' },
  { path: 'add-object', component: AddObjectComponent },
  { path: 'add-object-type', component: AddObjectTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
