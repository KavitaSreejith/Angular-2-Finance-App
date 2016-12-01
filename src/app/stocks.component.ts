import{Component} from '@angular/core';
import{StockService} from './stock.service';

@Component({
    selector : 'stocks',
    template: `<h2>Stocks</h2> 
    {{title}} 
    <ul [ngStyle]="{'color' : myColor, 'font-size' : mySize}">
        <li *ngFor = "let stock of stocks">
         {{stock}}
        </li>
    </ul>
 
    <hr>
  
    <ul *ngIf = "stockMarkets.length == 5" [ngClass]="{customClass:isColoBrown, centerClass: isCenter}">
      <li *ngFor = "let stockMarket of stockMarkets">
          {{stockMarket}}
      </li>
    </ul>

    <hr>
    <div [ngSwitch]="market" >
       <div *ngSwitchCase="'NYSE'"> New York Stock Exchange</div>
       <div *ngSwitchCase="'LSE'"> London Stock Exchange </div>
       <div *ngSwitchDefault> Could not find a match </div>
    
    </div> 
    `, styles: [`

         .customClass{
          color: brown;
      }

      .centerClass{
          text-align : center;
      }
    `
    ]  
})

export class StockComponent{ 
   market = 'HKSE';
   myColor = 'blue';
   isCenter = false;
   isColoBrown = true;
  title = 'List of stocks:';
  mySize = '200%'
 // stocks = ['Apple','IBM','GOOGLE','UDEMY'];
  stocks;
  showStockMarket = true;
stockMarkets = ['NYSE','NASDAQ','EURONEXT','HKSE','LSE'];

 constructor(stockService: StockService){
     this.stocks = stockService.getStocks();
}
}