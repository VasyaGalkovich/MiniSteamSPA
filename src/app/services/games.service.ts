import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  games$: Observable<Game[]>;

  constructor(public afs: AngularFirestore) {
    this.games$ = this.afs.collection<Game>('games').valueChanges();
  }

  getGames(searchKey: string = '') {
    this.games$ = this.afs.collection<Game>('games', ref => ref.where('name', '>=', searchKey)).valueChanges(); //case sensitive search
  }
}
