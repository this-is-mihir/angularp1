import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../product-service';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-page',
  imports: [ProductCard],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  producutService = inject(ProductService);
   productss = toSignal(this.producutService.getProductss());
}
