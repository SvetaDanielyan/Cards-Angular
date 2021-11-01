import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import {CardComponent} from "../card"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() addcard = new EventEmitter();
 @Output() sortCards = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addCardFunc(e: any) {
    this.addcard.emit(e);
  }

  sortCardsFunc(e:any){
    this.sortCards.emit(e);
  }
}
