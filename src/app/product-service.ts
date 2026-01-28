import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  deleteService(data: any) {
    throw new Error('Method not implemented.');
  }
  http = inject(HttpClient);

 

  getProductss() {
    return this.http.get<any>('http://dummyjson.com/products');
  }

  getUsers() {
    return this.http.get<any>('https://dummyjson.com/users');
  }

  getCart() {
    return this.http.get<any>('https://dummyjson.com/carts/1');
  }

  banklogin(payload: any) {
    return this.http.get<any>(`https://ifsc.razorpay.com/${payload.ifscCode}`);
  }

  login(payload: any) {
    return this.http.post<any>('https://dummyjson.com/auth/login', payload);
  }

  addProduct(payload: any) {
    return this.http.post<any>('https://dummyjson.com/products/add', payload);
  }

 
  getProducts() {
  return this.http.get<any>('http://localhost:3000/products');
}

addProducts(data: any) {
  return this.http.post<any>('http://localhost:3000/products', data);
}

deleteProduct(id: string) {
  return this.http.delete<any>(`http://localhost:3000/products/${id}`);
}

getProductById(id: string) {
  return this.http.get<any>(`http://localhost:3000/products/${id}`);
}

updateProduct(id: string, data: any) {
  return this.http.put<any>(`http://localhost:3000/products/${id}`, data);
}

}
