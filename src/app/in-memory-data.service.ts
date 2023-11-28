import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { POKEMONS } from "./pokemon/mock-pokemon_list";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
