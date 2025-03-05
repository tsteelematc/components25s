import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-random-topping-picker',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './random-topping-picker.component.html',
  styleUrls: ['./random-topping-picker.component.css']
})
export class RandomToppingPickerComponent {
  selectedToppings: { name: string; price: number }[] = [];

  constructor(private pizzaSvc: PizzaService) {}

  pickRandomToppings() {
    const toppings = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    this.selectedToppings = toppings.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * toppings.length) + 1);
  }
}
