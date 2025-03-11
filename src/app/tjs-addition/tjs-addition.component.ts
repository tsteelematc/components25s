import { Component } from '@angular/core';

@Component({
  selector: 'app-tjs-addition',
  standalone: false,
  templateUrl: './tjs-addition.component.html',
  styleUrl: './tjs-addition.component.css'
})
export class TjsAdditionComponent {

  numberOne = 10;
  numberTwo = 90;
  total = 100;

  add = () => this.total = this.numberOne + this.numberTwo;

}
