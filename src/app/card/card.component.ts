import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() number: any;
  @Output() delete = new EventEmitter();

  ngOnInit(): void {
  }

  deleteCardFunc() {
    this.delete.emit();
  }
}
