import { Component } from '@angular/core';
import { MyshareserviceService } from '../services/myshareservice.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(private service: MyshareserviceService) {}

  incrementCount(): void {
    this.service.count++;
  }

  public get count(): number {
    return this.service.count;
  }

  public set count(value: number) {
    this.service.count = value;
  }

  setCount(value: string): void {
    this.count = parseInt(value, 10);
  }
}
