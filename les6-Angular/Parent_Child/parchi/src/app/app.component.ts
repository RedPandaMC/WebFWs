import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { TodosettingsComponent } from './todosettings/todosettings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SettingsComponent,TodosettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parchi';
}
