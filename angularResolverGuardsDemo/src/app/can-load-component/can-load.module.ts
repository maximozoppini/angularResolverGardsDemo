import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanLoadComponentComponent } from './can-load-component.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CanLoadComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CanLoadComponentComponent}
    ])
  ]
})
export class CanLoadModule { }
