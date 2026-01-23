import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { async, firstValueFrom } from 'rxjs';
import { ProductService } from '../../product-service';
import { AddProductPage } from '../add-product-page/add-product-page';

@Component({
  selector: 'app-add-product-card',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-card.html',
  styleUrl: './add-product-card.css',
})
export class AddProductCard {
  

}
