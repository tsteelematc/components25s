import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  standalone: false,
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css'
})
export class PizzaToppingsComponent implements OnInit {

  //Magic DI or dependence injection
  //Getting access to pizza service
  constructor (
    private pizzaSvc: PizzaService
  ) { }

  //angular method, called when ready to initialize
  ngOnInit(): void {
    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);
      
  }
}
