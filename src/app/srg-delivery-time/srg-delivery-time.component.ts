import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-srg-delivery-time',
  standalone: false,
  templateUrl: './srg-delivery-time.component.html',
  styleUrl: './srg-delivery-time.component.css',
})
export class SrgDeliveryTimeComponent implements OnInit {
  // initialize time properties to null
  selectedTime: Date = new Date();
  currentTime: Date = new Date();

  ngOnInit(): void {
    // get current time on load
    this.currentTime = new Date();

    // set selected time to 30 min after current time on app load
    this.selectedTime = new Date();
    this.selectedTime.setMinutes(this.selectedTime.getMinutes() + 30);
  }

  // set color
  get timeColor() {
    let color = 'red';
    if (this.selectedTime.getTime() >= this.currentTime.getTime() + 30) {
      color = 'green';
    }
    return color;
  }
}
