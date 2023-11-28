import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { catchError, of, tap } from "rxjs";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
  searchPokemonList(terme: string): Observable<Pokemon[]> {
    if (terme.length <= 1) {
      return of([]);
    } else {
      return this.http.get<Pokemon[]>(`api/pokemons/?name=${terme}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
    }
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOption = {
      headers: new HttpHeaders({ "Content-Type": "applicaton/json" }),
    };

    return this.http.put("api/pokemons", pokemon, httpOption).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  AddPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ "content-type": "application/json" }),
    };
    return this.http.post<Pokemon>("api/pokemons", pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue);
  }
  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
