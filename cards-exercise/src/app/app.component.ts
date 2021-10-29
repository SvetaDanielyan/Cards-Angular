import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards-exercise';

  defaultCards = this.generateDefaultCardIds();

  getRandomInt() {
    return Math.floor(Math.random() * 10000);
  }

  sortRandomInts() {
    this.defaultCards.sort((a, b) => a - b);
  }

  addNewCard() {
    this.defaultCards.push(Math.floor(this.getRandomInt()));
  }

  generateDefaultCardIds() {
    let res = [];
    for (let i = 0; i < 4; i++) {
      res.push(Math.floor(this.getRandomInt()));
    }
    return res;
  }
}
