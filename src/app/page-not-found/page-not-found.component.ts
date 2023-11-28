import { Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
    <div class="center">
      <img
        src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
        alt=""
      />
      <h1>Hey , cette page n'existe pas !</h1>
      <a
        routerLink="/pokemons"
        href=""
        class="waves-effects waves-teal btn-flat"
      >
        Retouner à l'écran d'accueil
      </a>
    </div>
  `,
  styles: [],
})
export class PageNotFoundComponent {}
