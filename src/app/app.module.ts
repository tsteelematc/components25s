import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { RandomToppingPickerComponent } from './random-topping-picker/random-topping-picker.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component'; // Ensure this import is present

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule} from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MnFivekPaceComponent } from './mn-fivek-pace/mn-fivek-pace.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatNativeDateModule } from '@angular/material/core';
import { DateComponent } from './date/date.component';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { JgbMagic8BallComponent } from './jgb-magic-8-ball/jgb-magic-8-ball.component';
import { PizzaReviewComponent } from './pizza-review/pizza-review.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    DateComponent,
    RandomToppingPickerComponent,
    TjsAdditionComponent,
    JgbMagic8BallComponent,
    MnFivekPaceComponent,
    PizzaReviewComponent,
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatIconModule
    , MatDatepickerModule
    , MatNativeDateModule
    , MatFormFieldModule
    , MatFormField
    , CommonModule
    , MatProgressSpinnerModule
    , MatSelectModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
