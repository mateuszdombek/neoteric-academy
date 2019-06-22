import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {QuestionsComponents} from './components';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    ...QuestionsComponents
  ],
  declarations: [
    ...QuestionsComponents
  ]
})
export class QuestionsModule { }
