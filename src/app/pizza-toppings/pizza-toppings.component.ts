import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  standalone: false,
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css'
})
export class PizzaToppingsComponent implements OnInit {

  // Magic DI... (Dependency Injection)...
  constructor (
    private pizzaSvc: PizzaService
  ) {}

  ngOnInit(): void {
    
    const pt = this.pizzaSvc.getPizzaTopppingsFromTheCloud();
    console.log(pt);
  }

}
