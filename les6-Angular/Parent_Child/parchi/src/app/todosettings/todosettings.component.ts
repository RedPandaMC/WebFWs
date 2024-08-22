import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todosettings',
  standalone: true,
  imports: [TodoComponent, FormsModule],
  templateUrl: './todosettings.component.html',
  styleUrl: './todosettings.component.css'
})
export class TodosettingsComponent {
  maxTasksSettings: number = 0
  titleSettings:string = "ToDo Lijstje"
  taakLijst: string[] = Array(0)
}
