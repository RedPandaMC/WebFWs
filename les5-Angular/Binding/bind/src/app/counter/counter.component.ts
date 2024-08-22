import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  c: Counter = new Counter();
}

class Counter {
  count: number = 0;
  selectedValue: number = this.count % 4;

  incrementCount(): void {
    this.count++;
    this.updateSelectedValue();
  }

  setCount(value: string): void {
    this.count = parseInt(value, 10);
    this.updateSelectedValue();
  }

  private updateSelectedValue(): void {
    this.selectedValue = this.count % 4;
  }
}


