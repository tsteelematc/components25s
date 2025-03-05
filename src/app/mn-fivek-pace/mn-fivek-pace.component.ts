import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mn-fivek-pace',
  standalone: false,
  templateUrl: './mn-fivek-pace.component.html',
  styleUrl: './mn-fivek-pace.component.css'
})
export class MnFivekPaceComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }
  milesIn5k = 3.125;

  minutes = 0;
  seconds = 0;
  pace = 0;

  calculatePace = () => {
    this.pace = (this.minutes + (this.seconds / 60)) / this.milesIn5k;
  }
}
