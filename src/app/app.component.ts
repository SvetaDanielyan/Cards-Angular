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
    this.cards = this.cards.filter((card) => card.id != id);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10000);
  }
}
