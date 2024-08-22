import { Injectable } from '@angular/core';
import { Pokemon } from '../types';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemon: Pokemon[] = [];
  favourite: Set<string> = new Set();

  constructor(private httpClient: HttpClient) {
    this.loadPokemon();
  }

  async loadPokemon(): Promise<void> {
    try {
      const data: Pokemon[] = await lastValueFrom(this.httpClient.get<Pokemon[]>('http://localhost:3000/pokemon'));
      this.pokemon = data;
    } catch (error) {
      console.error("Error loading Pokémon data:", error);
    }
  }

  getPokemonById(id: string): Pokemon | undefined {
    return this.pokemon.find(p => p.id === id);
  }

  toggleFavouritePokemon(id: string): void {
    if (this.favourite.has(id)) {
      this.favourite.delete(id);
    } else {
      this.favourite.add(id);
    }
  }

  checkFavouriteById(id: string): boolean {
    return this.favourite.has(id);
  }
}
