import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamecardComponent } from './gamecard/gamecard.component';


@NgModule({
  declarations: [
    GamesComponent,
    GamecardComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GamesModule { }
