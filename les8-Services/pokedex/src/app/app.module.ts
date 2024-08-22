import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonSummaryComponent } from './pokemon-summary/pokemon-summary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    PokemonSummaryComponent,
    NavbarComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: 'pokemon/:id',
          component: PokemonSummaryComponent,
        },
        {
          path: 'pokemon',
          component: PokemonComponent,
        },
        {
          path: 'maps',
          component: MapsComponent,
        },
        {
          path: 'home',
          component: HomeComponent,
          pathMatch: 'full',
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
      ],
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
