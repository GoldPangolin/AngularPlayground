import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempConvertedComponent } from './temp-converted.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path     : '',
      component: TempConvertedComponent,
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [TempConvertedComponent]
})
export class TempConvertedModule { }
