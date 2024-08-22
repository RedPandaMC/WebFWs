import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-uptime',
  standalone: true,
  imports: [CommonModule, DatePipe],
  providers: [DatePipe],
  templateUrl: './uptime.component.html',
  styleUrls: ['./uptime.component.css']
})
export class UptimeComponent implements OnInit {
  start: Date = new Date();
  diffDate: Date|null = null;

  constructor() {
    this.updateDiff();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.updateDiff();
    }, 1000); // Update every second
  }

  updateDiff() {
    const now = new Date();
    const diffInMillis = now.getTime() - this.start.getTime();
    this.diffDate = new Date(diffInMillis);
  }
}
