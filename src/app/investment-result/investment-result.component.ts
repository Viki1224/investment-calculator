import { Component, Input, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  // results: any;
  constructor(public investmentService: InvestmentService) {
    // this.results = this.investmentService.resultData;
    // console.log(this.results);
  }
  get results() {
    return this.investmentService.resultData;
  }
}
