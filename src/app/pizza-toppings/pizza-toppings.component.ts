import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  standalone: false,
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css',
})
export class PizzaToppingsComponent implements OnInit {
  //Magic DI ... Dependency Injection

  constructor(private pizzaSvc: PizzaService) {}

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  ngOnInit(): void {
    const pt = this.pizzaSvc.getPizzaTopptingsFromTheCloud();
    console.log(pt);

    this.availablePizzaToppings = pt.map((x) => ({
      ...x,
      checked: false,
    }));

    console.log(this.availablePizzaToppings);
  }
}
