import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  temps : number[] = _.times(5, () => _.random(0, 25));
  cities : string[] = ["Anchorage", "Brussel", "Osaka", "Auckland", "Kaapstad"];

  ngOnInit(): void {
    setInterval(() => {
      this.temps = _.times(5, () => _.random(0, 25));
    },8000)
  }
}
