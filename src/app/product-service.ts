import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

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

getProductss(){
  return this.http.get<any>('http://dummyjson.com/products');
}

getUsers(){
  return this.http.get<any>('https://dummyjson.com/users');
}

getCart(){
  return this.http.get<any>('https://dummyjson.com/carts/1');
}
}