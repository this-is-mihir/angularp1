import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  ProductService = inject(ProductService);
 addProduct: any;
products: any;

  
}

