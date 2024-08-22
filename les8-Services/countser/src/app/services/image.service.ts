import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageUrl: string;
  imageUrls: string[]

  constructor() {
    this.imageUrls = _.map(
      _.range(1, 153),
      (number) =>
        `https://mdbootstrap.com/img/Photos/Slides/img%20(${number}).jpg`
    );
    this.imageUrl = this.imageUrls[0];
    setInterval(() => this.changeUrl(),2000);
  };

  changeUrl(): void {
    this.imageUrl = this.imageUrls[_.random(0, this.imageUrls.length - 1)];
  }
}




