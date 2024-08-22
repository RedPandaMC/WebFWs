import { Component } from '@angular/core';
import { ImageService } from '../services/image.service'

@Component({
  selector: 'app-welcomeselect',
  templateUrl: './welcomeselect.component.html',
  styleUrls: ['./welcomeselect.component.css']
})
export class WelcomeselectComponent {
  constructor(private service : ImageService) {}

  public get imageUrl() : string {
    return this.service.imageUrl
  }

  public set imageUrl(imageUrl : string) {
    this.service.imageUrl = imageUrl;
  }

  public get imageUrls() : string[] {
    return this.service.imageUrls
  }
}
