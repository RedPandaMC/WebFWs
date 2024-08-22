import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule,NgFor,NgIf],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carBrands: Carbrand[] = [
    new Carbrand('Toyota', 'Corolla', 'Camry', 'RAV4', 'Aygo X'),
    new Carbrand('Honda', 'Civic', 'Accord', 'CR-V'),
    new Carbrand('Ford'),
    new Carbrand('BMW', '3 Series', 'X5'),
    new Carbrand('Mercedes-Benz', 'GLA')
  ];

}

class Carbrand {
  readonly name: string;
  readonly models: string[];

  constructor(name: string, ...models: string[]) {
    this.name = name;
    this.models = models;
  }
}
