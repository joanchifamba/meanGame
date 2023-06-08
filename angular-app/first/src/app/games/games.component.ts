import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../games-data.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = []
  constructor(private gamesService: GamesDataService) { }
  ngOnInit(): void {
    this.gamesService.getGames()
    .subscribe((games: Game[]) => {
      this.games = games;
    });
  }
}

export class Game {
  #_id!: string;
  #title!: string;
  #year!: string;
  #rate!: number;
  #price!: number;
  #minPlayers !: number;
  #maxPlayers!: number;
  #minAge!: number;
  get _id() { return this.#_id }
  get title() { return this.#title; }
  set title(title: string) { this.#title = title; } get year() { return this.#year; }
  get rate() { return this.#rate; }
  get price() { return this.#price; }
  set price(price: number) { this.#price = price; }
  get minPlayers() { return this.#minPlayers; }
  get maxPlayers() { return this.#maxPlayers; }
  get minAge() { return this.#minAge; }
}
