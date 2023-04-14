import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AddObjectComponent, AddObjectTypeComponent } from './pages';

@NgModule({
  declarations: [
    AddObjectComponent,
    AddObjectTypeComponent
  ],
  imports: [
    SharedModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
