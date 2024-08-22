import { Component } from '@angular/core';

@Component({
  selector: 'app-red-box',
  templateUrl: './red-box.component.html',
  styleUrls: ['./red-box.component.css']
})
export class RedBoxComponent {
  mouse : IMouse = {
    x: 0,
    y: 0
  }

  updateMousePosition(event: MouseEvent): void {
    this.mouse.x = event.clientX
    this.mouse.y = event.clientY
  }
}

interface IMouse {
  x: number;
  y: number;
}

