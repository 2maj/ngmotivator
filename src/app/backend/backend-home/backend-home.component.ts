import { Component, OnInit } from '@angular/core';
import {QuotesService} from '../../services/quotes.service';


@Component({
  selector: 'app-backend-home',
  templateUrl: './backend-home.component.html',
  styleUrls: ['./backend-home.component.css']
})
export class BackendHomeComponent implements OnInit {
  constructor(private quotesService: QuotesService) {}

  onQuoteCreated(quote) {
    console.log('quote received !', quote);
    //on utilise le service
    let addedQuotes = this.quotesService.createQuote({
      firstname: quote.value.firstname,
      lastname: quote.value.lastname,
      text: quote.value.quote
    });
    console.log('le retour ', addedQuotes);
  }

  ngOnInit() {
  }

}
