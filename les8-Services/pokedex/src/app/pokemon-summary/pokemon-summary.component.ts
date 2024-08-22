import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../services/pokedex.service';
import Pokemon from '../types';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-summary',
  templateUrl: './pokemon-summary.component.html',
  styleUrls: ['./pokemon-summary.component.css']
})
export class PokemonSummaryComponent implements OnInit{
  selectedPokemon: Pokemon | undefined;
  faStar = faStar;

  constructor(private route: ActivatedRoute,private service: PokedexService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get("id")!;
      this.selectedPokemon = this.service.getPokemonById(id)
    })
  }

  public checkFavouriteById(id:string) {
    return this.service.checkFavouriteById(id)
  }
}
