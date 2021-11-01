import { Component } from '@angular/core';
import { Helper } from './helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Helper],
})
export class AppComponent {
  title = 'cards-exercise';
  cards: any[] = [];

  ngOnInit(): void {}

  constructor(private helper: Helper) {}

  sortNumber() {
    this.cards.sort((a, b) => a.number - b.number);
  }

  addNewCard() {
    const card = {
      id: this.helper.createUUID(),
      number: this.getRandomNumber(),
    };
    this.cards.push(card);
  }

  deleteCard(id: string) {
    this.cards.forEach((card, index) => {
      if (card.id == id) this.cards.splice(index, 1);
    });
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10000);
  }
}
