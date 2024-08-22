import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  m: Movie = new Movie();

  playVideo(videoPlayer: HTMLVideoElement) {
    videoPlayer.play();
  }

  pauseVideo(videoPlayer: HTMLVideoElement) {
    videoPlayer.pause();
  }

  handlePlay() {
    this.m.isplaying = true;
  }

  handlePause() {
    this.m.isplaying = false;
  }

  updateResolution(event: any) {
    const selectedResolution = event.target.value.split(',');
    this.m.resolution = [parseInt(selectedResolution[0]), parseInt(selectedResolution[1])];
  }
}

class Movie {
  resolutionOptions: number[][] = [[640, 400], [800, 600], [1024, 768]];
  resolution: number[] = this.resolutionOptions[0];
  isplaying: boolean = false;
}
