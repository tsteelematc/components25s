import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-topping',
  standalone: false,
  templateUrl: './pizza-topping.component.html',
  styleUrl: './pizza-topping.component.css'
})
export class PizzaToppingComponent {
  constructor(
    private pizzaSvc: PizzaService
  ) { }

  ngOnInit(): void {

    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

    this.availablePizzaToppings = pt.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.availablePizzaToppings);

  }

}
