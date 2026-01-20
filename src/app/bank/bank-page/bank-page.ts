import { Component, inject } from '@angular/core';
import { BankCard } from '../bank-card/bank-card';
import { ProductService } from '../../product-service';

@Component({
  selector: 'app-bank-page',
  imports: [BankCard],
  templateUrl: './bank-page.html',
  styleUrl: './bank-page.css',
})
export class BankPage {

  ProductService = inject(ProductService);
banklogin: any;

}
