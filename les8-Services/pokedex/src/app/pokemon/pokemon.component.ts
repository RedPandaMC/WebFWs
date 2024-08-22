import { Component, OnInit } from '@angular/core';
import pokemon from '../pokemon.json';
import { Pokemon } from '../types';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public pokemon : Pokemon[] = pokemon;

  constructor() { }

  ngOnInit(): void {
  }
}
