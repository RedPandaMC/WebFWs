import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person : IPerson = {} as IPerson;
  saved : boolean = false;

  constructor() { }

  ngOnInit() : void { }

  Save() : void
  {
    this.saved = true;
  }
}

interface IPerson
{
  Name: string;
  FirstName: string;
  Street: string;
  Number: string;
  City: string;
}
