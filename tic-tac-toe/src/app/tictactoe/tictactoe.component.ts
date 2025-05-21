import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tictactoe',
  imports: [SquareComponent, NgIf, NgFor],
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

  makeAMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    return this.caculateWinner();
  }

  caculateWinner() {
    const winCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCombo.length; i++) {
      const [a, b, c] = winCombo[i];

      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
