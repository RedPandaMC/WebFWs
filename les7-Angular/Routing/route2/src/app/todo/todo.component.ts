import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() max_tasks: number = 0;
  @Input() title: string = 'Todo lijstje';

  tasks: string[] = Array(0);

  addTask(task: string) {
    if (this.tasks.length < this.max_tasks || this.max_tasks === 0) {
      this.tasks.push(task);
    }
  }

  deleteTask(taskId: number) {
    this.tasks.splice(taskId, 1);
  }
}
