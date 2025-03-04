import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { PizzaToppingComponent } from './pizza-topping/pizza-topping.component';
@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    PizzaToppingComponent
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
