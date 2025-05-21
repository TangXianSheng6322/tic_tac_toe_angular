import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  imports: [],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css',
})
export class TictactoeComponent implements OnInit {
  squares: string[] = [];
  xIsNext: boolean = true;
  winner: string = '';

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = '';
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  ngOnInit(): void {
    this.newGame();
  }

  makeAMove() {
    this.xIsNext;
  }
}
