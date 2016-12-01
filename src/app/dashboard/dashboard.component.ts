import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    this.getAllStocks();
  }

   constructor(private stockService: StockService) { 

   }

getAllStocks(){
  this.stockService.getStocksApi()
  .subscribe(
    data => console.log(JSON.stringify(data)),
    error => console.log('Server Error')
  );

}
}
