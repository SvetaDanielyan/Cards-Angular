import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardNum:any;
  @Output() delete = new EventEmitter();

  ngOnInit(): void {
    console.log(this.cardNum);
  }

  deleteCardFunc() {
    this.delete.emit();
  }
}