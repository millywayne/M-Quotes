
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './quotes';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Output() emitQuote = new EventEmitter()
  quotesWords: string
  quotesEditor: string
  quotesAuthor: string
  quotesDate: number
  theWords: any

  submitQuote() {
    this.theWords = new Quote(this.quotesEditor, this.quotesAuthor, this.quotesWords)
    this.quotesWords = ''
    this.quotesAuthor = ''
    this.quotesEditor = ''
    this.emitQuote.emit(this.theWords)
  }



  constructor() { }

  ngOnInit() {
  }

}

