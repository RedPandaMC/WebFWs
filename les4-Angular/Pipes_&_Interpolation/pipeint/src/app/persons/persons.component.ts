import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import moment from 'moment';


@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent {
  personsArray: Person[] = [
    new Person('Emily', 'Davis', '2000-12-20'),
    new Person('John', 'Doe', '1990-01-01'),
    new Person('Jane', 'Smith', '1985-05-15'),
    new Person('Michael', 'Johnson', '1978-03-30'),
    new Person('Robert', 'Brown', '1992-07-07'),
  ];

  getAge(birthdate:moment.Moment,precise:boolean=false): number {
    return moment().diff(birthdate, 'years', precise);
  }
}

class Person {
  readonly name: string;
  readonly surname: string;
  readonly birthdate: moment.Moment;

  constructor(name: string, surname: string, birthdate: string) {
    this.name = name;
    this.surname = surname;
    this.birthdate = moment(birthdate, 'YYYY-MM-DD');  // Initialize with Moment.js
  }


}
