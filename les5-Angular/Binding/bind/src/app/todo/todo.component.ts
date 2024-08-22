import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,NgFor,NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  t : ToDo = new ToDo()
}

class ToDo {
  tasks: string[] = Array(0)

  addTask(task:string) {
    this.tasks.push(task)
  }

  deleteTask(taskId:number) {
    this.tasks.splice(taskId, 1);
  }
}
