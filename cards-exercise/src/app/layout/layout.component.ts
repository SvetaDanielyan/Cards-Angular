import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Input() cards:any[] = [];
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.cards);
  }

  deleteCardFunc(id: string) {
    this.delete.emit(id);
  }
}
