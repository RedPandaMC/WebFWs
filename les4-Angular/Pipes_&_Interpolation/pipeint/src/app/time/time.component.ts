import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import moment from 'moment';
import 'moment/locale/nl'; // Import Dutch locale
moment.locale('nl');

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  time: string = moment().format('HH:mm:ss'); // Initial formatted time
  hour: number = parseInt(moment().format('HH'));

  ngOnInit() {
    setInterval(() => {
      this.time = moment().format('HH:mm:ss'); // Update the formatted time every 500ms
      this.hour = parseInt(moment().format('HH'));
    }, 900);
  }
}
