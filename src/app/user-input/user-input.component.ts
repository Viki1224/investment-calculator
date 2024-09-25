import { Component, Output, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResult } from '../app.model';
import { signal } from '@angular/core';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(public investmentService: InvestmentService) {}
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('10');
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredAnnualInvestment.set('0');
    this.enteredInitialInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');
  }
}
