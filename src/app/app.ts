import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './product-card/product-card';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from './product-service';
import { UserCard } from './user-card/user-card';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  producutService = inject(ProductService);
  products = toSignal(this.producutService.getProducts());

}
