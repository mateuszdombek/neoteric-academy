import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CoreGuards } from './guards';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './views/auth/auth.module';
import {TechnologiesModule} from './views/technologies/technologies.module';
import {QuestionsModule} from './views/questions/questions.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    AuthModule,
    TechnologiesModule,
    QuestionsModule
  ],
  providers: [
    CoreGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
