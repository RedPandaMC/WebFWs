import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeselectComponent } from './welcomeselect/welcomeselect.component';
import { TextComponent } from './text/text.component';
import { TextToggleComponent } from './text-toggle/text-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WelcomeComponent,
    WelcomeselectComponent,
    TextComponent,
    TextToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
