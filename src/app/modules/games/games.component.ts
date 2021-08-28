import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  searchForm: FormGroup;
  gameList: Game[] = [];

  constructor(private gamesService: GamesService) {
    this.searchForm = new FormGroup({
      searchGame: new FormControl('', Validators.minLength(1)),
    });
    this.gameList = [];
  }

  ngOnInit(): void {
    this.gamesService.games$.subscribe((games) => this.gameList = games);
  }

  searchGame(): void {
    const gameName = this.searchForm.value?.searchGame;
    this.gamesService.getGames(gameName);
    this.gamesService.games$.subscribe((games) => this.gameList = games);
  }
}
