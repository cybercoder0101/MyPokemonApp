import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
})
export class ListPokemonComponent {
  pokemonList: Pokemon[];
  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService
      .getPokemonList()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList));
  }

  goTodetail(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
