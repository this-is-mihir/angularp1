import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  imports: [],
  templateUrl: './cart-card.html',
  styleUrl: './cart-card.css',
})
export class CartCard {
cart = input<any>(); 
}
