import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ProductService } from '../../product-service';
import { AddProductCard } from "../add-product-card/add-product-card";

@Component({
  selector: 'app-add-product-page',
  imports: [ReactiveFormsModule, AddProductCard],
  templateUrl: './add-product-page.html',
  styleUrl: './add-product-page.css',
})
export class AddProductPage {
productsService = inject(ProductService);
  fb = inject(FormBuilder);

  products: any[] = [];

  productForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
  });

  constructor() {
    this.loadProducts();
  }

  async loadProducts() {
    const res = await firstValueFrom(this.productsService.getProducts());
    this.products = res;
  }

  async addProducts() {
    if (this.productForm.invalid) {
      alert('Fill all fields');
      return;
    }

    const data = this.productForm.value;

    const res = await firstValueFrom(
      this.productsService.addProducts(data)
    );

    this.products.push(res);
    this.productForm.reset();
  }

  async deleteProduct(id: string) {
    await firstValueFrom(this.productsService.deleteProduct(id));
    this.products = this.products.filter(p => p._id !== id);
  }

}

