import { Component } from '@angular/core';
import { RandomComponent } from '../random/random.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RandomComponent,FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  minValue: number = 1;
  maxValue: number = 100;
  enable: boolean = true;
  latestValue: number = 0;

  handleRandomValue(value: number) {
    this.latestValue = value;
  }

  toggle() {
    this.enable = !this.enable;
  }
}
