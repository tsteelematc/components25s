import { Component } from '@angular/core';

@Component({
  selector: 'app-jgb-magic-8-ball',
  standalone: false,
  templateUrl: './jgb-magic-8-ball.component.html',
  styleUrl: './jgb-magic-8-ball.component.scss',
})
export class JgbMagic8BallComponent {
  // Creates a string array that contains the official responses from the Magic 8-Ball
  answers: string[] = [
    // Positive answers
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',

    // Neutral answers
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',

    // Negative answers
    'Don’t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
  ];

  //Creates a answer property that will have the type of a string(our answer) or null(no answer has been picked yet) This also has the default of null so that no answer shows up in the view to start with
  answer: string | null = null;

  //Creates a loading property for the loading spinner UI
  loading: boolean = false;

  //This function sets the answer property to a random value from the answers array.
  shakeBallOld = () =>
    (this.answer =
      this.answers[Math.floor(Math.random() * this.answers.length)]);

  //This function does the same thing as the shakeBallOld but adds a delay
  shakeBallOld2 = () => {
    this.answer = null;

    setTimeout(() => {
      this.answer =
        this.answers[Math.floor(Math.random() * this.answers.length)];
    }, 1500);
  };

  //This function does the same thing as the shakeBallOld2 but adds logic for a loading spinner
  shakeBall = () => {
    this.answer = null;
    this.loading = true;

    setTimeout(() => {
      this.answer =
        this.answers[Math.floor(Math.random() * this.answers.length)];
      this.loading = false;
    }, 1500);
  };
}
