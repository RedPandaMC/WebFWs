import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  random: number = _.random(1, 10);
  score: number = 0;
  delay: boolean = false; // Property to control display after delay

  ngOnInit() {
    setInterval(() => {
      this.random = _.random(1, 10);
      this.score = this.random;
      this.setDelay();
    }, 2000);
  }

  setDelay() {
    // Set delay to true after 2 seconds
    setTimeout(() => {
      this.delay = true;
    }, 2000);
  }
}
