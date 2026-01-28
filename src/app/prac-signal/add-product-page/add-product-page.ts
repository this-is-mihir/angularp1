import { Component, computed, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ProductService } from '../../product-service';
import { AddProductCard } from "../add-product-card/add-product-card";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { toSignal } from '@angular/core/rxjs-interop';

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
  router = inject(Router);
  route = inject(ActivatedRoute); 
 paramsMap = toSignal(this.route.paramMap);
  productId = computed(() => this.paramsMap()?.get('id')); //add ? mark 
  isEditMode = computed(() => !!this.productId());

  productForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
  });
  
  constructor() {
  effect(async () => {
      if (this.isEditMode() && this.productId()) {
        const res = await firstValueFrom(
          this.productsService.getProductById(this.productId()!)
        )
        this.productForm.patchValue(res);
      }
  })
  }

  async saveProducts() {
    if (this.productForm.invalid) {
      alert('Fill all fields');
      return;
    }

    const data = this.productForm.value;
    const API = this.isEditMode() ? this.productsService.updateProduct(this.productId()!, data) : this.productsService.addProducts(data);

    const res = await firstValueFrom(API);

    this.products.push(res);
    this.productForm.reset();

    this.router.navigate(['/lists']);
  }



}

