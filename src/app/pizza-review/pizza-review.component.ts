import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-review',
  standalone: false,
  templateUrl: './pizza-review.component.html',
  styleUrl: './pizza-review.component.css'
})
export class PizzaReviewComponent {
  reviews: { rating: number, comment: string }[] = [];
  rating: number = 5; 
  comment: string = '';

  addReview() {
    if (this.comment.trim() === '') return; 
    this.reviews.push({
      rating: this.rating,
      comment: this.comment
    });

    this.rating = 5;
    this.comment = '';
  }
}
