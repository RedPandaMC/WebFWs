import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-random',
  standalone: true,
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  @Input() min: number = 1;
  @Input() max: number = 100;
  @Input() interval: number = 1000;
  @Input() enable: boolean = true;

  @Output() randomValue = new EventEmitter<number>();

  value: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startGenerating();
  }

  startGenerating() {
    this.value = this.rng();
    this.randomValue.emit(this.value);

    this.intervalId = setInterval(() => {
      if (this.enable) {
        this.value = this.rng();
        this.randomValue.emit(this.value);
      }
    }, this.interval);
  }

  stopGenerating() {
    clearInterval(this.intervalId);
  }

  toggle(): void {
    this.enable = !this.enable;
    if (this.enable) {
      this.startGenerating();
    } else {
      this.stopGenerating();
    }
  }

  rng(): number {
    return _.random(this.min, this.max);
  }
}
