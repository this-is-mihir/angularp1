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
 paramsMap = toSignal(this.route.paramMap, {  //initialvalue null set 
  initialValue: null,
});
  productId = computed(() => this.paramsMap()?.get('id')); //add ? mark 

  productForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
  });
  

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

    this.router.navigate(['/lists']);
  }



}

