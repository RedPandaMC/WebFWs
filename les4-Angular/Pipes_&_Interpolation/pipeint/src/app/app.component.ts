import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { CounterComponent } from './counter/counter.component';
import { TimeComponent } from './time/time.component';
import { UptimeComponent } from './uptime/uptime.component';
import { WeatherComponent } from './weather/weather.component';
import { CarsComponent } from './cars/cars.component';
import { PersonsComponent } from './persons/persons.component';
import { NumbersComponent } from './numbers/numbers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RandomComponent,
    CounterComponent,
    TimeComponent,
    UptimeComponent,
    WeatherComponent,
    CarsComponent,
    PersonsComponent,
    NumbersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipeint';
}
