import { Component } from '@angular/core';

@Component({
  selector: 'app-jgb-magic-8-ball',
  standalone: false,
  templateUrl: './jgb-magic-8-ball.component.html',
  styleUrl: './jgb-magic-8-ball.component.css',
})
export class JgbMagic8BallComponent {
  //Creates a string array that contains the possible answers from the 8-ball
  answers: string[] = [
    'Yes',
    'No',
    'Ask again later',
    'Definitely',
    'Absolutely not',
    'Unclear, try again',
    'Most likely',
    'Doubtful',
  ];

  //Creates a answer property that will have the type of a string(our answer) or null(no answer has been picked yet) This also has the default of null so that no answer shows up in the view to start with
  answer: string | null = null;

  //This function sets the answer property to a random value from the answers array.
  shakeBallOld = () =>
    (this.answer =
      this.answers[Math.floor(Math.random() * this.answers.length)]);

  //This function does the same thing as the shakeBallOld but adds a delay
  shakeBall = () => {
    this.answer = null;

    setTimeout(() => {
      this.answer =
        this.answers[Math.floor(Math.random() * this.answers.length)];
    }, 1500);
  };
}
