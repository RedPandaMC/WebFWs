import { Component } from '@angular/core';
import { FactComponent } from './fact/fact.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    FactComponent,
    DrinksComponent,
    ProfileComponent,
    InfoComponent,
    ContactComponent,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {}
