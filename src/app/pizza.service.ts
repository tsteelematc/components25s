import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    //ATM just pretending to do this until later
    const toppingsFromWebService = [
      {
        name: 'Olives'
        , price: 2.25
      }
      , {
        name: 'Pepperoni'
        , price: 1.75
      }
      , {
        name: 'Banana Peppers'
        , price: 1.50
      }
    ];
    return toppingsFromWebService;
  }
}
