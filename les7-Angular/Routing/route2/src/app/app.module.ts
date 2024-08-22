import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodosettingsComponent } from './todosettings/todosettings.component';
import { MovieComponent } from './movie/movie.component';
import { RedBoxComponent } from './red-box/red-box.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosettingsComponent,
    MovieComponent,
    RedBoxComponent,
    WelcomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'ToDo',
          component: TodosettingsComponent,
        },
        {
          path: 'Movie',
          component: MovieComponent,
        },
        {
          path: 'Box',
          component: RedBoxComponent,
        },
        {
          path: '',
          redirectTo: 'ToDo',
          pathMatch: 'full',
        },
      ],
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
