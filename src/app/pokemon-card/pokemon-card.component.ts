import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: string;

  @Input()
  idPokemon!: number;

  getImagePokemon(){
    const formatNumber = this.leadingZero(this.idPokemon);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatNumber}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
