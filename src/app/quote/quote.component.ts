import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Octavia E. Butler', 'You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it', "Caro", new Date(2020, 11, 25)),
    new Quote(2, 'Winston Churchill', 'Success is not final, failure is not fatal: it is the courage to continue that counts.', "Caro", new Date(2021, 1, 5)),
    new Quote(3, 'Helen Keller', 'Never bend your head. Always hold it high. Look the world straight in the eye.', "Caro", new Date(2019, 7, 7)),
    new Quote(4, 'Zig Ziglar', 'What you get by achieving your goals is not as important as what you become by achieving your goals.', "", new Date(2020, 12, 7)),
    new Quote(5, 'Amy Poehler​​', 'Limit your "always" and your "nevers".', "benny", new Date(2018, 10, 13)),
  ];
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].description}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  upvotes(index) {
    this.quotes[index].likes++;
  }
  downvotes(index) {
    this.quotes[index].unlikes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
