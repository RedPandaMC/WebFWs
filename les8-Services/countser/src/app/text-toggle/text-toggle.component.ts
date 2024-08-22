import { Component } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-text-toggle',
  templateUrl: './text-toggle.component.html',
  styleUrls: ['./text-toggle.component.css']
})
export class TextToggleComponent {

  constructor(private service:TextService) {}

  public get enabled() : boolean {
    return this.service.enabled
  }

  public set enabled(v:boolean) {
    this.service.enabled = v
  }

  public toggle(): void {
    this.enabled = !this.enabled
  }
}
