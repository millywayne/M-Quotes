import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from './quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Milly-Quotes';
  private _quotes: Quote[] = [
    new Quote(1, 'Milly', 'Regrets', 'Never regret anything that made you smile.', 'Mark Twain', new Date(2020, 2, 1), 0, 0),
    new Quote(2, 'Deina', 'Rise', 'And still, I rise.', 'Maya Angelou', new Date(2020, 2, 3), 0, 0),
    new Quote(3, 'Morris', 'Change the game', 'Change the game, don’t let the game change you.', 'Macklemore', new Date(2020, 4, 3), 0, 0),
    new Quote(4, 'Talia', 'Code and people', 'Programs must be written for people to read, and only incidentally for machines to execute.', 'Harold Abelson', new Date(2020, 5, 7), 0, 0),
    new Quote(5, 'Mike', 'Normality is a paved road:', 'Normality is a paved road: it’s comfortable to walk but no flowers grow.', 'Vincent van Gogh', new Date(2020, 5, 17), 0, 0),
    new Quote(6, 'Stacy', 'The true meaning of life', 'The true meaning of life is to plant trees, under whose shade you do not expect to sit.', 'Nelson Henderson', new Date(2019, 7, 15), 0, 0)
  ];
  public get quotes(): Quote[] {
    return this._quotes;
  }
  public set quotes(value: Quote[]) {
    this._quotes = value;
  }
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote) {
    let arraysize = this.quotes.length;
    quote.id = arraysize + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number) {
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }

    }
  }

  displayInfo(index: string | number) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
