import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  standalone: false,
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
  selectedDate: Date | null = null;

  applyDate() {
    console.log("Date applied:", this.selectedDate);
  }

  cancelDate() {
    this.selectedDate = null;
  }

}
