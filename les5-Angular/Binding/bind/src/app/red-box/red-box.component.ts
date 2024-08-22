import { Component } from '@angular/core';

@Component({
  selector: 'app-red-box',
  standalone: true,
  imports: [],
  templateUrl: './red-box.component.html',
  styleUrl: './red-box.component.css'
})
export class RedBoxComponent {
  m: Mouse = new Mouse();

  updateMousePosition(event: MouseEvent): void {
    this.m.setPosition(event.clientX, event.clientY);
  }
}

class Mouse {
  x: number = 0;
  y: number = 0;

  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}
