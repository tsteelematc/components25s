import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { DateComponent } from './date/date.component';
@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
