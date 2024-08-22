import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit,OnDestroy {
  constructor(private service : TextService) {}

  public get enabled() {
    return this.service.enabled
  }

  public get text() {
    return this.service.text
  }

  public set text(text : string) {
    this.service.text = text;
  }

  ngOnInit(): void {
    console.log("created!")
  }

  ngOnDestroy(): void {
    console.log("destroyed!")
  }

}
