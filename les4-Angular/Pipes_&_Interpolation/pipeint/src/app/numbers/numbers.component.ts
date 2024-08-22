import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [CommonModule,NgIf,NgFor],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  numbers : number[] = [2,4,5,6,8,9,10,14]
}
