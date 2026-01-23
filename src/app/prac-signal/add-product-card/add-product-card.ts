import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ProductService } from '../../product-service';

@Component({
  selector: 'app-add-product-card',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-card.html',
  styleUrl: './add-product-card.css',
})
export class AddProductCard {
productsService = inject(ProductService);
  fb = inject(FormBuilder);
  productData: any;


 
   productForm = this.fb.group({
  id: ['', Validators.required],
  title: ['', Validators.required],
  description: ['', Validators.required],
  category: ['', Validators.required],
  price: ['', Validators.required],
  discountPercentage: ['', Validators.required],
  rating: ['', Validators.required],
  stock: ['', Validators.required],
  brand: ['', Validators.required],
  sku: ['', Validators.required],
  weight: ['', Validators.required],
  thumbnail: ['', Validators.required],
});
products: any;

async onSubmit() {
  try {
    if (this.productForm.invalid) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    let data = this.productForm.value;   

    let response = await firstValueFrom(
      this.productsService.addProduct(data)
    );

    console.log('add product response:', response);

    // data store for card
     this.productData = response;

    alert('product added successfully');

  } catch (error: any) {
    console.error(error);
    if (error?.error?.message) {
      alert(error.error.message);
    }
  }
}





}
