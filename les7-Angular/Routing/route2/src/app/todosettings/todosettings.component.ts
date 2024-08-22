import { Component } from '@angular/core';

@Component({
  selector: 'app-todosettings',
  templateUrl: './todosettings.component.html',
  styleUrls: ['./todosettings.component.css'],
})
export class TodosettingsComponent {
  maxTasksSettings: number = 0;
  titleSettings: string = "ToDo Lijstje";
}

