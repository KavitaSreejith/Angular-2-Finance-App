import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StockComponent } from './stocks.component';
import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import { HighlightDirective } from './highlight.directive';
import {StockService} from './stock.service';
import { DateFormatterPipe } from './date-formatter.pipe';
import {routing} from  './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BondsDirective } from './bonds.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent, StockComponent, StockDirectiveDirective, HighlightDirective, DateFormatterPipe, DashboardComponent, BondsDirective  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
