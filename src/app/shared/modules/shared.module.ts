import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { PageNotFoundComponent, SpinnerComponent } from '../components';
import { SideBarComponent } from 'src/app/core/components';

const modules: any[] = [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule];

@NgModule({
  declarations: [SpinnerComponent, PageNotFoundComponent, SideBarComponent],
  imports: [...modules],
  exports: [
    PageNotFoundComponent,
    SpinnerComponent,
    SideBarComponent,
    ...modules
  ]
})
export class SharedModule { }
