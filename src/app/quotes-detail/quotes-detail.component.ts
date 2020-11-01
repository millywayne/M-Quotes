import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quotes'; 

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  @Input() quoty: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read: boolean) {
    this.isRead.emit(read);
  }
  upvote() {
    this.quoty.likes += 1;
  }
  downvote() {
    this.quoty.dislikes += 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
