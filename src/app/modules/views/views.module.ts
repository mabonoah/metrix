import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AddObjectComponent, AddObjectTypeComponent } from './pages';
import { SubordinatesComponent } from './components';

@NgModule({
  declarations: [
    AddObjectComponent,
    AddObjectTypeComponent,
    SubordinatesComponent
  ],
  imports: [
    SharedModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
