import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './product-card/product-card';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  producutService = inject(ProductService);
  products = toSignal(this.producutService.getProducts());
}
