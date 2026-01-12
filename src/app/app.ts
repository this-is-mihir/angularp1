import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = [
    {
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
      title: 'cumpus',
      description: 'Ultraboost 22 Shoes',
      price: 150,
    },
    {
      title: 'puma',
      description: 'Ultraboost 22 Shoes',
      price: 150,
    },
  ];
}
