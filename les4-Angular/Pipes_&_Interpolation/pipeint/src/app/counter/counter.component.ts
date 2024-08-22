import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.counter++;
    }, 200);
  }
}
