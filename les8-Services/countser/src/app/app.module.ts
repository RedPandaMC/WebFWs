import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeselectComponent } from './welcomeselect/welcomeselect.component';
import { TextComponent } from './text/text.component';
import { TextToggleComponent } from './text-toggle/text-toggle.component';

import { TextService } from './services/text.service';
import { MyshareserviceService } from './services/myshareservice.service';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WelcomeComponent,
    WelcomeselectComponent,
    TextComponent,
    TextToggleComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TextService, MyshareserviceService, ImageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
