import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  enabled: boolean = true;
  text: string = "";

  constructor() { }
}
