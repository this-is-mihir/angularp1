import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../product-service';
import { CartCard } from "../cart-card/cart-card";

@Component({
  selector: 'app-cart-page',
  imports: [CartCard],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  producutService = inject(ProductService);
  cart = toSignal(this.producutService.getCart());
}
