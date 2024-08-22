import { PersonComponent } from './person/person.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CounterComponent } from './counter/counter.component';
import { TodoComponent } from './todo/todo.component';
import { MovieComponent } from './movie/movie.component';
import { RedBoxComponent } from './red-box/red-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WelcomeComponent,
    CounterComponent,
    TodoComponent,
    MovieComponent,
    PersonComponent,
    RedBoxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bind';
}
