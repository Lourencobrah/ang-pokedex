import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../types/pokemon.type';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];

  constructor(public httpClient: HttpClient) {
    this.loadPokemons();
  }

  async loadPokemons() {
    const requisicao = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .toPromise();

    this.pokemons = requisicao.results;
  }
}
