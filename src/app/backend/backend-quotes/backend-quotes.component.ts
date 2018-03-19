import { Component, OnInit } from '@angular/core';
import { QuotesService} from '../../services/quotes.service';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';

@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {
  quotes$
  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotes$ = this.quotesService.getQuotes();
  }
  deleteQuote(quote){
    //console.log('delete quote ', quote);
    this.quotesService.deleteQuoteById(quote.keys);
  }
  showQuoteDetails(quote) {
    console.log('quote ', quote);
    //this.router.navigate(['/quote', quote.keys]);
  }

}
