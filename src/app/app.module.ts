import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// le routage
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';

// services

import { QuotesService } from './services/quotes.service';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { BackendQuotesComponent } from './backend/backend-quotes/backend-quotes.component';

const CONFIG: FirebaseAppConfig = {
  apiKey: 'AIzaSyBgESN0htVO9u6VQif45FrQU8yrmE3yBJY',
  authDomain: 'motivator-mht.firebaseapp.com',
  databaseURL: 'https://motivator-mht.firebaseio.com',
  projectId: 'motivator-mht',
  storageBucket: 'motivator-mht.appspot.com',
  messagingSenderId: '209809022339'
};

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: QuotesComponent },
  { path: 'quote/:id', component: QuoteDetailsComponent },
  { path: 'admin', component: BackendHomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    QuoteDetailsComponent,
    BackendHomeComponent,
    BackendQuotesComponent
  ],
  imports: [
    //Ajout des modules ici
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
