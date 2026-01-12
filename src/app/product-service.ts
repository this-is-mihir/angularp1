import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    return of([{
      title: 'Nike',
      description: 'Dunk High Green Satin Sneakers',
      price: 180,
    },
    {
      title: 'Adidas',
      description: 'Ultraboost 22 Shoes',
      price: 150,
    },
    {
      title: 'cumpus222',
      description: 'Ultraboost 22 Shoes',
      price: 150,
    },
    ])
}
}