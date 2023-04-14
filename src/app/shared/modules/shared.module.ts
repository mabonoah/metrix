import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { PageNotFoundComponent, SpinnerComponent } from '../components';

const modules: any[] = [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule];

@NgModule({
  declarations: [SpinnerComponent, PageNotFoundComponent],
  imports: [...modules],
  exports: [
    PageNotFoundComponent,
    SpinnerComponent,
    ...modules
  ]
})
export class SharedModule { }
