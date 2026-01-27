import { Component, effect, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { ProductService } from '../../product-service';
import { RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-list-pro',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './list-pro.html',
  styleUrl: './list-pro.css',
})
export class ListPro {

  productsService = inject(ProductService);

  products = signal<any[]>([]);

  constructor() {
    effect (() =>{
      this.loadProducts();
    })
  }

  async loadProducts() {
    const res = await firstValueFrom(this.productsService.getProducts());
    console.log('api response', res);
    this.products.set(res);
  }

  async deleteProduct(id: string) {
    await firstValueFrom(this.productsService.deleteProduct(id));
    this.loadProducts();
  }
}


  
