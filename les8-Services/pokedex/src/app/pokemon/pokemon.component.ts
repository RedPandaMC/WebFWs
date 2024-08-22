import { Pokemon } from '../types';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  faStar = faStar;

  constructor(private service: PokedexService) { }

  ngOnInit(): void { }

  public get pokemon() : Pokemon[] {
    return this.service.pokemon
  }

  public checkFavouriteById(id:string) {
    return this.service.checkFavouriteById(id)
  }

  public toggleFavouritePokemon(id:string) {
    this.service.toggleFavouritePokemon(id)
  }
}
