import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cards-exercise';
  defaultCards: any[] = [];

  ngOnInit(): void {}

  constructor() {}

  sortCardNums() {
    this.defaultCards.sort((a, b) => a.cardNum - b.cardNum);
  }

  addNewCard() {
    const card = {
      id: this.createUUID(),
      cardNum: this.getRandomNumber(),
    };
    this.defaultCards;
    this.defaultCards.push(card);
  }

  deleteCard(id: string) {
    this.defaultCards.forEach((card, index) => {
      if (card.id == id) this.defaultCards.splice(index, 1);
    });
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10000);
  }

  createUUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }
}
