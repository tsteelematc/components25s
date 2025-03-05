import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MnFivekPaceComponent } from './mn-fivek-pace/mn-fivek-pace.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    MnFivekPaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , FormsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatIconModule
    , MatFormField
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
