import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import _ from 'lodash';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  image = new Image();

  ngOnInit(): void {
    setInterval(() => {
      this.image.changeUrl();
    }, 5000);
  }
}

class Image {
  imageUrl: string;
  imageUrls: string[] = _.map(
    _.range(1, 153),
    (number) =>
      `https://mdbootstrap.com/img/Photos/Slides/img%20(${number}).jpg`
  );

  constructor(number: number = 1) {
    this.imageUrl = `https://mdbootstrap.com/img/Photos/Slides/img%20(${number}).jpg`;
  }

  changeUrl(): void {
    this.imageUrl = this.imageUrls[_.random(0, this.imageUrls.length - 1)];
  }
}
