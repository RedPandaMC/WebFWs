import { Component, OnInit } from '@angular/core';
import pokemon from '../pokemon.json'
import { ActivatedRoute } from '@angular/router';
import Pokemon from '../types';

@Component({
  selector: 'app-pokemon-summary',
  templateUrl: './pokemon-summary.component.html',
  styleUrls: ['./pokemon-summary.component.css']
})
export class PokemonSummaryComponent implements OnInit{
  pokemon: Pokemon[] = pokemon;
  selectedPokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get("id")!;
      this.selectedPokemon = this.pokemon.find(p => p.id === id);
    })
  }
}
