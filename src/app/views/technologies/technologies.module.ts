import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TechnologiesComponents } from './components';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    ...TechnologiesComponents
  ],
  declarations: [
    ...TechnologiesComponents
  ]
})
export class TechnologiesModule { }
