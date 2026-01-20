import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from './product-service';

import { Navbar } from './navbar/navbar';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar , ReactiveFormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  producutService = inject(ProductService);
  products = toSignal(this.producutService.getProducts());
}
