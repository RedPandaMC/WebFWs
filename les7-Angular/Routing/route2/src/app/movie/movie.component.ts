import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movie: Movie = {
    resolutionOptions: [[640, 400], [800, 600], [1024, 768]],
    resolution: [640, 400],
    isplaying: false,
  };

  playVideo(videoPlayer: HTMLVideoElement) {
    videoPlayer.play();
  }

  pauseVideo(videoPlayer: HTMLVideoElement) {
    videoPlayer.pause();
  }

  handlePlay() {
    this.movie.isplaying = true;
  }

  handlePause() {
    this.movie.isplaying = false;
  }

  updateResolution(event: any) {
    const selectedResolution = event.target.value.split(',');
    this.movie.resolution = [parseInt(selectedResolution[0]), parseInt(selectedResolution[1])];
  }
}

interface Movie {
  resolutionOptions: number[][];
  resolution: number[];
  isplaying: boolean;
}
