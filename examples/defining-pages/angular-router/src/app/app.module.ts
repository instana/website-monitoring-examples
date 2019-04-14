import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { TopicsComponent } from './components/topics.component';
import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReportToInstanaErrorHandler } from './errorHandlers/reportToInstana.errorHandler';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: ErrorHandler, useClass: ReportToInstanaErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
