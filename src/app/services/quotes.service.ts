import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class QuotesService {

  constructor(private afDB: AngularFireDatabase) { }

  getQuotes() {
    //console.log('Passer par Quotes');
    //return this.afDB.list('quotes').valueChanges();
    return this.afDB.list('quotes').snapshotChanges().map(quotes => quotes.map(quote =>({keys: quote.key, ...quote.payload.val()})));
  }
  createQuote(quote) {
   return this.afDB.list('quotes').push(quote);
  }

}
